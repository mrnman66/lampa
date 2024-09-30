  var updateplugins = false;
    var plugins = Lampa.Storage.get('plugins','[]')
    var updatedPlugins = plugins.filter(function(plug) 
    {
       if (plug.url.indexOf('showy.online') >= 0)
       {
          updateplugins = true;
          return false;
       }
		
       return true;
    });

    if (updateplugins)
	{
       Lampa.Storage.set('plugins', updatedPlugins);
	   
	   var checkResult = updatedPlugins.filter(function(obj) {return obj.url == 'https://bylampa.github.io/m.js'});
			if (checkResult=='') {
				updatedPlugins.push({
				"author": '@showy',
				"url": 'http://bylampa.github.io/m.js',
				"name": 'Showy',
				"status": 1
				});
				Lampa.Storage.set('plugins', updatedPlugins);
			}
	}





  console.log(window.location.origin);
 //  console.log(window.location.hostname);

   window.lampa_settings.torrents_use = true;
   window.lampa_settings.demo = false;
   window.lampa_settings.read_only = false;

   Lampa.Utils.putScriptAsync([
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

