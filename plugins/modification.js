 //  console.log(window.location.origin);
//   console.log(window.location.hostname);
     console.log(window.location.href);
    
      var titleTag = document.getElementsByTagName("title")[0];
      if (titleTag) {
        var titleText = titleTag.textContent || titleTag.innerText;
        if (titleText.indexOf("Uncensored") !== -1) {
            console.log("Uncensored"); // Если заголовок содержит "Uncensored"
        }
    }

/*
   // Получаем текущий URL
var currentUrl = window.location.href;

// Проверяем, содержит ли URL слово "bylampa"
if (currentUrl.indexOf("bylampa") !== -1) {
    // Если "bylampa" есть в URL, выполняем нужные действия
    console.log("Слово 'bylampa' найдено в URL!");
    
} else {
    console.log("Слово 'bylampa' не найдено в URL.");
}*/

   window.lampa_settings.torrents_use = true;
   window.lampa_settings.demo = false;
   window.lampa_settings.read_only = false;

   Lampa.Utils.putScriptAsync([
	   // 'https://bylampa.github.io/auth.js?v=' + Math.random(),
	    'https://bylampa.github.io/notice.js?v=' + Math.random(),
	    'https://bylampa.github.io/addon.js?v=' + Math.random(),
	    'https://bylampa.github.io/themes.js?v=' + Math.random()
   ], function () {});

   var timer = setInterval(function(){
        if(typeof Lampa !== 'undefined'){
            clearInterval(timer);

            if(!Lampa.Storage.get('set','false')) start_set();
		 
        }
    },200);

    function start_set(){
           Lampa.Storage.set('set','true');
           Lampa.Storage.set('keyboard_type', 'integrate');
           Lampa.Storage.set('start_page', 'main');
           Lampa.Storage.set('source', 'cub');
           Lampa.Storage.set('background', 'false');
	   Lampa.Storage.set('animation', 'false');
	   Lampa.Storage.set('mask', 'false');
	   Lampa.Storage.set('player_normalization', 'true');
	   Lampa.Storage.set('player_timecode', 'ask');
	   Lampa.Storage.set('screensaver', 'false');
           Lampa.Storage.set('pages_save_total', '3');
	   Lampa.Storage.set('device_name', 'Lampa Uncensored');
	   location.reload()
     } 

     Lampa.Storage.listener.follow('change', function (event) {
      if (event.name == 'activity' && Lampa.Activity.active().component === 'bookmarks') {
        setTimeout(function(){
          Lampa.Controller.move('down');
          Lampa.Controller.move('up');
        },50)
      }
     });

$(document).ready(function() {
    var interval = setInterval(function() {
        $('.navigation-tabs__button').each(function() {
            if ($(this).text().trim() === 'Lampa') {
                $(this).html('BYLAMPA');
            }
        });
    }, 50); 
 
    $('.navigation-tabs__button').on('focus', function() {
        if ($(this).text().trim() === 'Lampa') {
            $(this).html('BYLAMPA');
        }
    });
});
