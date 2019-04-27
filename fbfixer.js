// ==UserScript==
// @name         FB-fixer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove those pesky ads
// @author       NoLifeKing
// @match        https://www.facebook.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    fbFixer_find_buttons();
    setInterval(function() { fbFixer_find_buttons(); }, 1000);
    // Your code here...
})();

function fbFixer_find_buttons() {
    var buttons = document.querySelectorAll('button');
    for(var button of buttons) {
        if(isAdOrSomething(button)) {
            button.closest('[id^=substream_]').style.display = 'none';
        }
    }

    var sponsors = document.querySelectorAll('[data-ft]');
    for(var sponsor of sponsors) {
        if(isAdOrSomething(sponsor)) {
            sponsor.closest('[id^=hyperfeed_]').style.display = 'none';
        }
    }
}

function isAdOrSomething(item) {
    if(item.innerText == 'Play Now') {
        return true;
    } else if(item.innerText == 'Sponsored') {
        return true;
    }

    return false;
}
