(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-basic-module"],{

/***/ "./src/app/basic/basic.module.ts":
/*!***************************************!*\
  !*** ./src/app/basic/basic.module.ts ***!
  \***************************************/
/*! exports provided: BasicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicModule", function() { return BasicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _basic_basic_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @basic/basic.routes */ "./src/app/basic/basic.routes.ts");





let BasicModule = class BasicModule {
};
BasicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_basic_basic_routes__WEBPACK_IMPORTED_MODULE_4__["BASIC_ROUTES"])
        ]
    })
], BasicModule);



/***/ }),

/***/ "./src/app/basic/basic.routes.ts":
/*!***************************************!*\
  !*** ./src/app/basic/basic.routes.ts ***!
  \***************************************/
/*! exports provided: BASIC_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASIC_ROUTES", function() { return BASIC_ROUTES; });
const BASIC_ROUTES = [
    { path: 'user', loadChildren: '@users/users.module#UsersModule' }
];


/***/ })

}]);
//# sourceMappingURL=basic-basic-module-es2015.js.map