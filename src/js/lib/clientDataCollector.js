/**
 * JS 'class' clientDataCollector has only the job to collect client information like user agent, os, ... something else
 *
 * @author Tino Stöckel <tino.stoeckel@fashionforhome.de>
 *
 * @copyright (c) 2014 by fashion4home GmbH <www.fashionforhome.de>
 * @license GPL-3.0
 * @license http://opensource.org/licenses/GPL-3.0 GNU GENERAL PUBLIC LICENSE
 *
 * @version 1.0.0
 */
var ClientDataCollector = function(){

	var that = this;

	/**
	 * Returns an JSON with the width and height of the viewport
	 */
	var getViewportSize = function(){
		var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		return {'width': w, 'height': h};
	};

	/**
	 * Returns whatelistet navigator informations as JSON
	 * @returns {{cookieEnabled: boolean, language: string, onLine: boolean, oscpu: *, platform: string, product: string, userAgent: string}}
	 */
	var getNavigatorData = function(){
		return {
			'cookieEnabled': navigator.cookieEnabled,
			'language': navigator.language,
			'onLine': navigator.onLine,
			'oscpu': navigator.oscpu,
			'platform': navigator.platform,
			'product': navigator.product,
			'userAgent': navigator.userAgent
		};
	};

	/**
	 * Returns is the locale storage usable
	 *
	 * @returns {boolean}
	 */
	var isLocaleStorageUsable = function(){
		var ls = 'cdcls';
		try {
			localStorage.setItem(ls, ls);
			localStorage.removeItem(ls);
			return true;
		} catch(e) {
			return false;
		}
	};

	/**
	 * Returns is the session storage usable
	 *
	 * @returns {boolean}
	 */
	var isSessionStorageUsable = function(){
		try {
			sessionStorage.setItem('cdcls','cdcls');
			if (sessionStorage.getItem('cdcls') == 'cdcls'){
				return true;
			}
		} catch (e) {
		}
		return false;
	};

	/**
	 * Collects all user client data and returns this as JSON-Object
	 *
	 * @returns {{viewportSize: , navigator: {cookieEnabled: boolean, language: string, onLine: boolean, oscpu: string, platform: string, product: string, userAgent: string}, isLocaleStorageEnabled: boolean, isSessionStorageEnabled: }}
	 */
	this.collect = function() {
		return {
			'viewportSize': getViewportSize(),
			'navigator': getNavigatorData(),
			'isLocaleStorageEnabled': isLocaleStorageUsable(),
			'isSessionStorageEnabled': isSessionStorageUsable()
		};
	};

	/**
	 * Collects all user client data and returns this as JSON-String
	 *
	 * @returns {string}
	 */
	this.toJsonString= function() {
		try {
			return JSON.stringify(that.collect());
		} catch(e) {
			return "{stringify(JSON encode) was not supported by: " + navigator.userAgent + "}";
		}
	};
};