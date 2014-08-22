'use strict';

var atwhoConfig = {
    at: ":",
//    search_key: "nickname",
//    tpl:"<li data-value=':${nickname}:'>${nickname} <img src=chrome.extension.getURL('bower_components/emojify.js/images/emoji/${nickname}.png')  height='20' width='20' /></li>",
//    insert_tpl:"<img src='http://a248.e.akamai.net/assets.github.com/images/icons/emoji/${nickname}.png'  height='20' width='20' />",
    show_the_at: false,
    start_with_space: false,
    data:['smile', 'coffee', 'shower']
};

function handlePage() {
    emojify.setConfig({
        img_dir: chrome.extension.getURL("bower_components/emojify.js/images/emoji")
    });

    // emojify all feed items on page
    var feedItems = document.getElementsByClassName('feeditemcontent');
    for (var i = 0; i < feedItems.length; i++) {
        emojify.run(feedItems.item(i));
    }

    // main publisher textarea
    $('#publishereditablearea').atwho(atwhoConfig);
    // all comment textareas
    $('.cxnewcommenttext').atwho(atwhoConfig);
}

function handleNewlyInsertedNodes() {
    // listen for all newly inserted nodes in feed
    document.getElementById('feedwrapper').addEventListener('DOMNodeInserted', function(event) {
        var $target = $(event.target);

        // if node is a feed item or feed item comment, atwho and emojify (order matters!)
        if ($target.hasClass('feeditem') || $target.hasClass('feeditemcomment')) {
            $target.find('.cxnewcommenttext').atwho(atwhoConfig);
            emojify.run(event.target);
        }
    });
}

handlePage();
handleNewlyInsertedNodes();