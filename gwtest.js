//НАСТРОЙКИ ПРОГРАММЫ LAMPA by greyweb
$.fn.colorize = function () {
   return this.each(function() {
      var $this = $(this), number = $this.text();
      $this.css({color: number < 5 ? "red"
                      : number < 10 ? "green"
                      : number = 7 ? "yellow"});
});
};
$("#app > div.wrap.layer--height.layer--width > div.wrap__content.layer--height.layer--width > div > div > div > div.activity__body > div > div > div > div > div.full-start > div.full-start__body > div.full-start__left > div.full-start__deta > div.info__rate > span").colorize();
