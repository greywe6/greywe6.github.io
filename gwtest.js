//НАСТРОЙКИ ПРОГРАММЫ LAMPA by greyweb
$.fn.colorize = function () {
   return this.each(function() {
      var $this = $(this), number = $this.text();
   	  $this.css({color: number = 7.0 ? "red"
                      : number < 45 ? "green"
                      : "yellow"});
   });
};

$("div.info__rate > span").colorize();
