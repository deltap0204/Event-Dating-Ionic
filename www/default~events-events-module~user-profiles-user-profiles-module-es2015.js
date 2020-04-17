(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~events-events-module~user-profiles-user-profiles-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/categories/components/categories-all-categories/categories-all-categories-with-select.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/categories/components/categories-all-categories/categories-all-categories-with-select.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let category of categories\">\r\n  <div [class.bg-primary-grey]=\"getCategoryIndex(category) !== -1\">\r\n    <categories-category-details-select-box\r\n      [category]=\"category\"\r\n      [selected]=\"getCategoryIndex(category) !== -1\"\r\n      (click)=\"addOrRemoveCategory(category)\"\r\n    ></categories-category-details-select-box>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/categories/components/categories-all-categories/categories-all-categories.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/categories/components/categories-all-categories/categories-all-categories.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let category of categories\">\r\n  <categories-category-details\r\n    [category]=\"category\"\r\n    [selected]=\"selected\"\r\n  ></categories-category-details>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/categories/components/categories-category-details/categories-category-details-select-box.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/categories/components/categories-category-details/categories-category-details-select-box.component.html ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 text-left bg-primary select-box\" [class.bg-primary-grey-9]=\"selected\" *ngIf=\"category\">\r\n    {{category.name}}\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/categories/components/categories-category-details/categories-category-details.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/categories/components/categories-category-details/categories-category-details.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pt-2 pb-2 pr-0 pl-0 text-left bg-primary\" *ngIf=\"category\">\r\n  <div class=\"col-md-4\">\r\n    {{category._id}}\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    {{category.name}}\r\n    <p>Types: <span *ngFor=\"let type of category.categoryType\">{{type}},</span></p>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    {{category.description}}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/categories/components/categories-create-category-entity/categories-create-category-entity.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/categories/components/categories-create-category-entity/categories-create-category-entity.component.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  categories-create-category-entity works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/categories/components/categories-search-categories/categories-search-categories.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/categories/components/categories-search-categories/categories-search-categories.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  categories-search-categories works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/events/components/events-create-event-invite-modal/events-create-event-invite-modal-content/events-create-event-invite-modal-content.component.html":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/events/components/events-create-event-invite-modal/events-create-event-invite-modal-content/events-create-event-invite-modal-content.component.html ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<core-modal-header [title]=\"'Select account to Invite'\" (closeClicked)=\"closeModal($event)\"></core-modal-header>\r\n<ion-content [scrollEvents]=\"true\" class=\"--bg-primary-ultra-light\">\r\n    <chats-user-chats-no-template #chatsUserChatsComponent></chats-user-chats-no-template>\r\n    <div *ngFor=\"let user_chat of chatsUserChatsComponent.user_chats\" class=\"bb-medium\">\r\n        <a (click)=\"createEventInviteNoTemplateComponent.createEventInvite(createEventInviteNoTemplateComponent\r\n                .createRequestData(undefined,chats_user_accounts_to_other_account_pipe.transform(user_chat,loggedProfile.userAccount)))\">\r\n            <chats-user-chat [userChat]=\"user_chat\"></chats-user-chat>\r\n        </a>\r\n    </div>\r\n    <events-create-event-invite-no-template [event]=\"event\"\r\n                                            [message]=\"'Hey I am inviting to join me for '+event.eventName\"\r\n                                            (eventInviteCreated)=\"closeModal({status:'SUCCESS',data:$event})\"\r\n                                            #createEventInviteNoTemplateComponent></events-create-event-invite-no-template>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/events/components/events-create-event-invite-modal/events-create-event-invite-modal.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/events/components/events-create-event-invite-modal/events-create-event-invite-modal.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-button fill=\"outline\" shape=\"round\" size=\"large\" color=\"medium\" class=\"m-auto\" (click)=\"openModal()\">\r\n    <fa-icon icon=\"paper-plane\"></fa-icon>\r\n</ion-button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/events/components/events-create-event-invite/events-create-event-invite-no-template.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/events/components/events-create-event-invite/events-create-event-invite-no-template.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/events/components/events-create-event-invite/events-create-event-invite.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/events/components/events-create-event-invite/events-create-event-invite.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  events-create-event-invite works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/events/components/events-create-event-modal/events-create-event-modal-content/events-create-event-modal-content.component.html":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/events/components/events-create-event-modal/events-create-event-modal-content/events-create-event-modal-content.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<core-modal-header [title]=\"'PLAN AN ACTIVITY'\" (closeClicked)=\"closeModal($event)\"></core-modal-header>\r\n<ion-content [scrollEvents]=\"true\" class=\"--bg-primary-ultra-light\">\r\n    <events-create-event (eventCreated)=\"registerEffectAndCloseModal($event,{data:$event,status:'SUCCESS'})\"\r\n                         #eventsCreateEventComponent></events-create-event>\r\n    <categories-all-categories-with-select #allCategoriesWithSelectComponent></categories-all-categories-with-select>\r\n    <categories-create-category-entity [entityType]=\"'EVENT'\"\r\n                                       #categoriesCreateCategoryEntityComponent></categories-create-category-entity>\r\n    <images-upload-file-with-preview [entityType]=\"'EVENT'\"></images-upload-file-with-preview>\r\n</ion-content>\r\n<core-modal-footer\r\n        (actionClicked)=\"eventsCreateEventComponent.createEvent(eventsCreateEventComponent.createRequestData())\"\r\n        [buttonText]=\"'ADD ACTIVITY'\" [actionPromise]=\"eventsCreateEventComponent.create_event_subscription$\"\r\n        [buttonDisabled]=\"!eventsCreateEventComponent.formGroup.valid\"></core-modal-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/events/components/events-create-event-modal/events-create-event-modal.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/events/components/events-create-event-modal/events-create-event-modal.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-fab-button (click)=\"openModal()\" [color]=\"'primary'\" class=\"--card-shadow-d font-primary\">\r\n    <fa-icon icon=\"plus\"></fa-icon>\r\n</ion-fab-button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/events/components/events-create-event/events-create-event.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/events/components/events-create-event/events-create-event.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row>\r\n    <ion-col [size]=\"12\">\r\n        <form [formGroup]=\"formGroup\" #createEventForm=\"ngForm\" (submit)=\"createEvent(createRequestData())\"\r\n            class=\"mt-2\">\r\n            <div class=\"pos-relative\">\r\n                <dynamic-ionic-form-control [group]=\"formGroup\" [layout]=\"formLayout\"\r\n                    [model]=\"formModelMap['event_name']\" #eventName></dynamic-ionic-form-control>\r\n                <core-form-validation-message [controlComponent]=\"eventName\" [control]=\"eventName.control\">\r\n                </core-form-validation-message>\r\n            </div>\r\n            <div class=\"pos-relative\">\r\n                <dynamic-ionic-form-control [group]=\"formGroup\" [layout]=\"formLayout\"\r\n                    [model]=\"formModelMap['event_description']\" #eventDescription></dynamic-ionic-form-control>\r\n                <core-form-validation-message [controlComponent]=\"eventDescription\"\r\n                    [control]=\"eventDescription.control\"></core-form-validation-message>\r\n            </div>\r\n            \r\n\r\n            <div class=\"pos-relative\">\r\n                <AutocompleteComponent (setAddress)=\"getAddress($event)\" adressType=\"geocode\"></AutocompleteComponent>\r\n            </div>\r\n\r\n            <div class=\"pos-relative\">\r\n                <dynamic-ionic-form-control [group]=\"formGroup\" [layout]=\"formLayout\"\r\n                    [model]=\"formModelMap['event_start_time']\" #eventStartTime></dynamic-ionic-form-control>\r\n                <core-form-validation-message [controlComponent]=\"eventStartTime\" [control]=\"eventStartTime.control\">\r\n                </core-form-validation-message>\r\n            </div>\r\n            <div class=\"pos-relative\">\r\n                <dynamic-ionic-form-control [group]=\"formGroup\" [layout]=\"formLayout\"\r\n                    [model]=\"formModelMap['event_end_time']\" #eventEndTime></dynamic-ionic-form-control>\r\n                <core-form-validation-message [controlComponent]=\"eventEndTime\" [control]=\"eventEndTime.control\">\r\n                </core-form-validation-message>\r\n            </div>\r\n\r\n        </form>\r\n    </ion-col>\r\n</ion-row>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/events/components/events-event-details/events-event-details.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/events/components/events-event-details/events-event-details.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card>\r\n    <ion-card-header>\r\n        <ion-col [size]=\"12\" class=\"mt-4\">\r\n            <ion-label class=\"font-black font-italic fs-12 float-left\">\r\n                {{event.eventName}}\r\n            </ion-label>\r\n            <ion-label class=\"font-primary-grey fs-10 float-right\">\r\n                ACTIVITY\r\n            </ion-label>\r\n        </ion-col>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n        <ion-row>\r\n            <ion-col [size]=\"12\">\r\n                <ion-col size=\"6\">\r\n                    <ion-label class=\"font-primary-grey font-italic fs-8 mr-2\">\r\n                        <fa-icon [icon]=\"'map-marker-alt'\"></fa-icon>\r\n                        Circuit of America\r\n                    </ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"6\">\r\n                    <ion-label class=\"font-primary-grey fs-8\">\r\n                        {{event.eventStartTime|appShortDateFormat}} to {{event.eventEndTime|appShortDateFormat}}\r\n                    </ion-label>\r\n                </ion-col>\r\n            </ion-col>\r\n        </ion-row>\r\n        <images-by-entity-and-type-xl [entity]=\"event._id\" [entityType]=\"'EVENT'\"\r\n                                      [alt]=\"event.eventName\"></images-by-entity-and-type-xl>\r\n        <ion-row>\r\n            <ion-col [size]=\"6\" class=\"text-center\">\r\n                <ion-row class=\"text-center mb-2\">\r\n                    <user-interests-get-or-create-with-delete class=\"m-auto\"\r\n                                                  [type]=\"'EVENT'\" [entity]=\"event._id\"\r\n                                                  [interaction]=\"'LIKED'\"></user-interests-get-or-create-with-delete>\r\n                </ion-row>\r\n            </ion-col>\r\n            <ion-col [size]=\"6\">\r\n                <ion-row class=\"text-center mb-2\">\r\n                    <ion-button fill=\"outline\" shape=\"round\" size=\"large\" color=\"medium\" class=\"m-auto\" coreConfirm\r\n                                [title]=\"'Notification'\"\r\n                                [message]=\"'You are not allowed to invite anyone. To invite become a privileged member'\">\r\n                        <fa-icon icon=\"paper-plane\"></fa-icon>\r\n                    </ion-button>\r\n                </ion-row>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-card-content>\r\n</ion-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/events/components/events-event-invite-details/events-event-invite-details.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/events/components/events-event-invite-details/events-event-invite-details.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  events-event-invite-details works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/events/components/events-event-invites/events-event-invites.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/events/components/events-event-invites/events-event-invites.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  events-event-invites works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/events/components/events-get-events/events-get-events.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/events/components/events-get-events/events-get-events.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row *ngFor=\"let event of events_list\">\r\n    <ion-col size=\"12\">\r\n        <a routerLink=\"/signedin/events/event/{{event._id}}\">\r\n            <events-event-details [event]=\"event\"></events-event-details>\r\n        </a>\r\n    </ion-col>\r\n</ion-row>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/events/pages/events-event-page/events-event-page.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/events/pages/events-event-page/events-event-page.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\" class=\"--bg-primary-mega-light p-3\">\r\n    <ion-row>\r\n        <ion-col class=\"p-3\">\r\n            <images-by-entity-and-type-xl\r\n                    [entity]=\"(event$|async)._id\" [entityType]=\"'EVENT'\"\r\n                    [alt]=\"(event$|async).eventName\"></images-by-entity-and-type-xl>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"font-primary-grey bb-primary-grey-e-1 p-2\">\r\n        <ion-col [size]=\"2\" class=\"mt-4 p-2\">\r\n            <ion-label class=\"font-italic fs-12 br-3\">\r\n                {{(event$|async).eventStartTime |appDateFormat:'DD MMM'}}\r\n            </ion-label>\r\n        </ion-col>\r\n        <ion-col [size]=\"8\" class=\"mt-4\">\r\n            <ion-label class=\"font-italic fs-12\">\r\n                {{(event$|async).eventName}}\r\n            </ion-label>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"font-primary-black fs-10 font-weight-bold p-2 bb-primary-grey-e-1\">\r\n        <ion-col [size]=\"12\">\r\n            <ion-label>\r\n                <fa-icon [icon]=\"'map-marker-alt'\" class=\"mr-2\"></fa-icon>\r\n                Circuit of America\r\n            </ion-label>\r\n        </ion-col>\r\n        <ion-col [size]=\"12\">\r\n            <ion-label>\r\n                <fa-icon [icon]=\"'calendar'\" class=\"mr-2\"></fa-icon>\r\n                {{(event$|async).eventStartTime|appDateFormat:'DD MMM'}}\r\n            </ion-label>\r\n        </ion-col>\r\n        <ion-col [size]=\"12\">\r\n            <ion-label>\r\n                <fa-icon [icon]=\"'clock'\" class=\"mr-2\"></fa-icon>\r\n                {{(event$|async).eventStartTime|appTimeFormat}} to {{(event$|async).eventEndTime|appTimeFormat}}\r\n            </ion-label>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"font-primary-grey fs-8 p-2 bb-primary-grey-e-1\">\r\n        <ion-col [size]=\"12\" class=\"text-center fs-24\">\r\n            <fa-icon icon=\"users\"></fa-icon>\r\n        </ion-col>\r\n        <ion-col [size]=\"12\" class=\"text-center p-5 font-italic\">\r\n            <ion-label>\r\n                Members are showing interest in your activity. Share more for more interest\r\n            </ion-label>\r\n        </ion-col>\r\n        <ion-col [size]=\"6\" class=\"text-center\">\r\n            <ion-row class=\"text-center mb-2\">\r\n                <user-interests-get-or-create class=\"m-auto\"\r\n                                              [type]=\"'EVENT'\" [entity]=\"(event$|async)._id\"\r\n                                              [interaction]=\"'LIKED'\"></user-interests-get-or-create>\r\n            </ion-row>\r\n            <ion-row class=\"text-center font-primary\">\r\n                <ion-label class=\"text-center m-auto\">\r\n                    <user-interests-by-entity-count [entity]=\"(event$|async)._id\"\r\n                                                    [type]=\"'EVENT'\"></user-interests-by-entity-count>\r\n                    interested\r\n                </ion-label>\r\n\r\n            </ion-row>\r\n        </ion-col>\r\n        <ion-col [size]=\"6\">\r\n            <ion-row class=\"text-center mb-2\">\r\n                <events-create-event-invite-modal [event]=\"event$|async\"></events-create-event-invite-modal>\r\n            </ion-row>\r\n            <ion-row class=\"text-center font-primary\">\r\n                <ion-label class=\"m-auto\">\r\n                    <user-interests-by-entity-count [entity]=\"(event$|async)._id\"\r\n                                                    [type]=\"'EVENT'\"></user-interests-by-entity-count>\r\n                    invites\r\n                </ion-label>\r\n            </ion-row>\r\n\r\n        </ion-col>\r\n\r\n\r\n    </ion-row>\r\n\r\n    <ion-row class=\"font-primary-grey fs-8 p-2\">\r\n        <ion-col [size]=\"12\">\r\n            <ion-label class=\"font-primary-black fs-10 font-weight-bold ion-text-uppercase\">\r\n                Activity Description\r\n            </ion-label>\r\n        </ion-col>\r\n        <ion-col [size]=\"12\">\r\n            <ion-label>\r\n                {{(event$|async).eventDescription}}\r\n            </ion-label>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-by-entity-count/user-interests-by-entity-count.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-interests/components/user-interests-by-entity-count/user-interests-by-entity-count.component.html ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{user_interests_count||0}}"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-by-entity-multiple/user-interests-by-entity-multiple-no-template.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-interests/components/user-interests-by-entity-multiple/user-interests-by-entity-multiple-no-template.component.html ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-by-entity-multiple/user-interests-by-entity-multiple.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-interests/components/user-interests-by-entity-multiple/user-interests-by-entity-multiple.component.html ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-interests-by-entity-multiple works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-by-entity/user-interests-by-entity.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-interests/components/user-interests-by-entity/user-interests-by-entity.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-interests-by-entity works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-create-user-interest/user-interests-create-user-interest-no-template.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-interests/components/user-interests-create-user-interest/user-interests-create-user-interest-no-template.component.html ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-create-user-interest/user-interests-create-user-interest.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-interests/components/user-interests-create-user-interest/user-interests-create-user-interest.component.html ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-interests-create-user-interest works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-delete-user-interest/user-interests-delete-user-interest-no-template.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-interests/components/user-interests-delete-user-interest/user-interests-delete-user-interest-no-template.component.html ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-delete-user-interest/user-interests-delete-user-interest.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-interests/components/user-interests-delete-user-interest/user-interests-delete-user-interest.component.html ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-interests-delete-user-interest works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-get-or-create/user-interests-get-or-create-with-delete-heart.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-interests/components/user-interests-get-or-create/user-interests-get-or-create-with-delete-heart.component.html ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<user-interests-by-entity-multiple-no-template\r\n        [entity]=\"entity\" [type]=\"type\" [interaction]=\"interaction\"\r\n        [userId]=\"loggedProfile.userAccount._id\"\r\n        (userInterestsReceived)=\"user_interests=$event\"\r\n        #interestsByEntityMultipleNoTemplateComponent></user-interests-by-entity-multiple-no-template>\r\n\r\n<user-interests-create-user-interest-no-template\r\n        [entity]=\"entity\" [type]=\"type\" [interaction]=\"interaction\"\r\n        (userInteractionCreated)=\"user_interests=[$event];userInteractionCreated.emit($event)\"\r\n        #createUserInterestNoTemplateComponent></user-interests-create-user-interest-no-template>\r\n\r\n<user-interests-delete-user-interest-no-template\r\n        (userInterestDeleted)=\"userInterestDeleted.emit($event);interestsByEntityMultipleNoTemplateComponent.getUserInterestsByEntityMultiple(interestsByEntityMultipleNoTemplateComponent.createRequestData())\"\r\n        #deleteUserInterestNoTemplateComponent></user-interests-delete-user-interest-no-template>\r\n\r\n<ion-button fill=\"outline\" shape=\"round\" size=\"large\" color=\"medium\" class=\"m-auto\" *ngIf=\"!user_interests?.length\"\r\n            (click)=\"createUserInterestNoTemplateComponent.createUserInterest(createUserInterestNoTemplateComponent.createRequestData())\"\r\n            coreClickStopPropogation>\r\n    <fa-icon class=\"font-primary\" icon=\"heart\"></fa-icon>\r\n</ion-button>\r\n<ion-button fill=\"solid\" shape=\"round\" size=\"large\" color=\"medium\" class=\"m-auto\" *ngIf=\"user_interests?.length\"\r\n            (click)=\"deleteUserInterestNoTemplateComponent.deleteUserInterest(deleteUserInterestNoTemplateComponent.createRequestData(user_interests[0]))\"\r\n            coreClickStopPropogation>\r\n    <fa-icon icon=\"heart\"></fa-icon>\r\n</ion-button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-get-or-create/user-interests-get-or-create-with-delete.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-interests/components/user-interests-get-or-create/user-interests-get-or-create-with-delete.component.html ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<user-interests-by-entity-multiple-no-template\r\n        [entity]=\"entity\" [type]=\"type\" [interaction]=\"interaction\"\r\n        [userId]=\"loggedProfile.userAccount._id\"\r\n        (userInterestsReceived)=\"user_interests=$event\"\r\n        #interestsByEntityMultipleNoTemplateComponent></user-interests-by-entity-multiple-no-template>\r\n\r\n<user-interests-create-user-interest-no-template\r\n        [entity]=\"entity\" [type]=\"type\" [interaction]=\"interaction\"\r\n        (userInteractionCreated)=\"user_interests=[$event];userInteractionCreated.emit($event)\"\r\n        #createUserInterestNoTemplateComponent></user-interests-create-user-interest-no-template>\r\n\r\n<user-interests-delete-user-interest-no-template\r\n        (userInterestDeleted)=\"userInterestDeleted.emit($event);interestsByEntityMultipleNoTemplateComponent.getUserInterestsByEntityMultiple(interestsByEntityMultipleNoTemplateComponent.createRequestData())\"\r\n        #deleteUserInterestNoTemplateComponent></user-interests-delete-user-interest-no-template>\r\n\r\n<ion-button fill=\"outline\" shape=\"round\" size=\"large\" color=\"medium\" class=\"m-auto\" *ngIf=\"!user_interests?.length\"\r\n            (click)=\"createUserInterestNoTemplateComponent.createUserInterest(createUserInterestNoTemplateComponent.createRequestData())\"\r\n            coreClickStopPropogation>\r\n    <fa-icon class=\"font-primary\" icon=\"thumbs-up\"></fa-icon>\r\n</ion-button>\r\n<ion-button fill=\"solid\" shape=\"round\" size=\"large\" color=\"medium\" class=\"m-auto\" *ngIf=\"user_interests?.length\"\r\n            (click)=\"deleteUserInterestNoTemplateComponent.deleteUserInterest(deleteUserInterestNoTemplateComponent.createRequestData(user_interests[0]))\"\r\n            coreClickStopPropogation>\r\n    <fa-icon icon=\"thumbs-up\"></fa-icon>\r\n</ion-button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-get-or-create/user-interests-get-or-create.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-interests/components/user-interests-get-or-create/user-interests-get-or-create.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<user-interests-by-entity-multiple-no-template\r\n        [entity]=\"entity\" [type]=\"type\" [interaction]=\"interaction\"\r\n        [userId]=\"loggedProfile.userAccount._id\"\r\n        (userInterestsReceived)=\"user_interests=$event\"\r\n></user-interests-by-entity-multiple-no-template>\r\n\r\n<user-interests-create-user-interest-no-template\r\n        [entity]=\"entity\" [type]=\"type\" [interaction]=\"interaction\"\r\n        (userInteractionCreated)=\"user_interests=[$event]\"\r\n        #createUserInterestNoTemplateComponent></user-interests-create-user-interest-no-template>\r\n\r\n<ion-button fill=\"outline\" shape=\"round\" size=\"large\" color=\"medium\" class=\"m-auto\" *ngIf=\"!user_interests?.length\"\r\n            (click)=\"createUserInterestNoTemplateComponent.createUserInterest(createUserInterestNoTemplateComponent.createRequestData())\" coreClickStopPropogation>\r\n    <fa-icon class=\"font-primary\" icon=\"thumbs-up\"></fa-icon>\r\n</ion-button>\r\n<ion-button fill=\"solid\" shape=\"round\" size=\"large\" color=\"medium\" class=\"m-auto\" *ngIf=\"user_interests?.length\" coreClickStopPropogation>\r\n    <fa-icon icon=\"thumbs-up\"></fa-icon>\r\n</ion-button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-similar-interests/user-interests-similar-interests-no-template.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-interests/components/user-interests-similar-interests/user-interests-similar-interests-no-template.component.html ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-similar-interests/user-interests-similar-interests.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-interests/components/user-interests-similar-interests/user-interests-similar-interests.component.html ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-interests-similar-interests works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-user-interest-details/user-interests-user-interest-details.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-interests/components/user-interests-user-interest-details/user-interests-user-interest-details.component.html ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-interests-user-interest-details works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/categories/categories.constants.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.constants.ts ***!
  \****************************************************/
/*! exports provided: CategoriesConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesConstants", function() { return CategoriesConstants; });
class CategoriesConstants {
}
CategoriesConstants.CATEGORIES_ENDPOINT = 'categories';


/***/ }),

