// ==UserScript==
// @name          Mike's Anti-Kinja Script
// @version       1.0
// @namespace     miken32
// @description   Tries to make The AV Club tolerable
// @author        Michael Newton
// @homepage      https://disqus.com/home/channel/theavclubafterdark/
// @include       http://avclub.com/*
// @include       https://avclub.com/*
// @include       http://*.avclub.com/*
// @include       https://*.avclub.com/*
// @run-at        document-start
// @grant         none
// @require       https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// ==/UserScript==

$(document).ready(function() {
    // make first article image same size as subsequent ones
    $("article.post-item-frontpage div.item__content.js_item-content").addClass("item__content--thumb");
    // hide the sidebar
    $("section.sidebar").remove();
    // get rid of "shared from kinja roundup"
    $("div.post-wrapper.streamshare").remove();
    // expand the content to replace the sidebar
    $("section.main").css("width", "100%");
    $("div.main__content").css("max-width", "inherit");
    $("div.post-content>*,article.post .align--bleed").css("max-width", "85%");
    // get rid of autoplay videos
    $(".instream-native-video").remove();

    // update comments when they appear
    var commentObs = new MutationObserver(function() {
        // make comments the same width as content
        $("div.replies-wrapper, div.discussion-header, article.reply").css("max-width", "85%");
        // fix alignment
        $("div.discussion-header").css("margin-left", 0);
        // get rid of "show more comments" and blurry stuff
        $("div.post-cutoff--replies").css("display", "none");
        // show more comments
        $(".discussion-region--truncated--default").css("height", "auto");
        // TODO: load replies using XHR?
    });
    commentObs.observe(document.querySelector("section.discussion-region"), {
        subtree: true,
        childList: true,
        attributes: false,
        characterData: false,
        attributeOldValue: false,
        characterDataOldValue: false
    });

    // remove the infinite scroll items as they appear
    // WIP
    var readingListObs = new MutationObserver(function() {
        $("div.js_reading-list-item").remove();
        //window.history.back();
    });
    readingListObs.observe(document.querySelector("div.reading-list"), {
        subtree: true,
        childList: true,        
    });
    window.ScrollReadingListItem = null;
    window.tiger.components.post.type.scrollListItem = null;

}
);
