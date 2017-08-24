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
    // expand the content to replace the sidebar
    $("section.main").css("width", "100%");
    $("div.main__content").css("max-width", "inherit");
    $("div.post-content>*,article.post .align--bleed").css("max-width", "85%");
    // get rid of the endless article scroll
    $("div.reading-list").remove();

    // update comments when they appear
    var observer = new MutationObserver(function(mutations) {
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
    observer.observe(document.querySelector("section.discussion-region"), {
        subtree: true,
        childList: true,
        attributes: false,
        characterData: false,
        attributeOldValue: false,
        characterDataOldValue: false
    });
}
);