/***/ "./src/app/categories/categories.models.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.models.ts ***!
  \*************************************************/
/*! exports provided: CategoryRequests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryRequests", function() { return CategoryRequests; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");



var CategoryRequests;
(function (CategoryRequests) {
    let GetCategory;
    (function (GetCategory) {
        var Category = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["Categories"].Category;
        let Request = class Request {
        };
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        GetCategory.Request = Request;
        let Response = class Response extends Category {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        GetCategory.Response = Response;
    })(GetCategory = CategoryRequests.GetCategory || (CategoryRequests.GetCategory = {}));
    let SearchCategories;
    (function (SearchCategories) {
        var PaginatedRequest = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["Core"].PaginatedRequest;
        var Category = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["Categories"].Category;
        let Request = class Request extends PaginatedRequest {
            constructor() {
                super(...arguments);
                this.term = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('term', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "term", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        SearchCategories.Request = Request;
        let Response = class Response extends Category {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        SearchCategories.Response = Response;
    })(SearchCategories = CategoryRequests.SearchCategories || (CategoryRequests.SearchCategories = {}));
    let GetAllCategories;
    (function (GetAllCategories) {
        var Category = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["Categories"].Category;
        let Request = class Request {
        };
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        GetAllCategories.Request = Request;
        let Response = class Response extends Category {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        GetAllCategories.Response = Response;
    })(GetAllCategories = CategoryRequests.GetAllCategories || (CategoryRequests.GetAllCategories = {}));
    let CreateCategoryEntity;
    (function (CreateCategoryEntity) {
        var CategoryEntity = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["Categories"].CategoryEntity;
        let Request = class Request {
            constructor() {
                this.category = undefined;
                this.entityType = undefined;
                this.entity = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('category', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "category", void 0);
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
        CreateCategoryEntity.Request = Request;
        let Response = class Response extends CategoryEntity {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        CreateCategoryEntity.Response = Response;
    })(CreateCategoryEntity = CategoryRequests.CreateCategoryEntity || (CategoryRequests.CreateCategoryEntity = {}));
    let GetCategoryEntity;
    (function (GetCategoryEntity) {
        var CategoryEntity = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["Categories"].CategoryEntity;
        let Request = class Request {
        };
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        GetCategoryEntity.Request = Request;
        let Response = class Response extends CategoryEntity {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        GetCategoryEntity.Response = Response;
    })(GetCategoryEntity = CategoryRequests.GetCategoryEntity || (CategoryRequests.GetCategoryEntity = {}));
})(CategoryRequests || (CategoryRequests = {}));


/***/ }),

/***/ "./src/app/categories/categories.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesModule", function() { return CategoriesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _categories_categories_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @categories/categories.pipe */ "./src/app/categories/categories.pipe.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _categories_components_categories_category_details_categories_category_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @categories/components/categories-category-details/categories-category-details.component */ "./src/app/categories/components/categories-category-details/categories-category-details.component.ts");
/* harmony import */ var _categories_components_categories_search_categories_categories_search_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @categories/components/categories-search-categories/categories-search-categories.component */ "./src/app/categories/components/categories-search-categories/categories-search-categories.component.ts");
/* harmony import */ var _categories_components_categories_all_categories_categories_all_categories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @categories/components/categories-all-categories/categories-all-categories.component */ "./src/app/categories/components/categories-all-categories/categories-all-categories.component.ts");
/* harmony import */ var _categories_components_categories_create_category_entity_categories_create_category_entity_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @categories/components/categories-create-category-entity/categories-create-category-entity.component */ "./src/app/categories/components/categories-create-category-entity/categories-create-category-entity.component.ts");





// tslint:disable-next-line:max-line-length


// tslint:disable-next-line:max-line-length

let CategoriesModule = class CategoriesModule {
};
CategoriesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_categories_categories_pipe__WEBPACK_IMPORTED_MODULE_2__["CategoriesPipe"],
            _categories_components_categories_category_details_categories_category_details_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesCategoryDetailsComponent"],
            _categories_components_categories_search_categories_categories_search_categories_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesSearchCategoriesComponent"],
            _categories_components_categories_all_categories_categories_all_categories_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesAllCategoriesComponent"],
            _categories_components_categories_create_category_entity_categories_create_category_entity_component__WEBPACK_IMPORTED_MODULE_7__["CategoriesCreateCategoryEntityComponent"],
            _categories_components_categories_all_categories_categories_all_categories_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesAllCategoriesWithSelectComponent"],
            _categories_components_categories_category_details_categories_category_details_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesCategoryDetailsSelectBoxComponent"]
        ],
        imports: [
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]
        ],
        exports: [_categories_categories_pipe__WEBPACK_IMPORTED_MODULE_2__["CategoriesPipe"],
            _categories_components_categories_category_details_categories_category_details_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesCategoryDetailsComponent"],
            _categories_components_categories_search_categories_categories_search_categories_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesSearchCategoriesComponent"],
            _categories_components_categories_all_categories_categories_all_categories_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesAllCategoriesComponent"],
            _categories_components_categories_create_category_entity_categories_create_category_entity_component__WEBPACK_IMPORTED_MODULE_7__["CategoriesCreateCategoryEntityComponent"],
            _categories_components_categories_all_categories_categories_all_categories_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesAllCategoriesWithSelectComponent"],
            _categories_components_categories_category_details_categories_category_details_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesCategoryDetailsSelectBoxComponent"]
        ],
    })
], CategoriesModule);



/***/ }),

/***/ "./src/app/categories/categories.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/categories/categories.pipe.ts ***!
  \***********************************************/
/*! exports provided: CategoriesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPipe", function() { return CategoriesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoriesPipe = class CategoriesPipe {
    transform(value, ...args) {
        return null;
    }
};
CategoriesPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'categories'
    })
], CategoriesPipe);



/***/ }),

/***/ "./src/app/categories/categories.service.ts":
/*!**************************************************!*\
  !*** ./src/app/categories/categories.service.ts ***!
  \**************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_http_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/http/rest.service */ "./src/app/core/http/rest.service.ts");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm2015/ngx-restangular.js");
/* harmony import */ var _categories_categories_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @categories/categories.constants */ "./src/app/categories/categories.constants.ts");





let CategoriesService = class CategoriesService extends _core_http_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] {
    constructor(restangular) {
        super(restangular);
        this.categoryService = this.getService(_categories_categories_constants__WEBPACK_IMPORTED_MODULE_4__["CategoriesConstants"].CATEGORIES_ENDPOINT);
    }
    getCategory(request) {
        return this.categoryService.one(request.categoryId).get();
    }
    searchCategories(request) {
        return this.categoryService.one('search').customGET('', this.serialize(request));
    }
    getAllCategories(request) {
        return this.categoryService.one('all').customGET('', this.serialize(request));
    }
    createCategoryEntity(request) {
        return this.categoryService.one('entities').customPOST(this.serialize(request));
    }
    getCategoryEntity(request) {
        return this.categoryService.one('entities').one(request.categoryEntityId).get();
    }
};
CategoriesService.ctorParameters = () => [
    { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_3__["Restangular"] }
];
CategoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_3__["Restangular"]])
], CategoriesService);



/***/ }),

/***/ "./src/app/categories/components/categories-all-categories/categories-all-categories.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/categories/components/categories-all-categories/categories-all-categories.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY29tcG9uZW50cy9jYXRlZ29yaWVzLWFsbC1jYXRlZ29yaWVzL2NhdGVnb3JpZXMtYWxsLWNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/categories/components/categories-all-categories/categories-all-categories.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/categories/components/categories-all-categories/categories-all-categories.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CategoriesAllCategoriesComponent, CategoriesAllCategoriesWithSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesAllCategoriesComponent", function() { return CategoriesAllCategoriesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesAllCategoriesWithSelectComponent", function() { return CategoriesAllCategoriesWithSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _categories_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @categories/categories.service */ "./src/app/categories/categories.service.ts");
/* harmony import */ var _categories_categories_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @categories/categories.models */ "./src/app/categories/categories.models.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");







var Category = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["Categories"].Category;
var GetAllCategories = _categories_categories_models__WEBPACK_IMPORTED_MODULE_5__["CategoryRequests"].GetAllCategories;
let CategoriesAllCategoriesComponent = class CategoriesAllCategoriesComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(categoriesService, injector) {
        super(injector);
        this.categoriesService = categoriesService;
        this.categoriesReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
        this.getAllCategories(this.createRequestData());
    }
    createRequestData() {
        return new GetAllCategories.Request();
    }
    getAllCategories(request) {
        this.categoriesService
            .getAllCategories(request)
            .pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_6__["CommonsService"].deserializeMap(Category))
            .subscribe((value) => {
            this.categories = value;
            this.categoriesReceived.emit(value);
        });
    }
};
CategoriesAllCategoriesComponent.ctorParameters = () => [
    { type: _categories_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CategoriesAllCategoriesComponent.prototype, "categoriesReceived", void 0);
CategoriesAllCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "categories-all-categories",
        template: __webpack_require__(/*! raw-loader!./categories-all-categories.component.html */ "./node_modules/raw-loader/index.js!./src/app/categories/components/categories-all-categories/categories-all-categories.component.html"),
        styles: [__webpack_require__(/*! ./categories-all-categories.component.scss */ "./src/app/categories/components/categories-all-categories/categories-all-categories.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_categories_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], CategoriesAllCategoriesComponent);

let CategoriesAllCategoriesWithSelectComponent = class CategoriesAllCategoriesWithSelectComponent extends CategoriesAllCategoriesComponent {
    constructor() {
        super(...arguments);
        this.selected_categories = [];
        this.selectedCategoriesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    addOrRemoveCategory(category) {
        const categoryIndex = this.getCategoryIndex(category);
        if (categoryIndex === -1) {
            this.selected_categories.push(category);
        }
        else {
            this.selected_categories = this.selected_categories.filter((value) => value._id !== category._id);
        }
        this.selectedCategoriesChanged.emit(this.selected_categories);
    }
    getCategoryIndex(category) {
        return this.selected_categories.findIndex((value) => value._id === category._id);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CategoriesAllCategoriesWithSelectComponent.prototype, "selectedCategoriesChanged", void 0);
CategoriesAllCategoriesWithSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "categories-all-categories-with-select",
        template: __webpack_require__(/*! raw-loader!./categories-all-categories-with-select.component.html */ "./node_modules/raw-loader/index.js!./src/app/categories/components/categories-all-categories/categories-all-categories-with-select.component.html"),
        styles: [__webpack_require__(/*! ./categories-all-categories.component.scss */ "./src/app/categories/components/categories-all-categories/categories-all-categories.component.scss")]
    })
], CategoriesAllCategoriesWithSelectComponent);



/***/ }),

/***/ "./src/app/categories/components/categories-category-details/categories-category-details.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/categories/components/categories-category-details/categories-category-details.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select-box {\n  width: auto;\n  float: left;\n  margin: 5px;\n  padding: 10px 5px;\n  text-align: center;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JhY2t1cC9VU1RYLVByb2plY3QvRXZlbnREYXRpbmctU2Vhbi90ZXN0MS9zcmMvYXBwL2NhdGVnb3JpZXMvY29tcG9uZW50cy9jYXRlZ29yaWVzLWNhdGVnb3J5LWRldGFpbHMvY2F0ZWdvcmllcy1jYXRlZ29yeS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXRlZ29yaWVzL2NvbXBvbmVudHMvY2F0ZWdvcmllcy1jYXRlZ29yeS1kZXRhaWxzL2NhdGVnb3JpZXMtY2F0ZWdvcnktZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcmllcy9jb21wb25lbnRzL2NhdGVnb3JpZXMtY2F0ZWdvcnktZGV0YWlscy9jYXRlZ29yaWVzLWNhdGVnb3J5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0LWJveHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn0iLCIuc2VsZWN0LWJveCB7XG4gIHdpZHRoOiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/categories/components/categories-category-details/categories-category-details.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/categories/components/categories-category-details/categories-category-details.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: CategoriesCategoryDetailsComponent, CategoriesCategoryDetailsSelectBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesCategoryDetailsComponent", function() { return CategoriesCategoryDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesCategoryDetailsSelectBoxComponent", function() { return CategoriesCategoryDetailsSelectBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _categories_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @categories/categories.service */ "./src/app/categories/categories.service.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _categories_categories_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @categories/categories.models */ "./src/app/categories/categories.models.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");







