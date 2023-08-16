//НАСТРОЙКИ ПРОГРАММЫ LAMPA by greyweb
(function () {
    'use strict';
    Lampa.Platform.tv();
	
    //Настройки программы по-умолчанию
    Lampa.Storage.set('helper', 'false');//Показывать подсказки - Откл.
    Lampa.Storage.set('account_use', 'true');//Синхронизация - Вкл.
    Lampa.Storage.set('parser_use', 'true');//Использовать парсер - Вкл.
    Lampa.Storage.set('poster_size', 'w500');//Разрешение постеров TMDB - Высокое
    Lampa.Storage.set('background_type','simple');//Тип фона - Простой
    Lampa.Storage.set('card_interfice_type','old');//Интерфейс карточек - Старый
    Lampa.Storage.set('glass_style', 'true');//Стекло - Вкл.
    Lampa.Storage.set('glass_opacity', 'blacked');//Прозрачность стекла - Затемнённая
    Lampa.Storage.set('video_quality_default', '2160');//Качество видео по-умолчанию - 2160p
    Lampa.Storage.set('player_timecode', '');//Тайм-код - Продолжить
    Lampa.Storage.set('player_size', 'default');//Размер видео - По-умолчанию
    Lampa.Storage.set('webos_subs_params','{}');//Сброс субтитров
	
    //Видимость постеров TMDB-Proxy
	Lampa.Storage.set('tmdb_proxy_image', 'http://imagetmdb.com');
    Lampa.Storage.set('tmdb_proxy_api', 'http://cors.lampa32.ru/proxy/');
	
    //Вкл. TorrServer на WebOs для программы установленной из магазина LG
	window.lampa_settings.torrents_use = true;
	window.lampa_settings.demo = false;
	window.lampa_settings.read_only = false;
	
    //Украшение и дополнение стилей
	Lampa.Listener.follow('app', function(e) {
	    if(e.type == 'ready') { 
            //Удалить кнопку рекламы Премиум в шапке
            $('#app > div.head > div > div.head__actions > .open--premium').remove();
	        //Удалить кнопку Лента в шапке
	        $('#app > div.head > div > div.head__actions > .open--feed').remove();
	        //Длбавляет кнопку перезагрузки в шапке
	        $('#app > div.head > div > div.head__actions').append('<div id="reboot" class="head__action selector reload-screen"><svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.4800000000000001"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4,12a1,1,0,0,1-2,0A9.983,9.983,0,0,1,18.242,4.206V2.758a1,1,0,1,1,2,0v4a1,1,0,0,1-1,1h-4a1,1,0,0,1,0-2h1.743A7.986,7.986,0,0,0,4,12Zm17-1a1,1,0,0,0-1,1A7.986,7.986,0,0,1,7.015,18.242H8.757a1,1,0,1,0,0-2h-4a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V19.794A9.984,9.984,0,0,0,22,12,1,1,0,0,0,21,11Z" fill="currentColor"></path></g></svg></div>');
	        $('#reboot').on('hover:enter hover:click hover:touch', function() {location.reload();});
	        //Свои цвета/стили
	        Lampa.Template.add('stlico_css', "\n   <style>\n .player-panel__timenow{font-size:1.3em;}\n .player-panel__timeend{font-size:1.3em;}\n .full-start-new__buttons .full-start__button.selector.button--priority:not(.focus) span{display:block;}\n .full-start-new__buttons .full-start__button.selector.button--play:not(.focus) span{display:block;}\n .full-start__button.selector.button--priority svg{color:#76b83f;}\n .full-start__button.selector.view--trailer.button--priority svg{color:#FF4242;}\n .full-start__button.selector.view--online.button--priority svg{color:#168FDF;}\n .full-start__button.selector.button--play svg{color:#168FDF;}\n .menu__item.focus, .menu__item.traverse, .menu__item.hover {color:#000!important;}\n .online.focus{box-shadow: inset 0.3 0 0 0.2em #FFF!important;margin-left: -.6em!important;margin-right: -.6em!important;}\n .scroll--mask{webkit-mask-image: -webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,0)),color-stop(5%,white),color-stop(95%,white),to(rgba(255,255,255,0)))!important;}\n .scroll--mask{-webkit-mask-image: -webkit-linear-gradient(top,rgba(255,255,255,0) 0%,white 5%,white 95%,rgba(255,255,255,0) 100%)!important;}\n   </style>\n"); 
            $('body').append(Lampa.Template.get('stlico_css', {}, true));
            //Доп. стили кнопок
            Lampa.Template.add('stlico2_css', "\n   <style>\n .full-start-new__buttons .full-start__button.selector.view--online:not(.focus) span{display:block;}\n .full-start-new__buttons .full-start__button.selector.view--torrent:not(.focus) span{display:block;}\n .full-start-new__buttons .full-start__button.selector.view--trailer:not(.focus) span{display:block;}\n .full-start__button.selector.view--torrent svg{color:#76b83f;}\n .full-start__button.selector.view--trailer svg{color:#FF4242;}\n .full-start__button.selector.view--online svg{color:#168FDF;}\n   </style>");
            $('body').append(Lampa.Template.get('stlico2_css', {}, true));
            Lampa.Template.add('rating_mod_css', "\n   <style>\n .full-start__tags{padding-bottom: 2.1em!important;}\n .full-start__rate{margin: 0;border-radius: 1em;font-size: .75em;margin-right: 1.5em;position: relative;}\n .full-start__rate>div:first-child{font-size: 3.2em;font-weight: 700;line-height: 1.2;padding: 0.75em 1.01em 0.92em;}\n div{display:block;}\n .full-start__rate>div:last-child{position: absolute;bottom: -0.6em;right: 0;background-color: #fff;color: #000;padding: 0.31em 0.33em 0.33em 0.34em;border-radius: 0.23em;font-size: 1.0em;}\n  </style>");
            $('body').append(Lampa.Template.get('rating_mod_css', {}, true));
            //Прячем ненужные разделы в МЕНЮ
            setTimeout(function(){
                //Убрать раздел АНИМЕ из МЕНЮ
                $("[data-action=anime]").eq(0).remove();
                //Убрать раздел ЛЕНТА из МЕНЮ
                $("[data-action=feed]").eq(0).remove();
            },10);
        }
	});

    var Modss = {
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
					$('body').find('.full-start__left').append("<div class='card--last_view' style='top:0.6em;right: -.5em;position: absolute;background: #168FDF;color: #fff;padding: 0.3em 0.4em 0.4em;font-size: 1.2em;-webkit-border-radius: 0.3em;-moz-border-radius: 0.3em;border-radius: 0.3em;'><div style='float:left;margin:-4px 0 -4px -4px' class=''></div>" + last_view +"</div>");
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
  				if(window.innerWidth > 585) $('.full-start__left', Lampa.Activity.active().activity.render()).append("<div class='card--new_seria' style='right: -0.6em;position: absolute;background: #FF4242;color: #fff;bottom:.6em;padding: 0.3em 0.4em 0.4em;font-size: 1.2em;-webkit-border-radius: 0.3em;-moz-border-radius: 0.3em;border-radius: 0.3em;'>" + Lampa.Lang.translate(new_ser) + "</div>");
  			  else {
  			    if($('.card--new_seria', Lampa.Activity.active().activity.render()).length)$('.full-start__tags', Lampa.Activity.active().activity.render()).append('<div class="full-start__tag card--new_seria"><img src="./img/icons/menu/movie.svg" /> <div>'+ Lampa.Lang.translate(new_ser) +'</div></div>');
  			    else $('.full-start-new__details', Lampa.Activity.active().activity.render()).append('<span class="full-start-new__split">●</span><div class="card--new_seria"><div>'+ Lampa.Lang.translate(new_ser) +'</div></div>');
  			  }
  		  }
			}
		}, 
    }

    //Убирает общую кнопку Онлайн и достаёт все кнопки из блока
    /*Lampa.Listener.follow('full', function (e) {
        if (e.type == 'complite') {
            $('.hide.buttons--container > div').prependTo('.full-start-new__buttons');
            $('.full-start__button.selector.button--play').remove();
        }
    });*/

})();
