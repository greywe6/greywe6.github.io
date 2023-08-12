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
	Lampa.Template.add('stlico_css', "\n   <style>\n .player-panel__timenow{font-size:1.3em;}\n .player-panel__timeend{font-size:1.3em;}\n .full-start-new__buttons .full-start__button.selector.button--priority:not(.focus) span{display:block;}\n .full-start-new__buttons .full-start__button.selector.button--play:not(.focus) span{display:block;}\n .full-start__button.selector.button--priority svg{color:#76b83f;}\n .full-start__button.selector.view--trailer.button--priority svg{color:#FF4242;}\n .full-start__button.selector.view--online.button--priority svg{color:#00c2ff;}\n .full-start__button.selector.button--play svg{color:#00c2ff;}\n .menu__item.focus, .menu__item.traverse, .menu__item.hover {color:#000!important;}\n .online.focus{box-shadow: inset 0.3 0 0 0.2em #FFF!important;margin-left: -.6em!important;margin-right: -.6em!important;}\n .scroll--mask{webkit-mask-image: -webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,0)),color-stop(5%,white),color-stop(95%,white),to(rgba(255,255,255,0)))!important;}\n .scroll--mask{-webkit-mask-image: -webkit-linear-gradient(top,rgba(255,255,255,0) 0%,white 5%,white 95%,rgba(255,255,255,0) 100%)!important;}\n   </style>\n"); 
    $('body').append(Lampa.Template.get('stlico_css', {}, true));
    Lampa.Template.add('stlico2_css', "\n   <style>\n .full-start-new__buttons .full-start__button.selector.view--online:not(.focus) span{display:block;}\n .full-start-new__buttons .full-start__button.selector.view--torrent:not(.focus) span{display:block;}\n .full-start-new__buttons .full-start__button.selector.view--trailer:not(.focus) span{display:block;}\n .full-start__button.selector.view--torrent svg{color:#76b83f;}\n .full-start__button.selector.view--trailer svg{color:#FF4242;}\n .full-start__button.selector.view--online svg{color:#00c2ff;}\n   </style>");
    $('body').append(Lampa.Template.get('stlico2_css', {}, true));
    }
	});

    //Убирает общую кнопку Онлайн и достаёт все кнопки из блока
    Lampa.Listener.follow('full', function (e) {
    if (e.type == 'complite') {
    //$('.hide.buttons--container > div').prependTo('.full-start-new__buttons');
    //$('.full-start__button.selector.button--play').remove();
    var btn = $(Lampa.Lang.translate(button));
        btn.on('hover:enter', function () {
          resetTemplates();
          Lampa.Component.add('online_mod', component);
          Lampa.Activity.push({
            url: '',
            title: Lampa.Lang.translate('online_mod_title_full'),
            component: 'online_mod',
            search: e.data.movie.title,
            search_one: e.data.movie.title,
            search_two: e.data.movie.original_title,
            movie: e.data.movie,
            page: 1
          });
        });
        e.object.activity.render().find('.view--torrent').before(btn);
        $('.view--torrent').addClass('selector').empty().append('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 48 48" width="48px" height="48px"><path d="M 23.501953 4.125 C 12.485953 4.125 3.5019531 13.11 3.5019531 24.125 C 3.5019531 32.932677 9.2467538 40.435277 17.179688 43.091797 L 17.146484 42.996094 L 7 16 L 15 14 C 17.573 20.519 20.825516 32.721688 27.728516 30.929688 C 35.781516 28.948688 28.615 16.981172 27 12.076172 L 34 11 C 38.025862 19.563024 39.693648 25.901226 43.175781 27.089844 C 43.191423 27.095188 43.235077 27.103922 43.275391 27.113281 C 43.422576 26.137952 43.501953 25.140294 43.501953 24.125 C 43.501953 13.11 34.517953 4.125 23.501953 4.125 z M 34.904297 29.314453 C 34.250297 34.648453 28.811359 37.069578 21.943359 35.517578 L 26.316406 43.763672 L 26.392578 43.914062 C 33.176993 42.923925 38.872645 38.505764 41.660156 32.484375 C 41.603665 32.485465 41.546284 32.486418 41.529297 32.486328 C 38.928405 32.472567 36.607552 31.572967 34.904297 29.314453 z"/></svg><span>' + Lampa.Lang.translate('full_torrents') + '</span>');
        $('.view--trailer').empty().append("<svg enable-background='new 0 0 512 512' id='Layer_1' version='1.1' viewBox='0 0 512 512' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g><path fill='currentColor' d='M260.4,449c-57.1-1.8-111.4-3.2-165.7-5.3c-11.7-0.5-23.6-2.3-35-5c-21.4-5-36.2-17.9-43.8-39c-6.1-17-8.3-34.5-9.9-52.3   C2.5,305.6,2.5,263.8,4.2,222c1-23.6,1.6-47.4,7.9-70.3c3.8-13.7,8.4-27.1,19.5-37c11.7-10.5,25.4-16.8,41-17.5   c42.8-2.1,85.5-4.7,128.3-5.1c57.6-0.6,115.3,0.2,172.9,1.3c24.9,0.5,50,1.8,74.7,5c22.6,3,39.5,15.6,48.5,37.6   c6.9,16.9,9.5,34.6,11,52.6c3.9,45.1,4,90.2,1.8,135.3c-1.1,22.9-2.2,45.9-8.7,68.2c-7.4,25.6-23.1,42.5-49.3,48.3   c-10.2,2.2-20.8,3-31.2,3.4C366.2,445.7,311.9,447.4,260.4,449z M205.1,335.3c45.6-23.6,90.7-47,136.7-70.9   c-45.9-24-91-47.5-136.7-71.4C205.1,240.7,205.1,287.6,205.1,335.3z'/></g></svg><span>" + Lampa.Lang.translate('full_trailers') + "</span>");
    }
    });

})();
