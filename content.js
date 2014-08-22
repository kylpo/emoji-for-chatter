console.log('HAI!');

//debugger;
emojify.setConfig({
    img_dir: chrome.extension.getURL("bower_components/emojify.js/images/emoji")
});


// emojify all feed items on page
var feedItems = document.getElementsByClassName('feeditemcontent');

for (var i = 0; i < feedItems.length; i++) {
    emojify.run(feedItems.item(i));
}

// emojify inserted nodes if they are a feed item or feed item comment
document.getElementById('feedwrapper').addEventListener('DOMNodeInserted', function(event) {
    if (event.target.classList.contains("feeditem") || event.target.classList.contains("feeditemcomment")) {
        emojify.run(event.target);
    }
});



//document.getElementsByClassName('feedcontainer')[0].addEventListener('DOMNodeInserted', function(event) {
//    if (event.target.classList.contains("feeditem") || event.target.classList.contains("feeditemcomment")) {
//        emojify.run(event.target);
//    }
//});

//$('.feeditemcontent').on('load', function(event) {
//    console.log(event);
//});

var atwhoConfig = {
    at: ":",

//    search_key: "nickname",
//    tpl:"<li data-value=':${nickname}:'>${nickname} <img src=chrome.extension.getURL('bower_components/emojify.js/images/emoji/${nickname}.png')  height='20' width='20' /></li>",
//    insert_tpl:"<img src='http://a248.e.akamai.net/assets.github.com/images/icons/emoji/${nickname}.png'  height='20' width='20' />",
    show_the_at: false,
    'start_with_space': false,
    data:['smile', 'coffee', 'shower']
};

//$('#publishereditablearea').atwho(atwhoConfig);

//$('.cxnewcommenttext').atwho(atwhoConfig);

//$('.feedcontainer').on('change', function(event) {
//    console.log(event);
//    var feedItems = document.getElementsByClassName('feeditemcontent');
//
//    for (var i = 0; i < feedItems.length; i++) {
//        emojify.run(feedItems.item(i));
//    }
//});
//debugger;

//$('.feedcontainer').on('DOMNodeInserted', '.feeditem', function(event) {
//    if (event.target.classList.contains("feeditem") || event.target.classList.contains("feeditemcomment")) {
//        emojify.run(event.target);
//    }
//});

//$('.feedcontainer')[0].addEventListener('DOMNodeInserted', function(event) { console.log(event); });


//$('#feedwrapper').addEventListener('DOMNodeInserted', function(event) { console.log(event); });
//    var feedItems = document.getElementsByClassName('feeditemcontent');
//
//    for (var i = 0; i < feedItems.length; i++) {
//        emojify.run(feedItems.item(i));
//    }
//});
