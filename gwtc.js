(function ( backendhost, backendver ) {
    'use strict';
      Lampa.Template.add('settings_pva_sync_menu1', "<div>\n           </div>");
      Lampa.SettingsApi.addParam({
        component: 'account',
        param: {
          name: 'pva_sync_menu1',
          type: 'static', //доступно select,input,trigger,title,static
          default: ''
        },
        field: {
          name: Lampa.Lang.translate('settings_cub_sync'),
        },
        onRender: function (item) {
          item.on('hover:enter', function () {          
            Lampa.Settings.create('pva_sync_menu1');
            Lampa.Controller.enabled().controller.back = function(){
              Lampa.Settings.create('account');
            }
          })
        }
      });
Lampa.SettingsApi.addParam({
        component: 'pva_sync_menu1',
        param: {
          name: 'pva_timeline',
          type: 'trigger', //доступно select,input,trigger,title,static
          default: false
        },
        field: {
          name: 'Синхронизация таймкодов', 
          description: 'Синхронизация таймкодов, требуется аккаут CUB'
        },
        onChange: function (value) {
          if (value == 'true') { Lampa.Storage.set('timeline_last_update_time', 0); startTimecode(); } else { startTimecode(true); }
        }
});

    var Timecode = function () {
      this.network = new Lampa.Reguest();
      this.error = 0;
      this.viewed = Lampa.Storage.cache('file_view_sync', 1000, {});
      var _this = this;

      this.init = function () {
        if (Lampa.Account.hasPremium()) { Lampa.Noty.show('Timeline - не для CUB Premium'); return; }
        this.account = Lampa.Storage.get('account', '{}');
        if (this.account == undefined || this.account.id == undefined || this.account.profile == undefined || this.account.profile.id == undefined) {
          Lampa.Noty.show('Timeline - нужен аккаунта CUB'); return;
        }
        this.enable = true;
        this.last_update_time = Lampa.Storage.get('timeline_last_update_time', 0);
        Lampa.Listener.follow('full', this.fullListener);
        Lampa.Timeline.listener.follow('update', this.updateTimeline);
        Lampa.Player.listener.follow('destroy', this.destroyPlayer);
        _this.update(60*1000);
      }

      this.fullListener = function (e) {
        if (e.type == 'complite') _this.update(60*60*1000);
      }

      this.updateTimeline = function (e) {
        _this.viewed[e.data.hash] = e.data.road;
        Lampa.Storage.set('file_view_sync', _this.viewed, true);
        if (Lampa.Storage.field('player') != 'inner') _this.add();        
      }

      this.destroyPlayer = function (e) {
        _this.add();
      }

      this.url = function (method) {
        var url = backendhost + '/lampa/timeline/' + method;
        if (this.account.id) url = Lampa.Utils.addUrlComponent(url, 'id=' + encodeURIComponent(this.account.id));
        if (this.account.profile.id) url = Lampa.Utils.addUrlComponent(url, 'profile=' + encodeURIComponent(this.account.profile.id));
        if (this.account.email) url = Lampa.Utils.addUrlComponent(url, 'email=' + encodeURIComponent(this.account.email));
        url = Lampa.Utils.addUrlComponent(url, 'start=' + Lampa.Storage.get('', 0));
        return url;
      }

      this.add = function () {
        if (!this.enable || this.error > 3) return;
        var url = this.url('add');
        var data_sync = [];
        for (var i in _this.viewed) {
          data_sync.push({ id: i, data: _this.viewed[i] });
        }
        this.network.silent(url, function () { 
          for (var i in data_sync) { delete _this.viewed[data_sync[i].id]; }
          Lampa.Storage.set('file_view_sync', _this.viewed, true);
        }, function (a, c) { this.error++; }, JSON.stringify(data_sync) );
      }

      this.update = function (timeout) {
        if (!this.enable || this.error > 3 || this.last_update_time + timeout > Date.now()) return;
        this.last_update_time = Date.now();
        var url = this.url('all');
        this.network.silent(url, function (result) {
          if (result.error) return;
          if (result.result) {
            if (result.timelines && Lampa.Arrays.getKeys(result.timelines).length > 0) {
              var viewed = Lampa.Storage.cache('file_view', 10000, {});          
              for (var i in result.timelines) {
                var time = result.timelines[i];
                if (!Lampa.Arrays.isObject(time)) continue;
                viewed[i] = time;
                Lampa.Arrays.extend(viewed[i], {
                  duration: 0,
                  time: 0,
                  percent: 0
                });
              }
              Lampa.Storage.set('file_view', viewed, true);
            }
            Lampa.Storage.set('timeline_last_update_time', _this.last_update_time);
          }
        }, function (a, c) { this.error++; } );
      }

      this.destroy = function () {
        Lampa.Listener.remove('full', this.fullListener);
        Lampa.Timeline.listener.remove('update', this.updateTimeline);
        Lampa.Player.listener.remove('destroy', this.destroyPlayer);
        this.enable = false;
        this.network.clear();        
      };

      return this;
    }

    function startTimecode(destroy) {
      if (window.plugin_FilmixPVA.mini) return;    
      if (!destroy) {
        if (Lampa.Storage.get('pva_timeline', false)) { 
          if (Lampa.Timeline.listener) {
            if (!Lampa.timecode) Lampa.timecode = new Timecode();
            Lampa.timecode.init();
          }
        };
      } else if (Lampa.timecode) {
        Lampa.timecode.destroy(); 
      }
    }

        if (!window.plugin_FilmixPVA) {
      var app_js = window.localStorage.getItem('app.js', '');
      if (app_js != undefined && app_js.length > 0) { window.localStorage.setItem('app.js', ''); console.log('DB', 'localStorage', 'delete', 'app.js'); }
      startTimecode();
    }
  })();
