/*
@ name: web music player js
@ author: tjti.net
@ link: https://www.tjit.net
@ date: 2019-10-20
@ version: 1.0.0.1
@ requires: Jquery APlayer
*/
$("head").append("<link>");
var css = $("head").children(":last");
css.attr({
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdn.staticfile.org/aplayer/1.10.1/APlayer.min.css"/*
@ name: web music player js
@ author: tjti.net
@ link: https://www.tjit.net
@ date: 2019-10-20
@ version: 1.0.0.1
@ requires: Jquery APlayer
*/
$("head").append("<link>");
var css = $("head").children(":last");
css.attr({
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdn.staticfile.org/aplayer/1.10.1/APlayer.min.css"
});
document.write('<div id="aplayer"></div>');
$.getScript('https://cdn.staticfile.org/aplayer/1.10.1/APlayer.min.js', function () {
    var music = new Array();
    $.ajax({
        type: "GET",
        url: 'https://api88.net/api/netease/?key=e0478a0192d22b0e28e9395e7ea74710&id=2649793971&type=songlist&cache=0',
        dataType: 'json',
        success: function (result) {
            var ap = new APlayer({
                element: document.getElementById('aplayer'),
                lrcType: 3,
                volume: 1,
                mutex: true,
                fixed: false,
                theme: '#32CD32',
                autoplay: true,
                order: 'list',
                //loop: 'none',
                //mini: false,
                //listFolded: false,
                //listMaxHeight: -,
                audio: result.Body,
            });
        }
    });
});
});
document.write('<div id="aplayer"></div>');
$.getScript('APlayer.min.js', function () {
    var music = new Array();
    $.ajax({
        type: "GET",
        url: 'https://api88.net/api/netease/?key=e0478a0192d22b0e28e9395e7ea74710&id=2649793971&type=songlist&cache=0',
        dataType: 'json',
        success: function (result) {
            var ap = new APlayer({
                element: document.getElementById('aplayer'),
                lrcType: 3,
                volume: 1,
                mutex: true,
                fixed: false,
                theme: '#32CD32',
                autoplay: true,
                order: 'list',
                //loop: 'none',
                //mini: false,
                //listFolded: false,
                //listMaxHeight: -,
                audio: result.Body,
            });
        }
    });
});