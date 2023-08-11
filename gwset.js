(function () {
    'use strict';
    Lampa.Platform.tv();
	
    //Настройки программы по-умолчанию
    Lampa.Storage.set('helper', 'false');
    Lampa.Storage.set('account_use', 'true');
    Lampa.Storage.set('parser_use', 'true');
    Lampa.Storage.set('poster_size', 'w500');
    Lampa.Storage.set('background_type','simple');
    Lampa.Storage.set('glass_style', 'true');
    Lampa.Storage.set('glass_opacity', 'blacked');
    Lampa.Storage.set('video_quality_default', '2160');
    Lampa.Storage.set('player_launch_trailers', 'youtube');
    Lampa.Storage.set('player_timecode', '');
    Lampa.Storage.set('player_size', 'default');
    Lampa.Storage.set('webos_subs_params','{}');
	
    //Видимость постеров TMDB-Proxy
	Lampa.Storage.set('tmdb_proxy_image', 'http://imagetmdb.com');
    Lampa.Storage.set('tmdb_proxy_api', 'http://cors.lampa32.ru/proxy/');
	
    //Вкл. TorrServer на WebOs
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
	//Длбавляет кнопку перезагрузки
	$('#app > div.head > div > div.head__actions').append('<div id="reboot" class="head__action selector reload-screen"><svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.4800000000000001"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4,12a1,1,0,0,1-2,0A9.983,9.983,0,0,1,18.242,4.206V2.758a1,1,0,1,1,2,0v4a1,1,0,0,1-1,1h-4a1,1,0,0,1,0-2h1.743A7.986,7.986,0,0,0,4,12Zm17-1a1,1,0,0,0-1,1A7.986,7.986,0,0,1,7.015,18.242H8.757a1,1,0,1,0,0-2h-4a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V19.794A9.984,9.984,0,0,0,22,12,1,1,0,0,0,21,11Z" fill="currentColor"></path></g></svg></div>');
	$('#reboot').on('hover:enter hover:click hover:touch', function() {location.reload();});
	//Свои цвета/стили
	Lampa.Template.add('stlico_css', "\n   <style>\n .player-panel__timenow{font-size:1.3em;}\n .player-panel__timeend{font-size:1.3em;}\n .full-start-new__buttons .full-start__button.selector.button--priority:not(.focus) span{display:block;}\n .full-start__button.selector.button--priority svg{color:#76b83f;}\n .full-start__button.selector.view--trailer.button--priority svg{color:#FF4242;}\n .full-start__button.selector.view--online.button--priority svg{color:#00c2ff;}\n .menu__item.focus, .menu__item.traverse, .menu__item.hover {color:#000!important;}\n .online.focus{box-shadow: inset 0.3 0 0 0.2em #FFF!important;margin-left: -.6em!important;margin-right: -.6em!important;}\n .scroll--mask{webkit-mask-image: -webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,0)),color-stop(5%,white),color-stop(95%,white),to(rgba(255,255,255,0)))!important;}\n .scroll--mask{-webkit-mask-image: -webkit-linear-gradient(top,rgba(255,255,255,0) 0%,white 5%,white 95%,rgba(255,255,255,0) 100%)!important;}\n   </style>\n"); 
    $('body').append(Lampa.Template.get('stlico_css', {}, true));
    Lampa.Template.add('stlico2_css', "\n   <style>\n .full-start-new__buttons .full-start__button.selector(.focus) span{color:#fff!important;}\n .full-start-new__buttons .full-start__button.selector.focus{background-color: rgba(0,0,0,.3); outline: 2px solid #fff;}\n .full-start-new__buttons .full-start__button.selector.view--online:not(.focus) span{display:block;}\n .full-start-new__buttons .full-start__button.selector.view--torrent:not(.focus) span{display:block;}\n .full-start-new__buttons .full-start__button.selector.view--trailer:not(.focus) span{display:block;}\n .full-start__button.selector.view--torrent svg{color:#76b83f;}\n .full-start__button.selector.view--trailer svg{color:#FF4242;}\n .full-start__button.selector.view--online svg{color:#00c2ff;}\n   </style>");
    $('body').append(Lampa.Template.get('stlico2_css', {}, true));
    }
	});

    //Убирает общую кнопку Онлайн и достаёт все кнопки из блока
    Lampa.Listener.follow('full', function (e) {
    if (e.type == 'complite')
    $('.hide.buttons--container > div').prependTo('.full-start-new__buttons');
    $('.full-start__button.selector.button--play').remove();
    });


})();
