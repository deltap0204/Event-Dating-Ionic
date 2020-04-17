(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usermatchpage-usermatchpage-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/usermatchpage/usermatchpage.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/usermatchpage/usermatchpage.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n    <ion-toolbar>\n         <ion-title>usermatchpage</ion-title> \n    </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n    <ion-grid>\n        <ion-row class=\"heading\">\n            <ion-col>\n                <h2>Congrates!</h2>\n                <p>It's A Match</p>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"activeprofile\">\n            <ion-col>\n                <img class=\"profilepic\" src=\"../../assets/images/profilepic1.png\">\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"profileinfo\">\n            <ion-col>\n                <p>You and John Doe both have liked same</p>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"profileinfo\">\n            <ion-col>\n                <img class=\"profilepic\" src=\"../../assets/images/match-profilepic1.png\">\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"thankyou\">\n            <ion-col>\n                <img src=\"../../assets/images/thankyou.png\">\n                <ion-button>Send Message</ion-button>\n\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/usermatchpage/usermatchpage.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/usermatchpage/usermatchpage.module.ts ***!
  \*******************************************************/
/*! exports provided: UsermatchpagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsermatchpagePageModule", function() { return UsermatchpagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _usermatchpage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usermatchpage.page */ "./src/app/usermatchpage/usermatchpage.page.ts");







var routes = [
    {
        path: '',
        component: _usermatchpage_page__WEBPACK_IMPORTED_MODULE_6__["UsermatchpagePage"]
    }
];
var UsermatchpagePageModule = /** @class */ (function () {
    function UsermatchpagePageModule() {
    }
    UsermatchpagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_usermatchpage_page__WEBPACK_IMPORTED_MODULE_6__["UsermatchpagePage"]]
        })
    ], UsermatchpagePageModule);
    return UsermatchpagePageModule;
}());



/***/ }),

/***/ "./src/app/usermatchpage/usermatchpage.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/usermatchpage/usermatchpage.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.heading {\n  text-align: center;\n  text-transform: uppercase;\n}\n.profilepic {\n  display: block;\n  margin: 10px auto;\n  width: 110px;\n  height: 110px;\n  border-radius: 50%;\n  border: 3px solid #fff;\n  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.4);\n}\n.profileinfo {\n  text-align: center;\n  font-style: italic;\n}\n.profileinfo p {\n  padding: 10px;\n  margin: 0px;\n}\n.thankyou {\n  text-align: center;\n  position: relative;\n}\n.thankyou img {\n  width: 100%;\n}\n.thankyou ion-button {\n  position: absolute;\n  left: 0px;\n  bottom: 26px;\n  width: 90%;\n  border: 2px solid #9d87f4 !important;\n  color: #9d87f4 !important;\n  background: transparent !important;\n  --background: #fff !important;\n  border-radius: 4px;\n  font-weight: 600;\n  margin: 0px 5%;\n  --color-activated: #9d87f4;\n  --color-focused: #9d87f4;\n  –ion-color-base: yellow !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcm1hdGNocGFnZS91c2VybWF0Y2hwYWdlLnBhZ2Uuc2NzcyIsIi9Wb2x1bWVzL0JhY2t1cC9VU1RYLVByb2plY3QvRXZlbnREYXRpbmctU2Vhbi90ZXN0MS9zcmMvYXBwL3VzZXJtYXRjaHBhZ2UvdXNlcm1hdGNocGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBREVKO0FDQ0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtBREVKO0FDQ0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FERUo7QUNESTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FER1I7QUNDQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QURFSjtBQ0RJO0VBQ0ksV0FBQTtBREdSO0FDREk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBRUksa0NBQUE7QURFWiIsImZpbGUiOiJzcmMvYXBwL3VzZXJtYXRjaHBhZ2UvdXNlcm1hdGNocGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uaGVhZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnByb2ZpbGVwaWMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEzcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ucHJvZmlsZWluZm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5wcm9maWxlaW5mbyBwIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi50aGFua3lvdSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRoYW5reW91IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRoYW5reW91IGlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgYm90dG9tOiAyNnB4O1xuICB3aWR0aDogOTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjOWQ4N2Y0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjOWQ4N2Y0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMHB4IDUlO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogIzlkODdmNDtcbiAgLS1jb2xvci1mb2N1c2VkOiAjOWQ4N2Y0O1xuICDigJNpb24tY29sb3ItYmFzZTogeWVsbG93ICFpbXBvcnRhbnQ7XG59IiwiLmhlYWRpbmcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnByb2ZpbGVwaWMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxM3B4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLnByb2ZpbGVpbmZvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIHAge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50aGFua3lvdSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICBib3R0b206IDI2cHg7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjOWQ4N2Y0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICM5ZDg3ZjQgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDUlO1xyXG4gICAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjOWQ4N2Y0O1xyXG4gICAgICAgIC0tY29sb3ItZm9jdXNlZDogIzlkODdmNDtcclxuICAgICAgICBAaWYgKGlzU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAg4oCTaW9uLWNvbG9yLWJhc2U6IHllbGxvdyFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/usermatchpage/usermatchpage.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/usermatchpage/usermatchpage.page.ts ***!
  \*****************************************************/
/*! exports provided: UsermatchpagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsermatchpagePage", function() { return UsermatchpagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsermatchpagePage = /** @class */ (function () {
    function UsermatchpagePage() {
    }
    UsermatchpagePage.prototype.ngOnInit = function () {
    };
    UsermatchpagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usermatchpage',
            template: __webpack_require__(/*! raw-loader!./usermatchpage.page.html */ "./node_modules/raw-loader/index.js!./src/app/usermatchpage/usermatchpage.page.html"),
            styles: [__webpack_require__(/*! ./usermatchpage.page.scss */ "./src/app/usermatchpage/usermatchpage.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsermatchpagePage);
    return UsermatchpagePage;
}());



/***/ })

}]);
//# sourceMappingURL=usermatchpage-usermatchpage-module-es5.js.map