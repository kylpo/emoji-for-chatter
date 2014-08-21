console.log('HAI!');

//debugger;
emojify.setConfig({
    img_dir: chrome.extension.getURL("bower_components/emojify.js/images/emoji")
});

var feedItems = document.getElementsByClassName('feeditemcontent');

for (var i = 0; i < feedItems.length; i++) {
    emojify.run(feedItems.item(i));
}

$('#publishereditablearea').atwho({
    at: ":",

//    search_key: "nickname",
//    tpl:"<li data-value=':${nickname}:'>${nickname} <img src=chrome.extension.getURL('bower_components/emojify.js/images/emoji/${nickname}.png')  height='20' width='20' /></li>",
//    insert_tpl:"<img src='http://a248.e.akamai.net/assets.github.com/images/icons/emoji/${nickname}.png'  height='20' width='20' />",
    show_the_at: false,
    'start_with_space': false,
    data:['smile', 'coffee', 'shower']
});