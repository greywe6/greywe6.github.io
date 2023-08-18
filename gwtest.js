//НАСТРОЙКИ ПРОГРАММЫ LAMPA by greyweb
(function () {
   $("#app > div.wrap.layer--height.layer--width > div.wrap__content.layer--height.layer--width > div > div > div > div.activity__body > div > div > div > div > div.full-start > div.full-start__body > div.full-start__left > div.full-start__deta > div.info__rate > span").each(function() {
  $(this).html() < 3 ? $(this).css('color', 'red') : null;

  ($(this).html() >= 7.0 && $(this).html() < 10) ? $(this).css('color', 'green'): null;

  $(this).html() >= 3 ? $(this).css('color', 'yellow') : null;
});
})();
