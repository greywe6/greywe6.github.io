(function () {
    'use strict';
        Lampa.Platform.tv();
	
    //Настройки программы по-умолчанию
        Lampa.Storage.set('helper', false);
        Lampa.Storage.set('source', 'cub');
        Lampa.Storage.set('parser_use', 'true');
        Lampa.Storage.set('poster_size', 'w500');
        Lampa.Storage.set('glass_style', 'true');
        Lampa.Storage.set('glass_opacity', 'blacked');
        Lampa.Storage.set('video_quality_default', '2160');
	Lampa.Storage.set('player_launch_trailers', 'youtube');
	
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
	Lampa.Template.add('stlico_css', "\n   <style>\n .player-panel__timenow{font-size:1.3em;}\n .player-panel__timeend{font-size:1.3em;}\n .full-start-new__buttons .full-start__button:not(.focus) span{display:block;}\n .full-start__button.selector.button--priority svg{color:#FF4242;}\n .menu__item.focus, .menu__item.traverse, .menu__item.hover {color:#000!important;}\n    </style>\n"); 
        $('body').append(Lampa.Template.get('stlico_css', {}, true));
	}
	value: function build() {
        var _this = this;

        this.card = Template$1.js('card');
        this.img = this.card.querySelector('.card__img') || {};
        this.card.querySelector('.card__title').innerText = this.params.title;
        this.card.querySelector('.card__age').innerText = this.params.subtitle;
        this.box = document.createElement('div');
        this.box.classList.add('card__textbox');
        this.box.innerText = this.params.text;
        this.card.querySelector('.card__view').appendChild(this.box);
        this.card.addEventListener('hover:enter', function () {
          var tpl = Template$1.get('cub_premium');
          tpl.find('.cub-premium__title').text(Lang.translate('title_notice'));
          tpl.find('.cub-premium__descr').eq(0).empty().text(Lang.translate('ad_notice_' + _this.params.type));
          Modal.open({
            title: '',
            size: 'medium',
            mask: true,
            html: tpl,
            onBack: function onBack() {
              Modal.close();
              Controller.toggle('content');
            }
          });
        });
        this.card.addEventListener('destroy', this.visible.bind(this));
      }
	});
})();
