console.log('HAI!');

//debugger;
emojify.setConfig({
    img_dir: chrome.extension.getURL("bower_components/emojify.js/images/emoji")
});

var feedItems = document.getElementsByClassName('feeditemcontent');

for (var i = 0; i < feedItems.length; i++) {
    emojify.run(feedItems.item(i));
}