var Category = _core_core_models__WEBPACK_IMPORTED_MODULE_4__["Categories"].Category;
var GetCategory = _categories_categories_models__WEBPACK_IMPORTED_MODULE_5__["CategoryRequests"].GetCategory;
let CategoriesCategoryDetailsComponent = class CategoriesCategoryDetailsComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(categoriesService, injector) {
        super(injector);
        this.categoriesService = categoriesService;
        this.categoryRecieved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getCategory = (request) => {
            this.categoriesService.getCategory(request).pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_6__["CommonsService"].deserializeMap(GetCategory.Request))
                .subscribe(value => {
                this.categoryRecieved.emit(value);
                this.category = value;
            });
        };
    }
    initializeComponent() {
        this.makeServiceCallWithIdIfObjectNull(this.category, this.createRequestData(), this.getCategory);
    }
    createRequestData(category_id) {
        const request = new GetCategory.Request();
        request.categoryId = category_id || this.categoryId;
        return request;
    }
};
CategoriesCategoryDetailsComponent.ctorParameters = () => [
    { type: _categories_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Category)
], CategoriesCategoryDetailsComponent.prototype, "category", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CategoriesCategoryDetailsComponent.prototype, "selected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CategoriesCategoryDetailsComponent.prototype, "categoryId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CategoriesCategoryDetailsComponent.prototype, "categoryRecieved", void 0);
CategoriesCategoryDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'categories-category-details',
        template: __webpack_require__(/*! raw-loader!./categories-category-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/categories/components/categories-category-details/categories-category-details.component.html"),
        styles: [__webpack_require__(/*! ./categories-category-details.component.scss */ "./src/app/categories/components/categories-category-details/categories-category-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_categories_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], CategoriesCategoryDetailsComponent);

let CategoriesCategoryDetailsSelectBoxComponent = class CategoriesCategoryDetailsSelectBoxComponent extends CategoriesCategoryDetailsComponent {
};
CategoriesCategoryDetailsSelectBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'categories-category-details-select-box',
        template: __webpack_require__(/*! raw-loader!./categories-category-details-select-box.component.html */ "./node_modules/raw-loader/index.js!./src/app/categories/components/categories-category-details/categories-category-details-select-box.component.html"),
        styles: [__webpack_require__(/*! ./categories-category-details.component.scss */ "./src/app/categories/components/categories-category-details/categories-category-details.component.scss")]
    })
], CategoriesCategoryDetailsSelectBoxComponent);



/***/ }),

/***/ "./src/app/categories/components/categories-create-category-entity/categories-create-category-entity.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/categories/components/categories-create-category-entity/categories-create-category-entity.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY29tcG9uZW50cy9jYXRlZ29yaWVzLWNyZWF0ZS1jYXRlZ29yeS1lbnRpdHkvY2F0ZWdvcmllcy1jcmVhdGUtY2F0ZWdvcnktZW50aXR5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/categories/components/categories-create-category-entity/categories-create-category-entity.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/categories/components/categories-create-category-entity/categories-create-category-entity.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: CategoriesCreateCategoryEntityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesCreateCategoryEntityComponent", function() { return CategoriesCreateCategoryEntityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _categories_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @categories/categories.service */ "./src/app/categories/categories.service.ts");
/* harmony import */ var _categories_categories_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @categories/categories.models */ "./src/app/categories/categories.models.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");







var CreateCategoryEntity = _categories_categories_models__WEBPACK_IMPORTED_MODULE_4__["CategoryRequests"].CreateCategoryEntity;
var Category = _core_core_models__WEBPACK_IMPORTED_MODULE_5__["Categories"].Category;
var CategoryEntity = _core_core_models__WEBPACK_IMPORTED_MODULE_5__["Categories"].CategoryEntity;
let CategoriesCreateCategoryEntityComponent = class CategoriesCreateCategoryEntityComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(categoriesService, injector) {
        super(injector);
        this.categoriesService = categoriesService;
        this.categoryEntityCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
    }
    createRequestData(entity, entityType, categoryId) {
        const request = new CreateCategoryEntity.Request();
        request.category = categoryId || this.category._id;
        request.entityType = entityType || this.entityType;
        request.entity = entity || this.entity;
        return request;
    }
    createCategoryEntity(request) {
        this.categoriesService.createCategoryEntity(request).pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_6__["CommonsService"].deserializeMap(CategoryEntity))
            .subscribe(value => {
            this.categoryEntityCreated.emit(value);
        });
    }
};
CategoriesCreateCategoryEntityComponent.ctorParameters = () => [
    { type: _categories_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Category)
], CategoriesCreateCategoryEntityComponent.prototype, "category", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CategoriesCreateCategoryEntityComponent.prototype, "entityType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CategoriesCreateCategoryEntityComponent.prototype, "entity", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CategoriesCreateCategoryEntityComponent.prototype, "categoryEntityCreated", void 0);
CategoriesCreateCategoryEntityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'categories-create-category-entity',
        template: __webpack_require__(/*! raw-loader!./categories-create-category-entity.component.html */ "./node_modules/raw-loader/index.js!./src/app/categories/components/categories-create-category-entity/categories-create-category-entity.component.html"),
        styles: [__webpack_require__(/*! ./categories-create-category-entity.component.scss */ "./src/app/categories/components/categories-create-category-entity/categories-create-category-entity.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_categories_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], CategoriesCreateCategoryEntityComponent);



/***/ }),

/***/ "./src/app/categories/components/categories-search-categories/categories-search-categories.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/categories/components/categories-search-categories/categories-search-categories.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY29tcG9uZW50cy9jYXRlZ29yaWVzLXNlYXJjaC1jYXRlZ29yaWVzL2NhdGVnb3JpZXMtc2VhcmNoLWNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/categories/components/categories-search-categories/categories-search-categories.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/categories/components/categories-search-categories/categories-search-categories.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: CategoriesSearchCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesSearchCategoriesComponent", function() { return CategoriesSearchCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _categories_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @categories/categories.service */ "./src/app/categories/categories.service.ts");
/* harmony import */ var _core_components_paginated_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/paginated-base.component */ "./src/app/core/components/paginated-base.component.ts");
/* harmony import */ var _categories_categories_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @categories/categories.models */ "./src/app/categories/categories.models.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");





var SearchCategories = _categories_categories_models__WEBPACK_IMPORTED_MODULE_4__["CategoryRequests"].SearchCategories;

var Category = _core_core_models__WEBPACK_IMPORTED_MODULE_5__["Categories"].Category;

let CategoriesSearchCategoriesComponent = class CategoriesSearchCategoriesComponent extends _core_components_paginated_base_component__WEBPACK_IMPORTED_MODULE_3__["PaginatedBaseComponent"] {
    constructor(categoriesService, injector) {
        super(injector);
        this.categoriesService = categoriesService;
        this.categoriesReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
    }
    createRequestData(term, first, count) {
        let request = new SearchCategories.Request();
        request.term = term || this.term;
        request = this.setLimits(request, first, count);
        return request;
    }
    searchCategories(request) {
        this.categoriesService.searchCategories(request).pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_6__["CommonsService"].deserializeMap(Category))
            .subscribe(value => {
            this.categories = value;
            this.categoriesReceived.emit(value);
        });
    }
};
CategoriesSearchCategoriesComponent.ctorParameters = () => [
    { type: _categories_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CategoriesSearchCategoriesComponent.prototype, "term", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CategoriesSearchCategoriesComponent.prototype, "categoriesReceived", void 0);
CategoriesSearchCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'categories-search-categories',
        template: __webpack_require__(/*! raw-loader!./categories-search-categories.component.html */ "./node_modules/raw-loader/index.js!./src/app/categories/components/categories-search-categories/categories-search-categories.component.html"),
        styles: [__webpack_require__(/*! ./categories-search-categories.component.scss */ "./src/app/categories/components/categories-search-categories/categories-search-categories.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_categories_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], CategoriesSearchCategoriesComponent);



/***/ }),

/***/ "./src/app/core/components/paginated-base.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/components/paginated-base.component.ts ***!
  \*************************************************************/
/*! exports provided: PaginatedBaseComponent, SortedPaginatedBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatedBaseComponent", function() { return PaginatedBaseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortedPaginatedBaseComponent", function() { return SortedPaginatedBaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



class PaginatedBaseComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    setLimits(request, first, count) {
        request.first = first || this.first;
        request.count = count || this.count;
        return request;
    }
}
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], PaginatedBaseComponent.prototype, "first", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], PaginatedBaseComponent.prototype, "count", void 0);
class SortedPaginatedBaseComponent extends PaginatedBaseComponent {
    setColumnOrders(request, columnName, columnOrder) {
        request.column_name = columnName || this.columnName;
        request.column_order = columnOrder || this.columnOrder;
        return request;
    }
    setLimitsAndOrders(request) {
        request = this.setLimits(request);
        request = this.setColumnOrders(request);
        return request;
    }
}
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SortedPaginatedBaseComponent.prototype, "columnName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SortedPaginatedBaseComponent.prototype, "columnOrder", void 0);


/***/ }),

/***/ "./src/app/events/components/events-create-event-invite-modal/events-create-event-invite-modal-content/events-create-event-invite-modal-content.component.scss":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/app/events/components/events-create-event-invite-modal/events-create-event-invite-modal-content/events-create-event-invite-modal-content.component.scss ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9jb21wb25lbnRzL2V2ZW50cy1jcmVhdGUtZXZlbnQtaW52aXRlLW1vZGFsL2V2ZW50cy1jcmVhdGUtZXZlbnQtaW52aXRlLW1vZGFsLWNvbnRlbnQvZXZlbnRzLWNyZWF0ZS1ldmVudC1pbnZpdGUtbW9kYWwtY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/events/components/events-create-event-invite-modal/events-create-event-invite-modal-content/events-create-event-invite-modal-content.component.ts":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/events/components/events-create-event-invite-modal/events-create-event-invite-modal-content/events-create-event-invite-modal-content.component.ts ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: EventsCreateEventInviteModalContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsCreateEventInviteModalContentComponent", function() { return EventsCreateEventInviteModalContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_modals_base_modal_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/modals/base-modal-content.component */ "./src/app/core/components/modals/base-modal-content.component.ts");
/* harmony import */ var _chat_chat_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chat/chat.pipe */ "./src/app/chat/chat.pipe.ts");




let EventsCreateEventInviteModalContentComponent = class EventsCreateEventInviteModalContentComponent extends _core_components_modals_base_modal_content_component__WEBPACK_IMPORTED_MODULE_2__["BaseModalContentComponent"] {
    constructor(injector) {
        super(injector);
        this.selected_accounts = [];
        this.chats_user_accounts_to_other_account_pipe = new _chat_chat_pipe__WEBPACK_IMPORTED_MODULE_3__["ChatsUserAccountsToOtherAccountPipe"]();
    }
    initializeComponent() {
    }
    addAccount(account) {
        // TODO: add remove too
        this.selected_accounts = this.selected_accounts.concat(account);
    }
};
EventsCreateEventInviteModalContentComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
EventsCreateEventInviteModalContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'events-create-event-invite-modal-content',
        template: __webpack_require__(/*! raw-loader!./events-create-event-invite-modal-content.component.html */ "./node_modules/raw-loader/index.js!./src/app/events/components/events-create-event-invite-modal/events-create-event-invite-modal-content/events-create-event-invite-modal-content.component.html"),
        styles: [__webpack_require__(/*! ./events-create-event-invite-modal-content.component.scss */ "./src/app/events/components/events-create-event-invite-modal/events-create-event-invite-modal-content/events-create-event-invite-modal-content.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], EventsCreateEventInviteModalContentComponent);



/***/ }),

/***/ "./src/app/events/components/events-create-event-invite-modal/events-create-event-invite-modal.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/events/components/events-create-event-invite-modal/events-create-event-invite-modal.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9jb21wb25lbnRzL2V2ZW50cy1jcmVhdGUtZXZlbnQtaW52aXRlLW1vZGFsL2V2ZW50cy1jcmVhdGUtZXZlbnQtaW52aXRlLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/events/components/events-create-event-invite-modal/events-create-event-invite-modal.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/events/components/events-create-event-invite-modal/events-create-event-invite-modal.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: EventsCreateEventInviteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsCreateEventInviteModalComponent", function() { return EventsCreateEventInviteModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_modals_base_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/modals/base-modal.component */ "./src/app/core/components/modals/base-modal.component.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _events_components_events_create_event_invite_modal_events_create_event_invite_modal_content_events_create_event_invite_modal_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @events/components/events-create-event-invite-modal/events-create-event-invite-modal-content/events-create-event-invite-modal-content.component */ "./src/app/events/components/events-create-event-invite-modal/events-create-event-invite-modal-content/events-create-event-invite-modal-content.component.ts");




// tslint:disable-next-line:max-line-length

var Event = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["Events"].Event;
let EventsCreateEventInviteModalComponent = class EventsCreateEventInviteModalComponent extends _core_components_modals_base_modal_component__WEBPACK_IMPORTED_MODULE_2__["BaseModalComponent"] {
    constructor(injector) {
        super(injector);
    }
    initializeComponent() {
    }
    openModal() {
        const _super = Object.create(null, {
            open: { get: () => super.open }
        });
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.setModalData('event', this.event);
            yield _super.open.call(this, _events_components_events_create_event_invite_modal_events_create_event_invite_modal_content_events_create_event_invite_modal_content_component__WEBPACK_IMPORTED_MODULE_4__["EventsCreateEventInviteModalContentComponent"]);
        });
    }
};
EventsCreateEventInviteModalComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Event)
], EventsCreateEventInviteModalComponent.prototype, "event", void 0);
EventsCreateEventInviteModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'events-create-event-invite-modal',
        template: __webpack_require__(/*! raw-loader!./events-create-event-invite-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/events/components/events-create-event-invite-modal/events-create-event-invite-modal.component.html"),
        styles: [__webpack_require__(/*! ./events-create-event-invite-modal.component.scss */ "./src/app/events/components/events-create-event-invite-modal/events-create-event-invite-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], EventsCreateEventInviteModalComponent);



/***/ }),

/***/ "./src/app/events/components/events-create-event-invite/events-create-event-invite.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/events/components/events-create-event-invite/events-create-event-invite.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9jb21wb25lbnRzL2V2ZW50cy1jcmVhdGUtZXZlbnQtaW52aXRlL2V2ZW50cy1jcmVhdGUtZXZlbnQtaW52aXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/events/components/events-create-event-invite/events-create-event-invite.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/events/components/events-create-event-invite/events-create-event-invite.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: EventsCreateEventInviteComponent, EventsCreateEventInviteNoTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsCreateEventInviteComponent", function() { return EventsCreateEventInviteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsCreateEventInviteNoTemplateComponent", function() { return EventsCreateEventInviteNoTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/form.component */ "./src/app/core/components/form.component.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _events_events_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @events/events.models */ "./src/app/events/events.models.ts");
/* harmony import */ var _events_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @events/events.service */ "./src/app/events/events.service.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");







var UserAccount = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["Users"].UserAccount;
var EventInvite = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["Events"].EventInvite;
var CreateEventInvite = _events_events_models__WEBPACK_IMPORTED_MODULE_4__["EventRequests"].CreateEventInvite;
var Event = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["Events"].Event;
let EventsCreateEventInviteComponent = class EventsCreateEventInviteComponent extends _core_components_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"] {
    constructor(eventService, injector) {
        super(injector);
        this.eventService = eventService;
        this.eventInviteCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    afterInitializeComponent() {
    }
    getFormModel() {
        return [];
    }
    initializeComponent() {
    }
    createRequestData(message, invitee, event) {
        const request = new CreateEventInvite.Request();
        request.event =
            (event || new Event())._id || (this.event || new Event())._id;
        request.invitee = (invitee || new UserAccount())._id || (this.invitee || new UserAccount())._id;
        request.message = message || this.message;
        return request;
    }
    createEventInvite(request) {
        this.eventService.createEventInvite(request).pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_6__["CommonsService"].deserializeMap(EventInvite))
            .subscribe(value => {
            this.eventInviteCreated.emit(value);
            this.notificationsService.success('Successfully invited');
        });
    }
};
EventsCreateEventInviteComponent.ctorParameters = () => [
    { type: _events_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Event)
], EventsCreateEventInviteComponent.prototype, "event", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", UserAccount)
], EventsCreateEventInviteComponent.prototype, "invitee", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], EventsCreateEventInviteComponent.prototype, "message", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EventsCreateEventInviteComponent.prototype, "eventInviteCreated", void 0);
EventsCreateEventInviteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'events-create-event-invite',
        template: __webpack_require__(/*! raw-loader!./events-create-event-invite.component.html */ "./node_modules/raw-loader/index.js!./src/app/events/components/events-create-event-invite/events-create-event-invite.component.html"),
        styles: [__webpack_require__(/*! ./events-create-event-invite.component.scss */ "./src/app/events/components/events-create-event-invite/events-create-event-invite.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_events_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], EventsCreateEventInviteComponent);

let EventsCreateEventInviteNoTemplateComponent = class EventsCreateEventInviteNoTemplateComponent extends EventsCreateEventInviteComponent {
};
EventsCreateEventInviteNoTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'events-create-event-invite-no-template',
        template: __webpack_require__(/*! raw-loader!./events-create-event-invite-no-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/events/components/events-create-event-invite/events-create-event-invite-no-template.component.html"),
        styles: [__webpack_require__(/*! ./events-create-event-invite.component.scss */ "./src/app/events/components/events-create-event-invite/events-create-event-invite.component.scss")]
    })
], EventsCreateEventInviteNoTemplateComponent);



