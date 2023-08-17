Date.now||(Date.now=function(){return(new Date.getTime())}),function(){"use strict";for(var t=["webkit","moz"],e=0;e<t.length&&!window.requestAnimationFrame;++e){var i=t[e];window.requestAnimationFrame=window[i+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i+"CancelAnimationFrame"]||window[i+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var s=0;window.requestAnimationFrame=function(t){var e=Date.now(),i=Math.max(s+16,e);return setTimeout(function(){t(s=i)},i-e)},window.cancelAnimationFrame=clearTimeout}}(),function(t){t.snowfall=function(e,i){function s(s,n,a,r){this.x=s,this.y=n,this.size=a,this.speed=r,this.step=0,this.stepSize=h(1,10)/100,i.collection&&(this.target=m[h(0,m.length-1)]);var p=null;i.image?(p=document.createElement("img"),p.src=i.image):(p=document.createElement("div"),t(p).css({background:i.flakeColor})),t(p).attr({"class":"snowfall-flakes"}).css({width:this.size,height:this.size,position:i.flakePosition,top:this.y,left:this.x,fontSize:0,zIndex:i.flakeIndex}),t(e).get(0).tagName===t(document).get(0).tagName?(t("body").append(t(p)),e=t("body")):t(e).append(t(p)),this.element=p,this.update=function(){if(this.y+=this.speed,this.y>l-(this.size+6)&&this.reset(),this.element.style.top=this.y+"px",this.element.style.left=this.x+"px",this.step+=this.stepSize,y===!1?this.x+=Math.cos(this.step):this.x+=y+Math.cos(this.step),i.collection&&this.x>this.target.x&&this.x<this.target.width+this.target.x&&this.y>this.target.y&&this.y<this.target.height+this.target.y){var t=this.target.element.getContext("2d"),e=this.x-this.target.x,s=this.y-this.target.y,n=this.target.colData;if(void 0!==n[parseInt(e)][parseInt(s+this.speed+this.size)]||s+this.speed+this.size>this.target.height)if(s+this.speed+this.size>this.target.height){for(;s+this.speed+this.size>this.target.height&&this.speed>0;)this.speed*=.5;t.fillStyle=o.flakeColor,void 0==n[parseInt(e)][parseInt(s+this.speed+this.size)]?(n[parseInt(e)][parseInt(s+this.speed+this.size)]=1,t.fillRect(e,s+this.speed+this.size,this.size,this.size)):(n[parseInt(e)][parseInt(s+this.speed)]=1,t.fillRect(e,s+this.speed,this.size,this.size)),this.reset()}else this.speed=1,this.stepSize=0,parseInt(e)+1<this.target.width&&void 0==n[parseInt(e)+1][parseInt(s)+1]?this.x++:parseInt(e)-1>0&&void 0==n[parseInt(e)-1][parseInt(s)+1]?this.x--:(t.fillStyle=o.flakeColor,t.fillRect(e,s,this.size,this.size),n[parseInt(e)][parseInt(s)]=1,this.reset())}(this.x+this.size>d-c||this.x<c)&&this.reset()},this.reset=function(){this.y=0,this.x=h(c,d-c),this.stepSize=h(1,10)/100,this.size=h(100*i.minSize,100*i.maxSize)/100,this.element.style.width=this.size+"px",this.element.style.height=this.size+"px",this.speed=h(i.minSpeed,i.maxSpeed)}}function n(){for(r=0;r<a.length;r+=1)a[r].update();p=requestAnimationFrame(function(){n()})}var a=[],o={flakeCount:35,flakeColor:"#ffffff",flakePosition:"absolute",flakeIndex:999999,minSize:1,maxSize:2,minSpeed:1,maxSpeed:5,round:!1,shadow:!1,collection:!1,collectionHeight:40,deviceorientation:!1},i=t.extend(o,i),h=function(t,e){return Math.round(t+Math.random()*(e-t))};t(e).data("snowfall",this);var r=0,l=t(e).height(),d=t(e).width(),c=0,p=0;if(i.collection!==!1){var f=document.createElement("canvas");if(f.getContext&&f.getContext("2d"))for(var m=[],w=t(i.collection),g=i.collectionHeight,r=0;r<w.length;r++){var u=w[r].getBoundingClientRect(),x=t("<canvas/>",{"class":"snowfall-canvas"}),z=[];if(u.top-g>0){t("body").append(x),x.css({position:i.flakePosition,left:u.left+"px",top:u.top-g+"px"}).prop({width:u.width,height:g});for(var v=0;v<u.width;v++)z[v]=[];m.push({element:x.get(0),x:u.left,y:u.top-g,width:u.width,height:g,colData:z})}}else i.collection=!1}for(t(e).get(0).tagName===t(document).get(0).tagName&&(c=25),t(window).bind("resize",function(){l=t(e)[0].clientHeight,d=t(e)[0].offsetWidth}),r=0;r<i.flakeCount;r+=1)a.push(new s(h(c,d-c),h(0,l),h(100*i.minSize,100*i.maxSize)/100,h(i.minSpeed,i.maxSpeed)));i.round&&t(".snowfall-flakes").css({"-moz-border-radius":i.maxSize,"-webkit-border-radius":i.maxSize,"border-radius":i.maxSize}),i.shadow&&t(".snowfall-flakes").css({"-moz-box-shadow":"1px 1px 1px #555","-webkit-box-shadow":"1px 1px 1px #555","box-shadow":"1px 1px 1px #555"});var y=!1;i.deviceorientation&&t(window).bind("deviceorientation",function(t){y=.1*t.originalEvent.gamma}),n(),this.clear=function(){t(".snowfall-canvas").remove(),t(e).children(".snowfall-flakes").remove(),cancelAnimationFrame(p)}},t.fn.snowfall=function(e){return"object"==typeof e||void 0==e?this.each(function(i){new t.snowfall(this,e)}):"string"==typeof e?this.each(function(e){var i=t(this).data("snowfall");i&&i.clear()}):void 0}}(jQuery);

(function () {
	'use strict';
	
	var version_modss = '3.0', API = 'http://api.lampa.stream/', type = '', jackets = {}, cards, ping_auth, manifest, menu_list = [], vip = false, user_id = '', uid = 'd75654a4d230e3daf215f7befc4a2684', IP, logged = false;
	
	var Modss = {
		init: function () {
			this.collections();
			this.sources();
			this.buttBack();
			this.radio();
			this.snow();
			
    	if (!window.FX) {
  			window.FX = {
  				max_qualitie: 480,
  				is_max_qualitie: false, 
  				auth: false
  			};
  		}
  		if(!IP) {
  		  $.ajax({
          url:'http://ip-api.com/json?fields=query',
          type:'get',
          dataType:'json'
        }).done(function(data) {
          IP = data.query;
        });
  		}
		},
		snow: function () {
		  $(document).snowfall(Lampa.Storage.field('mods_snow') == true ? {
        deviceorientation:true,
        round:true,
        maxSize:10,
        maxSpeed:5,
        flakeCount:30,
        flakeIndex:9
      } : 'clear');
		},
		radio: function () {
			var ico = '<svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="radioIconTitle" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000"> <title id="radioIconTitle">Radio</title> <path d="M5.44972845 6C2.18342385 9.2663046 2.18342385 14.7336954 5.44972845 18M8.59918369 8C6.46693877 10.1322449 6.46693877 13.8677551 8.59918369 16M18.5502716 18C21.8165761 14.7336954 21.8165761 9.2663046 18.5502716 6M15.4008163 16C17.5330612 13.8677551 17.5330612 10.1322449 15.4008163 8"/> <circle cx="12" cy="12" r="1"/> </svg>';
			var menu_item = $('<li class="menu__item selector" data-action="Radio_n"><div class="menu__ico">' + ico + '</div><div class="menu__text">' + Lampa.Lang.translate('title_radio') + '</div></li>');
			menu_item.on('hover:enter', function () {
				Lampa.Activity.push({
					url: API + 'r/record/',
					title: Lampa.Lang.translate('title_radio'),
					component: 'Radio_n',
					page: 1
				});
			});
			if (Lampa.Storage.get('mods_radio')) $('body').find('.menu .menu__list').eq(0).append(menu_item);
			else $('body').find('[data-action="Radio_n"]').remove();
		},
		
        sources: function () {
			var sources;
			if (Lampa.Params.values && Lampa.Params.values['source']) {
        sources = Object.assign({}, Lampa.Params.values['source']);
        sources.pub = 'PUB';
        sources.filmix = 'FILMIX';
      } else {
        sources = {
          'tmdb': 'TMDB',
          'cub': 'CUB',
          'pub': 'PUB',
          'filmix': 'FILMIX'
        };
      }

      Lampa.Params.select('source', sources, 'tmdb');
		},			
		collections: function () {
			var menu_item = $('<li class="menu__item selector" data-action="collection"><div class="menu__ico"><img src="./img/icons/menu/catalog.svg"/></div><div class="menu__text">' + Lampa.Lang.translate('title_collections') + '</div></li>');
			if (Lampa.Storage.get('mods_collection')) $('body').find('.menu .menu__list li:eq(3)').after(menu_item)
			else $('body').find('[data-action="collection"]').remove();
			menu_item.on('hover:enter', function () {
				var item = [{
				/*title: Lampa.Lang.translate('menu_collections')+' '+Lampa.Lang.translate('title_on_the')+ ' filmix',
					url: 'https://filmix.zone/playlists/rateup',
					source: 'filmix'
				}, {*/
						title: Lampa.Lang.translate('menu_collections') + ' ' + Lampa.Lang.translate('title_on_the') + ' rezka',
						url: 'http://hdrezka.co/collections/',
						source: 'rezka'
				}, {
						title: Lampa.Lang.translate('menu_collections') + ' ' + Lampa.Lang.translate('title_on_the') + ' kinopub',
						url: Pub.baseurl + 'v1/collections',
						source: 'pub'
				}];
				if (Lampa.Arrays.getKeys(Lampa.Storage.get('my_col')).length) {
					item.push({
						title: Lampa.Lang.translate('title_my_collections') + ' - ' + Lampa.Arrays.getKeys(Lampa.Storage.get('my_col')).length,
						url: Pub.baseurl + 'v1/collections',
						source: 'my_coll'
					});
				}
				Lampa.Select.show({
					title: Lampa.Lang.translate('menu_collections'),
					items: item,
					onSelect: function onSelect(a) {
						Lampa.Activity.push({
							url: a.url || '',
							sourc: a.source,
							source: Lampa.Storage.field('source'),
							title: a.title,
							card_cat: true,
							category: true,
							component: a.url ? 'collection' : 'collections',
							page: 1
						});
					},
					onBack: function onBack() {
						Lampa.Controller.toggle('content');
					}
				});
			});
		},
		Timer: function (tpl) {
      var self = this;
      self.tpl = tpl;
      self.startTime = 0;
      self.paused = true;
      self.msElapsed = 0;
      self.intervalId = null;
    
      self.start = function() {
        self.paused = false;
        self.startTime = Date.now();
        Lampa.Activity.active().activity.render().find(self.tpl).html('');
        self.intervalId = setInterval(function() {
          var curTime = Date.now();
          self.msElapsed = curTime - self.startTime;
          var sek = self.formatTime(self.msElapsed);
          Lampa.Activity.active().activity.render().find(self.tpl).html(sek);
        }, 100);
      };
      self.stop = function() {
        clearInterval(self.intervalId);
        self.intervalId = null;
        self.paused = true;
        return self.formatTime(self.msElapsed);
      };
      self.formatTime = function(ms) {
        var totalSeconds = Math.floor(ms / 1000);
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = totalSeconds % 60;
        var milliseconds = Math.floor((ms % 1000) / 10);
        var sec = seconds < 10 ? '0' + seconds : seconds;
        var milsec = milliseconds < 10 ? '0' + milliseconds : milliseconds;
        return sec+':'+milsec+' c';
      };
    },
		buttBack: function (pos) {
			if ((/iPhone|iPad|iPod|android|x11/i.test(navigator.userAgent) || (Lampa.Platform.is('android') && window.innerHeight < 1080)) && Lampa.Storage.get('mods_butt_back')) {
				$('body').find('.elem-mobile-back').remove();
				var position = Lampa.Storage.field('mods_butt_pos') == 'left' ? 'left: 0;transform: scaleX(-1);' : 'right: 0;';
				$('body').append('<div class="elem-mobile-back"><style>.elem-mobile-back {' + position + 'position: fixed;z-index:99999;top: 50%;width: 3em;height: 6em;background-image: url(../icons/player/prev.svg);background-repeat: no-repeat;background-position: 100% 50%;-webkit-background-size: contain;-moz-background-size: contain;-o-background-size: contain;background-size: contain;margin-top: -3em;font-size: .72em;display: block}</style><svg width="131" height="262" viewBox="0 0 131 262" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M131 0C58.6507 0 0 58.6507 0 131C0 203.349 58.6507 262 131 262V0Z" fill="white"/><path d="M50.4953 125.318C50.9443 124.878 51.4313 124.506 51.9437 124.183L86.2229 90.4663C89.5671 87.1784 94.9926 87.1769 98.3384 90.4679C101.684 93.7573 101.684 99.0926 98.3384 102.385L68.8168 131.424L98.4907 160.614C101.836 163.904 101.836 169.237 98.4907 172.531C96.817 174.179 94.623 175 92.4338 175C90.2445 175 88.0489 174.179 86.3768 172.531L51.9437 138.658C51.4313 138.335 50.9411 137.964 50.4953 137.524C48.7852 135.842 47.9602 133.626 48.0015 131.421C47.9602 129.216 48.7852 127.002 50.4953 125.318Z" fill="black"/></svg></div>');
				$(".elem-mobile-back").on("click", function () {
					Lampa.Activity.back();
				});
			}
		},
		last_view: function (data) {
			var episodes = Lampa.TimeTable.get(data);
			var viewed;
			episodes.forEach(function (ep) {
				var hash = Lampa.Utils.hash([ep.season_number, ep.episode_number, data.original_title].join(''));
				var view = Lampa.Timeline.view(hash);
				if (view.percent) viewed = {
					ep: ep,
					view: view
				};
			});
			if (viewed) {
				var ep = viewed.ep.episode_number;
				var se = viewed.ep.season_number;
				var last_view = 'S' + se + ':E' + ep;
				if ($('body').find('.full-start__buttons,.full-start-new__buttons').length) {
					$('.timeline, .card--last_view').remove();
					$('body').find('.full-start__poster,.full-start-new__poster').append("<div class='card--last_view' style='top:0.6em;right: -.5em;position: absolute;background: #1b7db9;color: #fff;padding: 0.3em 0.4em 0.4em;font-size: 1.2em;-webkit-border-radius: 0.3em;-moz-border-radius: 0.3em;border-radius: 0.3em;'><div style='float:left;margin:-4px 0 -4px -4px' class=''></div>" + last_view +"</div>");
					$('body').find('.timeline').append(Lampa.Timeline.render(viewed.view));
				}
				if ($('body').find('.filter--sort').length) $('body').find('.files__left .time-line, .card--last_view').remove();
			} else $('body').find('.timeline,.card--last_view').remove();
			if ($('body').find('.online').length == 0) $('.card--new_ser,.card--viewed').remove();
		},
		serialInfo: function (card) {
			if (Lampa.Storage.field('mods_serial_info') && card.source == 'tmdb' && card.seasons && card.last_episode_to_air) {
				var last_seria_inseason = card.last_episode_to_air.season_number;
				var air_new_episode = card.last_episode_to_air.episode_number;
				var next_episode = card.next_episode_to_air;
				var last_seria = next_episode && new Date(next_episode.air_date) <= Date.now() ? next_episode.episode_number : card.last_episode_to_air.episode_number;
				var new_ser;
				this.last_view(card);
				var count_eps_last_seas = card.seasons.find(function (eps) {
				 	return eps.season_number == last_seria_inseason;
				}).episode_count;
				
				if (card.next_episode_to_air) {
					var add_ = '<b>' + last_seria;
					var notices = Lampa.Storage.get('account_notice', []).filter(function (n) {
						return n.card_id == card.id;
					});
					if (notices.length) {
						var notice = notices.find(function (itm) {
						  return itm.episode == last_seria;
						});
						
						if (notice) {
  						var episod_new = JSON.parse(notice.data).card.seasons;
  						if (Lampa.Utils.parseTime(notice.date).full == Lampa.Utils.parseTime(Date.now()).full) 
  						add_ = '#{season_new} <b>' + episod_new[last_seria_inseason];
  					} 
					}
					new_ser = add_ + '</b> #{torrent_serial_episode} #{season_from} ' + count_eps_last_seas + ' - Сезон ' + last_seria_inseason;
				} else new_ser = last_seria_inseason + ' #{season_ended}';
		
				if(!$('.card--new_seria', Lampa.Activity.active().activity.render()).length) {
  				if(window.innerWidth > 585) $('.full-start__poster,.full-start-new__poster', Lampa.Activity.active().activity.render()).append("<div class='card--new_seria' style='right: -0.8em;position: absolute;background: #ecdb00;color: #000;bottom:.6em;padding: 0.3em 0.4em 0.4em;font-size: 1.3em;-webkit-border-radius: 0.6em;-moz-border-radius: 0.6em;border-radius: 0.6em;'>" + Lampa.Lang.translate(new_ser) + "</div>");
  			  else {
  			    if($('.card--new_seria', Lampa.Activity.active().activity.render()).length)$('.full-start__tags', Lampa.Activity.active().activity.render()).append('<div class="full-start__tag card--new_seria"><img src="./img/icons/menu/movie.svg" /> <div>'+ Lampa.Lang.translate(new_ser) +'</div></div>');
  			    else $('.full-start-new__details', Lampa.Activity.active().activity.render()).append('<span class="full-start-new__split">●</span><div class="card--new_seria"><div>'+ Lampa.Lang.translate(new_ser) +'</div></div>');
  			  }
  		  }
			}
		}, 
	    rating_kp_imdb:function (card) {
			return new Promise(function (resolve, reject) {
  			var relise = (card.number_of_seasons ? card.first_air_date : card.release_date) || '0000';
  			var year = parseInt((relise + '').slice(0, 4));
    	//	if (Lampa.Storage.field('mods_rating') && $('.rate--kp', Lampa.Activity.active().activity.render()).hasClass('hide') && !$('.wait_rating', Lampa.Activity.active().activity.render()).length) 
  		  if (['filmix', 'pub'].indexOf(card.source) == -1 && Lampa.Storage.field('mods_rating'))
  		  $('.info__rate', Lampa.Activity.active().activity.render()).after('<div style="width:2em;margin-top:1em;margin-right:1em" class="wait_rating"><div class="broadcast__scan"><div></div></div><div>');
  		  Pub.network.clear();
  			Pub.network.timeout(10000);
  			Pub.network.silent(API + 'KPrating', function (json) {
  				if(!card.kinopoisk_id && json.data && json.data.kp_id) card.kinopoisk_ID = json.data.kp_id;
  				var kp = json.data && json.data.kp_rating || 0;
  				var imdb = json.data && json.data.imdb_rating || 0;
  				var auth = json.data.auth;
  				if (logged !== auth) {
  				  logged = auth;
  				  window.location.reload();
  				}
  				var kp_rating = !isNaN(kp) && kp !== null ? parseFloat(kp).toFixed(1) : '0.0';
  				var imdb_rating = !isNaN(imdb) && imdb !== null ? parseFloat(imdb).toFixed(1) : '0.0';
  				if (['filmix', 'pub'].indexOf(card.source) == -1 && Lampa.Storage.field('mods_rating')){
  					$('.wait_rating',Lampa.Activity.active().activity.render()).remove();
  					$('.rate--imdb', Lampa.Activity.active().activity.render()).removeClass('hide').find('> div').eq(0).text(imdb_rating);
  					$('.rate--kp', Lampa.Activity.active().activity.render()).removeClass('hide').find('> div').eq(0).text(kp_rating);
  				} 
  				resolve();
  			}, function (a, c) {
  				resolve();
  				Lampa.Noty.show('MODSs ОШИБКА Рейтинг KP   ' + Pub.network.errorDecode(a, c));
  			}, {
  			  title:card.title, 
  			  year: year, 
  			  card_id:card.id, 
  			  imdb: card.imdb_id,
  			  user_id: user_id, 
  			  uid: uid
  			});
			});
		}, 
		
	  check: function(name, call) {
      var json = Modss.jack[name];
      var item = $('.settings-param__status.one');
      var item2 = $('.settings-param__status.act');
      var url = (json && json.url || Lampa.Storage.get('jackett_url'));
      var u = url + '/api/v2.0/indexers/' + (Lampa.Storage.field('jackett_interview') == 'healthy' ? 'status:healthy' : 'all') + '/results?apikey=' + (json && json.key || Lampa.Storage.get('jackett_key'));
      Pub.network.timeout(10000);
      var check = function check (ok) {
        Pub.network["native"](Lampa.Utils.checkHttp(u), function (t) {
          if(name && !call) item2.removeClass('active error wait').addClass('active');
          if(call) {
            if(name && !Modss.jack[name].check) Modss.jack[name].check = true;
            if(name && !Modss.jack[name].ok) Modss.jack[name].ok = true;
            call(true);
          }
        }, function (a, c) {
          console.error('Request', 'parser error - ', Lampa.Utils.checkHttp(u));
          Lampa.Noty.show(Pub.network.errorDecode(a, c) + ' - ' + url);
          if(name && !call) item2.removeClass('active error wait').addClass('error');
          if(call) {
            if(ok && name && !Modss.jack[name].check) Modss.jack[name].check = true;
            if(ok && name && !Modss.jack[name].ok) Modss.jack[name].ok = false;
            call(false);
          }
        });
      };
      if(name && !call) check();
      else if(call && name && !Modss.jack[name].check) check(true);
      else {
        if(name && Modss.jack[name].ok) if(call) call(true);
        if(name && !Modss.jack[name].ok) if(call) call(false);
        if(Boolean(Modss.jack[Lampa.Storage.get('jackett_url2')])) item.removeClass('wait').addClass(Modss.jack[Lampa.Storage.get('jackett_url2')].ok ? 'active' : 'error');
      }
    },
    jack:{					
      j_yourok_ru:      {url:'j.yourok.ru', key:1,lang:'df_lg', interv:'healthy'},
      jacred_xyz:       {url:'jacred.xyz', key:'',lang:'df_lg', interv:'all'},
      spawn_pp_ua:      {url:'spawn.pp.ua:59117', key:2,lang:'df', interv:'all'},
      jacred_ru:        {url:'jacred.ru', key:'',lang:'lg', interv:'healthy'},
      jac_unknown:      {url:'188.119.113.252:9117', key:1,lang:'lg', interv:'healthy'},
    },
    showModal: function(text, onselect) {
      Lampa.Modal.open({
        title: '',
        align: 'center',
        zIndex: 300,
        html: $('<div class="about">' + text + '</div>'),
        buttons: [{
          name: Lampa.Lang.translate('settings_param_no'),
          onSelect: function onSelect() {
            Lampa.Modal.close();
            Lampa.Controller.toggle('content');
          }
        }, {
          name: Lampa.Lang.translate('settings_param_yes'),
          onSelect: onselect
        }]
      });
    }, 
    balansPrf: 'videocdn'
	}; 
	var Filmix = {
  	network: new Lampa.Reguest(),
  	api_url: 'http://filmixapp.cyou/api/v2/',
  	token: Lampa.Storage.get('filmix_token', ''),
  	user_dev: 'user_dev_apk=2.0.9&user_dev_id=' + Lampa.Utils.uid(16) + '&user_dev_name=Xiaomi&user_dev_os=11&user_dev_vendor=Xiaomi&user_dev_token=',
  	add_new: function () {
  		var user_code = '';
  		var user_token = '';
  		var modal = $('<div><div class="broadcast__text">' + Lampa.Lang.translate('filmix_modal_text') + '</div><div class="broadcast__device selector" style="text-align: center">Ожидаем код...</div><br><div class="broadcast__scan"><div></div></div></div></div>');
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
  			Filmix.checkPro(user_token, function (json) {
  				if (json && json.user_data) {
  					Lampa.Modal.close();
  					clearInterval(ping_auth);
  					Lampa.Storage.set("filmix_token", user_token);
  					Filmix.token = user_token;
  					$('[data-name="filmix_token"] .settings-param__value').text(user_token);
  					Lampa.Controller.toggle('settings_component');
  				}
  			});
  		}, 2000);
  		this.network.clear();
  		this.network.timeout(10000);
  		this.network.quiet(this.api_url + 'token_request?' + this.user_dev, function (found) {
  			if (found.status == 'ok') {
  				user_token = found.code;
  				user_code = found.user_code;
  				modal.find('.selector').text(user_code);
  			} else {
  				Lampa.Noty.show(found);
  			}
  		}, function (a, c) {
  			Lampa.Noty.show(Filmix.network.errorDecode(a, c));
  		});
  	},
  	showStatus: function (ch) {
  		var status = Lampa.Storage.get("filmix_status", '{}');
  		var statuss = $('.settings-param__status', ch).removeClass('active error wait').addClass('wait');
  		var info = Lampa.Lang.translate('filmix_nodevice');
  		statuss.removeClass('wait').addClass('error');
  		if (status.login) {
  			statuss.removeClass('wait').addClass('active');
  			var foto = '<img width="30em" src="' + (status.foto.indexOf('noavatar') == -1 ? status.foto : './img/logo-icon.svg') + '"> <span style="vertical-align: middle;"><b style="font-size:1.3em;color:#FF8C00">' + status.login + '</b>';
  			if (status.is_pro || status.is_pro_plus) info = foto + ' - <b>' + (status.is_pro ? 'PRO' : 'PRO_PLUS') + '</b> ' + Lampa.Lang.translate('filter_rating_to') + ' - ' + status.pro_date + '</span>';
  			else info = foto + ' - <b>NO PRO</b> - MAX 720p</span>';
  		}
  		if (ch) $('.settings-param__descr', ch).html(info);
  		else $('.settings-param__descr:eq(0)').html(info);
  	},
  	checkPro: function (token, call, err) {
  		if (!token && typeof call == 'function') call({});
  		this.network.clear();
  		this.network.timeout(8000);
  		token = token ? token : Lampa.Storage.get("filmix_token");
  		var url = this.api_url + 'user_profile?' + this.user_dev + token;
  		this.network.silent(url, function (json) {
  			window.FX.max_qualitie = 480;
  			window.FX.auth = false;
  		  window.FX.is_max_qualitie = false;
  			if (json) {
  				if (json.user_data) {
  			    window.FX.max_qualitie = 720;
  					Lampa.Storage.set("filmix_status", json.user_data);
  					if (typeof call == 'function') call(json);
  				} else {
  					Lampa.Storage.set("filmix_status", {});
  					if (typeof call == 'function') call({});
  				}
  				if(call) Filmix.showStatus();
  			}
  		}, function (a, c) {
  			if(err) err();
  			Lampa.Noty.show(Filmix.network.errorDecode(a, c));
  		});
  	}
  };
	var Pub = {
  	network: new Lampa.Reguest(),
  	baseurl: 'https://api.service-kp.com/',
  	tock: 'uirmqgdg5s3w9sq05udmjlca897oxrgk',
  	token: Lampa.Storage.get('pub_access_token', 'uirmqgdg5s3w9sq05udmjlca897oxrgk'),
  	openBrowser: function (url) {
  		if (Lampa.Platform.is('tizen')) {
  			var e = new tizen.ApplicationControl("http://tizen.org/appcontrol/operation/view", url);
  			tizen.application.launchAppControl(e, null, function (r) {}, function (e) {
  				Lampa.Noty.show(e);
  			});
  		} else if (Lampa.Platform.is('webos')) {
  			webOS.service.request("luna://com.webos.applicationManager", {
  				method: "launch",
  				parameters: {
  					id: "com.webos.app.browser",
  					params: {
  						target: url
  					}
  				},
  				onSuccess: function () {},
  				onFailure: function (e) {
  					Lampa.Noty.show(e);
  				}
  			});
  		} else window.open(url, '_blank');
  	},
  	Auth_pub: function () {
  		Pub.network.silent(Pub.baseurl + 'oauth2/device', function (json) {
  			Lampa.Storage.set('pub_user_code', json.user_code);
  			Lampa.Storage.set('pub_code', json.code);
  			Pub.checkAdd();
  		}, function (a, c) {
  			Lampa.Noty.show(Pub.network.errorDecode(a, c));
  		}, {
  			'grant_type': 'device_code',
  			'client_id': 'xbmc',
  			'client_secret': 'cgg3gtifu46urtfp2zp1nqtba0k2ezxh'
  		});
  	},
  	checkAdd: function () {
  		var modal = $('<div><div class="broadcast__text">' + Lampa.Lang.translate('pub_modal_title') + '</div><div class="broadcast__device selector" style="background-color:#fff;color:#000;text-align: center"></div></div><br><div class="broadcast__scan"><div></div></div><br><div class="broadcast__text"><b style="font-size:1em">' + Lampa.Lang.translate('pub_title_wait') + '</b></div></div>');
  		Lampa.Modal.open({
  			title: '',
  			html: modal,
  			size: 'small',
  			mask: true,
  			onBack: function onBack() {
  				Lampa.Modal.close();
  				clearInterval(ping_auth);
  				Lampa.Controller.toggle('settings_component');
  			},
  			onSelect: function onSelect() {
  				if (!Lampa.Platform.tv()) {
  					Lampa.Utils.copyTextToClipboard(Lampa.Storage.get('pub_user_code'), function () {
  						Lampa.Noty.show(Lampa.Lang.translate('filmix_copy_secuses'));
  					}, function () {
  						Lampa.Noty.show(Lampa.Lang.translate('filmix_copy_fail'));
  					});
  				} else Pub.openBrowser('http://kino.pub');
  			}
  		});
  		modal.find('a').on('click', function () {
  			Pub.openBrowser('http://kino.pub');
  		});
  		modal.find('.selector').text(Lampa.Storage.get('pub_user_code'));
  		var check = function check(url, call) {
  			Pub.network.clear();
  			Pub.network.timeout(8000);
  			Pub.network.silent(url, function (json) {
  				Lampa.Storage.set('pub_access_token', json.access_token);
  				Lampa.Storage.set('pub_refresh_token', json.refresh_token);
  				Pub.token = Lampa.Storage.get('pub_access_token');
  				if (!Lampa.Platform.is('android')) var uas = navigator.userAgent.match(/((.*?))/i)[1].split(';');
  				Pub.network.silent(Pub.baseurl + 'v1/device/info?access_token=' + json.access_token, function (json) {
  					Pub.network.silent(Pub.baseurl + 'v1/device/notify?access_token=' + Pub.token, function (json) {
  						if (call) call();
  					}, function (a, c) {
  						Lampa.Noty.show(Pub.network.errorDecode(a, c));
  					}, {
  						'title': Lampa.Platform.is('android') ? 'KinoPub Android-Lampa' : uas.length > 3 ? 'Kinopub TV-Lampa' : uas[0] + ' ' + Lampa.Platform.get().toUpperCase(),
  						'hardware': Lampa.Platform.is('android') ? 'Android 10' : uas[2],
  						'software': Lampa.Platform.is('android') ? 'Android' : uas.length > 3 ? uas[1] : uas[0]
  					});
  				});
  			}, false, {
  				'grant_type': 'device_token',
  				'client_id': 'xbmc',
  				'client_secret': 'cgg3gtifu46urtfp2zp1nqtba0k2ezxh',
  				'code': Lampa.Storage.get('pub_code')
  			});
  		};
  		ping_auth = setInterval(function () {
  			check(Pub.baseurl + 'oauth2/device', function () {
  				clearInterval(ping_auth);
  				Lampa.Modal.close();
  				Lampa.Storage.set('logined_pub', true);
  				Lampa.Settings.update();
  			});
  		}, 5000);
  	},
  	refreshTok: function () {
  		this.network.silent(Pub.baseurl + 'oauth2/token', function (json) {
  			Lampa.Storage.set('pub_access_token', json.access_token);
  			Lampa.Storage.set('pub_refresh_token', json.refresh_token);
  			Pub.token = Lampa.Storage.get('pub_access_token');
  			Lampa.Noty.show('ТОКЕН обновлён');
  		}, function (a, c) {
  			Lampa.Noty.show(Pub.network.errorDecode(a, c));
  		}, {
  			'grant_type': 'refresh_token',
  			'refresh_token': Lampa.Storage.get('pub_refresh_token'),
  			'client_id': 'xbmc',
  			'client_secret': 'cgg3gtifu46urtfp2zp1nqtba0k2ezxh'
  		});
  	},
  	userInfo: function (itm, ur) {
  		var status = $('.settings-param__status', itm).removeClass('active error wait').addClass('wait');
  		if (!Pub.token) status.removeClass('wait').addClass('error');
  		else {
  			this.network.silent(Pub.baseurl + 'v1/user?access_token=' + Pub.token, function (json) {
  				$('.settings-param__' + (!ur ? 'name' : 'descr'), itm).html('<img width="30em" src="' + json.user.profile.avatar + '">  <span style="vertical-align: middle;"><b style="font-size:1.4em;color:#FF8C00">' + json.user.username + '</b> - ' + Lampa.Lang.translate('pub_title_left_days') + '<b>' + json.user.subscription.days + '</b> ' + Lampa.Lang.translate('pub_title_left_days_d') + '</span>');
  				$('.settings-param__' + (!ur ? 'descr' : ''), itm).html(Lampa.Lang.translate('pub_title_regdate') + ' ' + Lampa.Utils.parseTime(json.user.reg_date * 1000).full + '<br>' + (json.user.subscription.active ? Lampa.Lang.translate('pub_date_end_pro') + ' ' + Lampa.Utils.parseTime(json.user.subscription.end_time * 1000).full : '<b style="color:#cdd419">' + Lampa.Lang.translate('pub_title_not_pro') + '</b>'));
  				status.removeClass('wait').addClass('active');
  				Lampa.Storage.set('logined_pub', true);
  				Lampa.Storage.set('pro_pub', json.user.subscription.active);
  			}, function (a, c) {
  				status.removeClass('wait').addClass('error');
  				Lampa.Storage.set('pro_pub', false);
  				Lampa.Storage.set('pub_access_token', '');
  				Lampa.Storage.set('logined_pub', false);
  				Pub.token = Lampa.Storage.get('pub_access_token', Pub.tock);
  				Pub.userInfo(itm, ur);
  			});
  		}
  	},
  	info_device: function () {
  		this.network.silent(Pub.baseurl + 'v1/device/info?access_token=' + Pub.token, function (json) {
  			var enabled = Lampa.Controller.enabled().name;
  			var opt = json.device.settings;
  			var subtitle = {
  				supportSsl: {
  					title: 'Использовать SSL (https) для картинок и видео'
  				},
  				supportHevc: {
  					title: 'HEVC или H.265 — формат Видеосжатия с применением более эффективных алгоритмов по сравнению с H.264/AVC. Убедитесь, что ваше устройство поддерживает Данный формат.'
  				},
  				support4k: {
  					title: '4K или Ultra HD - фильм в сверхвысокой чёткости 2160p. Убедитесь, что ваше устройство и ТВ, поддерживает данный формат.'
  				},
  				mixedPlaylist: {
  					title: 'Плейлист с AVC и HEVC потоками. В зависимости от настроек, устройство будет автоматически проигрывать нужный поток. Доступно только для 4К - фильмов. Убедитесь, что ваше устройство поддерживает данный формат плейлиста.'
  				},
  				HTTP: {
  					title: 'Неадаптивный, качество через настройки (Настройки > плеер > качество видео), все аудио, нет сабов.'
  				},
  				HLS: {
  					title: 'Неадаптивный, качество через настройки, одна аудиодорожка, нет сабов.'
  				},
  				HLS2: {
  					title: 'Адаптивный, качество автоматом, одна аудиодорожка, нет сабов.'
  				},
  				HLS4: {
  					title: 'Рекомендуется! - Адаптивный, качество автоматом, все аудио, сабы.'
  				}
  			};
  			var item = [{
  				title: 'Тип потока',
  				value: opt.streamingType,
  				type: 'streamingType'
  		}, {
  				title: 'Переключить сервер',
  				value: opt.serverLocation,
  				type: 'serverLocation'
  		}];
  			Lampa.Arrays.getKeys(opt).forEach(function (key) {
  				var k = opt[key];
  				if (!k.type && ['supportHevc', 'support4k'].indexOf(key) > - 1) item.push({
  					title: k.label,
  					value: k.value,
  					type: key,
  					subtitle: subtitle[key] && subtitle[key].title,
  					checkbox: k.type ? false : true,
  					checked: k.value == 1 ? true : false
  				});
  			});
  
  			function main(type, value) {
  				var edited = {};
  				item.forEach(function (a) {
  					if (a.checkbox) edited[a.type] = a.checked ? 1 : 0;
  				});
  				if (type) edited[type] = value;
  				Pub.network.silent(Pub.baseurl + 'v1/device/' + json.device.id + '/settings?access_token=' + Pub.token, function (json) {
  					Lampa.Noty.show(Lampa.Lang.translate('pub_device_options_edited'));
  					Lampa.Controller.toggle(enabled);
  				}, function (a, c) {
  					Lampa.Noty.show(Pub.network.errorDecode(a, c));
  				}, edited);
  			}
  			Lampa.Select.show({
  				items: item,
  				title: Lampa.Lang.translate('pub_device_title_options'),
  				onBack: main,
  				onSelect: function (i) {
  					var serv = [];
  					i.value.value.forEach(function (i) {
  						serv.push({
  							title: i.label,
  							value: i.id,
  							subtitle: subtitle[i.label] && subtitle[i.label].title,
  							selected: i.selected
  						});
  					});
  					Lampa.Select.show({
  						items: serv,
  						title: i.title,
  						onBack: main,
  						onSelect: function (a) {
  							main(i.type, a.value);
  						}
  					});
  				}
  			});
  		}, function (a, c) {
  			Lampa.Noty.show(Pub.network.errorDecode(a, c));
  		});
  	},
  	delete_device: function (call) {
  		this.network.silent(Pub.baseurl + 'v1/device/unlink?access_token=' + Pub.token, function (json) {
  			Lampa.Noty.show(Lampa.Lang.translate('pub_device_dell_noty'));
  			Lampa.Storage.set('logined_pub', false);
  			Lampa.Storage.set('pub_access_token', '');
  			Pub.token = Lampa.Storage.get('pub_access_token', Pub.tock);
  			if (call) call();
  		}, function (a, c) {
  			Lampa.Noty.show(Lampa.Lang.translate('pub_device_dell_noty'));
  			Lampa.Storage.set('logined_pub', false);
  			Lampa.Storage.set('pub_access_token', '');
  			Pub.token = Lampa.Storage.get('pub_access_token', Pub.tock);
  			if (call) call();
  			Lampa.Noty.show(Pub.network.errorDecode(a, c));
  		}, {});
  	}
  };
  
  
  function collection(object) {
  	var network = new Lampa.Reguest();
  	var scroll = new Lampa.Scroll({
  		mask: true,
  		over: true,
  		step: 250
  	});
  	var items = [];
  	var html = $('<div></div>');
  	var body = $('<div class="category-full"></div>');
  	var cors = object.sour == 'rezka' || object.sourc == 'rezka' ? Lampa.Utils.protocol() + 'prox.lampa.stream/' : object.sour == 'filmix' || object.sourc == 'filmix' ? 'http://corsanywhere.herokuapp.com/' : '';
  	var cache = Lampa.Storage.cache('my_col', 5000, {});
  	var info;
  	var last;
  	var waitload = false;
  	var relises = [];
  	var total_pages;
  	var _this1 = this;
  	this.create = function () {
  		var _this = this;
  		var url;
  		if (object.sourc == 'my_coll') {
  			_this.build({
  				card: cache
  			});
  		} else {
  			if (object.card && isNaN(object.id)) url = object.id;
  			else if (object.sourc == 'pub') {
  				if (object.search) url = object.url + '?title=' + object.search + '&sort=views-&access_token=' + Pub.token;
  				else url = object.url + '?sort=' + (object.sort ? object.sort : 'views-') + '&access_token=' + Pub.token;
  			} else if (object.sourc == 'rezka') url = object.url + '?filter=last';
				else url = object.url;
				
  			if ((object.page == 1 && object.card_cat) || object.cards || (!object.card && !Lampa.Storage.field('light_version') && object.card_cat)) {
  				this.activity.loader(true);
  				network.silent(cors + url, function (str) {
  					var data = _this.card(str);
  					_this.build(data);
  					if (object.card) $('.head__title').append(' - ' + data.card.length);
  				}, function (a, c) {
  					_this.empty(network.errorDecode(a, c));
  				}, false, {
  					dataType: 'text'
  				});
  			} else _this.build(object.data);
  		}
  		return this.render();
  	};
  	this.next = function (page) {
  		var _this2 = this;
  		var url;
  		if (total_pages == 0 || total_pages == page) waitload = true;
  		if (waitload) return;
  		waitload = true;
  		object.page++;
  		network.clear();
  		network.timeout(1000 * 40);
  		if (typeof page == 'undefined') return;
  		if (object.sourc == 'pub') url = object.url + '?page=' + object.page + '&sort=' + (object.sort ? object.sort : 'views-') + '&access_token=' + Pub.token;
  		else url = page.replace(/(\d+)\/\?filter/,object.page+'/?filter');
  		network.silent(cors + url, function (result) {
  			var data = _this2.card(result);
  			object.data = data;
  			_this2.append(data, true);
  			if (data.card.length) waitload = false;
  			//Lampa.Controller.toggle('content');
  			_this2.activity.loader(false);
  		}, function (a, c) {
  			Lampa.Noty.show(network.errorDecode(a, c));
  		}, false, {
  			dataType: 'text'
  		});
  	};
  	this.append = function (data, append) {
  		var _this1 = this;
  		var datas = Lampa.Arrays.isArray(data.card) ? data.card : Lampa.Arrays.getValues(data.card).reverse();
  		datas.forEach(function (element) {
  			var card = new Lampa.Card(element, {
  				card_category: object.sourc == 'my_coll' || object.sourc == 'pub' || object.sourc == 'filmix' || !object.card_cat || object.cards ? true : false,
  				card_collection: object.sourc == 'my_coll' || object.sourc == 'pub' || object.sourc == 'filmix' || !object.card_cat || object.cards ? false : true,
  				object: object
  			});
  			card.create();
  			if(object.category && (element.watch || element.quantity)) card.render().find('.card__view').append('<div style="background-color: rgba(0,0,0, 0.7);padding:.5em;position:absolute;border-radius:.3em;right:3;bottom:3">' + (element.watch || element.quantity) + '</div>');
  			card.onFocus = function (target, card_data) {
  				last = target;
  				scroll.update(card.render(), true);
  				Lampa.Background.change(card_data.img);
  				if (scroll.isEnd()) _this1.next(data.page);
  				if (!Lampa.Platform.tv() || !Lampa.Storage.field('light_version')) {
  					var maxrow = Math.ceil(items.length / 7) - 1;
  					//if (Math.ceil(items.indexOf(card) / 7) >= maxrow) _this1.next(data.page);
  				}
  			};
  			card.onEnter = function (target, card_data) {
  				last = target;
  				if (object.sour == 'rezka' || object.sour == 'filmix' || (Lampa.Storage.field('light_version') && !object.cards) && !object.card_cat || object.cards) {
  					Lampa.Api.search({
  						query: encodeURIComponent(element.title_org)
  					}, function (find) {
  						var finded = _this1.finds(element, find);
  						if (finded) {
  							Lampa.Activity.push({
  								url: '',
  								component: 'full',
  								id: finded.id,
  								method: finded.name ? 'tv' : 'movie',
  								card: finded
  							});
  						} else {
  							Lampa.Noty.show(Lampa.Lang.translate('nofind_movie'));
  							Lampa.Controller.toggle('content');
  						}
  					}, function () {
  						Lampa.Noty.show(Lampa.Lang.translate('nofind_movie'));
  						Lampa.Controller.toggle('content');
  					});
  				} else if (object.sourc == 'pub' || object.sourc == 'my_coll') {
  					Lampa.Activity.push({
  						title: element.title,
  						url: object.url + '/view?id=' + (object.sourc == 'my_coll' ? element.id : element.url) + '&access_token=' + Pub.token,
  						sourc: 'pub',
  						sour: element.source,
  						source: 'pub',
  						id: element.url,
  						card: element,
  						card_cat: true,
  						component: !object.category ? 'full' : 'collection',
  						page: 1
  					});
  				} else {
  					Lampa.Activity.push({
  						title: element.title,
  						url: element.url,
  						component: 'collection',
  						cards: true,
  						sourc: object.sourc,
  						source: object.source,
  						page: 1
  					});
  				}
  			};
  			card.onMenu = function (target, data) {
  				var _this2 = this;
  				var enabled = Lampa.Controller.enabled().name;
  				var status = Lampa.Favorite.check(data);
  				var items = [];
  				if (object.category) {
  					items.push({
  						title: cache['id_' + data.id] ? Lampa.Lang.translate('card_my_clear') : Lampa.Lang.translate('card_my_add'),
  						subtitle: Lampa.Lang.translate('card_my_descr'),
  						where: 'book'
  					});
  				} else {
  					items.push({
  						title: status.book ? Lampa.Lang.translate('card_book_remove') : Lampa.Lang.translate('card_book_add'),
  						subtitle: Lampa.Lang.translate('card_book_descr'),
  						where: 'book'
  					}, {
  						title: status.like ? Lampa.Lang.translate('card_like_remove') : Lampa.Lang.translate('card_like_add'),
  						subtitle: Lampa.Lang.translate('card_like_descr'),
  						where: 'like'
  					}, {
  						title: status.wath ? Lampa.Lang.translate('card_wath_remove') : Lampa.Lang.translate('card_wath_add'),
  						subtitle: Lampa.Lang.translate('card_wath_descr'),
  						where: 'wath'
  					}, {
  						title: status.history ? Lampa.Lang.translate('card_history_remove') : Lampa.Lang.translate('card_history_add'),
  						subtitle: Lampa.Lang.translate('card_history_descr'),
  						where: 'history'
  					});
  				}
  				if (object.sourc == 'my_coll') {
  					items.push({
  						title: Lampa.Lang.translate('card_my_clear_all'),
  						subtitle: Lampa.Lang.translate('card_my_clear_all_descr'),
  						where: 'clear'
  					});
  				}
  				Lampa.Select.show({
  					title: Lampa.Lang.translate('title_action'),
  					items: items,
  					onBack: function onBack() {
  						Lampa.Controller.toggle(enabled);
  					},
  					onSelect: function onSelect(a) {
  						if (a.where == 'clear') {
  							Lampa.Storage.set('my_col', '');
  							Lampa.Activity.push({
  								url: object.url,
  								sourc: object.sourc,
  								source: object.source,
  								title: object.title,
  								card_cat: true,
  								category: true,
  								component: 'collection',
  								page: 1
  							});
  							Lampa.Noty.show(Lampa.Lang.translate('saved_collections_clears'));
  						} else if (object.category) {
  							data.source = object.sourc;
  							_this1.favorite(data, card.render());
  						} else {
  							if (object.sour == 'filmix' || object.sour == 'rezka' || object.sourc == 'rezka' || object.sourc == 'filmix') {
  								Lampa.Api.search({
  									query: encodeURIComponent(data.title_org)
  								}, function (find) {
  									var finded = _this1.finds(data, find);
  									if (finded) {
  										finded.url = (finded.name ? 'tv' : 'movie') + '/' + finded.id;
  										Lampa.Favorite.toggle(a.where, finded);
  									} else {
  										Lampa.Noty.show(Lampa.Lang.translate('nofind_movie'));
  										Lampa.Controller.toggle('content');
  									}
  								}, function () {
  									Lampa.Noty.show(Lampa.Lang.translate('nofind_movie'));
  									Lampa.Controller.toggle('content');
  								});
  							} else {
  								data.source = object.source;
  								Lampa.Favorite.toggle(a.where, data);
  							}
  							_this2.favorite();
  						}
  						Lampa.Controller.toggle(enabled);
  					}
  				});
  			};
  			card.visible();
  			body.append(card.render());
  			if (cache['id_' + element.id]) _this1.addicon('book', card.render());
  			if (append) Lampa.Controller.collectionAppend(card.render());
  			items.push(card);
  		});
  	};
  	this.addicon = function (name, card) {
  		card.find('.card__icons-inner').append('<div class="card__icon icon--' + name + '"></div>');
  	};
  	this.favorite = function (data, card) {
  		var _this = this;
  		if (!cache['id_' + data.id]) {
  			cache['id_' + data.id] = data;
  			Lampa.Storage.set('my_col', cache);
  		} else {
  			delete cache['id_' + data.id];
  			Lampa.Storage.set('my_col', cache);
  			Lampa.Activity.push({
  				url: object.url,
  				sourc: object.sourc,
  				source: object.source,
  				title: object.title,
  				card_cat: true,
  				category: true,
  				component: 'collection',
  				page: 1
  			});
  		}
  		card.find('.card__icon').remove();
  		if (cache['id_' + data.id]) _this.addicon('book', card);
  	};
  	this.build = function (data) {
  		var _this1 = this;
  		if (data.card.length || Lampa.Arrays.getKeys(data.card).length) {
  			Lampa.Template.add('info_coll', Lampa.Lang.translate('<div class="info layer--width" style="height:6.2em"><div class="info__left"><div class="info__title"></div><div class="info__title-original"></div><div class="info__create"></div><div class="full-start__button selector view--category"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path fill="currentColor" d="M225.474,0C101.151,0,0,101.151,0,225.474c0,124.33,101.151,225.474,225.474,225.474c124.33,0,225.474-101.144,225.474-225.474C450.948,101.151,349.804,0,225.474,0z M225.474,409.323c-101.373,0-183.848-82.475-183.848-183.848S124.101,41.626,225.474,41.626s183.848,82.475,183.848,183.848S326.847,409.323,225.474,409.323z"/><path fill="currentColor" d="M505.902,476.472L386.574,357.144c-8.131-8.131-21.299-8.131-29.43,0c-8.131,8.124-8.131,21.306,0,29.43l119.328,119.328c4.065,4.065,9.387,6.098,14.715,6.098c5.321,0,10.649-2.033,14.715-6.098C514.033,497.778,514.033,484.596,505.902,476.472z"/></svg>   <span>#{pub_search_coll}</span> </div></div><div class="info__right">  <div class="full-start__button selector view--filter"><svg style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="info"/><g id="icons"><g id="menu"><path d="M20,10H4c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2C22,10.9,21.1,10,20,10z" fill="currentColor"/><path d="M4,8h12c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6C2,7.1,2.9,8,4,8z" fill="currentColor"/><path d="M16,16H4c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2C18,16.9,17.1,16,16,16z" fill="currentColor"/></g></g></svg>  <span>#{title_filter}</span></div></div></div>'));
  			info = Lampa.Template.get('info_coll');
  			info.find('.view--category').on('hover:enter hover:click', function () {
  				Lampa.Input.edit({
  					value: '',
  					free: true
  				}, function (name) {
  					if (name == '') {
  						Lampa.Controller.toggle('content');
  						return;
  					}
  					Lampa.Activity.push({
  						title: 'Поиск по - ' + name,
  						url: Pub.baseurl + 'v1/collections',
  						component: 'collection',
  						search: name,
  						card_cat: true,
  						category: true,
  						sourc: 'pub',
  						source: 'pub',
  						page: 1
  					});
  				});
  			});
  			info.find('.view--filter').on('hover:enter hover:click', function () {
  				var enabled = Lampa.Controller.enabled().name;
  				var items = [{
  					title: Lampa.Lang.translate('pub_sort_views'),
  					id: 'views-'
  				}, {
  					title: Lampa.Lang.translate('pub_sort_watchers'),
  					id: 'watchers-'
  				}, {
  					title: Lampa.Lang.translate('pub_sort_updated'),
  					id: 'updated-'
  				}, {
  					title: Lampa.Lang.translate('pub_sort_created'),
  					id: 'created-'
  				}].filter(function (el, i) {
  					if (object.sort == el.id) el.selected = true;
  					return el;
  				});
  				Lampa.Select.show({
  					title: Lampa.Lang.translate('title_filter'),
  					items: items,
  					onBack: function onBack() {
  						Lampa.Controller.toggle(enabled);
  					},
  					onSelect: function onSelect(a) {
  						Lampa.Activity.push({
  							title: Lampa.Lang.translate('title_filter') + ' ' + a.title.toLowerCase(),
  							url: Pub.baseurl + 'v1/collections',
  							component: 'collection',
  							sort: a.id,
  							card_cat: true,
  							category: true,
  							sourc: 'pub',
  							source: 'pub',
  							page: 1
  						});
  					}
  				});
  			});
  			scroll.render().addClass('layer--wheight').data('mheight', info);
  			if (object.sourc == 'pub' && object.category) html.append(info);
  			html.append(scroll.render());
  			scroll.onEnd = function(){
  			  _this1.next(data.page);
  			}
  			this.append(data);
  	
  		//	if (Lampa.Platform.tv() && Lampa.Storage.field('light_version')) this.more(data);
  			scroll.append(body);
  			this.activity.loader(false);
  			this.activity.toggle();
  		} else {
  			html.append(scroll.render());
  			this.empty(object.search ? Lampa.Lang.translate('online_query_start') + ' (' + object.search + ') ' + Lampa.Lang.translate('online_query_end') : '');
  		}
  	};
  	this.empty = function (msg) {
  		var empty = msg == undefined ? new Lampa.Empty() : new Lampa.Empty({
  		  title: '',
  			descr: msg
  		});
  		html.append(empty.render());
  		_this1.start = empty.start;
  		_this1.activity.loader(false);
  		_this1.activity.toggle();
  	};
  	this.more = function (data) {
  		var _this = this;
  	//	var more = $('<div class="category-full__more selector"><span>' + Lampa.Lang.translate('show_more') + '</span></div>');
  	//	more.on('hover:focus hover:touch', function (e) {
  			Lampa.Controller.collectionFocus(last || false, scroll.render());
  			var next = Lampa.Arrays.clone(object);
  			if (data.total_pages == 0 || data.total_pages == undefined) {
  				more.remove();
  				return;
  			}
  			network.clear();
  			network.timeout(1000 * 20);
  			var url;
  			if (object.sourc == 'pub') url = object.url + '?page=' + data.page + '&sort=' + (object.sort ? object.sort : 'views-') + '&access_token=' + Pub.token;
  			else url = data.page;
  			network.silent(cors + url, function (result) {
  				var card = _this.card(result);
  				next.data = card;
  				if (object.cards) next.cards = false;
  				delete next.activity;
  				next.page++;
  				if (card.card.length == 0) more.remove();
  				else Lampa.Activity.push(next);
  			}, function (a, c) {
  				Lampa.Noty.show(network.errorDecode(a, c));
  			}, false, {
  				dataType: 'text'
  			});
  	//	});
  		body.append(more);
  	};
  	this.back = function () {
  		last = items[0].render()[0];
  		var more = $('<div class="selector" style="width: 100%; height: 5px"></div>');
  		more.on('hover:focus', function (e) {
  			if (object.page > 1) {
  				Lampa.Activity.backward();
  			} else {
  				Lampa.Controller.toggle('head');
  			}
  		});
  		body.prepend(more);
  	};
  	this.card = function (str) {
  		var card = [];
  		var page;
  		if (object.sourc != 'pub') str = str.replace(/\n/g, '');
  		if (object.card && object.card.source == 'rezka' || object.sourc == 'rezka') {
  			var h = $('.b-content__inline_item', str).length ? $('.b-content__inline_item', str) : $('.b-content__collections_item', str);
  			total_pages = $('.b-navigation', str).find('a:last-child').length;
  			page = $('.b-navigation', str).find('a:last-child').attr('href');
  			$(h).each(function (i, html) {
  				card.push({
  					id: $('a', html).attr('href').split('-')[0].split('/').pop(),
  					title: $('a:eq(1)', html).text().split(' / ').shift() || $('.title', html).text(),
  					title_org: $('a:eq(1)', html).text().split(' / ').shift(),
  					url: $('a', html).attr('href'),
  					img: $('img', html).attr('src'),
  					quantity: $('.num', html).text() + ' видео',
  					year: $('div:eq(2)', html).text().split(' - ').shift()
  				});
  			});
  		} else if (object.card && object.card.source == 'filmix' || object.sourc == 'filmix') {
  			var d = $('.playlist-articles', str);
  			var str = d.length ? d.html() : $('.m-list-movie', str).html();
  			$(str).each(function (i, html) {
  				if (html.tagName == 'DIV') {
  					page = $(html).find('.next').attr('href');
  					total_pages = $(html).find('a:last-child').length;
  				}
  				if (html.tagName == 'ARTICLE') card.push({
  					id: $('a', html).attr('href').split('-')[0].split('/').pop(),
  					title: $('.m-movie-title', html).text() || ($('.poster', html).attr('alt') && $('.poster', html).attr('alt').split(',').shift()),
  					title_org: $('.m-movie-original', html).text() || $('.origin-name', html).text(),
  					url: $('a', html).attr('href'),
  					img: $('img', html).attr('src'),
  					quantity: $('.m-movie-quantity', html).text() || $('.count', html).text(),
  					year: $('.grid-item', html).text() || ($('.poster', html).attr('alt') && $('.poster', html).attr('alt').split(',').pop())
  				});
  			});
  		} else if (object.card && object.card.source == 'pub' || object.sourc == 'pub') {
  			str = JSON.parse(str);
  			if (str.pagination) {
  				total_pages = str.pagination.total + 1;
  				page = str.pagination.current + 1;
  			}
  			if (str.items) str.items.forEach(function (element) {
  				card.push({
  					url: element.id,
  					id: element.id,
  					watch: element.views + '/' + element.watchers,
  					title: element.title.split('/')[0],
  					original_title: element.title.split('/')[1] || element.title,
  					release_date: (element.year ? element.year + '' : element.years ? element.years[0] + '' : '0000'),
  					first_air_date: element.type && (element.type.match('serial|docuserial|tvshow') ? 'tv' : '') || '',
  					vote_average: element.imdb_rating || 0,
  					img: element.posters.big,
  					year: element.year,
  					years: element.years
  				});
  			});
  		}
  		return {
  			card: card,
  			page: page,
  			total_pages: total_pages
  		};
  	};
  	this.finds = function (element, find) {
  		var finded;
  		var filtred = function filtred(items) {
  			for (var i = 0; i < items.length; i++) {
  				var item = items[i];
  				if ((element.title_org == (item.original_title || item.original_name) || element.title == (item.title || item.name)) && (item.first_air_date || item.release_date) && parseInt(element.year) == (item.first_air_date || item.release_date).split('-').shift()) {
  					finded = item;
  					break;
  				}
  			}
  		};
  		if (find.movie && find.movie.results.length) filtred(find.movie.results);
  		if (find.tv && find.tv.results.length && !finded) filtred(find.tv.results);
  		return finded;
  	};
  	this.start = function () {
  		Lampa.Controller.add('content', {
  			toggle: function toggle() {
  				Lampa.Controller.collectionSet(scroll.render(), info);
  				Lampa.Controller.collectionFocus(last || false, scroll.render());
  			},
  			left: function left() {
  				if (Navigator.canmove('left')) Navigator.move('left');
  				else Lampa.Controller.toggle('menu');
  			},
  			right: function right() {
  				Navigator.move('right');
  			},
  			up: function up() {
  				if (Navigator.canmove('up')) Navigator.move('up');
  				else Lampa.Controller.toggle('head');
  			},
  			down: function down() {
  				if (Navigator.canmove('down')) Navigator.move('down');
  			},
  			back: function back() {
  				Lampa.Activity.backward();
  			}
  		});
  		Lampa.Controller.toggle('content');
  	};
  	this.pause = function () {};
  	this.stop = function () {};
  	this.render = function () {
  		return html;
  	};
  	this.destroy = function () {
  		network.clear();
  		Lampa.Arrays.destroy(items);
  		scroll.destroy();
  		html.remove();
  		body.remove();
  		network = null;
  		items = null;
  		html = null;
  		body = null;
  		info = null;
  	};
  }
  
  function Radio_n(object) {
  	var audio = new Audio();
  	var network = new Lampa.Reguest();
  	var scroll = new Lampa.Scroll({
  		mask: true,
  		over: true,
  		step: 250
  	});
  	var items = [];
  	var html = $('<div></div>');
  	var body = $('<div class="Radio_n category-full"></div>');
  	var info;
  	var last;
  	var song;
  	var playing = false;
  	this.create = function () {
  		var _this = this;
  		this.activity.loader(true);
  		network.silent(object.url.replace('api.',''), this.build.bind(this), function () {
  			var empty = new Lampa.Empty();
  			html.append(empty.render());
  			_this.start = empty.start;
  			_this.activity.loader(false);
  			_this.activity.toggle();
  		});
  		return this.render();
  	};
  	this.append = function (data) {
  		var _this3 = this;
  		var name = null;
  		var playlist = [];
  		data.forEach(function (element) {
  			var url_song = element.video;
  			var name_song = element.name;
  			if (name == null) name = name_song, song = url_song;
  			var card = Lampa.Template.get('card', {
  				title: name_song,
  				release_year: ''
  			});
  			playlist.push({
  				title: name_song,
  				url: url_song
  			});
  			card.addClass('card--radio');
  			card.find('.card__img').css({
  				'cursor': 'pointer',
  				'background-color': '#353535a6'
  			}).attr('src', element.picture ? element.picture : './img/welcome.jpg');
  			card.on('hover:focus', function () {
  				last = card[0];
  				scroll.update(card, true);
  				info.find('.info__title').text(name_song);
  				info.find('.info__title-original').text(element.time + (element.quality ? ' / ' + element.quality : ''));
  			});
  			card.on('hover:enter', function () {
  				//$(this).addClass('focus');
  				$('.title_plaing').text(name_song);
  				card.find('.card--category').addClass('focus');
  				if (url_song.indexOf('.m3u8') !== -1) {
  					var video = {
  						title: name_song,
  						url: url_song
  					};
  					Lampa.Player.play(video);
  					Lampa.Player.playlist(playlist);
  				} else _this3.Player(url_song);
  			});
  			body.append(card);
  			items.push(card);
  		});
  		if (info.find('.title_plaing').text() == '') info.find('.title_plaing').text(name);
  	};
  	this.build = function (data) {
  		var _this2 = this;
  		Lampa.Background.change(API.replace('api.','') + 'r/back.jpg');
  		info = Lampa.Template.get('info_radio');
  		info.find('#plbut').on('hover:enter hover:click', function () {
  			_this2.Player(audio.src ? audio.src : song);
  		});
  		info.find('#stbut').on('hover:enter hover:click', function () {
  			_this2.showStancia();
  		});
  		scroll.render().addClass('layer--wheight').data('mheight', info);
  		html.append(info.append());
  		html.append(scroll.render());
  		this.append(data);
  		scroll.append(body);
  		this.activity.loader(false);
  		this.activity.toggle();
  	};
  	this.showStancia = function () {
  		var catalogs = [{
  			title: 'Radio Record',
  			url: API + 'r/record/'
  		}, {
  			title: 'Ukraine',
  			url: API + 'r/ukraine/'
  		}, {
  		  title: 'Russia',
  			url: API + 'r/russia/'
  		}, {
  			title: 'Rock',
  			url: API + 'r/rock/'
  		}, {
  			title: 'Dance',
  			url: API + 'r/dance/'
  		}, {
  			title: 'Rap',
  			url: API + 'r/rap/'
  		}, {
  			title: 'Background',
  			url: API + 'r/fon/'
  		}, {
  			title: 'Jazz blues',
  			url: API + 'r/jazz/'
  		}];
  		Lampa.Select.show({
  			title: Lampa.Lang.translate('radio_style'),
  			items: catalogs,
  			onBack: function onBack() {
  				Lampa.Controller.toggle('content');
  			},
  			onSelect: function onSelect(a) {
  				Lampa.Activity.push({
  					url: a.url.replace('api.',''),
  					title: a.title,
  					component: 'Radio_n',
  					page: 1
  				});
  			}
  		});
  	};
  	this.Player = function (file) {
  		if (audio.paused || (audio.src !== file || audio.src == null)) {
  			audio.src = file;
  			audio.play();
  			info.find('.title_plaing').removeClass('blink2');
  			info.find('#plbut').removeClass('play').addClass('pause');
  		} else {
  			audio.pause();
  			info.find('.title_plaing').addClass('blink2');
  			info.find('#plbut').removeClass('pause').addClass('play');
  		}
  	};
  	this.start = function () {
  		var _this = this;
  		Lampa.Controller.add('content', {
  			toggle: function toggle() {
  				Lampa.Controller.collectionSet(scroll.render(), info);
  				Lampa.Controller.collectionFocus(last || false, scroll.render());
  			},
  			left: function left() {
  				if (Navigator.canmove('left')) Navigator.move('left');
  				else Lampa.Controller.toggle('menu');
  			},
  			right: function right() {
  				if (Navigator.canmove('right')) Navigator.move('right');
  				else _this.showStancia();
  			},
  			up: function up() {
  				if (Navigator.canmove('up')) {
  					Navigator.move('up');
  				} else {
  					if (!$('body').find('#stbut').hasClass('focus') && !$('body').find('#plbut').hasClass('focus')) {
  						if (!$('body').find('#stbut').hasClass('focus')) {
  							Lampa.Controller.collectionSet(info);
  							Navigator.move('right');
  						}
  					} else Lampa.Controller.toggle('head');
  				}
  			},
  			down: function down() {
  				if (Navigator.canmove('down')) Navigator.move('down');
  				else Lampa.Controller.toggle('content');
  			},
  			back: function back() {
  				Lampa.Activity.backward();
  			}
  		});
  		Lampa.Controller.toggle('content');
  	};
  	this.pause = function () {
  		audio.pause();
  	};
  	this.stop = function () {};
  	this.render = function () {
  		return html;
  	};
  	this.destroy = function () {
  		audio.pause();
  		network.clear();
  		scroll.destroy();
  		info.remove();
  		html.remove();
  		body.remove();
  		audio = null;
  		network = null;
  		items = null;
  		html = null;
  		body = null;
  		info = null;
  	};
  }
	
  function startPlugin() {
		window.plugin_modss = true;
		
		Lampa.Component.add('Radio_n', Radio_n);
		Lampa.Component.add('collection', collection);
	
		Lampa.Template.add('onlines_v1', "<div class='online onlines_v1 selector'><div class='online__body'><div style='position: absolute;left: 0;top: -0.3em;width: 2.4em;height: 2.4em'><svg style='height: 2.4em; width:  2.4em;' viewBox='0 0 128 128' fill='none' xmlns='http://www.w3.org/2000/svg'>   <circle cx='64' cy='64' r='56' stroke='white' stroke-width='16'/>   <path d='M90.5 64.3827L50 87.7654L50 41L90.5 64.3827Z' fill='white'/></svg>  </div><div class='online__title' style='padding-left: 2.1em;'>{title}</div><div class='online__quality' style='padding-left: 3.4em;'>{quality}{info}</div> </div></div>");
		Lampa.Template.add('modss_online_css', "<style>@charset 'UTF-8';.online_modss__episode-number-season{font-size:1em;font-weight:700;color:#fff;position:absolute;top:.5em;right:.5em;background-color: rgba(0, 0, 0, 0.4);padding:0.2em;-webkit-border-radius: 0.3em;moz-border-radius: 0.3em;border-radius: 0.3em;} .online_modss{position:relative;-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em;background-color:rgba(0,0,0,0.3);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.online_modss__body{padding:1.2em;line-height:1.3;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;position:relative}@media screen and (max-width:480px){.online_modss__body{padding:.8em 1.2em}}.online_modss__img{position:relative;width:13em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;min-height:8.2em}.online_modss__img>img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em;opacity:0;-webkit-transition:opacity .3s;-o-transition:opacity .3s;-moz-transition:opacity .3s;transition:opacity .3s}.online_modss__img--loaded>img{opacity:1}@media screen and (max-width:480px){.online_modss__img{width:7em;min-height:6em}}.online_modss__folder{padding:1em;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.online_modss__folder>svg{width:4.4em!important;height:4.4em!important}.online_modss__viewed{position:absolute;top:1em;left:1em;background:rgba(0,0,0,0.45);-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;padding:.25em;font-size:.76em}.online_modss__viewed>svg{width:1.5em!important;height:1.5em!important;}.online_modss__episode-number{position:absolute;top:0;left:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:2em}.online_modss__loader{position:absolute;top:50%;left:50%;width:2em;height:2em;margin-left:-1em;margin-top:-1em;background:url(./img/loader.svg) no-repeat center center;-webkit-background-size:contain;-moz-background-size:contain;-o-background-size:contain;background-size:contain}.online_modss__head,.online_modss__footer{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.online_modss__timeline{margin:.8em 0}.online_modss__timeline>.time-line{display:block !important}.online_modss__title{font-size:1.7em;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical}@media screen and (max-width:480px){.online_modss__title{font-size:1.4em}}.online_modss__time{padding-left:2em}.online_modss__info{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.online_modss__info>*{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical}.online_modss__quality{padding-left:1em;white-space:nowrap}.online_modss__scan-file{position:absolute;bottom:0;left:0;right:0}.online_modss__scan-file .broadcast__scan{margin:0}.online_modss .online_modss-split{font-size:.8em;margin:0 1em;flex-shrink: 0;}.online_modss.focus::after{content:'';position:absolute;top:-0.6em;left:-0.6em;right:-0.6em;bottom:-0.6em;-webkit-border-radius:.7em;-moz-border-radius:.7em;border-radius:.7em;border:solid .3em #fff;z-index:-1;pointer-events:none}.online_modss+.online_modss{margin-top:1.5em}.online_modss--folder .online_modss__footer{margin-top:.8em}.online_modss-rate{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.online_modss-rate>svg{width:1.3em!important;height:1.3em!important;}.online_modss-rate>span{font-weight:600;font-size:1.1em;padding-left:.7em}.online-empty{line-height:1.4}.online-empty__title{font-size:1.8em;margin-bottom:.3em}.online-empty__time{font-size:1.2em;font-weight:300;margin-bottom:1.6em}.online-empty__buttons{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.online-empty__buttons>*+*{margin-left:1em}.online-empty__button{background:rgba(0,0,0,0.3);font-size:1.2em;padding:.5em 1.2em;-webkit-border-radius:.2em;-moz-border-radius:.2em;border-radius:.2em;margin-bottom:2.4em}.online-empty__button.focus{background:#fff;color:black}.online-empty__templates .online-empty-template:nth-child(2){opacity:.5}.online-empty__templates .online-empty-template:nth-child(3){opacity:.2}.online-empty-template{background-color:rgba(255,255,255,0.3);padding:1em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em}.online-empty-template>*{background:rgba(0,0,0,0.3);-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em}.online-empty-template__ico{width:4em;height:4em;margin-right:2.4em}.online-empty-template__body{height:1.7em;width:70%}.online-empty-template+.online-empty-template{margin-top:1em} .online-modss-watched{padding:1em}.online-modss-watched__icon>svg{width:1.5em!important;height:1.5em!important;}.online-modss-watched__body{padding-left:1em;padding-top:.1em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.online-modss-watched__body>span+span::before{content:' ● ';vertical-align:top;display:inline-block;margin:0 .5em}   </style>");
		Lampa.Template.add('modss_online_full', "<div class=\"online_modss online_modss--full selector\"><div class=\"online_modss__img\">    <img alt=\"\">    <div class=\"online_modss__loader\"></div></div><div class=\"online_modss__body\">    <div class=\"online_modss__head\">        <div class=\"online_modss__title\">{title}</div>        <div class=\"online_modss__time\">{time}</div>    </div><div class=\"online_modss__timeline\"></div><div class=\"online_modss__footer\">        <div class=\"online_modss__info\">{info}</div>        <div class=\"online_modss__quality\">{quality}</div>    </div></div>    </div>");
        Lampa.Template.add('modss_does_not_answer', "<div class=\"online-empty\"><div class=\"online-empty__title\">    {title}</div><div class=\"online-empty__time\">    #{modss_balanser_timeout}</div><div class=\"online-empty__buttons\">    <div class=\"online-empty__button selector cancel\">#{cancel}</div>    <div class=\"online-empty__button selector change\">#{modss_change_balanser}</div></div><div class=\"online-empty__templates\">    <div class=\"online-empty-template\">        <div class=\"online-empty-template__ico\"></div>        <div class=\"online-empty-template__body\"></div>    </div>    <div class=\"online-empty-template\">        <div class=\"online-empty-template__ico\"></div>        <div class=\"online-empty-template__body\"></div>    </div>    <div class=\"online-empty-template\">        <div class=\"online-empty-template__ico\"></div>        <div class=\"online-empty-template__body\"></div>    </div></div>    </div>");
        Lampa.Template.add('modss_online_rate', "<div class=\"online_modss-rate\"><svg width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">    <path d=\"M8.39409 0.192139L10.99 5.30994L16.7882 6.20387L12.5475 10.4277L13.5819 15.9311L8.39409 13.2425L3.20626 15.9311L4.24065 10.4277L0 6.20387L5.79819 5.30994L8.39409 0.192139Z\" fill=\"#fff\"></path></svg><span>{rate}</span>    </div>");
        Lampa.Template.add('modss_online_folder', "<div class=\"online_modss online_modss--folder selector\"><div class=\"online_modss__folder\">    <svg viewBox=\"0 0 128 112\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">        <rect y=\"20\" width=\"128\" height=\"92\" rx=\"13\" fill=\"white\"></rect>        <path d=\"M29.9963 8H98.0037C96.0446 3.3021 91.4079 0 86 0H42C36.5921 0 31.9555 3.3021 29.9963 8Z\" fill=\"white\" fill-opacity=\"0.23\"></path>        <rect x=\"11\" y=\"8\" width=\"106\" height=\"76\" rx=\"13\" fill=\"white\" fill-opacity=\"0.51\"></rect>    </svg></div><div class=\"online_modss__body\">    <div class=\"online_modss__head\">        <div class=\"online_modss__title\">{title}</div>        <div class=\"online_modss__time\">{time}</div>    </div><div class=\"online_modss__footer\">        <div class=\"online_modss__info\">{info}</div>    </div></div>    </div>");
        Lampa.Template.add('modss_online_watched', "<div class=\"online_modss online-modss-watched selector\"><div class=\"online-modss-watched__icon\">    <svg width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">        <circle cx=\"10.5\" cy=\"10.5\" r=\"9\" stroke=\"currentColor\" stroke-width=\"3\"/>        <path d=\"M14.8477 10.5628L8.20312 14.399L8.20313 6.72656L14.8477 10.5628Z\" fill=\"currentColor\"/>    </svg></div><div class=\"online-modss-watched__body\">    </div></div>");
		Lampa.Template.add('modss_style', "<style>.program-body .notice__left{width:15em!important;} .program-body .notice__img{padding-bottom: 57% !important;} @media screen and (max-width:2560px){.epg--img{width:10em;}}@media screen and (max-width:420px){.program-body .notice--card{display:block} .program-body .notice__left{float:left;width:32em!important}.program-body .notice__body{float:left;} .program-body .notice__img{padding-bottom: 56% !important;}} @media screen and (max-width: 585px) {.timeline{bottom:12em}.card--new_seria {right:2em!important;bottom:10em!important} .card--last_viewD{right:80%!important;top:2em!important}}</style>");
		Lampa.Template.add('mods_radio_style', "<style>.blink2{-webkit-animation:blink2 1.5s linear infinite;animation:blink2 1.5s linear infinite}@-webkit-keyframes blink2{100%{color:rgba(34,34,34,0)}}@keyframes blink2{100%{color:rgba(34,34,34,0)}}.controll,.controll *{box-sizing:content-box;letter-spacing:0;}.controll{position:relative;transition:.5s linear;border:.3em solid #fff;background-color:#fff;border-radius:50%;bottom:4.19em;float:right;right:0;padding:1.7em;width:.2em;height:.2em;white-space:nowrap;text-align:center;cursor:pointer}.controll.pause{background-color:#353434;border-color:#3b6531}.controll,.controll .but_left,.controll .but_right,.controll:before{display:inline-block}.controll.pause .but_left,.controll.pause .but_right{margin-left:-8px;margin-top:-8px;border-left:8px solid #fff;border-top:0 solid transparent;border-bottom:0 solid transparent;height:18px}.controll.pause .but_left{border-right:10px solid transparent}.controll.play .but_right{margin-left:-5px;margin-top:-9px;border-left:15px solid #525252;border-top:10px solid transparent;border-bottom:10px solid transparent}.controll:hover,.controll.focus{background-color:#fff}.controll.play.focus{border-color:#8a8a8a}.controll.focus .but_left,.controll.focus .but_right,.controll:hover .but_left,.controll:hover .but_right{border-left-color:#252525}.Radio_n .card__view {padding-bottom: 75%!important;}.stbut,.stbut *{box-sizing:content-box;letter-spacing:0}.title_plaing{position:absolute;text-align:center;width:15em;margin-top:-1.2em;font-size:1.1em}.stbut{transition:.5s linear;border:.15em solid #fbfbfb;background-color:#000;border-radius:4em;margin-top:1em;padding:0.3em 4em 0em 0.5em;font-size:2em;cursor:pointer;height:1.5em;max-width:4em}.stbut:hover, .stbut.focus{background-color:#edebef;color:#616060;border-color:#8e8e8e}</style>");
		Lampa.Template.add('info_radio', '<div style="height:8em" class="radio_r info layer--width"><div class="info__left"><div style="margin-top:25px" class="info__title"></div><div class="info__create"></div></div><div style="display:block" class="info__right"> <b class="title_plaing"></b>   <div id="stantion_filtr"><div id="stbut" class="stbut selector"><b>СТАНЦИИ</b></div></div>    <div id="player_radio"><div id="plbut" class="controll selector play"><span class="but_left"></span><span class="but_right"></span></div></div></div></div>');
		
    
		Lampa.Lang.add({
    	pub_sort_views: {
    		ru: 'По просмотрам',
    		uk: 'По переглядах',
    		en: 'By views'
    	},
    	pub_sort_watchers: {
    		ru: 'По подпискам',
    		uk: 'За підписками',
    		en: 'Subscriptions'
    	},
    	pub_sort_updated: {
    		ru: 'По обновлению',
    		uk: 'За оновленням',
    		en: 'By update'
    	},
    	pub_sort_created: {
    		ru: 'По дате добавления',
    		uk: 'За датою додавання',
    		en: 'By date added'
    	},
    	pub_search_coll: {
    		ru: 'Поиск по подборкам',
    		uk: 'Пошук по добіркам',
    		en: 'Search by collections'
    	},
    	pub_title_all: {
    		ru: 'Все',
    		uk: 'Все',
    		en: 'All'
    	},
    	pub_title_popular: {
    		ru: 'Популярные',
    		uk: 'Популярнi',
    		en: 'Popular'
    	},
    	pub_title_new: {
    		ru: 'Новые',
    		uk: 'Новi',
    		en: 'New'
    	},
    	pub_title_hot: {
    		ru: 'Горячие',
    		uk: 'Гарячi',
    		en: 'Hot'
    	},
    	pub_title_fresh: {
    		ru: 'Свежие',
    		uk: 'Свiжi',
    		en: 'Fresh'
    	},
    	pub_title_rating: {
    		ru: 'Рейтинговые',
    		uk: 'Рейтинговi',
    		en: 'Rating'
    	},
    	pub_title_allingenre: {
    		ru: 'Всё в жанре',
    		uk: 'Все у жанрі',
    		en: 'All in the genre'
    	},
    	pub_title_popularfilm: {
    		ru: 'Популярные фильмы',
    		uk: 'Популярні фільми',
    		en: 'Popular movies'
    	},
    	pub_title_popularserial: {
    		ru: 'Популярные сериалы',
    		uk: 'Популярні сериали',
    		en: 'Popular series'
    	},
    	pub_title_newfilm: {
    		ru: 'Новые фильмы',
    		uk: 'Новi фiльми',
    		en: 'New movies'
    	},
    	pub_title_newserial: {
    		ru: 'Новые сериалы',
    		uk: 'Новi серiали',
    		en: 'New series'
    	},
    	pub_title_newconcert: {
    		ru: 'Новые концерты',
    		uk: 'Новi концерти',
    		en: 'New concerts'
    	},
    	pub_title_newdocfilm: {
    		ru: 'Новые док. фильмы',
    		uk: 'Новi док. фiльми',
    		en: 'New document movies'
    	},
    	pub_title_newdocserial: {
    		ru: 'Новые док. сериалы',
    		uk: 'Новi док. серiали',
    		en: 'New document series'
    	},
    	pub_title_newtvshow: {
    		ru: 'Новое ТВ шоу',
    		uk: 'Нове ТБ шоу',
    		en: 'New TV show'
    	},
    	pub_modal_title: {
    		ru: '1. Авторизируйтесь на сайте: <a style="color:#fff" href="#">https://kino.pub/device</a><br>2. В поле "Активация устройства" введите код.',
    		uk: '1. Авторизуйтесь на сайті: <a style="color:#fff" href="#">https://kino.pub/device</a><br>2.  Введіть код у полі "Активація пристрою".',
    		en: '1. Log in to the site: <a style="color:#fff" href="#">https://kino.pub/device</a><br>2.  Enter the code in the "Device activation" field.'
    	},
    	pub_title_wait: {
    		ru: 'Ожидание идентификации кода',
    		uk: 'Очікування ідентифікації коду',
    		en: 'Waiting for code identification'
    	},
    	pub_title_left_days: {
    		ru: 'Осталось: ',
    		uk: 'Залишилось: ',
    		en: 'Left days: '
    	},
    	pub_title_left_days_d: {
    		ru: 'дн.',
    		uk: 'дн.',
    		en: 'd.'
    	},
    	pub_title_regdate: {
    		ru: 'Дата регистрации:',
    		uk: 'Дата реєстрації:',
    		en: 'Date of registration:'
    	},
    	pub_date_end_pro: {
    		ru: 'ПРО заканчивается:',
    		uk: 'ПРО закінчується:',
    		en: 'PRO ends:'
    	},
    	pub_auth_add_descr: {
    		ru: 'Добавить в свой профиль устройство',
    		uk: 'Додати у свій профіль пристрій',
    		en: 'Add a device to your profile'
    	},
    	pub_title_not_pro: {
    		ru: 'ПРО не активирован',
    		uk: 'ПРО не активований',
    		en: 'PRO is not activated'
    	},
    	pub_device_dell_noty: {
    		ru: 'Устройство успешно удалено',
    		uk: 'Пристрій успішно видалено',
    		en: 'Device deleted successfully'
    	},
    	pub_device_title_options: {
    		ru: 'Настройки устройства',
    		uk: 'Налаштування пристрою',
    		en: 'Device Settings'
    	},
    	pub_device_options_edited: {
    		ru: 'Настройки устройства изменены',
    		uk: 'Установки пристрою змінено',
    		en: 'Device settings changed'
    	},
    	params_pub_clean_tocken: {
    		ru: 'Очистить токен',
    		uk: 'Очистити токен',
    		en: 'Clear token'
    	},
    	saved_collections_clears: {
    		ru: 'Сохранённые подборки очищены',
    		uk: 'Збірки очищені',
    		en: 'Saved collections cleared'
    	},
    	card_my_clear: {
    		ru: 'Убрать с моих подборок',
    		uk: 'Прибрати з моїх добірок',
    		en: 'Remove from my collections'
    	},
    	card_my_add: {
    		ru: 'Добавить в мои подборки',
    		uk: 'Додати до моїх добірок',
    		en: 'Add to my collections'
    	},
    	card_my_descr: {
    		ru: 'Смотрите в меню (Подборки)',
    		uk: 'Дивитесь в меню (Підбірки)',
    		en: 'Look in the menu (Collections)'
    	},
    	card_my_clear_all: {
    		ru: 'Удалить всё',
    		uk: 'Видалити все',
    		en: 'Delete all'
    	},
    	card_my_clear_all_descr: {
    		ru: 'Очистит все сохранённые подборки',
    		uk: 'Очистити всі збережені збірки',
    		en: 'Clear all saved selections'
    	},
    	radio_style: {
    		ru: 'Стиль',
    		uk: 'Стиль',
    		en: 'Style'
    	},
    	title_on_the: {
    		ru: 'на',
    		uk: 'на',
    		en: 'on'
    	},
    	title_my_collections: {
    		ru: 'Мои подборки',
    		uk: 'Мої добiрки',
    		en: 'My collections'
    	},
      modss_watch: {
        ru: 'Смотреть онлайн',
        en: 'Watch online',
        ua: 'Дивитися онлайн',
        zh: '在线观看'
      },
      online_no_watch_history: {
        ru: 'Нет истории просмотра',
        en: 'No browsing history',
        ua: 'Немає історії перегляду',
        zh: '没有浏览历史'
      },
      modss_video: {
        ru: 'Видео',
        en: 'Video',
        ua: 'Відео',
        zh: '视频'
      },
    	modss_nolink: {
    		ru: 'Не удалось извлечь ссылку',
    		uk: 'Неможливо отримати посилання',
    		en: 'Failed to fetch link'
    	},
    	modss_viewed: {
    		ru: 'Просмотрено',
    		uk: 'Переглянуто',
    		en: 'Viewed'
    	},
    	modss_balanser: {
    		ru: 'Балансер',
    		uk: 'Балансер',
    		en: 'Balancer'
    	},
    	helper_online_file: {
    		ru: 'Удерживайте клавишу "ОК" для вызова контекстного меню',
    		uk: 'Утримуйте клавішу "ОК" для виклику контекстного меню',
    		en: 'Hold the "OK" key to bring up the context menu'
    	},
    	filter_series_order: {
    		ru: 'Порядок серий',
    		uk: 'Порядок серій',
    		en: 'Series order'
    	},
    	filter_video_stream: {
    		ru: 'Видео поток',
    		uk: 'Відео потік',
    		en: 'Video stream'
    	},
    	filter_video_codec: {
    		ru: 'Кодек',
    		uk: 'Кодек',
    		en: 'Codec'
    	},
    	filter_video_server: {
    		ru: 'Сервер',
    		uk: 'Сервер',
    		en: 'Server'
    	},
    	modss_title_online: {
    		ru: 'Онлайн',
    		uk: 'Онлайн',
    		en: 'Online'
    	},
    	modss_change_balanser: {
        ru: 'Изменить балансер',
        uk: 'Змінити балансер',
        en: 'Change balancer',
        zh: '更改平衡器'
      },
      modss_clear_all_marks: {
        ru: 'Очистить все метки',
        uk: 'Очистити всі мітки',
        en: 'Clear all labels',
        zh: '清除所有标签'
      },
      modss_clear_all_timecodes: {
        ru: 'Очистить все тайм-коды',
        uk: 'Очистити всі тайм-коди',
        en: 'Clear all timecodes',
        zh: '清除所有时间代码'
      },
    	modss_title_clear_all_mark: {
    		ru: 'Снять отметку у всех',
    		uk: 'Зняти відмітку у всіх',
    		en: 'Unmark all'
    	},
    	modss_title_clear_all_timecode: {
    		ru: 'Сбросить тайм-код у всех',
    		uk: 'Скинути тайм-код у всіх',
    		en: 'Reset timecode for all'
    	},
    	modss_title_links: {
    		ru: 'Качество',
    		uk: 'Якість',
    		en: 'Quality'
    	},
    	title_proxy: {
				ru: 'Прокси',
				uk: 'Проксі',
				en: 'Proxy'
			},
			online_proxy_title: {
				ru: 'Личный прокси',
				uk: 'Особистий проксі',
				en: 'Your proxy'
			},
			online_proxy_title_descr: {
				ru: 'Если балансер недоступен или не отвечает, требуется в выбранном Вами балансере "Включить" прокси, или указать ссылку на "Свой URL"',
				uk: 'Якщо балансер недоступний або не відповідає, потрібно у вибраному Вами балансері "Увімкнути" проксі, або вказати посилання на "Свій URL"',
				en: 'If the balancer is not available or does not respond, you need to "Enable" the proxy in the balancer you have chosen, or specify a link to "Custom URL"'
			},
			online_proxy_title_main: {
				ru: 'Встроенный прокси',
				uk: 'Вбудований проксі',
				en: 'Built-in proxy'
			},
			online_proxy_title_main_descr: {
				ru: 'Позволяет использовать встроенный в систему прокси для всех балансеров',
				uk: 'Дозволяє використовувати вбудований у систему проксі для всіх балансерів',
				en: 'Allows you to use the built-in proxy for all balancers'
			},
			online_proxy_descr: {
				ru: 'Позволяет задать личный прокси для всех балансеров',
				uk: 'Дозволяє встановити особистий проксі для всіх балансерів',
				en: 'Allows you to set a personal proxy for all balancers'
			},
			online_proxy_placeholder: {
				ru: 'Например: http://proxy.com',
				uk: 'Наприклад: http://proxy.com',
				en: 'For example: http://proxy.com'
			},
			online_proxy_url: {
				ru: 'Свой URL',
				uk: 'Свiй URL',
				en: 'Mine URL'
			},
    	modss_voice_subscribe: {
    		ru: 'Подписаться на перевод',
    		uk: 'Підписатися на переклад',
    		en: 'Subscribe to translation'
    	},
    	modss_voice_success: {
    		ru: 'Вы успешно подписались',
    		uk: 'Ви успішно підписалися',
    		en: 'You have successfully subscribed'
    	},
    	modss_voice_error: {
    		ru: 'Возникла ошибка',
    		uk: 'Виникла помилка',
    		en: 'An error has occurred'
    	},
      modss_balanser_dont_work: {
        ru: 'Балансер ({balanser}) не отвечает на запрос.',
        uk: 'Балансер ({balanser}) не відповідає на запит.',
        en: 'Balancer ({balanser}) does not respond to the request.',
        zh: '平衡器（{balanser}）未响应请求。'
      },
      modss_balanser_timeout: {
        ru: 'Балансер будет переключен автоматически через <span class="timeout">10</span> секунд.',
        uk: 'Балансер буде переключено автоматично через <span class="timeout">10</span> секунд.',
        en: 'Balancer will be switched automatically in <span class="timeout">10</span> seconds.',
        zh: '平衡器将在<span class="timeout">10</span>秒内自动切换。'
      },
      modss_does_not_answer_text: {
        ru: 'Сервер не отвечает на запрос.',
        uk: 'Сервер не відповідає на запит.',
        en: 'Server does not respond to the request.',
        zh: '服务器未响应请求。'
      }, 
      modss_balanser_dont_work_from: {
        ru: ' на балансере <b>{balanser}</b>',
        uk: ' на балансері <b>{balanser}</b>',
        en: ' на балансере <b>{balanser}</b>',
      },
    	online_dash: {
        ru: 'Предпочитать DASH вместо HLS',
        uk: 'Віддавати перевагу DASH замість HLS',
        be: 'Аддаваць перавагу DASH замест HLS',
        en: 'Prefer DASH over HLS',
        zh: '比 HLS 更喜欢 DASH'
      },
    	online_query_start: {
    		ru: 'По запросу',
    		uk: 'На запит',
    		en: 'On request'
    	},
    	online_query_end: {
    		ru: 'нет результатов',
    		uk: 'немає результатів',
    		en: 'no results'
    	},
    	title_online_continue: {
    		ru: 'Продолжить',
    		uk: 'Продовжити',
    		en: 'Continue'
    	},
    	title_online_first_but: {
    		ru: 'Кнопка онлайн всегда первая',
    		uk: 'Кнопка онлайн завжди перша',
    		en: 'Online button always first'
    	},
    	title_online_continued: {
    		ru: 'Продолжить просмотр',
    		uk: 'Продовжити перегляд',
    		en: 'Continue browsing'
    	},
    	title_online_descr: {
    		ru: 'Позволяет запускать плеер сразу на том месте, где остановили просмотр. Работает только в ВСТРОЕННОМ плеере.',
    		uk: 'Дозволяє запускати плеєр одразу на тому місці, де зупинили перегляд.  Працює тільки у Вбудованому плеєрі.',
    		en: 'Allows you to start the player immediately at the place where you stopped browsing.  Works only in the INTEGRATED player.'
    	},
    	title_online_hevc: {
        ru: 'Включить поддержку HDR',
        uk: 'Включити підтримку HDR',
        en: 'Enable HDR Support',
      },
      title_online__hevc_descr: {
        ru: 'Использовать HEVC / HDR если он доступен',
        uk: 'Використовувати HEVC / HDR якщо він доступний',
        en: 'Use HEVC / HDR if available',
      },
    	title_prioriry_balanser: {
        ru: 'Балансер по умолчанию',
        uk: 'Балансер за замовчуванням',
        en: 'Default balancer',
      },
      title_prioriry_balanser_descr: {
        ru: 'Балансер фильмов по умолчанию',
        uk: 'Джерело фільмів за замовчуванням',
        en: 'Default movie source',
      },
    	filmix_param_add_title: {
    		ru: 'Добавить ТОКЕН от Filmix',
    		uk: 'Додати ТОКЕН від Filmix',
    		en: 'Add TOKEN from Filmix'
    	},
    	filmix_param_add_descr: {
    		ru: 'Добавьте ТОКЕН для подключения подписки',
    		uk: 'Додайте ТОКЕН для підключення передплати',
    		en: 'Add a TOKEN to connect a subscription'
    	},
    	filmix_param_placeholder: {
    		ru: 'Например: nxjekeb57385b..',
    		uk: 'Наприклад: nxjekeb57385b..',
    		en: 'For example: nxjekeb57385b..'
    	},
    	filmix_params_add_device: {
    		ru: 'Добавить устройство на ',
    		uk: 'Додати пристрій на ',
    		en: 'Add Device to '
    	},
    	filmix_modal_text: {
    		ru: 'Введите его на странице https://filmix.ac/consoles в вашем авторизованном аккаунте!',
    		uk: 'Введіть його на сторінці https://filmix.ac/consoles у вашому авторизованому обліковому записі!',
    		en: 'Enter it at https://filmix.ac/consoles in your authorized account!'
    	},
    	filmix_modal_wait: {
    		ru: 'Ожидаем код',
    		uk: 'Очікуємо код',
    		en: 'Waiting for the code'
    	},
    	filmix_copy_secuses: {
    		ru: 'Код скопирован в буфер обмена',
    		uk: 'Код скопійовано в буфер обміну',
    		en: 'Code copied to clipboard'
    	},
    	filmix_copy_fail: {
    		ru: 'Ошибка при копировании',
    		uk: 'Помилка при копіюванні',
    		en: 'Copy error'
    	},
    	filmix_nodevice: {
    		ru: 'Устройство не авторизовано',
    		uk: 'Пристрій не авторизований',
    		en: 'Device not authorized'
    	},
    	filmix_auth_onl: {
        ru: 'Для просмотра в качестве 720p нужно добавить устройство в свой аккаунт на сайте filmix иначе будет заставка на видео.<br><br>Перейти в настройки и добавить?',
        uk: 'Для перегляду в якостi 720p потрібно додати пристрій до свого облікового запису на сайті filmix інакше буде заставка на відео.<br><br>Перейти до налаштувань і додати?',
        en: 'To view in 720p quality, you need to add a device to your account on the filmix website, otherwise there will be a splash screen on the video.<br><br>Go to settings and add?'
        },
    	title_status: {
    		ru: 'Статус',
    		uk: 'Статус',
    		en: 'Status'
    	},
    	season_ended: {
    		ru: 'сезон завершён',
    		uk: 'сезон завершено',
    		en: 'season ended'
    	},
    	season_from: {
    		ru: 'из',
    		uk: 'з',
    		en: 'from'
    	},
    	season_new: {
    		ru: 'Новая',
    		uk: 'Нова',
    		en: 'New'
    	},
    	info_attention: {
    		ru: 'Внимание',
    		uk: 'Увага',
    		en: 'Attention'
    	},
    	info_pub_descr: {
    		ru: '<b>KinoPub</b> платный ресурс, просмотр онлайн с балансера, а так же спортивные ТВ каналы будут доступны после покупки <b>PRO</b> в аккаунте на сайте',
    		uk: '<b>KinoPub</b> платний ресурс, перегляд онлайн з балансера, а також спортивні ТБ канали будуть доступні після покупки <b>PRO</b> в обліковому записі на сайті',
    		en: '<b>KinoPub</b> a paid resource, online viewing from a balancer, as well as sports TV channels will be available after purchasing <b>PRO</b> in your account on the site'
    	},
    	info_filmix_descr: {
    		ru: 'Максимально доступное качество для просмотра без подписки - 720p. Для того, чтобы смотреть фильмы и сериалы в качестве - 1080р-2160р требуется подписка <b>PRO</b> или <b>PRO-PLUS</b> на сайте',
    		uk: 'Максимально доступна якість для перегляду без підписки – 720p.  Для того, щоб дивитися фільми та серіали як - 1080р-2160р потрібна підписка <b>PRO</b> або <b>PRO-PLUS</b> на сайтi',
    		en: 'The maximum available quality for viewing without a subscription is 720p.  In order to watch movies and series in quality - 1080p-2160p, you need a <b>PRO</b> or <b>PRO-PLUS</b> subscription to the site'
    	},
    	params_pub_on: {
    		ru: 'Включить',
    		uk: 'Увiмкнути',
    		en: 'Enable'
    	},
    	params_pub_off: {
    		ru: 'Выключить',
    		uk: 'Вимкнути',
    		en: 'Disable'
    	},
    	params_pub_on_descr: {
    		ru: 'Отображает источник "<b>KinoPub</b>", а так же подборки. Для просмотра с балансера, а так же ТВ спорт каналов <span style="color:#ffd402">требуется подписка<span>',
    		uk: 'Відображає джерело "<b>KinoPub</b>", а також добірки.  Для перегляду з балансера, а також ТБ спорт каналів <span style="color:#ffd402">потрібна підписка<span>',
    		en: 'Displays the "<b>KinoPub</b>" source as well as collections.  To view from the balancer, as well as TV sports channels <span style="color:#ffd402">subscription<span> is required'
    	},
    	params_pub_add_source: {
    		ru: 'Установить источник',
    		uk: 'Встановити джерело',
    		en: 'Set source'
    	},
    	pub_source_add_noty: {
    		ru: 'KinoPub установлен источником по умолчанию',
    		uk: 'KinoPub встановлений стандартним джерелом',
    		en: 'KinoPub set as default source'
    	},
    	descr_pub_settings: {
    		ru: 'Настройки сервера, типа потока...',
    		uk: 'Налаштування сервера типу потоку...',
    		en: 'Server settings, stream type...'
    	},
    	params_pub_add_source_descr: {
    		ru: 'Установить источник по умолчанию на KinoPub',
    		uk: 'Встановити стандартне джерело на KinoPub',
    		en: 'Set Default Source to KinoPub'
    	},
    	params_pub_update_tocken: {
    		ru: 'Обновить токен',
    		uk: 'Оновити токен',
    		en: 'Update token'
    	},
    	params_pub_dell_device: {
    		ru: 'Удалить привязку устройства',
    		uk: 'Видалити прив\'язку пристрою',
    		en: 'Remove device link'
    	},
    	params_pub_dell_descr: {
    		ru: 'Будет удалено устройство с прывязаных устройств в аккаунте',
    		uk: 'Буде видалено пристрій із прив\'язаних пристроїв в обліковому записі',
    		en: 'The device will be removed from linked devices in the account'
    	},
    	params_radio_enable: {
    		ru: 'Включить радио',
    		uk: 'Увiмкнути радiо',
    		en: 'Enable radio'
    	},
    	params_radio_enable_descr: {
    		ru: 'Отображает пункт "Радио" в главном меню с популярными радио-станциями',
    		uk: 'Відображає пункт "Радіо" в головному меню з популярними радіостанціями',
    		en: 'Displays the item "Radio" in the main menu with popular radio stations'
    	},
    	params_collections_descr: {
    		ru: 'Добавляет в пункт "Подборки" популярные разделы, такие как Rezka, Filmix, KinoPub',
    		uk: 'Додає до пункту "Підбірки" популярні розділи, такі як Rezka, Filmix, KinoPub',
    		en: 'Adds to "Collections" popular sections such as Rezka, Filmix, KinoPub'
    	},
    	params_styles_title: {
    		ru: 'Стилизация',
    		uk: 'Стилізація',
    		en: 'Stylization'
    	},
    	placeholder_password: {
    		ru: 'Введите пароль',
    		uk: 'Введіть пароль',
    		en: 'Enter password'
    	},
    	title_parent_contr: {
    		ru: 'Родительский контроль',
    		uk: 'Батьківський контроль',
    		en: 'Parental control'
    	},
    	title_addons: {
    		ru: 'Дополнения',
    		uk: 'Додатки',
    		en: 'Add-ons'
    	},
    	onl_enable_descr: {
    		ru: 'Позволяет просматривать фильмы, сериалы в режиме Stream',
    		uk: 'Дозволяє переглядати фільми, серіали в режимі Stream',
    		en: 'Allows you to watch movies, series in Stream mode'
    	},
    	succes_update_noty: {
    		ru: 'успешно обновлён',
    		uk: 'успішно оновлено',
    		en: 'successfully updated'
    	},
    	title_enable_rating: {
    		ru: 'Включить рейтинг',
    		uk: 'Увiмкнути рейтинг',
    		en: 'Enable rating'
    	},
    	title_enable_rating_descr: {
    		ru: 'Отображает в карточке рейтинг Кинопоиск и IMDB',
    		uk: 'Відображає у картці рейтинг Кінопошук та IMDB',
    		en: 'Displays the Kinopoisk and IMDB rating in the card'
    	},
    	title_info_serial: {
    		ru: 'Информация о карточке',
    		uk: 'Інформація про картку',
    		en: 'Card Information'
    	},
    	title_info_serial_descr: {
    		ru: 'Отображает информацию о количестве серий в карточке, в том числе последнею серию на постере',
    		uk: 'Відображає інформацію про кількість серій у картці, у тому числі останню серію на постері',
    		en: 'Displays information about the number of episodes in the card, including the last episode on the poster'
    	},
    	title_add_butback: {
    		ru: 'Включить кнопку "Назад"',
    		uk: 'Увiмкнути кнопку "Назад"',
    		en: 'Enable back button'
    	},
    	title_add_butback_descr: {
    		ru: 'Отображает внешнюю кнопку "Назад" для удобной навигации в полноэкраном режиме на различных смартфона',
    		uk: 'Відображає зовнішню кнопку "Назад" для зручної навігації в повноекранному режимі на різних смартфонах',
    		en: 'Displays an external back button for easy full-screen navigation on various smartphones'
    	},
    	title_butback_pos: {
    		ru: 'Положение кнопки "Назад"',
    		uk: 'Розташування кнопки "Назад"',
    		en: 'Back button position'
    	},
    	buttback_right: {
    		ru: 'Справа',
    		uk: 'Праворуч',
    		en: 'Right'
    	},
    	buttback_left: {
    		ru: 'Слева',
    		uk: 'Лiворуч',
    		en: 'Left'
    	},
    	title_close_app: {
    		ru: 'Закрыть приложение',
    		uk: 'Закрити додаток',
    		en: 'Close application'
    	},
    	title_radio: {
    		ru: 'Радио',
    		uk: 'Радiо',
    		en: 'Radio'
    	}
    });
		function FreeJaketOpt() {
  			Lampa.Arrays.getKeys(Modss.jack).map(function (el){
  			  jackets[el] = el.replace(/_/g,'.');
  			});
  			var params = Lampa.SettingsApi.getParam('parser')
        if(params){
           var param = params.find(function (p){
             return p.param.name == 'jackett_url2';
           });
          if(param) Lampa.Arrays.remove(params, param);
        }
        Lampa.SettingsApi.addParam({
  				component: 'parser',
  				param: {
  					name: 'jackett_url2', 
  					type: 'select', 			
  					values: jackets,
  					default: 'jacred_xyz'				
  				},
  				field: {
  					name: '<div class="settings-folder" style="padding:0!important"><div style="width:1.3em;height:1.3em;padding-right:.1em"><svg height="256px" width="256px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon style="fill:#074761;" points="187.305,27.642 324.696,27.642 256,236.716 "></polygon> <polygon style="fill:#10BAFC;" points="187.305,27.642 256,236.716 163.005,151.035 196.964,151.035 110.934,49.96 "></polygon> <g> <polygon style="fill:#0084FF;" points="66.917,62.218 10.45,434.55 66.917,451.922 117.726,217.908 "></polygon> <polygon style="fill:#0084FF;" points="163.005,151.035 196.964,151.035 110.934,49.96 66.917,62.218 117.726,217.908 117.726,484.356 256,484.356 256,236.716 "></polygon> </g> <polygon style="fill:#10BAFC;" points="324.696,27.642 256,236.716 348.996,151.035 315.037,151.035 401.067,49.96 "></polygon> <g> <polygon style="fill:#0084FF;" points="445.084,62.218 501.551,434.55 445.084,451.922 394.275,217.908 "></polygon> <polygon style="fill:#0084FF;" points="348.996,151.035 315.037,151.035 401.067,49.96 445.084,62.218 394.275,217.908 394.275,484.356 256,484.356 256,236.716 "></polygon> </g> <path d="M291.559,308.803c-7.49,0-13.584-6.094-13.584-13.584c0-7.49,6.094-13.584,13.584-13.584s13.584,6.094,13.584,13.584 C305.143,302.71,299.049,308.803,291.559,308.803z"></path> <path d="M291.559,427.919c-7.49,0-13.584-6.094-13.584-13.584s6.094-13.584,13.584-13.584s13.584,6.094,13.584,13.584 S299.049,427.919,291.559,427.919z"></path> <path d="M291.559,368.405c-7.49,0-13.584-6.094-13.584-13.584s6.094-13.584,13.584-13.584s13.584,6.094,13.584,13.584 S299.049,368.405,291.559,368.405z"></path> <path d="M225.677,424.785h-4.678c-5.77,0-10.449-4.679-10.449-10.449s4.679-10.449,10.449-10.449h4.678 c5.771,0,10.449,4.679,10.449,10.449S231.448,424.785,225.677,424.785z"></path> <path d="M384.063,220.125c8.948-1.219,5.008,7.842,10.646,6.617c5.637-1.225,8.551-16.691,9.775-11.052"></path> <path d="M511.881,432.984L455.414,60.652c-0.004-0.001-0.008-0.001-0.013-0.002c-0.178-1.166-0.541-2.306-1.109-3.367 c-1.346-2.513-3.66-4.367-6.407-5.131L327.627,17.613c-0.976-0.284-1.961-0.416-2.931-0.416c0-0.001-137.391-0.001-137.391-0.001 c-0.97,0.001-1.955,0.132-2.931,0.417L64.114,52.152c-2.747,0.766-5.061,2.619-6.407,5.131c-0.569,1.064-0.933,2.208-1.11,3.377 c-0.004-0.002-0.007-0.006-0.011-0.009L0.119,432.984c-0.776,5.117,2.311,10.032,7.258,11.553l56.467,17.371 c1.005,0.309,2.041,0.462,3.072,0.462c1.836,0,3.659-0.484,5.276-1.429c2.524-1.476,4.315-3.943,4.936-6.802l30.149-138.858v169.075 c0,5.771,4.679,10.449,10.449,10.449h276.548c5.77,0,10.449-4.678,10.449-10.449V315.281l30.148,138.858 c0.621,2.858,2.412,5.326,4.936,6.802c1.616,0.946,3.44,1.429,5.276,1.429c1.031,0,2.067-0.154,3.072-0.462l56.467-17.371 C509.571,443.015,512.658,438.101,511.881,432.984z M331.467,40.507l51.19,14.959l-75.578,88.795 c-2.64,3.102-3.237,7.457-1.529,11.155c1.709,3.698,5.411,6.067,9.486,6.067h7.198l-43.765,40.324L331.467,40.507z M180.533,40.507 l52.998,161.3l-43.765-40.324h7.198c4.074,0,7.776-2.369,9.486-6.067c1.708-3.698,1.112-8.053-1.529-11.155l-75.578-88.795 L180.533,40.507z M59.119,438.59l-36.987-11.379l48.512-319.89l36.269,111.136L59.119,438.59z M245.552,473.907H128.175v-49.123 h59.02c5.77,0,10.449-4.679,10.449-10.449s-4.679-10.449-10.449-10.449h-59.02V217.908c0-1.101-0.174-2.195-0.515-3.242 L80.238,69.355l27.068-7.539l67.043,78.769h-11.343c-4.304,0-8.168,2.638-9.733,6.649c-1.565,4.009-0.512,8.568,2.653,11.484 l89.627,82.578L245.552,473.907L245.552,473.907z M201.736,38.092h108.528L256,203.243L201.736,38.092z M384.341,214.666 c-0.341,1.047-0.515,2.141-0.515,3.242v255.999H266.449V241.297l89.627-82.578c3.165-2.916,4.218-7.475,2.653-11.484 c-1.565-4.01-5.429-6.649-9.733-6.649h-11.343l67.043-78.769l27.068,7.539L384.341,214.666z M452.882,438.59l-47.795-220.132 l36.268-111.136l48.515,319.89L452.882,438.59z"></path> <path d="M353.197,262.86h-61.637c-5.77,0-10.449-4.679-10.449-10.449c0-5.771,4.679-10.449,10.449-10.449h61.637 c5.77,0,10.449,4.678,10.449,10.449C363.646,258.182,358.968,262.86,353.197,262.86z"></path> </g></svg></div><div style="font-size:1.0em">Общедоступный Jackett</div></div>', 			
  					description: 'Нажмите для выбора парсера из списка' 
  				},
  				onChange: function (value) { 	
  					Lampa.Storage.set('jackett_url', Modss.jack[value].url);
  					Lampa.Storage.set('jackett_key', Modss.jack[value].key);
  					Lampa.Storage.set('jackett_interview',Modss.jack[value].interv);
  					Lampa.Storage.set('parse_in_search', false);
  					Lampa.Storage.set('parse_lang', Modss.jack[value].lang);
  					Lampa.Settings.update();							
  			 	},
  			  onRender: function (item) {
  			    setTimeout(function() {
  		        $('div[data-children="parser"]').on('hover:enter', function(){
  				  		Lampa.Settings.update();							
  				    });
  				    $('[data-name="jackett_url2"]').on('hover:enter', function (el){
    		        Lampa.Select.render().find('.selectbox-item__title').map(function(i, item){
    		          Modss.check($(item).text().toLowerCase().replace(/\./g,'_'), function(e){
    		            $(item).css('color', e ? '#23ff00' : '#d10000');
    		          });
    		        });
      		    });
  				    if(Lampa.Storage.field('parser_use')) {
    				    item.show();
    				    if(Boolean(Modss.jack[Lampa.Storage.get('jackett_url2')])) $('.settings-param__name', item).before('<div class="settings-param__status one '+(Modss.jack[Lampa.Storage.get('jackett_url2')].ok ? "active" : "error")+'"></div>');
    			      $('[data-name="jackett_url"] .settings-param__name').before('<div class="settings-param__status wait act"></div>');
    			      $('.settings-param__name', item).css('color','#f3d900');
    				    $('div[data-name="jackett_url2"]').insertAfter('div[data-children="parser"]');
    				    Modss.check($('.settings-param__value', item).text().toLowerCase().replace(/\./g,'_'), function(e){
    			        Modss.check(Lampa.Storage.get('jackett_url'));
                  $($('.settings-param__status', item)).removeClass('active error wait').addClass(e ? 'active' : 'error');
                });
  				    } else item.hide();
            }, 50);
     	    }
  			});
  		}
		Lampa.Listener.follow('full', function (e) {
			if (e.type == 'complite') {
				cards = e.data.movie;
				Modss.serialInfo(e.data.movie);
				Modss.rating_kp_imdb(e.data.movie).then(function (e) {
				  
				})['catch'](function(e){
				  {START_PRELOAD}
				});
				//$('.view--torrent').addClass('selector').empty().append('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 48 48" width="48px" height="48px"><path d="M 23.501953 4.125 C 12.485953 4.125 3.5019531 13.11 3.5019531 24.125 C 3.5019531 32.932677 9.2467538 40.435277 17.179688 43.091797 L 17.146484 42.996094 L 7 16 L 15 14 C 17.573 20.519 20.825516 32.721688 27.728516 30.929688 C 35.781516 28.948688 28.615 16.981172 27 12.076172 L 34 11 C 38.025862 19.563024 39.693648 25.901226 43.175781 27.089844 C 43.191423 27.095188 43.235077 27.103922 43.275391 27.113281 C 43.422576 26.137952 43.501953 25.140294 43.501953 24.125 C 43.501953 13.11 34.517953 4.125 23.501953 4.125 z M 34.904297 29.314453 C 34.250297 34.648453 28.811359 37.069578 21.943359 35.517578 L 26.316406 43.763672 L 26.392578 43.914062 C 33.176993 42.923925 38.872645 38.505764 41.660156 32.484375 C 41.603665 32.485465 41.546284 32.486418 41.529297 32.486328 C 38.928405 32.472567 36.607552 31.572967 34.904297 29.314453 z"/></svg><span>' + Lampa.Lang.translate('full_torrents') + '</span>');
				//$('.view--trailer').empty().append("<svg enable-background='new 0 0 512 512' id='Layer_1' version='1.1' viewBox='0 0 512 512' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g><path fill='currentColor' d='M260.4,449c-57.1-1.8-111.4-3.2-165.7-5.3c-11.7-0.5-23.6-2.3-35-5c-21.4-5-36.2-17.9-43.8-39c-6.1-17-8.3-34.5-9.9-52.3   C2.5,305.6,2.5,263.8,4.2,222c1-23.6,1.6-47.4,7.9-70.3c3.8-13.7,8.4-27.1,19.5-37c11.7-10.5,25.4-16.8,41-17.5   c42.8-2.1,85.5-4.7,128.3-5.1c57.6-0.6,115.3,0.2,172.9,1.3c24.9,0.5,50,1.8,74.7,5c22.6,3,39.5,15.6,48.5,37.6   c6.9,16.9,9.5,34.6,11,52.6c3.9,45.1,4,90.2,1.8,135.3c-1.1,22.9-2.2,45.9-8.7,68.2c-7.4,25.6-23.1,42.5-49.3,48.3   c-10.2,2.2-20.8,3-31.2,3.4C366.2,445.7,311.9,447.4,260.4,449z M205.1,335.3c45.6-23.6,90.7-47,136.7-70.9   c-45.9-24-91-47.5-136.7-71.4C205.1,240.7,205.1,287.6,205.1,335.3z'/></g></svg><span>" + Lampa.Lang.translate('full_trailers') + "</span>");
			}
		});
		Lampa.Listener.follow('activity', function (e) { 
      if (e.component == 'full' && e.type == 'start') { 
        var button = Lampa.Activity.active().activity.render().find('.view--modss_online');
       if(button.length){
         cards = e.object.card;
		  	 Modss.online(button);
				 Modss.last_view(e.object.card);
       }
     } 
    });
		Lampa.Storage.listener.follow('change', function (e) {
		  //if(e.name == 'jackett_key' || e.name == 'jackett_url') Modss.check(e.value);
		});
		Lampa.Settings.listener.follow('open', function (e) {
			if (e.name == 'main') {
				if (Lampa.Settings.main().render().find('[data-component="pub_param"]').length == 0) {
					Lampa.SettingsApi.addComponent({
						component: 'pub_param',
						name: 'KinoPub',
						icon: '<svg viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M19.7.5H4.3C2.2.5.5 2.2.5 4.3v15.4c0 2.1 1.7 3.8 3.8 3.8h15.4c2.1 0 3.8-1.7 3.8-3.8V4.3c0-2.1-1.7-3.8-3.8-3.8zM13 14.6H8.6c-.3 0-.5.2-.5.5v4.2H6V4.7h7c2.7 0 5 2.2 5 5 0 2.7-2.2 4.9-5 4.9z" fill="#ffffff" class="fill-000000 fill-ffffff"></path><path d="M13 6.8H8.6c-.3 0-.5.2-.5.5V12c0 .3.2.5.5.5H13c1.6 0 2.8-1.3 2.8-2.8.1-1.6-1.2-2.9-2.8-2.9z" fill="#ffffff" class="fill-000000 fill-ffffff"></path></svg>'
					});
				}
				if (Lampa.Settings.main().render().find('[data-component="rezka_param"]').length == 0) {
					Lampa.SettingsApi.addComponent({
						component: 'rezka_param',
						name: 'HDRezka',
						icon: '<svg height="57" viewBox="0 0 58 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 20.3735V45H26.8281V34.1262H36.724V26.9806H26.8281V24.3916C26.8281 21.5955 28.9062 19.835 31.1823 19.835H39V13H26.8281C23.6615 13 20 15.4854 20 20.3735Z" fill="white"/><rect x="2" y="2" width="54" height="53" rx="5" stroke="white" stroke-width="4"/></svg>'
					});
				}
				if (Lampa.Settings.main().render().find('[data-component="filmix_param"]').length == 0) {
					Lampa.SettingsApi.addComponent({
						component: 'filmix_param',
						name: 'Filmix',
						icon: '<svg height="57" viewBox="0 0 58 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 20.3735V45H26.8281V34.1262H36.724V26.9806H26.8281V24.3916C26.8281 21.5955 28.9062 19.835 31.1823 19.835H39V13H26.8281C23.6615 13 20 15.4854 20 20.3735Z" fill="white"/><rect x="2" y="2" width="54" height="53" rx="5" stroke="white" stroke-width="4"/></svg>'
					});
				}
				if (Lampa.Settings.main().render().find('[data-component="modss_online_param"]').length == 0) {
					Lampa.SettingsApi.addComponent({
						component: 'modss_online_param',
						name: 'Modss-Online',
						icon: '<svg height="57px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" color="#fff" fill="currentColor" class="bi bi-tv"><path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/></svg>'
					});
				}
				Lampa.Settings.main().update();
				Lampa.Settings.main().render().find('[data-component="modss_online_param"], [data-component="filmix"], [data-component="rezka_param"], [data-component="pub_param"], [data-component="filmix_param"]').addClass('hide');
			}
			if (e.name == 'mods_proxy') {
				$('.settings__title').text(Lampa.Lang.translate('title_proxy') + " MODS's");
				var ads = ['<div style="padding: 1.5em 2em; padding-top: 10px;">', '<div style="background: #3e3e3e; padding: 1em; border-radius: 0.3em;">', '<div style="font-size: 1em; margin-bottom: 1em; color: #ffd402;">#{info_attention} ⚠</div>', '<div style="line-height: 1.4;">#{online_proxy_title_descr}</div>', '</div>', '</div>'].join('');
				e.body.find('[data-name="mods_proxy_all"]').before(Lampa.Lang.translate(ads));
			} else $('.settings__title').text(Lampa.Lang.translate('menu_settings'));
			if (e.name == 'filmix_param') {
				var ads = ['<div style="padding: 1.5em 2em; padding-top: 10px;">', '<div style="background: #3e3e3e; padding: 1em; border-radius: 0.3em;">', '<div style="font-size: 1em; margin-bottom: 1em; color: #ffd402;">#{info_attention} ⚠</div>', '<div style="line-height: 1.4;">#{info_filmix_descr} <span style="color: #24b4f9">filmix.ac</span></div>', '</div>', '</div>'].join('');
				e.body.find('[data-static="true"]:eq(0)').after(Lampa.Lang.translate(ads));
				$('.settings__title').append(" Filmix");
			}
			if (e.name == 'pub_param') {
				var ads = ['<div style="padding: 1.5em 2em; padding-top: 10px;">', '<div style="background: #3e3e3e; padding: 1em; border-radius: 0.3em;">', '<div style="font-size: 1em; margin-bottom: 1em; color: #ffd402;">#{info_attention} ⚠</div>', '<div style="line-height: 1.4;">#{info_pub_descr} <span style="color: #24b4f9">kino.pub</span></div>', '</div>', '</div>'].join('');
				e.body.find('[data-static="true"]:eq(0)').after(Lampa.Lang.translate(ads));
				$('.settings__title').append(" KinoPub");
			}
			if (e.name == 'modss_online_param') {
			  $('.settings__title').text("MODS's Online");
			  var title = $('[data-name="priority_balanser"] .settings-param__value', e.body);
			  title.text(title.text().split('<').shift());
			}
			if (e.name == 'settings_modss') {
			  $('.settings__title').text("MODS's ");
			  var title = $('[data-name="priority_balanser"] .settings-param__value', e.body);
			  title.text(title.text().split('<').shift());
			}
			if (e.name == 'parser') FreeJaketOpt();
		});
		if (Lampa.Manifest.app_digital >= 177) {
      Lampa.Storage.sync('my_col', 'object_object');
      Lampa.Storage.sync('fav_chns', 'object_object');
      Lampa.Storage.sync('online_watched_last', 'object_object');
      var balansers_sync = ["filmix", "kinobase", "hdrezka", "rezka", "videocdn", "videodb", "collaps", "hdvb", "kodik", "uakino", "kinotochka", "cdnmovies", "anilibria", "videoapi", "bazon", "pub"];
      balansers_sync.forEach(function (name) {
        Lampa.Storage.sync('online_choice_' + name, 'object_object');
      });
    }
		function add() {
      Modss.init();
			$('body').append(Lampa.Template.get('mods_radio_style', {}, true));
			$('body').append(Lampa.Template.get('modss_style', {}, true));
			$('body').append(Lampa.Template.get('modss_online_css', {}, true));
			//	Lampa.Storage.set('guide', '');
			setTimeout(function () {
				//if (window.innerHeight > 700 && Lampa.Storage.field('guide') == 'undefined') guide();
			}, 3000);
			Lampa.SettingsApi.addComponent({
				component: 'settings_modss',
				name: "MODS",
				icon: "<svg viewBox='0 0 24 24' xml:space='preserve' xmlns='https://www.w3.org/2000/svg'><path d='M19.7.5H4.3C2.2.5.5 2.2.5 4.3v15.4c0 2.1 1.7 3.8 3.8 3.8h15.4c2.1 0 3.8-1.7 3.8-3.8V4.3c0-2.1-1.7-3.8-3.8-3.8zm-2.1 16.4c.3 0 .5.2.5.5s-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1V8.4l-3.2 5.4-.1.1-.1.1h-.6s-.1 0-.1-.1l-.1-.1-3-5.4v8.5h1c.3 0 .5.2.5.5s-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1V7.1h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1.7c.1 0 .2.1.2.2l3.7 6.2 3.7-6.2.2-.2h1.7c.3 0 .5.2.5.5s-.2.5-.5.5h-1v9.8h1z' fill='#ffffff' class='fill-000000'></path></svg>"
			});
			
			//Add-ons
      Lampa.SettingsApi.addParam({
				component: 'settings_modss',
				param: {
					name: 'mods_title',
					type: 'title', //доступно select,input,trigger,title,static
					default: true
				},
				field: {
					name: Lampa.Lang.translate('title_addons')
				}
			});

/* ТВИКИ */
		Lampa.SettingsApi.addComponent({
			component: 'settings_modss',
			name: 'Модификации', //Задаём название меню
			icon: '<svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"><path d="M527.579429 186.660571a119.954286 119.954286 0 1 1-67.949715 0V47.542857a33.938286 33.938286 0 0 1 67.949715 0v139.190857z m281.380571 604.598858a119.954286 119.954286 0 1 1 67.949714 0v139.190857a33.938286 33.938286 0 1 1-67.949714 0v-139.190857z m-698.441143 0a119.954286 119.954286 0 1 1 67.949714 0v139.190857a33.938286 33.938286 0 0 1-67.949714 0v-139.190857zM144.457143 13.531429c18.797714 0 34.011429 15.213714 34.011428 33.938285v410.038857a33.938286 33.938286 0 0 1-67.949714 0V47.542857c0-18.724571 15.213714-33.938286 33.938286-33.938286z m0 722.139428a60.269714 60.269714 0 1 0 0-120.466286 60.269714 60.269714 0 0 0 0 120.466286z m698.514286-722.139428c18.724571 0 33.938286 15.213714 33.938285 33.938285v410.038857a33.938286 33.938286 0 1 1-67.949714 0V47.542857c0-18.724571 15.213714-33.938286 34.011429-33.938286z m0 722.139428a60.269714 60.269714 0 1 0 0-120.466286 60.269714 60.269714 0 0 0 0 120.466286z m-349.403429 228.717714a33.938286 33.938286 0 0 1-33.938286-33.938285V520.411429a33.938286 33.938286 0 0 1 67.949715 0v410.038857a33.938286 33.938286 0 0 1-34.011429 33.938285z m0-722.139428a60.269714 60.269714 0 1 0 0 120.539428 60.269714 60.269714 0 0 0 0-120.539428z" fill="#ffffff"/></g></svg>'
		});
		Lampa.SettingsApi.addParam({
			component: 'settings_modss',
			param: {
				name: 'TORRENT_fix',
				type: 'trigger', //доступно select,input,trigger,title,static
				default: true
			},
			field: {
				name: 'Контрастная рамка на онлайне и торрентах', //Название подпункта меню
				description: 'Улучшает восприятие при выборе контента' //Комментарий к подпункту
			},
			onChange: function(value) {
				//Действия при изменении подпункта
				var green1 = '<div id="gree_style"><style>.online.focus{box-shadow: 0 0 0 0.3em #fff!important;margin-left: -.6em!important;margin-right: -.6em!important;}</style></div>';
				if(Lampa.Storage.field('TORRENT_fix') == true) {
					$('body').append(green1);
				}
				if(Lampa.Storage.field('TORRENT_fix') == false) {
					$('#gree_style').remove();
				}
				//Lampa.Settings.update();
			}
		});

/* Отключение неиспользуемой раскладки клавиатуры */
	Lampa.SettingsApi.addParam({
			component: 'settings_modss', 
			param: {
				name: 'KeyboardSwitchOff',
				type: 'select', //доступно select,input,trigger,title,static
				values: {					//значения (слева) выставляемые в поле TVmenu через Storage, справа - их видимое название в меню
					SwitchOff_None: 	'Не отключать',
					SwitchOff_UA: 		'Українська',
					SwitchOff_RU: 		'Русский',
					SwitchOff_EN: 		'English',
				},
					default: 'SwitchOff_UA'
				},
				field: {
					name: 'Неиспользуемая клавиатура', //Название подпункта меню
					description: 'Выберите язык для отключения' //Комментарий к подпункту
				},
				onChange: function (value) { //Действия при изменении подпункта
					if (Lampa.Storage.field('KeyboardSwitchOff') == 'SwitchOff_UA')	{
						Lampa.Storage.set('keyboard_default_lang', 'default')
						var elementUA = $('.selectbox-item.selector > div:contains("Українська")');
						if(elementUA.length > 0) elementUA.parent('div').hide();
					}
					if (Lampa.Storage.field('KeyboardSwitchOff') == 'SwitchOff_RU')	{
						Lampa.Storage.set('keyboard_default_lang', 'uk')
						var elementRU = $('.selectbox-item.selector > div:contains("Русский")');
						if(elementRU.length > 0) elementRU.parent('div').hide();
					}
					if ((Lampa.Storage.field('KeyboardSwitchOff') == 'SwitchOff_EN')&(Lampa.Storage.field('language') == 'uk'))	{
						Lampa.Storage.set('keyboard_default_lang', 'uk')
						var elementEN = $('.selectbox-item.selector > div:contains("English")');
						if(elementEN.length > 0) elementEN.parent('div').hide();
					}
					if ((Lampa.Storage.field('KeyboardSwitchOff') == 'SwitchOff_EN')&(Lampa.Storage.field('language') == 'ru'))	{
						Lampa.Storage.set('keyboard_default_lang', 'default')
						var elementEN = $('.selectbox-item.selector > div:contains("English")');
						if(elementEN.length > 0) elementEN.parent('div').hide();
					}
				}
	});		
/*End Отключение неиспользуемой раскладки */

/* Anime */
		Lampa.SettingsApi.addParam({
			component: 'settings_modss',
			param: {
				name: 'ANIME_fix',
				type: 'trigger', //доступно select,input,trigger,title,static
				default: true
			},
			field: {
				name: 'Удалить "Аниме" в главном меню', //Название подпункта меню
				description: '' //Комментарий к подпункту
			},
			onChange: function(value) {
				//Действия при изменении подпункта
				 if(Lampa.Storage.field('ANIME_fix') == true) $("[data-action=anime]").eq(0).hide();
				 if(Lampa.Storage.field('ANIME_fix') == false) $("[data-action=anime]").eq(0).show();
				 //Lampa.Settings.update();
			}
		});
/*End Anime */

/* SISI */ 
		Lampa.SettingsApi.addParam({
			component: 'settings_modss',
			param: {
				name: 'SISI_fix',
				type: 'trigger',
				//доступно select,input,trigger,title,static
				default: true
			},
			field: {
				name: 'Удалить "Клубничка" в главном меню',
				//Название подпункта меню
				description: '' //Комментарий к подпункту
			},
			onChange: function(value) {
				if(Lampa.Storage.field('SISI_fix') == false) {
					$('#app > div.wrap.layer--height.layer--width > div.wrap__left.layer--height > div > div > div > div > div:nth-child(1) > ul > li:contains("Клубничка")').show();
				}
				if(Lampa.Storage.field('SISI_fix') == true) {
					$('#app > div.wrap.layer--height.layer--width > div.wrap__left.layer--height > div > div > div > div > div:nth-child(1) > ul > li:contains("Клубничка")').hide();
				}
			}
		});
/* Стиль в плеере - YouTube */
		Lampa.SettingsApi.addParam({
			component: 'settings_modss',
			param: {
				name: 'YouTubeStyle',
				type: 'trigger',
				//доступно select,input,trigger,title,static
				default: false
			},
			field: {
				name: 'Стилизация встроенного плеера',
				//Название подпункта меню
				description: 'В стиле YouTube' //Комментарий к подпункту
			},
			onChange: function(value) {
				//Действия при изменении подпункта
				if(Lampa.Storage.field('YouTubeStyle') == false) {
					$('#YOUTUBESTYLE').remove();
					$('#YOUTUBESTYLE-POSITION').remove();
					$('#YOUTUBESTYLE-POSITION-focus').remove();
				}
				if(Lampa.Storage.field('YouTubeStyle') == true) {
					$('body').append(Lampa.Template.get('YOUTUBESTYLE', {}, true));
					$('body').append(Lampa.Template.get('YOUTUBESTYLE-POSITION', {}, true));
					$('body').append(Lampa.Template.get('YOUTUBESTYLE-POSITION-focus', {}, true));
				}
				//Lampa.Settings.update();
			},
			onRender: function(item) {
				Lampa.Template.add('YOUTUBESTYLE', '<div id="YOUTUBESTYLE" class="hide"><style>div.player-panel__position{background-color: #f00!important;}</style></div>');
				Lampa.Template.add('YOUTUBESTYLE-POSITION', '<div id="YOUTUBESTYLE-POSITION" class="hide"><style>div.player-panel__position>div:after{background-color: #f00!important; box-shadow: 0 0 3px 0.2em!important;}</style></div>');
				Lampa.Template.add('YOUTUBESTYLE-POSITION-focus', '<div id="YOUTUBESTYLE-POSITION-focus" class="hide"><style>body > div.player > div.player-panel.panel--paused > div > div.player-panel__timeline.selector.focus > div.player-panel__position > div:after{box-shadow: 0 0 3px 0.2em!important;}</style></div>');
			}

		});
/* End Стиль в плеере - YouTube */

/* Часы в плеере - МЕНЮ */
		Lampa.SettingsApi.addParam({
			component: 'settings_modss',
			param: {
				name: 'ClockInPlayer',
				type: 'trigger',
				//доступно select,input,trigger,title,static
				default: false
			},
			field: {
				name: 'Часы во встроенном плеере',
				//Название подпункта меню
				description: 'Через 5 секунд после включения плеера' //Комментарий к подпункту
			},
			onChange: function(value) {
				//Действия при изменении подпункта
				//Lampa.Settings.update();
			}
		});
	
	Lampa.Template.add('CLOCKSTYLE', '<div id="clockstyle"><style>#MyClockDiv{position: fixed!important;' + Lampa.Storage.get('Clock_coordinates') + '; z-index: 51!important}</style></div>');
	$('body').append(Lampa.Template.get('CLOCKSTYLE', {}, true));
	if (Lampa.Storage.field('ClockInPlayerPosition') == 'Center_Up'){	
		$('#clockstyle').remove();
		Lampa.Template.add('CLOCKSTYLE', '<div id="clockstyle" class="head__time-now time--clock hide"><style>#MyClockDiv{position: absolute!important; display: flex !important; z-index: 51!important;' + ' top: 2%;left: 49%;transform: translate(-33%, -50%);}</style></div>');
		$('body').append(Lampa.Template.get('CLOCKSTYLE', {}, true));
	}
	
	/* Часы в плеере - Функция*/
		function updateClock() {
			var MyTime = document.querySelector("[class='head__time-now time--clock']").innerHTML;
			$("#MyClockDiv").remove();
			$("#MyLogoDiv").remove()
			var MyDiv = '<div id="MyClockDiv" class="head__time-now time--clock hide" ></div>';
			var MyLogo = '<div id="MyLogoDiv" class="hide" style="z-index: 51!important; position: fixed!important; visibility: hidden;"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/FreeTv_Egypt_Logo.png/640px-FreeTv_Egypt_Logo.png" width="100" height="100"></div>'
			$('.player').append(MyDiv);
			//$('.player').append(MyLogo)
			if(Lampa.Storage.field('ClockInPlayer') == true) {
				if (($('body > div.player > div.player-panel').hasClass( "panel--visible" ) == false) || ($('body > div.player > div.player-info').hasClass( "info--visible" ) == false)) {
					$('#MyClockDiv').removeClass('hide');
				}
			}
			$("#MyClockDiv").text(MyTime);
		}

	/* Запускаем часы, интервал обновления 200 миллисекунд */
			Lampa.Template.add('clockcenter', '<style>.hide{visibility: hidden!important;}</style>');
			$('body').append(Lampa.Template.get('clockcenter', {}, true));
			setInterval(updateClock, 200);

/* End Часы в плеере */

/* Положение часов в плеере */
	Lampa.SettingsApi.addParam({
			component: 'settings_modss', 
			param: {
				name: 'ClockInPlayerPosition',
				type: 'select', //доступно select,input,trigger,title,static
				values: {					//значения (слева) выставляемые в поле TVmenu через Storage, справа - их видимое название в меню
					Left_Up: 	'Слева сверху ',
					Left_Down: 	'Слева снизу',
					Right_Up: 	'Справа сверху',
					Right_Down: 'Справа снизу',
					Center_Up:  'В центре сверху',
				},
					default: 'Left_Up'
				},
				field: {
					name: 'Положение часов на экране', //Название подпункта меню
					description: 'Выберите угол экрана' //Комментарий к подпункту
				},
				onChange: function (value) { //Действия при изменении подпункта
					document.querySelector("#clockstyle").remove();
					if (Lampa.Storage.field('ClockInPlayerPosition') == 'Left_Up')		Lampa.Storage.set('Clock_coordinates', 'bottom: 90%!important; right: 90%!important');
					if (Lampa.Storage.field('ClockInPlayerPosition') == 'Left_Down')	Lampa.Storage.set('Clock_coordinates', 'bottom: 10%!important; right: 90%!important'); //bottom: 90%!important; right: 10%!important
					if (Lampa.Storage.field('ClockInPlayerPosition') == 'Right_Up')		Lampa.Storage.set('Clock_coordinates', 'bottom: 90%!important; right: 12%!important');
					if (Lampa.Storage.field('ClockInPlayerPosition') == 'Right_Down')	Lampa.Storage.set('Clock_coordinates', 'bottom: 10%!important; right: 5%!important');
					
					Lampa.Template.add('CLOCKSTYLE', '<div id="clockstyle"><style>#MyClockDiv{position: fixed!important;' + Lampa.Storage.get('Clock_coordinates') + '; z-index: 51!important}</style></div>');
					$('body').append(Lampa.Template.get('CLOCKSTYLE', {}, true));
					
					if (Lampa.Storage.field('ClockInPlayerPosition') == 'Center_Up'){	
						$('#clockstyle').remove();
						Lampa.Template.add('CLOCKSTYLE', '<div id="clockstyle" class="head__time-now time--clock hide"><style>#MyClockDiv{position: absolute!important; display: flex !important; z-index: 51!important;' + ' top: 2%;left: 49%;transform: translate(-50%, -50%);}</style></div>');
						$('body').append(Lampa.Template.get('CLOCKSTYLE', {}, true));
					}
					//Lampa.Settings.update(); 
					
				}
	});		
/*End Положение часов в плеере */

/* Активация торрентов при старте */
var green1 = '<div id="gree_style"><style>.online.focus{box-shadow: 0 0 0 0.3em #fff!important;margin-left: -.6em!important;margin-right: -.6em!important;}</style></div>';
if(Lampa.Storage.field('TORRENT_fix') == true) {
	$('body').append(green1);
}

/* Отключение языков при старте */
		setInterval(function() {
			var elementCHlang = $('div.hg-button.hg-functionBtn.hg-button-LANG.selector.binded')
			if (elementCHlang.length > 0){
					if (Lampa.Storage.field('KeyboardSwitchOff') == 'SwitchOff_UA')	{
						Lampa.Storage.set('keyboard_default_lang', 'default')
						var elementUA = $('.selectbox-item.selector > div:contains("Українська")');
						if(elementUA.length > 0) elementUA.parent('div').hide();
					}
					if (Lampa.Storage.field('KeyboardSwitchOff') == 'SwitchOff_RU')	{
						Lampa.Storage.set('keyboard_default_lang', 'uk')
						var elementRU = $('.selectbox-item.selector > div:contains("Русский")');
						if(elementRU.length > 0) elementRU.parent('div').hide();
					}
					if ((Lampa.Storage.field('KeyboardSwitchOff') == 'SwitchOff_EN')&(Lampa.Storage.field('language') == 'uk'))	{
						Lampa.Storage.set('keyboard_default_lang', 'uk')
						var elementEN = $('.selectbox-item.selector > div:contains("English")');
						if(elementEN.length > 0) elementEN.parent('div').hide();
					}
					if ((Lampa.Storage.field('KeyboardSwitchOff') == 'SwitchOff_EN')&(Lampa.Storage.field('language') == 'ru'))	{
						Lampa.Storage.set('keyboard_default_lang', 'default')
						var elementEN = $('.selectbox-item.selector > div:contains("English")');
						if(elementEN.length > 0) elementEN.parent('div').hide();
					}
				}
			}, 0)

/* Стиль в плеере - YouTube при старте*/
			if(Lampa.Storage.field('YouTubeStyle') == true) {
				Lampa.Template.add('YOUTUBESTYLE', '<div id="YOUTUBESTYLE" class="hide"><style>div.player-panel__position{background-color: #f00!important;}</style></div>');
				Lampa.Template.add('YOUTUBESTYLE-POSITION', '<div id="YOUTUBESTYLE-POSITION" class="hide"><style>div.player-panel__position>div:after{background-color: #f00!important; box-shadow: 0 0 3px 0.2em!important;}</style></div>');
				Lampa.Template.add('YOUTUBESTYLE-POSITION-focus', '<div id="YOUTUBESTYLE-POSITION-focus" class="hide"><style>body > div.player > div.player-panel.panel--paused > div > div.player-panel__timeline.selector.focus > div.player-panel__position > div:after{box-shadow: 0 0 3px 0.2em!important;}</style></div>');
				$('body').append(Lampa.Template.get('YOUTUBESTYLE', {}, true));
				$('body').append(Lampa.Template.get('YOUTUBESTYLE-POSITION', {}, true));
				$('body').append(Lampa.Template.get('YOUTUBESTYLE-POSITION-focus', {}, true));
			}


/* Удаление SISI при старте */
if(Lampa.Storage.field('SISI_fix') == true) {
	setTimeout(function() {
		$('#app > div.wrap.layer--height.layer--width > div.wrap__left.layer--height > div > div > div > div > div:nth-child(1) > ul > li:contains("Клубничка")').hide()
	}, 3000);
}
if(Lampa.Storage.field('ANIME_fix') == true) {
	setTimeout(function() {
		$('#app > div.wrap.layer--height.layer--width > div.wrap__left.layer--height > div > div > div > div > div:nth-child(1) > ul > li:contains("Аниме")').hide()
	}, 3000);
}
if(Lampa.Storage.field('ANIME_fix') == true) $("[data-action=anime]").eq(0).hide();
if(Lampa.Storage.field('SISI_fix') == true) $("[data-action=sisi]").eq(0).show();

     
			//Radio
			Lampa.SettingsApi.addParam({
				component: 'settings_modss',
				param: {
					name: 'mods_radio',
					type: 'trigger', //доступно select,input,trigger,title,static
					default: false
				},
				field: {
					name: Lampa.Lang.translate('params_radio_enable'),
					description: Lampa.Lang.translate('params_radio_enable_descr')
				},
				onChange: function (value) {
					Modss.radio();
				}
			});
			//Collection
			Lampa.SettingsApi.addParam({
				component: 'settings_modss',
				param: {
					name: 'mods_collection',
					type: 'trigger', //доступно select,input,trigger,title,static
					default: false
				},
				field: {
					name: Lampa.Lang.translate('params_pub_on') + ' ' + Lampa.Lang.translate('menu_collections').toLowerCase(),
					description: Lampa.Lang.translate('params_collections_descr')
				},
				onChange: function (value) {
					if (value == 'true') Modss.collections();
					else $('body').find('.menu [data-action="collection"]').remove();
				}
			});

			Lampa.SettingsApi.addParam({
				component: 'settings_modss',
				param: {
					name: 'mods_snow',
					type: 'trigger', //доступно select,input,trigger,title,static
					default: false
				},
				field: {
					name: 'Снег'
				},
				onChange: function (value) {
					Modss.snow();
				}
			});
			Lampa.SettingsApi.addParam({
				component: 'settings_modss',
				param: {
					name: 'mods_rating',
					type: 'trigger', //доступно select,input,trigger,title,static
					default: true
				},
				field: {
					name: Lampa.Lang.translate('title_enable_rating'),
					description: Lampa.Lang.translate('title_enable_rating_descr')
				},
				onChange: function (value) {
				  if (value == 'true') {
  				  $('body').find('.rate--kp, .rate--imdb').removeClass('hide');
  				  Modss.rating_kp_imdb(cards);
  				} else $('body').find('.rate--kp, .rate--imdb').addClass('hide');
  			}
			});
			Lampa.SettingsApi.addParam({
				component: 'settings_modss',
				param: {
					name: 'mods_serial_info',
					type: 'trigger', //доступно select,input,trigger,title,static
					default: true
				},
				field: {
					name: Lampa.Lang.translate('title_info_serial'),
					description: Lampa.Lang.translate('title_info_serial_descr')
				},
				onChange: function (value) {
					if (value == 'true' && $('body').find('.full-start__poster').length) Modss.serialInfo(cards);
					else $('body').find('.files__left .time-line, .card--last_view, .card--new_seria').remove();
				}
			});
			if (/iPhone|iPad|iPod|android|x11/i.test(navigator.userAgent) || (Lampa.Platform.is('android') && window.innerHeight < 1080)) {
				Lampa.SettingsApi.addParam({
					component: 'settings_modss',
					param: {
						name: 'mods_butt_back',
						type: 'trigger', //доступно select,input,trigger,title,static
						default: false
					},
					field: {
						name: Lampa.Lang.translate('title_add_butback'),
						description: Lampa.Lang.translate('title_add_butback_descr')
					},
					onChange: function (value) {
						Lampa.Settings.update();
						if (value == 'true') Modss.buttBack();
						else $('body').find('.elem-mobile-back').remove();
					}
				});
				Lampa.SettingsApi.addParam({
					component: 'settings_modss',
					param: {
						name: 'mods_butt_pos',
						type: 'select', //доступно select,input,trigger,title,static
						values: {
							right: Lampa.Lang.translate('buttback_right'),
							left: Lampa.Lang.translate('buttback_left')
						},
						default: 'right'
					},
					field: {
						name: Lampa.Lang.translate('title_butback_pos'),
					},
					onRender: function (item) {
						if (Lampa.Storage.field('mods_butt_back')) item.show();
						else item.hide();
					},
					onChange: function (value) {
						Modss.buttBack(value);
					}
				});
			}
			
			//Close_app 
			if (Lampa.Platform.is('android')) {
				Lampa.SettingsApi.addComponent({
					component: 'mods_exit',
					name: Lampa.Lang.translate('title_close_app'),
					icon: '<svg data-name="Layer 1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect height="46" rx="4" ry="4" width="46" x="1" y="1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px" class="stroke-1d1d1b"></rect><path d="m12 12 24 24M12 36l24-24" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px" class="stroke-1d1d1b"></path></svg>'
				});
				Lampa.SettingsApi.addParam({
					component: 'mods_exit',
					param: {
						name: 'close_app',
						type: 'static', //доступно select,input,trigger,title,static
						default: true
					},
					field: {
						name: ''
					},
					onRender: function (item) {
						Lampa.Android.exit();
					}
				});
			}
			FreeJaketOpt();
		}
		
		if (window.appready) add();else {
      Lampa.Listener.follow('app', function (e) {
        if (e.type == 'ready') add();
      });
    }
		
    function url$1(u) {
			var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			if (params.genres) u = add$4(u, 'genre=' + params.genres);
			if (params.page) u = add$4(u, 'page=' + params.page);
			if (params.query) u = add$4(u, 'q=' + params.query);
			if (params.type) u = add$4(u, 'type=' + params.type);
			if (params.field) u = add$4(u, 'field=' + params.field);
			if (params.id) u = add$4(u, 'actor=' + params.id);
			if (params.perpage) u = add$4(u, 'perpage=' + params.perpage);
			u = add$4(u, 'access_token=' + Pub.token);
			if (params.filter) {
				for (var i in params.filter) {
					u = add$4(u, i + '=' + params.filter[i]);
				}
			}
			return Pub.baseurl + u;
		}
		function add$4(u, params) {
			return u + (/\?/.test(u) ? '&' : '?') + params;
		}
		function get$6(method, call) {
			var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var oncomplite = arguments.length > 2 ? arguments[2] : undefined;
			var onerror = arguments.length > 3 ? arguments[3] : undefined;
			var u = url$1(method, params);
			Pub.network.silent(u, function (json) {
				json.url = method;
				oncomplite(json);
			}, onerror);
		}
		function tocard(element) {
			return {
				url: '',
				id: element.id,
				type: element.type,
				title: element.title.split('/')[0],
				promo_title: element.title.split('/')[0],
				original_title: element.title.split('/')[1] || element.title,
				release_date: (element.year ? element.year + '' : element.years ? element.years[0] + '' : '0000'),
				first_air_date: element.type == 'serial' || element.type == 'docuserial' || element.type == 'tvshow' ? element.year : '',
				vote_averagey: parseFloat((element.imdb_rating || 0) + '').toFixed(1),
				vote_average: element.imdb_rating || 0,
				poster: element.posters.big,
				cover: element.posters.wide,
				background_image: element.posters.wide,
        imdb_rating: parseFloat(element.imdb_rating || '0.0').toFixed(1),
        kp_rating: parseFloat(element.kinopoisk_rating || '0.0').toFixed(1),
				year: element.year,
				years: element.years
			};
		}
		function list$2(params, oncomplite, onerror) {
			var url = url$1('v1/items', params, params.type = type);
			if (!params.genres) url = url$1(params.url, params);
			Pub.network["native"](url, function (json) {
				var items = [];
				if (json.items) {
					json.items.forEach(function (element) {
						items.push(tocard(element));
					});
				}
				oncomplite({
					results: items,
					page:json.pagination.current,
					total_pages: json.pagination.total
				});
			}, onerror);
		}
		function main$2(params, oncomplite, onerror) {
			var status = new Lampa.Status(9);
			status.onComplite = function () {
				var fulldata = [];
				var data = status.data;
				for (var i = 1; i <= 9; i++) {
					var ipx = 's' + i;
					if (data[ipx] && data[ipx].results.length) fulldata.push(data[ipx]);
				}
				if (fulldata.length) oncomplite(fulldata);
				else onerror();
			};
			var append = function append(title, name, json) {
				json.title = title;
				var data = [];
				json.items.forEach(function (element) {
					data.push(tocard(element));
				});
				if(name == 's1' || name == 's6') {
				  json.wide = true;
				  json.small = true;
				}
				if(name == 's2') {
				  data.forEach(function (el){
				    el.poster = el.cover;
				  });
				  json.collection = true;
				  json.line_type  = 'collection';
				}
				json.results = data;
				status.append(name, json);
			};
			get$6('v1/items/popular?type=movie&sort=views', params, function (json) {
				append(Lampa.Lang.translate('pub_title_popularfilm'), 's1', json);
				Lampa.VideoQuality.add(json.results);
			}, status.error.bind(status));
			get$6('v1/items?type=movie&sort=updated-', params, function (json) {
				append(Lampa.Lang.translate('pub_title_newfilm'), 's2', json);
			}, status.error.bind(status));
			get$6('v1/items/popular?type=serial&sort=views', params, function (json) {
				append(Lampa.Lang.translate('pub_title_popularserial'), 's3', json);
				Lampa.VideoQuality.add(json.results);
			}, status.error.bind(status));
			get$6('v1/items?type=serial&sort=updated-', params, function (json) {
				append(Lampa.Lang.translate('pub_title_newserial'), 's4', json);
			}, status.error.bind(status));
			get$6('v1/items?type=concert&sort=updated-', params, function (json) {
				append(Lampa.Lang.translate('pub_title_newconcert'), 's5', json);
			}, status.error.bind(status));
			get$6('v1/items?type=&quality=4', params, function (json) {
				append('4K', 's6', json);
			}, status.error.bind(status));
			get$6('v1/items?type=documovie&sort=updated-', params, function (json) {
				append(Lampa.Lang.translate('pub_title_newdocfilm'), 's7', json);
			}, status.error.bind(status));
			get$6('v1/items?type=docuserial&sort=updated-', params, function (json) {
				append(Lampa.Lang.translate('pub_title_newdocserial'), 's8', json);
			}, status.error.bind(status));
			get$6('v1/items?type=tvshow&sort=updated-', params, function (json) {
				append(Lampa.Lang.translate('pub_title_newtvshow'), 's9', json);
			}, status.error.bind(status));
		}
		function category$1(params, oncomplite, onerror) {
			var books = Lampa.Favorite.continues(params.url);
			var status = new Lampa.Status(5);
			status.onComplite = function () {
				var fulldata = [];
				if (books.length) fulldata.push({
					results: books,
					title: params.url == 'tv' ? Lampa.Lang.translate('title_continue') : Lampa.Lang.translate('title_watched')
				});
				var data = status.data;
				for (var i = 1; i <= 5; i++) {
					var ipx = 's' + i;
					if (data[ipx] && data[ipx].results.length) fulldata.push(data[ipx]);
				}
				if (fulldata.length) oncomplite(fulldata);
				else onerror();
			};
			var append = function append(title, name, json) {
				json.title = title;
				var data = [];
				json.items.forEach(function (element) {
					data.push(tocard(element));
				});
				json.results = data;
				status.append(name, json);
			};
			var type = params.url == 'tv' ? 'serial' : params.url;
			var Name = params.genres ? params.typeName.toLowerCase() : params.url == 'tv' ? Lampa.Lang.translate('menu_tv').toLowerCase() : Lampa.Lang.translate('menu_movies').toLowerCase();
			if (params.genres) {
				get$6('v1/items?type=' + type + (params.genres ? '&sort=created-' : ''), params, function (json) {
					append(Lampa.Lang.translate('pub_title_new') + ' ' + params.janr.toLowerCase(), 's1', json);
				}, status.error.bind(status));
				get$6('v1/items?type=' + type + 'sort=rating-', params, function (json) {
					append(Lampa.Lang.translate('pub_title_rating') + ' ' + Name, 's2', json);
				}, status.error.bind(status));
				get$6('v1/items?type=' + type + '&sort=updated-', params, function (json) {
					append(Lampa.Lang.translate('pub_title_fresh') + ' ' + Name, 's3', json);
				}, status.error.bind(status));
				get$6('v1/items?type=' + type + '&sort=views-', params, function (json) {
					append(Lampa.Lang.translate('pub_title_hot') + ' ' + Name, 's4', json);
				}, status.error.bind(status));
				get$6('v1/items?type=' + type + '&quality=4', params, function (json) {
					append('4K ' + Name, 's5', json);
				}, status.error.bind(status));
			} else {
				get$6('v1/items?type=' + type + (params.genres ? '&sort=created-' : ''), params, function (json) {
					append(Lampa.Lang.translate('pub_title_new') + ' ' + Name, 's1', json);
				}, status.error.bind(status));
				get$6('v1/items/popular?type=' + type + '&sort=views-&conditions=' + encodeURIComponent("year=" + Date.now('Y')), params, function (json) {
					append(Lampa.Lang.translate('pub_title_popular') + ' ' + Name, 's2', json);
				}, status.error.bind(status));
				get$6('v1/items/fresh?type=' + type + '&sort=views-&conditions=' + encodeURIComponent("year=" + Date.now('Y')), params, function (json) {
					append(Lampa.Lang.translate('pub_title_fresh') + ' ' + Name, 's3', json);
				}, status.error.bind(status));
				get$6('v1/items/hot?type=' + type + '&sort=created-&conditions=' + encodeURIComponent("year=" + Date.now('Y')), params, function (json) {
					append(Lampa.Lang.translate('pub_title_hot') + ' ' + Name, 's4', json);
				}, status.error.bind(status));
				get$6('v1/items?type=' + type + '&quality=4', params, function (json) {
					append('4K ' + Name, 's5', json);
				}, status.error.bind(status));
			}
		}
		function full$1(params, oncomplite, onerror) {
			var status = new Lampa.Status(Lampa.Storage.get('pro_pub', false) ? 5 : 4);
			status.onComplite = oncomplite;
			var url = 'v1/items/' + params.id;
			get$6(url, params, function (json) {
				json.source = 'pub';
				var data = {};
				var element = json.item;
				get$6('v1/items/similar?id=' + element.id, params, function (json) {
					var similars = [];
					if (json.items) {
						for (var i in json.items) {
							var item = json.items[i];
							similars.push(tocard(item));
						}
						status.append('simular', {
							results: similars
						});
					}
				}, onerror);
				get$6('v1/items/comments?id=' + element.id, params, function (json) {
					var comments = [];
					if (json.comments) {
						for (var i in json.comments) {
							var com = json.comments[i];
							com.text = com.message.replace(/\[n|r|t]/g, '');
							com.like_count = com.rating;
							comments.push(com);
						}
						status.append('comments', comments);
					}
				}, onerror);
				data.movie = {
					id: element.id,
					url: url,
					type: element.type,
					source: 'pub',
					title: element.title.split('/')[0],
					original_title: element.title.split('/')[1] ? element.title.split('/')[1] : element.title.split('/')[0],
					name: element.seasons ? element.title.split('/')[0] : '',
					original_name: element.seasons ? element.title.split('/')[1] : '',
					overview: element.plot.replace(/\[n|r|t]/g, ''),
					img: element.posters.big,
					runtime: (element.duration.average || 0) / 1000 / 6 * 100,
					genres: genres$1(element, json.item),
					vote_average: parseFloat(element.imdb_rating || element.kinopoisk_rating || '0'),
					production_companies: [],
					production_countries: countries(element.countries, json.item),
					budget: element.budget || 0,
					seasons: element.seasons && element.seasons.filter(function (el){
					  el.episode_count = 1;
					  return el
					}) || '',
					release_date: element.year || Lampa.Utils.parseTime(element.created_at).full || '0000',
					number_of_seasons: seasonsCount(element).seasons,
					number_of_episodes: seasonsCount(element).episodes,
					first_air_date: element.type == 'serial' || element.type == 'docuserial' || element.type == 'tvshow' ? element.year || Lampa.Utils.parseTime(element.created_at).full || '0000' : '', 
					background_image: element.posters.wide,
          imdb_rating: parseFloat(element.imdb_rating || '0.0').toFixed(1),
          kp_rating: parseFloat(element.kinopoisk_rating || '0.0').toFixed(1),
          imdb_id:'tt' +element.imdb,
          kinopoisk_id:element.kinopoisk
				};
				status.append('persons', persons(json));
				status.append('movie', data.movie);
				if(Lampa.Storage.get('pro_pub', false)) status.append('videos', videos(element));
			}, onerror);
		}
		function menu$1(params, oncomplite) {
			var u = url$1('v1/types', params);
			var typeName = '';
			Pub.network["native"](u, function (json) {
				Lampa.Select.show({
					title: Lampa.Lang.translate('title_category'),
					items: json.items,
					onBack: this.onBack,
					onSelect: function onSelect(a) {
						type = a.id;
						typeName = a.title;
						get$6('v1/genres?type=' + a.id, params, function (jsons) {
							Lampa.Select.show({
								title: Lampa.Lang.translate('full_genre'),
								items: jsons.items,
								onBack: function onBack() {
									menu$1(params, oncomplite);
								},
								onSelect: function onSelect(a) {
									Lampa.Activity.push({
										url: type,
										title: Lampa.Lang.translate('title_catalog') + ' - ' + typeName + ' - ' + a.title + ' - KinoPUB',
										component: 'category',
										typeName: typeName,
										janr: a.title,
										genres: a.id,
										id: a.id,
										source: 'pub',
										card_type: true,
										page: 1
									});
								}
							});
						}, onerror);
					}
				});
			});
		}
		function seasons$2(tv, from, oncomplite) {
			Lampa.Api.sources.tmdb.seasons(tv, from, oncomplite);
		}
		function person$2(params, oncomplite, onerror) {
			var u = url$1('v1/items', params);
			Pub.network["native"](u, function (json, all) {
				var data = {};
				if (json.items) {
					data.person = {
						name: params.id,
						biography: '',
						img: '',
						place_of_birth: '',
						birthday: '----'
					};
					var similars = [];
					for (var i in json.items) {
						var item = json.items[i];
						similars.push(tocard(item));
					}
					data.credits = {
						movie: similars,
						knownFor: [{
						  name: '', 
						  credits: similars
						}]
					};
				}
				oncomplite(data);
			}, onerror);
		}
		function clear$3() {
			Pub.network.clear();
		}
		function seasonsCount(element) {
			var data = {
				seasons: 0,
				episodes: 0
			};
			if (element.seasons) {
				data.seasons = element.seasons.length;
				element.seasons.forEach(function (ep) {
					data.episodes += ep.episodes.length;
				})
			}
			return data;
		}
		function videos(element) {
			var data = [];
			if (element.trailer) {
				data.push({
					name: element.trailer.title,
					url: element.trailer.url,
					player: true
				});
			}
			return data.length ? {
				results: data
			} : false;
		}
		function persons(json) {
			var data = [];
			if (json.item.cast) {
				json.item.cast.split(',').forEach(function (name) {
					data.push({
						name: name,
						id: name,
						character: Lampa.Lang.translate('title_actor'),
					});
				});
			}
			return data.length ? {
				cast: data
			} : false;
		}
		function genres$1(element, json) {
			var data = [];
			element.genres.forEach(function (id) {
				if (id) {
					data.push({
						id: id.id,
						name: id.title
					});
				}
			});
			return data;
		}
		function countries(element, json) {
			var data = [];
			if (element && json.countries) {
				data.push({
					name: element[0].title
				});
			}
			return data;
		}
		function search$3() {
			var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
			var status = new Lampa.Status(2);
			status.onComplite = function (data) {
				var items = [];
				if (data.movie && data.movie.results.length) items.push(data.movie);
				if (data.tv && data.tv.results.length) items.push(data.tv);
				oncomplite(items);
			};
			var mov = params;
			mov.type = '';
			mov.field = 'title';
			mov.perpage = 20;
			get$6('v1/items/search', mov, function (json) {
				var items = [];
				var itemss = [];
				if (json.items) {
					json.items.forEach(function (element) {
						if(element.type == 'movie') items.push(tocard(element));
						else itemss.push(tocard(element));
					});
					var movie = {
						results: items,
						page: json.pagination.current,
						total_pages: json.pagination.total,
						total_results: json.pagination.total_items,
						title: Lampa.Lang.translate('menu_movies') +' ('+items.length+')',
						type: 'movie'
					};
					status.append('movie', movie);
					var tv = {
						results: itemss,
						page: json.pagination.current,
						total_pages: json.pagination.total,
						total_results: json.pagination.total_items,
						title: Lampa.Lang.translate('menu_tv') +' ('+itemss.length+')',
						type: 'tv'
					};
					status.append('tv', tv);
				}
			}, status.error.bind(status));
		}
		function discovery() {
			return {
				title: 'PUB',
				search: search$3,
				params: {
					align_left: true,
					object: {
						source: 'pub'
					}
				},
				onMore: function onMore(params) {
					Lampa.Activity.push({
						url: 'v1/items/search?field=title&type=' + params.data.type,
						title: Lampa.Lang.translate('search') + ' - ' + params.query,
						component: 'category_full',
						page: 2,
						query: encodeURIComponent(params.query),
						source: 'pub'
					});
				},
				onCancel: Pub.network.clear.bind(Pub.network)
			};
		}
		var PUB = {
			main: main$2,
			menu: menu$1,
			full: full$1,
			search: search$3,
			person: person$2,
			list: list$2,
			seasons: seasons$2,
			category: category$1,
			clear: clear$3,
			discovery: discovery
		};
		Lampa.Api.sources.pub = PUB;
    
    function url$2(u) {
			var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			u = (u == 'undefined' ? '' : u)
			if (params.genres) u = 'catalog' +add$5(u, 'orderby=date&orderdir=desc&filter=s996-' + params.genres.replace('f','g'));
			if (params.page) u = add$5(u, 'page=' + params.page);
			if (params.query) u = add$5(u, 'story=' + params.query);
			if (params.type) u = add$5(u, 'type=' + params.type);
			if (params.field) u = add$5(u, 'field=' + params.field);
			if (params.perpage) u = add$5(u, 'perpage=' + params.perpage);
			u = add$5(u, Filmix.user_dev + Lampa.Storage.get('filmix_token', 'aaaabbbbccccddddeeeeffffaaaabbbb'));
			if (params.filter) {
				for (var i in params.filter) {
					u = add$5(u, i + '=' + params.filter[i]);
				}
			}
			return Filmix.api_url + u;
		}
		function add$5(u, params) {
			return u + (/\?/.test(u) ? '&' : '?') + params;
		}
		function get$7(method, call) {
			var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var oncomplite = arguments.length > 2 ? arguments[2] : undefined;
			var onerror = arguments.length > 3 ? arguments[3] : undefined;
			var u = url$2(method, params);
			Filmix.network["native"](u, function (json) {
				json.url = method;
				oncomplite(json);
			}, onerror);
		}
		function tocardf(element, type) {
			return {
				url: '',
				id: element.id,
				type: type || (((element.serial_stats && element.serial_stats.post_id) || (element.last_episode && element.last_episode.post_id)) ? 'tv' : 'movie'),
				source: 'filmix',
				quality: element.quality && element.quality.split(' ').shift() || '',
				title: element.title,
				original_title: element.original_title || element.title,
				release_date: (element.year || element.date && element.date.split(' ')[2] || '0000'),
				first_air_date: (type == 'tv' || ((element.serial_stats && element.serial_stats.post_id) || (element.last_episode && element.last_episode.post_id))) ? element.year : '',
				img: element.poster,
				cover: element.poster,
				background_image: element.poster,
        vote_average: parseFloat(element.kp_rating || '0.0').toFixed(1),
        imdb_rating: parseFloat(element.imdb_rating || '0.0').toFixed(1),
        kp_rating: parseFloat(element.kp_rating || '0.0').toFixed(1),
				year: element.year
			};
		}
		function list$3(params, oncomplite, onerror) {
			var page = 2;
			var url = url$2(params.url, params);
			Filmix.network["native"](url, function (json) {
				var items = [];
				if (json) {
					json.forEach(function (element) {
						items.push(tocardf(element));
					});
				}
				oncomplite({
					results: items,
					page: page,
					total_pages: 50
				});
				page++
			}, onerror);
		}
		function main$1(params, oncomplite, onerror) {
		  var source = [{
		    title: 'title_now_watch',
		    url: 'top_views'
		  }, {
		    title: 'title_new', 
		    url: 'catalog?orderby=date&orderdir=desc'
		  }, {
		    title: 'title_new_this_year', 
		    url: 'catalog?orderby=year&orderdir=desc'
		  }, {
		    title: 'pub_title_newfilm', 
		    url: 'catalog?orderby=date&orderdir=desc&filter=s0'
		  }, {
		    title: '4K', 
		    url: 'catalog?orderby=date&orderdir=desc&filter=s0-q4'
		  }, {
		    title: 'pub_title_popularfilm', 
		    url: 'popular'
		  }, {
		    title: 'pub_title_popularserial', 
		    url: 'popular?section=7'
		  }, {
		    title: 'title_in_top', 
		    url: 'catalog?orderby=rating&orderdir=desc'
		  }];
			var status = new Lampa.Status(Lampa.Arrays.getKeys(source).length);
			status.onComplite = function () {
				var fulldata = [];
				var data = status.data;
				source.forEach(function (q) {
          if (status.data[q.title] && status.data[q.title].results.length) {
            fulldata.push(status.data[q.title]);
          }
        });
				if (fulldata.length) oncomplite(fulldata);
				else onerror();
			};
			var append = function append(title, name, json) {
				json.title = title;
				var data = [];
				json.forEach(function (element) {
					data.push(tocardf(element));
				});
      	json.results = data;
				status.append(name, json);
			};
      source.forEach(function (q) {
			  get$7(q.url, params, function (json) {
          append(Lampa.Lang.translate(q.title), q.title, json);
        }, status.error.bind(status));
      });
		}
		function category$2(params, oncomplite, onerror) {
			var books = Lampa.Favorite.continues(params.url);
			var type = params.url == 'tv' ? 7 : 0;
			var source = [{
		    title: 'title_new_this_year',
		    url: 'catalog?orderby=year&orderdir=desc&filter=s'+type
		  }, {
		    title: 'title_new', 
		    url: 'catalog?orderby=date&orderdir=desc&filter=s'+type
		  }, {
		    title: 'title_popular', 
		    url: 'popular?section='+type
		  }, {
		    title: 'title_in_top', 
		    url: 'catalog?orderby=rating&orderdir=desc&filter=s'+type
		  }];
			var status = new Lampa.Status(Lampa.Arrays.getKeys(source).length);
			status.onComplite = function () {
				var fulldata = [];
				var data = status.data;
				if (books.length) fulldata.push({
					results: books,
					title: params.url == 'tv' ? Lampa.Lang.translate('title_continue') : Lampa.Lang.translate('title_watched')
				});
				source.forEach(function (q) {
          if (data[q.title] && data[q.title].results.length) {
            fulldata.push(data[q.title]);
          }
        });
				if (fulldata.length) oncomplite(fulldata);
				else onerror();
			};
			var append = function append(title, name, json) {
				json.title = title;
				var data = [];
				json.forEach(function (element) {
					data.push(tocardf(element, params.url));
				});
				json.results = data;
				status.append(name, json);
			};
      source.forEach(function (q) {
			  get$7(q.url, params, function (json) {
          append(Lampa.Lang.translate(q.title), q.title, json);
        }, status.error.bind(status));
      });
		}
		function full$2(params, oncomplite, onerror) {
			var status = new Lampa.Status(5);
			status.onComplite = oncomplite;
			var url = 'post/' + params.id;
			get$7(url, params, function (json) {
				json.source = 'filmix';
				var data = {};
				var element = json;
			
				var similars = [];
				if (json.relates) {
					for (var i in json.relates) {
						var item = json.relates[i];
						similars.push(tocardf(item));
					}
					status.append('simular', {
						results: similars
					});
				}
			
				data.movie = {
					id: element.id,
					url: url,
					type: Lampa.Arrays.getValues(element.player_links.playlist).length ? 'tv' : 'movie',
					source: 'filmix',
					title: element.title,
					original_title: element.original_title,
					name: Lampa.Arrays.getValues(element.player_links.playlist).length ? element.title : '',
					original_name: Lampa.Arrays.getValues(element.player_links.playlist).length ? element.original_title : '',
					overview: element.short_story.replace(/\[n|r|t]/g, ''),
					img: element.poster,
					runtime: (element.duration || 0),
					genres: genres$2(element),
					vote_average: parseFloat(element.imdb_rating || element.kp_rating || '0'),
					production_companies: [],
					production_countries: countries2(element.countries),
					budget: element.budget || 0,
					release_date: element.year || element.date.split(' ')[2] || '0000',
					seasons: Lampa.Arrays.getValues(element.player_links.playlist).filter(function (el){
					  el.episode_count = 1;
					  return el
					}),
					quality: element.rip && element.rip.split(' ').shift() || '',
					number_of_seasons: Lampa.Arrays.getValues(element.player_links.playlist).length || '',
					number_of_episodes: element.last_episode && element.last_episode.episode || '',
					first_air_date: Lampa.Arrays.getValues(element.player_links.playlist).length ? element.year || element.date_atom || '0000' : '', 
					background_image: element.poster,
          imdb_rating: parseFloat(element.imdb_rating || '0.0').toFixed(1),
          kp_rating: parseFloat(element.kp_rating || '0.0').toFixed(1),
     		};
				get$7('comments/' + element.id, params, function (json) {
					var comments = [];
					if (json) {
						json.forEach(function(com) {
							com.text = com.text.replace(/\[n|r|t]/g, '');
							com.like_count = '';
							comments.push(com);
						});
						status.append('comments', comments);
						$('.full-review__footer', Lampa.Activity.active().activity.render()).hide();
					}
				}, onerror);
     		status.append('persons', persons2(json));
				status.append('movie', data.movie);
				status.append('videos', videos2(element.player_links));			
			}, onerror);
		}
		function menu$2(params, oncomplite) {
  		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
      if (menu_list.length) oncomplite(menu_list);else {
        var us = url$2('filter_list', params);
        var u = url$2('category_list', params);
        Filmix.network["native"](u, function (j) {
          Lampa.Arrays.getKeys(j).forEach(function (g) {
            menu_list.push({
              title: j[g],
              id: g
            });
          });
          console.log (menu_list)
          oncomplite(menu_list);
        });
      }
		}
		function seasons$1(tv, from, oncomplite) {
			Lampa.Api.sources.tmdb.seasons(tv, from, oncomplite);
		}
		function formatDate(dateString) {
      var months = [
        { name: 'января', number: '01' },
        { name: 'февраля', number: '02' },
        { name: 'марта', number: '03' },
        { name: 'апреля', number: '04' },
        { name: 'мая', number: '05' },
        { name: 'июня', number: '06' },
        { name: 'июля', number: '07' },
        { name: 'августа', number: '08' },
        { name: 'сентября', number: '09' },
        { name: 'октября', number: '10' },
        { name: 'ноября', number: '11' },
        { name: 'декабря', number: '12' }
      ];
    
      var parts = dateString.split(' ');
      var day = parts[0];
      var monthName = parts[1];
      var year = parts[2];
      
      var monthNumber;
      for (var i = 0; i < months.length; i++) {
        if (months[i].name === monthName) {
          monthNumber = months[i].number;
          break;
        }
      }
      
      var formattedDate = year + '-' + monthNumber + '-' + day;
      return formattedDate;
    }
		function person$3(params, oncomplite, onerror) {
			var u = url$2('person/'+params.id, params);
			Filmix.network["native"](u, function (json, all) {
				var data = {};
				if (json) {
					data.person = {
						id: params.id,
						name: json.name,
						biography: json.about,
						img: json.poster,
						place_of_birth: json.birth_place,
						birthday: formatDate(json.birth)
					};
					var similars = [];
					for (var i in json.movies) {
						var item = json.movies[i];
						similars.push(tocardf(item));
					}
					data.credits = {
						movie: similars,
						knownFor: [{
						  name: json.career, 
						  credits: similars
						}]
					};
				}
				oncomplite(data);
			}, onerror);
		}
		function clear$4() {
			Filmix.network.clear();
		}
		function videos2(element) {
			var data = [];
			if (element.trailer.length) {
				element.trailer.forEach(function (el){
  				var qualities = el.link.match(/\[(.*?)\]/);
  			  qualities = qualities[1].split(',').filter(function (quality){
            if (quality === '') return false
            return true
          }).sort(function (a, b) {
            return b - a
          }).map(function (quality) {
            data.push({
    					name: el.translation+' '+quality+'p',
    					url: el.link.replace(/\[(.*?)\]/, quality),
    					player: true
    				});
          });
				});
			}
			return data.length ? {
				results: data
			} : false;
		}
		function persons2(json) {
			var data = [];
			if (json.actors) {
				json.found_actors.filter(function (act){
					data.push({
						name: act.name,
						id: act.id,
						character: Lampa.Lang.translate('title_actor'),
					});
				});
			}
			return data.length ? {
				cast: data
			} : false;
		}
		function genres$2(element) {
			var data = [];
			var u = url$2('category_list');
      Filmix.network["native"](u, function (j) {
  			element.categories.forEach(function (name, i) {
  				if (name) {
            var _id = Object.entries(j).find(function (g) {
              return g[1] == name
            });
  				 	data.push({
  						id: _id && _id[0] || '',
  						name: name
  					});
  				}
  			});
      });
			return data;
		}
		function countries2(element) {
			var data = [];
			if (element) {
				element.forEach(function (el) {
  				data.push({
  					name: el
  				});
				});
			}
			return data;
		}
		function search$4() {
			var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var oncomplite = arguments.length > 1 ? arguments[1] : undefined;
			var status = new Lampa.Status(2);
			status.onComplite = function (data) {
				var items = [];
				if (data.movie && data.movie.results.length) items.push(data.movie);
				if (data.tv && data.tv.results.length) items.push(data.tv);
				oncomplite(items);
			};
			get$7('search', params, function (json) {
				var items = [];
				var itemss = [];
				if (json) {
					json.forEach(function (element) {
						if(element, element.last_episode && element.last_episode.season || element.serial_stats && element.serial_stats.status) itemss.push(tocardf(element, element.last_episode && element.last_episode.season || element.serial_stats && element.serial_stats.status ? 'tv' : 'movie'));
						else items.push(tocardf(element, element.last_episode && element.last_episode.season || element.serial_stats && element.serial_stats.status ? 'tv' : 'movie'));
					});
					var movie = {
						results: items,
						page: 1,
						total_pages: 1,
						total_results: json.length,
						title: Lampa.Lang.translate('menu_movies') +' ('+items.length+')',
						type: 'movie'
					};
					status.append('movie', movie);
					var tv = {
						results: itemss,
						page: 1,
						total_pages: 1,
						total_results: json.length,
						title: Lampa.Lang.translate('menu_tv') +' ('+itemss.length+')',
						type: 'tv'
					};
					status.append('tv', tv);
				}
			}, status.error.bind(status));
		}
		function discovery$1() {
			return {
				title: 'FILMIX',
				search: search$4,
				params: {
					align_left: true,
					object: {
						source: 'filmix'
					}
				},
				onMore: function onMore(params) {
					Lampa.Activity.push({
						url: 'search',
						title: Lampa.Lang.translate('search') + ' - ' + params.query,
						component: 'category_full',
						query: encodeURIComponent(params.query),
						source: 'filmix'
					});
				},
				onCancel: Pub.network.clear.bind(Pub.network)
			};
		}
		var FILMIX = {
			main: main$1,
			menu: menu$2,
			full: full$2,
			search: search$4,
			person: person$3,
			list: list$3,
			seasons: seasons$1,
			category: category$2,
			clear: clear$4,
			discovery: discovery$1
		};
		Lampa.Api.sources.filmix = FILMIX;
    
    function include(url) {
      var script = document.createElement('script');
      script.src = url;
      document.getElementsByTagName('head')[0].appendChild(script);
    }
    include('https://www.googletagmanager.com/gtag/js?id=G-8LVPC3VETR');
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-8LVPC3VETR');
    
		function guide() {
			var guide = '<div class="setorrent-checklist"><div class="torrent-checklist__descr">Вас приветствует Guide по использованию и настройке приложения Lampa.<br> Мы пройдём с Вами краткую инструкцию по основным этапам приложения.</div><div class="torrent-checklist__progress-steps">Пройдено 0 из 0</div><div class="torrent-checklist__progress-bar"><div style="width:0"></div></div><div class="torrent-checklist__content"><div class="torrent-checklist__steps hide"><ul class="torrent-checklist__list"><li>Парсер</li><li>Включение парсера</li><li>Плагины</li><li>Добавление плагина</li><li>Установка плагина</li><li>Балансер</li><li>Смена балансера</li><li>Фильтр</li><li>Применение фильтра</li></ul></div><div class="torrent-checklist__infoS"><div class="hide">Откройте Настройки, после перейдите в раздел "Парсер".<hr><img src="http://lampa.stream/img/guide/open_parser.jpg"></div><div class="hide">В пункте "Использовать парсер" переведите функцию в положение "Да", после чего в карточке фильма или сериала появится кнопка "Торренты".<hr><img src="http://lampa.stream/img/guide/add_parser.jpg"></div><div class="hide">Установка плагинов<hr><img src="http://lampa.stream/img/guide/add_plugin.jpg"></div><div class="hide">Для добавления плагинов воспользуйтесь следующими вариантами.<hr><img src="http://lampa.stream/img/guide/options_install.jpg"></div><div class="hide">Для добавления плагина, воспользуйтесь списком плагинов<hr><img src="http://lampa.stream/img/guide/install_plugin.jpg"></div><div class="hide">Для смены "Онлайн" источника, воспользуйтесь кнопкой Балансер.<hr><img src="http://lampa.stream/img/guide/open_balanser.jpg"></div><div class="hide">В случае, если источник не работает (нет подключения к сети) выберете в разделе "Балансер" другой источник.<hr><img src="http://lampa.stream/img/guide/balansers_change.jpg"></div><div class="hide">Используйте "Фильтры" для смены перевода и сезона.<hr><img src="http://lampa.stream/img/guide/open_filter.jpg"></div><div class="hide">Для смены сезона или озвучки воспользуйтесь пунктами<br>1. Перевод<br>2. Сезон<hr><img src="http://lampa.stream/img/guide/filters.jpg"></div><div class="hide">Поздравляем! После прохождения краткого гайда, Вы знаете как пользоваться приложением и у Вас должно возникать меньше вопросов</div></div></div><div class="torrent-checklist__footer"><div class="simple-button selector hide back">Назад</div><div class="simple-button selector next">Начать</div><div class="torrent-checklist__next-step"></div></div></div>';
			Lampa.Template.add('guide', guide);
			var temp = Lampa.Template.get('guide');
			var descr = temp.find('.torrent-checklist__descr');
			var list = temp.find('.torrent-checklist__list > li');
			var info = temp.find('.torrent-checklist__infoS > div');
			var next = temp.find('.torrent-checklist__next-step');
			var prog = temp.find('.torrent-checklist__progress-bar > div');
			var comp = temp.find('.torrent-checklist__progress-steps');
			var btn = temp.find('.next');
			var btn_back = temp.find('.back');
			var position = -2;

			function makeStep(step) {
				step ? position-- : position++;
				var total = list.length;
				comp.text('Пройдено ' + Math.max(0, position) + ' из ' + total);
				if (position > list.length) {
					Lampa.Modal.close();
					Lampa.Controller.toggle('content');
					Lampa.Storage.set('guide', true);
				} else if (position >= 0) {
					Lampa.Storage.set('guide', '');
					info.addClass('hide');
					descr.addClass('hide');
					info.eq(position).removeClass('hide');
					var next_step = list.eq(position + 1);
					prog.css('width', Math.round(position / total * 100) + '%');
					btn.text(position < total ? 'Далее' : 'Завершить');
					if (position > 0) btn_back.removeClass('hide');
					next.text(next_step.length ? '- ' + next_step.text() : '');
				}
			}
			makeStep();
			btn.on('hover:enter', function () {
				makeStep();
			});
			btn_back.on('hover:enter', function () {
				if (position == 1) {
					//	btn_back.removeClass('focus')//.addClass('hide');
					//	btn.addClass('focus');
					//Lampa.Controller.collectionSet() ;
					// Lampa.Controller.collectionFocus(btn);
				}
				if (position > 0) makeStep(true);
			});
			Lampa.Modal.open({
				title: 'Гайд по использованию',
				html: temp,
				size: 'medium',
				mask: true
			});
		}
		
	}
	if (!window.plugin_modss) startPlugin();

})();
 
