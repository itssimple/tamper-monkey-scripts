// ==UserScript==
// @name         Helgon Dölj-aktiveraren
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Aktivera möjligheten att dölja folk i klotterplanket.
// @author       103150162151163 / Chris
// @match        https://beta.helgon.se/cb/cb.aspx
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(window.storageIsAvailable) window.storageIsAvailable.Activated = true;
})();