/***/ }),

/***/ "./src/app/events/components/events-create-event-modal/events-create-event-modal-content/events-create-event-modal-content.component.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/events/components/events-create-event-modal/events-create-event-modal-content/events-create-event-modal-content.component.scss ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9jb21wb25lbnRzL2V2ZW50cy1jcmVhdGUtZXZlbnQtbW9kYWwvZXZlbnRzLWNyZWF0ZS1ldmVudC1tb2RhbC1jb250ZW50L2V2ZW50cy1jcmVhdGUtZXZlbnQtbW9kYWwtY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/events/components/events-create-event-modal/events-create-event-modal-content/events-create-event-modal-content.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/events/components/events-create-event-modal/events-create-event-modal-content/events-create-event-modal-content.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: EventsCreateEventModalContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsCreateEventModalContentComponent", function() { return EventsCreateEventModalContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_modals_base_modal_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/modals/base-modal-content.component */ "./src/app/core/components/modals/base-modal-content.component.ts");
/* harmony import */ var _images_components_images_upload_file_images_upload_file_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @images/components/images-upload-file/images-upload-file.component */ "./src/app/images/components/images-upload-file/images-upload-file.component.ts");
/* harmony import */ var _categories_components_categories_create_category_entity_categories_create_category_entity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @categories/components/categories-create-category-entity/categories-create-category-entity.component */ "./src/app/categories/components/categories-create-category-entity/categories-create-category-entity.component.ts");
/* harmony import */ var _categories_components_categories_all_categories_categories_all_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @categories/components/categories-all-categories/categories-all-categories.component */ "./src/app/categories/components/categories-all-categories/categories-all-categories.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let EventsCreateEventModalContentComponent = class EventsCreateEventModalContentComponent extends _core_components_modals_base_modal_content_component__WEBPACK_IMPORTED_MODULE_2__["BaseModalContentComponent"] {
    constructor(injector) {
        super(injector);
    }
    initializeComponent() {
    }
    registerEffectAndCloseModal(event, modal_result) {
        if (this.categories_all_categories_with_select_component.selected_categories.length) {
            this.categories_all_categories_with_select_component.selected_categories.forEach(category => {
                this.categories_create_category_entity_component.createCategoryEntity(this.categories_create_category_entity_component.createRequestData(event._id, undefined, category._id));
            });
            this.effects_observable_array.push(this.categories_create_category_entity_component.categoryEntityCreated.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["bufferCount"])(this.categories_all_categories_with_select_component.selected_categories.length)));
        }
        if (this.images_upload_file_with_preview_component.file_blob) {
            const file_blob = this.images_upload_file_with_preview_component.file_blob;
            const component = this.images_upload_file_with_preview_component.images_create_file_upload_request_component;
            component.createFileUploadRequest(component.createRequestData(file_blob.file.name, undefined, undefined, event._id));
            this.effects_observable_array.push(this.images_upload_file_with_preview_component.fileUploaded.asObservable());
        }
        if (this.categories_all_categories_with_select_component.selected_categories.length) {
        }
        this.closeModal(modal_result);
    }
};
EventsCreateEventModalContentComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_images_components_images_upload_file_images_upload_file_component__WEBPACK_IMPORTED_MODULE_3__["ImagesUploadFileWithPreviewComponent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _images_components_images_upload_file_images_upload_file_component__WEBPACK_IMPORTED_MODULE_3__["ImagesUploadFileWithPreviewComponent"])
], EventsCreateEventModalContentComponent.prototype, "images_upload_file_with_preview_component", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_categories_components_categories_create_category_entity_categories_create_category_entity_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesCreateCategoryEntityComponent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _categories_components_categories_create_category_entity_categories_create_category_entity_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesCreateCategoryEntityComponent"])
], EventsCreateEventModalContentComponent.prototype, "categories_create_category_entity_component", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_categories_components_categories_all_categories_categories_all_categories_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesAllCategoriesWithSelectComponent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _categories_components_categories_all_categories_categories_all_categories_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesAllCategoriesWithSelectComponent"])
], EventsCreateEventModalContentComponent.prototype, "categories_all_categories_with_select_component", void 0);
EventsCreateEventModalContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'events-create-event-modal-content',
        template: __webpack_require__(/*! raw-loader!./events-create-event-modal-content.component.html */ "./node_modules/raw-loader/index.js!./src/app/events/components/events-create-event-modal/events-create-event-modal-content/events-create-event-modal-content.component.html"),
        styles: [__webpack_require__(/*! ./events-create-event-modal-content.component.scss */ "./src/app/events/components/events-create-event-modal/events-create-event-modal-content/events-create-event-modal-content.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], EventsCreateEventModalContentComponent);



/***/ }),

/***/ "./src/app/events/components/events-create-event-modal/events-create-event-modal.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/events/components/events-create-event-modal/events-create-event-modal.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9jb21wb25lbnRzL2V2ZW50cy1jcmVhdGUtZXZlbnQtbW9kYWwvZXZlbnRzLWNyZWF0ZS1ldmVudC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/events/components/events-create-event-modal/events-create-event-modal.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/events/components/events-create-event-modal/events-create-event-modal.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: EventsCreateEventModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsCreateEventModalComponent", function() { return EventsCreateEventModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_modals_base_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/modals/base-modal.component */ "./src/app/core/components/modals/base-modal.component.ts");
/* harmony import */ var _events_components_events_create_event_modal_events_create_event_modal_content_events_create_event_modal_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @events/components/events-create-event-modal/events-create-event-modal-content/events-create-event-modal-content.component */ "./src/app/events/components/events-create-event-modal/events-create-event-modal-content/events-create-event-modal-content.component.ts");



// tslint:disable-next-line:max-line-length

let EventsCreateEventModalComponent = class EventsCreateEventModalComponent extends _core_components_modals_base_modal_component__WEBPACK_IMPORTED_MODULE_2__["BaseModalComponent"] {
    constructor(injector) {
        super(injector);
    }
    openModal() {
        const _super = Object.create(null, {
            open: { get: () => super.open }
        });
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield _super.open.call(this, _events_components_events_create_event_modal_events_create_event_modal_content_events_create_event_modal_content_component__WEBPACK_IMPORTED_MODULE_3__["EventsCreateEventModalContentComponent"]);
        });
    }
    initializeComponent() {
    }
};
EventsCreateEventModalComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
EventsCreateEventModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'events-create-event-modal',
        template: __webpack_require__(/*! raw-loader!./events-create-event-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/events/components/events-create-event-modal/events-create-event-modal.component.html"),
        styles: [__webpack_require__(/*! ./events-create-event-modal.component.scss */ "./src/app/events/components/events-create-event-modal/events-create-event-modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], EventsCreateEventModalComponent);



/***/ }),

/***/ "./src/app/events/components/events-create-event/events-create-event.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/events/components/events-create-event/events-create-event.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9jb21wb25lbnRzL2V2ZW50cy1jcmVhdGUtZXZlbnQvZXZlbnRzLWNyZWF0ZS1ldmVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/events/components/events-create-event/events-create-event.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/events/components/events-create-event/events-create-event.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EventsCreateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsCreateEventComponent", function() { return EventsCreateEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/form.component */ "./src/app/core/components/form.component.ts");
/* harmony import */ var _events_events_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @events/events.models */ "./src/app/events/events.models.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");
/* harmony import */ var _events_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @events/events.service */ "./src/app/events/events.service.ts");
/* harmony import */ var _events_events_form_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @events/events.form.models */ "./src/app/events/events.form.models.ts");








var CreateEvent = _events_events_models__WEBPACK_IMPORTED_MODULE_3__["EventRequests"].CreateEvent;
var LocationValue = _core_core_models__WEBPACK_IMPORTED_MODULE_4__["Users"].LocationValue;
let EventsCreateEventComponent = class EventsCreateEventComponent extends _core_components_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"] {
    constructor(eventsService, injector) {
        super(injector);
        this.eventsService = eventsService;
        this.eventCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formLayout = _events_events_form_models__WEBPACK_IMPORTED_MODULE_7__["EVENTS_CREATE_EVENT_FORM_LAYOUT"];
        this.invalidLocation = true;
    }
    getFormModel() {
        return _events_events_form_models__WEBPACK_IMPORTED_MODULE_7__["EVENTS_CREATE_EVENT_FORM_MODEL"];
    }
    initializeComponent() {
    }
    afterInitializeComponent() {
        this.getInputModel('event_type').value = 'ACTIVITY';
    }
    createRequestData(event_name, event_description, event_type, event_start_time, event_end_time, location) {
        const request = new CreateEvent.Request();
        request.eventName = event_name || this.getInputModelValueAsString('event_name');
        request.eventDescription = event_description || this.getInputModelValueAsString('event_description');
        request.eventType = event_type || this.getInputModelValueAsString('event_type');
        request.eventStartTime = event_start_time || this.getDateModelValue('event_start_time');
        request.eventEndTime = event_end_time || this.getDateModelValue('event_end_time');
        const location_value = new LocationValue();
        // console.log(location);
        location_value.latitude = this.lat;
        location_value.longitude = this.long;
        request.location = location_value;
        return request;
    }
    createEvent(request) {
        this.create_event_subscription$ =
            this.eventsService.createEvent(request).pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_5__["CommonsService"].deserializeMap(CreateEvent.Response))
                .subscribe(value => {
                this.eventCreated.emit(value);
                this.notificationsService.success('Event created');
            });
    }
    getAddress(place) {
        if (typeof place === 'object') {
            this.invalidLocation = false;
        }
        this.lat = Number(place['geometry'].location.lat());
        this.long = Number(place['geometry'].location.lng());
    }
};
EventsCreateEventComponent.ctorParameters = () => [
    { type: _events_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], EventsCreateEventComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EventsCreateEventComponent.prototype, "eventCreated", void 0);
EventsCreateEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'events-create-event',
        template: __webpack_require__(/*! raw-loader!./events-create-event.component.html */ "./node_modules/raw-loader/index.js!./src/app/events/components/events-create-event/events-create-event.component.html"),
        styles: [__webpack_require__(/*! ./events-create-event.component.scss */ "./src/app/events/components/events-create-event/events-create-event.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_events_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], EventsCreateEventComponent);



/***/ }),

/***/ "./src/app/events/components/events-event-details/events-event-details.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/events/components/events-event-details/events-event-details.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9jb21wb25lbnRzL2V2ZW50cy1ldmVudC1kZXRhaWxzL2V2ZW50cy1ldmVudC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/events/components/events-event-details/events-event-details.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/events/components/events-event-details/events-event-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: EventsEventDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsEventDetailsComponent", function() { return EventsEventDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _events_events_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @events/events.models */ "./src/app/events/events.models.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _events_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @events/events.service */ "./src/app/events/events.service.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");







var GetEvent = _events_events_models__WEBPACK_IMPORTED_MODULE_3__["EventRequests"].GetEvent;
var Event = _core_core_models__WEBPACK_IMPORTED_MODULE_4__["Events"].Event;
let EventsEventDetailsComponent = class EventsEventDetailsComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(eventService, injector) {
        super(injector);
        this.eventService = eventService;
        this.eventReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getEvent = (request) => {
            this.eventService.getEvent(request).pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_6__["CommonsService"].deserializeMap(Event)).subscribe(value => {
                this.event = value;
                this.eventReceived.emit(value);
            });
        };
    }
    initializeComponent() {
        this.makeServiceCallWithIdIfObjectNull(this.event, this.createRequestData(), this.getEvent);
    }
    createRequestData(event_id) {
        const request = new GetEvent.Request();
        request.eventId = event_id || this.eventId;
        return request;
    }
};
EventsEventDetailsComponent.ctorParameters = () => [
    { type: _events_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], EventsEventDetailsComponent.prototype, "eventId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Event)
], EventsEventDetailsComponent.prototype, "event", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EventsEventDetailsComponent.prototype, "eventReceived", void 0);
EventsEventDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'events-event-details',
        template: __webpack_require__(/*! raw-loader!./events-event-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/events/components/events-event-details/events-event-details.component.html"),
        styles: [__webpack_require__(/*! ./events-event-details.component.scss */ "./src/app/events/components/events-event-details/events-event-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_events_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], EventsEventDetailsComponent);



/***/ }),

/***/ "./src/app/events/components/events-event-invite-details/events-event-invite-details.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/events/components/events-event-invite-details/events-event-invite-details.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9jb21wb25lbnRzL2V2ZW50cy1ldmVudC1pbnZpdGUtZGV0YWlscy9ldmVudHMtZXZlbnQtaW52aXRlLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/events/components/events-event-invite-details/events-event-invite-details.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/events/components/events-event-invite-details/events-event-invite-details.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: EventsEventInviteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsEventInviteDetailsComponent", function() { return EventsEventInviteDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _events_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @events/events.service */ "./src/app/events/events.service.ts");
/* harmony import */ var _events_events_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @events/events.models */ "./src/app/events/events.models.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");




var EventInvite = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["Events"].EventInvite;


var GetEventInvite = _events_events_models__WEBPACK_IMPORTED_MODULE_5__["EventRequests"].GetEventInvite;

let EventsEventInviteDetailsComponent = class EventsEventInviteDetailsComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(eventsService, injector) {
        super(injector);
        this.eventsService = eventsService;
        this.eventInviteRecieved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getEventInvite = (request) => {
            this.eventsService.getEventInvite(request).pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_6__["CommonsService"].deserializeMap(EventInvite))
                .subscribe(value => {
                this.eventInvite = value;
                this.eventInviteRecieved.emit(value);
            });
        };
    }
    initializeComponent() {
        this.makeServiceCallWithIdIfObjectNull(this.eventInvite, this.createRequestData(), this.getEventInvite);
    }
    createRequestData(event_invite_id) {
        const request = new GetEventInvite.Request();
        request.eventInviteId = event_invite_id || this.eventInviteId;
        return request;
    }
};
EventsEventInviteDetailsComponent.ctorParameters = () => [
    { type: _events_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", EventInvite)
], EventsEventInviteDetailsComponent.prototype, "eventInvite", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], EventsEventInviteDetailsComponent.prototype, "eventInviteId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EventsEventInviteDetailsComponent.prototype, "eventInviteRecieved", void 0);
EventsEventInviteDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'events-event-invite-details',
        template: __webpack_require__(/*! raw-loader!./events-event-invite-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/events/components/events-event-invite-details/events-event-invite-details.component.html"),
        styles: [__webpack_require__(/*! ./events-event-invite-details.component.scss */ "./src/app/events/components/events-event-invite-details/events-event-invite-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_events_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], EventsEventInviteDetailsComponent);



/***/ }),

/***/ "./src/app/events/components/events-event-invites/events-event-invites.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/events/components/events-event-invites/events-event-invites.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9jb21wb25lbnRzL2V2ZW50cy1ldmVudC1pbnZpdGVzL2V2ZW50cy1ldmVudC1pbnZpdGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/events/components/events-event-invites/events-event-invites.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/events/components/events-event-invites/events-event-invites.component.ts ***!
  \******************************************************************************************/
/*! exports provided: EventsEventInvitesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsEventInvitesComponent", function() { return EventsEventInvitesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _events_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @events/events.service */ "./src/app/events/events.service.ts");
/* harmony import */ var _events_events_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @events/events.models */ "./src/app/events/events.models.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");







var UserAccount = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["Users"].UserAccount;
var Event = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["Events"].Event;
var GetEventInvites = _events_events_models__WEBPACK_IMPORTED_MODULE_5__["EventRequests"].GetEventInvites;
let EventsEventInvitesComponent = class EventsEventInvitesComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(eventsService, injector) {
        super(injector);
        this.eventsService = eventsService;
        this.eventInvitesRecieved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
        this.getEventInvites(this.createRequestData());
    }
    createRequestData(invitee, event) {
        const request = new GetEventInvites.Request();
        request.invitee = (invitee || this.invitee || new UserAccount())._id;
        request.event = (event || this.event || new Event())._id;
        return request;
    }
    getEventInvites(request) {
        this.eventsService.getEventInvites(request).pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_6__["CommonsService"].deserializeMap(GetEventInvites.Response))
            .subscribe(value => {
            this.event_invites = value;
            this.eventInvitesRecieved.emit(value);
        });
    }
};
EventsEventInvitesComponent.ctorParameters = () => [
    { type: _events_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", UserAccount)
], EventsEventInvitesComponent.prototype, "invitee", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Event)
], EventsEventInvitesComponent.prototype, "event", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EventsEventInvitesComponent.prototype, "eventInvitesRecieved", void 0);
EventsEventInvitesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'events-event-invites',
        template: __webpack_require__(/*! raw-loader!./events-event-invites.component.html */ "./node_modules/raw-loader/index.js!./src/app/events/components/events-event-invites/events-event-invites.component.html"),
        styles: [__webpack_require__(/*! ./events-event-invites.component.scss */ "./src/app/events/components/events-event-invites/events-event-invites.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_events_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], EventsEventInvitesComponent);



/***/ }),

