(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./categoryevent/categoryevent.module": [
		"./src/app/categoryevent/categoryevent.module.ts",
		"categoryevent-categoryevent-module"
	],
	"./usermatchpage/usermatchpage.module": [
		"./src/app/usermatchpage/usermatchpage.module.ts",
		"usermatchpage-usermatchpage-module"
	],
	"@basic/basic.module": [
		"./src/app/basic/basic.module.ts",
		"basic-basic-module"
	],
	"@chat/chat.module": [
		"./src/app/chat/chat.module.ts",
		"default~chat-chat-module~events-events-module~user-profiles-user-profiles-module"
	],
	"@events/events.module": [
		"./src/app/events/events.module.ts",
		"default~chat-chat-module~events-events-module~user-profiles-user-profiles-module",
		"default~events-events-module~user-profiles-user-profiles-module"
	],
	"@signedin/signedin.module": [
		"./src/app/signedin/signedin.module.ts"
	],
	"@user-profiles/user-profiles.module": [
		"./src/app/user-profiles/user-profiles.module.ts",
		"default~chat-chat-module~events-events-module~user-profiles-user-profiles-module",
		"default~events-events-module~user-profiles-user-profiles-module",
		"user-profiles-user-profiles-module"
	],
	"@users/users.module": [
		"./src/app/users/users.module.ts"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-controller_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js",
		"common",
		0
	],
	"./ion-action-sheet-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js",
		"common",
		1
	],
	"./ion-action-sheet-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js",
		"common",
		2
	],
	"./ion-alert-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js",
		"common",
		3
	],
	"./ion-alert-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js",
		"common",
		4
	],
	"./ion-app_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js",
		"common",
		5
	],
	"./ion-app_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js",
		"common",
		6
	],
	"./ion-avatar_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js",
		"common",
		7
	],
	"./ion-avatar_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js",
		"common",
		8
	],
	"./ion-back-button-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js",
		"common",
		9
	],
	"./ion-back-button-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js",
		"common",
		10
	],
	"./ion-backdrop-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js",
		11
	],
	"./ion-backdrop-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js",
		12
	],
	"./ion-button_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js",
		"common",
		13
	],
	"./ion-button_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js",
		"common",
		14
	],
	"./ion-card_5-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js",
		"common",
		15
	],
	"./ion-card_5-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js",
		"common",
		16
	],
	"./ion-checkbox-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js",
		"common",
		17
	],
	"./ion-checkbox-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js",
		"common",
		18
	],
	"./ion-chip-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js",
		"common",
		19
	],
	"./ion-chip-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js",
		"common",
		20
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
		21
	],
	"./ion-datetime_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js",
		"common",
		22
	],
	"./ion-datetime_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js",
		"common",
		23
	],
	"./ion-fab_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js",
		"common",
		24
	],
	"./ion-fab_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js",
		"common",
		25
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-img.entry.js",
		26
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js",
		"common",
		27
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js",
		"common",
		28
	],
	"./ion-input-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js",
		"common",
		29
	],
	"./ion-input-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js",
		"common",
		30
	],
	"./ion-item-option_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js",
		"common",
		31
	],
	"./ion-item-option_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js",
		"common",
		32
	],
	"./ion-item_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js",
		"common",
		33
	],
	"./ion-item_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js",
		"common",
		34
	],
	"./ion-loading-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js",
		"common",
		35
	],
	"./ion-loading-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js",
		"common",
		36
	],
	"./ion-menu_4-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js",
		"common",
		37
	],
	"./ion-menu_4-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js",
		"common",
		38
	],
	"./ion-modal-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js",
		"common",
		39
	],
	"./ion-modal-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js",
		"common",
		40
	],
	"./ion-nav_5.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js",
		"common",
		41
	],
	"./ion-popover-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js",
		"common",
		42
	],
	"./ion-popover-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js",
		"common",
		43
	],
	"./ion-progress-bar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js",
		"common",
		44
	],
	"./ion-progress-bar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js",
		"common",
		45
	],
	"./ion-radio_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js",
		"common",
		46
	],
	"./ion-radio_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js",
		"common",
		47
	],
	"./ion-range-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js",
		"common",
		48
	],
	"./ion-range-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js",
		"common",
		49
	],
	"./ion-refresher_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js",
		"common",
		50
	],
	"./ion-refresher_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js",
		"common",
		51
	],
	"./ion-reorder_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js",
		"common",
		52
	],
	"./ion-reorder_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js",
		"common",
		53
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
		54
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
		"common",
		55
	],
	"./ion-searchbar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js",
		"common",
		56
	],
	"./ion-searchbar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js",
		"common",
		57
	],
	"./ion-segment_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js",
		"common",
		58
	],
	"./ion-segment_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js",
		"common",
		59
	],
	"./ion-select_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js",
		"common",
		60
	],
	"./ion-select_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js",
		"common",
		61
	],
	"./ion-slide_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js",
		62
	],
	"./ion-slide_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js",
		63
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
		"common",
		64
	],
	"./ion-split-pane-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js",
		65
	],
	"./ion-split-pane-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js",
		66
	],
	"./ion-tab-bar_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js",
		"common",
		67
	],
	"./ion-tab-bar_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js",
		"common",
		68
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
		"common",
		69
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-text.entry.js",
		"common",
		70
	],
	"./ion-textarea-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js",
		"common",
		71
	],
	"./ion-textarea-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js",
		"common",
		72
	],
	"./ion-toast-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js",
		"common",
		73
	],
	"./ion-toast-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js",
		"common",
		74
	],
	"./ion-toggle-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js",
		"common",
		75
	],
	"./ion-toggle-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js",
		"common",
		76
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
		77
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n  <ion-router-outlet home></ion-router-outlet>\r\n</ion-app>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/basic/components/basic-routine-helper/basic-routine-helper.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/basic/components/basic-routine-helper/basic-routine-helper.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  basic-routine-helper works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/basic/components/google-places/google-places.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/basic/components/google-places/google-places.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input class=\"input\"\r\n        type=\"text\"\r\n        required\r\n        name=\"location\"\r\n        placeholder=\"Location\"\r\n        [(ngModel)]=\"autocompleteInput\"\r\n        #addresstext class=\"font-weight w-100 pr-3 pl-3 br-2 mt-2 mb-2 h-3 font-primary-dark placeholder-dark native-input sc-ion-input-md\" \r\n>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/core-form-validation-message/core-form-validation-message.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/core-form-validation-message/core-form-validation-message.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"control && !control.valid && control.touched && controlComponent.showErrorMessages\"\r\n     class=\"font-red mr-3 ml-3 fs-7 validation-position\">\r\n  <p *ngFor=\"let message of controlComponent.errorMessages|keyvalue\"\r\n     class=\"invalid-feedback fs-7 m-0 br-2\">\r\n    {{message.value}}\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/modals/modal-footer/modal-footer.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/modals/modal-footer/modal-footer.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-footer>\r\n    <ion-toolbar>\r\n        <ion-row class=\"float-right\">\r\n            <ion-button [expand]=\"'true'\" [color]=\"'primary'\" [promiseBtn]=\"actionPromise\"\r\n                        [disabled]=\"buttonDisabled\" (click)=\"onActionClick()\">\r\n                {{buttonText}}\r\n            </ion-button>\r\n        </ion-row>\r\n    </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/modals/modal-header/modal-header.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/modals/modal-header/modal-header.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar [color]=\"'primary'\">\r\n        <ion-title>{{title}}</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <div class=\"menu-img\">\r\n                <ion-button (click)=\"onCloseClicked()\" fill=\"outline\" color=\"secondary\">\r\n                    <ion-icon name=\"close\"></ion-icon>\r\n                </ion-button>\r\n            </div>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"start\">\r\n            <!--<ion-back-button (click)=\"goBack()\"></ion-back-button>-->\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/images/components/images-by-entity-and-type/images-by-entity-and-type-sm.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/images/components/images-by-entity-and-type/images-by-entity-and-type-sm.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top_layout\">\r\n    <div *ngIf=\"uploadedFiles?.length\">\r\n        <img src=\"{{uploadedFiles[0].fileUrl}}\" class=\"d-inherit img-sm-circular br-max  b-0 img-border-light m-auto\"\r\n        >\r\n    </div>\r\n    \r\n    <div *ngIf=\"!uploadedFiles?.length && alt\" >\r\n        <p class=\"img-sm-circular text-center font-white fs-15 br-max b-0 img-border-light m-auto\"\r\n           [ngStyle]=\"{'background-color' : 'hsl(' + ((alt.toString().charAt(0).toUpperCase().charCodeAt(0) - 64) * 13) + ', 42%, 62%)'}\">\r\n            {{alt.toString().charAt(0).toUpperCase()}}\r\n        </p>\r\n    </div>\r\n    \r\n    <div *ngIf=\"!uploadedFiles?.length && alt\" class=\"fab_icon\" >\r\n        <img src=\"../../../../assets/heart-outline.svg\" >\r\n    </div>\r\n    \r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/images/components/images-by-entity-and-type/images-by-entity-and-type-with-edit.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/images/components/images-by-entity-and-type/images-by-entity-and-type-with-edit.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"float-left\" *ngFor=\"let i of numbers\">\r\n        <div class=\"w-img-col-row h-img-col-row\">\r\n            <images-file-details-md-with-delete [uploadedFile]=\"uploadedFiles[i]\"\r\n                                                (uploadedFileDeleted)=\"getUploadedFileByEntityAndType(createRequestData())\"\r\n                                                *ngIf=\"uploadedFiles&&uploadedFiles[i]\"></images-file-details-md-with-delete>\r\n            <images-upload-file-with-preview-sm [entityType]=\"entityType\" *ngIf=\"!uploadedFiles||!uploadedFiles[i]\"\r\n                                                [entity]=\"entity\"></images-upload-file-with-preview-sm>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/images/components/images-by-entity-and-type/images-by-entity-and-type-xl.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/images/components/images-by-entity-and-type/images-by-entity-and-type-xl.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-slides pager=\"true\" [options]=\"slideOpts\" class=\"h-100\" *ngIf=\"uploadedFiles?.length\">\r\n    <ion-slide *ngFor=\"let uploaded_file of uploadedFiles\">\r\n        <images-file-details-xl [uploadedFile]=\"uploaded_file\" [alt]=\"alt\"></images-file-details-xl>\r\n    </ion-slide>\r\n</ion-slides>\r\n<ion-slides pager=\"true\" [options]=\"slideOpts\" class=\"h-100\" *ngIf=\"!uploadedFiles?.length\">\r\n    <ion-slide>\r\n        <p class=\"img-xl text-center font-white\" [ngStyle]=\"{'background-color' : 'hsl(' + ((alt.toString().charAt(0).toUpperCase().charCodeAt(0) - 64) * 13) + ', 42%, 62%)'}\">\r\n            No Image\r\n        </p>\r\n    </ion-slide>\r\n</ion-slides>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/images/components/images-by-entity-and-type/images-by-entity-and-type.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/images/components/images-by-entity-and-type/images-by-entity-and-type.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  images-by-entity-and-type works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/images/components/images-capture-photo/images-capture-photo.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/images/components/images-capture-photo/images-capture-photo.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  images-capture-photo works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/images/components/images-create-file-upload-request/images-create-file-upload-request.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/images/components/images-create-file-upload-request/images-create-file-upload-request.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/images/components/images-delete-file/images-delete-file.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/images/components/images-delete-file/images-delete-file.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-button (click)=\"deleteUploadedFile(createRequestData())\" fill=\"clear\" color=\"primary\">\r\n    <ion-icon name=\"close\"></ion-icon>\r\n</ion-button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/images/components/images-file-details/images-file-details-md-with-delete.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/images/components/images-file-details/images-file-details-md-with-delete.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"uploadedFile\">\r\n  <images-delete-file [uploadedFile]=\"uploadedFile\" class=\"pos-absolute bg-transparent z-9\" (uploadedFileDeleted)=\"uploadedFileDeleted.emit($event)\"></images-delete-file>\r\n  <img src=\"{{uploadedFile.fileUrl}}\" class=\"d-inherit img-md-circular br-max  b-0 img-border-light m-auto\"\r\n  >\r\n</div>\r\n<div *ngIf=\"!uploadedFile && alt\">\r\n  <p class=\"img-sm-circular text-center font-white fs-15 br-max b-0 img-border-light m-auto\"\r\n     [ngStyle]=\"{'background-color' : 'hsl(' + ((alt.toString().charAt(0).toUpperCase().charCodeAt(0) - 64) * 13) + ', 42%, 62%)'}\">\r\n    {{alt.toString().charAt(0).toUpperCase()}}\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/images/components/images-file-details/images-file-details-sm.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/images/components/images-file-details/images-file-details-sm.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"uploadedFile\">\r\n  <img src=\"{{uploadedFile.fileUrl}}\" class=\"d-inherit img-md-circular br-max  b-0 img-border-light m-auto\"\r\n  >\r\n</div>\r\n<div *ngIf=\"!uploadedFile && alt\">\r\n  <p class=\"img-sm-circular text-center font-white fs-15 br-max b-0 img-border-light m-auto\"\r\n     [ngStyle]=\"{'background-color' : 'hsl(' + ((alt.toString().charAt(0).toUpperCase().charCodeAt(0) - 64) * 13) + ', 42%, 62%)'}\">\r\n    {{alt.toString().charAt(0).toUpperCase()}}\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/images/components/images-file-details/images-file-details-xl.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/images/components/images-file-details/images-file-details-xl.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"uploadedFile\">\r\n  <img src=\"{{uploadedFile.fileUrl}}\" class=\"img-xl\"\r\n  >\r\n</div>\r\n<div *ngIf=\"!uploadedFile && alt\">\r\n  <p class=\"img-xl text-center font-white\"\r\n     [ngStyle]=\"{'background-color' : 'hsl(' + ((alt.toString().charAt(0).toUpperCase().charCodeAt(0) - 64) * 13) + ', 42%, 62%)'}\">\r\n    {{alt.toString().charAt(0).toUpperCase()}}\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/images/components/images-file-details/images-file-details.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/images/components/images-file-details/images-file-details.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"uploadedFile\">\r\n  <img src=\"{{uploadedFile.fileUrl}}\" class=\"d-inherit img-sm-circular br-max  b-0 img-border-light m-auto\"\r\n  >\r\n</div>\r\n<div *ngIf=\"!uploadedFile && alt\">\r\n  <p class=\"img-sm-circular text-center font-white fs-15 br-max b-0 img-border-light m-auto\"\r\n     [ngStyle]=\"{'background-color' : 'hsl(' + ((alt.toString().charAt(0).toUpperCase().charCodeAt(0) - 64) * 13) + ', 42%, 62%)'}\">\r\n    {{alt.toString().charAt(0).toUpperCase()}}\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/images/components/images-select-file/images-select-file-no-template.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/images/components/images-select-file/images-select-file-no-template.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<images-select-photo-no-template (fileSelected)=\"fileSelected.emit($event)\"></images-select-photo-no-template>\r\n<images-capture-photo-no-template (fileSelected)=\"fileSelected.emit($event)\"></images-capture-photo-no-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/images/components/images-select-file/images-select-file-only-button.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/images/components/images-select-file/images-select-file-only-button.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<images-select-photo-no-template (fileSelected)=\"fileSelected.emit($event)\"></images-select-photo-no-template>\r\n<images-capture-photo-no-template (fileSelected)=\"fileSelected.emit($event)\"></images-capture-photo-no-template>\r\n<ion-button expand=\"full\" (click)=\"selectImage()\" color=\"warning\">\r\n  <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n  Select Image\r\n</ion-button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/images/components/images-select-file/images-select-file.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/images/components/images-select-file/images-select-file.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<images-select-photo-no-template (fileSelected)=\"fileSelected.emit($event)\"></images-select-photo-no-template>\r\n<images-capture-photo-no-template (fileSelected)=\"fileSelected.emit($event)\"></images-capture-photo-no-template>\r\n<ion-button expand=\"full\" (click)=\"selectImage()\" color=\"warning\">\r\n  <p class=\"img-xl text-center font-white\">\r\n    Add Image\r\n  </p>\r\n  <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n  Select Image\r\n</ion-button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/images/components/images-select-photo/images-select-photo.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/images/components/images-select-photo/images-select-photo.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  images-select-photo works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/images/components/images-upload-file/images-upload-file-with-preview-sm.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/images/components/images-upload-file/images-upload-file-with-preview-sm.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<images-select-file-no-template\r\n        (fileSelected)=\"selected_file=$event\"\r\n        (fileReceived)=\"file_blob=$event;fileReceived.emit($event);createFileUploadRequestComponent.createFileUploadRequest(createFileUploadRequestComponent.createRequestData($event.file.name))\"\r\n        #selectFileNoTemplateComponent></images-select-file-no-template>\r\n<div *ngIf=\"!selected_file\"\r\n     (click)=\"selectFileNoTemplateComponent.selectImage()\">\r\n    <p class=\"img-md-circular text-center fs-9 br-max b-0 img-border-light m-auto\">\r\n        Add Image\r\n    </p>\r\n</div>\r\n\r\n<div *ngIf=\"selected_file\">\r\n    <img src=\"{{convertFileSrc(selected_file.file_url)}}\"\r\n         class=\"d-inherit img-md-circular br-max  b-0 img-border-light m-auto\">\r\n</div>\r\n\r\n<images-create-file-upload-request [entity]=\"entity\" [entityType]=\"entityType\"\r\n                                   (fileUploadRequestCreated)=\"uploaded_file=$event;uploadFileFromBlob(file_blob.blob,$event.fileUploadUrl,createFileUploadRequestComponent.getFileContentType(selected_file.file_name))\"\r\n                                   #createFileUploadRequestComponent></images-create-file-upload-request>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/images/components/images-upload-file/images-upload-file-with-preview.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/images/components/images-upload-file/images-upload-file-with-preview.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<images-select-file\r\n        (fileSelected)=\"selected_file=$event\"\r\n        (fileReceived)=\"file_blob=$event;fileReceived.emit($event);\"></images-select-file>\r\n<div *ngIf=\"selected_file\" class=\"mb-2 center\">\r\n    <img src=\"{{convertFileSrc(selected_file.file_url)}}\" class=\"d-inherit img-xl img-shadow\">\r\n</div>\r\n\r\n<images-create-file-upload-request [entity]=\"entity\" [entityType]=\"entityType\"\r\n                                   (fileUploadRequestCreated)=\"uploaded_file=$event;uploadFileFromBlob(file_blob.blob,$event.fileUploadUrl,createFileUploadRequestComponent.getFileContentType(selected_file.file_name))\"\r\n                                   #createFileUploadRequestComponent></images-create-file-upload-request>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/images/components/images-upload-file/images-upload-file.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/images/components/images-upload-file/images-upload-file.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<images-select-file\r\n        (fileSelected)=\"selected_file=$event\"\r\n        (fileReceived)=\"file_blob=$event;fileReceived.emit($event);createFileUploadRequestComponent.createFileUploadRequest(createFileUploadRequestComponent.createRequestData($event.file.name))\"></images-select-file>\r\n<images-create-file-upload-request [entity]=\"entity\" [entityType]=\"entityType\"\r\n                                   (fileUploadRequestCreated)=\"uploaded_file=$event;uploadFileFromBlob(file_blob.blob,$event.fileUploadUrl,createFileUploadRequestComponent.getFileContentType(selected_file.file_name))\"\r\n                                   #createFileUploadRequestComponent></images-create-file-upload-request>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-attachment-details/quickblox-attachment-details.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quickblox/components/quickblox-attachment-details/quickblox-attachment-details.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row *ngIf=\"uploaded_file\">\r\n    <images-by-entity-and-type [uploadedFiles]=\"uploaded_file\"></images-by-entity-and-type>\r\n</ion-row>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-chat-disconnect/quickblox-chat-disconnect.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quickblox/components/quickblox-chat-disconnect/quickblox-chat-disconnect.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-create-and-upload-file/quickblox-create-and-upload-file.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quickblox/components/quickblox-create-and-upload-file/quickblox-create-and-upload-file.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<images-select-file (fileReceived)=\"createAndUploadFile(createRequestData($event))\" #selectFileSm></images-select-file>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-create-message-xml/quickblox-create-message-xml.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quickblox/components/quickblox-create-message-xml/quickblox-create-message-xml.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row>\r\n    <ion-col size=\"12\">\r\n        <form [formGroup]=\"formGroup\" #storyCreateForm=\"ngForm\"\r\n              (keydown)=\"onKeyDown($event)\"\r\n              (keyup)=\"onKeyUp($event)\">\r\n            <dynamic-ionic-form-control\r\n                    [group]=\"formGroup\"\r\n                    [model]=\"formModelMap['message']\"\r\n                    (blur)=\"onBlur()\"></dynamic-ionic-form-control>\r\n        </form>\r\n        <ion-button (click)=\"createMessage(createRequestData())\" [disabled]=\"!formGroup.valid\" class=\"float-right\">\r\n            <ion-icon name=\"send\"></ion-icon>\r\n        </ion-button>\r\n        <quickblox-create-and-upload-file\r\n                (fileUploaded)=\"attachments=quickblox_create_and_upload_file_response_to_attachment_pipe.transform($event)\"\r\n                #quickbloxCreateAndUploadFileComponent></quickblox-create-and-upload-file>\r\n    </ion-col>\r\n</ion-row>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-create-message/quickblox-create-message.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quickblox/components/quickblox-create-message/quickblox-create-message.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <ion-row>\r\n    <ion-col size=\"12\">\r\n      <form [formGroup]=\"formGroup\" #storyCreateForm=\"ngForm\">\r\n        <dynamic-ionic-form-control\r\n                [group]=\"formGroup\"\r\n                [model]=\"formModelMap['message']\"></dynamic-ionic-form-control>\r\n      </form>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"12\">\r\n      <ion-button (click)=\"createMessage(createRequestData())\" [disabled]=\"!formGroup.valid\">Send</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-get-dialog-item/quickblox-get-dialog-item.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quickblox/components/quickblox-get-dialog-item/quickblox-get-dialog-item.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"dialogItem\">\r\n    <ion-row>\r\n        <ion-col size=\"5\">\r\n            <p class=\"font-primary\"> Created Time: </p> {{dialogItem.created_at |appDateFormat}}\r\n        </ion-col>\r\n        <ion-col size=\"2\">\r\n            {{dialogItem.unread_message_count }}\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n            Reply\r\n        </ion-col>\r\n    </ion-row>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-get-message-list-and-listener/quickblox-get-message-list-and-listener.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quickblox/components/quickblox-get-message-list-and-listener/quickblox-get-message-list-and-listener.component.html ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <quickblox-message-listener\r\n            (quickbloxMessageReceived)=\"listNoTemplate.getMessages(listNoTemplate.createRequestData($event.id,$event.dialog_id))\"></quickblox-message-listener>\r\n    <quickblox-get-message-list-no-template-no-initialize\r\n            (quickbloxMessagesReceived)=\"listComponent.quickbloxMessageAdded.emit($event)\"\r\n            #listNoTemplate></quickblox-get-message-list-no-template-no-initialize>\r\n    <quickblox-get-message-list-no-template [chatDialogId]=\"dialogItem.id\" [sortAsc]=\"true\"\r\n                                            (quickbloxMessagesReceived)=\"quickblox_messages=$event\"\r\n                                            #listComponent></quickblox-get-message-list-no-template>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-get-message-list/quickblox-get-message-list.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quickblox/components/quickblox-get-message-list/quickblox-get-message-list.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-1\">\r\n    <div *ngFor=\"let message of quickblox_messages\">\r\n        <div>\r\n            <ion-row>\r\n                <ion-col [size]=\"10\" [offset]=\"message.sender_id === loggedProfile.userAccount.quickbloxId?2:0\">\r\n                    <ion-card class=\"bg-primary-white m-0\">\r\n                        <ion-card-subtitle>\r\n                            <p class=\"font-primary-dark fs-7 m-0 pt-1 pl-1 pr-1\">\r\n                                {{message.sender_id === loggedProfile.userAccount.quickbloxId ?\r\n                                'You' : loggedProfile|usersUserProfileToUserProfileValue:'DISPLAY_NAME'}}\r\n                                <span class=\"text-color float-right text-right\">\r\n                                {{message.date_sent | amTimeAgo}}\r\n                                </span>\r\n                            </p>\r\n\r\n                        </ion-card-subtitle>\r\n                        <ion-card-content class=\"p-1\">\r\n                            <ion-row>\r\n                                <quickblox-attachment-details [attachment]=\"attachment\"\r\n                                                              *ngFor=\"let attachment of message.attachments\"></quickblox-attachment-details>\r\n\r\n                            </ion-row>\r\n                            <p class=\"p-1 m-0 whitespace-pre-line\" [innerHTML]=\"message.message\"></p>\r\n                        </ion-card-content>\r\n                    </ion-card>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-get-online-users-for-dialog/quickblox-get-online-users-for-dialog.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quickblox/components/quickblox-get-online-users-for-dialog/quickblox-get-online-users-for-dialog.component.html ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-get-users/quickblox-get-users.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quickblox/components/quickblox-get-users/quickblox-get-users.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-list-dialogs/quickblox-list-dialogs-no-template.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quickblox/components/quickblox-list-dialogs/quickblox-list-dialogs-no-template.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-list-dialogs/quickblox-list-dialogs-with-last-message.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quickblox/components/quickblox-list-dialogs/quickblox-list-dialogs-with-last-message.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"quickblox_dialogs\">\r\n    <div *ngFor=\"let item of quickblox_dialogs.items\">\r\n        {{item.last_message}}\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-list-dialogs/quickblox-list-dialogs.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quickblox/components/quickblox-list-dialogs/quickblox-list-dialogs.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"quickblox_dialogs\">\r\n  <div *ngFor=\"let item of quickblox_dialogs.items\">\r\n    <a routerLink=\"/dialogs/{{item.id}}\">\r\n      <quickblox-get-dialog-item [dialogItem]=\"item\"></quickblox-get-dialog-item>\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-message-create-and-listener/quickblox-message-create-and-listener.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quickblox/components/quickblox-message-create-and-listener/quickblox-message-create-and-listener.component.html ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"typingListenerResponse?.isTyping\">\r\n<!--    <quickblox-get-user-account-from-quickblox-id-->\r\n<!--            [quickbloxUserId]=\"typingListenerResponse.userId\"-->\r\n<!--            #userAccountDetails></quickblox-get-user-account-from-quickblox-id>-->\r\n<!--    <p class=\"fs-8 text-color m-0\" *ngIf=\"userAccountDetails?.user_account\">-->\r\n<!--        <span>{{userAccountDetails?.user_account?.display_name}}</span> is typing-->\r\n<!--    </p>-->\r\n</div>\r\n<quickblox-typing-listener (typingStatusChanged)=\"onTyping($event)\"></quickblox-typing-listener>\r\n<quickblox-create-message-xml [dialogId]=\"dialogId\"\r\n                              (quickbloxMessageCreated)=\"quickbloxCreateMessage.attachments=[]\"\r\n                              #quickbloxCreateMessage></quickblox-create-message-xml>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-message-delete/quickblox-message-delete.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quickblox/components/quickblox-message-delete/quickblox-message-delete.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-button (click)=\"deleteMessage(createRequestData())\">\r\n    Delete\r\n</ion-button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-message-details/quickblox-message-details.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quickblox/components/quickblox-message-details/quickblox-message-details.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row>\r\n    <ion-col size=\"4\" class=\"text-left\">\r\n        {{quickbloxMessage.sender_id}}\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"text-center\">\r\n        {{quickbloxMessage.message}}\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"text-color text-right fs-7\">\r\n        {{quickbloxMessage.date_sent | amTimeAgo}}\r\n    </ion-col>\r\n</ion-row>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-message-listener/quickblox-message-listener.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quickblox/components/quickblox-message-listener/quickblox-message-listener.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-typing-listener/quickblox-typing-listener.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quickblox/components/quickblox-typing-listener/quickblox-typing-listener.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/quickblox/pages/quickblox-user-chat-page/quickblox-user-chat-page.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quickblox/pages/quickblox-user-chat-page/quickblox-user-chat-page.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\r\n    <quickblox-get-message-list-and-listener [dialogItem]=\"dialogItem$|async\"></quickblox-get-message-list-and-listener>\r\n</ion-content>\r\n<quickblox-message-create-and-listener\r\n        [dialogId]=\"(dialogItem$|async).id\"></quickblox-message-create-and-listener>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signedin/pages/signedin-main-page/signedin-main-page.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signedin/pages/signedin-main-page/signedin-main-page.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-router-outlet></ion-router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-all-users-profiles/users-all-users-profiles-no-template.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-all-users-profiles/users-all-users-profiles-no-template.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-all-users-profiles/users-all-users-profiles.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-all-users-profiles/users-all-users-profiles.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  users-all-users-profiles works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-filter-user-profiles/users-filter-user-profiles.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-filter-user-profiles/users-filter-user-profiles.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let user_profile of user_profiles\">\r\n    <users-user-profile-row [userProfile]=\"user_profile\"></users-user-profile-row>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-cognito-confirm-signup/users-user-cognito-confirm-signup.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-user-cognito-confirm-signup/users-user-cognito-confirm-signup.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formGroup\" #confirmSignUpForm=\"ngForm\" (submit)=\"confirmSignUp(createRequestData())\">\r\n  <div class=\"mt-5\">\r\n    <p class=\"mr-3 ml-3 font-primary-dark\">\r\n      Verification code has been sent to your registered mobile number\r\n    </p>\r\n    <div class=\"pos-relative\">\r\n      <dynamic-ionic-form-control [group]=\"formGroup\"\r\n                                  [layout]=\"formLayout\"\r\n                                  [model]=\"formModelMap['token']\" #token></dynamic-ionic-form-control>\r\n      <core-form-validation-message [controlComponent]=\"token\"\r\n                                       [control]=\"token.control\"></core-form-validation-message>\r\n    </div>\r\n  </div>\r\n  <div class=\"pt-3 pr-3 pl-3\">\r\n    <ion-button class=\"h-3\" color=\"primary\" expand=\"block\" type=\"submit\" fill=\"outline\"\r\n                [promiseBtn]=\"user_cognito_confirm_sign_up_subscription$\"\r\n                [disabled]=\"!confirmSignUpForm.valid\" [expand]=\"'block'\">\r\n      Verify\r\n    </ion-button>\r\n  </div>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-cognito-forgot-password/users-user-cognito-forgot-password.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-user-cognito-forgot-password/users-user-cognito-forgot-password.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  users-user-congnito-forgot-password works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-cognito-login/users-user-cognito-login.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-user-cognito-login/users-user-cognito-login.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formGroup\" #signInForm=\"ngForm\" (submit)=\"signIn(createRequestData())\">\r\n    <ion-row>\r\n        <ion-col [size]=\"12\">\r\n            <div class=\"pos-relative\">\r\n                <dynamic-ionic-form-control [group]=\"formGroup\"\r\n                                            [layout]=\"formLayout\"\r\n                                            [model]=\"formModelMap['user_name']\" #userName></dynamic-ionic-form-control>\r\n                <core-form-validation-message [controlComponent]=\"userName\"\r\n                                              [control]=\"userName.control\"></core-form-validation-message>\r\n            </div>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col [size]=\"12\">\r\n            <dynamic-ionic-form-control [group]=\"formGroup\"\r\n                                        [layout]=\"formLayout\"\r\n                                        [model]=\"formModelMap['password']\" #password></dynamic-ionic-form-control>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"pt-2\">\r\n        <ion-col [size]=\"12\" class=\"pt-2 pr-3 pl-3\">\r\n            <ion-button class=\"h-3\" color=\"primary\" expand=\"block\" type=\"submit\" fill=\"outline\"\r\n                        [disabled]=\"!signInForm.valid\">\r\n                Sign In\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-cognito-logout/users-user-cognito-logout.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-user-cognito-logout/users-user-cognito-logout.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-button class=\"h-3 m-auto\" color=\"primary\" expand=\"block\" type=\"submit\" fill=\"outline\" (click)=\"signOut(global)\"\r\n            [expand]=\"'block'\">\r\n    Logout\r\n</ion-button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-cognito-resend-signup-confirm/users-user-cognito-resend-signup-confirm.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-user-cognito-resend-signup-confirm/users-user-cognito-resend-signup-confirm.component.html ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row>\r\n  <ion-col [size]=\"12\" class=\"p-0 pt-2\">\r\n    <a class=\"font-primary-grey fs-12 float-right mr-3 ml-3\"\r\n       (click)=\"resendSignUp(createRequestData())\"\r\n       [promiseBtn]=\"user_cognito_resend_sign_up_subscription$\">\r\n      Resend again?\r\n    </a>\r\n  </ion-col>\r\n</ion-row>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-cognito-signup/users-user-cognito-signup.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-user-cognito-signup/users-user-cognito-signup.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row>\r\n  <ion-col [size]=\"12\">\r\n    <form [formGroup]=\"formGroup\" #userSignUpForm=\"ngForm\" (submit)=\"signUp(createRequestData())\"\r\n          class=\"mt-2\">\r\n      <div class=\"pos-relative\">\r\n        <div class=\"mt-2 mb-2\">\r\n          <dynamic-ionic-form-control [group]=\"formGroup\"\r\n                                      [layout]=\"formLayout\"\r\n                                      [model]=\"formModelMap['user_name']\"\r\n                                      #phoneNumber></dynamic-ionic-form-control>\r\n          <core-form-validation-message [controlComponent]=\"phoneNumber\"\r\n                                           [control]=\"phoneNumber.control\"></core-form-validation-message>\r\n        </div>\r\n      </div>\r\n      <div class=\"pos-relative\">\r\n        <dynamic-ionic-form-control [group]=\"formGroup\"\r\n                                    [layout]=\"formLayout\"\r\n                                    [model]=\"formModelMap['email']\" #userName></dynamic-ionic-form-control>\r\n        <core-form-validation-message [controlComponent]=\"userName\"\r\n                                         [control]=\"userName.control\"></core-form-validation-message>\r\n      </div>\r\n      <div class=\"pos-relative\">\r\n        <dynamic-ionic-form-control [group]=\"formGroup\"\r\n                                    [layout]=\"formLayout\"\r\n                                    [model]=\"formModelMap['password']\" #password></dynamic-ionic-form-control>\r\n        <core-form-validation-message [controlComponent]=\"password\"\r\n                                         [control]=\"password.control\"></core-form-validation-message>\r\n        <p class=\"mt-1 mb-2 mr-4 ml-4 font-primary-dark fs-9\">\r\n          Password should contain minimum of 6 characters with atleast one number, one lowercase letter (Ex: example123)\r\n        </p>\r\n      </div>\r\n      <div class=\"pt-2 pr-3 pl-3\">\r\n        <ion-button class=\"h-3\" color=\"primary\" expand=\"block\" type=\"submit\" fill=\"outline\"\r\n                    [disabled]=\"!userSignUpForm.form.valid\"\r\n                    [promiseBtn]=\"user_cognito_sign_up_subscription$\">Register\r\n        </ion-button>\r\n      </div>\r\n    </form>\r\n  </ion-col>\r\n</ion-row>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-by-user/users-user-profile-by-user-no-template.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-user-profile-by-user/users-user-profile-by-user-no-template.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-by-user/users-user-profile-by-user.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-user-profile-by-user/users-user-profile-by-user.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card *ngIf=\"user_profile\">\r\n    <ion-row>\r\n        <ion-col size=\"6\">\r\n            <images-by-entity-and-type-sm [entity]=\"user_profile.userAccount._id\" [entityType]=\"'USER_ACCOUNT'\"\r\n                                          [alt]=\"(user_profile|usersUserProfileToUserProfileValue:'NAME').value\">\r\n\r\n            </images-by-entity-and-type-sm>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n            <ion-label class=\"font-black font-weight-bold fs-8\">\r\n                {{(user_profile|usersUserProfileToUserProfileValue:'NAME').value}}\r\n            </ion-label>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-create-or-update-form/users-user-profile-create-or-update-form.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-user-profile-create-or-update-form/users-user-profile-create-or-update-form.component.html ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formGroup\" #updateForm=\"ngForm\"\r\n      (submit)=\"usersUserProfileCreateOrUpdateComponent.createUserProfile(usersUserProfileCreateOrUpdateComponent.createRequestData(createRequestData()))\">\r\n    <dynamic-ionic-form [group]=\"formGroup\" [model]=\"formModel\"></dynamic-ionic-form>\r\n    <ion-row class=\"pt-2\">\r\n        <ion-col [size]=\"12\" class=\"pt-2 pr-3 pl-3\">\r\n            <ion-button class=\"h-3\" color=\"primary\" expand=\"block\" type=\"submit\" fill=\"outline\"\r\n                        [disabled]=\"!updateForm.valid\">\r\n                Update \r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</form>\r\n<users-user-profile-create-or-update #usersUserProfileCreateOrUpdateComponent></users-user-profile-create-or-update>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-create-or-update-form/users-user-profile-create-or-update-specific-form.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-user-profile-create-or-update-form/users-user-profile-create-or-update-specific-form.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formGroup\" #profileUpdateForm=\"ngForm\"\r\n      (submit)=\"usersUserProfileCreateOrUpdateComponent.createUserProfile(usersUserProfileCreateOrUpdateComponent.createRequestData(createRequestData()))\">\r\n    <ion-row>\r\n        <ion-col [size]=\"12\">\r\n            <div class=\"pos-relative\" >\r\n                <dynamic-ionic-form-control [group]=\"formGroup\"\r\n                                            [model]=\"formModelMap[entityType]\" #profile></dynamic-ionic-form-control>\r\n                <core-form-validation-message [controlComponent]=\"profile\"\r\n                                              [control]=\"profile.control\"></core-form-validation-message>\r\n            </div>\r\n            \r\n        </ion-col>\r\n    </ion-row>\r\n</form>\r\n<users-user-profile-create-or-update #usersUserProfileCreateOrUpdateComponent></users-user-profile-create-or-update>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-create-or-update-form/users-user-profile-create-or-update-specific-location-form.component.html":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-user-profile-create-or-update-form/users-user-profile-create-or-update-specific-location-form.component.html ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  [formGroup]=\"formGroup\" #profileUpdateForm=\"ngForm\"\r\n      (submit)=\"usersUserProfileCreateOrUpdateComponent.createUserProfile(usersUserProfileCreateOrUpdateComponent.createRequestLocationData(createRequestLocationData()))\">\r\n    <ion-row>\r\n        <ion-col [size]=\"12\">\r\n            <div class=\"pos-relative\" >\r\n                <AutocompleteComponent (setAddress)=\"getAddress($event)\" adressType=\"geocode\" ></AutocompleteComponent>\r\n            </div>\r\n        </ion-col>\r\n    </ion-row>\r\n</form>\r\n<users-user-profile-create-or-update #usersUserProfileCreateOrUpdateComponent></users-user-profile-create-or-update>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal-content/users-user-profile-create-or-update-location-modal-content.component.html":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal-content/users-user-profile-create-or-update-location-modal-content.component.html ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<core-modal-header [title]=\"'Update Value'\" (closeClicked)=\"closeModal($event)\"></core-modal-header>\r\n<ion-content [scrollEvents]=\"true\" class=\"--bg-primary-ultra-light\">\r\n    <users-user-profile-create-or-update-specific-location-form \r\n    \r\n                                                       (userProfileChanged)=\"closeModal({status:'SUCCESS',data:$event})\"\r\n                                                       [locationValue]=\"userProfile.location\"\r\n                                                       #usersUserProfileFormComponent></users-user-profile-create-or-update-specific-location-form>\r\n</ion-content>\r\n<core-modal-footer \r\n        (actionClicked)=\"usersUserProfileFormComponent.users_user_profile_create_or_update_component.createUserProfile(\r\n        usersUserProfileFormComponent.users_user_profile_create_or_update_component.createRequestLocationData(usersUserProfileFormComponent.createRequestLocationData()))\"\r\n        [buttonText]=\"'UPDATE'\"\r\n        [actionPromise]=\"usersUserProfileFormComponent.users_user_profile_create_or_update_component.user_profile_create$\"\r\n        ></core-modal-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row>\r\n    <ion-label class=\"font-black font-weight-bold fs-10 ellipses-2\">\r\n        Location\r\n       \r\n    </ion-label>\r\n</ion-row>\r\n<ion-row class=\"font-primary-grey fs-9 \">\r\n    <ion-col [size]=\"6\" class=\"p-3\">\r\n        <ion-label>\r\n                {{(address_value) || 'Add Value'}}\r\n        </ion-label>\r\n    </ion-col>\r\n    <ion-col [size]=\"6\">\r\n        <ion-button fill=\"clear\" size=\"small\" class=\"float-right\" color=\"medium\" (click)=\"openModal()\">\r\n            <fa-icon icon=\"pencil-alt\"></fa-icon>\r\n        </ion-button>\r\n    </ion-col>\r\n</ion-row>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal-content/users-user-profile-create-or-update-modal-content.component.html":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal-content/users-user-profile-create-or-update-modal-content.component.html ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<core-modal-header [title]=\"'Update Value'\" (closeClicked)=\"closeModal($event)\"></core-modal-header>\r\n<ion-content [scrollEvents]=\"true\" class=\"--bg-primary-ultra-light\">\r\n    <users-user-profile-create-or-update-specific-form [entityType]=\"entityType\"\r\n                                                       (userProfileChanged)=\"closeModal({status:'SUCCESS',data:$event})\"\r\n                                                       [userProfileValue]=\"userProfile|usersUserProfileToUserProfileValue:entityType\"\r\n                                                       #usersUserProfileFormComponent></users-user-profile-create-or-update-specific-form>\r\n</ion-content>\r\n<core-modal-footer \r\n        (actionClicked)=\"usersUserProfileFormComponent.users_user_profile_create_or_update_component.createUserProfile(\r\n        usersUserProfileFormComponent.users_user_profile_create_or_update_component.createRequestData(usersUserProfileFormComponent.createRequestData()))\"\r\n        [buttonText]=\"'UPDATE'\"\r\n        [actionPromise]=\"usersUserProfileFormComponent.users_user_profile_create_or_update_component.user_profile_create$\"\r\n        [buttonDisabled]=\"!usersUserProfileFormComponent.formGroup.valid\"></core-modal-footer>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal.component.html ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row>\r\n    <ion-label class=\"font-black font-weight-bold fs-10 ellipses-2\">\r\n        {{entityType|usersUserProfileEntryNameToHumanReadable}}\r\n    </ion-label>\r\n</ion-row>\r\n<ion-row class=\"font-primary-grey fs-9 \">\r\n    <ion-col [size]=\"6\" class=\"p-3\">\r\n        <ion-label>\r\n            {{((userProfile|usersUserProfileToUserProfileValue:entityType)?.value) || 'Add Value'}}\r\n        </ion-label>\r\n    </ion-col>\r\n    <ion-col [size]=\"6\">\r\n        <ion-button fill=\"clear\" size=\"small\" class=\"float-right\" color=\"medium\" (click)=\"openModal()\">\r\n            <fa-icon icon=\"pencil-alt\"></fa-icon>\r\n        </ion-button>\r\n    </ion-col>\r\n</ion-row>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-create-or-update/users-user-profile-create-or-update.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-user-profile-create-or-update/users-user-profile-create-or-update.component.html ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-value/users-user-profile-value-fa-icon-gender.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-user-profile-value/users-user-profile-value-fa-icon-gender.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-col [size]=\"12\" class=\"b-2 br-3\" *ngIf=\"userProfileValue\">\r\n    <ion-col size=\"4\">\r\n        <fa-icon class=\"pr-10 fs-10\" [icon]=\"userProfileValue|usersUserProfileEntryNameToIcon\"></fa-icon>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n        <fa-icon [icon]=\"userProfileValue|usersGenderToFaIcon\"></fa-icon>\r\n    </ion-col>\r\n</ion-col>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-value/users-user-profile-value-fa-icon-quote.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-user-profile-value/users-user-profile-value-fa-icon-quote.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-col [size]=\"12\" class=\"fs-16 bg-primary-white font-primary-grey\">\r\n    <ion-col size=\"10\" class=\"left-quote\">\r\n        <fa-icon class=\"fs-12\" [icon]=\"'quote-left'\"></fa-icon>\r\n        Painting Screens\r\n    </ion-col>\r\n</ion-col>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-value/users-user-profile-value-fa-icon.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-user-profile-value/users-user-profile-value-fa-icon.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-col [size]=\"12\" class=\"b-2 br-3\" *ngIf=\"userProfileValue\">\r\n    <ion-col size=\"4\" >\r\n        <fa-icon class=\"pr-10 fs-10\" [icon]=\"userProfileValue|usersUserProfileEntryNameToIcon\"></fa-icon>\r\n    </ion-col>\r\n    <ion-col size=\"6\" >\r\n        {{userProfileValue.value}}\r\n    </ion-col>\r\n</ion-col>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-value/users-user-profile-value.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-user-profile-value/users-user-profile-value.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-col *ngIf=\"userProfileValue\">\r\n    <ion-col size=\"2\" class=\"ml-1\">\r\n        <fa-icon class=\"pr-10 fs-10\" [icon]=\"userProfileValue|usersUserProfileEntryNameToIcon\"></fa-icon>\r\n    </ion-col>\r\n    <ion-col size=\"8\" class=\"mr-1 font-weight-bold ion-text-uppercase fs-8\">\r\n        {{userProfileValue.value}}\r\n    </ion-col>\r\n\r\n</ion-col>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile/users-user-profile-no-template.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-user-profile/users-user-profile-no-template.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile/users-user-profile-row.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-user-profile/users-user-profile-row.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row class=\"pt-2 pb-2 pr-0 pl-0 text-left\" *ngIf=\"userProfile\">\r\n    <ion-col size=\"3\">\r\n        <images-by-entity-and-type-sm [entity]=\"userProfile.userAccount._id\" [entityType]=\"'USER_ACCOUNT'\"\r\n                                      [alt]=\"(userProfile|usersUserProfileToUserProfileValue:'NAME').value\"></images-by-entity-and-type-sm>\r\n    </ion-col>\r\n    <ion-col size=\"9\">\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-label\r\n                        class=\"fs-11 pr-3\">{{(userProfile|usersUserProfileToUserProfileValue:'NAME').value}}</ion-label>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-col>\r\n</ion-row>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile/users-user-profile.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/components/users-user-profile/users-user-profile.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"userProfile\">\r\n    <ion-col size=\"4\" class=\"mr-2\" *ngFor=\"let user_profile_value of userProfile?.profile\">\r\n        <users-user-profile-value-fa-icon  class=\"b-2\" [userProfileValue]=\"user_profile_value\"\r\n                                          *ngIf=\"user_profile_value|usersUserProfileEntryNameToIcon\"></users-user-profile-value-fa-icon>\r\n    </ion-col>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/pages/users-user-preference-page/users-user-preference-page.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/pages/users-user-preference-page/users-user-preference-page.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <p class=\"text-center font-weight-bold txt-uppercase fs-12\">My Vitals</p>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"--bg-primary-ultra-light\">\n  <div class=\"maxw-500p m-auto\">\n    <ion-row class=\"pt-3\">\n      <ion-col>\n        <!-- <ion-button>\n          <ion-img width=\"25\" height=\"25\" src=\"school-outline\"></ion-img>\n          Education\n        </ion-button> -->\n        <ion-segment [(ngModel)]=\"segment\" style=\"background: #3b6593;\">\n          <ion-segment-button value=\"user\" style=\"color: white;\" icon-left>\n            User Info\n          </ion-segment-button>\n          <ion-segment-button value=\"card\">\n            Card Info\n          </ion-segment-button>\n          <ion-segment-button value=\"change\">\n            Change Password\n          </ion-segment-button>\n          <ion-segment-button value=\"change1\">\n            Change Password\n          </ion-segment-button>\n        </ion-segment>\n\n        <div [ngSwitch]=\"segment\">\n          <ion-card *ngSwitchCase=\"'user'\">\n            <ion-card-header>\n              User Info\n            </ion-card-header>\n            <ion-card-content>\n              Your user info content here\n            </ion-card-content>\n          </ion-card>\n\n          <ion-card *ngSwitchCase=\"'card'\">\n            <ion-card-header>\n              Card Info\n            </ion-card-header>\n            <ion-card-content>\n              Your card info content here\n            </ion-card-content>\n          </ion-card>\n\n          <ion-card *ngSwitchCase=\"'change'\">\n            <ion-card-header>\n              Change Password\n            </ion-card-header>\n            <ion-card-content>\n              Your change password form here\n            </ion-card-content>\n          </ion-card>\n          <ion-card *ngSwitchCase=\"'change1'\">\n            <ion-card-header>\n              Change Password\n            </ion-card-header>\n            <ion-card-content>\n              Your change password form here\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n\n<ion-row>\n  <ion-col>\n    <ion-button expand=\"block\">NEXT </ion-button>\n  </ion-col>\n</ion-row>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/pages/users-user-profile-update-page/users-user-profile-update-page.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/pages/users-user-profile-update-page/users-user-profile-update-page.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <p class=\"text-center font-weight-bold txt-uppercase fs-12\">Update Profile</p>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"--bg-primary-ultra-light\">\r\n    <ion-row class=\"pt-3\">\r\n        <ion-col size=\"12\">\r\n            <users-filter-user-profiles [gender]=\"'MALE'\"></users-filter-user-profiles>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"pt-3\">\r\n        <images-upload-file #uploadFileComponent></images-upload-file>\r\n    </ion-row>\r\n    <div class=\"maxw-500p m-auto\">\r\n        <ion-row class=\"pt-3\">\r\n            <ion-col>\r\n                <users-user-profile-create-or-update-form></users-user-profile-create-or-update-form>\r\n            </ion-col>\r\n        </ion-row>\r\n    </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/pages/users-user-signin-page/users-user-signin-page.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/pages/users-user-signin-page/users-user-signin-page.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <p class=\"text-center font-weight-bold txt-uppercase fs-12\">Signin</p>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"--bg-primary-ultra-light\">\r\n    <div class=\"maxw-500p m-auto\">\r\n        <ion-row class=\"pt-3\">\r\n            <ion-col>\r\n                <users-user-cognito-login\r\n                        (signInSuccess)=\"usersUserProfileComponent.getUserProfile()\"></users-user-cognito-login>\r\n                <users-user-profile-no-template (userProfileReceived)=\"setUserProfileAndNavigate($event)\"\r\n                                    #usersUserProfileComponent></users-user-profile-no-template>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"pt-3\">\r\n            <ion-button class=\"h-3 m-auto\" color=\"primary\" expand=\"block\" type=\"submit\" fill=\"outline\"\r\n                        routerLink=\"/basic/user/signup\"\r\n                        [expand]=\"'block'\">\r\n                Signup\r\n            </ion-button>\r\n\r\n        </ion-row>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/pages/users-user-signup-confirm-page/users-user-signup-confirm-page.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/pages/users-user-signup-confirm-page/users-user-signup-confirm-page.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n     <!-- <ion-back-button></ion-back-button>-->\r\n    </ion-buttons>\r\n    <p class=\"text-center font-weight-bold txt-uppercase fs-12\">Verify Your Account</p>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"--bg-primary-ultra-light\">\r\n  <div class=\"maxw-500p m-auto\">\r\n    <ion-row class=\"pt-3\">\r\n      <ion-col>\r\n        <users-user-cognito-confirm-signup [phoneNumber]=\"user_name$|async\"\r\n                                            (confirmSignUpSuccess)=\"navigateToSignin()\"></users-user-cognito-confirm-signup>\r\n      </ion-col>\r\n    </ion-row>\r\n    <users-user-cognito-resend-signup-confirm [phoneNumber]=\"user_name$|async\"></users-user-cognito-resend-signup-confirm>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/pages/users-user-signup-page/users-user-signup-page.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/pages/users-user-signup-page/users-user-signup-page.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n   <!--   <ion-back-button></ion-back-button> -->\r\n    </ion-buttons>\r\n    <p class=\"text-center font-weight-bold txt-uppercase fs-12\">Register With Phone</p>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"--bg-primary-ultra-light\">\r\n  <div class=\"maxw-500p m-auto\">\r\n    <users-user-cognito-signup (signUpSuccess)=\"navigateToConfirmPage($event)\"></users-user-cognito-signup>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/reflect-metadata/Reflect.js":
/*!**************************************************!*\
  !*** ./node_modules/reflect-metadata/Reflect.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof global === "object" ? global :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _quickblox_quickblox_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @quickblox/quickblox.resolver */ "./src/app/quickblox/quickblox.resolver.ts");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @environment/environment */ "./src/environments/environment.ts");






const routes = [
    { path: 'basic', loadChildren: '@basic/basic.module#BasicModule' },
    {
        path: 'signedin',
        loadChildren: '@signedin/signedin.module#SignedinModule'
    },
    {
        path: 'chat',
        loadChildren: '@chat/chat.module#ChatModule',
        resolve: { quickbloxSession: _quickblox_quickblox_resolver__WEBPACK_IMPORTED_MODULE_3__["QuickbloxSessionResolver"] },
        canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    { path: 'usermatchpage', loadChildren: './usermatchpage/usermatchpage.module#UsermatchpagePageModule' },
    { path: 'categoryevent', loadChildren: './categoryevent/categoryevent.module#CategoryeventPageModule' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"], enableTracing: _environment_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].routeTracing })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, router) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            if (window.location.pathname === '/') {
                this.router.navigateByUrl('/signedin/profile/dashboard');
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _core_core_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/core.constants */ "./src/app/core/core.constants.ts");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm2015/ngx-restangular.js");
/* harmony import */ var _core_http_http_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/http/http.module */ "./src/app/core/http/http.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var angular2_promise_buttons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular2-promise-buttons */ "./node_modules/angular2-promise-buttons/dist/index.js");
/* harmony import */ var angular2_promise_buttons__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angular2_promise_buttons__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _quickblox_quickblox_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @quickblox/quickblox.module */ "./src/app/quickblox/quickblox.module.ts");
/* harmony import */ var _signedin_signedin_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @signedin/signedin.module */ "./src/app/signedin/signedin.module.ts");
/* harmony import */ var _basic_components_basic_routine_helper_basic_routine_helper_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @basic/components/basic-routine-helper/basic-routine-helper.component */ "./src/app/basic/components/basic-routine-helper/basic-routine-helper.component.ts");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/fesm2015/ngx-stripe.js");
/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @environment/environment */ "./src/environments/environment.ts");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _basic_components_basic_routine_helper_basic_routine_helper_component__WEBPACK_IMPORTED_MODULE_18__["BasicRoutineHelperComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"].forRoot(_core_core_constants__WEBPACK_IMPORTED_MODULE_11__["STORAGE_CONFIGURATION"]),
            ngx_restangular__WEBPACK_IMPORTED_MODULE_12__["RestangularModule"].forRoot(_core_http_http_module__WEBPACK_IMPORTED_MODULE_13__["RestangularConfigFactory"]),
            angular2_promise_buttons__WEBPACK_IMPORTED_MODULE_15__["Angular2PromiseButtonModule"].forRoot(_core_core_constants__WEBPACK_IMPORTED_MODULE_11__["PROMISE_BUTTON_MODULE_OPTIONS"]),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            ngx_stripe__WEBPACK_IMPORTED_MODULE_19__["NgxStripeModule"].forRoot(_environment_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].stripePublicKey),
            _core_core_module__WEBPACK_IMPORTED_MODULE_14__["CoreModule"],
            _quickblox_quickblox_module__WEBPACK_IMPORTED_MODULE_16__["QuickbloxModule"],
            _signedin_signedin_module__WEBPACK_IMPORTED_MODULE_17__["SignedinModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/basic/components/basic-routine-helper/basic-routine-helper.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/basic/components/basic-routine-helper/basic-routine-helper.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljL2NvbXBvbmVudHMvYmFzaWMtcm91dGluZS1oZWxwZXIvYmFzaWMtcm91dGluZS1oZWxwZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/basic/components/basic-routine-helper/basic-routine-helper.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/basic/components/basic-routine-helper/basic-routine-helper.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BasicRoutineHelperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicRoutineHelperComponent", function() { return BasicRoutineHelperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");



let BasicRoutineHelperComponent = class BasicRoutineHelperComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(injector) {
        super(injector);
    }
    initializeComponent() {
        this.router.navigateByUrl('signedin/profile/dashboard');
    }
};
BasicRoutineHelperComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
BasicRoutineHelperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-basic-routine-helper',
        template: __webpack_require__(/*! raw-loader!./basic-routine-helper.component.html */ "./node_modules/raw-loader/index.js!./src/app/basic/components/basic-routine-helper/basic-routine-helper.component.html"),
        styles: [__webpack_require__(/*! ./basic-routine-helper.component.scss */ "./src/app/basic/components/basic-routine-helper/basic-routine-helper.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], BasicRoutineHelperComponent);



/***/ }),

/***/ "./src/app/basic/components/google-places/google-places.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/basic/components/google-places/google-places.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".font-weight {\n  font-weight: bold;\n  margin-left: 18px;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JhY2t1cC9VU1RYLVByb2plY3QvRXZlbnREYXRpbmctU2Vhbi90ZXN0MS9zcmMvYXBwL2Jhc2ljL2NvbXBvbmVudHMvZ29vZ2xlLXBsYWNlcy9nb29nbGUtcGxhY2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9iYXNpYy9jb21wb25lbnRzL2dvb2dsZS1wbGFjZXMvZ29vZ2xlLXBsYWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9iYXNpYy9jb21wb25lbnRzL2dvb2dsZS1wbGFjZXMvZ29vZ2xlLXBsYWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250LXdlaWdodCB7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgbWFyZ2luLWxlZnQ6MThweDtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG4iLCIuZm9udC13ZWlnaHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIG9wYWNpdHk6IDAuNTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/basic/components/google-places/google-places.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/basic/components/google-places/google-places.component.ts ***!
  \***************************************************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");

/// <reference types="@types/googlemaps" />


let AutocompleteComponent = class AutocompleteComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(injector) {
        super(injector);
        this.setAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
    }
    ngAfterViewInit() {
        this.getPlaceAutocomplete();
    }
    getPlaceAutocomplete() {
        const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement, {
            componentRestrictions: { country: 'US' },
        });
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            const place = autocomplete.getPlace();
            this.invokeEvent(place);
        });
    }
    invokeEvent(place) {
        this.setAddress.emit(place);
    }
};
AutocompleteComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AutocompleteComponent.prototype, "setAddress", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addresstext', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AutocompleteComponent.prototype, "addresstext", void 0);
AutocompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'AutocompleteComponent',
        template: __webpack_require__(/*! raw-loader!./google-places.component.html */ "./node_modules/raw-loader/index.js!./src/app/basic/components/google-places/google-places.component.html"),
        styles: [__webpack_require__(/*! ./google-places.component.scss */ "./src/app/basic/components/google-places/google-places.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], AutocompleteComponent);



/***/ }),

/***/ "./src/app/core/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/core/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/storage.service */ "./src/app/core/storage.service.ts");
/* harmony import */ var aws_amplify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aws-amplify-angular */ "./node_modules/aws-amplify-angular/dist/index.js");
/* harmony import */ var _users_cognito_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @users/cognito.service */ "./src/app/users/cognito.service.ts");







let AuthGuard = class AuthGuard {
    constructor(authService, cognitoService, amplifyService, storageService, router) {
        this.authService = authService;
        this.cognitoService = cognitoService;
        this.amplifyService = amplifyService;
        this.storageService = storageService;
        this.router = router;
    }
    canActivate(next, state) {
        const _AuthGuard = this;
        return this.amplifyService.auth()
            .currentSession()
            .then(session => {
            // console.log('here');
            return this.authService.getLoggedProfile().then(success => {
                // Doing it to initialize everything properly
                this.authService.setLoggedProfile(success);
                if (success) {
                    if (session.isValid()) {
                        return Promise.resolve(true);
                    }
                    else {
                        _AuthGuard.authService.clearAll();
                        _AuthGuard.router.navigateByUrl('/basic/user/signin');
                        return Promise.resolve(false);
                    }
                }
                else {
                    return this.cognitoService.signOut(true)
                        .toPromise()
                        .then(function (success2) {
                        _AuthGuard.authService.clearAll();
                        _AuthGuard.router.navigateByUrl('/basic/user/signin');
                        return Promise.resolve(false);
                    })
                        .catch(error => {
                        _AuthGuard.authService.clearAll();
                        _AuthGuard.router.navigateByUrl('/basic/user/signin');
                        return Promise.resolve(false);
                    });
                }
            });
        })
            .catch(error => {
            _AuthGuard.authService.clearAll();
            _AuthGuard.router.navigateByUrl('/basic/user/signin');
            return Promise.resolve(false);
        });
    }
    canActivateChild(childRoute, state) {
        return this.canActivate(childRoute, state);
    }
};
AuthGuard.ctorParameters = () => [
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _users_cognito_service__WEBPACK_IMPORTED_MODULE_6__["CognitoService"] },
    { type: aws_amplify_angular__WEBPACK_IMPORTED_MODULE_5__["AmplifyService"] },
    { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _users_cognito_service__WEBPACK_IMPORTED_MODULE_6__["CognitoService"],
        aws_amplify_angular__WEBPACK_IMPORTED_MODULE_5__["AmplifyService"], _core_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: SESSION_KEYS, AuthService, RedirectState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_KEYS", function() { return SESSION_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectState", function() { return RedirectState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/storage.service */ "./src/app/core/storage.service.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");





var UserProfile = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["Users"].UserProfile;
const SESSION_KEYS = {
    SESSION_USER_PROFILE: "user_profile",
    SESSION_STORAGE_NAMESPACE: "com.hhlife",
};
let AuthService = class AuthService {
    constructor(injector) {
        this.storageService = injector.get(_core_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]);
    }
    clearAll() {
        this.storageService.clear();
        this.redirectState = null;
        this.userProfile = null;
        this.setLoggedProfile(null);
    }
    setLoggedProfile(user_profile) {
        this.userProfile = user_profile;
        console.log("user_profile", user_profile);
        return this.storageService.set(SESSION_KEYS.SESSION_USER_PROFILE, _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].serialize(user_profile));
    }
    getLoggedProfile() {
        return this.storageService
            .get(SESSION_KEYS.SESSION_USER_PROFILE)
            .then((success) => {
            return _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].deserialize(success, UserProfile);
        });
    }
    setRedirectState(redirect_state) {
        this.redirectState = redirect_state;
    }
    getRedirectState() {
        return this.redirectState;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], AuthService);

class RedirectState {
    constructor(url, queryParams) {
        this.url = url;
        this.queryParams = queryParams;
    }
}
RedirectState.ctorParameters = () => [
    { type: String },
    { type: undefined }
];


/***/ }),

/***/ "./src/app/core/commons.service.ts":
/*!*****************************************!*\
  !*** ./src/app/core/commons.service.ts ***!
  \*****************************************/
/*! exports provided: CommonsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonsService", function() { return CommonsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);

var CommonsService_1;





let CommonsService = CommonsService_1 = class CommonsService {
    constructor() {
    }
    static parseToJson(data) {
        return JSON.parse(data);
    }
    static isNumber(value) {
        return !isNaN(value);
    }
    static stringify(data) {
        return JSON.stringify(data);
    }
    static convertToArray(object) {
        if (!object) {
            return [];
        }
        let array = [];
        if (!Array.isArray(object)) {
            array = [object];
        }
        else {
            array = object;
        }
        return array;
    }
    // tslint:disable-next-line:callable-types
    static deserialize(json, classReference) {
        if (Object.keys(json).length === 0) {
            return null;
        }
        return CommonsService_1._JSON_CONVERTER.deserialize(json, classReference);
    }
    static serialize(data) {
        return CommonsService_1._JSON_CONVERTER.serialize(data);
    }
    static promiseToObservable(promise) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(Promise.resolve(promise));
    }
    static objectToObservable(object) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(object);
    }
    static removeFromArray(items, model) {
        const index = items.indexOf(model);
        if (index > -1) {
            items.splice(index, 1);
        }
        return items;
    }
    static toPayload(action) {
        return action.payload;
    }
    static getDateTimeStringFromMoment(time) {
        if (time) {
            return time.format(this.DEFAULT_DATE_TIME_FORMAT);
        }
        return undefined;
    }
    static getMomentFromDateTimeString(timeString) {
        if (timeString) {
            return moment__WEBPACK_IMPORTED_MODULE_5__(timeString)
                .clone();
        }
        return undefined;
    }
    static getMomentFromDate(date) {
        if (date) {
            return moment__WEBPACK_IMPORTED_MODULE_5__(date)
                .clone();
        }
        return undefined;
    }
    static getTimeStringFromMoment(time) {
        if (time) {
            return time.clone()
                .format(this.DEFAULT_TIME_FORMAT);
        }
        return undefined;
    }
    static getTimeStringFromJSON(time) {
        if (time) {
            const timeFormat = '' + time.hour + ':' + time.minute + ':' + time.second;
            return this.getTimeStringFromMoment(moment__WEBPACK_IMPORTED_MODULE_5__(timeFormat, this.DEFAULT_TIME_FORMAT));
        }
        return undefined;
    }
    static getMomentFromTimeString(timeString) {
        if (timeString) {
            return moment__WEBPACK_IMPORTED_MODULE_5__(timeString, this.DEFAULT_TIME_FORMAT)
                .clone();
        }
        return undefined;
    }
    static getDateStringFromMoment(time, format) {
        if (time) {
            return moment__WEBPACK_IMPORTED_MODULE_5__(time)
                .clone()
                .format(format || this.DEFAULT_DATE_FORMAT);
        }
        return undefined;
    }
    static getMomentFromDateString(dateString, format) {
        if (dateString) {
            return moment__WEBPACK_IMPORTED_MODULE_5__(dateString, format || this.DEFAULT_DATE_FORMAT).endOf('day')
                .clone();
        }
        return undefined;
    }
    static isNullOrUndefined(object) {
        if (object === undefined || object == null) {
            return true;
        }
        else {
            return false;
        }
    }
    static getCurrentTimeAsMoment() {
        return moment__WEBPACK_IMPORTED_MODULE_5__()
            .clone();
    }
    static getDateFromMoment(dateMoment) {
        if (dateMoment) {
            return dateMoment.clone().toDate();
        }
        return undefined;
    }
    static getPreviousDateAsMoment(amount, units) {
        return moment__WEBPACK_IMPORTED_MODULE_5__()
            .clone()
            .subtract(amount, units);
    }
    static getPreviousDateAsString(amount, units) {
        return moment__WEBPACK_IMPORTED_MODULE_5__()
            .clone()
            .subtract(amount, units)
            .format(this.DEFAULT_DATE_FORMAT);
    }
    static getNextDateFromDateAsMoment(dateMoment, amount, units, format) {
        return dateMoment.clone()
            .add(amount, units);
    }
    static isBefore(moment1, moment2) {
        return moment1.isBefore(moment2);
    }
    static getTimestampFromMoment(timestamp) {
        if (timestamp) {
            return moment__WEBPACK_IMPORTED_MODULE_5__(timestamp)
                .clone()
                .valueOf();
        }
        return undefined;
    }
    static getMomentFromTimestamp(timestamp) {
        if (timestamp) {
            return moment__WEBPACK_IMPORTED_MODULE_5__["unix"](timestamp)
                .clone();
        }
        return undefined;
    }
    static parseJson(data) {
        return JSON.parse(data);
    }
    static parseFilePath(filePath) {
        // @ts-ignore
        const parseFilePath = __webpack_require__(/*! parse-filepath */ "./node_modules/parse-filepath/index.js");
        return parseFilePath(filePath);
    }
    static getFileContentType(file_path) {
        const mime = __webpack_require__(/*! mime-types */ "./node_modules/mime-types/index.js");
        return mime.contentType(file_path);
    }
};
CommonsService.DEFAULT_DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm:ss.S';
CommonsService.DEFAULT_TIME_FORMAT = 'HH:mm:ss';
CommonsService.DEFAULT_MOBILE_TIME_FORMAT = 'hh:mm A';
CommonsService.DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';
CommonsService._JSON_CONVERTER = new json2typescript__WEBPACK_IMPORTED_MODULE_2__["JsonConvert"](json2typescript__WEBPACK_IMPORTED_MODULE_2__["OperationMode"].ENABLE, json2typescript__WEBPACK_IMPORTED_MODULE_2__["ValueCheckingMode"].ALLOW_NULL, false);
CommonsService.logResponse = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => {
    console.log(value);
    return value;
});
CommonsService.convertToJson = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((value) => {
    return CommonsService_1.parseJson(value);
});
// noinspection TsLint
CommonsService.addMissingKeys = (ids, value) => Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
    ids.forEach(id => {
        response[id] = response[id] || value;
    });
    return response;
});
CommonsService.deserializeMap = classReference => Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => CommonsService_1.deserialize(value, classReference));
CommonsService = CommonsService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CommonsService);



/***/ }),

/***/ "./src/app/core/components/base.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/components/base.component.ts ***!
  \***************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");
/* harmony import */ var _core_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/notifications.service */ "./src/app/core/notifications.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






class BaseComponent {
    constructor(injector) {
        this.router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]);
        this.authService = injector.get(_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        this.notificationsService = injector.get(_core_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]);
        this.loggedProfile = this.authService.userProfile;
        this.navCtrl = injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]);
        this.events = injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"]);
        this.popoverCtrl = injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]);
    }
    ngOnInit() {
        this.initializeComponent();
    }
    makeServiceCallWithIdIfObjectNull(object, request, call, error) {
        if (_core_commons_service__WEBPACK_IMPORTED_MODULE_3__["CommonsService"].isNullOrUndefined(object)) {
            if (!_core_commons_service__WEBPACK_IMPORTED_MODULE_3__["CommonsService"].isNullOrUndefined(request)) {
                if (!_core_commons_service__WEBPACK_IMPORTED_MODULE_3__["CommonsService"].isNullOrUndefined(call)) {
                    call(request);
                }
            }
            else {
                if (!_core_commons_service__WEBPACK_IMPORTED_MODULE_3__["CommonsService"].isNullOrUndefined(error)) {
                    error(request);
                }
            }
        }
    }
}
BaseComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];


/***/ }),

/***/ "./src/app/core/components/core-form-validation-message/core-form-validation-message.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/core/components/core-form-validation-message/core-form-validation-message.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9jb3JlLWZvcm0tdmFsaWRhdGlvbi1tZXNzYWdlL2NvcmUtZm9ybS12YWxpZGF0aW9uLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/components/core-form-validation-message/core-form-validation-message.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/core/components/core-form-validation-message/core-form-validation-message.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CoreFormValidationMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreFormValidationMessageComponent", function() { return CoreFormValidationMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let CoreFormValidationMessageComponent = class CoreFormValidationMessageComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(injector) {
        super(injector);
    }
    initializeComponent() {
    }
};
CoreFormValidationMessageComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_3__["DynamicFormControlContainerComponent"])
], CoreFormValidationMessageComponent.prototype, "controlComponent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"])
], CoreFormValidationMessageComponent.prototype, "control", void 0);
CoreFormValidationMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'core-form-validation-message',
        template: __webpack_require__(/*! raw-loader!./core-form-validation-message.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/core-form-validation-message/core-form-validation-message.component.html"),
        styles: [__webpack_require__(/*! ./core-form-validation-message.component.scss */ "./src/app/core/components/core-form-validation-message/core-form-validation-message.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], CoreFormValidationMessageComponent);



/***/ }),

/***/ "./src/app/core/components/form.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/components/form.component.ts ***!
  \***************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm2015/core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");
/* harmony import */ var _core_core_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/core.pipe */ "./src/app/core/core.pipe.ts");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_5__);






class FormComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"] {
    constructor(injector) {
        super(injector);
        this.app_dynamic_form_control_model_array_to_dynamic_form_control_model_map_pipe = new _core_core_pipe__WEBPACK_IMPORTED_MODULE_4__["AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe"]();
        this.formService = injector.get(_ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_1__["DynamicFormService"]);
        this.changeDetectorDef = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]);
    }
    createFormModel() {
        this.formGroup = this.formService.createFormGroup(this.formModel);
        this.formModelMap =
            this.app_dynamic_form_control_model_array_to_dynamic_form_control_model_map_pipe.transform(this.formModel);
    }
    // noinspection TsLint
    ngOnInit() {
        this.formModel = this.getFormModel();
        this.createFormModel();
        super.ngOnInit();
    }
    // for form update
    ngAfterViewInit() {
        this.afterInitializeComponent();
        this.changeDetectorDef.detectChanges(); // run change detection after changes
    }
    registerModelForChanges(model) {
        model.valueChanges.subscribe(value => {
            this.changeDetectorDef.markForCheck();
        });
    }
    getInputModel(id) {
        return this.formService.findById(id, this.formModel);
    }
    getDateModel(id) {
        return this.formService.findById(id, this.formModel);
    }
    getTimeModel(id) {
        return this.formService.findById(id, this.formModel);
    }
    getRadioGroupInputModel(id) {
        return this.formService.findById(id, this.formModel);
    }
    getDateModelValue(id) {
        const value = this.getDateModel(id).value;
        return value ? _core_commons_service__WEBPACK_IMPORTED_MODULE_3__["CommonsService"].getMomentFromDateString(value) : undefined;
    }
    getInputModelValueAsString(id) {
        const value = this.getInputModel(id)
            .value;
        return value ? value.toString() : undefined;
    }
    getTimeModelValueAsString(id) {
        const value = this.getTimeModel(id)
            .value;
        return value ? _core_commons_service__WEBPACK_IMPORTED_MODULE_3__["CommonsService"].getTimeStringFromJSON(value) : undefined;
    }
    getTimeModelValueAsMoment(id) {
        const value = this.getTimeModel(id)
            .value;
        return value ? _core_commons_service__WEBPACK_IMPORTED_MODULE_3__["CommonsService"].getMomentFromTimeString(value.toString()) : undefined;
    }
    getInputModelValueAsNumber(id, no_symbols) {
        const value = this.getInputModelValueAsString(id);
        return validator__WEBPACK_IMPORTED_MODULE_5___default.a.isNumeric(value || '', { no_symbols: _core_commons_service__WEBPACK_IMPORTED_MODULE_3__["CommonsService"].isNullOrUndefined(no_symbols) ? true : no_symbols }) ?
            Number(value) :
            undefined;
    }
    getCheckboxInputModel(id) {
        return this.formService.findById(id, this.formModel);
    }
    getCheckboxGroupInputModel(id) {
        return this.formService.findById(id, this.formModel);
    }
    resetForm(value, options) {
        this.formGroup.reset(value, options);
    }
}
FormComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }
];


/***/ }),

/***/ "./src/app/core/components/modals/base-modal-content.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/components/modals/base-modal-content.component.ts ***!
  \************************************************************************/
/*! exports provided: BaseModalContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModalContentComponent", function() { return BaseModalContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





class BaseModalContentComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(injector) {
        super(injector);
        this.closeModalClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.effects_observable_array = [];
        this.modalController = injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]);
    }
    closeModal(modal_result) {
        if (this.effects_observable_array.length) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.effects_observable_array)
                .subscribe(values => {
                this.emitModalResultAndDismiss(modal_result);
            });
        }
        else {
            this.emitModalResultAndDismiss(modal_result);
        }
    }
    emitModalResultAndDismiss(modal_result) {
        this.closeModalClicked.emit(modal_result);
        this.modalController.dismiss(modal_result);
    }
}
BaseModalContentComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BaseModalContentComponent.prototype, "closeModalClicked", void 0);


/***/ }),

/***/ "./src/app/core/components/modals/base-modal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/components/modals/base-modal.component.ts ***!
  \****************************************************************/
/*! exports provided: BaseModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModalComponent", function() { return BaseModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





class BaseModalComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(injector) {
        super(injector);
        this.values = {};
        this.closeResult = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.modalController = injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]);
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                // close all open modals
                this.modalController.getTop().then(function (success) {
                    if (success) {
                        success.dismiss();
                    }
                }, function (error) {
                });
            }
        });
    }
    // async must or else throws error
    open(content, cssClass) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.modal = yield this.modalController.create({ component: content, componentProps: this.values, cssClass: cssClass });
            this.modal.onDidDismiss().then((detail) => {
                this.closeResult.emit(detail.data);
            });
            yield this.modal.present();
        });
    }
    closeModal(modal_result) {
        this.modal.dismiss(modal_result);
    }
    setModalData(key, value) {
        this.values[key] = value;
    }
}
BaseModalComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BaseModalComponent.prototype, "closeResult", void 0);


/***/ }),

/***/ "./src/app/core/components/modals/modal-footer/modal-footer.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/core/components/modals/modal-footer/modal-footer.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9tb2RhbHMvbW9kYWwtZm9vdGVyL21vZGFsLWZvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/components/modals/modal-footer/modal-footer.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/core/components/modals/modal-footer/modal-footer.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ModalFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFooterComponent", function() { return ModalFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let ModalFooterComponent = class ModalFooterComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(injector) {
        super(injector);
        this.actionClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
    }
    onActionClick() {
        this.actionClicked.emit('Footer action clicked');
    }
};
ModalFooterComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ModalFooterComponent.prototype, "buttonText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ModalFooterComponent.prototype, "buttonDisabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"])
], ModalFooterComponent.prototype, "actionPromise", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalFooterComponent.prototype, "actionClicked", void 0);
ModalFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'core-modal-footer',
        template: __webpack_require__(/*! raw-loader!./modal-footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/modals/modal-footer/modal-footer.component.html"),
        styles: [__webpack_require__(/*! ./modal-footer.component.scss */ "./src/app/core/components/modals/modal-footer/modal-footer.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], ModalFooterComponent);



/***/ }),

/***/ "./src/app/core/components/modals/modal-header/modal-header.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/core/components/modals/modal-header/modal-header.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9tb2RhbHMvbW9kYWwtaGVhZGVyL21vZGFsLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/components/modals/modal-header/modal-header.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/core/components/modals/modal-header/modal-header.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ModalHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalHeaderComponent", function() { return ModalHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");



let ModalHeaderComponent = class ModalHeaderComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(injector) {
        super(injector);
        this.closeClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
    }
    onCloseClicked(reason, status, data) {
        this.closeClicked.emit({ reason: reason, status: status || 'CLOSE', data: data });
    }
};
ModalHeaderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalHeaderComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalHeaderComponent.prototype, "closeClicked", void 0);
ModalHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'core-modal-header',
        template: __webpack_require__(/*! raw-loader!./modal-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/modals/modal-header/modal-header.component.html"),
        styles: [__webpack_require__(/*! ./modal-header.component.scss */ "./src/app/core/components/modals/modal-header/modal-header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], ModalHeaderComponent);



/***/ }),

/***/ "./src/app/core/components/page.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/components/page.component.ts ***!
  \***************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class PageComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(injector) {
        super(injector);
        this.activatedRoute = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]);
        this.routeParams = {};
    }
    getRouterParameterObservable(name, route) {
        route = route || this.activatedRoute;
        return route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])(name));
    }
    getRouterParameterFromParentObservable(name, parentLevel) {
        let currentParent = this.activatedRoute;
        for (let i = 0; i < parentLevel; i++) {
            currentParent = currentParent.parent;
            if (currentParent == null) {
                throw new Error('No more parents after the level ' + parentLevel);
            }
        }
        return this.getRouterParameterObservable(name, currentParent);
    }
    reloadPage() {
        this.redirectToDummyPageAndReturn();
    }
    redirectToDummyPageAndReturn() {
        // This is needed to maintain navigation history.
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        const url = this.router.url;
        this.router.navigateByUrl('/signedin/usertabnav/dummy', { skipLocationChange: true }).then(succes => {
            this.navCtrl.navigateForward(url);
        });
    }
    getQueryParameterObservable(name) {
        return this.activatedRoute.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])(name));
    }
    updateQueryParams(queryParams, queryParamsHandling = 'merge') {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: queryParams,
            queryParamsHandling: queryParamsHandling
        });
    }
    // noinspection TsLint
    ngOnInit() {
        this.routeParams = this.activatedRoute.snapshot.data;
        super.ngOnInit();
    }
    navigateToViaUrl(url) {
        this.router.navigateByUrl(url);
    }
    navigateAndSetRoot(url, option) {
        this.navCtrl.navigateRoot(url, option);
    }
}
PageComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }
];


/***/ }),

/***/ "./src/app/core/core.constants.ts":
/*!****************************************!*\
  !*** ./src/app/core/core.constants.ts ***!
  \****************************************/
/*! exports provided: STORAGE_CONFIGURATION, TOAST_CONFIGURATION, NOTIFICATION_THEMES, PROMISE_BUTTON_MODULE_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_CONFIGURATION", function() { return STORAGE_CONFIGURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOAST_CONFIGURATION", function() { return TOAST_CONFIGURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_THEMES", function() { return NOTIFICATION_THEMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROMISE_BUTTON_MODULE_OPTIONS", function() { return PROMISE_BUTTON_MODULE_OPTIONS; });
const STORAGE_CONFIGURATION = {
    name: '__mydb',
    driverOrder: [
        'indexeddb',
        'sqlite',
        'websql'
    ]
};
const TOAST_CONFIGURATION = {
    DURATION: 2000,
    POSITION: 'center',
};
const NOTIFICATION_THEMES = {
    SUCCESS: '#4bb31a',
    ERROR: '#ff652f',
    WARNING: '#ffdc52'
};
const PROMISE_BUTTON_MODULE_OPTIONS = {
    spinnerTpl: '<img src="assets/images/loading_spinner.gif" class="spinner w-1">',
    // disable buttons when promise is pending
    disableBtn: true,
    // the class used to indicate a pending promise
    btnLoadingClass: 'is-loading',
    // only disable and show is-loading class for clicked button,
    // even when they share the same promise
    handleCurrentBtnOnly: true,
};


/***/ }),

/***/ "./src/app/core/core.models.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.models.ts ***!
  \*************************************/
/*! exports provided: Core, Users, Files, Chats, Events, Categories, UserInterests, UserPayments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Core", function() { return Core; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Files", function() { return Files; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chats", function() { return Chats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categories", function() { return Categories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterests", function() { return UserInterests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPayments", function() { return UserPayments; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_models_converters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/models.converters */ "./src/app/core/models.converters.ts");



var Core;
(function (Core) {
    var DateTimeConverter = _core_models_converters__WEBPACK_IMPORTED_MODULE_2__["ModelsConverters"].DateTimeConverter;
    let HttpError = class HttpError {
        constructor() {
            this.error_status = undefined;
            this.title = undefined;
            this.message = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('statusCode', Number, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], HttpError.prototype, "error_status", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('code', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HttpError.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('description', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HttpError.prototype, "message", void 0);
    HttpError = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
    ], HttpError);
    Core.HttpError = HttpError;
    let PaginatedRequest = class PaginatedRequest {
        constructor() {
            this.first = undefined;
            this.count = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('first', Number, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PaginatedRequest.prototype, "first", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('count', Number, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PaginatedRequest.prototype, "count", void 0);
    PaginatedRequest = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
    ], PaginatedRequest);
    Core.PaginatedRequest = PaginatedRequest;
    let SortedPaginatedRequest = class SortedPaginatedRequest extends PaginatedRequest {
        constructor() {
            super(...arguments);
            this.column_name = undefined;
            this.column_order = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('column_name', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SortedPaginatedRequest.prototype, "column_name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('column_order', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SortedPaginatedRequest.prototype, "column_order", void 0);
    SortedPaginatedRequest = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
    ], SortedPaginatedRequest);
    Core.SortedPaginatedRequest = SortedPaginatedRequest;
    let Entity = class Entity {
        constructor() {
            this.created_at = undefined;
            this.updated_at = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('createdAt', DateTimeConverter, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Entity.prototype, "created_at", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('updatedAt', DateTimeConverter, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Entity.prototype, "updated_at", void 0);
    Entity = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
    ], Entity);
    Core.Entity = Entity;
    let CoreEntity = class CoreEntity extends Entity {
        constructor() {
            super(...arguments);
            this._id = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('_id', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CoreEntity.prototype, "_id", void 0);
    CoreEntity = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
    ], CoreEntity);
    Core.CoreEntity = CoreEntity;
})(Core || (Core = {}));
var Users;
(function (Users) {
    var CoreEntity = Core.CoreEntity;
    var StringOrNumberConverter = _core_models_converters__WEBPACK_IMPORTED_MODULE_2__["ModelsConverters"].StringOrNumberConverter;
    let UserAccount = class UserAccount extends CoreEntity {
        constructor() {
            super(...arguments);
            this.quickbloxId = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('quickbloxId', Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], UserAccount.prototype, "quickbloxId", void 0);
    UserAccount = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
    ], UserAccount);
    Users.UserAccount = UserAccount;
    let UserProfileValue = class UserProfileValue {
        constructor() {
            this.entryType = undefined;
            this.privacy = undefined;
            this.value = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('entryType', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserProfileValue.prototype, "entryType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('privacy', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserProfileValue.prototype, "privacy", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('value', StringOrNumberConverter, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserProfileValue.prototype, "value", void 0);
    UserProfileValue = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
    ], UserProfileValue);
    Users.UserProfileValue = UserProfileValue;
    let LocationValue = class LocationValue {
        constructor() {
            this.latitude = undefined;
            this.longitude = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('latitude', Number, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], LocationValue.prototype, "latitude", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('longitude', Number, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], LocationValue.prototype, "longitude", void 0);
    LocationValue = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
    ], LocationValue);
    Users.LocationValue = LocationValue;
    let ArrayToLocationValueConverter = class ArrayToLocationValueConverter {
        serialize(time) {
            return [time.longitude,
                time.latitude];
        }
        deserialize(time) {
            const value = new LocationValue();
            value.longitude = time[0];
            value.latitude = time[1];
            return value;
        }
    };
    ArrayToLocationValueConverter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonConverter"]
    ], ArrayToLocationValueConverter);
    Users.ArrayToLocationValueConverter = ArrayToLocationValueConverter;
    let UserProfile = class UserProfile extends CoreEntity {
        constructor() {
            super(...arguments);
            this.profile = undefined;
            this.location = undefined;
            this.userAccount = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('profileEntries', [UserProfileValue], true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], UserProfile.prototype, "profile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('location', ArrayToLocationValueConverter, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", LocationValue)
    ], UserProfile.prototype, "location", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('userAccount', UserAccount),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", UserAccount)
    ], UserProfile.prototype, "userAccount", void 0);
    UserProfile = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
    ], UserProfile);
    Users.UserProfile = UserProfile;
})(Users || (Users = {}));
var Files;
(function (Files) {
    var CoreEntity = Core.CoreEntity;
    let UploadedFile = class UploadedFile extends CoreEntity {
        constructor() {
            super(...arguments);
            this.fileUploadUrl = undefined;
            this.entityType = undefined;
            this.entityId = undefined;
            this.fileUrl = undefined;
            this.fileLocation = undefined;
            this.status = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('fileUploadUrl', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UploadedFile.prototype, "fileUploadUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('fileUploadUrl', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UploadedFile.prototype, "entityType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('entityId', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UploadedFile.prototype, "entityId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('fileUrl', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UploadedFile.prototype, "fileUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('fileLocation', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UploadedFile.prototype, "fileLocation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('status', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UploadedFile.prototype, "status", void 0);
    UploadedFile = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
    ], UploadedFile);
    Files.UploadedFile = UploadedFile;
})(Files || (Files = {}));
var Chats;
(function (Chats) {
    var CoreEntity = Core.CoreEntity;
    var UserAccount = Users.UserAccount;
    class UserChat extends CoreEntity {
        constructor() {
            super(...arguments);
            this.connectyCubeId = undefined;
            this.quickbloxId = undefined;
            this.userAccounts = undefined;
        }
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('connectyCubeId', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserChat.prototype, "connectyCubeId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('quickbloxId', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserChat.prototype, "quickbloxId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('userAccounts', [UserAccount], true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], UserChat.prototype, "userAccounts", void 0);
    Chats.UserChat = UserChat;
})(Chats || (Chats = {}));
var Events;
(function (Events) {
    var CoreEntity = Core.CoreEntity;
    var DateTimeConverter = _core_models_converters__WEBPACK_IMPORTED_MODULE_2__["ModelsConverters"].DateTimeConverter;
    var LocationValue = Users.LocationValue;
    var ArrayToLocationValueConverter = Users.ArrayToLocationValueConverter;
    var UserAccount = Users.UserAccount;
    let Event = class Event extends CoreEntity {
        constructor() {
            super(...arguments);
            this.eventName = undefined;
            this.eventDescription = undefined;
            this.eventStartTime = undefined;
            this.eventEndTime = undefined;
            this.eventType = undefined;
            this.location = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('eventName', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Event.prototype, "eventName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('eventDescription', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Event.prototype, "eventDescription", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('_eventStartTime', DateTimeConverter, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Event.prototype, "eventStartTime", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('_eventEndTime', DateTimeConverter, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Event.prototype, "eventEndTime", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('eventType', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Event.prototype, "eventType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('location', ArrayToLocationValueConverter, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", LocationValue)
    ], Event.prototype, "location", void 0);
    Event = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
    ], Event);
    Events.Event = Event;
    class EventInvite extends CoreEntity {
        constructor() {
            super(...arguments);
            this.inviteeAccount = undefined;
            this.invitedByAccount = undefined;
            this.status = undefined;
            this.message = undefined;
            this.event = undefined;
        }
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('inviteeAccount', UserAccount),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", UserAccount)
    ], EventInvite.prototype, "inviteeAccount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('invitedByAccount', UserAccount),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", UserAccount)
    ], EventInvite.prototype, "invitedByAccount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('status', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EventInvite.prototype, "status", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('message', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EventInvite.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('event', Event, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Event)
    ], EventInvite.prototype, "event", void 0);
    Events.EventInvite = EventInvite;
})(Events || (Events = {}));
var Categories;
(function (Categories) {
    var CoreEntity = Core.CoreEntity;
    var Event = Events.Event;
    let Category = class Category extends CoreEntity {
        constructor() {
            super(...arguments);
            this.name = undefined;
            this.description = undefined;
            this.categoryType = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('name', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Category.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('description', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Category.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('categoryType', [String]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], Category.prototype, "categoryType", void 0);
    Category = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
    ], Category);
    Categories.Category = Category;
    let CategoryEntity = class CategoryEntity extends CoreEntity {
        constructor() {
            super(...arguments);
            this.category = undefined;
            this.eventBrite = undefined;
            this.entityType = undefined;
            this.event = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('category', Category, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Category)
    ], CategoryEntity.prototype, "category", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('eventBrite', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CategoryEntity.prototype, "eventBrite", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('entityType', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CategoryEntity.prototype, "entityType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('event', Event, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Event)
    ], CategoryEntity.prototype, "event", void 0);
    CategoryEntity = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
    ], CategoryEntity);
    Categories.CategoryEntity = CategoryEntity;
})(Categories || (Categories = {}));
var UserInterests;
(function (UserInterests) {
    var CoreEntity = Core.CoreEntity;
    var UserAccount = Users.UserAccount;
    var Event = Events.Event;
    let UserInterest = class UserInterest extends CoreEntity {
        constructor() {
            super(...arguments);
            this.eventBriteId = undefined;
            this.otherAccount = undefined;
            this.entityType = undefined;
            this.userAccount = undefined;
            this.interaction = undefined;
            this.event = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('eventBriteId', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserInterest.prototype, "eventBriteId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('otherAccount', UserAccount, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", UserAccount)
    ], UserInterest.prototype, "otherAccount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('entityType', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserInterest.prototype, "entityType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('userAccount', UserAccount, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", UserAccount)
    ], UserInterest.prototype, "userAccount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('interaction', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserInterest.prototype, "interaction", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('event', Event, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Event)
    ], UserInterest.prototype, "event", void 0);
    UserInterest = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
    ], UserInterest);
    UserInterests.UserInterest = UserInterest;
})(UserInterests || (UserInterests = {}));
var UserPayments;
(function (UserPayments) {
    var CoreEntity = Core.CoreEntity;
    var UserAccount = Users.UserAccount;
    let UserPayment = class UserPayment extends CoreEntity {
        constructor() {
            super(...arguments);
            this.userAccount = undefined;
            this.stripeResponse = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('userAccount', UserAccount),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", UserAccount)
    ], UserPayment.prototype, "userAccount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('stripeResponse', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserPayment.prototype, "stripeResponse", void 0);
    UserPayment = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
    ], UserPayment);
    UserPayments.UserPayment = UserPayment;
})(UserPayments || (UserPayments = {}));


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-moment */ "./node_modules/ngx-moment/fesm2015/ngx-moment.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_dynamic_forms_ui_ionic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-dynamic-forms/ui-ionic */ "./node_modules/@ng-dynamic-forms/ui-ionic/fesm2015/ui-ionic.js");
/* harmony import */ var ng_busy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-busy */ "./node_modules/ng-busy/fesm2015/ng-busy.js");
/* harmony import */ var aws_amplify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! aws-amplify-angular */ "./node_modules/aws-amplify-angular/dist/index.js");
/* harmony import */ var _core_http_http_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/http/http.module */ "./src/app/core/http/http.module.ts");
/* harmony import */ var _ionic_native_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/toast */ "./node_modules/@ionic-native/toast/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_camera__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/camera */ "./node_modules/@ionic-native/camera/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/file */ "./node_modules/@ionic-native/file/index.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_photo_viewer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/photo-viewer */ "./node_modules/@ionic-native/photo-viewer/index.js");
/* harmony import */ var _ionic_native_file_transfer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/file-transfer */ "./node_modules/@ionic-native/file-transfer/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _core_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./core.pipe */ "./src/app/core/core.pipe.ts");
/* harmony import */ var _core_form_validations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @core/form.validations */ "./src/app/core/form.validations.ts");
/* harmony import */ var _core_components_core_form_validation_message_core_form_validation_message_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @core/components/core-form-validation-message/core-form-validation-message.component */ "./src/app/core/components/core-form-validation-message/core-form-validation-message.component.ts");
/* harmony import */ var angular2_promise_buttons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular2-promise-buttons */ "./node_modules/angular2-promise-buttons/dist/index.js");
/* harmony import */ var angular2_promise_buttons__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(angular2_promise_buttons__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faBirthdayCake__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faBirthdayCake */ "./node_modules/@fortawesome/free-solid-svg-icons/faBirthdayCake.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faBirthdayCake__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faBirthdayCake__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faVenusDouble__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faVenusDouble */ "./node_modules/@fortawesome/free-solid-svg-icons/faVenusDouble.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faVenusDouble__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faVenusDouble__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faGlassMartini__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faGlassMartini */ "./node_modules/@fortawesome/free-solid-svg-icons/faGlassMartini.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faGlassMartini__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faGlassMartini__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faArrowsAltH__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faArrowsAltH */ "./node_modules/@fortawesome/free-solid-svg-icons/faArrowsAltH.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faArrowsAltH__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faArrowsAltH__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSmoking__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSmoking */ "./node_modules/@fortawesome/free-solid-svg-icons/faSmoking.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSmoking__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faSmoking__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @core/auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faHome__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faHome */ "./node_modules/@fortawesome/free-solid-svg-icons/faHome.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faHome__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faHome__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faComments__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faComments */ "./node_modules/@fortawesome/free-solid-svg-icons/faComments.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faComments__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faComments__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faUser__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faUser */ "./node_modules/@fortawesome/free-solid-svg-icons/faUser.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faUser__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faUser__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faMapMarker__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faMapMarker */ "./node_modules/@fortawesome/free-solid-svg-icons/faMapMarker.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faMapMarker__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faMapMarker__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faMapMarkerAlt__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faMapMarkerAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faMapMarkerAlt.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faMapMarkerAlt__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faMapMarkerAlt__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSuitcase__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSuitcase */ "./node_modules/@fortawesome/free-solid-svg-icons/faSuitcase.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSuitcase__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faSuitcase__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faQuoteLeft__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faQuoteLeft */ "./node_modules/@fortawesome/free-solid-svg-icons/faQuoteLeft.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faQuoteLeft__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faQuoteLeft__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSearch__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSearch */ "./node_modules/@fortawesome/free-solid-svg-icons/faSearch.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSearch__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faSearch__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCog__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCog */ "./node_modules/@fortawesome/free-solid-svg-icons/faCog.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCog__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCog__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSlidersH__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSlidersH */ "./node_modules/@fortawesome/free-solid-svg-icons/faSlidersH.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSlidersH__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faSlidersH__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faDharmachakra__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faDharmachakra */ "./node_modules/@fortawesome/free-solid-svg-icons/faDharmachakra.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faDharmachakra__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faDharmachakra__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faArrowRight__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faArrowRight */ "./node_modules/@fortawesome/free-solid-svg-icons/faArrowRight.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faArrowRight__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faArrowRight__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faChevronRight__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faChevronRight */ "./node_modules/@fortawesome/free-solid-svg-icons/faChevronRight.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faChevronRight__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faChevronRight__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faShareAlt__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faShareAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faShareAlt.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faShareAlt__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faShareAlt__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCalendar__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCalendar */ "./node_modules/@fortawesome/free-solid-svg-icons/faCalendar.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCalendar__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCalendar__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faClock__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faClock */ "./node_modules/@fortawesome/free-solid-svg-icons/faClock.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faClock__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faClock__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faUsers__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faUsers */ "./node_modules/@fortawesome/free-solid-svg-icons/faUsers.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faUsers__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faUsers__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faThumbsUp__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faThumbsUp */ "./node_modules/@fortawesome/free-solid-svg-icons/faThumbsUp.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faThumbsUp__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faThumbsUp__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faPaperPlane__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faPaperPlane */ "./node_modules/@fortawesome/free-solid-svg-icons/faPaperPlane.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faPaperPlane__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faPaperPlane__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faChevronLeft__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faChevronLeft */ "./node_modules/@fortawesome/free-solid-svg-icons/faChevronLeft.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faChevronLeft__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faChevronLeft__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var _core_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @core/components/modals/modal-footer/modal-footer.component */ "./src/app/core/components/modals/modal-footer/modal-footer.component.ts");
/* harmony import */ var _core_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @core/components/modals/modal-header/modal-header.component */ "./src/app/core/components/modals/modal-header/modal-header.component.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faPlus__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faPlus */ "./node_modules/@fortawesome/free-solid-svg-icons/faPlus.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faPlus__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faPlus__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faShieldAlt__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faShieldAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faShieldAlt.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faShieldAlt__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faShieldAlt__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faGavel__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faGavel */ "./node_modules/@fortawesome/free-solid-svg-icons/faGavel.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faGavel__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faGavel__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCookie__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCookie */ "./node_modules/@fortawesome/free-solid-svg-icons/faCookie.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCookie__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCookie__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faIdBadge__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faIdBadge */ "./node_modules/@fortawesome/free-solid-svg-icons/faIdBadge.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faIdBadge__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faIdBadge__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faPencilAlt__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faPencilAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faPencilAlt.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faPencilAlt__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faPencilAlt__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var _directives_core_confirm_directive__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./directives/core-confirm.directive */ "./src/app/core/directives/core-confirm.directive.ts");
/* harmony import */ var _directives_core_click_stop_propogation_directive__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./directives/core-click-stop-propogation.directive */ "./src/app/core/directives/core-click-stop-propogation.directive.ts");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/fesm2015/ngx-stripe.js");

































































let CoreModule = class CoreModule {
    constructor(library) {
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_32__["fas"]);
        library.addIcons(_fortawesome_free_solid_svg_icons_faBirthdayCake__WEBPACK_IMPORTED_MODULE_26__["faBirthdayCake"], _fortawesome_free_solid_svg_icons_faVenusDouble__WEBPACK_IMPORTED_MODULE_28__["faVenusDouble"], _fortawesome_free_solid_svg_icons_faGlassMartini__WEBPACK_IMPORTED_MODULE_29__["faGlassMartini"], _fortawesome_free_solid_svg_icons_faArrowsAltH__WEBPACK_IMPORTED_MODULE_30__["faArrowsAltH"], _fortawesome_free_solid_svg_icons_faSmoking__WEBPACK_IMPORTED_MODULE_31__["faSmoking"], _fortawesome_free_solid_svg_icons_faHome__WEBPACK_IMPORTED_MODULE_34__["faHome"], _fortawesome_free_solid_svg_icons_faComments__WEBPACK_IMPORTED_MODULE_35__["faComments"], _fortawesome_free_solid_svg_icons_faUser__WEBPACK_IMPORTED_MODULE_36__["faUser"], _fortawesome_free_solid_svg_icons_faMapMarker__WEBPACK_IMPORTED_MODULE_37__["faMapMarker"], _fortawesome_free_solid_svg_icons_faArrowRight__WEBPACK_IMPORTED_MODULE_45__["faArrowRight"], _fortawesome_free_solid_svg_icons_faChevronRight__WEBPACK_IMPORTED_MODULE_46__["faChevronRight"], _fortawesome_free_solid_svg_icons_faMapMarkerAlt__WEBPACK_IMPORTED_MODULE_38__["faMapMarkerAlt"], _fortawesome_free_solid_svg_icons_faSuitcase__WEBPACK_IMPORTED_MODULE_39__["faSuitcase"], _fortawesome_free_solid_svg_icons_faQuoteLeft__WEBPACK_IMPORTED_MODULE_40__["faQuoteLeft"], _fortawesome_free_solid_svg_icons_faSearch__WEBPACK_IMPORTED_MODULE_41__["faSearch"], _fortawesome_free_solid_svg_icons_faCog__WEBPACK_IMPORTED_MODULE_42__["faCog"], _fortawesome_free_solid_svg_icons_faSlidersH__WEBPACK_IMPORTED_MODULE_43__["faSlidersH"], _fortawesome_free_solid_svg_icons_faDharmachakra__WEBPACK_IMPORTED_MODULE_44__["faDharmachakra"], _fortawesome_free_solid_svg_icons_faShareAlt__WEBPACK_IMPORTED_MODULE_47__["faShareAlt"], _fortawesome_free_solid_svg_icons_faCalendar__WEBPACK_IMPORTED_MODULE_48__["faCalendar"], _fortawesome_free_solid_svg_icons_faClock__WEBPACK_IMPORTED_MODULE_49__["faClock"], _fortawesome_free_solid_svg_icons_faUsers__WEBPACK_IMPORTED_MODULE_50__["faUsers"], _fortawesome_free_solid_svg_icons_faThumbsUp__WEBPACK_IMPORTED_MODULE_51__["faThumbsUp"], _fortawesome_free_solid_svg_icons_faPaperPlane__WEBPACK_IMPORTED_MODULE_52__["faPaperPlane"], _fortawesome_free_solid_svg_icons_faChevronLeft__WEBPACK_IMPORTED_MODULE_53__["faChevronLeft"], _fortawesome_free_solid_svg_icons_faPlus__WEBPACK_IMPORTED_MODULE_56__["faPlus"], _fortawesome_free_solid_svg_icons_faShieldAlt__WEBPACK_IMPORTED_MODULE_57__["faShieldAlt"], _fortawesome_free_solid_svg_icons_faGavel__WEBPACK_IMPORTED_MODULE_58__["faGavel"], _fortawesome_free_solid_svg_icons_faCookie__WEBPACK_IMPORTED_MODULE_59__["faCookie"], _fortawesome_free_solid_svg_icons_faIdBadge__WEBPACK_IMPORTED_MODULE_60__["faIdBadge"], _fortawesome_free_solid_svg_icons_faPencilAlt__WEBPACK_IMPORTED_MODULE_61__["faPencilAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_32__["faHeart"]);
    }
};
CoreModule.ctorParameters = () => [
    { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_27__["FaIconLibrary"] }
];
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppDefaultDateFormatPipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppShortDateFormatPipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppDefaultTimeFormatPipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppDefaultDateTimeFormatToMomentPipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppMomentToDefaultDateTimeFormatPipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppNonZeroDayPipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppSortDateTimeStringKeyValuePipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppSortNumberKeyValuePipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppStringToNumberPipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppWeekNumberToWeekStartDayNumberPipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["NumberToMomentDurationPipe"],
            _core_components_core_form_validation_message_core_form_validation_message_component__WEBPACK_IMPORTED_MODULE_23__["CoreFormValidationMessageComponent"],
            _core_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_54__["ModalFooterComponent"],
            _core_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_55__["ModalHeaderComponent"],
            _directives_core_confirm_directive__WEBPACK_IMPORTED_MODULE_62__["CoreConfirmDirective"],
            _directives_core_click_stop_propogation_directive__WEBPACK_IMPORTED_MODULE_63__["CoreClickStopPropogationDirective"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppObjectArrayToPropertyArrayPipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppArrayRandomItemPipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppConvertToArrayPipe"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _core_http_http_module__WEBPACK_IMPORTED_MODULE_10__["HttpModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            ngx_moment__WEBPACK_IMPORTED_MODULE_4__["MomentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _ng_dynamic_forms_ui_ionic__WEBPACK_IMPORTED_MODULE_7__["DynamicFormsIonicUIModule"],
            ng_busy__WEBPACK_IMPORTED_MODULE_8__["NgBusyModule"],
            aws_amplify_angular__WEBPACK_IMPORTED_MODULE_9__["AmplifyAngularModule"],
            angular2_promise_buttons__WEBPACK_IMPORTED_MODULE_24__["Angular2PromiseButtonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_27__["FontAwesomeModule"],
            ngx_stripe__WEBPACK_IMPORTED_MODULE_64__["NgxStripeModule"]
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _core_http_http_module__WEBPACK_IMPORTED_MODULE_10__["HttpModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            ngx_moment__WEBPACK_IMPORTED_MODULE_4__["MomentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _ng_dynamic_forms_ui_ionic__WEBPACK_IMPORTED_MODULE_7__["DynamicFormsIonicUIModule"],
            ng_busy__WEBPACK_IMPORTED_MODULE_8__["NgBusyModule"],
            aws_amplify_angular__WEBPACK_IMPORTED_MODULE_9__["AmplifyAngularModule"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppDefaultDateFormatPipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppShortDateFormatPipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppDefaultTimeFormatPipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppDefaultDateTimeFormatToMomentPipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppMomentToDefaultDateTimeFormatPipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppNonZeroDayPipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppSortDateTimeStringKeyValuePipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppSortNumberKeyValuePipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppStringToNumberPipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppWeekNumberToWeekStartDayNumberPipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["NumberToMomentDurationPipe"],
            _core_components_core_form_validation_message_core_form_validation_message_component__WEBPACK_IMPORTED_MODULE_23__["CoreFormValidationMessageComponent"],
            angular2_promise_buttons__WEBPACK_IMPORTED_MODULE_24__["Angular2PromiseButtonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_27__["FontAwesomeModule"],
            _core_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_54__["ModalFooterComponent"],
            _core_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_55__["ModalHeaderComponent"],
            _directives_core_confirm_directive__WEBPACK_IMPORTED_MODULE_62__["CoreConfirmDirective"],
            _directives_core_click_stop_propogation_directive__WEBPACK_IMPORTED_MODULE_63__["CoreClickStopPropogationDirective"],
            ngx_stripe__WEBPACK_IMPORTED_MODULE_64__["NgxStripeModule"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppObjectArrayToPropertyArrayPipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppArrayRandomItemPipe"],
            _core_pipe__WEBPACK_IMPORTED_MODULE_21__["AppConvertToArrayPipe"]
        ],
        providers: [
            aws_amplify_angular__WEBPACK_IMPORTED_MODULE_9__["AmplifyService"],
            _core_auth_guard__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"],
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
                useValue: _core_form_validations__WEBPACK_IMPORTED_MODULE_22__["FormValidations"].emailValidator,
                multi: true
            },
            {
                provide: _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_25__["DYNAMIC_VALIDATORS"],
                useValue: new Map([
                    [
                        'emailValidator',
                        _core_form_validations__WEBPACK_IMPORTED_MODULE_22__["FormValidations"].emailValidator
                    ],
                    [
                        'mobileNumberValidator',
                        _core_form_validations__WEBPACK_IMPORTED_MODULE_22__["FormValidations"].mobileNumberValidator
                    ],
                    [
                        'appPasswordValidator',
                        _core_form_validations__WEBPACK_IMPORTED_MODULE_22__["FormValidations"].appPasswordValidator
                    ]
                ])
            },
            { provide: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_12__["Toast"], useValue: _ionic_native_toast__WEBPACK_IMPORTED_MODULE_11__["Toast"] },
            { provide: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__["Camera"], useValue: _ionic_native_camera__WEBPACK_IMPORTED_MODULE_14__["Camera"] },
            { provide: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__["File"], useValue: _ionic_native_file__WEBPACK_IMPORTED_MODULE_16__["File"] },
            { provide: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_17__["PhotoViewer"], useValue: _ionic_native_photo_viewer__WEBPACK_IMPORTED_MODULE_18__["PhotoViewer"] },
            { provide: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_20__["FileTransfer"], useValue: _ionic_native_file_transfer__WEBPACK_IMPORTED_MODULE_19__["FileTransfer"] },
        ]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_27__["FaIconLibrary"]])
], CoreModule);



/***/ }),

/***/ "./src/app/core/core.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/core/core.pipe.ts ***!
  \***********************************/
/*! exports provided: AppDefaultDateFormatPipe, AppShortDateFormatPipe, AppMomentToDefaultDateTimeFormatPipe, AppDefaultDateTimeFormatToMomentPipe, AppDefaultTimeFormatPipe, AppWeekNumberToWeekStartDayNumberPipe, AppStringToNumberPipe, AppNonZeroDayPipe, AppSortNumberKeyValuePipe, AppSortDateTimeStringKeyValuePipe, AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe, NumberToMomentDurationPipe, AppObjectArrayToPropertyArrayPipe, AppArrayRandomItemPipe, AppConvertToArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDefaultDateFormatPipe", function() { return AppDefaultDateFormatPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShortDateFormatPipe", function() { return AppShortDateFormatPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMomentToDefaultDateTimeFormatPipe", function() { return AppMomentToDefaultDateTimeFormatPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDefaultDateTimeFormatToMomentPipe", function() { return AppDefaultDateTimeFormatToMomentPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDefaultTimeFormatPipe", function() { return AppDefaultTimeFormatPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppWeekNumberToWeekStartDayNumberPipe", function() { return AppWeekNumberToWeekStartDayNumberPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStringToNumberPipe", function() { return AppStringToNumberPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNonZeroDayPipe", function() { return AppNonZeroDayPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSortNumberKeyValuePipe", function() { return AppSortNumberKeyValuePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSortDateTimeStringKeyValuePipe", function() { return AppSortDateTimeStringKeyValuePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe", function() { return AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberToMomentDurationPipe", function() { return NumberToMomentDurationPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppObjectArrayToPropertyArrayPipe", function() { return AppObjectArrayToPropertyArrayPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppArrayRandomItemPipe", function() { return AppArrayRandomItemPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConvertToArrayPipe", function() { return AppConvertToArrayPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-moment */ "./node_modules/ngx-moment/fesm2015/ngx-moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");





let AppDefaultDateFormatPipe = class AppDefaultDateFormatPipe {
    constructor() {
        this.dateFormatPipe = new ngx_moment__WEBPACK_IMPORTED_MODULE_2__["DateFormatPipe"]();
    }
    transform(value, format = 'DD MMM, YYYY', args) {
        return this.dateFormatPipe.transform(value, format);
    }
};
AppDefaultDateFormatPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'appDateFormat'
    })
], AppDefaultDateFormatPipe);

let AppShortDateFormatPipe = class AppShortDateFormatPipe {
    transform(value, format = 'DD-MM-YY', args) {
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].getDateStringFromMoment(value, format);
    }
};
AppShortDateFormatPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'appShortDateFormat'
    })
], AppShortDateFormatPipe);

let AppMomentToDefaultDateTimeFormatPipe = class AppMomentToDefaultDateTimeFormatPipe {
    transform(value, format = 'YYYY-MM-DDTHH:mm:ss', args) {
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].getDateTimeStringFromMoment(value);
    }
};
AppMomentToDefaultDateTimeFormatPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'appMomentToDefaultDateTimeFormat'
    })
], AppMomentToDefaultDateTimeFormatPipe);

let AppDefaultDateTimeFormatToMomentPipe = class AppDefaultDateTimeFormatToMomentPipe {
    transform(value, args) {
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].getMomentFromDateTimeString(value);
    }
};
AppDefaultDateTimeFormatToMomentPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'appDefaultDateTimeFormatToMoment'
    })
], AppDefaultDateTimeFormatToMomentPipe);

let AppDefaultTimeFormatPipe = class AppDefaultTimeFormatPipe {
    constructor() {
        this.dateFormatPipe = new ngx_moment__WEBPACK_IMPORTED_MODULE_2__["DateFormatPipe"]();
    }
    transform(value, format = 'hh:mm a', args) {
        return this.dateFormatPipe.transform(value, format);
    }
};
AppDefaultTimeFormatPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'appTimeFormat'
    })
], AppDefaultTimeFormatPipe);

let AppWeekNumberToWeekStartDayNumberPipe = class AppWeekNumberToWeekStartDayNumberPipe {
    transform(value, args) {
        return (value - 1) * 7;
    }
};
AppWeekNumberToWeekStartDayNumberPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'appWeekNumberToWeekStartDayNumber'
    })
], AppWeekNumberToWeekStartDayNumberPipe);

let AppStringToNumberPipe = class AppStringToNumberPipe {
    transform(value, args) {
        return Number(value);
    }
};
AppStringToNumberPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'appStringToNumber'
    })
], AppStringToNumberPipe);

let AppNonZeroDayPipe = class AppNonZeroDayPipe {
    transform(value, args) {
        return value + 1;
    }
};
AppNonZeroDayPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'appNonZeroDay'
    })
], AppNonZeroDayPipe);

let AppSortNumberKeyValuePipe = class AppSortNumberKeyValuePipe {
    transform(value, args) {
        if (!_core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].isNullOrUndefined(value)) {
            value = value.sort((a, b) => {
                return Number(a.key) - Number(b.key);
            });
        }
        return value;
    }
};
AppSortNumberKeyValuePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'appSortNumberKeyValue'
    })
], AppSortNumberKeyValuePipe);

let AppSortDateTimeStringKeyValuePipe = class AppSortDateTimeStringKeyValuePipe {
    transform(value, args) {
        if (!_core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].isNullOrUndefined(value)) {
            value = value.sort((a, b) => {
                return _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].getMomentFromDateTimeString(a.key)
                    .diff(_core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].getMomentFromDateTimeString(b.key));
            });
        }
        return value;
    }
};
AppSortDateTimeStringKeyValuePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'appSortDateTimeStringKeyValue'
    })
], AppSortDateTimeStringKeyValuePipe);

let AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe = class AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe {
    transform(value, args) {
        const map = {};
        if (!_core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].isNullOrUndefined(value)) {
            value.forEach(form_model => {
                map[form_model.id] = form_model;
            });
        }
        return map;
    }
};
AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'appDynamicFormControlModelArrayToDynamicFormControlModelMap'
    })
], AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe);

let NumberToMomentDurationPipe = class NumberToMomentDurationPipe {
    transform(value, number_type = 'seconds', durationFormat = 'hours', ...args) {
        const duration = moment__WEBPACK_IMPORTED_MODULE_3__["duration"](value, number_type);
        return duration.as(durationFormat);
    }
};
NumberToMomentDurationPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'numberToMomentDuration'
    })
], NumberToMomentDurationPipe);

let AppObjectArrayToPropertyArrayPipe = class AppObjectArrayToPropertyArrayPipe {
    transform(value, property, key, ...args) {
        return value.map(object => object[property]);
    }
};
AppObjectArrayToPropertyArrayPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'appObjectArrayToPropertyArray'
    })
], AppObjectArrayToPropertyArrayPipe);

let AppArrayRandomItemPipe = class AppArrayRandomItemPipe {
    transform(value, ...args) {
        return value[Math.floor(Math.random() * value.length)];
    }
};
AppArrayRandomItemPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'appArrayRandomItem'
    })
], AppArrayRandomItemPipe);

let AppConvertToArrayPipe = class AppConvertToArrayPipe {
    transform(value, ...args) {
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].convertToArray(value);
    }
};
AppConvertToArrayPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'appConvertToArray'
    })
], AppConvertToArrayPipe);



/***/ }),

/***/ "./src/app/core/directives/core-click-stop-propogation.directive.ts":
/*!**************************************************************************!*\
  !*** ./src/app/core/directives/core-click-stop-propogation.directive.ts ***!
  \**************************************************************************/
/*! exports provided: CoreClickStopPropogationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreClickStopPropogationDirective", function() { return CoreClickStopPropogationDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CoreClickStopPropogationDirective = class CoreClickStopPropogationDirective {
    onClick(event) {
        event.stopPropagation();
        event.preventDefault();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], CoreClickStopPropogationDirective.prototype, "onClick", null);
CoreClickStopPropogationDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[coreClickStopPropogation]'
    })
], CoreClickStopPropogationDirective);



/***/ }),

/***/ "./src/app/core/directives/core-confirm.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/directives/core-confirm.directive.ts ***!
  \***********************************************************/
/*! exports provided: CoreConfirmDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreConfirmDirective", function() { return CoreConfirmDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let CoreConfirmDirective = class CoreConfirmDirective {
    constructor(alertController) {
        this.alertController = alertController;
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onClick($event) {
        this.openAlertConfirm();
    }
    openAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: this.title,
                subHeader: this.subTitle,
                message: this.message,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.cancel.next();
                        }
                    },
                    {
                        text: 'Confirm',
                        cssClass: 'primary',
                        handler: () => {
                            this.confirm.next();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
CoreConfirmDirective.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CoreConfirmDirective.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CoreConfirmDirective.prototype, "subTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CoreConfirmDirective.prototype, "message", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CoreConfirmDirective.prototype, "confirm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CoreConfirmDirective.prototype, "cancel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], CoreConfirmDirective.prototype, "onClick", null);
CoreConfirmDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[coreConfirm]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], CoreConfirmDirective);



/***/ }),

/***/ "./src/app/core/dynamic-input-model-builder.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/dynamic-input-model-builder.ts ***!
  \*****************************************************/
/*! exports provided: DynamicInputModelBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicInputModelBuilder", function() { return DynamicInputModelBuilder; });
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm2015/core.js");
/* harmony import */ var _core_form_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/form.constants */ "./src/app/core/form.constants.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");



class DynamicInputModelBuilder {
    constructor() {
        this.validators = {};
        this.asyncValidators = {};
        this.error_messages = {};
    }
    getTextInputModel(id, label, max_length, place_holder, input_type, min_length, min) {
        this.input_model = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
            id: id,
            label: label,
            inputType: input_type || 'text',
            maxLength: max_length || _core_form_constants__WEBPACK_IMPORTED_MODULE_1__["FormConstants"].DEFAULT_TEXT_MAX_LENGTH,
            minLength: min_length || _core_form_constants__WEBPACK_IMPORTED_MODULE_1__["FormConstants"].DEFAULT_TEXT_MIN_LENGTH,
            placeholder: place_holder || _core_form_constants__WEBPACK_IMPORTED_MODULE_1__["FormConstants"].DEFAULT_PLACE_HOLDER,
            min: min,
        });
        return this;
    }
    getTextAreaInputModel(id, max_length, place_holder, rows, cols, label) {
        this.input_model = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicTextAreaModel"]({
            id: id,
            maxLength: max_length || _core_form_constants__WEBPACK_IMPORTED_MODULE_1__["FormConstants"].DEFAULT_TEXT_AREA_MAX_LENGTH,
            placeholder: place_holder || _core_form_constants__WEBPACK_IMPORTED_MODULE_1__["FormConstants"].DEFAULT_PLACE_HOLDER,
            rows: rows || _core_form_constants__WEBPACK_IMPORTED_MODULE_1__["FormConstants"].DEFAULT_TEXT_AREA_ROWS,
            cols: cols || _core_form_constants__WEBPACK_IMPORTED_MODULE_1__["FormConstants"].DEFAULT_TEXT_AREA_COLS,
            label: label,
        });
        return this;
    }
    getDateInputModel(id, label, place_holder, min, max, format) {
        this.input_model = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicDatePickerModel"]({
            id: id,
            label: label,
            placeholder: place_holder,
            format: format || _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].DEFAULT_DATE_FORMAT,
            min: min || '1951-01-26',
            max: max || '2025-12-07'
        });
        return this;
    }
    getTimeInputModel(id, label, place_holder, display_format, picker_format) {
        this.input_model = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicTimePickerModel"]({
            id: id,
            label: label,
            placeholder: place_holder,
            format: display_format || _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].DEFAULT_TIME_FORMAT,
            additional: { 'pickerFormat': picker_format || _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].DEFAULT_TIME_FORMAT }
        });
        return this;
    }
    getRadioGroupInputModel(id, label, options, value) {
        this.input_model = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicRadioGroupModel"]({
            id: id,
            label: label,
            options: options,
            value: value
        });
        return this;
    }
    getSelectInputModel(id, label, options, value) {
        this.input_model = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicSelectModel"]({
            id: id,
            label: label,
            options: options,
            value: value
        });
        return this;
    }
    getCheckBoxInputModel(id, label) {
        this.input_model = new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicCheckboxModel"]({
            id: id,
            label: label
        });
        return this;
    }
    addValidatorAndErrorMessage(name, error_msg_field, args) {
        this.addValidator(name, args);
        this.addErrorMessage(name, error_msg_field);
        return this;
    }
    addErrorMessage(name, error_msg_field) {
        this.error_messages[this.getValidator(name)] =
            this.getValidatorErrorMessage(name) + this.addErrorMessageField(error_msg_field);
        return this;
    }
    addErrorMessageField(error_msg_field) {
        return (error_msg_field ? '{{' + error_msg_field + '}}' : '');
    }
    addValidator(name, args) {
        this.validators[this.getValidator(name)] = { name: this.getValidator(name), args: args };
        return this;
    }
    addAsyncValidator(name, args) {
        this.asyncValidators[this.getValidator(name)] = { name: this.getValidator(name), args: args };
        return this;
    }
    getValidator(name) {
        return _core_form_constants__WEBPACK_IMPORTED_MODULE_1__["FORM_VALIDATIONS"][name].validator;
    }
    getValidatorErrorMessage(name) {
        return _core_form_constants__WEBPACK_IMPORTED_MODULE_1__["FORM_VALIDATIONS"][name].errorMessage;
    }
    build() {
        this.input_model.validators = this.validators;
        this.input_model.asyncValidators = this.asyncValidators;
        this.input_model.errorMessages = this.error_messages;
        return this.input_model;
    }
}


/***/ }),

/***/ "./src/app/core/form.constants.ts":
/*!****************************************!*\
  !*** ./src/app/core/form.constants.ts ***!
  \****************************************/
/*! exports provided: FormConstants, FORM_VALIDATIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormConstants", function() { return FormConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_VALIDATIONS", function() { return FORM_VALIDATIONS; });
class FormConstants {
}
FormConstants.DEFAULT_PLACE_HOLDER = 'Enter something here';
FormConstants.DEFAULT_TEXT_AREA_ROWS = 3;
FormConstants.DEFAULT_TEXT_MAX_LENGTH = 1024;
FormConstants.DEFAULT_TEXT_AREA_MAX_LENGTH = 9999;
FormConstants.STORY_DESCRIPTION_MAX_LENGTH = 1500;
FormConstants.DEFAULT_TEXT_MIN_LENGTH = 1;
FormConstants.DEFAULT_TEXT_INPUT_TYPE = 'text';
FormConstants.DEFAULT_TEXT_AREA_COLS = 4;
FormConstants.DEFAULT_PASSWORD_MAX_LENGTH = 40;
const FORM_VALIDATIONS = {
    EMAIL_VALIDATOR: { validator: 'emailValidator', errorMessage: 'Invalid e-mail' },
    MOBILE_VALIDATOR: { validator: 'mobileNumberValidator', errorMessage: 'Invalid mobile number' },
    PASSWORD_VALIDATOR: {
        validator: 'appPasswordValidator',
        errorMessage: 'Invalid Password'
    },
    REQUIRED: { validator: 'required', errorMessage: 'Required ' },
    MAXLENGTH: { validator: 'maxLength', errorMessage: 'Max length exceeded' },
    MINLENGTH: { validator: 'minLength', errorMessage: 'Min length required' },
};


/***/ }),

/***/ "./src/app/core/form.validations.ts":
/*!******************************************!*\
  !*** ./src/app/core/form.validations.ts ***!
  \******************************************/
/*! exports provided: FormValidations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidations", function() { return FormValidations; });
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var password_validator_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! password-validator/src */ "./node_modules/password-validator/src/index.js");
/* harmony import */ var password_validator_src__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(password_validator_src__WEBPACK_IMPORTED_MODULE_1__);


var FormValidations;
(function (FormValidations) {
    function emailValidator(control) {
        // validator does not accept null
        const hasError = validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmail(control.value ? control.value : '');
        return hasError ? null : { emailValidator: true };
    }
    FormValidations.emailValidator = emailValidator;
    function mobileNumberValidator(control) {
        const hasError = validator__WEBPACK_IMPORTED_MODULE_0___default.a.isMobilePhone(control.value ? control.value : '');
        return hasError ? null : { mobileNumberValidator: true };
    }
    FormValidations.mobileNumberValidator = mobileNumberValidator;
    function appPasswordValidator(control) {
        const schema = new password_validator_src__WEBPACK_IMPORTED_MODULE_1___default.a();
        schema
            .is().min(6) // Minimum length 8
            .is().max(100) // Maximum length 100
            .has().lowercase() // Must have lowercase letters
            .has().digits() // Must have digits
            .has().not().spaces(); // Should not have spaces
        const isValid = control.value ? (schema.validate(control.value)) : false;
        return isValid ? null : { appPasswordValidator: true };
        // return null;
    }
    FormValidations.appPasswordValidator = appPasswordValidator;
})(FormValidations || (FormValidations = {}));


/***/ }),

/***/ "./src/app/core/http/http.constants.ts":
/*!*********************************************!*\
  !*** ./src/app/core/http/http.constants.ts ***!
  \*********************************************/
/*! exports provided: HttpNotifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpNotifications", function() { return HttpNotifications; });
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");

class HttpNotifications {
    static isInIgnoreUrl(url) {
        for (const url_pattern of HttpNotifications.IGNORE_URLS) {
            if (!_core_commons_service__WEBPACK_IMPORTED_MODULE_0__["CommonsService"].isNullOrUndefined(url.match(url_pattern))) {
                return true;
            }
        }
        return false;
    }
}
HttpNotifications.IGNORE_URLS = [];


/***/ }),

/***/ "./src/app/core/http/http.module.ts":
/*!******************************************!*\
  !*** ./src/app/core/http/http.module.ts ***!
  \******************************************/
/*! exports provided: DefaultRestangularHttp, TokenInterceptor, HttpModule, RestangularConfigFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultRestangularHttp", function() { return DefaultRestangularHttp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestangularConfigFactory", function() { return RestangularConfigFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm2015/ngx-restangular.js");
/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @environment/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_http_http_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/http/http.constants */ "./src/app/core/http/http.constants.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var aws_amplify_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! aws-amplify-angular */ "./node_modules/aws-amplify-angular/dist/index.js");













var HttpError = _core_core_models__WEBPACK_IMPORTED_MODULE_7__["Core"].HttpError;
let DefaultRestangularHttp = class DefaultRestangularHttp extends ngx_restangular__WEBPACK_IMPORTED_MODULE_4__["RestangularHttp"] {
    constructor(http, client) {
        super(http);
        this.client = client;
    }
    // Code refered from
    // https://github.com/2muchcoffeecom/ngx-restangular/blob/master/projects/ngx-restangular/src/lib/ngx-restangular-http.ts
    request(request) {
        return this.client.request(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(event => event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])((response) => {
            if (!response.ok) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["throwError"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"](response));
            }
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(response => {
            response.config = { params: request };
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])(err => {
            err.request = request;
            err.data = err.error;
            err.repeatRequest = (newRequest) => {
                return this.request(newRequest || request);
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["throwError"])(err);
        }));
    }
};
DefaultRestangularHttp.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpBackend"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
DefaultRestangularHttp = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], DefaultRestangularHttp);

let TokenInterceptor = class TokenInterceptor {
    constructor(amplifyService) {
        this.amplifyService = amplifyService;
    }
    intercept(request, next) {
        if (!request.url.includes('s3.amazonaws.com')) {
            return _core_commons_service__WEBPACK_IMPORTED_MODULE_6__["CommonsService"].promiseToObservable(this.amplifyService.auth().currentSession()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["concatMap"])((session) => {
                request = request.clone({
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                        'Authorization': `Bearer ${session.getIdToken().getJwtToken()}`
                        //'Authorization': `Bearer ${session.getIdToken().getJwtToken()}`
                    })
                });
                return next.handle(request);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])(error => {
                return next.handle(request);
            }));
        }
        return next.handle(request);
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: aws_amplify_angular__WEBPACK_IMPORTED_MODULE_12__["AmplifyService"] }
];
TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [aws_amplify_angular__WEBPACK_IMPORTED_MODULE_12__["AmplifyService"]])
], TokenInterceptor);

let HttpModule = class HttpModule {
};
HttpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        ],
        declarations: [],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: TokenInterceptor, multi: true },
            { provide: ngx_restangular__WEBPACK_IMPORTED_MODULE_4__["RestangularHttp"], useClass: DefaultRestangularHttp, multi: false }
        ]
    })
], HttpModule);

function RestangularConfigFactory(RestangularProvider, authService, notificationsService) {
    RestangularProvider.setBaseUrl(_environment_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrls.baseUrl);
    RestangularProvider.setPlainByDefault(true);
    RestangularProvider.addErrorInterceptor((response, subject, responseHandler) => {
        const errorMessage = _core_commons_service__WEBPACK_IMPORTED_MODULE_6__["CommonsService"].deserialize(response.data && response.data.error ? response.data.error : {}, HttpError);
        if (errorMessage && errorMessage.error_status && errorMessage.error_status !== http_status_codes__WEBPACK_IMPORTED_MODULE_8__["NOT_FOUND"] &&
            !_core_http_http_constants__WEBPACK_IMPORTED_MODULE_9__["HttpNotifications"].isInIgnoreUrl(response.url)) {
            notificationsService.error(errorMessage.message);
        }
        return true;
    });
}


/***/ }),

/***/ "./src/app/core/http/rest.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/http/rest.service.ts ***!
  \*******************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm2015/ngx-restangular.js");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");


class RestService {
    constructor(restangular) {
        this.restangular = restangular;
    }
    getService(path) {
        return this.restangular.service(path);
    }
    serialize(obj) {
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_1__["CommonsService"].serialize(obj);
    }
}
RestService.ctorParameters = () => [
    { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_0__["Restangular"] }
];


/***/ }),

/***/ "./src/app/core/models.converters.ts":
/*!*******************************************!*\
  !*** ./src/app/core/models.converters.ts ***!
  \*******************************************/
/*! exports provided: ModelsConverters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelsConverters", function() { return ModelsConverters; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");



var ModelsConverters;
(function (ModelsConverters) {
    let DateConverter = class DateConverter {
        serialize(date) {
            return _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].getDateStringFromMoment(date);
        }
        deserialize(date) {
            return _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].getMomentFromDateString(date);
        }
    };
    DateConverter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonConverter"]
    ], DateConverter);
    ModelsConverters.DateConverter = DateConverter;
    let IntToStringConverter = class IntToStringConverter {
        serialize(int_as_string) {
            return parseInt(int_as_string, 10);
        }
        deserialize(int_as_number) {
            return '' + int_as_number;
        }
    };
    IntToStringConverter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonConverter"]
    ], IntToStringConverter);
    ModelsConverters.IntToStringConverter = IntToStringConverter;
    let StringOrNumberConverter = class StringOrNumberConverter {
        serialize(int_as_string) {
            return _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].isNumber(int_as_string) ? Number(int_as_string) : int_as_string;
        }
        deserialize(int_as_string) {
            return _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].isNumber(int_as_string) ? Number(int_as_string) : int_as_string;
        }
    };
    StringOrNumberConverter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonConverter"]
    ], StringOrNumberConverter);
    ModelsConverters.StringOrNumberConverter = StringOrNumberConverter;
    let DateTimeConverter = class DateTimeConverter {
        serialize(time) {
            return _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].getDateTimeStringFromMoment(time);
        }
        deserialize(time) {
            return _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].getMomentFromDateTimeString(time);
        }
    };
    DateTimeConverter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonConverter"]
    ], DateTimeConverter);
    ModelsConverters.DateTimeConverter = DateTimeConverter;
    let TimestampConverter = class TimestampConverter {
        serialize(time) {
            return _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].getTimestampFromMoment(time);
        }
        deserialize(time) {
            return _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].getMomentFromTimestamp(time);
        }
    };
    TimestampConverter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonConverter"]
    ], TimestampConverter);
    ModelsConverters.TimestampConverter = TimestampConverter;
    let TimeConverter = class TimeConverter {
        serialize(time) {
            return _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].getTimeStringFromMoment(time);
        }
        deserialize(time) {
            return _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].getMomentFromTimeString(time);
        }
    };
    TimeConverter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonConverter"]
    ], TimeConverter);
    ModelsConverters.TimeConverter = TimeConverter;
    let ArrayToStringConverter = class ArrayToStringConverter {
        serialize(time) {
            return time.join(',');
        }
        deserialize(time) {
            return time.split(',');
        }
    };
    ArrayToStringConverter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonConverter"]
    ], ArrayToStringConverter);
    ModelsConverters.ArrayToStringConverter = ArrayToStringConverter;
    let ArrayToLongitudeConverter = class ArrayToLongitudeConverter {
        serialize(time) {
            throw new Error('We dont use this for serialize');
        }
        deserialize(time) {
            return parseFloat(time[0]);
        }
    };
    ArrayToLongitudeConverter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonConverter"]
    ], ArrayToLongitudeConverter);
    ModelsConverters.ArrayToLongitudeConverter = ArrayToLongitudeConverter;
    let ArrayToLatitudeConverter = class ArrayToLatitudeConverter {
        serialize(time) {
            throw new Error('We dont use this for serialize');
        }
        deserialize(time) {
            return parseFloat(time[1]);
        }
    };
    ArrayToLatitudeConverter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonConverter"]
    ], ArrayToLatitudeConverter);
    ModelsConverters.ArrayToLatitudeConverter = ArrayToLatitudeConverter;
})(ModelsConverters || (ModelsConverters = {}));


/***/ }),

/***/ "./src/app/core/notifications.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/notifications.service.ts ***!
  \***********************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/core.constants */ "./src/app/core/core.constants.ts");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");




let NotificationsService = class NotificationsService {
    constructor(toast) {
        this.toast = toast;
    }
    show(message, color, duration, position) {
        const toast_plugin = window['plugins'] ? window['plugins'].toast : undefined;
        if (toast_plugin) {
            toast_plugin.showWithOptions({
                message: message,
                duration: duration || _core_core_constants__WEBPACK_IMPORTED_MODULE_2__["TOAST_CONFIGURATION"].DURATION,
                position: position || _core_core_constants__WEBPACK_IMPORTED_MODULE_2__["TOAST_CONFIGURATION"].POSITION,
                styling: {
                    backgroundColor: color
                }
            });
        }
        else {
            console.log(message);
        }
    }
    success(message, duration, postion) {
        this.show(message, _core_core_constants__WEBPACK_IMPORTED_MODULE_2__["NOTIFICATION_THEMES"].SUCCESS, duration, 'bottom');
    }
    error(message, duration, postion) {
        this.show(message, _core_core_constants__WEBPACK_IMPORTED_MODULE_2__["NOTIFICATION_THEMES"].ERROR, duration, 'bottom');
    }
    warning(message, duration, postion) {
        this.show(message, _core_core_constants__WEBPACK_IMPORTED_MODULE_2__["NOTIFICATION_THEMES"].WARNING, duration, 'bottom');
    }
};
NotificationsService.ctorParameters = () => [
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_3__["Toast"] }
];
NotificationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_3__["Toast"]])
], NotificationsService);



/***/ }),

/***/ "./src/app/core/storage.service.ts":
/*!*****************************************!*\
  !*** ./src/app/core/storage.service.ts ***!
  \*****************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");



let StorageService = class StorageService {
    constructor(storage) {
        this.storage = storage;
    }
    set(key, value) {
        return this.storage.set(key, value);
    }
    get(key) {
        return this.storage.get(key);
    }
    clear() {
        return this.storage.clear();
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
], StorageService);



/***/ }),

/***/ "./src/app/images/components/images-by-entity-and-type/images-by-entity-and-type.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/images/components/images-by-entity-and-type/images-by-entity-and-type.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top_layout {\n  position: relative;\n}\n\n.fab_icon {\n  background-color: 0;\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  width: 30%;\n  height: 30%;\n  background: red;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JhY2t1cC9VU1RYLVByb2plY3QvRXZlbnREYXRpbmctU2Vhbi90ZXN0MS9zcmMvYXBwL2ltYWdlcy9jb21wb25lbnRzL2ltYWdlcy1ieS1lbnRpdHktYW5kLXR5cGUvaW1hZ2VzLWJ5LWVudGl0eS1hbmQtdHlwZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW1hZ2VzL2NvbXBvbmVudHMvaW1hZ2VzLWJ5LWVudGl0eS1hbmQtdHlwZS9pbWFnZXMtYnktZW50aXR5LWFuZC10eXBlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUdELG1CQUFBO0FDRUgiLCJmaWxlIjoic3JjL2FwcC9pbWFnZXMvY29tcG9uZW50cy9pbWFnZXMtYnktZW50aXR5LWFuZC10eXBlL2ltYWdlcy1ieS1lbnRpdHktYW5kLXR5cGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wX2xheW91dHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZmFiX2ljb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlKCRjb2xvcjogIzAwMDAwMCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDVweDtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7IFxyXG4gICAtbW96LWJvcmRlci1yYWRpdXM6IDkwcHg7IFxyXG4gICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDkwcHg7IFxyXG4gICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59IiwiLnRvcF9sYXlvdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mYWJfaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMzAlO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogOTBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/images/components/images-by-entity-and-type/images-by-entity-and-type.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/images/components/images-by-entity-and-type/images-by-entity-and-type.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ImagesByEntityAndTypeComponent, ImagesByEntityAndTypeSmComponent, ImagesByEntityAndTypeXlComponent, ImagesByEntityAndTypeWithEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesByEntityAndTypeComponent", function() { return ImagesByEntityAndTypeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesByEntityAndTypeSmComponent", function() { return ImagesByEntityAndTypeSmComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesByEntityAndTypeXlComponent", function() { return ImagesByEntityAndTypeXlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesByEntityAndTypeWithEditComponent", function() { return ImagesByEntityAndTypeWithEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _images_images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @images/images.service */ "./src/app/images/images.service.ts");
/* harmony import */ var _images_images_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @images/images.models */ "./src/app/images/images.models.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");






var GetUploadedFileByEntityAndType = _images_images_models__WEBPACK_IMPORTED_MODULE_4__["FileRequests"].GetUploadedFileByEntityAndType;
let ImagesByEntityAndTypeComponent = class ImagesByEntityAndTypeComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(imagesService, injector) {
        super(injector);
        this.imagesService = imagesService;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
        this.uploadedFilesRecieved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getUploadedFileByEntityAndType = (request) => {
            this.imagesService.getFileByEntityAndType(request)
                .pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_5__["CommonsService"].deserializeMap(GetUploadedFileByEntityAndType.Response)).subscribe(value => {
                this.uploadedFiles = value;
                this.uploadedFilesRecieved.emit(value);
            });
        };
    }
    initializeComponent() {
        this.makeServiceCallWithIdIfObjectNull(this.uploadedFiles, this.createRequestData(), this.getUploadedFileByEntityAndType);
    }
    createRequestData(entity, entity_type) {
        const request = new GetUploadedFileByEntityAndType.Request();
        request.entity = entity || this.entity;
        request.entityType = entity_type || this.entityType;
        return request;
    }
};
ImagesByEntityAndTypeComponent.ctorParameters = () => [
    { type: _images_images_service__WEBPACK_IMPORTED_MODULE_3__["ImagesService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ImagesByEntityAndTypeComponent.prototype, "entity", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ImagesByEntityAndTypeComponent.prototype, "entityType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ImagesByEntityAndTypeComponent.prototype, "alt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ImagesByEntityAndTypeComponent.prototype, "uploadedFiles", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ImagesByEntityAndTypeComponent.prototype, "uploadedFilesRecieved", void 0);
ImagesByEntityAndTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'images-by-entity-and-type',
        template: __webpack_require__(/*! raw-loader!./images-by-entity-and-type.component.html */ "./node_modules/raw-loader/index.js!./src/app/images/components/images-by-entity-and-type/images-by-entity-and-type.component.html"),
        styles: [__webpack_require__(/*! ./images-by-entity-and-type.component.scss */ "./src/app/images/components/images-by-entity-and-type/images-by-entity-and-type.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_images_images_service__WEBPACK_IMPORTED_MODULE_3__["ImagesService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], ImagesByEntityAndTypeComponent);

let ImagesByEntityAndTypeSmComponent = class ImagesByEntityAndTypeSmComponent extends ImagesByEntityAndTypeComponent {
};
ImagesByEntityAndTypeSmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'images-by-entity-and-type-sm',
        template: __webpack_require__(/*! raw-loader!./images-by-entity-and-type-sm.component.html */ "./node_modules/raw-loader/index.js!./src/app/images/components/images-by-entity-and-type/images-by-entity-and-type-sm.component.html"),
        styles: [__webpack_require__(/*! ./images-by-entity-and-type.component.scss */ "./src/app/images/components/images-by-entity-and-type/images-by-entity-and-type.component.scss")]
    })
], ImagesByEntityAndTypeSmComponent);

let ImagesByEntityAndTypeXlComponent = class ImagesByEntityAndTypeXlComponent extends ImagesByEntityAndTypeComponent {
};
ImagesByEntityAndTypeXlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'images-by-entity-and-type-xl',
        template: __webpack_require__(/*! raw-loader!./images-by-entity-and-type-xl.component.html */ "./node_modules/raw-loader/index.js!./src/app/images/components/images-by-entity-and-type/images-by-entity-and-type-xl.component.html"),
        styles: [__webpack_require__(/*! ./images-by-entity-and-type.component.scss */ "./src/app/images/components/images-by-entity-and-type/images-by-entity-and-type.component.scss")]
    })
], ImagesByEntityAndTypeXlComponent);

let ImagesByEntityAndTypeWithEditComponent = class ImagesByEntityAndTypeWithEditComponent extends ImagesByEntityAndTypeComponent {
    constructor() {
        super(...arguments);
        this.maxCount = 0;
        this.numbers = [];
    }
    initializeComponent() {
        super.initializeComponent();
        this.numbers = Array(this.maxCount).fill(0).map((x, i) => i);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ImagesByEntityAndTypeWithEditComponent.prototype, "maxCount", void 0);
ImagesByEntityAndTypeWithEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'images-by-entity-and-type-with-edit',
        template: __webpack_require__(/*! raw-loader!./images-by-entity-and-type-with-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/images/components/images-by-entity-and-type/images-by-entity-and-type-with-edit.component.html"),
        styles: [__webpack_require__(/*! ./images-by-entity-and-type.component.scss */ "./src/app/images/components/images-by-entity-and-type/images-by-entity-and-type.component.scss")]
    })
], ImagesByEntityAndTypeWithEditComponent);



/***/ }),

/***/ "./src/app/images/components/images-capture-photo/images-capture-photo.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/images/components/images-capture-photo/images-capture-photo.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy9jb21wb25lbnRzL2ltYWdlcy1jYXB0dXJlLXBob3RvL2ltYWdlcy1jYXB0dXJlLXBob3RvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/images/components/images-capture-photo/images-capture-photo.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/images/components/images-capture-photo/images-capture-photo.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ImagesCapturePhotoComponent, ImagesCapturePhotoNoTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesCapturePhotoComponent", function() { return ImagesCapturePhotoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesCapturePhotoNoTemplateComponent", function() { return ImagesCapturePhotoNoTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _images_images_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @images/images.constants */ "./src/app/images/images.constants.ts");





let ImagesCapturePhotoComponent = class ImagesCapturePhotoComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(injector) {
        super(injector);
        this.fileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nativeCamera = injector.get(_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]);
    }
    initializeComponent() {
    }
    takePicture(options) {
        this.nativeCamera.getPicture(options || _images_images_constants__WEBPACK_IMPORTED_MODULE_4__["ImagesConstants"].PHOTO_CAMERA_OPTIONS)
            .then(imagePath => {
            const currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
            this.fileSelected.emit({ file_url: imagePath, file_name: currentName });
        });
    }
};
ImagesCapturePhotoComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ImagesCapturePhotoComponent.prototype, "fileSelected", void 0);
ImagesCapturePhotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'images-capture-photo',
        template: __webpack_require__(/*! raw-loader!./images-capture-photo.component.html */ "./node_modules/raw-loader/index.js!./src/app/images/components/images-capture-photo/images-capture-photo.component.html"),
        styles: [__webpack_require__(/*! ./images-capture-photo.component.scss */ "./src/app/images/components/images-capture-photo/images-capture-photo.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], ImagesCapturePhotoComponent);

let ImagesCapturePhotoNoTemplateComponent = class ImagesCapturePhotoNoTemplateComponent extends ImagesCapturePhotoComponent {
};
ImagesCapturePhotoNoTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'images-capture-photo-no-template',
        template: '',
        styles: [__webpack_require__(/*! ./images-capture-photo.component.scss */ "./src/app/images/components/images-capture-photo/images-capture-photo.component.scss")]
    })
], ImagesCapturePhotoNoTemplateComponent);



/***/ }),

/***/ "./src/app/images/components/images-create-file-upload-request/images-create-file-upload-request.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/images/components/images-create-file-upload-request/images-create-file-upload-request.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy9jb21wb25lbnRzL2ltYWdlcy1jcmVhdGUtZmlsZS11cGxvYWQtcmVxdWVzdC9pbWFnZXMtY3JlYXRlLWZpbGUtdXBsb2FkLXJlcXVlc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/images/components/images-create-file-upload-request/images-create-file-upload-request.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/images/components/images-create-file-upload-request/images-create-file-upload-request.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ImagesCreateFileUploadRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesCreateFileUploadRequestComponent", function() { return ImagesCreateFileUploadRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _images_images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @images/images.service */ "./src/app/images/images.service.ts");
/* harmony import */ var _images_images_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @images/images.models */ "./src/app/images/images.models.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");






var CreateFileUploadRequest = _images_images_models__WEBPACK_IMPORTED_MODULE_4__["FileRequests"].CreateFileUploadRequest;
let ImagesCreateFileUploadRequestComponent = class ImagesCreateFileUploadRequestComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(imagesService, injector) {
        super(injector);
        this.imagesService = imagesService;
        this.fileUploadRequestCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
    }
    createRequestData(name, type, entity_type, entity) {
        const request = new CreateFileUploadRequest.Request();
        request.entityType = entity_type || this.entityType;
        request.entity = entity || this.entity;
        request.name = name || this.name;
        request.type = this.getFileContentType(request.name);
        return request;
    }
    getFileContentType(file_name) {
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_5__["CommonsService"].getFileContentType(file_name);
    }
    createFileUploadRequest(request) {
        console.log(request);
        this.imagesService.createFileUploadRequest(request)
            .pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_5__["CommonsService"].deserializeMap(CreateFileUploadRequest.Response))
            .subscribe(value => {
            this.fileUploadRequestCreated.emit(value);
        });
    }
};
ImagesCreateFileUploadRequestComponent.ctorParameters = () => [
    { type: _images_images_service__WEBPACK_IMPORTED_MODULE_3__["ImagesService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ImagesCreateFileUploadRequestComponent.prototype, "entityType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ImagesCreateFileUploadRequestComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ImagesCreateFileUploadRequestComponent.prototype, "entity", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ImagesCreateFileUploadRequestComponent.prototype, "fileUploadRequestCreated", void 0);
ImagesCreateFileUploadRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'images-create-file-upload-request',
        template: __webpack_require__(/*! raw-loader!./images-create-file-upload-request.component.html */ "./node_modules/raw-loader/index.js!./src/app/images/components/images-create-file-upload-request/images-create-file-upload-request.component.html"),
        styles: [__webpack_require__(/*! ./images-create-file-upload-request.component.scss */ "./src/app/images/components/images-create-file-upload-request/images-create-file-upload-request.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_images_images_service__WEBPACK_IMPORTED_MODULE_3__["ImagesService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], ImagesCreateFileUploadRequestComponent);



/***/ }),

/***/ "./src/app/images/components/images-delete-file/images-delete-file.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/images/components/images-delete-file/images-delete-file.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy9jb21wb25lbnRzL2ltYWdlcy1kZWxldGUtZmlsZS9pbWFnZXMtZGVsZXRlLWZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/images/components/images-delete-file/images-delete-file.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/images/components/images-delete-file/images-delete-file.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ImagesDeleteFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesDeleteFileComponent", function() { return ImagesDeleteFileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _images_images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @images/images.service */ "./src/app/images/images.service.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _images_images_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @images/images.models */ "./src/app/images/images.models.ts");





var UploadedFile = _core_core_models__WEBPACK_IMPORTED_MODULE_4__["Files"].UploadedFile;

var DeleteUploadedFile = _images_images_models__WEBPACK_IMPORTED_MODULE_5__["FileRequests"].DeleteUploadedFile;
let ImagesDeleteFileComponent = class ImagesDeleteFileComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(filesService, injector) {
        super(injector);
        this.filesService = filesService;
        this.uploadedFileDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
    }
    createRequestData(uploaded_file) {
        const request = new DeleteUploadedFile.Request();
        request.fileId = (uploaded_file || this.uploadedFile)._id;
        return request;
    }
    deleteUploadedFile(request) {
        this.filesService.deleteUploadedFile(request).subscribe(value => {
            this.uploadedFileDeleted.emit(true);
        });
    }
};
ImagesDeleteFileComponent.ctorParameters = () => [
    { type: _images_images_service__WEBPACK_IMPORTED_MODULE_3__["ImagesService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", UploadedFile)
], ImagesDeleteFileComponent.prototype, "uploadedFile", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ImagesDeleteFileComponent.prototype, "uploadedFileDeleted", void 0);
ImagesDeleteFileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'images-delete-file',
        template: __webpack_require__(/*! raw-loader!./images-delete-file.component.html */ "./node_modules/raw-loader/index.js!./src/app/images/components/images-delete-file/images-delete-file.component.html"),
        styles: [__webpack_require__(/*! ./images-delete-file.component.scss */ "./src/app/images/components/images-delete-file/images-delete-file.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_images_images_service__WEBPACK_IMPORTED_MODULE_3__["ImagesService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], ImagesDeleteFileComponent);



/***/ }),

/***/ "./src/app/images/components/images-file-details/images-file-details.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/images/components/images-file-details/images-file-details.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy9jb21wb25lbnRzL2ltYWdlcy1maWxlLWRldGFpbHMvaW1hZ2VzLWZpbGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/images/components/images-file-details/images-file-details.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/images/components/images-file-details/images-file-details.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ImagesFileDetailsComponent, ImagesFileDetailsSmComponent, ImagesFileDetailsMdWithDeleteComponent, ImagesFileDetailsXlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesFileDetailsComponent", function() { return ImagesFileDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesFileDetailsSmComponent", function() { return ImagesFileDetailsSmComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesFileDetailsMdWithDeleteComponent", function() { return ImagesFileDetailsMdWithDeleteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesFileDetailsXlComponent", function() { return ImagesFileDetailsXlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _images_images_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @images/images.models */ "./src/app/images/images.models.ts");
/* harmony import */ var _images_images_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @images/images.service */ "./src/app/images/images.service.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");




var UploadedFile = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["Files"].UploadedFile;

var GetUploadedFile = _images_images_models__WEBPACK_IMPORTED_MODULE_4__["FileRequests"].GetUploadedFile;


let ImagesFileDetailsComponent = class ImagesFileDetailsComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(fileService, injector) {
        super(injector);
        this.fileService = fileService;
        this.uploadedFileReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getUploadedFile = (request) => {
            this.fileService.getUploadedFile(request).pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_6__["CommonsService"].deserializeMap(UploadedFile)).subscribe(value => {
                this.uploadedFile = value;
                this.uploadedFileReceived.emit(value);
            });
        };
    }
    initializeComponent() {
        this.makeServiceCallWithIdIfObjectNull(this.uploadedFile, this.createRequestData(), this.getUploadedFile);
    }
    createRequestData(uploaded_file_id) {
        const request = new GetUploadedFile.Request();
        request.fileId = uploaded_file_id || this.uploadedFileId;
        return request;
    }
};
ImagesFileDetailsComponent.ctorParameters = () => [
    { type: _images_images_service__WEBPACK_IMPORTED_MODULE_5__["ImagesService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", UploadedFile)
], ImagesFileDetailsComponent.prototype, "uploadedFile", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ImagesFileDetailsComponent.prototype, "uploadedFileId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ImagesFileDetailsComponent.prototype, "alt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ImagesFileDetailsComponent.prototype, "uploadedFileReceived", void 0);
ImagesFileDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'images-file-details',
        template: __webpack_require__(/*! raw-loader!./images-file-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/images/components/images-file-details/images-file-details.component.html"),
        styles: [__webpack_require__(/*! ./images-file-details.component.scss */ "./src/app/images/components/images-file-details/images-file-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_images_images_service__WEBPACK_IMPORTED_MODULE_5__["ImagesService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], ImagesFileDetailsComponent);

let ImagesFileDetailsSmComponent = class ImagesFileDetailsSmComponent extends ImagesFileDetailsComponent {
};
ImagesFileDetailsSmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'images-file-details-sm',
        template: __webpack_require__(/*! raw-loader!./images-file-details-sm.component.html */ "./node_modules/raw-loader/index.js!./src/app/images/components/images-file-details/images-file-details-sm.component.html"),
        styles: [__webpack_require__(/*! ./images-file-details.component.scss */ "./src/app/images/components/images-file-details/images-file-details.component.scss")]
    })
], ImagesFileDetailsSmComponent);

let ImagesFileDetailsMdWithDeleteComponent = class ImagesFileDetailsMdWithDeleteComponent extends ImagesFileDetailsComponent {
    constructor() {
        super(...arguments);
        this.uploadedFileDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ImagesFileDetailsMdWithDeleteComponent.prototype, "uploadedFileDeleted", void 0);
ImagesFileDetailsMdWithDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'images-file-details-md-with-delete',
        template: __webpack_require__(/*! raw-loader!./images-file-details-md-with-delete.component.html */ "./node_modules/raw-loader/index.js!./src/app/images/components/images-file-details/images-file-details-md-with-delete.component.html"),
        styles: [__webpack_require__(/*! ./images-file-details.component.scss */ "./src/app/images/components/images-file-details/images-file-details.component.scss")]
    })
], ImagesFileDetailsMdWithDeleteComponent);

let ImagesFileDetailsXlComponent = class ImagesFileDetailsXlComponent extends ImagesFileDetailsComponent {
};
ImagesFileDetailsXlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'images-file-details-xl',
        template: __webpack_require__(/*! raw-loader!./images-file-details-xl.component.html */ "./node_modules/raw-loader/index.js!./src/app/images/components/images-file-details/images-file-details-xl.component.html"),
        styles: [__webpack_require__(/*! ./images-file-details.component.scss */ "./src/app/images/components/images-file-details/images-file-details.component.scss")]
    })
], ImagesFileDetailsXlComponent);



/***/ }),

/***/ "./src/app/images/components/images-select-file/images-select-file.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/images/components/images-select-file/images-select-file.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy9jb21wb25lbnRzL2ltYWdlcy1zZWxlY3QtZmlsZS9pbWFnZXMtc2VsZWN0LWZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/images/components/images-select-file/images-select-file.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/images/components/images-select-file/images-select-file.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ImagesSelectFileComponent, ImagesSelectFileOnlyButtonComponent, ImagesSelectFileNoTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesSelectFileComponent", function() { return ImagesSelectFileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesSelectFileOnlyButtonComponent", function() { return ImagesSelectFileOnlyButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesSelectFileNoTemplateComponent", function() { return ImagesSelectFileNoTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _images_components_images_select_photo_images_select_photo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @images/components/images-select-photo/images-select-photo.component */ "./src/app/images/components/images-select-photo/images-select-photo.component.ts");
/* harmony import */ var _images_components_images_capture_photo_images_capture_photo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @images/components/images-capture-photo/images-capture-photo.component */ "./src/app/images/components/images-capture-photo/images-capture-photo.component.ts");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");








let ImagesSelectFileComponent = class ImagesSelectFileComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    // copied from
    // https://devdactic.com/ionic-4-image-upload-storage/
    constructor(injector, file) {
        super(injector);
        this.file = file;
        this.fileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fileReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.photo_viewer = injector.get(_ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__["PhotoViewer"]);
        this.actionSheetController = injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]);
        this.fileSelected.subscribe(selected_file => {
            this.makeFileUrlIntoFile(selected_file.file_url);
        });
    }
    initializeComponent() {
    }
    selectImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Select Image source',
                keyboardClose: true,
                buttons: [
                    {
                        text: 'Load from Library',
                        handler: () => {
                            this.images_select_photo_no_template_component.uploadFromPhotoLibrary();
                        }
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.images_capture_photo_no_template_component.takePicture();
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    makeFileUrlIntoFile(imagePath) {
        this.file.resolveLocalFilesystemUrl(imagePath).then((fileEntry) => {
            // @ts-ignore
            fileEntry.file((resFile) => {
                console.log(resFile);
                this.readFile(resFile);
            });
        });
    }
    readFile(file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const imgBlob = new Blob([reader.result], {
                type: file.type
            });
            this.fileReceived.emit({ file: file, blob: imgBlob });
        };
        reader.readAsArrayBuffer(file);
    }
    showFullView() {
        this.photo_viewer.show(this.selected_file.file_url, this.selected_file.file_name);
    }
};
ImagesSelectFileComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ImagesSelectFileComponent.prototype, "fileSelected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ImagesSelectFileComponent.prototype, "fileReceived", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_images_components_images_select_photo_images_select_photo_component__WEBPACK_IMPORTED_MODULE_4__["ImagesSelectPhotoNoTemplateComponent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _images_components_images_select_photo_images_select_photo_component__WEBPACK_IMPORTED_MODULE_4__["ImagesSelectPhotoNoTemplateComponent"])
], ImagesSelectFileComponent.prototype, "images_select_photo_no_template_component", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_images_components_images_capture_photo_images_capture_photo_component__WEBPACK_IMPORTED_MODULE_5__["ImagesCapturePhotoNoTemplateComponent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _images_components_images_capture_photo_images_capture_photo_component__WEBPACK_IMPORTED_MODULE_5__["ImagesCapturePhotoNoTemplateComponent"])
], ImagesSelectFileComponent.prototype, "images_capture_photo_no_template_component", void 0);
ImagesSelectFileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'images-select-file',
        template: __webpack_require__(/*! raw-loader!./images-select-file.component.html */ "./node_modules/raw-loader/index.js!./src/app/images/components/images-select-file/images-select-file.component.html"),
        styles: [__webpack_require__(/*! ./images-select-file.component.scss */ "./src/app/images/components/images-select-file/images-select-file.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"]])
], ImagesSelectFileComponent);

let ImagesSelectFileOnlyButtonComponent = class ImagesSelectFileOnlyButtonComponent extends ImagesSelectFileComponent {
};
ImagesSelectFileOnlyButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'images-select-file-only-button',
        template: __webpack_require__(/*! raw-loader!./images-select-file-only-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/images/components/images-select-file/images-select-file-only-button.component.html"),
        styles: [__webpack_require__(/*! ./images-select-file.component.scss */ "./src/app/images/components/images-select-file/images-select-file.component.scss")]
    })
], ImagesSelectFileOnlyButtonComponent);

let ImagesSelectFileNoTemplateComponent = class ImagesSelectFileNoTemplateComponent extends ImagesSelectFileComponent {
};
ImagesSelectFileNoTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'images-select-file-no-template',
        template: __webpack_require__(/*! raw-loader!./images-select-file-no-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/images/components/images-select-file/images-select-file-no-template.component.html"),
        styles: [__webpack_require__(/*! ./images-select-file.component.scss */ "./src/app/images/components/images-select-file/images-select-file.component.scss")]
    })
], ImagesSelectFileNoTemplateComponent);



/***/ }),

/***/ "./src/app/images/components/images-select-photo/images-select-photo.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/images/components/images-select-photo/images-select-photo.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy9jb21wb25lbnRzL2ltYWdlcy1zZWxlY3QtcGhvdG8vaW1hZ2VzLXNlbGVjdC1waG90by5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/images/components/images-select-photo/images-select-photo.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/images/components/images-select-photo/images-select-photo.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ImagesSelectPhotoComponent, ImagesSelectPhotoNoTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesSelectPhotoComponent", function() { return ImagesSelectPhotoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesSelectPhotoNoTemplateComponent", function() { return ImagesSelectPhotoNoTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");
/* harmony import */ var _images_images_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @images/images.constants */ "./src/app/images/images.constants.ts");






let ImagesSelectPhotoComponent = class ImagesSelectPhotoComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(injector) {
        super(injector);
        this.fileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nativeCamera = injector.get(_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]);
    }
    initializeComponent() {
    }
    uploadFromPhotoLibrary(options) {
        this.nativeCamera.getPicture(options || _images_images_constants__WEBPACK_IMPORTED_MODULE_5__["ImagesConstants"].PHOTO_PHOTOLIBRARY_OPTIONS)
            .then(imagePath => {
            const currentName = _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].parseFilePath(imagePath);
            console.log(currentName);
            this.fileSelected.emit({
                file_url: imagePath,
                file_name: currentName.basename.substr(0, currentName.basename.indexOf('?'))
            });
        });
    }
};
ImagesSelectPhotoComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ImagesSelectPhotoComponent.prototype, "fileSelected", void 0);
ImagesSelectPhotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'images-select-photo',
        template: __webpack_require__(/*! raw-loader!./images-select-photo.component.html */ "./node_modules/raw-loader/index.js!./src/app/images/components/images-select-photo/images-select-photo.component.html"),
        styles: [__webpack_require__(/*! ./images-select-photo.component.scss */ "./src/app/images/components/images-select-photo/images-select-photo.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], ImagesSelectPhotoComponent);

let ImagesSelectPhotoNoTemplateComponent = class ImagesSelectPhotoNoTemplateComponent extends ImagesSelectPhotoComponent {
};
ImagesSelectPhotoNoTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'images-select-photo-no-template',
        template: '',
        styles: [__webpack_require__(/*! ./images-select-photo.component.scss */ "./src/app/images/components/images-select-photo/images-select-photo.component.scss")]
    })
], ImagesSelectPhotoNoTemplateComponent);



/***/ }),

/***/ "./src/app/images/components/images-upload-file/images-upload-file.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/images/components/images-upload-file/images-upload-file.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy9jb21wb25lbnRzL2ltYWdlcy11cGxvYWQtZmlsZS9pbWFnZXMtdXBsb2FkLWZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/images/components/images-upload-file/images-upload-file.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/images/components/images-upload-file/images-upload-file.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ImagesUploadFileComponent, ImagesUploadFileWithPreviewComponent, ImagesUploadFileWithPreviewSmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesUploadFileComponent", function() { return ImagesUploadFileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesUploadFileWithPreviewComponent", function() { return ImagesUploadFileWithPreviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesUploadFileWithPreviewSmComponent", function() { return ImagesUploadFileWithPreviewSmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _images_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @images/file.service */ "./src/app/images/file.service.ts");
/* harmony import */ var _images_components_images_create_file_upload_request_images_create_file_upload_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @images/components/images-create-file-upload-request/images-create-file-upload-request.component */ "./src/app/images/components/images-create-file-upload-request/images-create-file-upload-request.component.ts");




// tslint:disable-next-line:max-line-length

let ImagesUploadFileComponent = class ImagesUploadFileComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(fileService, injector) {
        super(injector);
        this.fileService = fileService;
        this.fileUploaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fileReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fileUploadRequestCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
    }
    uploadFileFromBlob(file_blob, file_remote_url, content_type) {
        this.image_file_upload_subscription$ =
            this.fileService.uploadFile(file_remote_url, file_blob, content_type).subscribe(value => {
                this.fileUploaded.emit(this.uploaded_file);
            }, error => {
                console.log(error);
            });
    }
};
ImagesUploadFileComponent.ctorParameters = () => [
    { type: _images_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ImagesUploadFileComponent.prototype, "entityType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ImagesUploadFileComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ImagesUploadFileComponent.prototype, "entity", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ImagesUploadFileComponent.prototype, "fileUploaded", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ImagesUploadFileComponent.prototype, "fileReceived", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ImagesUploadFileComponent.prototype, "fileSelected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ImagesUploadFileComponent.prototype, "fileUploadRequestCreated", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_images_components_images_create_file_upload_request_images_create_file_upload_request_component__WEBPACK_IMPORTED_MODULE_4__["ImagesCreateFileUploadRequestComponent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _images_components_images_create_file_upload_request_images_create_file_upload_request_component__WEBPACK_IMPORTED_MODULE_4__["ImagesCreateFileUploadRequestComponent"])
], ImagesUploadFileComponent.prototype, "images_create_file_upload_request_component", void 0);
ImagesUploadFileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'images-upload-file',
        template: __webpack_require__(/*! raw-loader!./images-upload-file.component.html */ "./node_modules/raw-loader/index.js!./src/app/images/components/images-upload-file/images-upload-file.component.html"),
        styles: [__webpack_require__(/*! ./images-upload-file.component.scss */ "./src/app/images/components/images-upload-file/images-upload-file.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_images_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], ImagesUploadFileComponent);

let ImagesUploadFileWithPreviewComponent = class ImagesUploadFileWithPreviewComponent extends ImagesUploadFileComponent {
    constructor() {
        super(...arguments);
        this.win = window;
    }
    convertFileSrc(path) {
        return this.win.Ionic.WebView.convertFileSrc(path);
    }
};
ImagesUploadFileWithPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'images-upload-file-with-preview',
        template: __webpack_require__(/*! raw-loader!./images-upload-file-with-preview.component.html */ "./node_modules/raw-loader/index.js!./src/app/images/components/images-upload-file/images-upload-file-with-preview.component.html"),
        styles: [__webpack_require__(/*! ./images-upload-file.component.scss */ "./src/app/images/components/images-upload-file/images-upload-file.component.scss")]
    })
], ImagesUploadFileWithPreviewComponent);

let ImagesUploadFileWithPreviewSmComponent = class ImagesUploadFileWithPreviewSmComponent extends ImagesUploadFileComponent {
    constructor() {
        super(...arguments);
        this.win = window;
    }
    convertFileSrc(path) {
        return this.win.Ionic.WebView.convertFileSrc(path);
    }
};
ImagesUploadFileWithPreviewSmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'images-upload-file-with-preview-sm',
        template: __webpack_require__(/*! raw-loader!./images-upload-file-with-preview-sm.component.html */ "./node_modules/raw-loader/index.js!./src/app/images/components/images-upload-file/images-upload-file-with-preview-sm.component.html"),
        styles: [__webpack_require__(/*! ./images-upload-file.component.scss */ "./src/app/images/components/images-upload-file/images-upload-file.component.scss")]
    })
], ImagesUploadFileWithPreviewSmComponent);



/***/ }),

/***/ "./src/app/images/file.service.ts":
/*!****************************************!*\
  !*** ./src/app/images/file.service.ts ***!
  \****************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let FileService = class FileService {
    // copied from
    // https://devdactic.com/ionic-4-image-upload-storage/
    // https://medium.com/@aakashbanerjee/upload-files-to-amazon-s3-from-the-browser-using-pre-signed-urls-4602a9a90eb5
    constructor(injector, http) {
        this.http = http;
    }
    uploadFile(file_url, content, content_type) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': content_type });
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', file_url, content, {
            headers: headers,
        });
        return this.http.request(req);
    }
};
FileService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], FileService);



/***/ }),

/***/ "./src/app/images/images.constants.ts":
/*!********************************************!*\
  !*** ./src/app/images/images.constants.ts ***!
  \********************************************/
/*! exports provided: ImagesConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesConstants", function() { return ImagesConstants; });
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");

class ImagesConstants {
}
ImagesConstants.FILES_ENDPOINT = 'files';
ImagesConstants.PHOTO_CAMERA_OPTIONS = {
    quality: 100,
    sourceType: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__["PictureSourceType"].CAMERA,
    mediaType: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__["MediaType"].PICTURE,
    saveToPhotoAlbum: false,
    correctOrientation: true
};
ImagesConstants.PHOTO_PHOTOLIBRARY_OPTIONS = {
    quality: 100,
    sourceType: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__["PictureSourceType"].PHOTOLIBRARY,
    mediaType: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__["MediaType"].PICTURE,
    saveToPhotoAlbum: false,
    correctOrientation: true
};


/***/ }),

/***/ "./src/app/images/images.models.ts":
/*!*****************************************!*\
  !*** ./src/app/images/images.models.ts ***!
  \*****************************************/
/*! exports provided: FileRequests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileRequests", function() { return FileRequests; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");



var FileRequests;
(function (FileRequests) {
    let CreateFileUploadRequest;
    (function (CreateFileUploadRequest) {
        var UploadedFile = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["Files"].UploadedFile;
        let Request = class Request {
            constructor() {
                this.entityType = undefined;
                this.name = undefined;
                this.type = undefined;
                this.entity = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('entityType', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "entityType", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('name', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "name", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('type', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "type", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('entity', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "entity", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        CreateFileUploadRequest.Request = Request;
        let Response = class Response extends UploadedFile {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        CreateFileUploadRequest.Response = Response;
    })(CreateFileUploadRequest = FileRequests.CreateFileUploadRequest || (FileRequests.CreateFileUploadRequest = {}));
    let GetUploadedFileByEntityAndType;
    (function (GetUploadedFileByEntityAndType) {
        var UploadedFile = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["Files"].UploadedFile;
        let Request = class Request {
            constructor() {
                this.entityType = undefined;
                this.entity = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('entityType', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "entityType", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('entity', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "entity", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        GetUploadedFileByEntityAndType.Request = Request;
        let Response = class Response extends UploadedFile {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        GetUploadedFileByEntityAndType.Response = Response;
    })(GetUploadedFileByEntityAndType = FileRequests.GetUploadedFileByEntityAndType || (FileRequests.GetUploadedFileByEntityAndType = {}));
    let UploadFile;
    (function (UploadFile) {
        class Request {
        }
        UploadFile.Request = Request;
    })(UploadFile = FileRequests.UploadFile || (FileRequests.UploadFile = {}));
    let DeleteUploadedFile;
    (function (DeleteUploadedFile) {
        class Request {
        }
        DeleteUploadedFile.Request = Request;
    })(DeleteUploadedFile = FileRequests.DeleteUploadedFile || (FileRequests.DeleteUploadedFile = {}));
    let GetUploadedFile;
    (function (GetUploadedFile) {
        var UploadedFile = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["Files"].UploadedFile;
        let Request = class Request {
        };
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        GetUploadedFile.Request = Request;
        let Response = class Response extends UploadedFile {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        GetUploadedFile.Response = Response;
    })(GetUploadedFile = FileRequests.GetUploadedFile || (FileRequests.GetUploadedFile = {}));
})(FileRequests || (FileRequests = {}));


/***/ }),

/***/ "./src/app/images/images.module.ts":
/*!*****************************************!*\
  !*** ./src/app/images/images.module.ts ***!
  \*****************************************/
/*! exports provided: ImagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesModule", function() { return ImagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _images_components_images_by_entity_and_type_images_by_entity_and_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @images/components/images-by-entity-and-type/images-by-entity-and-type.component */ "./src/app/images/components/images-by-entity-and-type/images-by-entity-and-type.component.ts");
/* harmony import */ var _images_components_images_create_file_upload_request_images_create_file_upload_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @images/components/images-create-file-upload-request/images-create-file-upload-request.component */ "./src/app/images/components/images-create-file-upload-request/images-create-file-upload-request.component.ts");
/* harmony import */ var _images_components_images_select_photo_images_select_photo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @images/components/images-select-photo/images-select-photo.component */ "./src/app/images/components/images-select-photo/images-select-photo.component.ts");
/* harmony import */ var _images_components_images_select_file_images_select_file_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @images/components/images-select-file/images-select-file.component */ "./src/app/images/components/images-select-file/images-select-file.component.ts");
/* harmony import */ var _images_components_images_capture_photo_images_capture_photo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @images/components/images-capture-photo/images-capture-photo.component */ "./src/app/images/components/images-capture-photo/images-capture-photo.component.ts");
/* harmony import */ var _images_components_images_upload_file_images_upload_file_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @images/components/images-upload-file/images-upload-file.component */ "./src/app/images/components/images-upload-file/images-upload-file.component.ts");
/* harmony import */ var _images_components_images_delete_file_images_delete_file_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @images/components/images-delete-file/images-delete-file.component */ "./src/app/images/components/images-delete-file/images-delete-file.component.ts");
/* harmony import */ var _images_components_images_file_details_images_file_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @images/components/images-file-details/images-file-details.component */ "./src/app/images/components/images-file-details/images-file-details.component.ts");




// tslint:disable-next-line:max-line-length







let ImagesModule = class ImagesModule {
};
ImagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_images_components_images_by_entity_and_type_images_by_entity_and_type_component__WEBPACK_IMPORTED_MODULE_3__["ImagesByEntityAndTypeComponent"],
            _images_components_images_create_file_upload_request_images_create_file_upload_request_component__WEBPACK_IMPORTED_MODULE_4__["ImagesCreateFileUploadRequestComponent"],
            _images_components_images_select_photo_images_select_photo_component__WEBPACK_IMPORTED_MODULE_5__["ImagesSelectPhotoComponent"],
            _images_components_images_select_photo_images_select_photo_component__WEBPACK_IMPORTED_MODULE_5__["ImagesSelectPhotoNoTemplateComponent"],
            _images_components_images_select_file_images_select_file_component__WEBPACK_IMPORTED_MODULE_6__["ImagesSelectFileComponent"],
            _images_components_images_select_photo_images_select_photo_component__WEBPACK_IMPORTED_MODULE_5__["ImagesSelectPhotoComponent"],
            _images_components_images_capture_photo_images_capture_photo_component__WEBPACK_IMPORTED_MODULE_7__["ImagesCapturePhotoComponent"],
            _images_components_images_capture_photo_images_capture_photo_component__WEBPACK_IMPORTED_MODULE_7__["ImagesCapturePhotoNoTemplateComponent"],
            _images_components_images_upload_file_images_upload_file_component__WEBPACK_IMPORTED_MODULE_8__["ImagesUploadFileComponent"],
            _images_components_images_by_entity_and_type_images_by_entity_and_type_component__WEBPACK_IMPORTED_MODULE_3__["ImagesByEntityAndTypeSmComponent"],
            _images_components_images_by_entity_and_type_images_by_entity_and_type_component__WEBPACK_IMPORTED_MODULE_3__["ImagesByEntityAndTypeXlComponent"],
            _images_components_images_upload_file_images_upload_file_component__WEBPACK_IMPORTED_MODULE_8__["ImagesUploadFileWithPreviewComponent"],
            _images_components_images_delete_file_images_delete_file_component__WEBPACK_IMPORTED_MODULE_9__["ImagesDeleteFileComponent"],
            _images_components_images_file_details_images_file_details_component__WEBPACK_IMPORTED_MODULE_10__["ImagesFileDetailsComponent"],
            _images_components_images_file_details_images_file_details_component__WEBPACK_IMPORTED_MODULE_10__["ImagesFileDetailsSmComponent"],
            _images_components_images_file_details_images_file_details_component__WEBPACK_IMPORTED_MODULE_10__["ImagesFileDetailsXlComponent"],
            _images_components_images_select_file_images_select_file_component__WEBPACK_IMPORTED_MODULE_6__["ImagesSelectFileOnlyButtonComponent"],
            _images_components_images_by_entity_and_type_images_by_entity_and_type_component__WEBPACK_IMPORTED_MODULE_3__["ImagesByEntityAndTypeWithEditComponent"],
            _images_components_images_select_file_images_select_file_component__WEBPACK_IMPORTED_MODULE_6__["ImagesSelectFileNoTemplateComponent"],
            _images_components_images_upload_file_images_upload_file_component__WEBPACK_IMPORTED_MODULE_8__["ImagesUploadFileWithPreviewSmComponent"],
            _images_components_images_file_details_images_file_details_component__WEBPACK_IMPORTED_MODULE_10__["ImagesFileDetailsMdWithDeleteComponent"]
        ],
        imports: [
            _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]
        ],
        exports: [_images_components_images_by_entity_and_type_images_by_entity_and_type_component__WEBPACK_IMPORTED_MODULE_3__["ImagesByEntityAndTypeComponent"],
            _images_components_images_create_file_upload_request_images_create_file_upload_request_component__WEBPACK_IMPORTED_MODULE_4__["ImagesCreateFileUploadRequestComponent"],
            _images_components_images_select_photo_images_select_photo_component__WEBPACK_IMPORTED_MODULE_5__["ImagesSelectPhotoComponent"],
            _images_components_images_select_photo_images_select_photo_component__WEBPACK_IMPORTED_MODULE_5__["ImagesSelectPhotoNoTemplateComponent"],
            _images_components_images_select_file_images_select_file_component__WEBPACK_IMPORTED_MODULE_6__["ImagesSelectFileComponent"],
            _images_components_images_select_photo_images_select_photo_component__WEBPACK_IMPORTED_MODULE_5__["ImagesSelectPhotoComponent"],
            _images_components_images_capture_photo_images_capture_photo_component__WEBPACK_IMPORTED_MODULE_7__["ImagesCapturePhotoComponent"],
            _images_components_images_capture_photo_images_capture_photo_component__WEBPACK_IMPORTED_MODULE_7__["ImagesCapturePhotoNoTemplateComponent"],
            _images_components_images_upload_file_images_upload_file_component__WEBPACK_IMPORTED_MODULE_8__["ImagesUploadFileComponent"],
            _images_components_images_by_entity_and_type_images_by_entity_and_type_component__WEBPACK_IMPORTED_MODULE_3__["ImagesByEntityAndTypeSmComponent"],
            _images_components_images_by_entity_and_type_images_by_entity_and_type_component__WEBPACK_IMPORTED_MODULE_3__["ImagesByEntityAndTypeXlComponent"],
            _images_components_images_upload_file_images_upload_file_component__WEBPACK_IMPORTED_MODULE_8__["ImagesUploadFileWithPreviewComponent"],
            _images_components_images_delete_file_images_delete_file_component__WEBPACK_IMPORTED_MODULE_9__["ImagesDeleteFileComponent"],
            _images_components_images_file_details_images_file_details_component__WEBPACK_IMPORTED_MODULE_10__["ImagesFileDetailsComponent"],
            _images_components_images_file_details_images_file_details_component__WEBPACK_IMPORTED_MODULE_10__["ImagesFileDetailsSmComponent"],
            _images_components_images_file_details_images_file_details_component__WEBPACK_IMPORTED_MODULE_10__["ImagesFileDetailsXlComponent"],
            _images_components_images_select_file_images_select_file_component__WEBPACK_IMPORTED_MODULE_6__["ImagesSelectFileOnlyButtonComponent"],
            _images_components_images_by_entity_and_type_images_by_entity_and_type_component__WEBPACK_IMPORTED_MODULE_3__["ImagesByEntityAndTypeWithEditComponent"],
            _images_components_images_select_file_images_select_file_component__WEBPACK_IMPORTED_MODULE_6__["ImagesSelectFileNoTemplateComponent"],
            _images_components_images_upload_file_images_upload_file_component__WEBPACK_IMPORTED_MODULE_8__["ImagesUploadFileWithPreviewSmComponent"],
            _images_components_images_file_details_images_file_details_component__WEBPACK_IMPORTED_MODULE_10__["ImagesFileDetailsMdWithDeleteComponent"]
        ]
    })
], ImagesModule);



/***/ }),

/***/ "./src/app/images/images.service.ts":
/*!******************************************!*\
  !*** ./src/app/images/images.service.ts ***!
  \******************************************/
/*! exports provided: ImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesService", function() { return ImagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_http_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/http/rest.service */ "./src/app/core/http/rest.service.ts");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm2015/ngx-restangular.js");
/* harmony import */ var _images_images_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @images/images.constants */ "./src/app/images/images.constants.ts");





let ImagesService = class ImagesService extends _core_http_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] {
    constructor(restangular) {
        super(restangular);
        this.filesService = this.getService(_images_images_constants__WEBPACK_IMPORTED_MODULE_4__["ImagesConstants"].FILES_ENDPOINT);
    }
    getFileByEntityAndType(request) {
        return this.filesService.one('entities').customGET('', this.serialize(request));
    }
    createFileUploadRequest(request) {
        return this.filesService.one('requestUpload').customPOST(this.serialize(request));
    }
    deleteUploadedFile(request) {
        return this.filesService.one(request.fileId).customDELETE();
    }
    getUploadedFile(request) {
        return this.filesService.one(request.fileId).get();
    }
};
ImagesService.ctorParameters = () => [
    { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_3__["Restangular"] }
];
ImagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_3__["Restangular"]])
], ImagesService);



/***/ }),

/***/ "./src/app/quickblox/components/quickblox-attachment-details/quickblox-attachment-details.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-attachment-details/quickblox-attachment-details.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aWNrYmxveC9jb21wb25lbnRzL3F1aWNrYmxveC1hdHRhY2htZW50LWRldGFpbHMvcXVpY2tibG94LWF0dGFjaG1lbnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/quickblox/components/quickblox-attachment-details/quickblox-attachment-details.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-attachment-details/quickblox-attachment-details.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: QuickbloxAttachmentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxAttachmentDetailsComponent", function() { return QuickbloxAttachmentDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @quickblox/quickblox.models */ "./src/app/quickblox/quickblox.models.ts");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @quickblox/quickblox.service */ "./src/app/quickblox/quickblox.service.ts");





var Attachment = _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_2__["QuickbloxObjects"].Attachment;
let QuickbloxAttachmentDetailsComponent = class QuickbloxAttachmentDetailsComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"] {
    constructor(quickbloxService, injector) {
        super(injector);
        this.quickbloxService = quickbloxService;
    }
    initializeComponent() {
        this.getUploadedFile(this.createRequestData());
    }
    createRequestData(attachment) {
        return attachment || this.attachment;
    }
    getUploadedFile(attachement) {
        this.quickbloxService.getFilePrivateUrl(attachement)
            .subscribe(value => {
            this.uploaded_file = value;
        });
    }
};
QuickbloxAttachmentDetailsComponent.ctorParameters = () => [
    { type: _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_4__["QuickbloxService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Attachment)
], QuickbloxAttachmentDetailsComponent.prototype, "attachment", void 0);
QuickbloxAttachmentDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'quickblox-attachment-details',
        template: __webpack_require__(/*! raw-loader!./quickblox-attachment-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-attachment-details/quickblox-attachment-details.component.html"),
        styles: [__webpack_require__(/*! ./quickblox-attachment-details.component.scss */ "./src/app/quickblox/components/quickblox-attachment-details/quickblox-attachment-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_4__["QuickbloxService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], QuickbloxAttachmentDetailsComponent);



/***/ }),

/***/ "./src/app/quickblox/components/quickblox-chat-disconnect/quickblox-chat-disconnect.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-chat-disconnect/quickblox-chat-disconnect.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aWNrYmxveC9jb21wb25lbnRzL3F1aWNrYmxveC1jaGF0LWRpc2Nvbm5lY3QvcXVpY2tibG94LWNoYXQtZGlzY29ubmVjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/quickblox/components/quickblox-chat-disconnect/quickblox-chat-disconnect.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-chat-disconnect/quickblox-chat-disconnect.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: QuickbloxChatDisconnectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxChatDisconnectComponent", function() { return QuickbloxChatDisconnectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @quickblox/quickblox.service */ "./src/app/quickblox/quickblox.service.ts");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");




let QuickbloxChatDisconnectComponent = class QuickbloxChatDisconnectComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"] {
    constructor(quickbloxService, injector) {
        super(injector);
        this.quickbloxService = quickbloxService;
        this.chatDisconnected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
    }
    disconnectChat() {
        this.quickbloxService.chatDisconnect()
            .subscribe(success => {
            this.chatDisconnected.emit(true);
        });
    }
};
QuickbloxChatDisconnectComponent.ctorParameters = () => [
    { type: _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_2__["QuickbloxService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QuickbloxChatDisconnectComponent.prototype, "chatDisconnected", void 0);
QuickbloxChatDisconnectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'quickblox-chat-disconnect',
        template: __webpack_require__(/*! raw-loader!./quickblox-chat-disconnect.component.html */ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-chat-disconnect/quickblox-chat-disconnect.component.html"),
        styles: [__webpack_require__(/*! ./quickblox-chat-disconnect.component.scss */ "./src/app/quickblox/components/quickblox-chat-disconnect/quickblox-chat-disconnect.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_2__["QuickbloxService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], QuickbloxChatDisconnectComponent);



/***/ }),

/***/ "./src/app/quickblox/components/quickblox-create-and-upload-file/quickblox-create-and-upload-file.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-create-and-upload-file/quickblox-create-and-upload-file.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aWNrYmxveC9jb21wb25lbnRzL3F1aWNrYmxveC1jcmVhdGUtYW5kLXVwbG9hZC1maWxlL3F1aWNrYmxveC1jcmVhdGUtYW5kLXVwbG9hZC1maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/quickblox/components/quickblox-create-and-upload-file/quickblox-create-and-upload-file.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-create-and-upload-file/quickblox-create-and-upload-file.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: QuickbloxCreateAndUploadFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxCreateAndUploadFileComponent", function() { return QuickbloxCreateAndUploadFileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @quickblox/quickblox.models */ "./src/app/quickblox/quickblox.models.ts");
/* harmony import */ var _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @quickblox/quickblox.service */ "./src/app/quickblox/quickblox.service.ts");
/* harmony import */ var _images_components_images_select_file_images_select_file_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @images/components/images-select-file/images-select-file.component */ "./src/app/images/components/images-select-file/images-select-file.component.ts");






var CreateAndUploadFile = _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_3__["QuickbloxRequests"].CreateAndUploadFile;
let QuickbloxCreateAndUploadFileComponent = class QuickbloxCreateAndUploadFileComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(quickbloxService, injector) {
        super(injector);
        this.quickbloxService = quickbloxService;
        this.fileUploaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
    }
    resetSelectedFile() {
        this.images_select_file_sm.selected_file = undefined;
    }
    createRequestData(file, is_public) {
        const request = new CreateAndUploadFile.Request();
        const fileData = (file || this.file).file;
        request.file = (file || this.file).blob;
        request.name = fileData.name;
        request.size = fileData.size;
        request.type = fileData.type;
        request.isPublic = true;
        return request;
    }
    createAndUploadFile(request) {
        this.create_and_upload_file$ = this.quickbloxService.createAndUploadFile(request)
            .subscribe(value => {
            this.fileUploaded.emit(value);
        });
    }
};
QuickbloxCreateAndUploadFileComponent.ctorParameters = () => [
    { type: _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_4__["QuickbloxService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QuickbloxCreateAndUploadFileComponent.prototype, "file", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], QuickbloxCreateAndUploadFileComponent.prototype, "isPublic", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QuickbloxCreateAndUploadFileComponent.prototype, "fileUploaded", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_images_components_images_select_file_images_select_file_component__WEBPACK_IMPORTED_MODULE_5__["ImagesSelectFileComponent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _images_components_images_select_file_images_select_file_component__WEBPACK_IMPORTED_MODULE_5__["ImagesSelectFileComponent"])
], QuickbloxCreateAndUploadFileComponent.prototype, "images_select_file_sm", void 0);
QuickbloxCreateAndUploadFileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'quickblox-create-and-upload-file',
        template: __webpack_require__(/*! raw-loader!./quickblox-create-and-upload-file.component.html */ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-create-and-upload-file/quickblox-create-and-upload-file.component.html"),
        styles: [__webpack_require__(/*! ./quickblox-create-and-upload-file.component.scss */ "./src/app/quickblox/components/quickblox-create-and-upload-file/quickblox-create-and-upload-file.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_4__["QuickbloxService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], QuickbloxCreateAndUploadFileComponent);



/***/ }),

/***/ "./src/app/quickblox/components/quickblox-create-message-xml/quickblox-create-message-xml.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-create-message-xml/quickblox-create-message-xml.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aWNrYmxveC9jb21wb25lbnRzL3F1aWNrYmxveC1jcmVhdGUtbWVzc2FnZS14bWwvcXVpY2tibG94LWNyZWF0ZS1tZXNzYWdlLXhtbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/quickblox/components/quickblox-create-message-xml/quickblox-create-message-xml.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-create-message-xml/quickblox-create-message-xml.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: QuickbloxCreateMessageXmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxCreateMessageXmlComponent", function() { return QuickbloxCreateMessageXmlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @quickblox/quickblox.service */ "./src/app/quickblox/quickblox.service.ts");
/* harmony import */ var _core_components_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/form.component */ "./src/app/core/components/form.component.ts");
/* harmony import */ var _quickblox_quickblox_forms_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @quickblox/quickblox.forms.models */ "./src/app/quickblox/quickblox.forms.models.ts");
/* harmony import */ var _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @quickblox/quickblox.models */ "./src/app/quickblox/quickblox.models.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");
/* harmony import */ var _quickblox_quickblox_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @quickblox/quickblox.pipe */ "./src/app/quickblox/quickblox.pipe.ts");
/* harmony import */ var _quickblox_components_quickblox_create_and_upload_file_quickblox_create_and_upload_file_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @quickblox/components/quickblox-create-and-upload-file/quickblox-create-and-upload-file.component */ "./src/app/quickblox/components/quickblox-create-and-upload-file/quickblox-create-and-upload-file.component.ts");








// tslint:disable-next-line:max-line-length

var CreateQuickbloxMessageExtension = _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_5__["QuickbloxRequests"].CreateQuickbloxMessageXml.CreateQuickbloxMessageExtension;
var CreateQuickbloxMessageXml = _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_5__["QuickbloxRequests"].CreateQuickbloxMessageXml;
let QuickbloxCreateMessageXmlComponent = class QuickbloxCreateMessageXmlComponent extends _core_components_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"] {
    constructor(quickbloxService, injector) {
        super(injector);
        this.quickbloxService = quickbloxService;
        this.quickbloxMessageCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.quickbloxMessageCreateError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.quickblox_create_and_upload_file_response_to_attachment_pipe = new _quickblox_quickblox_pipe__WEBPACK_IMPORTED_MODULE_7__["QuickbloxCreateAndUploadFileResponseToAttachmentPipe"]();
        this.quickbloxMessageCreated.subscribe(value => {
            this.resetForm();
            // TODO: This is temporary
            this.attachments = [];
            this.quickblox_create_and_upload.resetSelectedFile();
        });
    }
    initializeComponent() {
    }
    afterInitializeComponent() {
    }
    getFormModel() {
        return _quickblox_quickblox_forms_models__WEBPACK_IMPORTED_MODULE_4__["CREATE_MESSAGE_MODEL"];
    }
    createRequestData(dialog_id, body, type, attachments) {
        const request = new CreateQuickbloxMessageXml.Request();
        request.dialog_id = dialog_id || this.dialogId;
        request.body = body || this.getInputModelValueAsString('message');
        request.type = type || this.type || 'groupchat';
        const extension = new CreateQuickbloxMessageExtension();
        extension.save_to_history = 1;
        extension.attachments = _core_commons_service__WEBPACK_IMPORTED_MODULE_6__["CommonsService"].convertToArray(attachments || this.attachments);
        request.extension = extension;
        request.markable = 1;
        request.send_to_chat = 1;
        return request;
    }
    createMessage(request) {
        this.quickbloxService.createMessageXml(request)
            .subscribe(message_id => {
            this.quickbloxMessageCreated.emit(message_id);
        }, error => {
            this.quickbloxMessageCreateError.emit(error);
        });
    }
    onBlur() {
        this.quickbloxService.setIsStopTypingStatus(this.dialogId);
    }
    onKeyDown($event) {
    }
    onKeyUp($event) {
        if (!this.getInputModelValueAsString('message')) {
            this.quickbloxService.setIsStopTypingStatus(this.dialogId);
        }
        else {
            this.quickbloxService.setIsTypingStatus(this.dialogId);
        }
    }
};
QuickbloxCreateMessageXmlComponent.ctorParameters = () => [
    { type: _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_2__["QuickbloxService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], QuickbloxCreateMessageXmlComponent.prototype, "dialogId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], QuickbloxCreateMessageXmlComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QuickbloxCreateMessageXmlComponent.prototype, "attachments", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QuickbloxCreateMessageXmlComponent.prototype, "quickbloxMessageCreated", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QuickbloxCreateMessageXmlComponent.prototype, "quickbloxMessageCreateError", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_quickblox_components_quickblox_create_and_upload_file_quickblox_create_and_upload_file_component__WEBPACK_IMPORTED_MODULE_8__["QuickbloxCreateAndUploadFileComponent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _quickblox_components_quickblox_create_and_upload_file_quickblox_create_and_upload_file_component__WEBPACK_IMPORTED_MODULE_8__["QuickbloxCreateAndUploadFileComponent"])
], QuickbloxCreateMessageXmlComponent.prototype, "quickblox_create_and_upload", void 0);
QuickbloxCreateMessageXmlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'quickblox-create-message-xml',
        template: __webpack_require__(/*! raw-loader!./quickblox-create-message-xml.component.html */ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-create-message-xml/quickblox-create-message-xml.component.html"),
        styles: [__webpack_require__(/*! ./quickblox-create-message-xml.component.scss */ "./src/app/quickblox/components/quickblox-create-message-xml/quickblox-create-message-xml.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_2__["QuickbloxService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], QuickbloxCreateMessageXmlComponent);



/***/ }),

/***/ "./src/app/quickblox/components/quickblox-create-message/quickblox-create-message.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-create-message/quickblox-create-message.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aWNrYmxveC9jb21wb25lbnRzL3F1aWNrYmxveC1jcmVhdGUtbWVzc2FnZS9xdWlja2Jsb3gtY3JlYXRlLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/quickblox/components/quickblox-create-message/quickblox-create-message.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-create-message/quickblox-create-message.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: QuickbloxCreateMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxCreateMessageComponent", function() { return QuickbloxCreateMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _quickblox_quickblox_forms_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @quickblox/quickblox.forms.models */ "./src/app/quickblox/quickblox.forms.models.ts");
/* harmony import */ var _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @quickblox/quickblox.service */ "./src/app/quickblox/quickblox.service.ts");
/* harmony import */ var _core_components_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/form.component */ "./src/app/core/components/form.component.ts");
/* harmony import */ var _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @quickblox/quickblox.models */ "./src/app/quickblox/quickblox.models.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");







var CreateQuickbloxMessage = _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_5__["QuickbloxRequests"].CreateQuickbloxMessage;
let QuickbloxCreateMessageComponent = class QuickbloxCreateMessageComponent extends _core_components_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"] {
    constructor(quickbloxService, injector) {
        super(injector);
        this.quickbloxService = quickbloxService;
        this.quickbloxMessageCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.quickbloxMessageCreateError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.qiukbloxTypingListener = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
    }
    afterInitializeComponent() {
    }
    getFormModel() {
        return _quickblox_quickblox_forms_models__WEBPACK_IMPORTED_MODULE_2__["CREATE_MESSAGE_MODEL"];
    }
    createRequestData(chat_dialog_id, message, send_to_chat, markable, save_to_history) {
        const request = new CreateQuickbloxMessage.Request();
        request.chat_dialog_id = chat_dialog_id || this.chatDialogId;
        request.message = message || this.getInputModelValueAsString('message');
        request.send_to_chat = send_to_chat || this.sendToChat || 1; // default 1
        request.markable = markable || this.markable || 1; // default 1
        request.save_to_history = save_to_history || this.saveToHistory || 1; // default 1
        return request;
    }
    createMessage(request) {
        this.quickbloxService.createMessage(request)
            .pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_6__["CommonsService"].deserializeMap(CreateQuickbloxMessage.Response))
            .subscribe(message => {
            this.quickbloxMessageCreated.emit(message);
        }, error => {
            this.quickbloxMessageCreateError.emit(error);
        });
    }
};
QuickbloxCreateMessageComponent.ctorParameters = () => [
    { type: _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_3__["QuickbloxService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], QuickbloxCreateMessageComponent.prototype, "message", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], QuickbloxCreateMessageComponent.prototype, "chatDialogId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], QuickbloxCreateMessageComponent.prototype, "sendToChat", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], QuickbloxCreateMessageComponent.prototype, "saveToHistory", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], QuickbloxCreateMessageComponent.prototype, "markable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QuickbloxCreateMessageComponent.prototype, "quickbloxMessageCreated", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QuickbloxCreateMessageComponent.prototype, "quickbloxMessageCreateError", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QuickbloxCreateMessageComponent.prototype, "qiukbloxTypingListener", void 0);
QuickbloxCreateMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'quickblox-create-message',
        template: __webpack_require__(/*! raw-loader!./quickblox-create-message.component.html */ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-create-message/quickblox-create-message.component.html"),
        styles: [__webpack_require__(/*! ./quickblox-create-message.component.scss */ "./src/app/quickblox/components/quickblox-create-message/quickblox-create-message.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_3__["QuickbloxService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], QuickbloxCreateMessageComponent);



/***/ }),

/***/ "./src/app/quickblox/components/quickblox-get-dialog-item/quickblox-get-dialog-item.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-get-dialog-item/quickblox-get-dialog-item.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aWNrYmxveC9jb21wb25lbnRzL3F1aWNrYmxveC1nZXQtZGlhbG9nLWl0ZW0vcXVpY2tibG94LWdldC1kaWFsb2ctaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/quickblox/components/quickblox-get-dialog-item/quickblox-get-dialog-item.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-get-dialog-item/quickblox-get-dialog-item.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: QuickbloxGetDialogItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxGetDialogItemComponent", function() { return QuickbloxGetDialogItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @quickblox/quickblox.models */ "./src/app/quickblox/quickblox.models.ts");




var DialogItem = _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_3__["QuickbloxRequests"].ListDialogs.DialogItem;
let QuickbloxGetDialogItemComponent = class QuickbloxGetDialogItemComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(injector) {
        super(injector);
    }
    initializeComponent() {
    }
};
QuickbloxGetDialogItemComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", DialogItem)
], QuickbloxGetDialogItemComponent.prototype, "dialogItem", void 0);
QuickbloxGetDialogItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'quickblox-get-dialog-item',
        template: __webpack_require__(/*! raw-loader!./quickblox-get-dialog-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-get-dialog-item/quickblox-get-dialog-item.component.html"),
        styles: [__webpack_require__(/*! ./quickblox-get-dialog-item.component.scss */ "./src/app/quickblox/components/quickblox-get-dialog-item/quickblox-get-dialog-item.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], QuickbloxGetDialogItemComponent);



/***/ }),

/***/ "./src/app/quickblox/components/quickblox-get-message-list-and-listener/quickblox-get-message-list-and-listener.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-get-message-list-and-listener/quickblox-get-message-list-and-listener.component.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aWNrYmxveC9jb21wb25lbnRzL3F1aWNrYmxveC1nZXQtbWVzc2FnZS1saXN0LWFuZC1saXN0ZW5lci9xdWlja2Jsb3gtZ2V0LW1lc3NhZ2UtbGlzdC1hbmQtbGlzdGVuZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/quickblox/components/quickblox-get-message-list-and-listener/quickblox-get-message-list-and-listener.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-get-message-list-and-listener/quickblox-get-message-list-and-listener.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: QuickbloxGetMessageListAndListenerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxGetMessageListAndListenerComponent", function() { return QuickbloxGetMessageListAndListenerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @quickblox/quickblox.models */ "./src/app/quickblox/quickblox.models.ts");




var DialogItem = _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_3__["QuickbloxRequests"].ListDialogs.DialogItem;
let QuickbloxGetMessageListAndListenerComponent = class QuickbloxGetMessageListAndListenerComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(injector) {
        super(injector);
    }
    initializeComponent() {
    }
};
QuickbloxGetMessageListAndListenerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", DialogItem)
], QuickbloxGetMessageListAndListenerComponent.prototype, "dialogItem", void 0);
QuickbloxGetMessageListAndListenerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'quickblox-get-message-list-and-listener',
        template: __webpack_require__(/*! raw-loader!./quickblox-get-message-list-and-listener.component.html */ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-get-message-list-and-listener/quickblox-get-message-list-and-listener.component.html"),
        styles: [__webpack_require__(/*! ./quickblox-get-message-list-and-listener.component.scss */ "./src/app/quickblox/components/quickblox-get-message-list-and-listener/quickblox-get-message-list-and-listener.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], QuickbloxGetMessageListAndListenerComponent);



/***/ }),

/***/ "./src/app/quickblox/components/quickblox-get-message-list/quickblox-get-message-list.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-get-message-list/quickblox-get-message-list.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aWNrYmxveC9jb21wb25lbnRzL3F1aWNrYmxveC1nZXQtbWVzc2FnZS1saXN0L3F1aWNrYmxveC1nZXQtbWVzc2FnZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/quickblox/components/quickblox-get-message-list/quickblox-get-message-list.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-get-message-list/quickblox-get-message-list.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: QuickbloxGetMessageListComponent, QuickbloxGetMessageListNoTemplateComponent, QuickbloxGetMessageListNoTemplateNoInitializeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxGetMessageListComponent", function() { return QuickbloxGetMessageListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxGetMessageListNoTemplateComponent", function() { return QuickbloxGetMessageListNoTemplateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxGetMessageListNoTemplateNoInitializeComponent", function() { return QuickbloxGetMessageListNoTemplateNoInitializeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @quickblox/quickblox.models */ "./src/app/quickblox/quickblox.models.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");
/* harmony import */ var _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @quickblox/quickblox.service */ "./src/app/quickblox/quickblox.service.ts");






var ListMessages = _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_3__["QuickbloxRequests"].ListMessages;
let QuickbloxGetMessageListComponent = class QuickbloxGetMessageListComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(quickbloxService, injector) {
        super(injector);
        this.quickbloxService = quickbloxService;
        this.quickbloxMessagesReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.quickbloxMessageAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.quickbloxMessageAdded.subscribe(message => {
            this.addMessage(message);
        });
    }
    initializeComponent() {
        this.getMessages(this.createRequestData());
    }
    createRequestData(id, chat_dialog_id, sort_desc, sort_asc, date_sent, updated_at, sender_id, recipient_id, limit, skip) {
        const request = new ListMessages.Request();
        request.id = id || this.id;
        request.chat_dialog_id = chat_dialog_id || this.chatDialogId;
        request.sort_desc = (sort_desc || this.sortDesc) ? 'date_sent' : undefined;
        request.sort_asc = (sort_asc || this.sortAsc) ? 'date_sent' : undefined;
        request.date_sent = _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].getTimestampFromMoment(_core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].getMomentFromDateTimeString(date_sent || this.dateSent));
        request.updated_at = _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].getMomentFromDateTimeString(updated_at || this.updatedAt);
        request.sender_id = sender_id || this.senderId;
        request.recipient_id = recipient_id || this.recipientId;
        request.limit = limit || this.limit;
        request.skip = skip || this.skip;
        return request;
    }
    getMessages(request) {
        this.quickbloxService.getListMessage(request)
            .pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].deserializeMap(ListMessages.Response))
            .subscribe(list_messages => {
            this.quickblox_messages = list_messages.items;
            this.quickbloxMessagesReceived.emit(list_messages.items);
        });
    }
    addMessage(messages) {
        const sortFunciton = (a, b) => {
            let multiplier = 1;
            if (!this.sortAsc) {
                multiplier = -1;
            }
            return (multiplier) * (a.date_sent.diff(b.date_sent));
        };
        let newMessages = this.quickblox_messages;
        newMessages = newMessages.concat(messages);
        newMessages.sort(sortFunciton);
        this.quickblox_messages = newMessages;
        this.quickbloxMessagesReceived.emit(newMessages);
    }
    deleteMessage(messages) {
        // TODO: Complete implementation
    }
};
QuickbloxGetMessageListComponent.ctorParameters = () => [
    { type: _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_5__["QuickbloxService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], QuickbloxGetMessageListComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], QuickbloxGetMessageListComponent.prototype, "chatDialogId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], QuickbloxGetMessageListComponent.prototype, "sortDesc", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], QuickbloxGetMessageListComponent.prototype, "sortAsc", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], QuickbloxGetMessageListComponent.prototype, "dateSent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], QuickbloxGetMessageListComponent.prototype, "updatedAt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], QuickbloxGetMessageListComponent.prototype, "senderId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], QuickbloxGetMessageListComponent.prototype, "recipientId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], QuickbloxGetMessageListComponent.prototype, "limit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], QuickbloxGetMessageListComponent.prototype, "skip", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QuickbloxGetMessageListComponent.prototype, "quickbloxMessagesReceived", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QuickbloxGetMessageListComponent.prototype, "quickbloxMessageAdded", void 0);
QuickbloxGetMessageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'quickblox-get-message-list',
        template: __webpack_require__(/*! raw-loader!./quickblox-get-message-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-get-message-list/quickblox-get-message-list.component.html"),
        styles: [__webpack_require__(/*! ./quickblox-get-message-list.component.scss */ "./src/app/quickblox/components/quickblox-get-message-list/quickblox-get-message-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_5__["QuickbloxService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], QuickbloxGetMessageListComponent);

let QuickbloxGetMessageListNoTemplateComponent = class QuickbloxGetMessageListNoTemplateComponent extends QuickbloxGetMessageListComponent {
};
QuickbloxGetMessageListNoTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'quickblox-get-message-list-no-template',
        template: '',
        styles: [__webpack_require__(/*! ./quickblox-get-message-list.component.scss */ "./src/app/quickblox/components/quickblox-get-message-list/quickblox-get-message-list.component.scss")]
    })
], QuickbloxGetMessageListNoTemplateComponent);

let QuickbloxGetMessageListNoTemplateNoInitializeComponent = class QuickbloxGetMessageListNoTemplateNoInitializeComponent extends QuickbloxGetMessageListComponent {
    initializeComponent() {
    }
};
QuickbloxGetMessageListNoTemplateNoInitializeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'quickblox-get-message-list-no-template-no-initialize',
        template: '',
        styles: [__webpack_require__(/*! ./quickblox-get-message-list.component.scss */ "./src/app/quickblox/components/quickblox-get-message-list/quickblox-get-message-list.component.scss")]
    })
], QuickbloxGetMessageListNoTemplateNoInitializeComponent);



/***/ }),

/***/ "./src/app/quickblox/components/quickblox-get-online-users-for-dialog/quickblox-get-online-users-for-dialog.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-get-online-users-for-dialog/quickblox-get-online-users-for-dialog.component.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aWNrYmxveC9jb21wb25lbnRzL3F1aWNrYmxveC1nZXQtb25saW5lLXVzZXJzLWZvci1kaWFsb2cvcXVpY2tibG94LWdldC1vbmxpbmUtdXNlcnMtZm9yLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/quickblox/components/quickblox-get-online-users-for-dialog/quickblox-get-online-users-for-dialog.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-get-online-users-for-dialog/quickblox-get-online-users-for-dialog.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: QuickbloxGetOnlineUsersForDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxGetOnlineUsersForDialogComponent", function() { return QuickbloxGetOnlineUsersForDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @quickblox/quickblox.service */ "./src/app/quickblox/quickblox.service.ts");
/* harmony import */ var _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @quickblox/quickblox.models */ "./src/app/quickblox/quickblox.models.ts");





var GetOnlineUsers = _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_4__["QuickbloxRequests"].GetOnlineUsers;
let QuickbloxGetOnlineUsersForDialogComponent = class QuickbloxGetOnlineUsersForDialogComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(quickbloxService, injector) {
        super(injector);
        this.quickbloxService = quickbloxService;
        this.onReceivingOnlineUsers = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
        // this.getOnlineUsers(this.createRequestData());
    }
    createRequestData(dialog_id) {
        const request = new GetOnlineUsers.Request();
        request.dailog_id = dialog_id || this.dialogId;
        return request;
    }
    getOnlineUsers(request) {
        this.quickbloxService.getOnlineUsers(request)
            .subscribe(result => {
            this.onReceivingOnlineUsers.emit(true);
        }, error => {
            this.onReceivingOnlineUsers.emit(error);
        });
    }
};
QuickbloxGetOnlineUsersForDialogComponent.ctorParameters = () => [
    { type: _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_3__["QuickbloxService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], QuickbloxGetOnlineUsersForDialogComponent.prototype, "dialogId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QuickbloxGetOnlineUsersForDialogComponent.prototype, "onReceivingOnlineUsers", void 0);
QuickbloxGetOnlineUsersForDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'quickblox-get-online-users-for-dialog',
        template: __webpack_require__(/*! raw-loader!./quickblox-get-online-users-for-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-get-online-users-for-dialog/quickblox-get-online-users-for-dialog.component.html"),
        styles: [__webpack_require__(/*! ./quickblox-get-online-users-for-dialog.component.scss */ "./src/app/quickblox/components/quickblox-get-online-users-for-dialog/quickblox-get-online-users-for-dialog.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_3__["QuickbloxService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], QuickbloxGetOnlineUsersForDialogComponent);



/***/ }),

/***/ "./src/app/quickblox/components/quickblox-get-users/quickblox-get-users.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-get-users/quickblox-get-users.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aWNrYmxveC9jb21wb25lbnRzL3F1aWNrYmxveC1nZXQtdXNlcnMvcXVpY2tibG94LWdldC11c2Vycy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/quickblox/components/quickblox-get-users/quickblox-get-users.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-get-users/quickblox-get-users.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: QuickbloxGetUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxGetUsersComponent", function() { return QuickbloxGetUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @quickblox/quickblox.service */ "./src/app/quickblox/quickblox.service.ts");
/* harmony import */ var _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @quickblox/quickblox.models */ "./src/app/quickblox/quickblox.models.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");






var GetUsers = _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_4__["QuickbloxRequests"].GetUsers;
let QuickbloxGetUsersComponent = class QuickbloxGetUsersComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(quickbloxService, injector) {
        super(injector);
        this.quickbloxService = quickbloxService;
        this.userDetailsReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
        this.getUsers(this.createRequestData());
    }
    createRequestData(email, id) {
        const request = new GetUsers.Request();
        request.email = email || this.email;
        request.id = id || this.id;
        return request;
    }
    getUsers(request) {
        this.quickbloxService.getUsers(request)
            .pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_5__["CommonsService"].deserializeMap(GetUsers.Response))
            .subscribe(user_details => {
            this.user_details = user_details;
            this.userDetailsReceived.emit(user_details);
        });
    }
};
QuickbloxGetUsersComponent.ctorParameters = () => [
    { type: _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_3__["QuickbloxService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], QuickbloxGetUsersComponent.prototype, "email", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], QuickbloxGetUsersComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QuickbloxGetUsersComponent.prototype, "userDetailsReceived", void 0);
QuickbloxGetUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'quickblox-get-users',
        template: __webpack_require__(/*! raw-loader!./quickblox-get-users.component.html */ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-get-users/quickblox-get-users.component.html"),
        styles: [__webpack_require__(/*! ./quickblox-get-users.component.scss */ "./src/app/quickblox/components/quickblox-get-users/quickblox-get-users.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_3__["QuickbloxService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], QuickbloxGetUsersComponent);



/***/ }),

/***/ "./src/app/quickblox/components/quickblox-list-dialogs/quickblox-list-dialogs.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-list-dialogs/quickblox-list-dialogs.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aWNrYmxveC9jb21wb25lbnRzL3F1aWNrYmxveC1saXN0LWRpYWxvZ3MvcXVpY2tibG94LWxpc3QtZGlhbG9ncy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/quickblox/components/quickblox-list-dialogs/quickblox-list-dialogs.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-list-dialogs/quickblox-list-dialogs.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: QuickbloxListDialogsComponent, QuickbloxListDialogsWithLastMessageComponent, QuickbloxListDialogsNoTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxListDialogsComponent", function() { return QuickbloxListDialogsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxListDialogsWithLastMessageComponent", function() { return QuickbloxListDialogsWithLastMessageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxListDialogsNoTemplateComponent", function() { return QuickbloxListDialogsNoTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @quickblox/quickblox.service */ "./src/app/quickblox/quickblox.service.ts");
/* harmony import */ var _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @quickblox/quickblox.models */ "./src/app/quickblox/quickblox.models.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");






var ListDialogs = _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_4__["QuickbloxRequests"].ListDialogs;
let QuickbloxListDialogsComponent = class QuickbloxListDialogsComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(quickbloxService, injector) {
        super(injector);
        this.quickbloxService = quickbloxService;
        this.quickbloxDialogsRecieved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
        this.listDialogs(this.createRequestData());
    }
    createRequestData(id, privacy_type, name) {
        const request = new ListDialogs.Request();
        request.id = id || this.dialogId;
        request.privacy_type = privacy_type || this.privacyType;
        request.name = name || this.name;
        return request;
    }
    listDialogs(request) {
        this.quickbloxService.listDialogs(request)
            .pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_5__["CommonsService"].deserializeMap(ListDialogs.Response))
            .subscribe(quickblox_dialogs => {
            this.quickblox_dialogs = quickblox_dialogs;
            this.quickbloxDialogsRecieved.emit(quickblox_dialogs);
        });
    }
};
QuickbloxListDialogsComponent.ctorParameters = () => [
    { type: _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_3__["QuickbloxService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], QuickbloxListDialogsComponent.prototype, "dialogId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], QuickbloxListDialogsComponent.prototype, "privacyType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], QuickbloxListDialogsComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QuickbloxListDialogsComponent.prototype, "quickbloxDialogsRecieved", void 0);
QuickbloxListDialogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'quickblox-list-dialogs',
        template: __webpack_require__(/*! raw-loader!./quickblox-list-dialogs.component.html */ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-list-dialogs/quickblox-list-dialogs.component.html"),
        styles: [__webpack_require__(/*! ./quickblox-list-dialogs.component.scss */ "./src/app/quickblox/components/quickblox-list-dialogs/quickblox-list-dialogs.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_3__["QuickbloxService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], QuickbloxListDialogsComponent);

let QuickbloxListDialogsWithLastMessageComponent = class QuickbloxListDialogsWithLastMessageComponent extends QuickbloxListDialogsComponent {
};
QuickbloxListDialogsWithLastMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'quickblox-list-dialogs-with-last-message',
        template: __webpack_require__(/*! raw-loader!./quickblox-list-dialogs-with-last-message.component.html */ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-list-dialogs/quickblox-list-dialogs-with-last-message.component.html"),
        styles: [__webpack_require__(/*! ./quickblox-list-dialogs.component.scss */ "./src/app/quickblox/components/quickblox-list-dialogs/quickblox-list-dialogs.component.scss")]
    })
], QuickbloxListDialogsWithLastMessageComponent);

let QuickbloxListDialogsNoTemplateComponent = class QuickbloxListDialogsNoTemplateComponent extends QuickbloxListDialogsComponent {
};
QuickbloxListDialogsNoTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'quickblox-list-dialogs-no-template',
        template: __webpack_require__(/*! raw-loader!./quickblox-list-dialogs-no-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-list-dialogs/quickblox-list-dialogs-no-template.component.html"),
        styles: [__webpack_require__(/*! ./quickblox-list-dialogs.component.scss */ "./src/app/quickblox/components/quickblox-list-dialogs/quickblox-list-dialogs.component.scss")]
    })
], QuickbloxListDialogsNoTemplateComponent);



/***/ }),

/***/ "./src/app/quickblox/components/quickblox-message-create-and-listener/quickblox-message-create-and-listener.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-message-create-and-listener/quickblox-message-create-and-listener.component.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aWNrYmxveC9jb21wb25lbnRzL3F1aWNrYmxveC1tZXNzYWdlLWNyZWF0ZS1hbmQtbGlzdGVuZXIvcXVpY2tibG94LW1lc3NhZ2UtY3JlYXRlLWFuZC1saXN0ZW5lci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/quickblox/components/quickblox-message-create-and-listener/quickblox-message-create-and-listener.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-message-create-and-listener/quickblox-message-create-and-listener.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: QuickbloxMessageCreateAndListenerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxMessageCreateAndListenerComponent", function() { return QuickbloxMessageCreateAndListenerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @quickblox/quickblox.service */ "./src/app/quickblox/quickblox.service.ts");




let QuickbloxMessageCreateAndListenerComponent = class QuickbloxMessageCreateAndListenerComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(quickbloxService, injector) {
        super(injector);
        this.quickbloxService = quickbloxService;
        this.typingListener = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.typingListener.subscribe(event => {
            this.onTyping(event);
        });
    }
    initializeComponent() {
    }
    onTyping(event) {
        this.typingListenerResponse = event;
    }
};
QuickbloxMessageCreateAndListenerComponent.ctorParameters = () => [
    { type: _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_3__["QuickbloxService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], QuickbloxMessageCreateAndListenerComponent.prototype, "dialogId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], QuickbloxMessageCreateAndListenerComponent.prototype, "chatDialogJid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QuickbloxMessageCreateAndListenerComponent.prototype, "typingListener", void 0);
QuickbloxMessageCreateAndListenerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'quickblox-message-create-and-listener',
        template: __webpack_require__(/*! raw-loader!./quickblox-message-create-and-listener.component.html */ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-message-create-and-listener/quickblox-message-create-and-listener.component.html"),
        styles: [__webpack_require__(/*! ./quickblox-message-create-and-listener.component.scss */ "./src/app/quickblox/components/quickblox-message-create-and-listener/quickblox-message-create-and-listener.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_3__["QuickbloxService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], QuickbloxMessageCreateAndListenerComponent);



/***/ }),

/***/ "./src/app/quickblox/components/quickblox-message-delete/quickblox-message-delete.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-message-delete/quickblox-message-delete.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aWNrYmxveC9jb21wb25lbnRzL3F1aWNrYmxveC1tZXNzYWdlLWRlbGV0ZS9xdWlja2Jsb3gtbWVzc2FnZS1kZWxldGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/quickblox/components/quickblox-message-delete/quickblox-message-delete.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-message-delete/quickblox-message-delete.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: QuickbloxMessageDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxMessageDeleteComponent", function() { return QuickbloxMessageDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @quickblox/quickblox.service */ "./src/app/quickblox/quickblox.service.ts");
/* harmony import */ var _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @quickblox/quickblox.models */ "./src/app/quickblox/quickblox.models.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");






var DeleteQuickbloxMessage = _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_4__["QuickbloxRequests"].DeleteQuickbloxMessage;
var DeleteQuickbloxMessageParam = _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_4__["QuickbloxRequests"].DeleteQuickbloxMessage.DeleteQuickbloxMessageParam;
let QuickbloxMessageDeleteComponent = class QuickbloxMessageDeleteComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(quickbloxService, injector) {
        super(injector);
        this.quickbloxService = quickbloxService;
        this.quickbloxMessageDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
        // TODO: Remove this for future case
        this.forceDelete = true;
    }
    createRequestData(message_id, force_delete) {
        const request = new DeleteQuickbloxMessage.Request();
        request.messageId = message_id || this.quickbloxMessageId;
        const delete_params = new DeleteQuickbloxMessageParam();
        delete_params.force = (force_delete || this.forceDelete) ? 1 : undefined;
        request.params = delete_params;
        return request;
    }
    deleteMessage(request) {
        this.quickbloxService.deleteMessage(request)
            .pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_5__["CommonsService"].convertToJson, _core_commons_service__WEBPACK_IMPORTED_MODULE_5__["CommonsService"].deserializeMap(DeleteQuickbloxMessage.Response))
            .subscribe(message_deleted => {
            if (message_deleted.successfully_deleted.ids.length > 0) {
                this.quickbloxMessageDeleted.emit(true);
            }
        });
    }
};
QuickbloxMessageDeleteComponent.ctorParameters = () => [
    { type: _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_3__["QuickbloxService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], QuickbloxMessageDeleteComponent.prototype, "quickbloxMessageId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QuickbloxMessageDeleteComponent.prototype, "quickbloxMessageDeleted", void 0);
QuickbloxMessageDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'quickblox-message-delete',
        template: __webpack_require__(/*! raw-loader!./quickblox-message-delete.component.html */ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-message-delete/quickblox-message-delete.component.html"),
        styles: [__webpack_require__(/*! ./quickblox-message-delete.component.scss */ "./src/app/quickblox/components/quickblox-message-delete/quickblox-message-delete.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_3__["QuickbloxService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], QuickbloxMessageDeleteComponent);



/***/ }),

/***/ "./src/app/quickblox/components/quickblox-message-details/quickblox-message-details.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-message-details/quickblox-message-details.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aWNrYmxveC9jb21wb25lbnRzL3F1aWNrYmxveC1tZXNzYWdlLWRldGFpbHMvcXVpY2tibG94LW1lc3NhZ2UtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/quickblox/components/quickblox-message-details/quickblox-message-details.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-message-details/quickblox-message-details.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: QuickbloxMessageDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxMessageDetailsComponent", function() { return QuickbloxMessageDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @quickblox/quickblox.models */ "./src/app/quickblox/quickblox.models.ts");




var QuickbloxMessage = _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_3__["QuickbloxObjects"].QuickbloxMessage;
let QuickbloxMessageDetailsComponent = class QuickbloxMessageDetailsComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(injector) {
        super(injector);
    }
    initializeComponent() {
    }
};
QuickbloxMessageDetailsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", QuickbloxMessage)
], QuickbloxMessageDetailsComponent.prototype, "quickbloxMessage", void 0);
QuickbloxMessageDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'quickblox-message-details',
        template: __webpack_require__(/*! raw-loader!./quickblox-message-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-message-details/quickblox-message-details.component.html"),
        styles: [__webpack_require__(/*! ./quickblox-message-details.component.scss */ "./src/app/quickblox/components/quickblox-message-details/quickblox-message-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], QuickbloxMessageDetailsComponent);



/***/ }),

/***/ "./src/app/quickblox/components/quickblox-message-listener/quickblox-message-listener.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-message-listener/quickblox-message-listener.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aWNrYmxveC9jb21wb25lbnRzL3F1aWNrYmxveC1tZXNzYWdlLWxpc3RlbmVyL3F1aWNrYmxveC1tZXNzYWdlLWxpc3RlbmVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/quickblox/components/quickblox-message-listener/quickblox-message-listener.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-message-listener/quickblox-message-listener.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: QuickbloxMessageListenerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxMessageListenerComponent", function() { return QuickbloxMessageListenerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @quickblox/quickblox.service */ "./src/app/quickblox/quickblox.service.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");
/* harmony import */ var _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @quickblox/quickblox.models */ "./src/app/quickblox/quickblox.models.ts");






var QuickbloxMessageListener = _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_5__["QuickbloxRequests"].QuickbloxMessageListener;
let QuickbloxMessageListenerComponent = class QuickbloxMessageListenerComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(quickbloxService, injector) {
        super(injector);
        this.quickbloxService = quickbloxService;
        this.quickbloxMessageReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
        this.quickbloxService.quickBlox.chat.onMessageListener = this.messageListner.bind(this);
    }
    messageListner(userId, msg) {
        const msg_details = _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].deserialize(msg, QuickbloxMessageListener.Response);
        msg_details.user_id = userId;
        this.quickbloxMessageReceived.emit(msg_details);
    }
};
QuickbloxMessageListenerComponent.ctorParameters = () => [
    { type: _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_3__["QuickbloxService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QuickbloxMessageListenerComponent.prototype, "quickbloxMessageReceived", void 0);
QuickbloxMessageListenerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'quickblox-message-listener',
        template: __webpack_require__(/*! raw-loader!./quickblox-message-listener.component.html */ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-message-listener/quickblox-message-listener.component.html"),
        styles: [__webpack_require__(/*! ./quickblox-message-listener.component.scss */ "./src/app/quickblox/components/quickblox-message-listener/quickblox-message-listener.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_3__["QuickbloxService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], QuickbloxMessageListenerComponent);



/***/ }),

/***/ "./src/app/quickblox/components/quickblox-typing-listener/quickblox-typing-listener.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-typing-listener/quickblox-typing-listener.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aWNrYmxveC9jb21wb25lbnRzL3F1aWNrYmxveC10eXBpbmctbGlzdGVuZXIvcXVpY2tibG94LXR5cGluZy1saXN0ZW5lci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/quickblox/components/quickblox-typing-listener/quickblox-typing-listener.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/quickblox/components/quickblox-typing-listener/quickblox-typing-listener.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: QuickbloxTypingListenerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxTypingListenerComponent", function() { return QuickbloxTypingListenerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @quickblox/quickblox.service */ "./src/app/quickblox/quickblox.service.ts");
/* harmony import */ var _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @quickblox/quickblox.models */ "./src/app/quickblox/quickblox.models.ts");





var QuickbloxTypingListener = _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_4__["QuickbloxRequests"].QuickbloxTypingListener;
let QuickbloxTypingListenerComponent = class QuickbloxTypingListenerComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(quickbloxService, injector) {
        super(injector);
        this.quickbloxService = quickbloxService;
        this.typingStatusChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
        this.quickbloxService.quickBlox.chat.onMessageTypingListener = this.messageTypingListner.bind(this);
    }
    messageTypingListner(isTyping, userId, dialogId) {
        const response = new QuickbloxTypingListener.Response();
        response.isTyping = isTyping;
        response.userId = userId;
        response.dislogId = dialogId;
        this.typingStatusChanged.emit(response);
    }
};
QuickbloxTypingListenerComponent.ctorParameters = () => [
    { type: _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_3__["QuickbloxService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QuickbloxTypingListenerComponent.prototype, "typingStatusChanged", void 0);
QuickbloxTypingListenerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'quickblox-typing-listener',
        template: __webpack_require__(/*! raw-loader!./quickblox-typing-listener.component.html */ "./node_modules/raw-loader/index.js!./src/app/quickblox/components/quickblox-typing-listener/quickblox-typing-listener.component.html"),
        styles: [__webpack_require__(/*! ./quickblox-typing-listener.component.scss */ "./src/app/quickblox/components/quickblox-typing-listener/quickblox-typing-listener.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_3__["QuickbloxService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], QuickbloxTypingListenerComponent);



/***/ }),

/***/ "./src/app/quickblox/pages/quickblox-user-chat-page/quickblox-user-chat-page.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/quickblox/pages/quickblox-user-chat-page/quickblox-user-chat-page.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aWNrYmxveC9wYWdlcy9xdWlja2Jsb3gtdXNlci1jaGF0LXBhZ2UvcXVpY2tibG94LXVzZXItY2hhdC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/quickblox/pages/quickblox-user-chat-page/quickblox-user-chat-page.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/quickblox/pages/quickblox-user-chat-page/quickblox-user-chat-page.component.ts ***!
  \************************************************************************************************/
/*! exports provided: QuickbloxUserChatPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxUserChatPageComponent", function() { return QuickbloxUserChatPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/page.component */ "./src/app/core/components/page.component.ts");



let QuickbloxUserChatPageComponent = class QuickbloxUserChatPageComponent extends _core_components_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"] {
    constructor(injector) {
        super(injector);
    }
    initializeComponent() {
        this.dialogItem$ = this.getRouterParameterObservable('dialogItem');
        this.chatDialogJid$ = this.getRouterParameterObservable('chatDialogJid');
    }
};
QuickbloxUserChatPageComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
QuickbloxUserChatPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'quickblox-user-chat-page',
        template: __webpack_require__(/*! raw-loader!./quickblox-user-chat-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/quickblox/pages/quickblox-user-chat-page/quickblox-user-chat-page.component.html"),
        styles: [__webpack_require__(/*! ./quickblox-user-chat-page.component.scss */ "./src/app/quickblox/pages/quickblox-user-chat-page/quickblox-user-chat-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], QuickbloxUserChatPageComponent);



/***/ }),

/***/ "./src/app/quickblox/quickblox.constants.ts":
/*!**************************************************!*\
  !*** ./src/app/quickblox/quickblox.constants.ts ***!
  \**************************************************/
/*! exports provided: QuickbloxConstants, QB_NOTIFICATION_SETTINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxConstants", function() { return QuickbloxConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QB_NOTIFICATION_SETTINGS", function() { return QB_NOTIFICATION_SETTINGS; });
class QuickbloxConstants {
}
QuickbloxConstants.QUICKBLOX_ENDPOINT = '/chat/';
const QB_NOTIFICATION_SETTINGS = {
    ios: { notification_channel: 'apns' },
    android: { notification_channel: 'gcm' }
};


/***/ }),

/***/ "./src/app/quickblox/quickblox.forms.models.ts":
/*!*****************************************************!*\
  !*** ./src/app/quickblox/quickblox.forms.models.ts ***!
  \*****************************************************/
/*! exports provided: CREATE_MESSAGE_MODEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_MESSAGE_MODEL", function() { return CREATE_MESSAGE_MODEL; });
/* harmony import */ var _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/dynamic-input-model-builder */ "./src/app/core/dynamic-input-model-builder.ts");

const CREATE_MESSAGE_MODEL = [
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
        .getTextAreaInputModel('message', undefined, 'Type a message', 3)
        .addValidator('REQUIRED')
        .build()
];


/***/ }),

/***/ "./src/app/quickblox/quickblox.models.ts":
/*!***********************************************!*\
  !*** ./src/app/quickblox/quickblox.models.ts ***!
  \***********************************************/
/*! exports provided: QuickbloxObjects, QuickbloxRequests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxObjects", function() { return QuickbloxObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxRequests", function() { return QuickbloxRequests; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_models_converters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/models.converters */ "./src/app/core/models.converters.ts");



var QuickbloxObjects;
(function (QuickbloxObjects) {
    var DateTimeConverter = _core_models_converters__WEBPACK_IMPORTED_MODULE_2__["ModelsConverters"].DateTimeConverter;
    var TimestampConverter = _core_models_converters__WEBPACK_IMPORTED_MODULE_2__["ModelsConverters"].TimestampConverter;
    var IntToStringConverter = _core_models_converters__WEBPACK_IMPORTED_MODULE_2__["ModelsConverters"].IntToStringConverter;
    let Attachment = class Attachment {
        constructor() {
            this.id = undefined;
            this.type = undefined;
            this.uid = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('id', Number, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Attachment.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('type', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Attachment.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('uid', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Attachment.prototype, "uid", void 0);
    Attachment = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
    ], Attachment);
    QuickbloxObjects.Attachment = Attachment;
    let QuickbloxSession = class QuickbloxSession {
        constructor() {
            this.application_id = undefined;
            this.created_at = undefined;
            this.id = undefined;
            this.nonce = undefined;
            this.token = undefined;
            this.updated_at = undefined;
            this.user_id = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('application_id', Number, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], QuickbloxSession.prototype, "application_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('created_at', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], QuickbloxSession.prototype, "created_at", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('id', Number, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], QuickbloxSession.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('nonce', Number, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], QuickbloxSession.prototype, "nonce", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('token', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], QuickbloxSession.prototype, "token", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('updated_at', DateTimeConverter, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuickbloxSession.prototype, "updated_at", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('user_id', Number, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], QuickbloxSession.prototype, "user_id", void 0);
    QuickbloxSession = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
    ], QuickbloxSession);
    QuickbloxObjects.QuickbloxSession = QuickbloxSession;
    let QuickbloxMessage = class QuickbloxMessage {
        constructor() {
            this.id = undefined;
            this.created_at = undefined;
            this.updated_at = undefined;
            // attachments: Attachment[];
            this.read_ids = undefined;
            this.delivered_ids = undefined;
            this.chat_dialog_id = undefined;
            this.date_sent = undefined;
            this.message = undefined;
            this.recipient_id = undefined;
            this.sender_id = undefined;
            this.read = undefined;
            this.attachments = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('_id', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], QuickbloxMessage.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('created_at', DateTimeConverter),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuickbloxMessage.prototype, "created_at", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('updated_at', DateTimeConverter),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuickbloxMessage.prototype, "updated_at", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('read_ids', [Number]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], QuickbloxMessage.prototype, "read_ids", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('delivered_ids', [Number]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], QuickbloxMessage.prototype, "delivered_ids", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('chat_dialog_id', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], QuickbloxMessage.prototype, "chat_dialog_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('date_sent', TimestampConverter),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuickbloxMessage.prototype, "date_sent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('message', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], QuickbloxMessage.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('recipient_id', Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], QuickbloxMessage.prototype, "recipient_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('sender_id', IntToStringConverter),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], QuickbloxMessage.prototype, "sender_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('read', Number, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], QuickbloxMessage.prototype, "read", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('attachments', [Attachment], true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], QuickbloxMessage.prototype, "attachments", void 0);
    QuickbloxMessage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
    ], QuickbloxMessage);
    QuickbloxObjects.QuickbloxMessage = QuickbloxMessage;
    let NotificationChannel = class NotificationChannel {
        constructor() {
            this.name = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('name', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NotificationChannel.prototype, "name", void 0);
    NotificationChannel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
    ], NotificationChannel);
    QuickbloxObjects.NotificationChannel = NotificationChannel;
    let Platform = class Platform {
        constructor() {
            this.name = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('name', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Platform.prototype, "name", void 0);
    Platform = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
    ], Platform);
    QuickbloxObjects.Platform = Platform;
    let Device = class Device {
        constructor() {
            this.udid = undefined;
            this.platform = undefined;
            this.client_identification_sequence = undefined;
            this.bundle_identifier = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('udid', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Device.prototype, "udid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('platform', Platform, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Platform)
    ], Device.prototype, "platform", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('client_identification_sequence', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Device.prototype, "client_identification_sequence", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('bundle_identifier', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Device.prototype, "bundle_identifier", void 0);
    Device = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
    ], Device);
    QuickbloxObjects.Device = Device;
    let Subscription = class Subscription {
        constructor() {
            this.id = undefined;
            this.notification_channel = undefined;
            this.device = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('id', Number, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Subscription.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('notification_channel', NotificationChannel, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", NotificationChannel)
    ], Subscription.prototype, "notification_channel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('device', Device, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Device)
    ], Subscription.prototype, "device", void 0);
    Subscription = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
    ], Subscription);
    QuickbloxObjects.Subscription = Subscription;
})(QuickbloxObjects || (QuickbloxObjects = {}));
var QuickbloxRequests;
(function (QuickbloxRequests) {
    let CreateQuickbloxSession;
    (function (CreateQuickbloxSession) {
        var QuickbloxSession = QuickbloxObjects.QuickbloxSession;
        let Request = class Request {
            constructor() {
                this.email = undefined;
                this.password = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('email', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "email", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('password', String, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "password", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        CreateQuickbloxSession.Request = Request;
        let Response = class Response extends QuickbloxSession {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        CreateQuickbloxSession.Response = Response;
    })(CreateQuickbloxSession = QuickbloxRequests.CreateQuickbloxSession || (QuickbloxRequests.CreateQuickbloxSession = {}));
    let CreateQuickbloxSubscription;
    (function (CreateQuickbloxSubscription) {
        var Subscription = QuickbloxObjects.Subscription;
        let Request = class Request {
            constructor() {
                this.notification_channel = undefined;
                this.client_identification_sequence = undefined;
                this.platform = undefined;
                this.udid = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('notification_channel', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "notification_channel", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('client_identification_sequence', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "client_identification_sequence", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('platform', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "platform", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('udid', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "udid", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        CreateQuickbloxSubscription.Request = Request;
        let Response = class Response {
            constructor() {
                this.subscription = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('subscription', Subscription),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Subscription)
        ], Response.prototype, "subscription", void 0);
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        CreateQuickbloxSubscription.Response = Response;
    })(CreateQuickbloxSubscription = QuickbloxRequests.CreateQuickbloxSubscription || (QuickbloxRequests.CreateQuickbloxSubscription = {}));
    let ConnectToQuickbloxChat;
    (function (ConnectToQuickbloxChat) {
        let Request = class Request {
            constructor() {
                this.userId = undefined;
                this.password = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('userId', Number),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Request.prototype, "userId", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('password', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "password", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        ConnectToQuickbloxChat.Request = Request;
        // Respose is empty json
    })(ConnectToQuickbloxChat = QuickbloxRequests.ConnectToQuickbloxChat || (QuickbloxRequests.ConnectToQuickbloxChat = {}));
    let CreateAndUploadFile;
    (function (CreateAndUploadFile) {
        let Request = class Request {
            constructor() {
                this.name = undefined;
                this.type = undefined;
                this.size = undefined;
                this.isPublic = undefined;
                this.file = false;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('name', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "name", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('type', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "type", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('size', Number),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Request.prototype, "size", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('public', Boolean, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
        ], Request.prototype, "isPublic", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('file', json2typescript__WEBPACK_IMPORTED_MODULE_1__["Any"]),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
        ], Request.prototype, "file", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        CreateAndUploadFile.Request = Request;
        let Response = class Response {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        CreateAndUploadFile.Response = Response;
    })(CreateAndUploadFile = QuickbloxRequests.CreateAndUploadFile || (QuickbloxRequests.CreateAndUploadFile = {}));
    let CreateQuickbloxDialog;
    (function (CreateQuickbloxDialog) {
        var DateTimeConverter = _core_models_converters__WEBPACK_IMPORTED_MODULE_2__["ModelsConverters"].DateTimeConverter;
        let Request = class Request {
            constructor() {
                this.privacy_type = undefined;
                this.occupant_ids = undefined;
                this.name = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('type', Number, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Request.prototype, "privacy_type", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('occupants_ids', [String], true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
        ], Request.prototype, "occupant_ids", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('name', String, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "name", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        CreateQuickbloxDialog.Request = Request;
        let Response = class Response {
            constructor() {
                this.id = undefined;
                this.created_at = undefined;
                this.updated_at = undefined;
                this.last_message = undefined;
                this.last_message_date_sent = undefined;
                this.last_message_user_id = undefined;
                this.name = undefined;
                this.occupant_ids = undefined;
                this.type = undefined;
                this.xmpp_room_jid = undefined;
                this.unread_messages_count = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('_id', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Response.prototype, "id", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('created_at', DateTimeConverter),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
        ], Response.prototype, "created_at", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('updated_at', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Response.prototype, "updated_at", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('updated_at', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Response.prototype, "last_message", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('last_message_date_sent', DateTimeConverter),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
        ], Response.prototype, "last_message_date_sent", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('last_message_user_id', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Response.prototype, "last_message_user_id", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('name', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Response.prototype, "name", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('occupants_ids', [String]),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
        ], Response.prototype, "occupant_ids", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('updated_at', Number),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Response.prototype, "type", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('xmpp_room_jid', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Response.prototype, "xmpp_room_jid", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('unread_messages_count', Number),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Response.prototype, "unread_messages_count", void 0);
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        CreateQuickbloxDialog.Response = Response;
    })(CreateQuickbloxDialog = QuickbloxRequests.CreateQuickbloxDialog || (QuickbloxRequests.CreateQuickbloxDialog = {}));
    let CreateQuickbloxMessage;
    (function (CreateQuickbloxMessage) {
        var QuickbloxMessage = QuickbloxObjects.QuickbloxMessage;
        var Attachment = QuickbloxObjects.Attachment;
        let Request = class Request {
            constructor() {
                this.chat_dialog_id = undefined;
                this.message = undefined;
                this.send_to_chat = undefined; // default 1
                this.markable = undefined; // default 1
                this.save_to_history = undefined; // default 1
                this.attachments = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('chat_dialog_id', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "chat_dialog_id", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('message', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "message", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('send_to_chat', Number),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Request.prototype, "send_to_chat", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('markable', Number),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Request.prototype, "markable", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('save_to_history', Number),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Request.prototype, "save_to_history", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('attachments', [Attachment], true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
        ], Request.prototype, "attachments", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        CreateQuickbloxMessage.Request = Request;
        let Response = class Response extends QuickbloxMessage {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        CreateQuickbloxMessage.Response = Response;
    })(CreateQuickbloxMessage = QuickbloxRequests.CreateQuickbloxMessage || (QuickbloxRequests.CreateQuickbloxMessage = {}));
    let CreateQuickbloxMessageXml;
    (function (CreateQuickbloxMessageXml) {
        var Attachment = QuickbloxObjects.Attachment;
        let CreateQuickbloxMessageExtension = class CreateQuickbloxMessageExtension {
            constructor() {
                this.save_to_history = 1;
                this.attachments = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('save_to_history', Number),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
        ], CreateQuickbloxMessageExtension.prototype, "save_to_history", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('attachments', [Attachment], true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
        ], CreateQuickbloxMessageExtension.prototype, "attachments", void 0);
        CreateQuickbloxMessageExtension = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], CreateQuickbloxMessageExtension);
        CreateQuickbloxMessageXml.CreateQuickbloxMessageExtension = CreateQuickbloxMessageExtension;
        let Request = class Request {
            constructor() {
                this.dialog_id = undefined;
                this.type = undefined;
                this.body = undefined;
                this.extension = undefined;
                this.markable = 1;
                this.send_to_chat = 1;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('type', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "type", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('body', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "body", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('extension', CreateQuickbloxMessageExtension),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", CreateQuickbloxMessageExtension)
        ], Request.prototype, "extension", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('markable', Number),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
        ], Request.prototype, "markable", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('send_to_chat', Number),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
        ], Request.prototype, "send_to_chat", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        CreateQuickbloxMessageXml.Request = Request;
        let Response = class Response {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        CreateQuickbloxMessageXml.Response = Response;
    })(CreateQuickbloxMessageXml = QuickbloxRequests.CreateQuickbloxMessageXml || (QuickbloxRequests.CreateQuickbloxMessageXml = {}));
    let ListDialogs;
    (function (ListDialogs) {
        var DateTimeConverter = _core_models_converters__WEBPACK_IMPORTED_MODULE_2__["ModelsConverters"].DateTimeConverter;
        let Request = class Request {
            constructor() {
                this.id = undefined;
                this.privacy_type = undefined;
                this.name = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('_id', String, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "id", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('type', Number, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Request.prototype, "privacy_type", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('name', String, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "name", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        ListDialogs.Request = Request;
        let DialogItem = class DialogItem {
            constructor() {
                this.id = undefined;
                this.name = undefined;
                this.occupant_ids = undefined;
                this.privacy_type = undefined;
                this.created_at = undefined;
                this.updated_at = undefined;
                this.unread_message_count = undefined;
                this.last_message = undefined;
                this.user_id = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('_id', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], DialogItem.prototype, "id", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('name', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], DialogItem.prototype, "name", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('occupants_ids', [Number]),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
        ], DialogItem.prototype, "occupant_ids", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('type', Number),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], DialogItem.prototype, "privacy_type", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('created_at', DateTimeConverter),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], DialogItem.prototype, "created_at", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('updated_at', DateTimeConverter),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], DialogItem.prototype, "updated_at", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('unread_messages_count', Number),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], DialogItem.prototype, "unread_message_count", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('last_message', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], DialogItem.prototype, "last_message", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('user_id', Number),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], DialogItem.prototype, "user_id", void 0);
        DialogItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], DialogItem);
        ListDialogs.DialogItem = DialogItem;
        let Response = class Response {
            constructor() {
                this.total_entries = undefined;
                this.skip = undefined;
                this.limit = undefined;
                this.items = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('total_entries', Number),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Response.prototype, "total_entries", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('skip', Number),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Response.prototype, "skip", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('limit', Number),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Response.prototype, "limit", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('items', [DialogItem]),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
        ], Response.prototype, "items", void 0);
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        ListDialogs.Response = Response;
    })(ListDialogs = QuickbloxRequests.ListDialogs || (QuickbloxRequests.ListDialogs = {}));
    let GetOnlineUsers;
    (function (GetOnlineUsers) {
        let Request = class Request {
            constructor() {
                this.dailog_id = undefined;
            }
        };
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        GetOnlineUsers.Request = Request;
    })(GetOnlineUsers = QuickbloxRequests.GetOnlineUsers || (QuickbloxRequests.GetOnlineUsers = {}));
    let ListMessages;
    (function (ListMessages) {
        var DateTimeConverter = _core_models_converters__WEBPACK_IMPORTED_MODULE_2__["ModelsConverters"].DateTimeConverter;
        var TimestampConverter = _core_models_converters__WEBPACK_IMPORTED_MODULE_2__["ModelsConverters"].TimestampConverter;
        var QuickbloxMessage = QuickbloxObjects.QuickbloxMessage;
        let QuickbloxMessageList = class QuickbloxMessageList {
            constructor() {
                this.skip = undefined;
                this.limit = undefined;
                this.items = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('skip', Number, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], QuickbloxMessageList.prototype, "skip", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('limit', Number, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], QuickbloxMessageList.prototype, "limit", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('items', [QuickbloxMessage], true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
        ], QuickbloxMessageList.prototype, "items", void 0);
        QuickbloxMessageList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], QuickbloxMessageList);
        ListMessages.QuickbloxMessageList = QuickbloxMessageList;
        let Request = class Request {
            constructor() {
                this.id = undefined;
                this.chat_dialog_id = undefined;
                /* Either one of the sorting has to be set. Not both. */
                this.sort_desc = undefined; // only one value 'date_sent'
                this.sort_asc = undefined; // only one value 'date_sent'
                this.date_sent = undefined;
                this.updated_at = undefined;
                this.sender_id = undefined;
                this.recipient_id = undefined;
                this.limit = undefined;
                this.skip = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('_id', String, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "id", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('chat_dialog_id', String, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "chat_dialog_id", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('sort_desc', String, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "sort_desc", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('sort_asc', String, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "sort_asc", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('date_sent', TimestampConverter, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Request.prototype, "date_sent", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('updated_at', DateTimeConverter, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
        ], Request.prototype, "updated_at", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('sender_id', Number, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Request.prototype, "sender_id", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('recipient_id', Number, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Request.prototype, "recipient_id", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('limit', Number, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Request.prototype, "limit", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('skip', Number, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Request.prototype, "skip", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        ListMessages.Request = Request;
        let Response = class Response extends QuickbloxMessageList {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        ListMessages.Response = Response;
    })(ListMessages = QuickbloxRequests.ListMessages || (QuickbloxRequests.ListMessages = {}));
    let DeleteQuickbloxMessage;
    (function (DeleteQuickbloxMessage) {
        let DeleteQuickbloxMessageParam = class DeleteQuickbloxMessageParam {
            constructor() {
                this.force = undefined; // only one value '1'
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('force', Number, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], DeleteQuickbloxMessageParam.prototype, "force", void 0);
        DeleteQuickbloxMessageParam = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], DeleteQuickbloxMessageParam);
        DeleteQuickbloxMessage.DeleteQuickbloxMessageParam = DeleteQuickbloxMessageParam;
        let DeleteQuickbloxMessageResponseItems = class DeleteQuickbloxMessageResponseItems {
            constructor() {
                this.ids = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('ids', [String], true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
        ], DeleteQuickbloxMessageResponseItems.prototype, "ids", void 0);
        DeleteQuickbloxMessageResponseItems = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], DeleteQuickbloxMessageResponseItems);
        DeleteQuickbloxMessage.DeleteQuickbloxMessageResponseItems = DeleteQuickbloxMessageResponseItems;
        let Request = class Request {
            constructor() {
                this.messageId = undefined;
                this.params = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('params', DeleteQuickbloxMessageParam),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", DeleteQuickbloxMessageParam)
        ], Request.prototype, "params", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        DeleteQuickbloxMessage.Request = Request;
        let Response = class Response {
            constructor() {
                this.successfully_deleted = undefined;
                this.wrong_permissions = undefined;
                this.not_found = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('SuccessfullyDeleted', DeleteQuickbloxMessageResponseItems),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", DeleteQuickbloxMessageResponseItems)
        ], Response.prototype, "successfully_deleted", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('WrongPermissions', DeleteQuickbloxMessageResponseItems),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", DeleteQuickbloxMessageResponseItems)
        ], Response.prototype, "wrong_permissions", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('NotFound', DeleteQuickbloxMessageResponseItems),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", DeleteQuickbloxMessageResponseItems)
        ], Response.prototype, "not_found", void 0);
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        DeleteQuickbloxMessage.Response = Response;
    })(DeleteQuickbloxMessage = QuickbloxRequests.DeleteQuickbloxMessage || (QuickbloxRequests.DeleteQuickbloxMessage = {}));
    let GetUsers;
    (function (GetUsers) {
        var DateTimeConverter = _core_models_converters__WEBPACK_IMPORTED_MODULE_2__["ModelsConverters"].DateTimeConverter;
        let Request = class Request {
            constructor() {
                this.id = undefined;
                this.email = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('id', String, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "id", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('email', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "email", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        GetUsers.Request = Request;
        let Response = class Response {
            constructor() {
                this.id = undefined;
                this.full_name = undefined;
                this.email = undefined;
                this.login = undefined;
                this.created_at = undefined;
                this.updated_at = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('id', Number),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Response.prototype, "id", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('full_name', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Response.prototype, "full_name", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('email', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Response.prototype, "email", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('login', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Response.prototype, "login", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('created_at', DateTimeConverter),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
        ], Response.prototype, "created_at", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('updated_at', DateTimeConverter),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
        ], Response.prototype, "updated_at", void 0);
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        GetUsers.Response = Response;
    })(GetUsers = QuickbloxRequests.GetUsers || (QuickbloxRequests.GetUsers = {}));
    let QuickbloxTypingListener;
    (function (QuickbloxTypingListener) {
        let Request = class Request {
        };
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        QuickbloxTypingListener.Request = Request;
        let Response = class Response {
            constructor() {
                this.isTyping = undefined;
                this.userId = undefined;
                this.dislogId = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('isTyping', Boolean),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
        ], Response.prototype, "isTyping", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('userId', Number),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Response.prototype, "userId", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('dialogId', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Response.prototype, "dislogId", void 0);
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        QuickbloxTypingListener.Response = Response;
    })(QuickbloxTypingListener = QuickbloxRequests.QuickbloxTypingListener || (QuickbloxRequests.QuickbloxTypingListener = {}));
    let QuickbloxMessageListener;
    (function (QuickbloxMessageListener) {
        var TimestampConverter = _core_models_converters__WEBPACK_IMPORTED_MODULE_2__["ModelsConverters"].TimestampConverter;
        let QuickbloxMessageListenerExtension = class QuickbloxMessageListenerExtension {
            constructor() {
                this.save_to_history = undefined;
                this.message_id = undefined;
                this.dialog_id = undefined;
                this.date_sent = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('save_to_history', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], QuickbloxMessageListenerExtension.prototype, "save_to_history", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('message_id', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], QuickbloxMessageListenerExtension.prototype, "message_id", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('dialog_id', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], QuickbloxMessageListenerExtension.prototype, "dialog_id", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('date_sent', TimestampConverter),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
        ], QuickbloxMessageListenerExtension.prototype, "date_sent", void 0);
        QuickbloxMessageListenerExtension = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], QuickbloxMessageListenerExtension);
        QuickbloxMessageListener.QuickbloxMessageListenerExtension = QuickbloxMessageListenerExtension;
        let QuickbloxMessageListenerDelay = class QuickbloxMessageListenerDelay {
        };
        QuickbloxMessageListenerDelay = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], QuickbloxMessageListenerDelay);
        QuickbloxMessageListener.QuickbloxMessageListenerDelay = QuickbloxMessageListenerDelay;
        let Response = class Response {
            constructor() {
                this.user_id = undefined;
                this.id = undefined;
                this.dialog_id = undefined;
                this.recipient_id = undefined;
                this.type = undefined;
                this.body = undefined;
                this.extension = undefined;
                this.delay = undefined;
                this.markable = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('user_id', Number, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Response.prototype, "user_id", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('id', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Response.prototype, "id", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('dialog_id', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Response.prototype, "dialog_id", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('recipient_id', Number, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Response.prototype, "recipient_id", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('type', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Response.prototype, "type", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('body', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Response.prototype, "body", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('extension', QuickbloxMessageListenerExtension),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", QuickbloxMessageListenerExtension)
        ], Response.prototype, "extension", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('delay', QuickbloxMessageListenerDelay, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", QuickbloxMessageListenerDelay)
        ], Response.prototype, "delay", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('markable', Number),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Response.prototype, "markable", void 0);
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        QuickbloxMessageListener.Response = Response;
    })(QuickbloxMessageListener = QuickbloxRequests.QuickbloxMessageListener || (QuickbloxRequests.QuickbloxMessageListener = {}));
})(QuickbloxRequests || (QuickbloxRequests = {}));


/***/ }),

/***/ "./src/app/quickblox/quickblox.module.ts":
/*!***********************************************!*\
  !*** ./src/app/quickblox/quickblox.module.ts ***!
  \***********************************************/
/*! exports provided: QuickbloxModule, provideQuickBlox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxModule", function() { return QuickbloxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideQuickBlox", function() { return provideQuickBlox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _quickblox_quickblox_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @quickblox/quickblox.resolver */ "./src/app/quickblox/quickblox.resolver.ts");
/* harmony import */ var _quickblox_components_quickblox_get_message_list_quickblox_get_message_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @quickblox/components/quickblox-get-message-list/quickblox-get-message-list.component */ "./src/app/quickblox/components/quickblox-get-message-list/quickblox-get-message-list.component.ts");
/* harmony import */ var _quickblox_pages_quickblox_user_chat_page_quickblox_user_chat_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @quickblox/pages/quickblox-user-chat-page/quickblox-user-chat-page.component */ "./src/app/quickblox/pages/quickblox-user-chat-page/quickblox-user-chat-page.component.ts");
/* harmony import */ var _quickblox_components_quickblox_message_listener_quickblox_message_listener_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @quickblox/components/quickblox-message-listener/quickblox-message-listener.component */ "./src/app/quickblox/components/quickblox-message-listener/quickblox-message-listener.component.ts");
/* harmony import */ var _quickblox_components_quickblox_message_create_and_listener_quickblox_message_create_and_listener_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @quickblox/components/quickblox-message-create-and-listener/quickblox-message-create-and-listener.component */ "./src/app/quickblox/components/quickblox-message-create-and-listener/quickblox-message-create-and-listener.component.ts");
/* harmony import */ var _quickblox_components_quickblox_create_message_xml_quickblox_create_message_xml_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @quickblox/components/quickblox-create-message-xml/quickblox-create-message-xml.component */ "./src/app/quickblox/components/quickblox-create-message-xml/quickblox-create-message-xml.component.ts");
/* harmony import */ var _quickblox_components_quickblox_typing_listener_quickblox_typing_listener_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @quickblox/components/quickblox-typing-listener/quickblox-typing-listener.component */ "./src/app/quickblox/components/quickblox-typing-listener/quickblox-typing-listener.component.ts");
/* harmony import */ var _quickblox_components_quickblox_message_details_quickblox_message_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @quickblox/components/quickblox-message-details/quickblox-message-details.component */ "./src/app/quickblox/components/quickblox-message-details/quickblox-message-details.component.ts");
/* harmony import */ var _quickblox_components_quickblox_chat_disconnect_quickblox_chat_disconnect_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @quickblox/components/quickblox-chat-disconnect/quickblox-chat-disconnect.component */ "./src/app/quickblox/components/quickblox-chat-disconnect/quickblox-chat-disconnect.component.ts");
/* harmony import */ var _quickblox_components_quickblox_create_message_quickblox_create_message_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @quickblox/components/quickblox-create-message/quickblox-create-message.component */ "./src/app/quickblox/components/quickblox-create-message/quickblox-create-message.component.ts");
/* harmony import */ var _quickblox_components_quickblox_get_dialog_item_quickblox_get_dialog_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @quickblox/components/quickblox-get-dialog-item/quickblox-get-dialog-item.component */ "./src/app/quickblox/components/quickblox-get-dialog-item/quickblox-get-dialog-item.component.ts");
/* harmony import */ var _quickblox_components_quickblox_get_online_users_for_dialog_quickblox_get_online_users_for_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @quickblox/components/quickblox-get-online-users-for-dialog/quickblox-get-online-users-for-dialog.component */ "./src/app/quickblox/components/quickblox-get-online-users-for-dialog/quickblox-get-online-users-for-dialog.component.ts");
/* harmony import */ var _quickblox_components_quickblox_get_users_quickblox_get_users_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @quickblox/components/quickblox-get-users/quickblox-get-users.component */ "./src/app/quickblox/components/quickblox-get-users/quickblox-get-users.component.ts");
/* harmony import */ var _quickblox_components_quickblox_list_dialogs_quickblox_list_dialogs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @quickblox/components/quickblox-list-dialogs/quickblox-list-dialogs.component */ "./src/app/quickblox/components/quickblox-list-dialogs/quickblox-list-dialogs.component.ts");
/* harmony import */ var _quickblox_components_quickblox_message_delete_quickblox_message_delete_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @quickblox/components/quickblox-message-delete/quickblox-message-delete.component */ "./src/app/quickblox/components/quickblox-message-delete/quickblox-message-delete.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _quickblox_components_quickblox_get_message_list_and_listener_quickblox_get_message_list_and_listener_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @quickblox/components/quickblox-get-message-list-and-listener/quickblox-get-message-list-and-listener.component */ "./src/app/quickblox/components/quickblox-get-message-list-and-listener/quickblox-get-message-list-and-listener.component.ts");
/* harmony import */ var _images_images_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @images/images.module */ "./src/app/images/images.module.ts");
/* harmony import */ var _quickblox_quickblox_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @quickblox/quickblox.pipe */ "./src/app/quickblox/quickblox.pipe.ts");
/* harmony import */ var _quickblox_components_quickblox_create_and_upload_file_quickblox_create_and_upload_file_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @quickblox/components/quickblox-create-and-upload-file/quickblox-create-and-upload-file.component */ "./src/app/quickblox/components/quickblox-create-and-upload-file/quickblox-create-and-upload-file.component.ts");
/* harmony import */ var _quickblox_components_quickblox_attachment_details_quickblox_attachment_details_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @quickblox/components/quickblox-attachment-details/quickblox-attachment-details.component */ "./src/app/quickblox/components/quickblox-attachment-details/quickblox-attachment-details.component.ts");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @users/users.module */ "./src/app/users/users.module.ts");







// noinspection TsLint

// noinspection TsLint






// noinspection TsLint





// noinspection TsLint

// noinspection TsLint


// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length


let QuickbloxModule = class QuickbloxModule {
};
QuickbloxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _quickblox_components_quickblox_get_message_list_quickblox_get_message_list_component__WEBPACK_IMPORTED_MODULE_4__["QuickbloxGetMessageListComponent"],
            _quickblox_pages_quickblox_user_chat_page_quickblox_user_chat_page_component__WEBPACK_IMPORTED_MODULE_5__["QuickbloxUserChatPageComponent"],
            _quickblox_components_quickblox_message_listener_quickblox_message_listener_component__WEBPACK_IMPORTED_MODULE_6__["QuickbloxMessageListenerComponent"],
            _quickblox_components_quickblox_message_create_and_listener_quickblox_message_create_and_listener_component__WEBPACK_IMPORTED_MODULE_7__["QuickbloxMessageCreateAndListenerComponent"],
            _quickblox_components_quickblox_create_message_xml_quickblox_create_message_xml_component__WEBPACK_IMPORTED_MODULE_8__["QuickbloxCreateMessageXmlComponent"],
            _quickblox_components_quickblox_typing_listener_quickblox_typing_listener_component__WEBPACK_IMPORTED_MODULE_9__["QuickbloxTypingListenerComponent"],
            _quickblox_components_quickblox_message_details_quickblox_message_details_component__WEBPACK_IMPORTED_MODULE_10__["QuickbloxMessageDetailsComponent"],
            _quickblox_components_quickblox_chat_disconnect_quickblox_chat_disconnect_component__WEBPACK_IMPORTED_MODULE_11__["QuickbloxChatDisconnectComponent"],
            _quickblox_components_quickblox_create_message_quickblox_create_message_component__WEBPACK_IMPORTED_MODULE_12__["QuickbloxCreateMessageComponent"],
            _quickblox_components_quickblox_get_dialog_item_quickblox_get_dialog_item_component__WEBPACK_IMPORTED_MODULE_13__["QuickbloxGetDialogItemComponent"],
            _quickblox_components_quickblox_get_online_users_for_dialog_quickblox_get_online_users_for_dialog_component__WEBPACK_IMPORTED_MODULE_14__["QuickbloxGetOnlineUsersForDialogComponent"],
            _quickblox_components_quickblox_get_users_quickblox_get_users_component__WEBPACK_IMPORTED_MODULE_15__["QuickbloxGetUsersComponent"],
            _quickblox_components_quickblox_list_dialogs_quickblox_list_dialogs_component__WEBPACK_IMPORTED_MODULE_16__["QuickbloxListDialogsComponent"],
            _quickblox_components_quickblox_message_delete_quickblox_message_delete_component__WEBPACK_IMPORTED_MODULE_17__["QuickbloxMessageDeleteComponent"],
            _quickblox_components_quickblox_get_message_list_and_listener_quickblox_get_message_list_and_listener_component__WEBPACK_IMPORTED_MODULE_19__["QuickbloxGetMessageListAndListenerComponent"],
            _quickblox_components_quickblox_get_message_list_quickblox_get_message_list_component__WEBPACK_IMPORTED_MODULE_4__["QuickbloxGetMessageListNoTemplateComponent"],
            _quickblox_quickblox_pipe__WEBPACK_IMPORTED_MODULE_21__["QuickbloxPlatformToNotificationChannelPipe"],
            _quickblox_components_quickblox_create_and_upload_file_quickblox_create_and_upload_file_component__WEBPACK_IMPORTED_MODULE_22__["QuickbloxCreateAndUploadFileComponent"],
            _quickblox_components_quickblox_attachment_details_quickblox_attachment_details_component__WEBPACK_IMPORTED_MODULE_23__["QuickbloxAttachmentDetailsComponent"],
            _quickblox_quickblox_pipe__WEBPACK_IMPORTED_MODULE_21__["QuickbloxCreateAndUploadFileResponseToAttachmentPipe"],
            _quickblox_components_quickblox_list_dialogs_quickblox_list_dialogs_component__WEBPACK_IMPORTED_MODULE_16__["QuickbloxListDialogsWithLastMessageComponent"],
            _quickblox_components_quickblox_list_dialogs_quickblox_list_dialogs_component__WEBPACK_IMPORTED_MODULE_16__["QuickbloxListDialogsNoTemplateComponent"],
            _quickblox_components_quickblox_get_message_list_quickblox_get_message_list_component__WEBPACK_IMPORTED_MODULE_4__["QuickbloxGetMessageListNoTemplateNoInitializeComponent"]
        ],
        exports: [
            _quickblox_components_quickblox_get_message_list_quickblox_get_message_list_component__WEBPACK_IMPORTED_MODULE_4__["QuickbloxGetMessageListComponent"],
            _quickblox_pages_quickblox_user_chat_page_quickblox_user_chat_page_component__WEBPACK_IMPORTED_MODULE_5__["QuickbloxUserChatPageComponent"],
            _quickblox_components_quickblox_message_listener_quickblox_message_listener_component__WEBPACK_IMPORTED_MODULE_6__["QuickbloxMessageListenerComponent"],
            _quickblox_components_quickblox_message_create_and_listener_quickblox_message_create_and_listener_component__WEBPACK_IMPORTED_MODULE_7__["QuickbloxMessageCreateAndListenerComponent"],
            _quickblox_components_quickblox_create_message_xml_quickblox_create_message_xml_component__WEBPACK_IMPORTED_MODULE_8__["QuickbloxCreateMessageXmlComponent"],
            _quickblox_components_quickblox_typing_listener_quickblox_typing_listener_component__WEBPACK_IMPORTED_MODULE_9__["QuickbloxTypingListenerComponent"],
            _quickblox_components_quickblox_message_details_quickblox_message_details_component__WEBPACK_IMPORTED_MODULE_10__["QuickbloxMessageDetailsComponent"],
            _quickblox_components_quickblox_chat_disconnect_quickblox_chat_disconnect_component__WEBPACK_IMPORTED_MODULE_11__["QuickbloxChatDisconnectComponent"],
            _quickblox_components_quickblox_create_message_quickblox_create_message_component__WEBPACK_IMPORTED_MODULE_12__["QuickbloxCreateMessageComponent"],
            _quickblox_components_quickblox_get_dialog_item_quickblox_get_dialog_item_component__WEBPACK_IMPORTED_MODULE_13__["QuickbloxGetDialogItemComponent"],
            _quickblox_components_quickblox_get_online_users_for_dialog_quickblox_get_online_users_for_dialog_component__WEBPACK_IMPORTED_MODULE_14__["QuickbloxGetOnlineUsersForDialogComponent"],
            _quickblox_components_quickblox_get_users_quickblox_get_users_component__WEBPACK_IMPORTED_MODULE_15__["QuickbloxGetUsersComponent"],
            _quickblox_components_quickblox_list_dialogs_quickblox_list_dialogs_component__WEBPACK_IMPORTED_MODULE_16__["QuickbloxListDialogsComponent"],
            _quickblox_components_quickblox_message_delete_quickblox_message_delete_component__WEBPACK_IMPORTED_MODULE_17__["QuickbloxMessageDeleteComponent"],
            _quickblox_components_quickblox_get_message_list_and_listener_quickblox_get_message_list_and_listener_component__WEBPACK_IMPORTED_MODULE_19__["QuickbloxGetMessageListAndListenerComponent"],
            _quickblox_components_quickblox_get_message_list_quickblox_get_message_list_component__WEBPACK_IMPORTED_MODULE_4__["QuickbloxGetMessageListNoTemplateComponent"],
            _quickblox_quickblox_pipe__WEBPACK_IMPORTED_MODULE_21__["QuickbloxPlatformToNotificationChannelPipe"],
            _quickblox_components_quickblox_create_and_upload_file_quickblox_create_and_upload_file_component__WEBPACK_IMPORTED_MODULE_22__["QuickbloxCreateAndUploadFileComponent"],
            _quickblox_components_quickblox_attachment_details_quickblox_attachment_details_component__WEBPACK_IMPORTED_MODULE_23__["QuickbloxAttachmentDetailsComponent"],
            _quickblox_quickblox_pipe__WEBPACK_IMPORTED_MODULE_21__["QuickbloxCreateAndUploadFileResponseToAttachmentPipe"],
            _quickblox_components_quickblox_list_dialogs_quickblox_list_dialogs_component__WEBPACK_IMPORTED_MODULE_16__["QuickbloxListDialogsWithLastMessageComponent"],
            _quickblox_components_quickblox_list_dialogs_quickblox_list_dialogs_component__WEBPACK_IMPORTED_MODULE_16__["QuickbloxListDialogsNoTemplateComponent"],
            _quickblox_components_quickblox_get_message_list_quickblox_get_message_list_component__WEBPACK_IMPORTED_MODULE_4__["QuickbloxGetMessageListNoTemplateNoInitializeComponent"]
        ],
        imports: [
            _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
            _images_images_module__WEBPACK_IMPORTED_MODULE_20__["ImagesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"],
            _users_users_module__WEBPACK_IMPORTED_MODULE_24__["UsersModule"]
        ],
        providers: [
            _quickblox_quickblox_resolver__WEBPACK_IMPORTED_MODULE_3__["QuickbloxSessionResolver"],
            _quickblox_quickblox_resolver__WEBPACK_IMPORTED_MODULE_3__["QuickbloxDialogItemResolver"],
            _quickblox_quickblox_resolver__WEBPACK_IMPORTED_MODULE_3__["QuickbloxJoinDialogResolver"],
            { provide: 'QuickBlox', useFactory: provideQuickBlox }
        ]
    })
], QuickbloxModule);

function provideQuickBlox() {
    return new window['QB'].QuickBlox();
}


/***/ }),

/***/ "./src/app/quickblox/quickblox.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/quickblox/quickblox.pipe.ts ***!
  \*********************************************/
/*! exports provided: QuickbloxPlatformToNotificationChannelPipe, QuickbloxCreateAndUploadFileResponseToAttachmentPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxPlatformToNotificationChannelPipe", function() { return QuickbloxPlatformToNotificationChannelPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxCreateAndUploadFileResponseToAttachmentPipe", function() { return QuickbloxCreateAndUploadFileResponseToAttachmentPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @quickblox/quickblox.models */ "./src/app/quickblox/quickblox.models.ts");
/* harmony import */ var _quickblox_quickblox_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @quickblox/quickblox.constants */ "./src/app/quickblox/quickblox.constants.ts");




var Attachment = _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_2__["QuickbloxObjects"].Attachment;
let QuickbloxPlatformToNotificationChannelPipe = class QuickbloxPlatformToNotificationChannelPipe {
    transform(value, args) {
        return _quickblox_quickblox_constants__WEBPACK_IMPORTED_MODULE_3__["QB_NOTIFICATION_SETTINGS"][value].notification_channel;
    }
};
QuickbloxPlatformToNotificationChannelPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'quickbloxPlatformToNotificationChannel'
    })
], QuickbloxPlatformToNotificationChannelPipe);

let QuickbloxCreateAndUploadFileResponseToAttachmentPipe = class QuickbloxCreateAndUploadFileResponseToAttachmentPipe {
    transform(value, ...args) {
        const attachment = new Attachment();
        // @ts-ignore
        attachment.uid = value.uid;
        attachment.type = 'photo';
        return attachment;
    }
};
QuickbloxCreateAndUploadFileResponseToAttachmentPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'quickbloxCreateAndUploadFileResponseToAttachment'
    })
], QuickbloxCreateAndUploadFileResponseToAttachmentPipe);



/***/ }),

/***/ "./src/app/quickblox/quickblox.resolver.ts":
/*!*************************************************!*\
  !*** ./src/app/quickblox/quickblox.resolver.ts ***!
  \*************************************************/
/*! exports provided: QuickbloxSessionResolver, QuickbloxDialogItemResolver, QuickbloxJoinDialogResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxSessionResolver", function() { return QuickbloxSessionResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxDialogItemResolver", function() { return QuickbloxDialogItemResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxJoinDialogResolver", function() { return QuickbloxJoinDialogResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @quickblox/quickblox.service */ "./src/app/quickblox/quickblox.service.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @quickblox/quickblox.models */ "./src/app/quickblox/quickblox.models.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");







var ListDialogs = _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_3__["QuickbloxRequests"].ListDialogs;
var QuickbloxSession = _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_3__["QuickbloxObjects"].QuickbloxSession;
let QuickbloxSessionResolver = class QuickbloxSessionResolver {
    constructor(quickbloxService, authService) {
        this.quickbloxService = quickbloxService;
        this.authService = authService;
    }
    resolve() {
        return this.quickbloxService.createSessionAndConnect()
            .pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_6__["CommonsService"].deserializeMap(QuickbloxSession), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((success) => {
            return success;
        }));
    }
};
QuickbloxSessionResolver.ctorParameters = () => [
    { type: _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_1__["QuickbloxService"] },
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
QuickbloxSessionResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_1__["QuickbloxService"], _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], QuickbloxSessionResolver);

let QuickbloxDialogItemResolver = class QuickbloxDialogItemResolver {
    constructor(quickbloxService) {
        this.quickbloxService = quickbloxService;
    }
    resolve(route_or_dialogId) {
        const request = new ListDialogs.Request();
        request.id = typeof route_or_dialogId === 'string' ? route_or_dialogId : route_or_dialogId.paramMap.get('dialogId');
        return this.quickbloxService.listDialogs(request)
            .pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_6__["CommonsService"].deserializeMap(ListDialogs.Response), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(success => success.items[0]));
    }
};
QuickbloxDialogItemResolver.ctorParameters = () => [
    { type: _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_1__["QuickbloxService"] }
];
QuickbloxDialogItemResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_1__["QuickbloxService"]])
], QuickbloxDialogItemResolver);

let QuickbloxJoinDialogResolver = class QuickbloxJoinDialogResolver {
    constructor(quickbloxService) {
        this.quickbloxService = quickbloxService;
    }
    resolve(route_or_dialogId) {
        const dialog_id = typeof route_or_dialogId === 'string' ? route_or_dialogId : route_or_dialogId.paramMap.get('dialogId');
        return this.quickbloxService.joinGroup(dialog_id);
    }
};
QuickbloxJoinDialogResolver.ctorParameters = () => [
    { type: _quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_1__["QuickbloxService"] }
];
QuickbloxJoinDialogResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quickblox_quickblox_service__WEBPACK_IMPORTED_MODULE_1__["QuickbloxService"]])
], QuickbloxJoinDialogResolver);



/***/ }),

/***/ "./src/app/quickblox/quickblox.service.ts":
/*!************************************************!*\
  !*** ./src/app/quickblox/quickblox.service.ts ***!
  \************************************************/
/*! exports provided: QuickbloxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickbloxService", function() { return QuickbloxService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js");
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @quickblox/quickblox.models */ "./src/app/quickblox/quickblox.models.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_http_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/http/rest.service */ "./src/app/core/http/rest.service.ts");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm2015/ngx-restangular.js");
/* harmony import */ var _quickblox_quickblox_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @quickblox/quickblox.constants */ "./src/app/quickblox/quickblox.constants.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");











var ConnectToQuickbloxChat = _quickblox_quickblox_models__WEBPACK_IMPORTED_MODULE_3__["QuickbloxRequests"].ConnectToQuickbloxChat;
var UploadedFile = _core_core_models__WEBPACK_IMPORTED_MODULE_10__["Files"].UploadedFile;
let QuickbloxService = class QuickbloxService extends _core_http_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"] {
    constructor(quickBlox, restangular) {
        super(restangular);
        this.quickBlox = quickBlox;
        this.quickbloxService = super.getService(_quickblox_quickblox_constants__WEBPACK_IMPORTED_MODULE_8__["QuickbloxConstants"].QUICKBLOX_ENDPOINT);
    }
    connectToChat(request) {
        const connect_to_chat = bluebird__WEBPACK_IMPORTED_MODULE_2__["promisify"](this.quickBlox.chat.connect, { context: this.quickBlox.chat });
        // @ts-ignore
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].promiseToObservable(connect_to_chat(_core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].serialize(request)));
    }
    listDialogs(params) {
        const retrieve_dialogs = bluebird__WEBPACK_IMPORTED_MODULE_2__["promisify"](this.quickBlox.chat.dialog.list, { context: this.quickBlox.chat });
        // @ts-ignore
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].promiseToObservable(retrieve_dialogs(_core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].serialize(params)));
    }
    getOnlineUsers(param) {
        const dialogJid = this.getJidFromDialogId(param.dailog_id);
        const listOnlineUsers = bluebird__WEBPACK_IMPORTED_MODULE_2__["promisify"](this.quickBlox.chat.muc.listOnlineUsers, { context: this.quickBlox.chat.muc });
        // @ts-ignore
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].promiseToObservable(listOnlineUsers(dialogJid));
    }
    chatDisconnect() {
        const chat_disconnect = bluebird__WEBPACK_IMPORTED_MODULE_2__["promisify"](this.quickBlox.chat.disconnect(), { context: this.quickBlox });
        // @ts-ignore
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].promiseToObservable(chat_disconnect);
    }
    createMessage(request) {
        const create_message = bluebird__WEBPACK_IMPORTED_MODULE_2__["promisify"](this.quickBlox.chat.message.create, { context: this.quickBlox.chat.message });
        // @ts-ignore
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].promiseToObservable(create_message(_core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].serialize(request)));
    }
    createMessageXml(request) {
        // @ts-ignore
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].objectToObservable(this.quickBlox.chat.send(this.getJidFromDialogId(request.dialog_id), _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].serialize(request)));
    }
    getJidFromDialogId(dialog_id) {
        return this.quickBlox.chat.helpers.getRoomJidFromDialogId(dialog_id);
    }
    joinGroup(dialogId) {
        const join_dialog = bluebird__WEBPACK_IMPORTED_MODULE_2__["promisify"](this.quickBlox.chat.muc.join, { context: this.quickBlox.chat.muc });
        // @ts-ignore
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].promiseToObservable(join_dialog(this.getJidFromDialogId(dialogId)));
    }
    getListMessage(request) {
        const get_list_message = bluebird__WEBPACK_IMPORTED_MODULE_2__["promisify"](this.quickBlox.chat.message.list, { context: this.quickBlox.chat.message });
        // @ts-ignore
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].promiseToObservable(get_list_message(_core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].serialize(request)));
    }
    createSessionAndConnect() {
        return this.createQuickbloxSession()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(success => {
            const sessionResp = success;
            const connectRequest = new ConnectToQuickbloxChat.Request();
            connectRequest.userId = sessionResp.user_id;
            connectRequest.password = sessionResp.token;
            return this.connectToChat(connectRequest)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(success2 => success));
        }));
    }
    deleteMessage(request) {
        const delete_message = bluebird__WEBPACK_IMPORTED_MODULE_2__["promisify"](this.quickBlox.chat.message.delete, { context: this.quickBlox.chat.message });
        // @ts-ignore
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].promiseToObservable(delete_message(request.messageId, _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].serialize(request.params)));
    }
    getUsers(request) {
        const get_users = bluebird__WEBPACK_IMPORTED_MODULE_2__["promisify"](this.quickBlox.users.get, { context: this.quickBlox.users });
        // @ts-ignore
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].promiseToObservable(get_users(_core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].serialize(request)));
    }
    createAndUploadFile(request) {
        const create_and_upload = bluebird__WEBPACK_IMPORTED_MODULE_2__["promisify"](this.quickBlox.content.createAndUpload, { context: this.quickBlox.content });
        // @ts-ignore
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].promiseToObservable(create_and_upload(_core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].serialize(request)));
    }
    setIsTypingStatus(dialog_id) {
        const set_is_typing = bluebird__WEBPACK_IMPORTED_MODULE_2__["promisify"](this.quickBlox.chat.sendIsTypingStatus, { context: this.quickBlox.chat });
        // @ts-ignore
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].promiseToObservable(set_is_typing(this.getJidFromDialogId(dialog_id)));
    }
    setIsStopTypingStatus(dialog_id) {
        const set_is_stop_typing = bluebird__WEBPACK_IMPORTED_MODULE_2__["promisify"](this.quickBlox.chat.sendIsStopTypingStatus, { context: this.quickBlox.chat });
        // @ts-ignore
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].promiseToObservable(set_is_stop_typing(this.getJidFromDialogId(dialog_id)));
    }
    createQuickbloxSession() {
        return this.quickbloxService.one('session')
            .customPOST({})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((success) => {
            this.quickBlox.init(success.session.token, success.session.application_id);
            return success.session;
        }));
    }
    getFilePrivateUrl(attachment) {
        const uploaded_file = new UploadedFile();
        uploaded_file.fileUploadUrl = this.quickBlox.content.publicUrl(attachment.uid);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(uploaded_file);
    }
};
QuickbloxService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['QuickBlox',] }] },
    { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_7__["Restangular"] }
];
QuickbloxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('QuickBlox')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, ngx_restangular__WEBPACK_IMPORTED_MODULE_7__["Restangular"]])
], QuickbloxService);



/***/ }),

/***/ "./src/app/signedin/pages/signedin-main-page/signedin-main-page.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/signedin/pages/signedin-main-page/signedin-main-page.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ25lZGluL3BhZ2VzL3NpZ25lZGluLW1haW4tcGFnZS9zaWduZWRpbi1tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/signedin/pages/signedin-main-page/signedin-main-page.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/signedin/pages/signedin-main-page/signedin-main-page.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SignedinMainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignedinMainPageComponent", function() { return SignedinMainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/page.component */ "./src/app/core/components/page.component.ts");



let SignedinMainPageComponent = class SignedinMainPageComponent extends _core_components_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"] {
    constructor(injector) {
        super(injector);
    }
    initializeComponent() {
    }
};
SignedinMainPageComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
SignedinMainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'signedin-main-page',
        template: __webpack_require__(/*! raw-loader!./signedin-main-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/signedin/pages/signedin-main-page/signedin-main-page.component.html"),
        styles: [__webpack_require__(/*! ./signedin-main-page.component.scss */ "./src/app/signedin/pages/signedin-main-page/signedin-main-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], SignedinMainPageComponent);



/***/ }),

/***/ "./src/app/signedin/signedin.module.ts":
/*!*********************************************!*\
  !*** ./src/app/signedin/signedin.module.ts ***!
  \*********************************************/
/*! exports provided: SignedinModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignedinModule", function() { return SignedinModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _signedin_pages_signedin_main_page_signedin_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @signedin/pages/signedin-main-page/signedin-main-page.component */ "./src/app/signedin/pages/signedin-main-page/signedin-main-page.component.ts");
/* harmony import */ var _signedin_signedin_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @signedin/signedin.routes */ "./src/app/signedin/signedin.routes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let SignedinModule = class SignedinModule {
};
SignedinModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _signedin_pages_signedin_main_page_signedin_main_page_component__WEBPACK_IMPORTED_MODULE_3__["SignedinMainPageComponent"]
        ],
        imports: [
            _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_signedin_signedin_routes__WEBPACK_IMPORTED_MODULE_4__["SIGNEDIN_ROUTES"])
        ],
        exports: [
            _signedin_pages_signedin_main_page_signedin_main_page_component__WEBPACK_IMPORTED_MODULE_3__["SignedinMainPageComponent"]
        ],
    })
], SignedinModule);



/***/ }),

/***/ "./src/app/signedin/signedin.routes.ts":
/*!*********************************************!*\
  !*** ./src/app/signedin/signedin.routes.ts ***!
  \*********************************************/
/*! exports provided: SIGNEDIN_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNEDIN_ROUTES", function() { return SIGNEDIN_ROUTES; });
/* harmony import */ var _signedin_pages_signedin_main_page_signedin_main_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @signedin/pages/signedin-main-page/signedin-main-page.component */ "./src/app/signedin/pages/signedin-main-page/signedin-main-page.component.ts");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _quickblox_quickblox_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @quickblox/quickblox.resolver */ "./src/app/quickblox/quickblox.resolver.ts");



const SIGNEDIN_ROUTES = [
    {
        path: '',
        component: _signedin_pages_signedin_main_page_signedin_main_page_component__WEBPACK_IMPORTED_MODULE_0__["SignedinMainPageComponent"],
        canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        canActivateChild: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        children: [
            { path: 'profile', loadChildren: '@user-profiles/user-profiles.module#UserProfilesModule' },
            { path: 'events', loadChildren: '@events/events.module#EventsModule' },
            {
                path: 'chats',
                loadChildren: '@chat/chat.module#ChatModule',
                resolve: { quickbloxSession: _quickblox_quickblox_resolver__WEBPACK_IMPORTED_MODULE_2__["QuickbloxSessionResolver"] }
            },
        ]
    }
];


/***/ }),

/***/ "./src/app/users/cognito.service.ts":
/*!******************************************!*\
  !*** ./src/app/users/cognito.service.ts ***!
  \******************************************/
/*! exports provided: CognitoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CognitoService", function() { return CognitoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm2015/ngx-restangular.js");
/* harmony import */ var _core_http_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/http/rest.service */ "./src/app/core/http/rest.service.ts");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");
/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @environment/environment */ "./src/environments/environment.ts");







let CognitoService = class CognitoService extends _core_http_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] {
    constructor(restangular) {
        super(restangular);
    }
    signUp(request) {
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].promiseToObservable(aws_amplify__WEBPACK_IMPORTED_MODULE_5__["Auth"].signUp(super.serialize(request)));
    }
    confirmSignUp(request) {
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].promiseToObservable(aws_amplify__WEBPACK_IMPORTED_MODULE_5__["Auth"].confirmSignUp(request.phone_number, request.token, {}));
    }
    resendSignUp(request) {
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].promiseToObservable(aws_amplify__WEBPACK_IMPORTED_MODULE_5__["Auth"].resendSignUp(request.phone_number));
    }
    signIn(request) {
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].promiseToObservable(aws_amplify__WEBPACK_IMPORTED_MODULE_5__["Auth"].signIn(super.serialize(request)));
    }
    signOut(global) {
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].promiseToObservable(aws_amplify__WEBPACK_IMPORTED_MODULE_5__["Auth"].signOut({ global }));
    }
    forgotPassword(request) {
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].promiseToObservable(aws_amplify__WEBPACK_IMPORTED_MODULE_5__["Auth"].forgotPassword(request.user_name));
    }
    forgotPasswordSubmit(request) {
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].promiseToObservable(aws_amplify__WEBPACK_IMPORTED_MODULE_5__["Auth"].forgotPasswordSubmit(request.email, request.token, request.password));
    }
    changePassword(request) {
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].promiseToObservable(this.currentAuthenticatedUser()
            .then(user => {
            return aws_amplify__WEBPACK_IMPORTED_MODULE_5__["Auth"].changePassword(user, request.old_password, request.new_password);
        }));
    }
    verifyCurrentUserAttribute(type) {
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].promiseToObservable(aws_amplify__WEBPACK_IMPORTED_MODULE_5__["Auth"].verifyCurrentUserAttribute(type));
    }
    verifyCurrentUserAttributeSubmit(request) {
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].promiseToObservable(aws_amplify__WEBPACK_IMPORTED_MODULE_5__["Auth"].verifyCurrentUserAttributeSubmit(request.type, request.token));
    }
    updateUserAttributes(request) {
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].promiseToObservable(this.currentAuthenticatedUser().then(user => {
            return aws_amplify__WEBPACK_IMPORTED_MODULE_5__["Auth"].updateUserAttributes(user, super.serialize(request));
        }));
    }
    currentAuthenticatedUser() {
        return aws_amplify__WEBPACK_IMPORTED_MODULE_5__["Auth"].currentAuthenticatedUser({ bypassCache: true });
    }
    federatedSignin(type) {
        aws_amplify__WEBPACK_IMPORTED_MODULE_5__["Auth"].configure(_environment_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].auth);
        // @ts-ignore
        return _core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].promiseToObservable(aws_amplify__WEBPACK_IMPORTED_MODULE_5__["Auth"].federatedSignIn({ provider: type }));
    }
};
CognitoService.ctorParameters = () => [
    { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_3__["Restangular"] }
];
CognitoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_3__["Restangular"]])
], CognitoService);



/***/ }),

/***/ "./src/app/users/components/users-all-users-profiles/users-all-users-profiles.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/users/components/users-all-users-profiles/users-all-users-profiles.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvdXNlcnMtYWxsLXVzZXJzLXByb2ZpbGVzL3VzZXJzLWFsbC11c2Vycy1wcm9maWxlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/users/components/users-all-users-profiles/users-all-users-profiles.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/users/components/users-all-users-profiles/users-all-users-profiles.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: UsersAllUsersProfilesComponent, UsersAllUsersProfilesNoTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersAllUsersProfilesComponent", function() { return UsersAllUsersProfilesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersAllUsersProfilesNoTemplateComponent", function() { return UsersAllUsersProfilesNoTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @users/users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _users_users_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @users/users.models */ "./src/app/users/users.models.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");







var GetAllUserProfiles = _users_users_models__WEBPACK_IMPORTED_MODULE_4__["UserRequests"].GetAllUserProfiles;
var UserProfile = _core_core_models__WEBPACK_IMPORTED_MODULE_5__["Users"].UserProfile;
let UsersAllUsersProfilesComponent = class UsersAllUsersProfilesComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(usersService, injector) {
        super(injector);
        this.usersService = usersService;
        this.userProfilesReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
        this.getAllUserProfiles(this.createRequestData());
    }
    createRequestData() {
        return new GetAllUserProfiles.Request();
    }
    getAllUserProfiles(request) {
        this.usersService.getAllUserProfiles(request).pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_6__["CommonsService"].deserializeMap(UserProfile))
            .subscribe(value => {
            this.user_profiles = value;
            this.userProfilesReceived.emit(value);
        });
    }
};
UsersAllUsersProfilesComponent.ctorParameters = () => [
    { type: _users_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UsersAllUsersProfilesComponent.prototype, "userProfilesReceived", void 0);
UsersAllUsersProfilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-all-users-profiles',
        template: __webpack_require__(/*! raw-loader!./users-all-users-profiles.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-all-users-profiles/users-all-users-profiles.component.html"),
        styles: [__webpack_require__(/*! ./users-all-users-profiles.component.scss */ "./src/app/users/components/users-all-users-profiles/users-all-users-profiles.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UsersAllUsersProfilesComponent);

let UsersAllUsersProfilesNoTemplateComponent = class UsersAllUsersProfilesNoTemplateComponent extends UsersAllUsersProfilesComponent {
};
UsersAllUsersProfilesNoTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-all-users-profiles-no-template',
        template: __webpack_require__(/*! raw-loader!./users-all-users-profiles-no-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-all-users-profiles/users-all-users-profiles-no-template.component.html"),
        styles: [__webpack_require__(/*! ./users-all-users-profiles.component.scss */ "./src/app/users/components/users-all-users-profiles/users-all-users-profiles.component.scss")]
    })
], UsersAllUsersProfilesNoTemplateComponent);



/***/ }),

/***/ "./src/app/users/components/users-filter-user-profiles/users-filter-user-profiles.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/users/components/users-filter-user-profiles/users-filter-user-profiles.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvdXNlcnMtZmlsdGVyLXVzZXItcHJvZmlsZXMvdXNlcnMtZmlsdGVyLXVzZXItcHJvZmlsZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/users/components/users-filter-user-profiles/users-filter-user-profiles.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/users/components/users-filter-user-profiles/users-filter-user-profiles.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: UsersFilterUserProfilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersFilterUserProfilesComponent", function() { return UsersFilterUserProfilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @users/users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _users_users_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @users/users.models */ "./src/app/users/users.models.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");






var FilterUserProfiles = _users_users_models__WEBPACK_IMPORTED_MODULE_4__["UserRequests"].FilterUserProfiles;
let UsersFilterUserProfilesComponent = class UsersFilterUserProfilesComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(usersService, injector) {
        super(injector);
        this.usersService = usersService;
        this.userProfilesRecieved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
        this.filterUserProfiles(this.createRequestData());
    }
    createRequestData(gender, min_age, max_age, latitude, longitude, distance) {
        const request = new FilterUserProfiles.Request();
        request.distance = distance || this.distance;
        request.latitude = latitude || this.latitude;
        request.longitude = longitude || this.longitude;
        request.minAge = min_age || this.minAge;
        request.maxAge = max_age || this.maxAge;
        request.gender = gender || this.gender;
        return request;
    }
    filterUserProfiles(request) {
        this.usersService.filterUserProfiles(request).pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_5__["CommonsService"].deserializeMap(FilterUserProfiles.Response))
            .subscribe(value => {
            this.user_profiles = value;
            this.userProfilesRecieved.emit(value);
        });
    }
};
UsersFilterUserProfilesComponent.ctorParameters = () => [
    { type: _users_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], UsersFilterUserProfilesComponent.prototype, "minAge", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], UsersFilterUserProfilesComponent.prototype, "maxAge", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], UsersFilterUserProfilesComponent.prototype, "latitude", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], UsersFilterUserProfilesComponent.prototype, "longitude", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], UsersFilterUserProfilesComponent.prototype, "distance", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UsersFilterUserProfilesComponent.prototype, "gender", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UsersFilterUserProfilesComponent.prototype, "userProfilesRecieved", void 0);
UsersFilterUserProfilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-filter-user-profiles',
        template: __webpack_require__(/*! raw-loader!./users-filter-user-profiles.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-filter-user-profiles/users-filter-user-profiles.component.html"),
        styles: [__webpack_require__(/*! ./users-filter-user-profiles.component.scss */ "./src/app/users/components/users-filter-user-profiles/users-filter-user-profiles.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UsersFilterUserProfilesComponent);



/***/ }),

/***/ "./src/app/users/components/users-user-cognito-confirm-signup/users-user-cognito-confirm-signup.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-cognito-confirm-signup/users-user-cognito-confirm-signup.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvdXNlcnMtdXNlci1jb2duaXRvLWNvbmZpcm0tc2lnbnVwL3VzZXJzLXVzZXItY29nbml0by1jb25maXJtLXNpZ251cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/users/components/users-user-cognito-confirm-signup/users-user-cognito-confirm-signup.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-cognito-confirm-signup/users-user-cognito-confirm-signup.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: UsersUserCognitoConfirmSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserCognitoConfirmSignupComponent", function() { return UsersUserCognitoConfirmSignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/form.component */ "./src/app/core/components/form.component.ts");
/* harmony import */ var _users_cognito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @users/cognito.service */ "./src/app/users/cognito.service.ts");
/* harmony import */ var _users_users_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @users/users.models */ "./src/app/users/users.models.ts");
/* harmony import */ var _users_users_form_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @users/users.form.models */ "./src/app/users/users.form.models.ts");






var ConfirmSignUp = _users_users_models__WEBPACK_IMPORTED_MODULE_4__["CognitoRequests"].ConfirmSignUp;
let UsersUserCognitoConfirmSignupComponent = class UsersUserCognitoConfirmSignupComponent extends _core_components_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"] {
    constructor(cognitoService, injector) {
        super(injector);
        this.cognitoService = cognitoService;
        this.confirmSignUpSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.confirmSignUpError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formLayout = _users_users_form_models__WEBPACK_IMPORTED_MODULE_5__["USER_COGNITO_CONFIRM_SIGNUP_FORM_LAYOUT"];
    }
    initializeComponent() { }
    afterInitializeComponent() { }
    getFormModel() {
        return _users_users_form_models__WEBPACK_IMPORTED_MODULE_5__["USER_REGISTER_OTP_VERIFICATION_FORM_MODEL"];
    }
    createRequestData(email, phone_number, token) {
        const request = new ConfirmSignUp.Request();
        request.email = email || this.email;
        request.phone_number = phone_number || this.phoneNumber;
        request.token = token || this.getInputModelValueAsString("token");
        return request;
    }
    confirmSignUp(request) {
        this.user_cognito_confirm_sign_up_subscription$ = this.cognitoService
            .confirmSignUp(request)
            .subscribe((success) => {
            this.confirmSignUpSuccess.emit(success);
            this.notificationsService.success("Registered Successfully. Please Login");
        }, (error) => {
            this.confirmSignUpError.emit(error);
            this.notificationsService.error(error.message);
        });
    }
};
UsersUserCognitoConfirmSignupComponent.ctorParameters = () => [
    { type: _users_cognito_service__WEBPACK_IMPORTED_MODULE_3__["CognitoService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UsersUserCognitoConfirmSignupComponent.prototype, "email", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UsersUserCognitoConfirmSignupComponent.prototype, "phoneNumber", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UsersUserCognitoConfirmSignupComponent.prototype, "confirmSignUpSuccess", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UsersUserCognitoConfirmSignupComponent.prototype, "confirmSignUpError", void 0);
UsersUserCognitoConfirmSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "users-user-cognito-confirm-signup",
        template: __webpack_require__(/*! raw-loader!./users-user-cognito-confirm-signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-cognito-confirm-signup/users-user-cognito-confirm-signup.component.html"),
        styles: [__webpack_require__(/*! ./users-user-cognito-confirm-signup.component.scss */ "./src/app/users/components/users-user-cognito-confirm-signup/users-user-cognito-confirm-signup.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_cognito_service__WEBPACK_IMPORTED_MODULE_3__["CognitoService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UsersUserCognitoConfirmSignupComponent);



/***/ }),

/***/ "./src/app/users/components/users-user-cognito-forgot-password/users-user-cognito-forgot-password.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-cognito-forgot-password/users-user-cognito-forgot-password.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvdXNlcnMtdXNlci1jb2duaXRvLWZvcmdvdC1wYXNzd29yZC91c2Vycy11c2VyLWNvZ25pdG8tZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/components/users-user-cognito-forgot-password/users-user-cognito-forgot-password.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-cognito-forgot-password/users-user-cognito-forgot-password.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: UsersUserCognitoForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserCognitoForgotPasswordComponent", function() { return UsersUserCognitoForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/form.component */ "./src/app/core/components/form.component.ts");
/* harmony import */ var _users_cognito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @users/cognito.service */ "./src/app/users/cognito.service.ts");
/* harmony import */ var _users_users_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @users/users.models */ "./src/app/users/users.models.ts");
/* harmony import */ var _users_users_form_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @users/users.form.models */ "./src/app/users/users.form.models.ts");






var ForgotPassword = _users_users_models__WEBPACK_IMPORTED_MODULE_4__["CognitoRequests"].ForgotPassword;
let UsersUserCognitoForgotPasswordComponent = class UsersUserCognitoForgotPasswordComponent extends _core_components_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"] {
    constructor(cognitoService, injector) {
        super(injector);
        this.cognitoService = cognitoService;
        this.forgotPasswordSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cognitoForgotPasswordError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formLayout = _users_users_form_models__WEBPACK_IMPORTED_MODULE_5__["USER_COGNITO_FORGOT_PASSWORD_FORM_LAYOUT"];
    }
    afterInitializeComponent() {
    }
    getFormModel() {
        return _users_users_form_models__WEBPACK_IMPORTED_MODULE_5__["USER_COGNITO_FORGOT_PASSWORD_FORM_MODEL"];
    }
    initializeComponent() {
    }
    createRequestData(user_name) {
        const request = new ForgotPassword.Request();
        request.user_name = user_name || this.getInputModelValueAsString('user_name');
        return request;
    }
    forgotPassword(request) {
        this.user_cognito_forgot_password_subscription$ =
            this.cognitoService.forgotPassword(request)
                .subscribe(success => {
                this.forgotPasswordSuccess.emit(success);
                this.notificationsService.success('Verification Code Sent');
                this.resetForm();
            });
    }
};
UsersUserCognitoForgotPasswordComponent.ctorParameters = () => [
    { type: _users_cognito_service__WEBPACK_IMPORTED_MODULE_3__["CognitoService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UsersUserCognitoForgotPasswordComponent.prototype, "cognitoEmail", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UsersUserCognitoForgotPasswordComponent.prototype, "forgotPasswordSuccess", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UsersUserCognitoForgotPasswordComponent.prototype, "cognitoForgotPasswordError", void 0);
UsersUserCognitoForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-user-cognito-forgot-password',
        template: __webpack_require__(/*! raw-loader!./users-user-cognito-forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-cognito-forgot-password/users-user-cognito-forgot-password.component.html"),
        styles: [__webpack_require__(/*! ./users-user-cognito-forgot-password.component.scss */ "./src/app/users/components/users-user-cognito-forgot-password/users-user-cognito-forgot-password.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_cognito_service__WEBPACK_IMPORTED_MODULE_3__["CognitoService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UsersUserCognitoForgotPasswordComponent);



/***/ }),

/***/ "./src/app/users/components/users-user-cognito-login/users-user-cognito-login.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-cognito-login/users-user-cognito-login.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvdXNlcnMtdXNlci1jb2duaXRvLWxvZ2luL3VzZXJzLXVzZXItY29nbml0by1sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/users/components/users-user-cognito-login/users-user-cognito-login.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-cognito-login/users-user-cognito-login.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: UsersUserCognitoLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserCognitoLoginComponent", function() { return UsersUserCognitoLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/form.component */ "./src/app/core/components/form.component.ts");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/storage.service */ "./src/app/core/storage.service.ts");
/* harmony import */ var _users_cognito_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @users/cognito.service */ "./src/app/users/cognito.service.ts");
/* harmony import */ var _users_users_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @users/users.models */ "./src/app/users/users.models.ts");
/* harmony import */ var _users_users_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @users/users.constants */ "./src/app/users/users.constants.ts");
/* harmony import */ var _users_users_form_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @users/users.form.models */ "./src/app/users/users.form.models.ts");








var SignIn = _users_users_models__WEBPACK_IMPORTED_MODULE_5__["CognitoRequests"].SignIn;
let UsersUserCognitoLoginComponent = class UsersUserCognitoLoginComponent extends _core_components_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"] {
    constructor(cognitoService, storageService, injector) {
        super(injector);
        this.cognitoService = cognitoService;
        this.storageService = storageService;
        this.signInSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.signInError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.confirmationError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.passwordResetError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formLayout = _users_users_form_models__WEBPACK_IMPORTED_MODULE_7__["USER_COGNITO_SIGN_IN_FORM_LAYOUT"];
    }
    afterInitializeComponent() {
    }
    getFormModel() {
        return _users_users_form_models__WEBPACK_IMPORTED_MODULE_7__["USER_COGNITO_SIGN_IN_FORM_MODEL"];
    }
    initializeComponent() {
    }
    createRequestData(user_name, password) {
        const request = new SignIn.Request();
        request.user_name = user_name || this.getInputModelValueAsString('user_name');
        request.password = password || this.getInputModelValueAsString('password');
        return request;
    }
    signIn(request) {
        this.cognitoService.signIn(request)
            .subscribe(user => {
            this.signInSuccess.emit(user);
            this.resetForm();
        }, error => {
            switch (error.code) {
                case _users_users_constants__WEBPACK_IMPORTED_MODULE_6__["UserConstants"].COGNITO_ERROR_STATUS_CODES.USER_NOT_CONFIRMED_EXCEPTION:
                    this.confirmationError.emit(true);
                    this.notificationsService.error(error.message);
                    break;
                case _users_users_constants__WEBPACK_IMPORTED_MODULE_6__["UserConstants"].COGNITO_ERROR_STATUS_CODES.NOT_AUTHORIZED_EXCEPTION:
                    this.signInError.emit(error);
                    this.notificationsService.error(error.message);
                    break;
                case _users_users_constants__WEBPACK_IMPORTED_MODULE_6__["UserConstants"].COGNITO_ERROR_STATUS_CODES.USER_NOT_FOUND_EXCEPTION:
                    this.signInError.emit(error);
                    this.notificationsService.error(error.message);
                    break;
                case _users_users_constants__WEBPACK_IMPORTED_MODULE_6__["UserConstants"].COGNITO_ERROR_STATUS_CODES.PASSWORD_REST_REQUIRED_EXCEPTION:
                    this.passwordResetError.emit(error);
                    this.resetForm();
                    break;
            }
        });
    }
};
UsersUserCognitoLoginComponent.ctorParameters = () => [
    { type: _users_cognito_service__WEBPACK_IMPORTED_MODULE_4__["CognitoService"] },
    { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UsersUserCognitoLoginComponent.prototype, "signInSuccess", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UsersUserCognitoLoginComponent.prototype, "signInError", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UsersUserCognitoLoginComponent.prototype, "confirmationError", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UsersUserCognitoLoginComponent.prototype, "passwordResetError", void 0);
UsersUserCognitoLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-user-cognito-login',
        template: __webpack_require__(/*! raw-loader!./users-user-cognito-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-cognito-login/users-user-cognito-login.component.html"),
        styles: [__webpack_require__(/*! ./users-user-cognito-login.component.scss */ "./src/app/users/components/users-user-cognito-login/users-user-cognito-login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_cognito_service__WEBPACK_IMPORTED_MODULE_4__["CognitoService"], _core_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UsersUserCognitoLoginComponent);



/***/ }),

/***/ "./src/app/users/components/users-user-cognito-logout/users-user-cognito-logout.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-cognito-logout/users-user-cognito-logout.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvdXNlcnMtdXNlci1jb2duaXRvLWxvZ291dC91c2Vycy11c2VyLWNvZ25pdG8tbG9nb3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/components/users-user-cognito-logout/users-user-cognito-logout.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-cognito-logout/users-user-cognito-logout.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: UsersUserCognitoLogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserCognitoLogoutComponent", function() { return UsersUserCognitoLogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _users_cognito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @users/cognito.service */ "./src/app/users/cognito.service.ts");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/storage.service */ "./src/app/core/storage.service.ts");





let UsersUserCognitoLogoutComponent = class UsersUserCognitoLogoutComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(cognitoService, storageService, injector) {
        super(injector);
        this.cognitoService = cognitoService;
        this.storageService = storageService;
        this.signOutSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.signOutError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
    }
    signOut(value) {
        this.cognitoService.signOut(this.global || value)
            .subscribe(success => {
            this.authService.clearAll();
            this.signOutSuccess.emit(true);
        }, error => {
            this.signOutError.emit(error);
        });
    }
};
UsersUserCognitoLogoutComponent.ctorParameters = () => [
    { type: _users_cognito_service__WEBPACK_IMPORTED_MODULE_3__["CognitoService"] },
    { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], UsersUserCognitoLogoutComponent.prototype, "global", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UsersUserCognitoLogoutComponent.prototype, "signOutSuccess", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UsersUserCognitoLogoutComponent.prototype, "signOutError", void 0);
UsersUserCognitoLogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-user-cognito-logout',
        template: __webpack_require__(/*! raw-loader!./users-user-cognito-logout.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-cognito-logout/users-user-cognito-logout.component.html"),
        styles: [__webpack_require__(/*! ./users-user-cognito-logout.component.scss */ "./src/app/users/components/users-user-cognito-logout/users-user-cognito-logout.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_cognito_service__WEBPACK_IMPORTED_MODULE_3__["CognitoService"], _core_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UsersUserCognitoLogoutComponent);



/***/ }),

/***/ "./src/app/users/components/users-user-cognito-resend-signup-confirm/users-user-cognito-resend-signup-confirm.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-cognito-resend-signup-confirm/users-user-cognito-resend-signup-confirm.component.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvdXNlcnMtdXNlci1jb2duaXRvLXJlc2VuZC1zaWdudXAtY29uZmlybS91c2Vycy11c2VyLWNvZ25pdG8tcmVzZW5kLXNpZ251cC1jb25maXJtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/components/users-user-cognito-resend-signup-confirm/users-user-cognito-resend-signup-confirm.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-cognito-resend-signup-confirm/users-user-cognito-resend-signup-confirm.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: UsersUserCognitoResendSignupConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserCognitoResendSignupConfirmComponent", function() { return UsersUserCognitoResendSignupConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _users_cognito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @users/cognito.service */ "./src/app/users/cognito.service.ts");
/* harmony import */ var _users_users_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @users/users.models */ "./src/app/users/users.models.ts");





var ResendSignUp = _users_users_models__WEBPACK_IMPORTED_MODULE_4__["CognitoRequests"].ResendSignUp;
let UsersUserCognitoResendSignupConfirmComponent = class UsersUserCognitoResendSignupConfirmComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(cognitoService, injector) {
        super(injector);
        this.cognitoService = cognitoService;
        this.resendSignUpSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.resendSignUpError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
    }
    createRequestData(phone_number) {
        const request = new ResendSignUp.Request();
        request.phone_number = phone_number || this.phoneNumber;
        return request;
    }
    resendSignUp(request) {
        this.user_cognito_resend_sign_up_subscription$ =
            this.cognitoService.resendSignUp(request)
                .subscribe(success => {
                this.resendSignUpSuccess.emit(success);
                this.notificationsService.success('Code Sent');
            }, error => {
                this.resendSignUpError.emit(error);
                this.notificationsService.error(error.message);
            });
    }
};
UsersUserCognitoResendSignupConfirmComponent.ctorParameters = () => [
    { type: _users_cognito_service__WEBPACK_IMPORTED_MODULE_3__["CognitoService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UsersUserCognitoResendSignupConfirmComponent.prototype, "phoneNumber", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UsersUserCognitoResendSignupConfirmComponent.prototype, "resendSignUpSuccess", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UsersUserCognitoResendSignupConfirmComponent.prototype, "resendSignUpError", void 0);
UsersUserCognitoResendSignupConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-user-cognito-resend-signup-confirm',
        template: __webpack_require__(/*! raw-loader!./users-user-cognito-resend-signup-confirm.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-cognito-resend-signup-confirm/users-user-cognito-resend-signup-confirm.component.html"),
        styles: [__webpack_require__(/*! ./users-user-cognito-resend-signup-confirm.component.scss */ "./src/app/users/components/users-user-cognito-resend-signup-confirm/users-user-cognito-resend-signup-confirm.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_cognito_service__WEBPACK_IMPORTED_MODULE_3__["CognitoService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UsersUserCognitoResendSignupConfirmComponent);



/***/ }),

/***/ "./src/app/users/components/users-user-cognito-signup/users-user-cognito-signup.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-cognito-signup/users-user-cognito-signup.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvdXNlcnMtdXNlci1jb2duaXRvLXNpZ251cC91c2Vycy11c2VyLWNvZ25pdG8tc2lnbnVwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/components/users-user-cognito-signup/users-user-cognito-signup.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-cognito-signup/users-user-cognito-signup.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: UsersUserCognitoSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserCognitoSignupComponent", function() { return UsersUserCognitoSignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/form.component */ "./src/app/core/components/form.component.ts");
/* harmony import */ var _users_cognito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @users/cognito.service */ "./src/app/users/cognito.service.ts");
/* harmony import */ var _users_users_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @users/users.models */ "./src/app/users/users.models.ts");
/* harmony import */ var _users_users_form_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @users/users.form.models */ "./src/app/users/users.form.models.ts");






var SignUp = _users_users_models__WEBPACK_IMPORTED_MODULE_4__["CognitoRequests"].SignUp;
var CognitoSignupUserAttribute = _users_users_models__WEBPACK_IMPORTED_MODULE_4__["CognitoRequests"].CognitoSignupUserAttribute;
let UsersUserCognitoSignupComponent = class UsersUserCognitoSignupComponent extends _core_components_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"] {
    constructor(cognitoService, injector) {
        super(injector);
        this.cognitoService = cognitoService;
        this.signUpSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.signUpError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formLayout = _users_users_form_models__WEBPACK_IMPORTED_MODULE_5__["USER_COGNITO_SIGNUP_FORM_LAYOUT"];
    }
    afterInitializeComponent() {
    }
    getFormModel() {
        return Object(_users_users_form_models__WEBPACK_IMPORTED_MODULE_5__["getUserCognitoSignupFormModel"])();
    }
    initializeComponent() {
    }
    createRequestData(user_name, password, email, phone_number, name, gender, birthdate) {
        const attributes = new CognitoSignupUserAttribute();
        const request = new SignUp.Request();
        request.attributes = new CognitoSignupUserAttribute();
        request.password = password || this.getInputModelValueAsString('password');
        attributes.email = user_name || this.getInputModelValueAsString('email');
        attributes.phone_number = phone_number || this.getInputModelValueAsString('user_name');
        request.user_name = attributes.phone_number;
        request.attributes = attributes;
        return request;
    }
    signUp(request) {
        this.user_cognito_sign_up_subscription$ =
            this.cognitoService.signUp(request)
                .subscribe(success => {
                this.resetForm();
                this.signUpSuccess.emit(success);
            }, error => {
                this.signUpError.emit(error);
                this.notificationsService.error(error.message);
            });
    }
};
UsersUserCognitoSignupComponent.ctorParameters = () => [
    { type: _users_cognito_service__WEBPACK_IMPORTED_MODULE_3__["CognitoService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UsersUserCognitoSignupComponent.prototype, "signUpSuccess", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UsersUserCognitoSignupComponent.prototype, "signUpError", void 0);
UsersUserCognitoSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-user-cognito-signup',
        template: __webpack_require__(/*! raw-loader!./users-user-cognito-signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-cognito-signup/users-user-cognito-signup.component.html"),
        styles: [__webpack_require__(/*! ./users-user-cognito-signup.component.scss */ "./src/app/users/components/users-user-cognito-signup/users-user-cognito-signup.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_cognito_service__WEBPACK_IMPORTED_MODULE_3__["CognitoService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UsersUserCognitoSignupComponent);



/***/ }),

/***/ "./src/app/users/components/users-user-profile-by-user/users-user-profile-by-user.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-profile-by-user/users-user-profile-by-user.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvdXNlcnMtdXNlci1wcm9maWxlLWJ5LXVzZXIvdXNlcnMtdXNlci1wcm9maWxlLWJ5LXVzZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/users/components/users-user-profile-by-user/users-user-profile-by-user.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-profile-by-user/users-user-profile-by-user.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: UsersUserProfileByUserComponent, UsersUserProfileByUserNoTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserProfileByUserComponent", function() { return UsersUserProfileByUserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserProfileByUserNoTemplateComponent", function() { return UsersUserProfileByUserNoTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _users_users_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @users/users.models */ "./src/app/users/users.models.ts");
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @users/users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");







var UserAccount = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["Users"].UserAccount;
var UserProfile = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["Users"].UserProfile;
var GetUserProfileByUser = _users_users_models__WEBPACK_IMPORTED_MODULE_4__["UserRequests"].GetUserProfileByUser;
let UsersUserProfileByUserComponent = class UsersUserProfileByUserComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"] {
    constructor(usersService, injector) {
        super(injector);
        this.usersService = usersService;
        this.userProfileReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
        this.getUserProfileByUser(this.createRequestData());
    }
    createRequestData(user_account) {
        const request = new GetUserProfileByUser.Request();
        request.user = (user_account || this.userAccount)._id;
        return request;
    }
    getUserProfileByUser(request) {
        this.usersService.getUserProfileByUser(request).pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_6__["CommonsService"].deserializeMap(UserProfile))
            .subscribe(value => {
            this.user_profile = value;
            this.userProfileReceived.emit(value);
        });
    }
};
UsersUserProfileByUserComponent.ctorParameters = () => [
    { type: _users_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", UserAccount)
], UsersUserProfileByUserComponent.prototype, "userAccount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UsersUserProfileByUserComponent.prototype, "userProfileReceived", void 0);
UsersUserProfileByUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-user-profile-by-user',
        template: __webpack_require__(/*! raw-loader!./users-user-profile-by-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-by-user/users-user-profile-by-user.component.html"),
        styles: [__webpack_require__(/*! ./users-user-profile-by-user.component.scss */ "./src/app/users/components/users-user-profile-by-user/users-user-profile-by-user.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UsersUserProfileByUserComponent);

let UsersUserProfileByUserNoTemplateComponent = class UsersUserProfileByUserNoTemplateComponent extends UsersUserProfileByUserComponent {
};
UsersUserProfileByUserNoTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-user-profile-by-user-no-template',
        template: __webpack_require__(/*! raw-loader!./users-user-profile-by-user-no-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-by-user/users-user-profile-by-user-no-template.component.html"),
        styles: [__webpack_require__(/*! ./users-user-profile-by-user.component.scss */ "./src/app/users/components/users-user-profile-by-user/users-user-profile-by-user.component.scss")]
    })
], UsersUserProfileByUserNoTemplateComponent);



/***/ }),

/***/ "./src/app/users/components/users-user-profile-create-or-update-form/users-user-profile-create-or-update-form.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-profile-create-or-update-form/users-user-profile-create-or-update-form.component.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvdXNlcnMtdXNlci1wcm9maWxlLWNyZWF0ZS1vci11cGRhdGUtZm9ybS91c2Vycy11c2VyLXByb2ZpbGUtY3JlYXRlLW9yLXVwZGF0ZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/components/users-user-profile-create-or-update-form/users-user-profile-create-or-update-form.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-profile-create-or-update-form/users-user-profile-create-or-update-form.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: UsersUserProfileCreateOrUpdateFormComponent, UsersUserProfileCreateOrUpdateSpecificFormComponent, UsersUserProfileCreateOrUpdateSpecificLocationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserProfileCreateOrUpdateFormComponent", function() { return UsersUserProfileCreateOrUpdateFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserProfileCreateOrUpdateSpecificFormComponent", function() { return UsersUserProfileCreateOrUpdateSpecificFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserProfileCreateOrUpdateSpecificLocationFormComponent", function() { return UsersUserProfileCreateOrUpdateSpecificLocationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/form.component */ "./src/app/core/components/form.component.ts");
/* harmony import */ var _users_users_form_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @users/users.form.models */ "./src/app/users/users.form.models.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _users_components_users_user_profile_create_or_update_users_user_profile_create_or_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @users/components/users-user-profile-create-or-update/users-user-profile-create-or-update.component */ "./src/app/users/components/users-user-profile-create-or-update/users-user-profile-create-or-update.component.ts");
/* harmony import */ var _users_users_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @users/users.constants */ "./src/app/users/users.constants.ts");





// tslint:disable-next-line:max-line-length


var UserProfileValue = _core_core_models__WEBPACK_IMPORTED_MODULE_4__["Users"].UserProfileValue;
var LocationValue = _core_core_models__WEBPACK_IMPORTED_MODULE_4__["Users"].LocationValue;
let UsersUserProfileCreateOrUpdateFormComponent = class UsersUserProfileCreateOrUpdateFormComponent extends _core_components_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"] {
    constructor(injector) {
        super(injector);
        this.userProfileChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    afterInitializeComponent() {
    }
    getFormModel() {
        return _users_users_form_models__WEBPACK_IMPORTED_MODULE_3__["USER_PROFILE_CREATE_OR_UPDATE"];
    }
    initializeComponent() {
        this.users_user_profile_create_or_update_component.userProfileCreated.subscribe(value => {
            this.userProfileChanged.emit(value);
        });
    }
    createRequestData() {
        const array = [];
        array.push(this.users_user_profile_create_or_update_component.createProfileEntry('WORK', this.getInputModelValueAsString(_users_users_constants__WEBPACK_IMPORTED_MODULE_6__["UserConstants"].USER_PROFILE_ENTRY_NAME.WORK), 'PUBLIC'));
        array.push(this.users_user_profile_create_or_update_component.createProfileEntry(_users_users_constants__WEBPACK_IMPORTED_MODULE_6__["UserConstants"].USER_PROFILE_ENTRY_NAME.NAME, this.getInputModelValueAsString(_users_users_constants__WEBPACK_IMPORTED_MODULE_6__["UserConstants"].USER_PROFILE_ENTRY_NAME.NAME), 'PUBLIC'));
        array.push(this.users_user_profile_create_or_update_component.createProfileEntry(_users_users_constants__WEBPACK_IMPORTED_MODULE_6__["UserConstants"].USER_PROFILE_ENTRY_NAME.AGE, this.getInputModelValueAsString(_users_users_constants__WEBPACK_IMPORTED_MODULE_6__["UserConstants"].USER_PROFILE_ENTRY_NAME.AGE), 'PUBLIC'));
        array.push(this.users_user_profile_create_or_update_component.createProfileEntry(_users_users_constants__WEBPACK_IMPORTED_MODULE_6__["UserConstants"].USER_PROFILE_ENTRY_NAME.GENDER, this.getInputModelValueAsString(_users_users_constants__WEBPACK_IMPORTED_MODULE_6__["UserConstants"].USER_PROFILE_ENTRY_NAME.GENDER), 'PUBLIC'));
        array.push(this.users_user_profile_create_or_update_component.createProfileEntry(_users_users_constants__WEBPACK_IMPORTED_MODULE_6__["UserConstants"].USER_PROFILE_ENTRY_NAME.KIDS, this.getInputModelValueAsString(_users_users_constants__WEBPACK_IMPORTED_MODULE_6__["UserConstants"].USER_PROFILE_ENTRY_NAME.KIDS), 'PUBLIC'));
        array.push(this.users_user_profile_create_or_update_component.createProfileEntry(_users_users_constants__WEBPACK_IMPORTED_MODULE_6__["UserConstants"].USER_PROFILE_ENTRY_NAME.FAMILY_PLANS, this.getInputModelValueAsString(_users_users_constants__WEBPACK_IMPORTED_MODULE_6__["UserConstants"].USER_PROFILE_ENTRY_NAME.FAMILY_PLANS), 'PUBLIC'));
        array.push(this.users_user_profile_create_or_update_component.createProfileEntry(_users_users_constants__WEBPACK_IMPORTED_MODULE_6__["UserConstants"].USER_PROFILE_ENTRY_NAME.DRINKING, this.getInputModelValueAsString(_users_users_constants__WEBPACK_IMPORTED_MODULE_6__["UserConstants"].USER_PROFILE_ENTRY_NAME.DRINKING), 'PUBLIC'));
        array.push(this.users_user_profile_create_or_update_component.createProfileEntry(_users_users_constants__WEBPACK_IMPORTED_MODULE_6__["UserConstants"].USER_PROFILE_ENTRY_NAME.SMOKING, this.getInputModelValueAsString(_users_users_constants__WEBPACK_IMPORTED_MODULE_6__["UserConstants"].USER_PROFILE_ENTRY_NAME.SMOKING), 'PUBLIC'));
        array.push(this.users_user_profile_create_or_update_component.createProfileEntry(_users_users_constants__WEBPACK_IMPORTED_MODULE_6__["UserConstants"].USER_PROFILE_ENTRY_NAME.MARIJUANA, this.getInputModelValueAsString(_users_users_constants__WEBPACK_IMPORTED_MODULE_6__["UserConstants"].USER_PROFILE_ENTRY_NAME.MARIJUANA), 'PUBLIC'));
        array.push(this.users_user_profile_create_or_update_component.createProfileEntry(_users_users_constants__WEBPACK_IMPORTED_MODULE_6__["UserConstants"].USER_PROFILE_ENTRY_NAME.DRUGS, this.getInputModelValueAsString(_users_users_constants__WEBPACK_IMPORTED_MODULE_6__["UserConstants"].USER_PROFILE_ENTRY_NAME.DRUGS), 'PUBLIC'));
        return array;
    }
};
UsersUserProfileCreateOrUpdateFormComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UsersUserProfileCreateOrUpdateFormComponent.prototype, "userProfileChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_users_components_users_user_profile_create_or_update_users_user_profile_create_or_update_component__WEBPACK_IMPORTED_MODULE_5__["UsersUserProfileCreateOrUpdateComponent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _users_components_users_user_profile_create_or_update_users_user_profile_create_or_update_component__WEBPACK_IMPORTED_MODULE_5__["UsersUserProfileCreateOrUpdateComponent"])
], UsersUserProfileCreateOrUpdateFormComponent.prototype, "users_user_profile_create_or_update_component", void 0);
UsersUserProfileCreateOrUpdateFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-user-profile-create-or-update-form',
        template: __webpack_require__(/*! raw-loader!./users-user-profile-create-or-update-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-create-or-update-form/users-user-profile-create-or-update-form.component.html"),
        styles: [__webpack_require__(/*! ./users-user-profile-create-or-update-form.component.scss */ "./src/app/users/components/users-user-profile-create-or-update-form/users-user-profile-create-or-update-form.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UsersUserProfileCreateOrUpdateFormComponent);

let UsersUserProfileCreateOrUpdateSpecificFormComponent = class UsersUserProfileCreateOrUpdateSpecificFormComponent extends UsersUserProfileCreateOrUpdateFormComponent {
    createRequestData(entity_type) {
        const array = [];
        entity_type = entity_type || this.entityType;
        array.push(this.users_user_profile_create_or_update_component.createProfileEntry(entity_type, this.getInputModelValueAsString(entity_type), 'PUBLIC'));
        return array;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UsersUserProfileCreateOrUpdateSpecificFormComponent.prototype, "entityType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", UserProfileValue)
], UsersUserProfileCreateOrUpdateSpecificFormComponent.prototype, "userProfileValue", void 0);
UsersUserProfileCreateOrUpdateSpecificFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-user-profile-create-or-update-specific-form',
        template: __webpack_require__(/*! raw-loader!./users-user-profile-create-or-update-specific-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-create-or-update-form/users-user-profile-create-or-update-specific-form.component.html"),
        styles: [__webpack_require__(/*! ./users-user-profile-create-or-update-form.component.scss */ "./src/app/users/components/users-user-profile-create-or-update-form/users-user-profile-create-or-update-form.component.scss")]
    })
], UsersUserProfileCreateOrUpdateSpecificFormComponent);

let UsersUserProfileCreateOrUpdateSpecificLocationFormComponent = class UsersUserProfileCreateOrUpdateSpecificLocationFormComponent extends UsersUserProfileCreateOrUpdateFormComponent {
    createRequestLocationData() {
        return this.users_user_profile_create_or_update_component.createLocationEntry(this.latitude, this.longitude);
    }
    getAddress(place) {
        this.latitude = Number(place['geometry'].location.lat());
        this.longitude = Number(place['geometry'].location.lng());
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UsersUserProfileCreateOrUpdateSpecificLocationFormComponent.prototype, "entityType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", LocationValue)
], UsersUserProfileCreateOrUpdateSpecificLocationFormComponent.prototype, "locationValue", void 0);
UsersUserProfileCreateOrUpdateSpecificLocationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-user-profile-create-or-update-specific-location-form',
        template: __webpack_require__(/*! raw-loader!./users-user-profile-create-or-update-specific-location-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-create-or-update-form/users-user-profile-create-or-update-specific-location-form.component.html"),
        styles: [__webpack_require__(/*! ./users-user-profile-create-or-update-form.component.scss */ "./src/app/users/components/users-user-profile-create-or-update-form/users-user-profile-create-or-update-form.component.scss")]
    })
], UsersUserProfileCreateOrUpdateSpecificLocationFormComponent);



/***/ }),

/***/ "./src/app/users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal-content/users-user-profile-create-or-update-location-modal-content.component.scss":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal-content/users-user-profile-create-or-update-location-modal-content.component.scss ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvdXNlcnMtdXNlci1wcm9maWxlLWNyZWF0ZS1vci11cGRhdGUtbG9jYXRpb24tbW9kYWwvdXNlcnMtdXNlci1wcm9maWxlLWNyZWF0ZS1vci11cGRhdGUtbG9jYXRpb24tbW9kYWwtY29udGVudC91c2Vycy11c2VyLXByb2ZpbGUtY3JlYXRlLW9yLXVwZGF0ZS1sb2NhdGlvbi1tb2RhbC1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal-content/users-user-profile-create-or-update-location-modal-content.component.ts":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal-content/users-user-profile-create-or-update-location-modal-content.component.ts ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: UsersUserProfileCreateOrUpdateLocationModalContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserProfileCreateOrUpdateLocationModalContentComponent", function() { return UsersUserProfileCreateOrUpdateLocationModalContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_modals_base_modal_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/modals/base-modal-content.component */ "./src/app/core/components/modals/base-modal-content.component.ts");



let UsersUserProfileCreateOrUpdateLocationModalContentComponent = class UsersUserProfileCreateOrUpdateLocationModalContentComponent extends _core_components_modals_base_modal_content_component__WEBPACK_IMPORTED_MODULE_2__["BaseModalContentComponent"] {
    constructor(injector) {
        super(injector);
    }
    initializeComponent() {
    }
};
UsersUserProfileCreateOrUpdateLocationModalContentComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
UsersUserProfileCreateOrUpdateLocationModalContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-user-profile-create-or-update-location-modal-content',
        template: __webpack_require__(/*! raw-loader!./users-user-profile-create-or-update-location-modal-content.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal-content/users-user-profile-create-or-update-location-modal-content.component.html"),
        styles: [__webpack_require__(/*! ./users-user-profile-create-or-update-location-modal-content.component.scss */ "./src/app/users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal-content/users-user-profile-create-or-update-location-modal-content.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UsersUserProfileCreateOrUpdateLocationModalContentComponent);



/***/ }),

/***/ "./src/app/users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal.component.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal.component.scss ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvdXNlcnMtdXNlci1wcm9maWxlLWNyZWF0ZS1vci11cGRhdGUtbG9jYXRpb24tbW9kYWwvdXNlcnMtdXNlci1wcm9maWxlLWNyZWF0ZS1vci11cGRhdGUtbG9jYXRpb24tbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal.component.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal.component.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: UsersUserProfileCreateOrUpdateLocationModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserProfileCreateOrUpdateLocationModalComponent", function() { return UsersUserProfileCreateOrUpdateLocationModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_modals_base_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/modals/base-modal.component */ "./src/app/core/components/modals/base-modal.component.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _users_components_users_user_profile_create_or_update_location_modal_users_user_profile_create_or_update_location_modal_content_users_user_profile_create_or_update_location_modal_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal-content/users-user-profile-create-or-update-location-modal-content.component */ "./src/app/users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal-content/users-user-profile-create-or-update-location-modal-content.component.ts");





var UserProfile = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["Users"].UserProfile;
let UsersUserProfileCreateOrUpdateLocationModalComponent = class UsersUserProfileCreateOrUpdateLocationModalComponent extends _core_components_modals_base_modal_component__WEBPACK_IMPORTED_MODULE_2__["BaseModalComponent"] {
    constructor(injector) {
        super(injector);
    }
    openModal() {
        const _super = Object.create(null, {
            open: { get: () => super.open }
        });
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.setModalData('userProfile', this.userProfile);
            yield _super.open.call(this, _users_components_users_user_profile_create_or_update_location_modal_users_user_profile_create_or_update_location_modal_content_users_user_profile_create_or_update_location_modal_content_component__WEBPACK_IMPORTED_MODULE_4__["UsersUserProfileCreateOrUpdateLocationModalContentComponent"]);
        });
    }
    initializeComponent() {
        this.getAddress().then(address => {
            this.address_value = address;
        })
            .catch(err => {
            console.log(err);
        });
    }
    getAddress() {
        var lat = this.userProfile.location.latitude;
        var lng = this.userProfile.location.longitude;
        ;
        var latlng = new google.maps.LatLng(lat, lng);
        var geocoder = geocoder = new google.maps.Geocoder();
        return new Promise((resolve, reject) => {
            geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        resolve(results[1].formatted_address);
                    }
                    else {
                        reject(new Error(status));
                    }
                }
            });
        });
    }
};
UsersUserProfileCreateOrUpdateLocationModalComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", UserProfile)
], UsersUserProfileCreateOrUpdateLocationModalComponent.prototype, "userProfile", void 0);
UsersUserProfileCreateOrUpdateLocationModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-user-profile-create-or-update-location-modal',
        template: __webpack_require__(/*! raw-loader!./users-user-profile-create-or-update-location-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal.component.html"),
        styles: [__webpack_require__(/*! ./users-user-profile-create-or-update-location-modal.component.scss */ "./src/app/users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UsersUserProfileCreateOrUpdateLocationModalComponent);



/***/ }),

/***/ "./src/app/users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal-content/users-user-profile-create-or-update-modal-content.component.scss":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal-content/users-user-profile-create-or-update-modal-content.component.scss ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvdXNlcnMtdXNlci1wcm9maWxlLWNyZWF0ZS1vci11cGRhdGUtbW9kYWwvdXNlcnMtdXNlci1wcm9maWxlLWNyZWF0ZS1vci11cGRhdGUtbW9kYWwtY29udGVudC91c2Vycy11c2VyLXByb2ZpbGUtY3JlYXRlLW9yLXVwZGF0ZS1tb2RhbC1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal-content/users-user-profile-create-or-update-modal-content.component.ts":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal-content/users-user-profile-create-or-update-modal-content.component.ts ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: UsersUserProfileCreateOrUpdateModalContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserProfileCreateOrUpdateModalContentComponent", function() { return UsersUserProfileCreateOrUpdateModalContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_modals_base_modal_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/modals/base-modal-content.component */ "./src/app/core/components/modals/base-modal-content.component.ts");



let UsersUserProfileCreateOrUpdateModalContentComponent = class UsersUserProfileCreateOrUpdateModalContentComponent extends _core_components_modals_base_modal_content_component__WEBPACK_IMPORTED_MODULE_2__["BaseModalContentComponent"] {
    constructor(injector) {
        super(injector);
    }
    initializeComponent() {
    }
};
UsersUserProfileCreateOrUpdateModalContentComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
UsersUserProfileCreateOrUpdateModalContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-user-profile-create-or-update-modal-content',
        template: __webpack_require__(/*! raw-loader!./users-user-profile-create-or-update-modal-content.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal-content/users-user-profile-create-or-update-modal-content.component.html"),
        styles: [__webpack_require__(/*! ./users-user-profile-create-or-update-modal-content.component.scss */ "./src/app/users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal-content/users-user-profile-create-or-update-modal-content.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UsersUserProfileCreateOrUpdateModalContentComponent);



/***/ }),

/***/ "./src/app/users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal.component.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvdXNlcnMtdXNlci1wcm9maWxlLWNyZWF0ZS1vci11cGRhdGUtbW9kYWwvdXNlcnMtdXNlci1wcm9maWxlLWNyZWF0ZS1vci11cGRhdGUtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: UsersUserProfileCreateOrUpdateModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserProfileCreateOrUpdateModalComponent", function() { return UsersUserProfileCreateOrUpdateModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_modals_base_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/modals/base-modal.component */ "./src/app/core/components/modals/base-modal.component.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _users_components_users_user_profile_create_or_update_modal_users_user_profile_create_or_update_modal_content_users_user_profile_create_or_update_modal_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal-content/users-user-profile-create-or-update-modal-content.component */ "./src/app/users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal-content/users-user-profile-create-or-update-modal-content.component.ts");





var UserProfile = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["Users"].UserProfile;
let UsersUserProfileCreateOrUpdateModalComponent = class UsersUserProfileCreateOrUpdateModalComponent extends _core_components_modals_base_modal_component__WEBPACK_IMPORTED_MODULE_2__["BaseModalComponent"] {
    constructor(injector) {
        super(injector);
    }
    openModal() {
        const _super = Object.create(null, {
            open: { get: () => super.open }
        });
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.setModalData('entityType', this.entityType);
            this.setModalData('userProfile', this.userProfile);
            yield _super.open.call(this, _users_components_users_user_profile_create_or_update_modal_users_user_profile_create_or_update_modal_content_users_user_profile_create_or_update_modal_content_component__WEBPACK_IMPORTED_MODULE_4__["UsersUserProfileCreateOrUpdateModalContentComponent"]);
        });
    }
    initializeComponent() {
    }
};
UsersUserProfileCreateOrUpdateModalComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UsersUserProfileCreateOrUpdateModalComponent.prototype, "entityType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", UserProfile)
], UsersUserProfileCreateOrUpdateModalComponent.prototype, "userProfile", void 0);
UsersUserProfileCreateOrUpdateModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-user-profile-create-or-update-modal',
        template: __webpack_require__(/*! raw-loader!./users-user-profile-create-or-update-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal.component.html"),
        styles: [__webpack_require__(/*! ./users-user-profile-create-or-update-modal.component.scss */ "./src/app/users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UsersUserProfileCreateOrUpdateModalComponent);



/***/ }),

/***/ "./src/app/users/components/users-user-profile-create-or-update/users-user-profile-create-or-update.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-profile-create-or-update/users-user-profile-create-or-update.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvdXNlcnMtdXNlci1wcm9maWxlLWNyZWF0ZS1vci11cGRhdGUvdXNlcnMtdXNlci1wcm9maWxlLWNyZWF0ZS1vci11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/users/components/users-user-profile-create-or-update/users-user-profile-create-or-update.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-profile-create-or-update/users-user-profile-create-or-update.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: UsersUserProfileCreateOrUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserProfileCreateOrUpdateComponent", function() { return UsersUserProfileCreateOrUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @users/users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _users_users_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @users/users.models */ "./src/app/users/users.models.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");







var CreateUserProfile = _users_users_models__WEBPACK_IMPORTED_MODULE_4__["UserRequests"].CreateUserProfile;
var UserProfileValue = _core_core_models__WEBPACK_IMPORTED_MODULE_6__["Users"].UserProfileValue;
var LocationValue = _core_core_models__WEBPACK_IMPORTED_MODULE_6__["Users"].LocationValue;
let UsersUserProfileCreateOrUpdateComponent = class UsersUserProfileCreateOrUpdateComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(usersService, injector) {
        super(injector);
        this.usersService = usersService;
        this.userProfileCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
    }
    createProfileEntry(entry_type, value, privacy) {
        const profile_entry = new UserProfileValue();
        profile_entry.entryType = entry_type || this.entryType;
        profile_entry.value = value || this.value;
        profile_entry.privacy = privacy || this.privacy;
        return profile_entry;
    }
    createRequestData(profile_value, location) {
        const request = new CreateUserProfile.Request();
        request.profile = _core_commons_service__WEBPACK_IMPORTED_MODULE_5__["CommonsService"].convertToArray(profile_value);
        return request;
    }
    createRequestLocationData(location_value) {
        let request = new CreateUserProfile.Request();
        request.location = location_value;
        return request;
    }
    createUserProfile(request) {
        this.user_profile_create$ = this.usersService.createOrUpdateUserProfile(request)
            .pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_5__["CommonsService"].deserializeMap(CreateUserProfile.Response))
            .subscribe(value => {
            this.userProfileCreated.emit(value);
        });
    }
    createLocationEntry(lat, long) {
        const location = new LocationValue();
        location.latitude = location.latitude || lat;
        location.longitude = location.longitude || long;
        return location;
    }
};
UsersUserProfileCreateOrUpdateComponent.ctorParameters = () => [
    { type: _users_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UsersUserProfileCreateOrUpdateComponent.prototype, "entryType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", LocationValue)
], UsersUserProfileCreateOrUpdateComponent.prototype, "location", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UsersUserProfileCreateOrUpdateComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UsersUserProfileCreateOrUpdateComponent.prototype, "privacy", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UsersUserProfileCreateOrUpdateComponent.prototype, "userProfileCreated", void 0);
UsersUserProfileCreateOrUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-user-profile-create-or-update',
        template: __webpack_require__(/*! raw-loader!./users-user-profile-create-or-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-create-or-update/users-user-profile-create-or-update.component.html"),
        styles: [__webpack_require__(/*! ./users-user-profile-create-or-update.component.scss */ "./src/app/users/components/users-user-profile-create-or-update/users-user-profile-create-or-update.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UsersUserProfileCreateOrUpdateComponent);



/***/ }),

/***/ "./src/app/users/components/users-user-profile-value/users-user-profile-value.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-profile-value/users-user-profile-value.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvdXNlcnMtdXNlci1wcm9maWxlLXZhbHVlL3VzZXJzLXVzZXItcHJvZmlsZS12YWx1ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/users/components/users-user-profile-value/users-user-profile-value.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/users/components/users-user-profile-value/users-user-profile-value.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: UsersUserProfileValueComponent, UsersUserProfileValueFaIconComponent, UsersUserProfileValueFaIconGenderComponent, UsersUserProfileValueFaIconQuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserProfileValueComponent", function() { return UsersUserProfileValueComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserProfileValueFaIconComponent", function() { return UsersUserProfileValueFaIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserProfileValueFaIconGenderComponent", function() { return UsersUserProfileValueFaIconGenderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserProfileValueFaIconQuoteComponent", function() { return UsersUserProfileValueFaIconQuoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");




var UserProfileValue = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["Users"].UserProfileValue;
let UsersUserProfileValueComponent = class UsersUserProfileValueComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    initializeComponent() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", UserProfileValue)
], UsersUserProfileValueComponent.prototype, "userProfileValue", void 0);
UsersUserProfileValueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-user-profile-value',
        template: __webpack_require__(/*! raw-loader!./users-user-profile-value.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-value/users-user-profile-value.component.html"),
        styles: [__webpack_require__(/*! ./users-user-profile-value.component.scss */ "./src/app/users/components/users-user-profile-value/users-user-profile-value.component.scss")]
    })
], UsersUserProfileValueComponent);

let UsersUserProfileValueFaIconComponent = class UsersUserProfileValueFaIconComponent extends UsersUserProfileValueComponent {
};
UsersUserProfileValueFaIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-user-profile-value-fa-icon',
        template: __webpack_require__(/*! raw-loader!./users-user-profile-value-fa-icon.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-value/users-user-profile-value-fa-icon.component.html"),
        styles: [__webpack_require__(/*! ./users-user-profile-value.component.scss */ "./src/app/users/components/users-user-profile-value/users-user-profile-value.component.scss")]
    })
], UsersUserProfileValueFaIconComponent);

let UsersUserProfileValueFaIconGenderComponent = class UsersUserProfileValueFaIconGenderComponent extends UsersUserProfileValueComponent {
};
UsersUserProfileValueFaIconGenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-user-profile-value-fa-icon-gender',
        template: __webpack_require__(/*! raw-loader!./users-user-profile-value-fa-icon-gender.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-value/users-user-profile-value-fa-icon-gender.component.html"),
        styles: [__webpack_require__(/*! ./users-user-profile-value.component.scss */ "./src/app/users/components/users-user-profile-value/users-user-profile-value.component.scss")]
    })
], UsersUserProfileValueFaIconGenderComponent);

let UsersUserProfileValueFaIconQuoteComponent = class UsersUserProfileValueFaIconQuoteComponent extends UsersUserProfileValueComponent {
};
UsersUserProfileValueFaIconQuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-user-profile-value-fa-icon-quote',
        template: __webpack_require__(/*! raw-loader!./users-user-profile-value-fa-icon-quote.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile-value/users-user-profile-value-fa-icon-quote.component.html"),
        styles: [__webpack_require__(/*! ./users-user-profile-value.component.scss */ "./src/app/users/components/users-user-profile-value/users-user-profile-value.component.scss")]
    })
], UsersUserProfileValueFaIconQuoteComponent);



/***/ }),

/***/ "./src/app/users/components/users-user-profile/users-user-profile.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/users/components/users-user-profile/users-user-profile.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbXBvbmVudHMvdXNlcnMtdXNlci1wcm9maWxlL3VzZXJzLXVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/users/components/users-user-profile/users-user-profile.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/users/components/users-user-profile/users-user-profile.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UsersUserProfileComponent, UsersUserProfileRowComponent, UsersUserProfileNoTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserProfileComponent", function() { return UsersUserProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserProfileRowComponent", function() { return UsersUserProfileRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserProfileNoTemplateComponent", function() { return UsersUserProfileNoTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _users_users_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @users/users.models */ "./src/app/users/users.models.ts");
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @users/users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");







var GetUserProfile = _users_users_models__WEBPACK_IMPORTED_MODULE_3__["UserRequests"].GetUserProfile;
var UserProfile = _core_core_models__WEBPACK_IMPORTED_MODULE_6__["Users"].UserProfile;
let UsersUserProfileComponent = class UsersUserProfileComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(usersService, injector) {
        super(injector);
        this.usersService = usersService;
        this.userProfileReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getUserProfile = () => {
            this.usersService
                .getUserProfile()
                .pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_5__["CommonsService"].deserializeMap(GetUserProfile.Response))
                .subscribe((response) => {
                this.userProfile = response;
                this.userProfileReceived.emit(response);
            });
        };
    }
    initializeComponent() {
        this.makeServiceCallWithIdIfObjectNull(this.userProfile, this.createRequestData(), this.getUserProfile);
    }
    createRequestData() { }
};
UsersUserProfileComponent.ctorParameters = () => [
    { type: _users_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", UserProfile)
], UsersUserProfileComponent.prototype, "userProfile", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UsersUserProfileComponent.prototype, "userProfileReceived", void 0);
UsersUserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "users-user-profile",
        template: __webpack_require__(/*! raw-loader!./users-user-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile/users-user-profile.component.html"),
        styles: [__webpack_require__(/*! ./users-user-profile.component.scss */ "./src/app/users/components/users-user-profile/users-user-profile.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UsersUserProfileComponent);

let UsersUserProfileRowComponent = class UsersUserProfileRowComponent extends UsersUserProfileComponent {
};
UsersUserProfileRowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "users-user-profile-row",
        template: __webpack_require__(/*! raw-loader!./users-user-profile-row.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile/users-user-profile-row.component.html"),
        styles: [__webpack_require__(/*! ./users-user-profile.component.scss */ "./src/app/users/components/users-user-profile/users-user-profile.component.scss")]
    })
], UsersUserProfileRowComponent);

let UsersUserProfileNoTemplateComponent = class UsersUserProfileNoTemplateComponent extends UsersUserProfileComponent {
};
UsersUserProfileNoTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "users-user-profile-no-template",
        template: __webpack_require__(/*! raw-loader!./users-user-profile-no-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/components/users-user-profile/users-user-profile-no-template.component.html"),
        styles: [__webpack_require__(/*! ./users-user-profile.component.scss */ "./src/app/users/components/users-user-profile/users-user-profile.component.scss")]
    })
], UsersUserProfileNoTemplateComponent);



/***/ }),

/***/ "./src/app/users/pages/users-user-preference-page/users-user-preference-page.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/users/pages/users-user-preference-page/users-user-preference-page.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3BhZ2VzL3VzZXJzLXVzZXItcHJlZmVyZW5jZS1wYWdlL3VzZXJzLXVzZXItcHJlZmVyZW5jZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/pages/users-user-preference-page/users-user-preference-page.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/users/pages/users-user-preference-page/users-user-preference-page.component.ts ***!
  \************************************************************************************************/
/*! exports provided: UsersUserPreferencePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserPreferencePageComponent", function() { return UsersUserPreferencePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UsersUserPreferencePageComponent = class UsersUserPreferencePageComponent {
    constructor() { }
    ngOnInit() { }
};
UsersUserPreferencePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-users-user-preference-page",
        template: __webpack_require__(/*! raw-loader!./users-user-preference-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/pages/users-user-preference-page/users-user-preference-page.component.html"),
        styles: [__webpack_require__(/*! ./users-user-preference-page.component.scss */ "./src/app/users/pages/users-user-preference-page/users-user-preference-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UsersUserPreferencePageComponent);



/***/ }),

/***/ "./src/app/users/pages/users-user-profile-update-page/users-user-profile-update-page.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/users/pages/users-user-profile-update-page/users-user-profile-update-page.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3BhZ2VzL3VzZXJzLXVzZXItcHJvZmlsZS11cGRhdGUtcGFnZS91c2Vycy11c2VyLXByb2ZpbGUtdXBkYXRlLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/users/pages/users-user-profile-update-page/users-user-profile-update-page.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/users/pages/users-user-profile-update-page/users-user-profile-update-page.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: UsersUserProfileUpdatePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserProfileUpdatePageComponent", function() { return UsersUserProfileUpdatePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/page.component */ "./src/app/core/components/page.component.ts");



let UsersUserProfileUpdatePageComponent = class UsersUserProfileUpdatePageComponent extends _core_components_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"] {
    constructor(injector) {
        super(injector);
    }
    initializeComponent() {
    }
    log(value) {
        console.log(value);
    }
};
UsersUserProfileUpdatePageComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
UsersUserProfileUpdatePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-user-profile-update-page',
        template: __webpack_require__(/*! raw-loader!./users-user-profile-update-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/pages/users-user-profile-update-page/users-user-profile-update-page.component.html"),
        styles: [__webpack_require__(/*! ./users-user-profile-update-page.component.scss */ "./src/app/users/pages/users-user-profile-update-page/users-user-profile-update-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UsersUserProfileUpdatePageComponent);



/***/ }),

/***/ "./src/app/users/pages/users-user-signin-page/users-user-signin-page.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/users/pages/users-user-signin-page/users-user-signin-page.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3BhZ2VzL3VzZXJzLXVzZXItc2lnbmluLXBhZ2UvdXNlcnMtdXNlci1zaWduaW4tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/users/pages/users-user-signin-page/users-user-signin-page.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/users/pages/users-user-signin-page/users-user-signin-page.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UsersUserSigninPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserSigninPageComponent", function() { return UsersUserSigninPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/page.component */ "./src/app/core/components/page.component.ts");



let UsersUserSigninPageComponent = class UsersUserSigninPageComponent extends _core_components_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"] {
    constructor(injector) {
        super(injector);
    }
    initializeComponent() {
    }
    navigateToLandingPage() {
        this.navigateAndSetRoot('/signedin/profile/dashboard');
    }
    setUserProfileAndNavigate(user_profile) {
        this.authService.setLoggedProfile(user_profile).then(success => {
            this.loggedProfile = user_profile;
            this.navigateToLandingPage();
        });
    }
};
UsersUserSigninPageComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
UsersUserSigninPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-user-signin-page',
        template: __webpack_require__(/*! raw-loader!./users-user-signin-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/pages/users-user-signin-page/users-user-signin-page.component.html"),
        styles: [__webpack_require__(/*! ./users-user-signin-page.component.scss */ "./src/app/users/pages/users-user-signin-page/users-user-signin-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UsersUserSigninPageComponent);



/***/ }),

/***/ "./src/app/users/pages/users-user-signup-confirm-page/users-user-signup-confirm-page.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/users/pages/users-user-signup-confirm-page/users-user-signup-confirm-page.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3BhZ2VzL3VzZXJzLXVzZXItc2lnbnVwLWNvbmZpcm0tcGFnZS91c2Vycy11c2VyLXNpZ251cC1jb25maXJtLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/users/pages/users-user-signup-confirm-page/users-user-signup-confirm-page.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/users/pages/users-user-signup-confirm-page/users-user-signup-confirm-page.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: UsersUserSignupConfirmPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserSignupConfirmPageComponent", function() { return UsersUserSignupConfirmPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/page.component */ "./src/app/core/components/page.component.ts");



let UsersUserSignupConfirmPageComponent = class UsersUserSignupConfirmPageComponent extends _core_components_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"] {
    constructor(injector) {
        super(injector);
    }
    initializeComponent() {
        this.user_name$ = this.getQueryParameterObservable('user_name');
    }
    navigateToSignin() {
        this.router.navigateByUrl('/basic/user/signin');
    }
};
UsersUserSignupConfirmPageComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
UsersUserSignupConfirmPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-user-signup-confirm-page',
        template: __webpack_require__(/*! raw-loader!./users-user-signup-confirm-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/pages/users-user-signup-confirm-page/users-user-signup-confirm-page.component.html"),
        styles: [__webpack_require__(/*! ./users-user-signup-confirm-page.component.scss */ "./src/app/users/pages/users-user-signup-confirm-page/users-user-signup-confirm-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UsersUserSignupConfirmPageComponent);



/***/ }),

/***/ "./src/app/users/pages/users-user-signup-page/users-user-signup-page.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/users/pages/users-user-signup-page/users-user-signup-page.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3BhZ2VzL3VzZXJzLXVzZXItc2lnbnVwLXBhZ2UvdXNlcnMtdXNlci1zaWdudXAtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/users/pages/users-user-signup-page/users-user-signup-page.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/users/pages/users-user-signup-page/users-user-signup-page.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UsersUserSignupPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserSignupPageComponent", function() { return UsersUserSignupPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/page.component */ "./src/app/core/components/page.component.ts");



let UsersUserSignupPageComponent = class UsersUserSignupPageComponent extends _core_components_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"] {
    constructor(injector) {
        super(injector);
    }
    initializeComponent() {
    }
    navigateToConfirmPage(signup_result) {
        this.router.navigate(['/basic/user/confirm'], { queryParams: { user_name: signup_result.user.getUsername() } });
    }
};
UsersUserSignupPageComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
UsersUserSignupPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'users-user-signup-page',
        template: __webpack_require__(/*! raw-loader!./users-user-signup-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/pages/users-user-signup-page/users-user-signup-page.component.html"),
        styles: [__webpack_require__(/*! ./users-user-signup-page.component.scss */ "./src/app/users/pages/users-user-signup-page/users-user-signup-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UsersUserSignupPageComponent);



/***/ }),

/***/ "./src/app/users/users.constants.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.constants.ts ***!
  \******************************************/
/*! exports provided: UserConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserConstants", function() { return UserConstants; });
class UserConstants {
}
UserConstants.USERS_ENDPOINT = 'users';
UserConstants.COGNITO_ERROR_STATUS_CODES = {
    USER_NOT_CONFIRMED_EXCEPTION: 'UserNotConfirmedException',
    USER_NOT_FOUND_EXCEPTION: 'UserNotFoundException',
    NOT_AUTHORIZED_EXCEPTION: 'NotAuthorizedException',
    PASSWORD_REST_REQUIRED_EXCEPTION: 'PasswordResetRequiredException'
};
UserConstants.USER_PROFILE_GENDER = {
    'MALE': 'MALE',
    'FEMALE': 'FEMALE'
};
UserConstants.USER_PROFILE_ENTRY_NAME = {
    'WORK': 'WORK',
    'JOB_TITLE': 'JOB_TITLE',
    'SCHOOL': 'SCHOOL',
    'EDUCATION_LEVEL': 'EDUCATION_LEVEL',
    'RELIGIOUS_BELIEFS': 'RELIGIOUS_BELIEFS',
    'POLITICS': 'POLITICS',
    'NAME': 'NAME',
    'GENDER': 'GENDER',
    'AGE': 'AGE',
    'HEIGHT': 'HEIGHT',
    'KIDS': 'KIDS',
    'FAMILY_PLANS': 'FAMILY_PLANS',
    'DRINKING': 'DRINKING',
    'SMOKING': 'SMOKING',
    'MARIJUANA': 'MARIJUANA',
    'DRUGS': 'DRUGS'
};
UserConstants.PROFILE_ENTRY_NAME_TO_HUMAN_READABLE = {
    [UserConstants.USER_PROFILE_ENTRY_NAME.WORK]: 'Work',
    [UserConstants.USER_PROFILE_ENTRY_NAME.JOB_TITLE]: 'Job Title',
    [UserConstants.USER_PROFILE_ENTRY_NAME.SCHOOL]: 'School',
    [UserConstants.USER_PROFILE_ENTRY_NAME.EDUCATION_LEVEL]: 'Education Level',
    [UserConstants.USER_PROFILE_ENTRY_NAME.RELIGIOUS_BELIEFS]: 'Religious Beliefs',
    [UserConstants.USER_PROFILE_ENTRY_NAME.POLITICS]: 'Politics',
    [UserConstants.USER_PROFILE_ENTRY_NAME.NAME]: 'Name',
    [UserConstants.USER_PROFILE_ENTRY_NAME.GENDER]: 'Gender',
    [UserConstants.USER_PROFILE_ENTRY_NAME.AGE]: 'Age',
    [UserConstants.USER_PROFILE_ENTRY_NAME.HEIGHT]: 'Height',
    [UserConstants.USER_PROFILE_ENTRY_NAME.KIDS]: 'Kids',
    [UserConstants.USER_PROFILE_ENTRY_NAME.FAMILY_PLANS]: 'Family Plans',
    [UserConstants.USER_PROFILE_ENTRY_NAME.DRINKING]: 'Drinking',
    [UserConstants.USER_PROFILE_ENTRY_NAME.SMOKING]: 'Smoking',
    [UserConstants.USER_PROFILE_ENTRY_NAME.MARIJUANA]: 'Marijuana',
    [UserConstants.USER_PROFILE_ENTRY_NAME.DRUGS]: 'Drugs',
};
UserConstants.PROFILE_ENTRY_NAME_TO_ICON = {
    [UserConstants.USER_PROFILE_ENTRY_NAME.AGE]: 'birthday-cake',
    [UserConstants.USER_PROFILE_ENTRY_NAME.GENDER]: 'venus-double',
    [UserConstants.USER_PROFILE_ENTRY_NAME.DRINKING]: 'glass-martini',
    [UserConstants.USER_PROFILE_ENTRY_NAME.SMOKING]: 'smoking',
    [UserConstants.USER_PROFILE_ENTRY_NAME.WORK]: 'suitcase',
};
UserConstants.GENDER_TO_ICON = {
    [UserConstants.USER_PROFILE_GENDER.MALE]: 'male',
    [UserConstants.USER_PROFILE_GENDER.FEMALE]: 'FEMALE',
};


/***/ }),

/***/ "./src/app/users/users.form.models.ts":
/*!********************************************!*\
  !*** ./src/app/users/users.form.models.ts ***!
  \********************************************/
/*! exports provided: USER_COGNITO_SIGN_IN_FORM_MODEL, USER_COGNITO_SIGN_IN_FORM_LAYOUT, USER_COGNITO_SIGNUP_FORM_LAYOUT, getUserCognitoSignupFormModel, USER_COGNITO_CONFIRM_SIGNUP_FORM_LAYOUT, USER_REGISTER_OTP_VERIFICATION_FORM_MODEL, USER_COGNITO_FORGOT_PASSWORD_FORM_MODEL, USER_COGNITO_FORGOT_PASSWORD_FORM_LAYOUT, USER_PROFILE_CREATE_OR_UPDATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_COGNITO_SIGN_IN_FORM_MODEL", function() { return USER_COGNITO_SIGN_IN_FORM_MODEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_COGNITO_SIGN_IN_FORM_LAYOUT", function() { return USER_COGNITO_SIGN_IN_FORM_LAYOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_COGNITO_SIGNUP_FORM_LAYOUT", function() { return USER_COGNITO_SIGNUP_FORM_LAYOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserCognitoSignupFormModel", function() { return getUserCognitoSignupFormModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_COGNITO_CONFIRM_SIGNUP_FORM_LAYOUT", function() { return USER_COGNITO_CONFIRM_SIGNUP_FORM_LAYOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_REGISTER_OTP_VERIFICATION_FORM_MODEL", function() { return USER_REGISTER_OTP_VERIFICATION_FORM_MODEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_COGNITO_FORGOT_PASSWORD_FORM_MODEL", function() { return USER_COGNITO_FORGOT_PASSWORD_FORM_MODEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_COGNITO_FORGOT_PASSWORD_FORM_LAYOUT", function() { return USER_COGNITO_FORGOT_PASSWORD_FORM_LAYOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PROFILE_CREATE_OR_UPDATE", function() { return USER_PROFILE_CREATE_OR_UPDATE; });
/* harmony import */ var _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/dynamic-input-model-builder */ "./src/app/core/dynamic-input-model-builder.ts");
/* harmony import */ var _users_users_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @users/users.constants */ "./src/app/users/users.constants.ts");


const USER_COGNITO_SIGN_IN_FORM_MODEL = [
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
        .getTextInputModel('user_name', '', undefined, 'Phone Number')
        .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
        .build(),
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
        .getTextInputModel('password', '', undefined, 'Password', 'password')
        .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
        .build(),
];
const USER_COGNITO_SIGN_IN_FORM_LAYOUT = {
    'user_name': {
        element: {
            control: 'bg-primary-white w-100 pr-3 pl-3 br-2 mt-1 mb-1 h-3 font-primary-dark placeholder-dark',
        }
    },
    'password': {
        element: {
            control: 'bg-primary-white w-100 pr-3 pl-3 br-2 mt-1 mb-1 h-3 font-primary-dark placeholder-dark',
        }
    },
};
const USER_COGNITO_SIGNUP_FORM_LAYOUT = {
    'user_name': {
        element: {
            control: 'w-100 pr-3 pl-3 br-2 mt-2 mb-2 h-3 font-primary-dark placeholder-dark',
        }
    },
    'email': {
        element: {
            control: 'bg-primary-white w-100 pr-3 pl-3 br-2 mt-2 mb-2 h-3',
        }
    },
    'password': {
        element: {
            control: 'w-100 pr-3 pl-3 br-2 mt-2 mb-2 h-3',
        }
    },
};
function getUserCognitoSignupFormModel() {
    return [
        new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
            .getTextInputModel('user_name', '', undefined, 'Mobile Number')
            .addValidatorAndErrorMessage('MOBILE_VALIDATOR')
            .build(),
        new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
            .getTextInputModel('email', '', undefined, 'E-mail')
            .addValidatorAndErrorMessage('EMAIL_VALIDATOR')
            .build(),
        new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
            .getTextInputModel('password', '', undefined, 'Create Password', 'password')
            .addValidatorAndErrorMessage('PASSWORD_VALIDATOR')
            .build(),
    ];
}
const USER_COGNITO_CONFIRM_SIGNUP_FORM_LAYOUT = {
    'token': {
        element: {
            control: 'bg-primary-white w-100 pr-3 pl-3 br-2 mt-2 mb-2 h-3 font-primary-dark placeholder-dark',
        }
    }
};
const USER_REGISTER_OTP_VERIFICATION_FORM_MODEL = [
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
        .getTextInputModel('token', '', undefined, 'Verification Code')
        .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
        .build(),
];
const USER_COGNITO_FORGOT_PASSWORD_FORM_MODEL = [
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
        .getTextInputModel('user_name', '', undefined, 'Email')
        .addValidatorAndErrorMessage('EMAIL_VALIDATOR')
        .build(),
];
const USER_COGNITO_FORGOT_PASSWORD_FORM_LAYOUT = {
    'user_name': {
        element: {
            control: 'bg-primary-white w-100 pr-3 pl-3 br-2 mt-2 mb-2 h-3',
        }
    },
};
const USER_PROFILE_CREATE_OR_UPDATE = [
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
        .getTextInputModel(_users_users_constants__WEBPACK_IMPORTED_MODULE_1__["UserConstants"].USER_PROFILE_ENTRY_NAME.NAME, '', undefined, 'Name')
        .build(),
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
        .getTextInputModel(_users_users_constants__WEBPACK_IMPORTED_MODULE_1__["UserConstants"].USER_PROFILE_ENTRY_NAME.WORK, '', undefined, 'I Work at')
        .build(),
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
        .getTextInputModel(_users_users_constants__WEBPACK_IMPORTED_MODULE_1__["UserConstants"].USER_PROFILE_ENTRY_NAME.JOB_TITLE, '', undefined, 'I Work at')
        .build(),
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
        .getTextInputModel(_users_users_constants__WEBPACK_IMPORTED_MODULE_1__["UserConstants"].USER_PROFILE_ENTRY_NAME.SCHOOL, '', undefined, 'I Work at')
        .build(),
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
        .getTextInputModel(_users_users_constants__WEBPACK_IMPORTED_MODULE_1__["UserConstants"].USER_PROFILE_ENTRY_NAME.AGE, '', undefined, 'Age')
        .build(),
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
        .getTextInputModel(_users_users_constants__WEBPACK_IMPORTED_MODULE_1__["UserConstants"].USER_PROFILE_ENTRY_NAME.HEIGHT, '', undefined, 'Height')
        .build(),
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
        .getRadioGroupInputModel(_users_users_constants__WEBPACK_IMPORTED_MODULE_1__["UserConstants"].USER_PROFILE_ENTRY_NAME.GENDER, 'Gender', [
        { label: 'Male', value: 'MALE' },
        { label: 'Female', value: 'FEMALE' },
    ], 'MALE')
        .build(),
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
        .getRadioGroupInputModel(_users_users_constants__WEBPACK_IMPORTED_MODULE_1__["UserConstants"].USER_PROFILE_ENTRY_NAME.KIDS, 'Kids', [
        { label: 'Yes', value: 'YES' },
        { label: 'No', value: 'NO' },
    ], 'NO')
        .build(),
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
        .getRadioGroupInputModel(_users_users_constants__WEBPACK_IMPORTED_MODULE_1__["UserConstants"].USER_PROFILE_ENTRY_NAME.FAMILY_PLANS, 'Family', [
        { label: 'Yes', value: 'YES' },
        { label: 'No', value: 'NO' },
    ], 'NO')
        .build(),
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
        .getRadioGroupInputModel(_users_users_constants__WEBPACK_IMPORTED_MODULE_1__["UserConstants"].USER_PROFILE_ENTRY_NAME.DRINKING, 'Drinking', [
        { label: 'Yes', value: 'YES' },
        { label: 'No', value: 'NO' },
        { label: 'Sometimes', value: 'SOMETIMES' },
    ], 'NO')
        .build(),
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
        .getRadioGroupInputModel(_users_users_constants__WEBPACK_IMPORTED_MODULE_1__["UserConstants"].USER_PROFILE_ENTRY_NAME.SMOKING, 'Smoking', [
        { label: 'Yes', value: 'YES' },
        { label: 'No', value: 'NO' },
        { label: 'Sometimes', value: 'SOMETIMES' },
    ], 'NO')
        .build(),
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
        .getRadioGroupInputModel(_users_users_constants__WEBPACK_IMPORTED_MODULE_1__["UserConstants"].USER_PROFILE_ENTRY_NAME.MARIJUANA, 'Marijuana', [
        { label: 'Yes', value: 'YES' },
        { label: 'No', value: 'NO' },
        { label: 'Sometimes', value: 'SOMETIMES' },
    ], 'NO')
        .build(),
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
        .getRadioGroupInputModel(_users_users_constants__WEBPACK_IMPORTED_MODULE_1__["UserConstants"].USER_PROFILE_ENTRY_NAME.DRUGS, 'Drugs', [
        { label: 'Yes', value: 'YES' },
        { label: 'No', value: 'NO' },
        { label: 'Sometimes', value: 'SOMETIMES' },
    ], 'NO')
        .build(),
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
        .getRadioGroupInputModel(_users_users_constants__WEBPACK_IMPORTED_MODULE_1__["UserConstants"].USER_PROFILE_ENTRY_NAME.RELIGIOUS_BELIEFS, 'Relegious Beliefs', [
        { label: 'Atheist', value: 'ATHEIST' },
        { label: 'Agnostic', value: 'AGNOSTIC' },
        { label: 'Buddhist', value: 'BUDDHIST' },
        { label: 'Catholic', value: 'CATHOLIC' },
        { label: 'Christian', value: 'CHRISTIAN' },
        { label: 'Hindu', value: 'HINDU' },
        { label: 'Jewish', value: 'JEWISH' },
        { label: 'Muslim', value: 'MUSLIM' },
        { label: 'Spiritual', value: 'SPIRITUAL' },
        { label: 'Other', value: 'OTHER' },
    ], 'CATHOLIC')
        .build(),
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
        .getRadioGroupInputModel(_users_users_constants__WEBPACK_IMPORTED_MODULE_1__["UserConstants"].USER_PROFILE_ENTRY_NAME.EDUCATION_LEVEL, 'Education Level', [
        { label: 'HIGH SCHOOL', value: 'HIGH_SCHOOL' },
        { label: 'UNDERGRAD', value: 'UNDERGRAD' },
        { label: 'POSTGRAD', value: 'POSTGRAD' },
        { label: 'PREFER NOT TO SAY', value: 'PREFER_NOT_TO_SAY' },
    ], 'UNDERGRAD')
        .build(),
];


/***/ }),

/***/ "./src/app/users/users.models.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.models.ts ***!
  \***************************************/
/*! exports provided: CognitoRequests, UserRequests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CognitoRequests", function() { return CognitoRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRequests", function() { return UserRequests; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");



var LocationValue = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["Users"].LocationValue;
var CognitoRequests;
(function (CognitoRequests) {
    let CognitoSignupUserAttribute = class CognitoSignupUserAttribute {
        constructor() {
            this.email = undefined;
            this.phone_number = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('email', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CognitoSignupUserAttribute.prototype, "email", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('phone_number', String, true),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CognitoSignupUserAttribute.prototype, "phone_number", void 0);
    CognitoSignupUserAttribute = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
    ], CognitoSignupUserAttribute);
    CognitoRequests.CognitoSignupUserAttribute = CognitoSignupUserAttribute;
    let SignUp;
    (function (SignUp) {
        let Request = class Request {
            constructor() {
                this.user_name = undefined;
                this.password = undefined;
                this.attributes = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('username', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "user_name", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('password', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "password", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('attributes', CognitoSignupUserAttribute, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", CognitoSignupUserAttribute)
        ], Request.prototype, "attributes", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        SignUp.Request = Request;
        let Response = class Response extends CognitoSignupUserAttribute {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        SignUp.Response = Response;
    })(SignUp = CognitoRequests.SignUp || (CognitoRequests.SignUp = {}));
    let ConfirmSignUp;
    (function (ConfirmSignUp) {
        let Request = class Request {
            constructor() {
                this.email = undefined;
                this.phone_number = undefined;
                this.token = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('email', String, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "email", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('phone_number', String, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "phone_number", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('token', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "token", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        ConfirmSignUp.Request = Request;
    })(ConfirmSignUp = CognitoRequests.ConfirmSignUp || (CognitoRequests.ConfirmSignUp = {}));
    let SignIn;
    (function (SignIn) {
        let Request = class Request {
            constructor() {
                this.user_name = undefined;
                this.password = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('username', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "user_name", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('password', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "password", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        SignIn.Request = Request;
    })(SignIn = CognitoRequests.SignIn || (CognitoRequests.SignIn = {}));
    let ForgotPassword;
    (function (ForgotPassword) {
        let Request = class Request {
            constructor() {
                this.user_name = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('user_name', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "user_name", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        ForgotPassword.Request = Request;
    })(ForgotPassword = CognitoRequests.ForgotPassword || (CognitoRequests.ForgotPassword = {}));
    let ChangePassword;
    (function (ChangePassword) {
        let Request = class Request {
            constructor() {
                this.old_password = undefined;
                this.new_password = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('old_password', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "old_password", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('new_password', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "new_password", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        ChangePassword.Request = Request;
    })(ChangePassword = CognitoRequests.ChangePassword || (CognitoRequests.ChangePassword = {}));
    let ForgotPasswordSubmit;
    (function (ForgotPasswordSubmit) {
        let Request = class Request {
            constructor() {
                this.email = undefined;
                this.token = undefined;
                this.password = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('email', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "email", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('token', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "token", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('password', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "password", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        ForgotPasswordSubmit.Request = Request;
    })(ForgotPasswordSubmit = CognitoRequests.ForgotPasswordSubmit || (CognitoRequests.ForgotPasswordSubmit = {}));
    let VerifyCurrentUserAttributeSubmit;
    (function (VerifyCurrentUserAttributeSubmit) {
        let Request = class Request {
            constructor() {
                this.type = undefined;
                this.token = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('type', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "type", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('token', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "token", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        VerifyCurrentUserAttributeSubmit.Request = Request;
    })(VerifyCurrentUserAttributeSubmit = CognitoRequests.VerifyCurrentUserAttributeSubmit || (CognitoRequests.VerifyCurrentUserAttributeSubmit = {}));
    let ResendSignUp;
    (function (ResendSignUp) {
        let Request = class Request {
            constructor() {
                this.email = undefined;
                this.phone_number = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('email', String, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "email", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('phonenumber', String, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "phone_number", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        ResendSignUp.Request = Request;
    })(ResendSignUp = CognitoRequests.ResendSignUp || (CognitoRequests.ResendSignUp = {}));
    let UpdateUserAttributes;
    (function (UpdateUserAttributes) {
        let Request = class Request {
            constructor() {
                this.phone_number = undefined;
                this.email = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('phone_number', String, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "phone_number", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('email', String, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "email", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        UpdateUserAttributes.Request = Request;
    })(UpdateUserAttributes = CognitoRequests.UpdateUserAttributes || (CognitoRequests.UpdateUserAttributes = {}));
})(CognitoRequests || (CognitoRequests = {}));
var UserRequests;
(function (UserRequests) {
    let CreateUserProfile;
    (function (CreateUserProfile) {
        var UserProfileValue = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["Users"].UserProfileValue;
        var UserProfile = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["Users"].UserProfile;
        let Request = class Request {
            constructor() {
                this.profile = undefined;
                this.location = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('profile', [UserProfileValue], true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
        ], Request.prototype, "profile", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('location', LocationValue, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", LocationValue)
        ], Request.prototype, "location", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        CreateUserProfile.Request = Request;
        let Response = class Response extends UserProfile {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        CreateUserProfile.Response = Response;
    })(CreateUserProfile = UserRequests.CreateUserProfile || (UserRequests.CreateUserProfile = {}));
    let UpdateUserProfile;
    (function (UpdateUserProfile) {
        let Request = class Request extends CreateUserProfile.Request {
        };
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        UpdateUserProfile.Request = Request;
        let Response = class Response extends CreateUserProfile.Response {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        UpdateUserProfile.Response = Response;
    })(UpdateUserProfile = UserRequests.UpdateUserProfile || (UserRequests.UpdateUserProfile = {}));
    let GetUserProfile;
    (function (GetUserProfile) {
        var UserProfile = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["Users"].UserProfile;
        let Response = class Response extends UserProfile {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        GetUserProfile.Response = Response;
    })(GetUserProfile = UserRequests.GetUserProfile || (UserRequests.GetUserProfile = {}));
    let FilterUserProfiles;
    (function (FilterUserProfiles) {
        var UserProfile = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["Users"].UserProfile;
        let Request = class Request {
            constructor() {
                this.longitude = undefined;
                this.latitude = undefined;
                this.minAge = undefined;
                this.maxAge = undefined;
                this.gender = undefined;
                this.distance = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('longitude', Number, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Request.prototype, "longitude", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('latitude', Number, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Request.prototype, "latitude", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('minAge', Number, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Request.prototype, "minAge", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('maxAge', Number, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Request.prototype, "maxAge", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('gender', String, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "gender", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('distance', Number, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
        ], Request.prototype, "distance", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        FilterUserProfiles.Request = Request;
        let Response = class Response extends UserProfile {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        FilterUserProfiles.Response = Response;
    })(FilterUserProfiles = UserRequests.FilterUserProfiles || (UserRequests.FilterUserProfiles = {}));
    let GetUserProfileByUser;
    (function (GetUserProfileByUser) {
        var UserProfile = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["Users"].UserProfile;
        let Request = class Request {
            constructor() {
                this.user = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('user', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "user", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        GetUserProfileByUser.Request = Request;
        let Response = class Response extends UserProfile {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        GetUserProfileByUser.Response = Response;
    })(GetUserProfileByUser = UserRequests.GetUserProfileByUser || (UserRequests.GetUserProfileByUser = {}));
    let GetAllUserProfiles;
    (function (GetAllUserProfiles) {
        var UserProfile = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["Users"].UserProfile;
        let Request = class Request {
        };
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        GetAllUserProfiles.Request = Request;
        let Response = class Response extends UserProfile {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        GetAllUserProfiles.Response = Response;
    })(GetAllUserProfiles = UserRequests.GetAllUserProfiles || (UserRequests.GetAllUserProfiles = {}));
})(UserRequests || (UserRequests = {}));


/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _users_users_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @users/users.routes */ "./src/app/users/users.routes.ts");
/* harmony import */ var _users_components_users_user_cognito_login_users_user_cognito_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @users/components/users-user-cognito-login/users-user-cognito-login.component */ "./src/app/users/components/users-user-cognito-login/users-user-cognito-login.component.ts");
/* harmony import */ var _users_pages_users_user_signin_page_users_user_signin_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @users/pages/users-user-signin-page/users-user-signin-page.component */ "./src/app/users/pages/users-user-signin-page/users-user-signin-page.component.ts");
/* harmony import */ var _users_components_users_user_cognito_signup_users_user_cognito_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @users/components/users-user-cognito-signup/users-user-cognito-signup.component */ "./src/app/users/components/users-user-cognito-signup/users-user-cognito-signup.component.ts");
/* harmony import */ var _users_components_users_user_cognito_confirm_signup_users_user_cognito_confirm_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @users/components/users-user-cognito-confirm-signup/users-user-cognito-confirm-signup.component */ "./src/app/users/components/users-user-cognito-confirm-signup/users-user-cognito-confirm-signup.component.ts");
/* harmony import */ var _users_components_users_user_cognito_forgot_password_users_user_cognito_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @users/components/users-user-cognito-forgot-password/users-user-cognito-forgot-password.component */ "./src/app/users/components/users-user-cognito-forgot-password/users-user-cognito-forgot-password.component.ts");
/* harmony import */ var _users_pages_users_user_signup_page_users_user_signup_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @users/pages/users-user-signup-page/users-user-signup-page.component */ "./src/app/users/pages/users-user-signup-page/users-user-signup-page.component.ts");
/* harmony import */ var _users_pages_users_user_signup_confirm_page_users_user_signup_confirm_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @users/pages/users-user-signup-confirm-page/users-user-signup-confirm-page.component */ "./src/app/users/pages/users-user-signup-confirm-page/users-user-signup-confirm-page.component.ts");
/* harmony import */ var _users_pages_users_user_preference_page_users_user_preference_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @users/pages/users-user-preference-page/users-user-preference-page.component */ "./src/app/users/pages/users-user-preference-page/users-user-preference-page.component.ts");
/* harmony import */ var _users_components_users_user_cognito_resend_signup_confirm_users_user_cognito_resend_signup_confirm_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @users/components/users-user-cognito-resend-signup-confirm/users-user-cognito-resend-signup-confirm.component */ "./src/app/users/components/users-user-cognito-resend-signup-confirm/users-user-cognito-resend-signup-confirm.component.ts");
/* harmony import */ var _users_components_users_user_profile_create_or_update_users_user_profile_create_or_update_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @users/components/users-user-profile-create-or-update/users-user-profile-create-or-update.component */ "./src/app/users/components/users-user-profile-create-or-update/users-user-profile-create-or-update.component.ts");
/* harmony import */ var _users_components_users_user_profile_create_or_update_form_users_user_profile_create_or_update_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @users/components/users-user-profile-create-or-update-form/users-user-profile-create-or-update-form.component */ "./src/app/users/components/users-user-profile-create-or-update-form/users-user-profile-create-or-update-form.component.ts");
/* harmony import */ var _users_pages_users_user_profile_update_page_users_user_profile_update_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @users/pages/users-user-profile-update-page/users-user-profile-update-page.component */ "./src/app/users/pages/users-user-profile-update-page/users-user-profile-update-page.component.ts");
/* harmony import */ var _users_components_users_user_profile_value_users_user_profile_value_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @users/components/users-user-profile-value/users-user-profile-value.component */ "./src/app/users/components/users-user-profile-value/users-user-profile-value.component.ts");
/* harmony import */ var _users_users_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @users/users.pipe */ "./src/app/users/users.pipe.ts");
/* harmony import */ var _users_components_users_user_profile_users_user_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @users/components/users-user-profile/users-user-profile.component */ "./src/app/users/components/users-user-profile/users-user-profile.component.ts");
/* harmony import */ var _images_images_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @images/images.module */ "./src/app/images/images.module.ts");
/* harmony import */ var _users_components_users_filter_user_profiles_users_filter_user_profiles_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @users/components/users-filter-user-profiles/users-filter-user-profiles.component */ "./src/app/users/components/users-filter-user-profiles/users-filter-user-profiles.component.ts");
/* harmony import */ var _users_components_users_user_profile_by_user_users_user_profile_by_user_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @users/components/users-user-profile-by-user/users-user-profile-by-user.component */ "./src/app/users/components/users-user-profile-by-user/users-user-profile-by-user.component.ts");
/* harmony import */ var _users_components_users_user_cognito_logout_users_user_cognito_logout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @users/components/users-user-cognito-logout/users-user-cognito-logout.component */ "./src/app/users/components/users-user-cognito-logout/users-user-cognito-logout.component.ts");
/* harmony import */ var _users_components_users_user_profile_create_or_update_modal_users_user_profile_create_or_update_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal.component */ "./src/app/users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal.component.ts");
/* harmony import */ var _users_components_users_user_profile_create_or_update_modal_users_user_profile_create_or_update_modal_content_users_user_profile_create_or_update_modal_content_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal-content/users-user-profile-create-or-update-modal-content.component */ "./src/app/users/components/users-user-profile-create-or-update-modal/users-user-profile-create-or-update-modal-content/users-user-profile-create-or-update-modal-content.component.ts");
/* harmony import */ var _users_components_users_user_profile_create_or_update_location_modal_users_user_profile_create_or_update_location_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal.component */ "./src/app/users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal.component.ts");
/* harmony import */ var _users_components_users_user_profile_create_or_update_location_modal_users_user_profile_create_or_update_location_modal_content_users_user_profile_create_or_update_location_modal_content_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal-content/users-user-profile-create-or-update-location-modal-content.component */ "./src/app/users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal-content/users-user-profile-create-or-update-location-modal-content.component.ts");
/* harmony import */ var _users_components_users_all_users_profiles_users_all_users_profiles_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @users/components/users-all-users-profiles/users-all-users-profiles.component */ "./src/app/users/components/users-all-users-profiles/users-all-users-profiles.component.ts");
/* harmony import */ var _basic_components_google_places_google_places_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @basic/components/google-places/google-places.component */ "./src/app/basic/components/google-places/google-places.component.ts");








// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length




// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length









// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length


// tslint:disable-next-line:max-line-length



let UsersModule = class UsersModule {
};
UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _users_components_users_user_cognito_login_users_user_cognito_login_component__WEBPACK_IMPORTED_MODULE_5__["UsersUserCognitoLoginComponent"],
            _users_pages_users_user_signin_page_users_user_signin_page_component__WEBPACK_IMPORTED_MODULE_6__["UsersUserSigninPageComponent"],
            _users_components_users_user_cognito_signup_users_user_cognito_signup_component__WEBPACK_IMPORTED_MODULE_7__["UsersUserCognitoSignupComponent"],
            _users_components_users_user_cognito_confirm_signup_users_user_cognito_confirm_signup_component__WEBPACK_IMPORTED_MODULE_8__["UsersUserCognitoConfirmSignupComponent"],
            _users_components_users_user_cognito_forgot_password_users_user_cognito_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["UsersUserCognitoForgotPasswordComponent"],
            _users_pages_users_user_signup_page_users_user_signup_page_component__WEBPACK_IMPORTED_MODULE_10__["UsersUserSignupPageComponent"],
            _users_pages_users_user_signup_confirm_page_users_user_signup_confirm_page_component__WEBPACK_IMPORTED_MODULE_11__["UsersUserSignupConfirmPageComponent"],
            _users_pages_users_user_preference_page_users_user_preference_page_component__WEBPACK_IMPORTED_MODULE_12__["UsersUserPreferencePageComponent"],
            _users_components_users_user_cognito_resend_signup_confirm_users_user_cognito_resend_signup_confirm_component__WEBPACK_IMPORTED_MODULE_13__["UsersUserCognitoResendSignupConfirmComponent"],
            _users_components_users_user_profile_create_or_update_users_user_profile_create_or_update_component__WEBPACK_IMPORTED_MODULE_14__["UsersUserProfileCreateOrUpdateComponent"],
            _users_components_users_user_profile_create_or_update_form_users_user_profile_create_or_update_form_component__WEBPACK_IMPORTED_MODULE_15__["UsersUserProfileCreateOrUpdateFormComponent"],
            _users_pages_users_user_profile_update_page_users_user_profile_update_page_component__WEBPACK_IMPORTED_MODULE_16__["UsersUserProfileUpdatePageComponent"],
            _users_components_users_user_profile_value_users_user_profile_value_component__WEBPACK_IMPORTED_MODULE_17__["UsersUserProfileValueComponent"],
            _users_users_pipe__WEBPACK_IMPORTED_MODULE_18__["UsersUserProfileEntryNameToIconPipe"],
            _users_components_users_user_profile_users_user_profile_component__WEBPACK_IMPORTED_MODULE_19__["UsersUserProfileComponent"],
            _users_components_users_user_profile_value_users_user_profile_value_component__WEBPACK_IMPORTED_MODULE_17__["UsersUserProfileValueFaIconComponent"],
            _users_components_users_filter_user_profiles_users_filter_user_profiles_component__WEBPACK_IMPORTED_MODULE_21__["UsersFilterUserProfilesComponent"],
            _users_users_pipe__WEBPACK_IMPORTED_MODULE_18__["UsersUserProfileToUserProfileValuePipe"],
            _users_components_users_user_profile_users_user_profile_component__WEBPACK_IMPORTED_MODULE_19__["UsersUserProfileRowComponent"],
            _users_users_pipe__WEBPACK_IMPORTED_MODULE_18__["UsersGenderToFaIconPipe"],
            _users_components_users_user_profile_value_users_user_profile_value_component__WEBPACK_IMPORTED_MODULE_17__["UsersUserProfileValueFaIconGenderComponent"],
            _users_components_users_user_profile_value_users_user_profile_value_component__WEBPACK_IMPORTED_MODULE_17__["UsersUserProfileValueFaIconQuoteComponent"],
            _users_components_users_user_profile_by_user_users_user_profile_by_user_component__WEBPACK_IMPORTED_MODULE_22__["UsersUserProfileByUserComponent"],
            _users_components_users_user_profile_by_user_users_user_profile_by_user_component__WEBPACK_IMPORTED_MODULE_22__["UsersUserProfileByUserNoTemplateComponent"],
            _users_components_users_user_profile_users_user_profile_component__WEBPACK_IMPORTED_MODULE_19__["UsersUserProfileNoTemplateComponent"],
            _users_components_users_user_cognito_logout_users_user_cognito_logout_component__WEBPACK_IMPORTED_MODULE_23__["UsersUserCognitoLogoutComponent"],
            _users_components_users_user_profile_create_or_update_modal_users_user_profile_create_or_update_modal_component__WEBPACK_IMPORTED_MODULE_24__["UsersUserProfileCreateOrUpdateModalComponent"],
            _users_components_users_user_profile_create_or_update_modal_users_user_profile_create_or_update_modal_content_users_user_profile_create_or_update_modal_content_component__WEBPACK_IMPORTED_MODULE_25__["UsersUserProfileCreateOrUpdateModalContentComponent"],
            _users_components_users_user_profile_create_or_update_location_modal_users_user_profile_create_or_update_location_modal_component__WEBPACK_IMPORTED_MODULE_26__["UsersUserProfileCreateOrUpdateLocationModalComponent"],
            _users_components_users_user_profile_create_or_update_location_modal_users_user_profile_create_or_update_location_modal_content_users_user_profile_create_or_update_location_modal_content_component__WEBPACK_IMPORTED_MODULE_27__["UsersUserProfileCreateOrUpdateLocationModalContentComponent"],
            _users_users_pipe__WEBPACK_IMPORTED_MODULE_18__["UsersUserProfileEntryNameToHumanReadablePipe"],
            _users_components_users_user_profile_create_or_update_form_users_user_profile_create_or_update_form_component__WEBPACK_IMPORTED_MODULE_15__["UsersUserProfileCreateOrUpdateSpecificFormComponent"],
            _users_components_users_user_profile_create_or_update_form_users_user_profile_create_or_update_form_component__WEBPACK_IMPORTED_MODULE_15__["UsersUserProfileCreateOrUpdateSpecificLocationFormComponent"],
            _users_components_users_all_users_profiles_users_all_users_profiles_component__WEBPACK_IMPORTED_MODULE_28__["UsersAllUsersProfilesComponent"],
            _users_components_users_all_users_profiles_users_all_users_profiles_component__WEBPACK_IMPORTED_MODULE_28__["UsersAllUsersProfilesNoTemplateComponent"],
            _basic_components_google_places_google_places_component__WEBPACK_IMPORTED_MODULE_29__["AutocompleteComponent"],
        ],
        imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_users_users_routes__WEBPACK_IMPORTED_MODULE_4__["USER_ROUTES"]), _images_images_module__WEBPACK_IMPORTED_MODULE_20__["ImagesModule"]],
        exports: [
            _users_components_users_user_cognito_login_users_user_cognito_login_component__WEBPACK_IMPORTED_MODULE_5__["UsersUserCognitoLoginComponent"],
            _users_pages_users_user_signin_page_users_user_signin_page_component__WEBPACK_IMPORTED_MODULE_6__["UsersUserSigninPageComponent"],
            _users_components_users_user_cognito_signup_users_user_cognito_signup_component__WEBPACK_IMPORTED_MODULE_7__["UsersUserCognitoSignupComponent"],
            _users_components_users_user_cognito_confirm_signup_users_user_cognito_confirm_signup_component__WEBPACK_IMPORTED_MODULE_8__["UsersUserCognitoConfirmSignupComponent"],
            _users_components_users_user_cognito_forgot_password_users_user_cognito_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["UsersUserCognitoForgotPasswordComponent"],
            _users_pages_users_user_signup_page_users_user_signup_page_component__WEBPACK_IMPORTED_MODULE_10__["UsersUserSignupPageComponent"],
            _users_pages_users_user_signup_confirm_page_users_user_signup_confirm_page_component__WEBPACK_IMPORTED_MODULE_11__["UsersUserSignupConfirmPageComponent"],
            _users_pages_users_user_preference_page_users_user_preference_page_component__WEBPACK_IMPORTED_MODULE_12__["UsersUserPreferencePageComponent"],
            _users_components_users_user_cognito_resend_signup_confirm_users_user_cognito_resend_signup_confirm_component__WEBPACK_IMPORTED_MODULE_13__["UsersUserCognitoResendSignupConfirmComponent"],
            _users_components_users_user_profile_create_or_update_users_user_profile_create_or_update_component__WEBPACK_IMPORTED_MODULE_14__["UsersUserProfileCreateOrUpdateComponent"],
            _users_components_users_user_profile_create_or_update_form_users_user_profile_create_or_update_form_component__WEBPACK_IMPORTED_MODULE_15__["UsersUserProfileCreateOrUpdateFormComponent"],
            _users_pages_users_user_profile_update_page_users_user_profile_update_page_component__WEBPACK_IMPORTED_MODULE_16__["UsersUserProfileUpdatePageComponent"],
            _users_components_users_user_profile_value_users_user_profile_value_component__WEBPACK_IMPORTED_MODULE_17__["UsersUserProfileValueComponent"],
            _users_users_pipe__WEBPACK_IMPORTED_MODULE_18__["UsersUserProfileEntryNameToIconPipe"],
            _users_components_users_user_profile_users_user_profile_component__WEBPACK_IMPORTED_MODULE_19__["UsersUserProfileComponent"],
            _users_components_users_user_profile_value_users_user_profile_value_component__WEBPACK_IMPORTED_MODULE_17__["UsersUserProfileValueFaIconComponent"],
            _users_components_users_filter_user_profiles_users_filter_user_profiles_component__WEBPACK_IMPORTED_MODULE_21__["UsersFilterUserProfilesComponent"],
            _users_users_pipe__WEBPACK_IMPORTED_MODULE_18__["UsersUserProfileToUserProfileValuePipe"],
            _users_components_users_user_profile_users_user_profile_component__WEBPACK_IMPORTED_MODULE_19__["UsersUserProfileRowComponent"],
            _users_users_pipe__WEBPACK_IMPORTED_MODULE_18__["UsersGenderToFaIconPipe"],
            _users_components_users_user_profile_value_users_user_profile_value_component__WEBPACK_IMPORTED_MODULE_17__["UsersUserProfileValueFaIconGenderComponent"],
            _users_components_users_user_profile_value_users_user_profile_value_component__WEBPACK_IMPORTED_MODULE_17__["UsersUserProfileValueFaIconQuoteComponent"],
            _users_components_users_user_profile_by_user_users_user_profile_by_user_component__WEBPACK_IMPORTED_MODULE_22__["UsersUserProfileByUserComponent"],
            _users_components_users_user_profile_by_user_users_user_profile_by_user_component__WEBPACK_IMPORTED_MODULE_22__["UsersUserProfileByUserNoTemplateComponent"],
            _users_components_users_user_profile_users_user_profile_component__WEBPACK_IMPORTED_MODULE_19__["UsersUserProfileNoTemplateComponent"],
            _users_components_users_user_cognito_logout_users_user_cognito_logout_component__WEBPACK_IMPORTED_MODULE_23__["UsersUserCognitoLogoutComponent"],
            _users_components_users_user_profile_create_or_update_modal_users_user_profile_create_or_update_modal_component__WEBPACK_IMPORTED_MODULE_24__["UsersUserProfileCreateOrUpdateModalComponent"],
            _users_components_users_user_profile_create_or_update_modal_users_user_profile_create_or_update_modal_content_users_user_profile_create_or_update_modal_content_component__WEBPACK_IMPORTED_MODULE_25__["UsersUserProfileCreateOrUpdateModalContentComponent"],
            _users_components_users_user_profile_create_or_update_location_modal_users_user_profile_create_or_update_location_modal_component__WEBPACK_IMPORTED_MODULE_26__["UsersUserProfileCreateOrUpdateLocationModalComponent"],
            _users_components_users_user_profile_create_or_update_location_modal_users_user_profile_create_or_update_location_modal_content_users_user_profile_create_or_update_location_modal_content_component__WEBPACK_IMPORTED_MODULE_27__["UsersUserProfileCreateOrUpdateLocationModalContentComponent"],
            _users_users_pipe__WEBPACK_IMPORTED_MODULE_18__["UsersUserProfileEntryNameToHumanReadablePipe"],
            _users_components_users_user_profile_create_or_update_form_users_user_profile_create_or_update_form_component__WEBPACK_IMPORTED_MODULE_15__["UsersUserProfileCreateOrUpdateSpecificFormComponent"],
            _users_components_users_user_profile_create_or_update_form_users_user_profile_create_or_update_form_component__WEBPACK_IMPORTED_MODULE_15__["UsersUserProfileCreateOrUpdateSpecificLocationFormComponent"],
            _users_components_users_all_users_profiles_users_all_users_profiles_component__WEBPACK_IMPORTED_MODULE_28__["UsersAllUsersProfilesComponent"],
            _users_components_users_all_users_profiles_users_all_users_profiles_component__WEBPACK_IMPORTED_MODULE_28__["UsersAllUsersProfilesNoTemplateComponent"],
            _basic_components_google_places_google_places_component__WEBPACK_IMPORTED_MODULE_29__["AutocompleteComponent"],
        ],
        entryComponents: [
            _users_components_users_user_profile_create_or_update_modal_users_user_profile_create_or_update_modal_content_users_user_profile_create_or_update_modal_content_component__WEBPACK_IMPORTED_MODULE_25__["UsersUserProfileCreateOrUpdateModalContentComponent"],
            _users_components_users_user_profile_create_or_update_location_modal_users_user_profile_create_or_update_location_modal_content_users_user_profile_create_or_update_location_modal_content_component__WEBPACK_IMPORTED_MODULE_27__["UsersUserProfileCreateOrUpdateLocationModalContentComponent"],
        ],
    })
], UsersModule);



/***/ }),

/***/ "./src/app/users/users.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/users/users.pipe.ts ***!
  \*************************************/
/*! exports provided: UsersUserProfileEntryNameToIconPipe, UsersUserProfileEntryNameToHumanReadablePipe, UsersUserProfileToUserProfileValuePipe, UsersGenderToFaIconPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserProfileEntryNameToIconPipe", function() { return UsersUserProfileEntryNameToIconPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserProfileEntryNameToHumanReadablePipe", function() { return UsersUserProfileEntryNameToHumanReadablePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersUserProfileToUserProfileValuePipe", function() { return UsersUserProfileToUserProfileValuePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersGenderToFaIconPipe", function() { return UsersGenderToFaIconPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _users_users_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @users/users.constants */ "./src/app/users/users.constants.ts");



let UsersUserProfileEntryNameToIconPipe = class UsersUserProfileEntryNameToIconPipe {
    transform(value, ...args) {
        return _users_users_constants__WEBPACK_IMPORTED_MODULE_2__["UserConstants"].PROFILE_ENTRY_NAME_TO_ICON[value.entryType];
    }
};
UsersUserProfileEntryNameToIconPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'usersUserProfileEntryNameToIcon'
    })
], UsersUserProfileEntryNameToIconPipe);

let UsersUserProfileEntryNameToHumanReadablePipe = class UsersUserProfileEntryNameToHumanReadablePipe {
    transform(value, ...args) {
        return _users_users_constants__WEBPACK_IMPORTED_MODULE_2__["UserConstants"].PROFILE_ENTRY_NAME_TO_HUMAN_READABLE[value];
    }
};
UsersUserProfileEntryNameToHumanReadablePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'usersUserProfileEntryNameToHumanReadable'
    })
], UsersUserProfileEntryNameToHumanReadablePipe);

let UsersUserProfileToUserProfileValuePipe = class UsersUserProfileToUserProfileValuePipe {
    transform(value, profile_name, ...args) {
        return value.profile.find(profile => profile.entryType === profile_name);
    }
};
UsersUserProfileToUserProfileValuePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'usersUserProfileToUserProfileValue'
    })
], UsersUserProfileToUserProfileValuePipe);

let UsersGenderToFaIconPipe = class UsersGenderToFaIconPipe {
    transform(value, ...args) {
        return _users_users_constants__WEBPACK_IMPORTED_MODULE_2__["UserConstants"].GENDER_TO_ICON[value.value];
    }
};
UsersGenderToFaIconPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'usersGenderToFaIcon'
    })
], UsersGenderToFaIconPipe);



/***/ }),

/***/ "./src/app/users/users.routes.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.routes.ts ***!
  \***************************************/
/*! exports provided: USER_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ROUTES", function() { return USER_ROUTES; });
/* harmony import */ var _users_pages_users_user_signin_page_users_user_signin_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @users/pages/users-user-signin-page/users-user-signin-page.component */ "./src/app/users/pages/users-user-signin-page/users-user-signin-page.component.ts");
/* harmony import */ var _users_pages_users_user_signup_page_users_user_signup_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @users/pages/users-user-signup-page/users-user-signup-page.component */ "./src/app/users/pages/users-user-signup-page/users-user-signup-page.component.ts");
/* harmony import */ var _users_pages_users_user_signup_confirm_page_users_user_signup_confirm_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @users/pages/users-user-signup-confirm-page/users-user-signup-confirm-page.component */ "./src/app/users/pages/users-user-signup-confirm-page/users-user-signup-confirm-page.component.ts");
/* harmony import */ var _users_pages_users_user_preference_page_users_user_preference_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @users/pages/users-user-preference-page/users-user-preference-page.component */ "./src/app/users/pages/users-user-preference-page/users-user-preference-page.component.ts");
/* harmony import */ var _users_pages_users_user_profile_update_page_users_user_profile_update_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @users/pages/users-user-profile-update-page/users-user-profile-update-page.component */ "./src/app/users/pages/users-user-profile-update-page/users-user-profile-update-page.component.ts");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/auth.guard */ "./src/app/core/auth.guard.ts");






const USER_ROUTES = [
    { path: 'signin', component: _users_pages_users_user_signin_page_users_user_signin_page_component__WEBPACK_IMPORTED_MODULE_0__["UsersUserSigninPageComponent"] },
    { path: 'signup', component: _users_pages_users_user_signup_page_users_user_signup_page_component__WEBPACK_IMPORTED_MODULE_1__["UsersUserSignupPageComponent"] },
    { path: 'confirm', component: _users_pages_users_user_signup_confirm_page_users_user_signup_confirm_page_component__WEBPACK_IMPORTED_MODULE_2__["UsersUserSignupConfirmPageComponent"] },
    { path: 'preference', component: _users_pages_users_user_preference_page_users_user_preference_page_component__WEBPACK_IMPORTED_MODULE_3__["UsersUserPreferencePageComponent"] },
    { path: 'update', component: _users_pages_users_user_profile_update_page_users_user_profile_update_page_component__WEBPACK_IMPORTED_MODULE_4__["UsersUserProfileUpdatePageComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
];


/***/ }),

/***/ "./src/app/users/users.service.ts":
/*!****************************************!*\
  !*** ./src/app/users/users.service.ts ***!
  \****************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_http_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/http/rest.service */ "./src/app/core/http/rest.service.ts");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm2015/ngx-restangular.js");
/* harmony import */ var _users_users_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @users/users.constants */ "./src/app/users/users.constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let UsersService = class UsersService extends _core_http_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] {
    constructor(restangular) {
        super(restangular);
        this.usersService = this.getService(_users_users_constants__WEBPACK_IMPORTED_MODULE_4__["UserConstants"].USERS_ENDPOINT);
    }
    createUserProfile(request) {
        return this.usersService.one('profile').customPOST(super.serialize(request));
    }
    updateUserProfile(request) {
        return this.usersService.one('profile').customPUT(this.serialize(request));
    }
    getUserProfile() {
        return this.usersService.one('profile').get();
    }
    createOrUpdateUserProfile(request) {
        return this.getUserProfile()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(response => {
            return this.updateUserProfile(request);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            if (error.status === 404) {
                return this.createUserProfile(request);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
            }
        }));
    }
    filterUserProfiles(request) {
        return this.usersService.one('profile').one('filter').customGET('', this.serialize(request));
    }
    getUserProfileByUser(request) {
        return this.usersService.one('profile').one('users').customGET('', this.serialize(request));
    }
    getAllUserProfiles(request) {
        return this.usersService.one('profile').one('all').customGET('', this.serialize(request));
    }
};
UsersService.ctorParameters = () => [
    { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_3__["Restangular"] }
];
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_3__["Restangular"]])
], UsersService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrls: {
        baseUrl: 'https://z713ez7nq7.execute-api.us-east-1.amazonaws.com/beta-2',
    },
    auth: {
        region: 'us-east-1',
        userPoolId: 'us-east-1_TllKLuipC',
        userPoolWebClientId: '1v6ifj1745jlv27o9mcmmgfp16',
        loggingLevel: 'ERROR',
    },
    dateOfBirthYearLimit: 14,
    stripePublicKey: 'pk_test_JawTCR5mHnPCU1Uq5ZhN6yhz',
    routeTracing: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));
aws_amplify__WEBPACK_IMPORTED_MODULE_4__["default"].configure({
    Auth: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].auth
});
aws_amplify__WEBPACK_IMPORTED_MODULE_4__["default"].Logger.LOG_LEVEL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].auth.loggingLevel;


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Backup/USTX-Project/EventDating-Sean/test1/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map