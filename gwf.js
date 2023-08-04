(function ( backendhost, backendver ) {
    'use strict';
	
	function addSettings() {
      ///////FILMIX/////////
      var network = new Lampa.Reguest();
      var api_url = 'http://filmixapp.cyou/api/v2/';
      var user_dev = '?user_dev_apk=2.0.9&user_dev_id=' + Lampa.Utils.uid(16) + '&user_dev_name=Xiaomi&user_dev_os=12&user_dev_vendor=Xiaomi&user_dev_token=';
      var ping_auth;
      Lampa.Params.select('filmix_token', '', '');
      Lampa.Template.add('settings_filmix', "<div>\n        <div class=\"settings-param selector\" data-name=\"filmix_token\" data-type=\"input\" placeholder=\"#{filmix_param_placeholder}\">\n            <div class=\"settings-param__name\">#{filmix_param_add_title}</div>\n            <div class=\"settings-param__value\"></div>\n            <div class=\"settings-param__descr\">#{filmix_param_add_descr}</div>\n        </div>\n        <div class=\"settings-param selector\" data-name=\"filmix_add\" data-static=\"true\">\n            <div class=\"settings-param__name\">#{filmix_param_add_device}</div>\n        </div>\n    </div>");

      function addSettingsFilmix() {
        Lampa.Settings.main().render().find('[data-component="filmix"]').remove();
        if (Lampa.Settings.main && !Lampa.Settings.main().render().find('[data-component="filmix"]').length) {
          var field = $("<div class=\"settings-folder selector\" data-component=\"filmix\">\n                <div class=\"settings-folder__icon\">\n                    <svg height=\"57\" viewBox=\"0 0 58 57\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M20 20.3735V45H26.8281V34.1262H36.724V26.9806H26.8281V24.3916C26.8281 21.5955 28.9062 19.835 31.1823 19.835H39V13H26.8281C23.6615 13 20 15.4854 20 20.3735Z\" fill=\"white\"/>\n                    <rect x=\"2\" y=\"2\" width=\"54\" height=\"53\" rx=\"5\" stroke=\"white\" stroke-width=\"4\"/>\n                    </svg>\n                </div>\n                <div class=\"settings-folder__name\">Filmix</div>\n            </div>");
          // Lampa.Settings.main().render().find('[data-component="more"]').after(field);
          Lampa.Settings.main().render().find('[data-component="more"]').last().after(field);
          Lampa.Settings.main().update();
        }
      }

      if (window.appready) addSettingsFilmix(); else {
        Lampa.Listener.follow('app', function (e) {
          if (e.type == 'ready') addSettingsFilmix();
        });
      }

      Lampa.Storage.listener.follow('change', function (e) {
        if (e.name == 'filmix_token') {
          if (e.value) checkPro(e.value);else {
            Lampa.Storage.set("filmix_status", {});
            showStatus();
          }
        }
      });

      Lampa.Settings.listener.follow('open', function (e) {
        if (e.name == 'filmix') {
          e.body.find('[data-name="filmix_add"]').unbind('hover:enter').on('hover:enter', function () {
            var user_code = '';
            var user_token = '';
            var modal = $('<div><div class="broadcast__text">' + Lampa.Lang.translate('filmix_modal_text') + '</div><div class="broadcast__device selector" style="text-align: center">' + Lampa.Lang.translate('filmix_modal_wait') + '...</div><br><div class="broadcast__scan"><div></div></div></div></div>');
            Lampa.Modal.open({
              title: '',
              html: modal,
              onBack: function onBack() {
                Lampa.Modal.close();
                Lampa.Controller.toggle('settings_component');
                clearInterval(ping_auth);
              },
              onSelect: function onSelect() {
                Lampa.Utils.copyTextToClipboard(user_code, function () {
                  Lampa.Noty.show(Lampa.Lang.translate('filmix_copy_secuses'));
                }, function () {
                  Lampa.Noty.show(Lampa.Lang.translate('filmix_copy_fail'));
                });
              }
            });
            ping_auth = setInterval(function () {
              checkPro(user_token, function () {
                Lampa.Modal.close();
                clearInterval(ping_auth);
                Lampa.Storage.set("filmix_token", user_token);
                e.body.find('[data-name="filmix_token"] .settings-param__value').text(user_token);
                Lampa.Controller.toggle('settings_component');
              });
            }, 10000);
            network.clear();
            network.timeout(10000);
            network.quiet(api_url + 'token_request' + user_dev, function (found) {
              if (found.status == 'ok') {
                user_token = found.code;
                user_code = found.user_code;
                modal.find('.selector').text(user_code);
              } else {
                Lampa.Noty.show(found);
              }
            }, function (a, c) {
              Lampa.Noty.show(network.errorDecode(a, c));
            });
          });
          showStatus();
        }
        setTimeout(function () { Lampa.Settings.main().render().find('[data-component="filmix"]').removeClass('hide'); }, 0.1 * 1000);
      });

      function showStatus() {
        var status = Lampa.Storage.get("filmix_status", '{}');
        var info = Lampa.Lang.translate('filmix_nodevice');

        if (status.login) {
          if (status.is_pro) info = status.login + ' - PRO ' + Lampa.Lang.translate('filter_rating_to') + ' - ' + status.pro_date;else if (status.is_pro_plus) info = status.login + ' - PRO_PLUS ' + Lampa.Lang.translate('filter_rating_to') + ' - ' + status.pro_date;else info = status.login + ' - NO PRO';
        }

        var field = $(Lampa.Lang.translate("\n            <div class=\"settings-param\" data-name=\"filmix_status\" data-static=\"true\">\n                <div class=\"settings-param__name\">#{title_status}</div>\n                <div class=\"settings-param__value\">".concat(info, "</div>\n            </div>")));
        $('.settings [data-name="filmix_status"]').remove();
        $('.settings [data-name="filmix_add"]').after(field);
      }

      function checkPro(token, call) {
        network.clear();
        network.timeout(10000);
        network.silent(api_url + 'user_profile' + user_dev + token, function (json) {
          if (json) {
            if (json.user_data) {
              Lampa.Storage.set("filmix_status", json.user_data);
              if (call) call();
            } else {
              Lampa.Storage.set("filmix_status", {});
            }

            showStatus();
          }
        }, function (a, c) {
          Lampa.Noty.show(network.errorDecode(a, c));
        });
      }

      if (window.plugin_FilmixPVA.mini) return;    

      Lampa.Template.add('settings_pva_sync_menu', "<div>\n           </div>");
      Lampa.SettingsApi.addParam({
        component: 'filmix',
        param: {
          name: 'pva_sync_menu',
          type: 'static', //доступно select,input,trigger,title,static
          default: ''
        },
        field: {
          name: Lampa.Lang.translate('settings_cub_sync'),
        },
        onRender: function (item) {
          item.on('hover:enter', function () {          
            Lampa.Settings.create('pva_sync_menu');
            Lampa.Controller.enabled().controller.back = function(){
              Lampa.Settings.create('filmix');
            }
          })
        }
      });

      Lampa.SettingsApi.addParam({
        component: 'pva_sync_menu',
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

      Lampa.SettingsApi.addParam({
        component: 'pva_sync_menu',
        param: {
          name: 'pva_backup',
          type: 'static', //доступно select,input,trigger,title,static
          default: ''
        },
        field: {
          name: Lampa.Lang.translate('settings_cub_backup'),
          description: 'Бэкап настроек для профиля, требуется аккаут CUB'
        },
        onRender: function (item) {
          item.on('hover:enter', function () {          
            var account = Lampa.Storage.get('account', '{}');
            if (account.id && account.profile.id) {
              Lampa.Select.show({
                title: Lampa.Lang.translate('settings_cub_backup'),
                items: [{
                  title: Lampa.Lang.translate('settings_cub_backup_export'),
                  "export": true,
                  selected: true
                }, {
                  title: Lampa.Lang.translate('settings_cub_backup_import'),
                  "import": true
                }, {
                  title: Lampa.Lang.translate('cancel')
                }],
                onSelect: function onSelect(a) {
                  if (a["export"]) {
                    Lampa.Select.show({
                      title: Lampa.Lang.translate('sure'),
                      items: [{
                        title: Lampa.Lang.translate('confirm'),
                        "export": true,
                        selected: true
                      }, {
                        title: Lampa.Lang.translate('cancel')
                      }],
                      onSelect: function onSelect(a) {
                        if (a["export"]) {
                          var url = backendhost + '/lampa/backup/export' + '?id=' + encodeURIComponent(account.id) + '&profile=' + encodeURIComponent(account.profile.id) + '&email=' + encodeURIComponent(account.email);
                          var file = new File([JSON.stringify(localStorage)], "backup.json", { type: "text/plain" });
                          var formData = new FormData();
                          formData.append("file", file);
                          $.ajax({
                            url: url,
                            type: 'POST',
                            data: formData,
                            async: true,
                            cache: false,
                            contentType: false,
                            enctype: 'multipart/form-data',
                            processData: false,
                            // headers: { token: account.token },
                            success: function success(result) {
                              if (result.result) {
                                Lampa.Noty.show(Lampa.Lang.translate('account_export_secuses'));
                              } else Lampa.Noty.show(Lampa.Lang.translate('account_export_fail'));
                            },
                            error: function error() {
                              Lampa.Noty.show(Lampa.Lang.translate('account_export_fail'));
                            }
                          });
                        }
                        Lampa.Controller.toggle('settings_component');
                      },
                      onBack: function onBack() {
                        Lampa.Controller.toggle('settings_component');
                      }
                    });
                  } else if (a["import"]) {
                    var url = backendhost + '/lampa/backup/import' + '?id=' + encodeURIComponent(account.id) + '&profile=' + encodeURIComponent(account.profile.id) + '&email=' + encodeURIComponent(account.email);
                    $.ajax({
                      url: url,
                      type: 'GET',
                      async: true,
                      cache: false,
                      contentType: false,
                      enctype: 'application/x-www-form-urlencoded',
                      processData: false,
                      // headers: { token: account.token },
                      success: function success(result) {
                        if (result.result) {
                          if (result.data) {
                            var data = Lampa.Arrays.decodeJson(result.data, {});
                            var keys = Lampa.Arrays.getKeys(data);
                            for (var i in data) {
                              localStorage.setItem(i, data[i]);
                            }
                            Lampa.Noty.show(Lampa.Lang.translate('account_import_secuses') + ' - ' + Lampa.Lang.translate('account_imported') + ' (' + keys.length + ') - ' + Lampa.Lang.translate('account_reload_after'));
                            setTimeout(function () {
                              window.location.reload();
                            }, 5000);
                          } else Lampa.Noty.show(Lampa.Lang.translate('nodata'));
                        } else Lampa.Noty.show(Lampa.Lang.translate('account_import_fail'));
                      },
                      error: function error() {
                        Lampa.Noty.show(Lampa.Lang.translate('account_import_fail'));
                      }
                    });
                    Lampa.Controller.toggle('settings_component');
                  } else {
                    Lampa.Controller.toggle('settings_component');
                  }
                },
                onBack: function onBack() {
                  Lampa.Controller.toggle('settings_component');
                }
              });
            }
          })
        }
      });

      Lampa.Template.add('settings_pva_sources_menu', "<div>\n           </div>");
      Lampa.SettingsApi.addParam({
        component: 'filmix',
        param: {
          name: 'pva_sources_menu',
          type: 'static', //доступно select,input,trigger,title,static
          default: ''
        },
        field: {
          name: 'Источники',
        },
        onRender: function (item) {
          item.on('hover:enter', function () {          
            Lampa.Settings.create('pva_sources_menu');
            Lampa.Controller.enabled().controller.back = function(){
              Lampa.Settings.create('filmix');
            }
          })
        }
      });

      Lampa.SettingsApi.addParam({
        component: 'pva_sources_menu',
        param: {
          name: 'pva_sources',
          type: 'trigger', //доступно select,input,trigger,title,static
          default: false
        },
        field: {
          name: 'Включить меню "Источник"',
          description: 'Для изменений требуется перезапуск'
        },
        onChange: function (value) {
        }
      });

      Lampa.SettingsApi.addParam({
        component: 'pva_sources_menu',
        param: {
          name: 'pva_sources_kp',
          type: 'trigger', //доступно select,input,trigger,title,static
          default: false
        },
        field: {
          name: 'Поиск на KP',
        },
        onChange: function (value) {
        }
      });

      Lampa.SettingsApi.addParam({
        component: 'pva_sources_menu',
        param: {
          name: 'pva_sources_kinovod',
          type: 'trigger', //доступно select,input,trigger,title,static
          default: false
        },
        field: {
          name: 'Поиск на KinoVOD',
        },
        onChange: function (value) {
        }
      });

      Lampa.SettingsApi.addParam({
        component: 'pva_sources_menu',
        param: {
          name: 'pva_sources_hdrezka',
          type: 'trigger', //доступно select,input,trigger,title,static
          default: false
        },
        field: {
          name: 'Поиск на HDRezka',
        },
        onChange: function (value) {
        }
      });

    }

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
        url = Lampa.Utils.addUrlComponent(url, 'start=' + Lampa.Storage.get('timeline_last_update_time', 0));
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

    function startSources(destroy) {
      if (window.plugin_FilmixPVA.mini || window.plugin_sources_ready) return;    
      if (Lampa.Storage.get('pva_sources', false)) { 
        var ScriptItem = 'https://greywe6.github.io/gws.js';
        Lampa.Utils.putScriptAsync([ScriptItem], function () { }, function (u) { console.log('Plugins', 'error:', ScriptItem); }, function (u) { console.log('Plugins', 'include:', ScriptItem); }, false );
      }
    }

    if (!window.plugin_FilmixPVA) {
      var app_js = window.localStorage.getItem('app.js', '');
      if (app_js != undefined && app_js.length > 0) { window.localStorage.setItem('app.js', ''); console.log('DB', 'localStorage', 'delete', 'app.js'); }
      startPlugin();
      addSettings();
      startTimecode();
      startSources();
    }

})( 'http://back.freebie.tom.ru', 'v=1924' );