/***/ "./src/app/events/components/events-get-events/events-get-events.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/events/components/events-get-events/events-get-events.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9jb21wb25lbnRzL2V2ZW50cy1nZXQtZXZlbnRzL2V2ZW50cy1nZXQtZXZlbnRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/events/components/events-get-events/events-get-events.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/events/components/events-get-events/events-get-events.component.ts ***!
  \************************************************************************************/
/*! exports provided: EventsGetEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsGetEventsComponent", function() { return EventsGetEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _events_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @events/events.service */ "./src/app/events/events.service.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");
/* harmony import */ var _events_events_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @events/events.models */ "./src/app/events/events.models.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");






var GetEvents = _events_events_models__WEBPACK_IMPORTED_MODULE_5__["EventRequests"].GetEvents;

var Event = _core_core_models__WEBPACK_IMPORTED_MODULE_6__["Events"].Event;
let EventsGetEventsComponent = class EventsGetEventsComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(eventService, injector) {
        super(injector);
        this.eventService = eventService;
        this.eventsReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
        this.getEvents(this.createRequestData());
    }
    createRequestData() {
        const request = new GetEvents.Request();
        return request;
    }
    getEvents(request) {
        this.eventService.getEvents(request).pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].deserializeMap(Event))
            .subscribe(value => {
            this.events_list = value;
            this.eventsReceived.emit(value);
        });
    }
};
EventsGetEventsComponent.ctorParameters = () => [
    { type: _events_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EventsGetEventsComponent.prototype, "eventsReceived", void 0);
EventsGetEventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'events-get-events',
        template: __webpack_require__(/*! raw-loader!./events-get-events.component.html */ "./node_modules/raw-loader/index.js!./src/app/events/components/events-get-events/events-get-events.component.html"),
        styles: [__webpack_require__(/*! ./events-get-events.component.scss */ "./src/app/events/components/events-get-events/events-get-events.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_events_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], EventsGetEventsComponent);



/***/ }),

/***/ "./src/app/events/events.constants.ts":
/*!********************************************!*\
  !*** ./src/app/events/events.constants.ts ***!
  \********************************************/
/*! exports provided: EventsConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsConstants", function() { return EventsConstants; });
class EventsConstants {
}
EventsConstants.EVENTS_ENDPOINT = 'events';


/***/ }),

/***/ "./src/app/events/events.form.models.ts":
/*!**********************************************!*\
  !*** ./src/app/events/events.form.models.ts ***!
  \**********************************************/
/*! exports provided: EVENTS_CREATE_EVENT_FORM_MODEL, EVENTS_CREATE_EVENT_FORM_LAYOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENTS_CREATE_EVENT_FORM_MODEL", function() { return EVENTS_CREATE_EVENT_FORM_MODEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENTS_CREATE_EVENT_FORM_LAYOUT", function() { return EVENTS_CREATE_EVENT_FORM_LAYOUT; });
/* harmony import */ var _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/dynamic-input-model-builder */ "./src/app/core/dynamic-input-model-builder.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");


const EVENTS_CREATE_EVENT_FORM_MODEL = [
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
        .getTextInputModel('event_name', '', undefined, 'What do you want to do or Activty Name')
        .addValidatorAndErrorMessage('REQUIRED', 'id')
        .build(),
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]()
        .getTextInputModel('event_description', '', undefined, 'Describe what you want to do')
        .addValidatorAndErrorMessage('REQUIRED', 'id')
        .build(),
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]().getRadioGroupInputModel('event_type', '', [
        { label: 'Event Brite', value: 'EVENT_BRITE' },
        { label: 'ACTIVITY', value: 'ACTIVITY' }
    ]).build(),
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]().getDateInputModel('event_start_time', '', _core_commons_service__WEBPACK_IMPORTED_MODULE_1__["CommonsService"].getDateStringFromMoment(_core_commons_service__WEBPACK_IMPORTED_MODULE_1__["CommonsService"].getCurrentTimeAsMoment()), _core_commons_service__WEBPACK_IMPORTED_MODULE_1__["CommonsService"].getDateStringFromMoment(_core_commons_service__WEBPACK_IMPORTED_MODULE_1__["CommonsService"].getCurrentTimeAsMoment()))
        .addValidatorAndErrorMessage('REQUIRED', 'id')
        .build(),
    new _core_dynamic_input_model_builder__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModelBuilder"]().getDateInputModel('event_end_time', '', _core_commons_service__WEBPACK_IMPORTED_MODULE_1__["CommonsService"].getDateStringFromMoment(_core_commons_service__WEBPACK_IMPORTED_MODULE_1__["CommonsService"].getCurrentTimeAsMoment()), _core_commons_service__WEBPACK_IMPORTED_MODULE_1__["CommonsService"].getDateStringFromMoment(_core_commons_service__WEBPACK_IMPORTED_MODULE_1__["CommonsService"].getCurrentTimeAsMoment()))
        .addValidatorAndErrorMessage('REQUIRED', 'id')
        .build(),
];
const EVENTS_CREATE_EVENT_FORM_LAYOUT = {
    'event_name': {
        element: {
            control: 'w-100 pr-3 pl-3 br-2 mt-2 mb-2 h-3 font-primary-dark placeholder-dark',
        }
    },
    'event_description': {
        element: {
            control: 'bg-primary-white w-100 pr-3 pl-3 br-2 mt-2 mb-2 h-3 font-primary-dark placeholder-dark',
        }
    },
    'location': {
        element: {
            control: 'bg-primary-white w-100 pr-3 pl-3 br-2 mt-2 mb-2 h-3 font-primary-dark placeholder-dark',
        }
    },
    'event_start_time': {
        element: {
            control: 'bg-primary-white w-100 pr-3 pl-3 br-2 mt-2 mb-2 h-3',
        }
    },
    'event_end_time': {
        element: {
            control: 'bg-primary-white w-100 pr-3 pl-3 br-2 mt-2 mb-2 h-3',
        }
    },
};


/***/ }),

/***/ "./src/app/events/events.models.ts":
/*!*****************************************!*\
  !*** ./src/app/events/events.models.ts ***!
  \*****************************************/
/*! exports provided: EventRequests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRequests", function() { return EventRequests; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_models_converters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/models.converters */ "./src/app/core/models.converters.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");




var EventRequests;
(function (EventRequests) {
    let CreateEvent;
    (function (CreateEvent) {
        var DateTimeConverter = _core_models_converters__WEBPACK_IMPORTED_MODULE_2__["ModelsConverters"].DateTimeConverter;
        var LocationValue = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["Users"].LocationValue;
        var Event = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["Events"].Event;
        let Request = class Request {
            constructor() {
                this.eventDescription = undefined;
                this.eventEndTime = undefined;
                this.eventName = undefined;
                this.eventStartTime = undefined;
                this.location = undefined;
                this.eventType = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('eventDescription', String, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "eventDescription", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('eventEndTime', DateTimeConverter),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
        ], Request.prototype, "eventEndTime", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('eventName', String, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "eventName", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('eventStartTime', DateTimeConverter),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
        ], Request.prototype, "eventStartTime", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('location', LocationValue, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", LocationValue)
        ], Request.prototype, "location", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('eventType', String, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "eventType", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        CreateEvent.Request = Request;
        class Response extends Event {
        }
        CreateEvent.Response = Response;
    })(CreateEvent = EventRequests.CreateEvent || (EventRequests.CreateEvent = {}));
    let GetEvent;
    (function (GetEvent) {
        var Event = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["Events"].Event;
        let Request = class Request {
        };
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        GetEvent.Request = Request;
        let Response = class Response extends Event {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        GetEvent.Response = Response;
    })(GetEvent = EventRequests.GetEvent || (EventRequests.GetEvent = {}));
    let GetEvents;
    (function (GetEvents) {
        var Event = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["Events"].Event;
        let Request = class Request {
        };
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        GetEvents.Request = Request;
        let Response = class Response extends Event {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        GetEvents.Response = Response;
    })(GetEvents = EventRequests.GetEvents || (EventRequests.GetEvents = {}));
    let CreateEventInvite;
    (function (CreateEventInvite) {
        var EventInvite = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["Events"].EventInvite;
        let Request = class Request {
            constructor() {
                this.event = undefined;
                this.message = undefined;
                this.invitee = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('event', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "event", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('message', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "message", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('invitee', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "invitee", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        CreateEventInvite.Request = Request;
        let Response = class Response extends EventInvite {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        CreateEventInvite.Response = Response;
    })(CreateEventInvite = EventRequests.CreateEventInvite || (EventRequests.CreateEventInvite = {}));
    let GetEventInvite;
    (function (GetEventInvite) {
        var EventInvite = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["Events"].EventInvite;
        let Request = class Request {
        };
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        GetEventInvite.Request = Request;
        let Response = class Response extends EventInvite {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        GetEventInvite.Response = Response;
    })(GetEventInvite = EventRequests.GetEventInvite || (EventRequests.GetEventInvite = {}));
    let GetEventInvites;
    (function (GetEventInvites) {
        var EventInvite = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["Events"].EventInvite;
        let Request = class Request {
            constructor() {
                this.event = undefined;
                this.invitee = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('event', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "event", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('invitee', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "invitee", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        GetEventInvites.Request = Request;
        let Response = class Response extends EventInvite {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        GetEventInvites.Response = Response;
    })(GetEventInvites = EventRequests.GetEventInvites || (EventRequests.GetEventInvites = {}));
})(EventRequests || (EventRequests = {}));


/***/ }),

/***/ "./src/app/events/events.module.ts":
/*!*****************************************!*\
  !*** ./src/app/events/events.module.ts ***!
  \*****************************************/
/*! exports provided: EventsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsModule", function() { return EventsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _events_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.pipe */ "./src/app/events/events.pipe.ts");
/* harmony import */ var _events_components_events_create_event_events_create_event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @events/components/events-create-event/events-create-event.component */ "./src/app/events/components/events-create-event/events-create-event.component.ts");
/* harmony import */ var _events_components_events_event_details_events_event_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @events/components/events-event-details/events-event-details.component */ "./src/app/events/components/events-event-details/events-event-details.component.ts");
/* harmony import */ var _events_components_events_get_events_events_get_events_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @events/components/events-get-events/events-get-events.component */ "./src/app/events/components/events-get-events/events-get-events.component.ts");
/* harmony import */ var _events_components_events_event_invites_events_event_invites_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @events/components/events-event-invites/events-event-invites.component */ "./src/app/events/components/events-event-invites/events-event-invites.component.ts");
/* harmony import */ var _events_components_events_event_invite_details_events_event_invite_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @events/components/events-event-invite-details/events-event-invite-details.component */ "./src/app/events/components/events-event-invite-details/events-event-invite-details.component.ts");
/* harmony import */ var _events_components_events_create_event_invite_events_create_event_invite_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @events/components/events-create-event-invite/events-create-event-invite.component */ "./src/app/events/components/events-create-event-invite/events-create-event-invite.component.ts");
/* harmony import */ var _images_images_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @images/images.module */ "./src/app/images/images.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _events_events_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @events/events.routes */ "./src/app/events/events.routes.ts");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @users/users.module */ "./src/app/users/users.module.ts");
/* harmony import */ var _events_pages_events_event_page_events_event_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @events/pages/events-event-page/events-event-page.component */ "./src/app/events/pages/events-event-page/events-event-page.component.ts");
/* harmony import */ var _events_events_resolver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @events/events.resolver */ "./src/app/events/events.resolver.ts");
/* harmony import */ var _user_interests_user_interests_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @user-interests/user-interests.module */ "./src/app/user-interests/user-interests.module.ts");
/* harmony import */ var _events_components_events_create_event_modal_events_create_event_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @events/components/events-create-event-modal/events-create-event-modal.component */ "./src/app/events/components/events-create-event-modal/events-create-event-modal.component.ts");
/* harmony import */ var _events_components_events_create_event_modal_events_create_event_modal_content_events_create_event_modal_content_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @events/components/events-create-event-modal/events-create-event-modal-content/events-create-event-modal-content.component */ "./src/app/events/components/events-create-event-modal/events-create-event-modal-content/events-create-event-modal-content.component.ts");
/* harmony import */ var _events_components_events_create_event_invite_modal_events_create_event_invite_modal_content_events_create_event_invite_modal_content_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @events/components/events-create-event-invite-modal/events-create-event-invite-modal-content/events-create-event-invite-modal-content.component */ "./src/app/events/components/events-create-event-invite-modal/events-create-event-invite-modal-content/events-create-event-invite-modal-content.component.ts");
/* harmony import */ var _events_components_events_create_event_invite_modal_events_create_event_invite_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @events/components/events-create-event-invite-modal/events-create-event-invite-modal.component */ "./src/app/events/components/events-create-event-invite-modal/events-create-event-invite-modal.component.ts");
/* harmony import */ var _chat_chat_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @chat/chat.module */ "./src/app/chat/chat.module.ts");
/* harmony import */ var _user_interests_components_user_interests_get_or_create_user_interests_get_or_create_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @user-interests/components/user-interests-get-or-create/user-interests-get-or-create.component */ "./src/app/user-interests/components/user-interests-get-or-create/user-interests-get-or-create.component.ts");
/* harmony import */ var _categories_categories_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @categories/categories.module */ "./src/app/categories/categories.module.ts");


















// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length




let EventsModule = class EventsModule {
};
EventsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_events_pipe__WEBPACK_IMPORTED_MODULE_3__["EventsPipe"],
            _events_components_events_create_event_events_create_event_component__WEBPACK_IMPORTED_MODULE_4__["EventsCreateEventComponent"],
            _events_components_events_event_details_events_event_details_component__WEBPACK_IMPORTED_MODULE_5__["EventsEventDetailsComponent"],
            _events_components_events_get_events_events_get_events_component__WEBPACK_IMPORTED_MODULE_6__["EventsGetEventsComponent"],
            _events_components_events_event_invites_events_event_invites_component__WEBPACK_IMPORTED_MODULE_7__["EventsEventInvitesComponent"],
            _events_components_events_event_invite_details_events_event_invite_details_component__WEBPACK_IMPORTED_MODULE_8__["EventsEventInviteDetailsComponent"],
            _events_components_events_create_event_invite_events_create_event_invite_component__WEBPACK_IMPORTED_MODULE_9__["EventsCreateEventInviteComponent"],
            _events_pages_events_event_page_events_event_page_component__WEBPACK_IMPORTED_MODULE_14__["EventsEventPageComponent"],
            _events_components_events_create_event_modal_events_create_event_modal_component__WEBPACK_IMPORTED_MODULE_17__["EventsCreateEventModalComponent"],
            _events_components_events_create_event_modal_events_create_event_modal_content_events_create_event_modal_content_component__WEBPACK_IMPORTED_MODULE_18__["EventsCreateEventModalContentComponent"],
            _events_components_events_create_event_invite_modal_events_create_event_invite_modal_content_events_create_event_invite_modal_content_component__WEBPACK_IMPORTED_MODULE_19__["EventsCreateEventInviteModalContentComponent"],
            _events_components_events_create_event_invite_modal_events_create_event_invite_modal_component__WEBPACK_IMPORTED_MODULE_20__["EventsCreateEventInviteModalComponent"],
            _events_components_events_create_event_invite_events_create_event_invite_component__WEBPACK_IMPORTED_MODULE_9__["EventsCreateEventInviteNoTemplateComponent"],
            _user_interests_components_user_interests_get_or_create_user_interests_get_or_create_component__WEBPACK_IMPORTED_MODULE_22__["UserInterestsGetOrCreateWithDeleteComponent"]
        ],
        imports: [
            _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
            _images_images_module__WEBPACK_IMPORTED_MODULE_10__["ImagesModule"],
            _users_users_module__WEBPACK_IMPORTED_MODULE_13__["UsersModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forChild(_events_events_routes__WEBPACK_IMPORTED_MODULE_12__["EVENTS_ROUTES"]),
            _user_interests_user_interests_module__WEBPACK_IMPORTED_MODULE_16__["UserInterestsModule"],
            _chat_chat_module__WEBPACK_IMPORTED_MODULE_21__["ChatModule"],
            _categories_categories_module__WEBPACK_IMPORTED_MODULE_23__["CategoriesModule"]
        ],
        exports: [_events_pipe__WEBPACK_IMPORTED_MODULE_3__["EventsPipe"],
            _events_components_events_create_event_events_create_event_component__WEBPACK_IMPORTED_MODULE_4__["EventsCreateEventComponent"],
            _events_components_events_event_details_events_event_details_component__WEBPACK_IMPORTED_MODULE_5__["EventsEventDetailsComponent"],
            _events_components_events_get_events_events_get_events_component__WEBPACK_IMPORTED_MODULE_6__["EventsGetEventsComponent"],
            _events_components_events_event_invites_events_event_invites_component__WEBPACK_IMPORTED_MODULE_7__["EventsEventInvitesComponent"],
            _events_components_events_event_invite_details_events_event_invite_details_component__WEBPACK_IMPORTED_MODULE_8__["EventsEventInviteDetailsComponent"],
            _events_components_events_create_event_invite_events_create_event_invite_component__WEBPACK_IMPORTED_MODULE_9__["EventsCreateEventInviteComponent"],
            _events_pages_events_event_page_events_event_page_component__WEBPACK_IMPORTED_MODULE_14__["EventsEventPageComponent"],
            _events_components_events_create_event_modal_events_create_event_modal_component__WEBPACK_IMPORTED_MODULE_17__["EventsCreateEventModalComponent"],
            _events_components_events_create_event_modal_events_create_event_modal_content_events_create_event_modal_content_component__WEBPACK_IMPORTED_MODULE_18__["EventsCreateEventModalContentComponent"],
            _events_components_events_create_event_invite_modal_events_create_event_invite_modal_content_events_create_event_invite_modal_content_component__WEBPACK_IMPORTED_MODULE_19__["EventsCreateEventInviteModalContentComponent"],
            _events_components_events_create_event_invite_modal_events_create_event_invite_modal_component__WEBPACK_IMPORTED_MODULE_20__["EventsCreateEventInviteModalComponent"],
            _events_components_events_create_event_invite_events_create_event_invite_component__WEBPACK_IMPORTED_MODULE_9__["EventsCreateEventInviteNoTemplateComponent"],
            _user_interests_components_user_interests_get_or_create_user_interests_get_or_create_component__WEBPACK_IMPORTED_MODULE_22__["UserInterestsGetOrCreateWithDeleteComponent"]
        ],
        providers: [_events_events_resolver__WEBPACK_IMPORTED_MODULE_15__["EventResolver"]],
        entryComponents: [
            _events_components_events_create_event_modal_events_create_event_modal_content_events_create_event_modal_content_component__WEBPACK_IMPORTED_MODULE_18__["EventsCreateEventModalContentComponent"],
            _events_components_events_create_event_invite_modal_events_create_event_invite_modal_content_events_create_event_invite_modal_content_component__WEBPACK_IMPORTED_MODULE_19__["EventsCreateEventInviteModalContentComponent"]
        ]
    })
], EventsModule);



