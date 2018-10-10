// ==UserScript==
// @name          Mike's Anti-Kinja Script
// @version       1.0
// @namespace     miken32
// @downloadURL   https://github.com/miken32/betteravclub/raw/master/betteravclub.user.js
// @icon          data:image/png;base64,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
// @description   Tries to make The AV Club tolerable
// @author        Michael Newton
// @homepageURL   https://the-avocado.org/
// @match         https://avclub.com/*
// @match         https://*.avclub.com/*
// @match         https://*.kinja.com/*
// @run-at        document-start
// @grant         none
// @require       https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// ==/UserScript==

$(document).ready(function() {
    // hide the sidebar
    $("section.sidebar").remove();

    // hide the "network sites" list
    $("ul.networknav__sitelist").remove();

    // show the search bar
    $("a.networknav__search-link").trigger("click");

    // expand the content to replace the sidebar
    $("section.main").css("width", "100%");
    $("div.main__content").css("max-width", "inherit");
    $("div.post-content>*,article.post .align--bleed").css("max-width", "85%");

    // get rid of newsletter popups
    $(".js_newsletter-btn--subscribe").remove();

    // stop hiding twitter embeds
    var frame = $(".twitter-embed > iframe");
    frame.on("load", function() {
        var frameDocument = $("html", this.contentWindow.document);
        var innerFrame = $("iframe", frameDocument);
        // can't attach a listener to the load event of the nested iframe
        // put in a small delay instead and hope it loads (otherwise height is 'auto')
        window.setTimeout(function() {
            var win = innerFrame.get(0).contentWindow;
            var html = win.document.getElementsByTagName("html")[0];
            var ht = win.getComputedStyle(html).getPropertyValue("height");
            frame.css("height", ht);
        }, 1000);
    });


    // the article list
    if ($("div.post-list--pe").length) {
        // make first article image same size as subsequent ones
        $("article.post-item-frontpage div.item__content.js_item-content").addClass("item__content--thumb");

        // get rid of shared items from anywhere outside AV Club
        // only local stories seem to have links in the byline header
        $("div.streamshare div.meta--pe.secondary-byline").not(":has(a)").closest("div.post-wrapper.streamshare").remove();
  
        // get rid of "kinja deals"
        $("body.avclub figure.commerce-image").closest("div.post-wrapper.streamshare").remove();

        // get rid of "more from"
        $(".row.load-more").children("div").not(".load-more__button").remove();

        // get rid of autoplay videos
        var videoObs = new MutationObserver(function() {
            $("div.recent-video").closest("div.postlist__item").remove();
        });
        videoObs.observe(document.querySelector("div.post-list--pe"), {
            subtree: true,
            childList: true
        });
    }

    // an article
    if ($("div.post-content").length) {
        // get rid of autoplay videos in article bodies
        var videoObs2 = new MutationObserver(function() {
            $("div.recent-video").closest("div.instream-native-video").remove();
        });
        videoObs2.observe(document.querySelector("div.post-content"), {
            subtree: true,
            childList: true
        });
        $("div.post-content div.instream-native-video").remove();

        // remove the infinite scroll items before they appear
        $("div.js_reading-list").remove();

        $(".discussion-region--truncated--staff").css("height", "auto");

        // update comments when they appear
        var commentObs = new MutationObserver(function(mutList, mutObs) {
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
            childList: true
        });
    }
}
);
