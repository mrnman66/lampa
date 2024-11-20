   var _0x33b57d=_0x5047;function _0x5047(_0x47d26e,_0x2eb3db){var _0x5536c6=_0x5070();return _0x5047=function(_0x3e8a45,_0xf616dc){_0x3e8a45=_0x3e8a45-0x1d5;var _0x5127be=_0x5536c6[_0x3e8a45];return _0x5127be;},_0x5047(_0x47d26e,_0x2eb3db);}(function(_0x11457e,_0x24b48b){var _0x51ec1e=_0x5047,_0x2aaac9=_0x11457e();while(!![]){try{var _0xeeab2f=-parseInt(_0x51ec1e(0x1d9))/0x1*(parseInt(_0x51ec1e(0x1e8))/0x2)+-parseInt(_0x51ec1e(0x1de))/0x3*(-parseInt(_0x51ec1e(0x1ec))/0x4)+-parseInt(_0x51ec1e(0x1eb))/0x5*(parseInt(_0x51ec1e(0x1e5))/0x6)+-parseInt(_0x51ec1e(0x1e4))/0x7+-parseInt(_0x51ec1e(0x1d7))/0x8*(-parseInt(_0x51ec1e(0x1db))/0x9)+parseInt(_0x51ec1e(0x1da))/0xa+-parseInt(_0x51ec1e(0x1d5))/0xb*(parseInt(_0x51ec1e(0x1dd))/0xc);if(_0xeeab2f===_0x24b48b)break;else _0x2aaac9['push'](_0x2aaac9['shift']());}catch(_0x542328){_0x2aaac9['push'](_0x2aaac9['shift']());}}}(_0x5070,0x53cc9));var _0x162628=(function(){var _0x2a2eb5=!![];return function(_0xbd37f2,_0x4f687f){var _0x14ddbf=_0x2a2eb5?function(){var _0x2c608c=_0x5047;if(_0x4f687f){var _0x1a062d=_0x4f687f[_0x2c608c(0x1dc)](_0xbd37f2,arguments);return _0x4f687f=null,_0x1a062d;}}:function(){};return _0x2a2eb5=![],_0x14ddbf;};}()),_0x29dbe9=_0x162628(this,function(){var _0x52529b=_0x5047;return _0x29dbe9['toString']()[_0x52529b(0x1e3)](_0x52529b(0x1d6))[_0x52529b(0x1df)]()['constructor'](_0x29dbe9)[_0x52529b(0x1e3)]('(((.+)+)+)+$');});_0x29dbe9();var _0xf616dc=(function(){var _0x442712=!![];return function(_0x29a403,_0x310689){var _0x5a6d7b=_0x442712?function(){if(_0x310689){var _0x5525a5=_0x310689['apply'](_0x29a403,arguments);return _0x310689=null,_0x5525a5;}}:function(){};return _0x442712=![],_0x5a6d7b;};}()),_0x3e8a45=_0xf616dc(this,function(){var _0x5587de=_0x5047,_0x5b0ca0;try{var _0x448b53=Function(_0x5587de(0x1ed)+_0x5587de(0x1ee)+');');_0x5b0ca0=_0x448b53();}catch(_0x353f5d){_0x5b0ca0=window;}var _0x52eaa7=_0x5b0ca0[_0x5587de(0x1f1)]=_0x5b0ca0['console']||{},_0x3cf561=[_0x5587de(0x1e2),_0x5587de(0x1e0),_0x5587de(0x1ea),_0x5587de(0x1d8),_0x5587de(0x1e1),_0x5587de(0x1e9),_0x5587de(0x1e6)];for(var _0xc97d92=0x0;_0xc97d92<_0x3cf561[_0x5587de(0x1e7)];_0xc97d92++){var _0x67d73d=_0xf616dc[_0x5587de(0x1ef)][_0x5587de(0x1f0)][_0x5587de(0x1f2)](_0xf616dc),_0x1300bc=_0x3cf561[_0xc97d92],_0x37be8f=_0x52eaa7[_0x1300bc]||_0x67d73d;_0x67d73d['__proto__']=_0xf616dc[_0x5587de(0x1f2)](_0xf616dc),_0x67d73d[_0x5587de(0x1df)]=_0x37be8f[_0x5587de(0x1df)][_0x5587de(0x1f2)](_0x37be8f),_0x52eaa7[_0x1300bc]=_0x67d73d;}});_0x3e8a45(),Lampa['Manifest'][_0x33b57d(0x1f3)]='bylampa';function _0x5070(){var _0x561250=['search','2768829BfNNXC','6rkzsHJ','trace','length','15482nszkCg','table','info','1867995BaQJSS','320TDXDnJ','return\x20(function()\x20','{}.constructor(\x22return\x20this\x22)(\x20)','constructor','prototype','console','bind','origin','66KEFyCq','(((.+)+)+)+$','992024iuVyzS','error','40WDQtWN','4315110oKKJgM','36PhQUUN','apply','9552PnOrCR','18723PwVqqh','toString','warn','exception','log'];_0x5070=function(){return _0x561250;};return _0x5070();}

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