/***/ }),

/***/ "./src/app/events/events.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/events/events.pipe.ts ***!
  \***************************************/
/*! exports provided: EventsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPipe", function() { return EventsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EventsPipe = class EventsPipe {
    transform(value, ...args) {
        return null;
    }
};
EventsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'events'
    })
], EventsPipe);



/***/ }),

/***/ "./src/app/events/events.resolver.ts":
/*!*******************************************!*\
  !*** ./src/app/events/events.resolver.ts ***!
  \*******************************************/
/*! exports provided: EventResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventResolver", function() { return EventResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _events_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @events/events.service */ "./src/app/events/events.service.ts");
/* harmony import */ var _events_events_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @events/events.models */ "./src/app/events/events.models.ts");




var Event = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["Events"].Event;


var GetEvent = _events_events_models__WEBPACK_IMPORTED_MODULE_5__["EventRequests"].GetEvent;
let EventResolver = class EventResolver {
    constructor(eventService) {
        this.eventService = eventService;
    }
    resolve(route) {
        const request = new GetEvent.Request();
        request.eventId = route.paramMap.get('eventId');
        return this.eventService.getEvent(request)
            .pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].deserializeMap(Event));
    }
};
EventResolver.ctorParameters = () => [
    { type: _events_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"] }
];
EventResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_events_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"]])
], EventResolver);



/***/ }),

/***/ "./src/app/events/events.routes.ts":
/*!*****************************************!*\
  !*** ./src/app/events/events.routes.ts ***!
  \*****************************************/
/*! exports provided: EVENTS_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENTS_ROUTES", function() { return EVENTS_ROUTES; });
/* harmony import */ var _events_pages_events_event_page_events_event_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @events/pages/events-event-page/events-event-page.component */ "./src/app/events/pages/events-event-page/events-event-page.component.ts");
/* harmony import */ var _events_events_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @events/events.resolver */ "./src/app/events/events.resolver.ts");


const EVENTS_ROUTES = [
    {
        path: 'event', children: [
            {
                path: ':eventId', component: _events_pages_events_event_page_events_event_page_component__WEBPACK_IMPORTED_MODULE_0__["EventsEventPageComponent"], resolve: { event: _events_events_resolver__WEBPACK_IMPORTED_MODULE_1__["EventResolver"] }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/events/events.service.ts":
/*!******************************************!*\
  !*** ./src/app/events/events.service.ts ***!
  \******************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_http_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/http/rest.service */ "./src/app/core/http/rest.service.ts");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm2015/ngx-restangular.js");
/* harmony import */ var _events_events_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @events/events.constants */ "./src/app/events/events.constants.ts");





let EventsService = class EventsService extends _core_http_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] {
    constructor(restangular) {
        super(restangular);
        this.eventsService = this.getService(_events_events_constants__WEBPACK_IMPORTED_MODULE_4__["EventsConstants"].EVENTS_ENDPOINT);
    }
    createEvent(request) {
        return this.eventsService.one('').customPOST(this.serialize(request));
    }
    getEvent(request) {
        return this.eventsService.one(request.eventId).get();
    }
    getEvents(request) {
        return this.eventsService.one('').get();
    }
    createEventInvite(request) {
        return this.eventsService.one('invite').customPOST(this.serialize(request));
    }
    getEventInvites(request) {
        return this.eventsService.one('invites').customGET('', this.serialize(request));
    }
    getEventInvite(request) {
        return this.eventsService.one('invites').one(request.eventInviteId).get();
    }
};
EventsService.ctorParameters = () => [
    { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_3__["Restangular"] }
];
EventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_3__["Restangular"]])
], EventsService);



/***/ }),

/***/ "./src/app/events/pages/events-event-page/events-event-page.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/events/pages/events-event-page/events-event-page.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9wYWdlcy9ldmVudHMtZXZlbnQtcGFnZS9ldmVudHMtZXZlbnQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/events/pages/events-event-page/events-event-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/events/pages/events-event-page/events-event-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EventsEventPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsEventPageComponent", function() { return EventsEventPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/page.component */ "./src/app/core/components/page.component.ts");



let EventsEventPageComponent = class EventsEventPageComponent extends _core_components_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"] {
    constructor(injector) {
        super(injector);
    }
    initializeComponent() {
        this.event$ = this.getRouterParameterObservable('event');
    }
};
EventsEventPageComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
EventsEventPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'events-event-page',
        template: __webpack_require__(/*! raw-loader!./events-event-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/events/pages/events-event-page/events-event-page.component.html"),
        styles: [__webpack_require__(/*! ./events-event-page.component.scss */ "./src/app/events/pages/events-event-page/events-event-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], EventsEventPageComponent);



/***/ }),

/***/ "./src/app/user-interests/components/user-interests-by-entity-count/user-interests-by-entity-count.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/user-interests/components/user-interests-by-entity-count/user-interests-by-entity-count.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW50ZXJlc3RzL2NvbXBvbmVudHMvdXNlci1pbnRlcmVzdHMtYnktZW50aXR5LWNvdW50L3VzZXItaW50ZXJlc3RzLWJ5LWVudGl0eS1jb3VudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user-interests/components/user-interests-by-entity-count/user-interests-by-entity-count.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/user-interests/components/user-interests-by-entity-count/user-interests-by-entity-count.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: UserInterestsByEntityCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestsByEntityCountComponent", function() { return UserInterestsByEntityCountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _user_interests_user_interests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interests/user-interests.service */ "./src/app/user-interests/user-interests.service.ts");
/* harmony import */ var _user_interests_user_interests_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interests/user-interests.models */ "./src/app/user-interests/user-interests.models.ts");





var GetUserInterestsByEntityCount = _user_interests_user_interests_models__WEBPACK_IMPORTED_MODULE_4__["UserInterestsRequests"].GetUserInterestsByEntityCount;
let UserInterestsByEntityCountComponent = class UserInterestsByEntityCountComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(userInterestsService, injector) {
        super(injector);
        this.userInterestsService = userInterestsService;
        this.userInterestsCountReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
        this.getUserInterestsByEntityCount(this.createRequestData());
    }
    createRequestData(entity, type) {
        const request = new GetUserInterestsByEntityCount.Request();
        request.entity = entity || this.entity;
        request.type = type || this.type;
        return request;
    }
    getUserInterestsByEntityCount(request) {
        this.userInterestsService.getUserInterestsByEntityCount(request)
            .subscribe(value => {
            this.user_interests_count = isNaN(value) ? 0 : value;
            this.userInterestsCountReceived.emit(this.user_interests_count);
        });
    }
};
UserInterestsByEntityCountComponent.ctorParameters = () => [
    { type: _user_interests_user_interests_service__WEBPACK_IMPORTED_MODULE_3__["UserInterestsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UserInterestsByEntityCountComponent.prototype, "entity", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UserInterestsByEntityCountComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserInterestsByEntityCountComponent.prototype, "userInterestsCountReceived", void 0);
UserInterestsByEntityCountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-interests-by-entity-count',
        template: __webpack_require__(/*! raw-loader!./user-interests-by-entity-count.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-by-entity-count/user-interests-by-entity-count.component.html"),
        styles: [__webpack_require__(/*! ./user-interests-by-entity-count.component.scss */ "./src/app/user-interests/components/user-interests-by-entity-count/user-interests-by-entity-count.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_interests_user_interests_service__WEBPACK_IMPORTED_MODULE_3__["UserInterestsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UserInterestsByEntityCountComponent);



/***/ }),

/***/ "./src/app/user-interests/components/user-interests-by-entity-multiple/user-interests-by-entity-multiple.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/user-interests/components/user-interests-by-entity-multiple/user-interests-by-entity-multiple.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW50ZXJlc3RzL2NvbXBvbmVudHMvdXNlci1pbnRlcmVzdHMtYnktZW50aXR5LW11bHRpcGxlL3VzZXItaW50ZXJlc3RzLWJ5LWVudGl0eS1tdWx0aXBsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user-interests/components/user-interests-by-entity-multiple/user-interests-by-entity-multiple.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/user-interests/components/user-interests-by-entity-multiple/user-interests-by-entity-multiple.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: UserInterestsByEntityMultipleComponent, UserInterestsByEntityMultipleNoTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestsByEntityMultipleComponent", function() { return UserInterestsByEntityMultipleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestsByEntityMultipleNoTemplateComponent", function() { return UserInterestsByEntityMultipleNoTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _user_interests_user_interests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interests/user-interests.service */ "./src/app/user-interests/user-interests.service.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _user_interests_user_interests_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @user-interests/user-interests.models */ "./src/app/user-interests/user-interests.models.ts");







var UserInterest = _core_core_models__WEBPACK_IMPORTED_MODULE_5__["UserInterests"].UserInterest;
var GetUserInterestsByEntityMultiple = _user_interests_user_interests_models__WEBPACK_IMPORTED_MODULE_6__["UserInterestsRequests"].GetUserInterestsByEntityMultiple;
let UserInterestsByEntityMultipleComponent = class UserInterestsByEntityMultipleComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(userInterestsService, injector) {
        super(injector);
        this.userInterestsService = userInterestsService;
        this.userInterestsReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
        this.getUserInterestsByEntityMultiple(this.createRequestData());
    }
    createRequestData(entity, type, user_ids, interaction) {
        const request = new GetUserInterestsByEntityMultiple.Request();
        request.entity = entity || this.entity;
        request.type = type || this.type;
        request.userIds = _core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].convertToArray(user_ids || this.userId);
        request.interaction = interaction || this.interaction;
        return request;
    }
    getUserInterestsByEntityMultiple(request) {
        this.userInterestsService.getUserInterestsByEntityMultiple(request)
            .pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].deserializeMap(UserInterest))
            .subscribe(value => {
            this.user_interests = value;
            this.userInterestsReceived.emit(value);
        });
    }
};
UserInterestsByEntityMultipleComponent.ctorParameters = () => [
    { type: _user_interests_user_interests_service__WEBPACK_IMPORTED_MODULE_3__["UserInterestsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UserInterestsByEntityMultipleComponent.prototype, "entity", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UserInterestsByEntityMultipleComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserInterestsByEntityMultipleComponent.prototype, "userId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UserInterestsByEntityMultipleComponent.prototype, "interaction", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserInterestsByEntityMultipleComponent.prototype, "userInterestsReceived", void 0);
UserInterestsByEntityMultipleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-interests-by-entity-multiple',
        template: __webpack_require__(/*! raw-loader!./user-interests-by-entity-multiple.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-by-entity-multiple/user-interests-by-entity-multiple.component.html"),
        styles: [__webpack_require__(/*! ./user-interests-by-entity-multiple.component.scss */ "./src/app/user-interests/components/user-interests-by-entity-multiple/user-interests-by-entity-multiple.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_interests_user_interests_service__WEBPACK_IMPORTED_MODULE_3__["UserInterestsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UserInterestsByEntityMultipleComponent);

let UserInterestsByEntityMultipleNoTemplateComponent = class UserInterestsByEntityMultipleNoTemplateComponent extends UserInterestsByEntityMultipleComponent {
};
UserInterestsByEntityMultipleNoTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-interests-by-entity-multiple-no-template',
        template: __webpack_require__(/*! raw-loader!./user-interests-by-entity-multiple-no-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-by-entity-multiple/user-interests-by-entity-multiple-no-template.component.html"),
        styles: [__webpack_require__(/*! ./user-interests-by-entity-multiple.component.scss */ "./src/app/user-interests/components/user-interests-by-entity-multiple/user-interests-by-entity-multiple.component.scss")]
    })
], UserInterestsByEntityMultipleNoTemplateComponent);



/***/ }),

/***/ "./src/app/user-interests/components/user-interests-by-entity/user-interests-by-entity.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/user-interests/components/user-interests-by-entity/user-interests-by-entity.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW50ZXJlc3RzL2NvbXBvbmVudHMvdXNlci1pbnRlcmVzdHMtYnktZW50aXR5L3VzZXItaW50ZXJlc3RzLWJ5LWVudGl0eS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user-interests/components/user-interests-by-entity/user-interests-by-entity.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/user-interests/components/user-interests-by-entity/user-interests-by-entity.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: UserInterestsByEntityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestsByEntityComponent", function() { return UserInterestsByEntityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _user_interests_user_interests_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interests/user-interests.models */ "./src/app/user-interests/user-interests.models.ts");
/* harmony import */ var _user_interests_user_interests_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interests/user-interests.service */ "./src/app/user-interests/user-interests.service.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");







var UserInterest = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["UserInterests"].UserInterest;
var GetUserInterestsByEntity = _user_interests_user_interests_models__WEBPACK_IMPORTED_MODULE_4__["UserInterestsRequests"].GetUserInterestsByEntity;
let UserInterestsByEntityComponent = class UserInterestsByEntityComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(userInterestsService, injector) {
        super(injector);
        this.userInterestsService = userInterestsService;
        this.userInterestsReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
        this.getUserInterestsByEntity(this.createRequestData());
    }
    createRequestData(entity, type) {
        const request = new GetUserInterestsByEntity.Request();
        request.entity = entity || this.entity;
        request.type = type || this.type;
        return request;
    }
    getUserInterestsByEntity(request) {
        this.userInterestsService.getUserInterestsByEntity(request).pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_6__["CommonsService"].deserializeMap(UserInterest))
            .subscribe(value => {
            this.user_interests = value;
            this.userInterestsReceived.emit(value);
        });
    }
};
UserInterestsByEntityComponent.ctorParameters = () => [
    { type: _user_interests_user_interests_service__WEBPACK_IMPORTED_MODULE_5__["UserInterestsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UserInterestsByEntityComponent.prototype, "entity", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UserInterestsByEntityComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserInterestsByEntityComponent.prototype, "userInterestsReceived", void 0);
UserInterestsByEntityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-interests-by-entity',
        template: __webpack_require__(/*! raw-loader!./user-interests-by-entity.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-by-entity/user-interests-by-entity.component.html"),
        styles: [__webpack_require__(/*! ./user-interests-by-entity.component.scss */ "./src/app/user-interests/components/user-interests-by-entity/user-interests-by-entity.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_interests_user_interests_service__WEBPACK_IMPORTED_MODULE_5__["UserInterestsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UserInterestsByEntityComponent);



/***/ }),

/***/ "./src/app/user-interests/components/user-interests-create-user-interest/user-interests-create-user-interest.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/user-interests/components/user-interests-create-user-interest/user-interests-create-user-interest.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW50ZXJlc3RzL2NvbXBvbmVudHMvdXNlci1pbnRlcmVzdHMtY3JlYXRlLXVzZXItaW50ZXJlc3QvdXNlci1pbnRlcmVzdHMtY3JlYXRlLXVzZXItaW50ZXJlc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user-interests/components/user-interests-create-user-interest/user-interests-create-user-interest.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/user-interests/components/user-interests-create-user-interest/user-interests-create-user-interest.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: UserInterestsCreateUserInterestComponent, UserInterestsCreateUserInterestNoTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestsCreateUserInterestComponent", function() { return UserInterestsCreateUserInterestComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestsCreateUserInterestNoTemplateComponent", function() { return UserInterestsCreateUserInterestNoTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _user_interests_user_interests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interests/user-interests.service */ "./src/app/user-interests/user-interests.service.ts");
/* harmony import */ var _user_interests_user_interests_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interests/user-interests.models */ "./src/app/user-interests/user-interests.models.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");







var CreateUserInterest = _user_interests_user_interests_models__WEBPACK_IMPORTED_MODULE_4__["UserInterestsRequests"].CreateUserInterest;
var UserInterest = _core_core_models__WEBPACK_IMPORTED_MODULE_5__["UserInterests"].UserInterest;
let UserInterestsCreateUserInterestComponent = class UserInterestsCreateUserInterestComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(userInterestsService, injector) {
        super(injector);
        this.userInterestsService = userInterestsService;
        this.userInteractionCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
    }
    createRequestData(interaction, entity, type) {
        const request = new CreateUserInterest.Request();
        request.interaction = interaction || this.interaction;
        request.entity = entity || this.entity;
        request.type = type || this.type;
        return request;
    }
    createUserInterest(request) {
        this.userInterestsService.createUserInterest(request).pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_6__["CommonsService"].deserializeMap(UserInterest))
            .subscribe(value => {
            this.userInteractionCreated.emit(value);
        });
    }
};
UserInterestsCreateUserInterestComponent.ctorParameters = () => [
    { type: _user_interests_user_interests_service__WEBPACK_IMPORTED_MODULE_3__["UserInterestsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UserInterestsCreateUserInterestComponent.prototype, "entity", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UserInterestsCreateUserInterestComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UserInterestsCreateUserInterestComponent.prototype, "interaction", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserInterestsCreateUserInterestComponent.prototype, "userInteractionCreated", void 0);
UserInterestsCreateUserInterestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-interests-create-user-interest',
        template: __webpack_require__(/*! raw-loader!./user-interests-create-user-interest.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-create-user-interest/user-interests-create-user-interest.component.html"),
        styles: [__webpack_require__(/*! ./user-interests-create-user-interest.component.scss */ "./src/app/user-interests/components/user-interests-create-user-interest/user-interests-create-user-interest.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_interests_user_interests_service__WEBPACK_IMPORTED_MODULE_3__["UserInterestsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UserInterestsCreateUserInterestComponent);

let UserInterestsCreateUserInterestNoTemplateComponent = class UserInterestsCreateUserInterestNoTemplateComponent extends UserInterestsCreateUserInterestComponent {
};
UserInterestsCreateUserInterestNoTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-interests-create-user-interest-no-template',
        template: __webpack_require__(/*! raw-loader!./user-interests-create-user-interest-no-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-create-user-interest/user-interests-create-user-interest-no-template.component.html"),
        styles: [__webpack_require__(/*! ./user-interests-create-user-interest.component.scss */ "./src/app/user-interests/components/user-interests-create-user-interest/user-interests-create-user-interest.component.scss")]
    })
], UserInterestsCreateUserInterestNoTemplateComponent);



