/**
 * sessionJS
 * ---------
 * @author Bart Holland
 * @version 0.0.1
 * @copyright Bart Holland, sessionJS may be freely distributed under the MIT license.
 */
(function (window, document, undefined) {
    var oldS = window.S,
        S = {};

    S.version = '0.0.1';

    // define for Node module pattern loaders, including Browserify
    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = S;

    } else if (typeof define === 'function' && define.amd) {
        define(S);
    }

    S.noConflict = function () {
        window.S = oldS;
        return this;
    };

    window.S = S;

    /**
     * sessionJS.setplace it int
     * -------------
     * Set one or more keys in the sessionStorage
     * @param {object} obj - Object to place into the session storage
     */
    S.set = function (obj) {
        //set key value pairs in sessionsStorage
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                window.sessionStorage.setItem(key, obj[key]);
            }
        }
    };

    /**
     * sessionJS.get
     * -------------
     * Get one ore more and even all items from the sessionStorage
     * @param {(string|string[])} obj - A string with a key to get or a an array of keys to get, empty is retrieving all
     * @returns {object} items - Object of items requested from sessionStorage
     */
    S.get = function (obj) {

        var items = {};

        //check if obj is an object
        if (typeof obj === "object") {

            for (var i = 0; i < obj.length; i += 1) {
                items[obj[i]] = window.sessionStorage.getItem(obj[i]);
            }

            //check if obj is a string
        } else if (typeof obj === "string") {
            items[obj] = window.sessionStorage.getItem(obj);
        } else {

            for (var j = 0; j < window.sessionStorage.length; j += 1) {
                items[window.sessionStorage.key(j)] = window.sessionStorage.getItem(window.sessionStorage.key(j));
            }
        }

        return items;

    };

    /**
     * sessionJS.clear
     * ---------------
     * Remove one or more keys from the sessionStorage
     * @param {(string|object)} obj - String with key to remove or array of strings to remove
     */
    S.clear = function (obj) {

        //check if obj is an object
        if (typeof obj === "object") {

            for (var i = 0; i < obj.length; i += 1) {
                window.sessionStorage.removeItem(obj[i]);
            }

            //check if obj is a string
        } else if (typeof obj === "string") {
            window.sessionStorage.removeItem(obj);
        }

    };

    /**
     * sessionJS.destroy
     * -----------------
     * Destroy the complete session
     */
    S.destroy = function () {
        window.sessionStorage.clear();
    };

}(window, document));