/***/ }),

/***/ "./src/app/user-interests/components/user-interests-delete-user-interest/user-interests-delete-user-interest.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/user-interests/components/user-interests-delete-user-interest/user-interests-delete-user-interest.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW50ZXJlc3RzL2NvbXBvbmVudHMvdXNlci1pbnRlcmVzdHMtZGVsZXRlLXVzZXItaW50ZXJlc3QvdXNlci1pbnRlcmVzdHMtZGVsZXRlLXVzZXItaW50ZXJlc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user-interests/components/user-interests-delete-user-interest/user-interests-delete-user-interest.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/user-interests/components/user-interests-delete-user-interest/user-interests-delete-user-interest.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: UserInterestsDeleteUserInterestComponent, UserInterestsDeleteUserInterestNoTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestsDeleteUserInterestComponent", function() { return UserInterestsDeleteUserInterestComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestsDeleteUserInterestNoTemplateComponent", function() { return UserInterestsDeleteUserInterestNoTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _user_interests_user_interests_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interests/user-interests.models */ "./src/app/user-interests/user-interests.models.ts");
/* harmony import */ var _user_interests_user_interests_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interests/user-interests.service */ "./src/app/user-interests/user-interests.service.ts");




var UserInterest = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["UserInterests"].UserInterest;

var DeleteUserInterest = _user_interests_user_interests_models__WEBPACK_IMPORTED_MODULE_4__["UserInterestsRequests"].DeleteUserInterest;

let UserInterestsDeleteUserInterestComponent = class UserInterestsDeleteUserInterestComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(userInterestsService, injector) {
        super(injector);
        this.userInterestsService = userInterestsService;
        this.userInterestDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
    }
    createRequestData(user_interest) {
        const request = new DeleteUserInterest.Request();
        request.userInterestId = (user_interest || this.userInterest)._id;
        return request;
    }
    deleteUserInterest(request) {
        this.userInterestsService.deleteUserInterest(request).subscribe(value => {
            this.userInterestDeleted.emit(true);
        });
    }
};
UserInterestsDeleteUserInterestComponent.ctorParameters = () => [
    { type: _user_interests_user_interests_service__WEBPACK_IMPORTED_MODULE_5__["UserInterestsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", UserInterest)
], UserInterestsDeleteUserInterestComponent.prototype, "userInterest", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserInterestsDeleteUserInterestComponent.prototype, "userInterestDeleted", void 0);
UserInterestsDeleteUserInterestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-interests-delete-user-interest',
        template: __webpack_require__(/*! raw-loader!./user-interests-delete-user-interest.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-delete-user-interest/user-interests-delete-user-interest.component.html"),
        styles: [__webpack_require__(/*! ./user-interests-delete-user-interest.component.scss */ "./src/app/user-interests/components/user-interests-delete-user-interest/user-interests-delete-user-interest.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_interests_user_interests_service__WEBPACK_IMPORTED_MODULE_5__["UserInterestsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UserInterestsDeleteUserInterestComponent);

let UserInterestsDeleteUserInterestNoTemplateComponent = class UserInterestsDeleteUserInterestNoTemplateComponent extends UserInterestsDeleteUserInterestComponent {
};
UserInterestsDeleteUserInterestNoTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-interests-delete-user-interest-no-template',
        template: __webpack_require__(/*! raw-loader!./user-interests-delete-user-interest-no-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-delete-user-interest/user-interests-delete-user-interest-no-template.component.html"),
        styles: [__webpack_require__(/*! ./user-interests-delete-user-interest.component.scss */ "./src/app/user-interests/components/user-interests-delete-user-interest/user-interests-delete-user-interest.component.scss")]
    })
], UserInterestsDeleteUserInterestNoTemplateComponent);



/***/ }),

/***/ "./src/app/user-interests/components/user-interests-get-or-create/user-interests-get-or-create.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/user-interests/components/user-interests-get-or-create/user-interests-get-or-create.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW50ZXJlc3RzL2NvbXBvbmVudHMvdXNlci1pbnRlcmVzdHMtZ2V0LW9yLWNyZWF0ZS91c2VyLWludGVyZXN0cy1nZXQtb3ItY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/user-interests/components/user-interests-get-or-create/user-interests-get-or-create.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/user-interests/components/user-interests-get-or-create/user-interests-get-or-create.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: UserInterestsGetOrCreateComponent, UserInterestsGetOrCreateWithDeleteComponent, UserInterestsGetOrCreateWithDeleteHeartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestsGetOrCreateComponent", function() { return UserInterestsGetOrCreateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestsGetOrCreateWithDeleteComponent", function() { return UserInterestsGetOrCreateWithDeleteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestsGetOrCreateWithDeleteHeartComponent", function() { return UserInterestsGetOrCreateWithDeleteHeartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");



let UserInterestsGetOrCreateComponent = class UserInterestsGetOrCreateComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(injector) {
        super(injector);
        this.userInteractionCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userInterestsReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
    }
};
UserInterestsGetOrCreateComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UserInterestsGetOrCreateComponent.prototype, "entity", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UserInterestsGetOrCreateComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UserInterestsGetOrCreateComponent.prototype, "interaction", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserInterestsGetOrCreateComponent.prototype, "userInteractionCreated", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserInterestsGetOrCreateComponent.prototype, "userInterestsReceived", void 0);
UserInterestsGetOrCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-interests-get-or-create',
        template: __webpack_require__(/*! raw-loader!./user-interests-get-or-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-get-or-create/user-interests-get-or-create.component.html"),
        styles: [__webpack_require__(/*! ./user-interests-get-or-create.component.scss */ "./src/app/user-interests/components/user-interests-get-or-create/user-interests-get-or-create.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UserInterestsGetOrCreateComponent);

let UserInterestsGetOrCreateWithDeleteComponent = class UserInterestsGetOrCreateWithDeleteComponent extends UserInterestsGetOrCreateComponent {
    constructor() {
        super(...arguments);
        this.userInterestDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserInterestsGetOrCreateWithDeleteComponent.prototype, "userInterestDeleted", void 0);
UserInterestsGetOrCreateWithDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-interests-get-or-create-with-delete',
        template: __webpack_require__(/*! raw-loader!./user-interests-get-or-create-with-delete.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-get-or-create/user-interests-get-or-create-with-delete.component.html"),
        styles: [__webpack_require__(/*! ./user-interests-get-or-create.component.scss */ "./src/app/user-interests/components/user-interests-get-or-create/user-interests-get-or-create.component.scss")]
    })
], UserInterestsGetOrCreateWithDeleteComponent);

let UserInterestsGetOrCreateWithDeleteHeartComponent = class UserInterestsGetOrCreateWithDeleteHeartComponent extends UserInterestsGetOrCreateComponent {
    constructor() {
        super(...arguments);
        this.userInterestDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserInterestsGetOrCreateWithDeleteHeartComponent.prototype, "userInterestDeleted", void 0);
UserInterestsGetOrCreateWithDeleteHeartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-interests-get-or-create-with-delete-heart',
        template: __webpack_require__(/*! raw-loader!./user-interests-get-or-create-with-delete-heart.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-get-or-create/user-interests-get-or-create-with-delete-heart.component.html"),
        styles: [__webpack_require__(/*! ./user-interests-get-or-create.component.scss */ "./src/app/user-interests/components/user-interests-get-or-create/user-interests-get-or-create.component.scss")]
    })
], UserInterestsGetOrCreateWithDeleteHeartComponent);



/***/ }),

/***/ "./src/app/user-interests/components/user-interests-similar-interests/user-interests-similar-interests.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/user-interests/components/user-interests-similar-interests/user-interests-similar-interests.component.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW50ZXJlc3RzL2NvbXBvbmVudHMvdXNlci1pbnRlcmVzdHMtc2ltaWxhci1pbnRlcmVzdHMvdXNlci1pbnRlcmVzdHMtc2ltaWxhci1pbnRlcmVzdHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user-interests/components/user-interests-similar-interests/user-interests-similar-interests.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/user-interests/components/user-interests-similar-interests/user-interests-similar-interests.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: UserInterestsSimilarInterestsComponent, UserInterestsSimilarInterestsNoTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestsSimilarInterestsComponent", function() { return UserInterestsSimilarInterestsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestsSimilarInterestsNoTemplateComponent", function() { return UserInterestsSimilarInterestsNoTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _user_interests_user_interests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interests/user-interests.service */ "./src/app/user-interests/user-interests.service.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _user_interests_user_interests_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @user-interests/user-interests.models */ "./src/app/user-interests/user-interests.models.ts");







var UserInterest = _core_core_models__WEBPACK_IMPORTED_MODULE_5__["UserInterests"].UserInterest;
var GetUserSimilarInterests = _user_interests_user_interests_models__WEBPACK_IMPORTED_MODULE_6__["UserInterestsRequests"].GetUserSimilarInterests;
let UserInterestsSimilarInterestsComponent = class UserInterestsSimilarInterestsComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(userInterestsService, injector) {
        super(injector);
        this.userInterestsService = userInterestsService;
        this.userInterestsReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
        this.getUserSimilarInterests(this.createRequestData());
    }
    createRequestData(entity, type, min_age, max_age, gender) {
        const request = new GetUserSimilarInterests.Request();
        request.entity = entity || this.entity;
        request.type = type || this.type;
        request.minAge = min_age || this.minAge;
        request.maxAge = max_age || this.maxAge;
        request.gender = gender || this.gender;
        return request;
    }
    getUserSimilarInterests(request) {
        this.userInterestsService.getUserSimilarInterests(request).pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"].deserializeMap(UserInterest))
            .subscribe(value => {
            this.user_interests = value;
            this.userInterestsReceived.emit(value);
        });
    }
};
UserInterestsSimilarInterestsComponent.ctorParameters = () => [
    { type: _user_interests_user_interests_service__WEBPACK_IMPORTED_MODULE_3__["UserInterestsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UserInterestsSimilarInterestsComponent.prototype, "entity", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UserInterestsSimilarInterestsComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], UserInterestsSimilarInterestsComponent.prototype, "minAge", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], UserInterestsSimilarInterestsComponent.prototype, "maxAge", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UserInterestsSimilarInterestsComponent.prototype, "gender", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserInterestsSimilarInterestsComponent.prototype, "userInterestsReceived", void 0);
UserInterestsSimilarInterestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-interests-similar-interests',
        template: __webpack_require__(/*! raw-loader!./user-interests-similar-interests.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-similar-interests/user-interests-similar-interests.component.html"),
        styles: [__webpack_require__(/*! ./user-interests-similar-interests.component.scss */ "./src/app/user-interests/components/user-interests-similar-interests/user-interests-similar-interests.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_interests_user_interests_service__WEBPACK_IMPORTED_MODULE_3__["UserInterestsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UserInterestsSimilarInterestsComponent);

let UserInterestsSimilarInterestsNoTemplateComponent = class UserInterestsSimilarInterestsNoTemplateComponent extends UserInterestsSimilarInterestsComponent {
};
UserInterestsSimilarInterestsNoTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-interests-similar-interests-no-template',
        template: __webpack_require__(/*! raw-loader!./user-interests-similar-interests-no-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-similar-interests/user-interests-similar-interests-no-template.component.html"),
        styles: [__webpack_require__(/*! ./user-interests-similar-interests.component.scss */ "./src/app/user-interests/components/user-interests-similar-interests/user-interests-similar-interests.component.scss")]
    })
], UserInterestsSimilarInterestsNoTemplateComponent);



/***/ }),

/***/ "./src/app/user-interests/components/user-interests-user-interest-details/user-interests-user-interest-details.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/user-interests/components/user-interests-user-interest-details/user-interests-user-interest-details.component.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW50ZXJlc3RzL2NvbXBvbmVudHMvdXNlci1pbnRlcmVzdHMtdXNlci1pbnRlcmVzdC1kZXRhaWxzL3VzZXItaW50ZXJlc3RzLXVzZXItaW50ZXJlc3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user-interests/components/user-interests-user-interest-details/user-interests-user-interest-details.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/user-interests/components/user-interests-user-interest-details/user-interests-user-interest-details.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: UserInterestsUserInterestDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestsUserInterestDetailsComponent", function() { return UserInterestsUserInterestDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _user_interests_user_interests_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interests/user-interests.models */ "./src/app/user-interests/user-interests.models.ts");
/* harmony import */ var _user_interests_user_interests_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interests/user-interests.service */ "./src/app/user-interests/user-interests.service.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");







var UserInterest = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["UserInterests"].UserInterest;
var GetUserInterest = _user_interests_user_interests_models__WEBPACK_IMPORTED_MODULE_4__["UserInterestsRequests"].GetUserInterest;
let UserInterestsUserInterestDetailsComponent = class UserInterestsUserInterestDetailsComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(userInterestsService, injector) {
        super(injector);
        this.userInterestsService = userInterestsService;
        this.userInterestReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getUserInterest = (request) => {
            this.userInterestsService.getUserInterest(request).pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_6__["CommonsService"].deserializeMap(UserInterest))
                .subscribe(value => {
                this.userInterest = value;
                this.userInterestReceived.emit(value);
            });
        };
    }
    initializeComponent() {
        this.makeServiceCallWithIdIfObjectNull(this.userInterest, this.createRequestData(), this.getUserInterest);
    }
    createRequestData(user_interest_id) {
        const request = new GetUserInterest.Request();
        request.userInterestId = user_interest_id || this.userInterestId;
        return request;
    }
};
UserInterestsUserInterestDetailsComponent.ctorParameters = () => [
    { type: _user_interests_user_interests_service__WEBPACK_IMPORTED_MODULE_5__["UserInterestsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", UserInterest)
], UserInterestsUserInterestDetailsComponent.prototype, "userInterest", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UserInterestsUserInterestDetailsComponent.prototype, "userInterestId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserInterestsUserInterestDetailsComponent.prototype, "userInterestReceived", void 0);
UserInterestsUserInterestDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-interests-user-interest-details',
        template: __webpack_require__(/*! raw-loader!./user-interests-user-interest-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-interests/components/user-interests-user-interest-details/user-interests-user-interest-details.component.html"),
        styles: [__webpack_require__(/*! ./user-interests-user-interest-details.component.scss */ "./src/app/user-interests/components/user-interests-user-interest-details/user-interests-user-interest-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_interests_user_interests_service__WEBPACK_IMPORTED_MODULE_5__["UserInterestsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], UserInterestsUserInterestDetailsComponent);



/***/ }),

/***/ "./src/app/user-interests/user-interests.constants.ts":
/*!************************************************************!*\
  !*** ./src/app/user-interests/user-interests.constants.ts ***!
  \************************************************************/
/*! exports provided: UserInterestsConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestsConstants", function() { return UserInterestsConstants; });
class UserInterestsConstants {
}
UserInterestsConstants.USER_INTERESTS_ENDPOINT = 'userinterests';


/***/ }),

/***/ "./src/app/user-interests/user-interests.models.ts":
/*!*********************************************************!*\
  !*** ./src/app/user-interests/user-interests.models.ts ***!
  \*********************************************************/
/*! exports provided: UserInterestsRequests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestsRequests", function() { return UserInterestsRequests; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");



var UserInterestsRequests;
(function (UserInterestsRequests) {
    let CreateUserInterest;
    (function (CreateUserInterest) {
        var UserInterest = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["UserInterests"].UserInterest;
        let Request = class Request {
            constructor() {
                this.interaction = undefined;
                this.type = undefined;
                this.entity = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('interaction', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "interaction", void 0);
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
        CreateUserInterest.Request = Request;
        let Response = class Response extends UserInterest {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        CreateUserInterest.Response = Response;
    })(CreateUserInterest = UserInterestsRequests.CreateUserInterest || (UserInterestsRequests.CreateUserInterest = {}));
    let GetUserInterest;
    (function (GetUserInterest) {
        var UserInterest = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["UserInterests"].UserInterest;
        let Request = class Request {
        };
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        GetUserInterest.Request = Request;
        let Response = class Response extends UserInterest {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        GetUserInterest.Response = Response;
    })(GetUserInterest = UserInterestsRequests.GetUserInterest || (UserInterestsRequests.GetUserInterest = {}));
    let DeleteUserInterest;
    (function (DeleteUserInterest) {
        let Request = class Request {
        };
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        DeleteUserInterest.Request = Request;
    })(DeleteUserInterest = UserInterestsRequests.DeleteUserInterest || (UserInterestsRequests.DeleteUserInterest = {}));
    let GetUserInterestsByEntity;
    (function (GetUserInterestsByEntity) {
        var UserInterest = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["UserInterests"].UserInterest;
        let Request = class Request {
            constructor() {
                this.type = undefined;
                this.entity = undefined;
            }
        };
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
        GetUserInterestsByEntity.Request = Request;
        let Response = class Response extends UserInterest {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        GetUserInterestsByEntity.Response = Response;
    })(GetUserInterestsByEntity = UserInterestsRequests.GetUserInterestsByEntity || (UserInterestsRequests.GetUserInterestsByEntity = {}));
    let GetUserInterestsByEntityCount;
    (function (GetUserInterestsByEntityCount) {
        let Request = class Request {
            constructor() {
                this.type = undefined;
                this.entity = undefined;
            }
        };
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
        GetUserInterestsByEntityCount.Request = Request;
    })(GetUserInterestsByEntityCount = UserInterestsRequests.GetUserInterestsByEntityCount || (UserInterestsRequests.GetUserInterestsByEntityCount = {}));
    let GetUserInterestsByEntityMultiple;
    (function (GetUserInterestsByEntityMultiple) {
        var UserInterest = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["UserInterests"].UserInterest;
        let Request = class Request {
            constructor() {
                this.interaction = undefined;
                this.type = undefined;
                this.entity = undefined;
                this.userIds = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('interaction', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "interaction", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('type', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "type", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('entity', String, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "entity", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('user', [String], true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
        ], Request.prototype, "userIds", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        GetUserInterestsByEntityMultiple.Request = Request;
        let Response = class Response extends UserInterest {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        GetUserInterestsByEntityMultiple.Response = Response;
    })(GetUserInterestsByEntityMultiple = UserInterestsRequests.GetUserInterestsByEntityMultiple || (UserInterestsRequests.GetUserInterestsByEntityMultiple = {}));
    let GetUserSimilarInterests;
    (function (GetUserSimilarInterests) {
        var UserInterest = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["UserInterests"].UserInterest;
        let Request = class Request {
            constructor() {
                this.type = undefined;
                this.entity = undefined;
                this.minAge = undefined;
                this.maxAge = undefined;
                this.gender = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('type', String, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "type", void 0);
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('entity', String, true),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "entity", void 0);
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
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        GetUserSimilarInterests.Request = Request;
        let Response = class Response extends UserInterest {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        GetUserSimilarInterests.Response = Response;
    })(GetUserSimilarInterests = UserInterestsRequests.GetUserSimilarInterests || (UserInterestsRequests.GetUserSimilarInterests = {}));
})(UserInterestsRequests || (UserInterestsRequests = {}));


/***/ }),

/***/ "./src/app/user-interests/user-interests.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/user-interests/user-interests.module.ts ***!
  \*********************************************************/
/*! exports provided: UserInterestsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestsModule", function() { return UserInterestsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_interests_user_interests_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interests/user-interests.pipe */ "./src/app/user-interests/user-interests.pipe.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _user_interests_components_user_interests_by_entity_user_interests_by_entity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interests/components/user-interests-by-entity/user-interests-by-entity.component */ "./src/app/user-interests/components/user-interests-by-entity/user-interests-by-entity.component.ts");
/* harmony import */ var _user_interests_components_user_interests_by_entity_count_user_interests_by_entity_count_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interests/components/user-interests-by-entity-count/user-interests-by-entity-count.component */ "./src/app/user-interests/components/user-interests-by-entity-count/user-interests-by-entity-count.component.ts");
/* harmony import */ var _user_interests_components_user_interests_by_entity_multiple_user_interests_by_entity_multiple_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @user-interests/components/user-interests-by-entity-multiple/user-interests-by-entity-multiple.component */ "./src/app/user-interests/components/user-interests-by-entity-multiple/user-interests-by-entity-multiple.component.ts");
/* harmony import */ var _user_interests_components_user_interests_similar_interests_user_interests_similar_interests_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @user-interests/components/user-interests-similar-interests/user-interests-similar-interests.component */ "./src/app/user-interests/components/user-interests-similar-interests/user-interests-similar-interests.component.ts");
/* harmony import */ var _user_interests_components_user_interests_user_interest_details_user_interests_user_interest_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @user-interests/components/user-interests-user-interest-details/user-interests-user-interest-details.component */ "./src/app/user-interests/components/user-interests-user-interest-details/user-interests-user-interest-details.component.ts");
/* harmony import */ var _user_interests_components_user_interests_create_user_interest_user_interests_create_user_interest_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @user-interests/components/user-interests-create-user-interest/user-interests-create-user-interest.component */ "./src/app/user-interests/components/user-interests-create-user-interest/user-interests-create-user-interest.component.ts");
/* harmony import */ var _user_interests_components_user_interests_get_or_create_user_interests_get_or_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @user-interests/components/user-interests-get-or-create/user-interests-get-or-create.component */ "./src/app/user-interests/components/user-interests-get-or-create/user-interests-get-or-create.component.ts");
/* harmony import */ var _user_interests_components_user_interests_delete_user_interest_user_interests_delete_user_interest_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @user-interests/components/user-interests-delete-user-interest/user-interests-delete-user-interest.component */ "./src/app/user-interests/components/user-interests-delete-user-interest/user-interests-delete-user-interest.component.ts");





// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length


let UserInterestsModule = class UserInterestsModule {
};
UserInterestsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_interests_user_interests_pipe__WEBPACK_IMPORTED_MODULE_2__["UserInterestsPipe"],
            _user_interests_components_user_interests_by_entity_user_interests_by_entity_component__WEBPACK_IMPORTED_MODULE_4__["UserInterestsByEntityComponent"],
            _user_interests_components_user_interests_by_entity_count_user_interests_by_entity_count_component__WEBPACK_IMPORTED_MODULE_5__["UserInterestsByEntityCountComponent"],
            _user_interests_components_user_interests_by_entity_multiple_user_interests_by_entity_multiple_component__WEBPACK_IMPORTED_MODULE_6__["UserInterestsByEntityMultipleComponent"],
            _user_interests_components_user_interests_similar_interests_user_interests_similar_interests_component__WEBPACK_IMPORTED_MODULE_7__["UserInterestsSimilarInterestsComponent"],
            _user_interests_components_user_interests_user_interest_details_user_interests_user_interest_details_component__WEBPACK_IMPORTED_MODULE_8__["UserInterestsUserInterestDetailsComponent"],
            _user_interests_components_user_interests_create_user_interest_user_interests_create_user_interest_component__WEBPACK_IMPORTED_MODULE_9__["UserInterestsCreateUserInterestComponent"],
            _user_interests_components_user_interests_get_or_create_user_interests_get_or_create_component__WEBPACK_IMPORTED_MODULE_10__["UserInterestsGetOrCreateComponent"],
            _user_interests_components_user_interests_create_user_interest_user_interests_create_user_interest_component__WEBPACK_IMPORTED_MODULE_9__["UserInterestsCreateUserInterestNoTemplateComponent"],
            _user_interests_components_user_interests_by_entity_multiple_user_interests_by_entity_multiple_component__WEBPACK_IMPORTED_MODULE_6__["UserInterestsByEntityMultipleNoTemplateComponent"],
            _user_interests_components_user_interests_delete_user_interest_user_interests_delete_user_interest_component__WEBPACK_IMPORTED_MODULE_11__["UserInterestsDeleteUserInterestNoTemplateComponent"],
            _user_interests_components_user_interests_delete_user_interest_user_interests_delete_user_interest_component__WEBPACK_IMPORTED_MODULE_11__["UserInterestsDeleteUserInterestComponent"],
            _user_interests_user_interests_pipe__WEBPACK_IMPORTED_MODULE_2__["UserInterestsFilterUserInterestByEntityPipe"],
            _user_interests_user_interests_pipe__WEBPACK_IMPORTED_MODULE_2__["UserInterestsFilterUserInterestByInteractionPipe"],
            _user_interests_user_interests_pipe__WEBPACK_IMPORTED_MODULE_2__["UserInterestsRemoveUserInterestFromArrayPipe"],
            _user_interests_components_user_interests_similar_interests_user_interests_similar_interests_component__WEBPACK_IMPORTED_MODULE_7__["UserInterestsSimilarInterestsNoTemplateComponent"],
            _user_interests_user_interests_pipe__WEBPACK_IMPORTED_MODULE_2__["UserInterestsRemoveUserInterestByAccountPipe"],
            _user_interests_components_user_interests_get_or_create_user_interests_get_or_create_component__WEBPACK_IMPORTED_MODULE_10__["UserInterestsGetOrCreateWithDeleteHeartComponent"]
        ],
        imports: [
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]
        ],
        exports: [_user_interests_user_interests_pipe__WEBPACK_IMPORTED_MODULE_2__["UserInterestsPipe"],
            _user_interests_components_user_interests_by_entity_user_interests_by_entity_component__WEBPACK_IMPORTED_MODULE_4__["UserInterestsByEntityComponent"],
            _user_interests_components_user_interests_by_entity_count_user_interests_by_entity_count_component__WEBPACK_IMPORTED_MODULE_5__["UserInterestsByEntityCountComponent"],
            _user_interests_components_user_interests_by_entity_multiple_user_interests_by_entity_multiple_component__WEBPACK_IMPORTED_MODULE_6__["UserInterestsByEntityMultipleComponent"],
            _user_interests_components_user_interests_similar_interests_user_interests_similar_interests_component__WEBPACK_IMPORTED_MODULE_7__["UserInterestsSimilarInterestsComponent"],
            _user_interests_components_user_interests_user_interest_details_user_interests_user_interest_details_component__WEBPACK_IMPORTED_MODULE_8__["UserInterestsUserInterestDetailsComponent"],
            _user_interests_components_user_interests_create_user_interest_user_interests_create_user_interest_component__WEBPACK_IMPORTED_MODULE_9__["UserInterestsCreateUserInterestComponent"],
            _user_interests_components_user_interests_get_or_create_user_interests_get_or_create_component__WEBPACK_IMPORTED_MODULE_10__["UserInterestsGetOrCreateComponent"],
            _user_interests_components_user_interests_create_user_interest_user_interests_create_user_interest_component__WEBPACK_IMPORTED_MODULE_9__["UserInterestsCreateUserInterestNoTemplateComponent"],
            _user_interests_components_user_interests_by_entity_multiple_user_interests_by_entity_multiple_component__WEBPACK_IMPORTED_MODULE_6__["UserInterestsByEntityMultipleNoTemplateComponent"],
            _user_interests_components_user_interests_delete_user_interest_user_interests_delete_user_interest_component__WEBPACK_IMPORTED_MODULE_11__["UserInterestsDeleteUserInterestNoTemplateComponent"],
            _user_interests_components_user_interests_delete_user_interest_user_interests_delete_user_interest_component__WEBPACK_IMPORTED_MODULE_11__["UserInterestsDeleteUserInterestComponent"],
            _user_interests_user_interests_pipe__WEBPACK_IMPORTED_MODULE_2__["UserInterestsFilterUserInterestByEntityPipe"],
            _user_interests_user_interests_pipe__WEBPACK_IMPORTED_MODULE_2__["UserInterestsFilterUserInterestByInteractionPipe"],
            _user_interests_user_interests_pipe__WEBPACK_IMPORTED_MODULE_2__["UserInterestsRemoveUserInterestFromArrayPipe"],
            _user_interests_components_user_interests_similar_interests_user_interests_similar_interests_component__WEBPACK_IMPORTED_MODULE_7__["UserInterestsSimilarInterestsNoTemplateComponent"],
            _user_interests_user_interests_pipe__WEBPACK_IMPORTED_MODULE_2__["UserInterestsRemoveUserInterestByAccountPipe"],
            _user_interests_components_user_interests_get_or_create_user_interests_get_or_create_component__WEBPACK_IMPORTED_MODULE_10__["UserInterestsGetOrCreateWithDeleteHeartComponent"]
        ],
    })
], UserInterestsModule);



/***/ }),

/***/ "./src/app/user-interests/user-interests.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/user-interests/user-interests.pipe.ts ***!
  \*******************************************************/
/*! exports provided: UserInterestsPipe, UserInterestsFilterUserInterestByEntityPipe, UserInterestsFilterUserInterestByInteractionPipe, UserInterestsRemoveUserInterestFromArrayPipe, UserInterestsRemoveUserInterestByAccountPipe, getUserInterestEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestsPipe", function() { return UserInterestsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestsFilterUserInterestByEntityPipe", function() { return UserInterestsFilterUserInterestByEntityPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestsFilterUserInterestByInteractionPipe", function() { return UserInterestsFilterUserInterestByInteractionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestsRemoveUserInterestFromArrayPipe", function() { return UserInterestsRemoveUserInterestFromArrayPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestsRemoveUserInterestByAccountPipe", function() { return UserInterestsRemoveUserInterestByAccountPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInterestEntity", function() { return getUserInterestEntity; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



let UserInterestsPipe = class UserInterestsPipe {
    transform(value, ...args) {
        return null;
    }
};
UserInterestsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'userInterests'
    })
], UserInterestsPipe);

let UserInterestsFilterUserInterestByEntityPipe = class UserInterestsFilterUserInterestByEntityPipe {
    transform(value, entity, entityType, ...args) {
        return value.filter(user_interest => {
            const currentEntity = getUserInterestEntity(user_interest, entityType);
            return user_interest.entityType === entityType && entity._id === currentEntity._id;
        });
    }
};
UserInterestsFilterUserInterestByEntityPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'userInterestsFilterUserInterestByEntityAndInterest'
    })
], UserInterestsFilterUserInterestByEntityPipe);

let UserInterestsFilterUserInterestByInteractionPipe = class UserInterestsFilterUserInterestByInteractionPipe {
    transform(value, interaction, ...args) {
        return value.filter(user_interest => {
            return user_interest.interaction === interaction;
        });
    }
};
UserInterestsFilterUserInterestByInteractionPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'userInterestsFilterUserInterestByInteraction'
    })
], UserInterestsFilterUserInterestByInteractionPipe);

let UserInterestsRemoveUserInterestFromArrayPipe = class UserInterestsRemoveUserInterestFromArrayPipe {
    transform(removeValues, allValues, ...args) {
        return lodash__WEBPACK_IMPORTED_MODULE_2__["differenceWith"](allValues, removeValues, (a, b) => a._id === b._id);
    }
};
UserInterestsRemoveUserInterestFromArrayPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'userInterestsRemoveUserInterestFromArray'
    })
], UserInterestsRemoveUserInterestFromArrayPipe);

let UserInterestsRemoveUserInterestByAccountPipe = class UserInterestsRemoveUserInterestByAccountPipe {
    transform(value, account, ...args) {
        return value.filter(user_interest => {
            return user_interest.userAccount._id !== account._id;
        });
    }
};
UserInterestsRemoveUserInterestByAccountPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'userInterestsRemoveUserInterestByAccount'
    })
], UserInterestsRemoveUserInterestByAccountPipe);

function getUserInterestEntity(userInterest, entityType) {
    switch (entityType) {
        case 'EVENT':
            return userInterest.event;
        case 'USER_ACCOUNT':
            return userInterest.otherAccount;
        default:
            throw new Error('Unknown entity type ' + entityType);
    }
}


/***/ }),

/***/ "./src/app/user-interests/user-interests.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/user-interests/user-interests.service.ts ***!
  \**********************************************************/
/*! exports provided: UserInterestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterestsService", function() { return UserInterestsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_http_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/http/rest.service */ "./src/app/core/http/rest.service.ts");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm2015/ngx-restangular.js");
/* harmony import */ var _user_interests_user_interests_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interests/user-interests.constants */ "./src/app/user-interests/user-interests.constants.ts");





let UserInterestsService = class UserInterestsService extends _core_http_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] {
    constructor(restangular) {
        super(restangular);
        this.userInterestsService = this.getService(_user_interests_user_interests_constants__WEBPACK_IMPORTED_MODULE_4__["UserInterestsConstants"].USER_INTERESTS_ENDPOINT);
    }
    createUserInterest(request) {
        return this.userInterestsService.one('').customPOST(this.serialize(request));
    }
    getUserInterest(request) {
        return this.userInterestsService.one(request.userInterestId).get();
    }
    deleteUserInterest(request) {
        return this.userInterestsService.one(request.userInterestId).customDELETE();
    }
    getUserInterestsByEntity(request) {
        return this.userInterestsService.one('entity').customGET('', this.serialize(request));
    }
    getUserInterestsByEntityCount(request) {
        return this.userInterestsService.one('entity').one('count').customGET('', this.serialize(request));
    }
    getUserInterestsByEntityMultiple(request) {
        return this.userInterestsService.one('entity').one('multiple').customGET('', this.serialize(request));
    }
    getUserSimilarInterests(request) {
        return this.userInterestsService.one('similar').customGET('', this.serialize(request));
    }
};
UserInterestsService.ctorParameters = () => [
    { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_3__["Restangular"] }
];
UserInterestsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_3__["Restangular"]])
], UserInterestsService);



/***/ })

}]);
//# sourceMappingURL=default~events-events-module~user-profiles-user-profiles-module-es2015.js.map