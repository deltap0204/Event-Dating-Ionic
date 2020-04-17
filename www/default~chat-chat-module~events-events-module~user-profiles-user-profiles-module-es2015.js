(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~chat-chat-module~events-events-module~user-profiles-user-profiles-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/components/chats-create-user-chat/chats-create-user-chat.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/components/chats-create-user-chat/chats-create-user-chat.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-button [color]=\"'danger'\" expand=\"full\" class=\"h-3\" size=\"small\" (click)=\"createUserChat(createRequestData())\">\r\n  Start Chat\r\n</ion-button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/components/chats-user-chat/chats-user-chat.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/components/chats-user-chat/chats-user-chat.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<users-user-profile-by-user-no-template\r\n        [userAccount]=\"userChat|chatsUserAccountsToOtherAccount:loggedProfile.userAccount\"\r\n        #usersUserProfileByUserNoTemplateComponent\r\n></users-user-profile-by-user-no-template>\r\n<quickblox-list-dialogs-no-template [dialogId]=\"userChat.quickbloxId\"\r\n                                    #quickbloxListDialogsNoTemplateComponent></quickblox-list-dialogs-no-template>\r\n\r\n<ion-card *ngIf=\"usersUserProfileByUserNoTemplateComponent.user_profile\">\r\n    <ion-row>\r\n        <ion-col size=\"3\">\r\n            <images-by-entity-and-type-sm\r\n                    [entity]=\"usersUserProfileByUserNoTemplateComponent.user_profile.userAccount._id\"\r\n                    [entityType]=\"'USER_ACCOUNT'\"\r\n                    [alt]=\"(usersUserProfileByUserNoTemplateComponent.user_profile|usersUserProfileToUserProfileValue:'NAME').value\">\r\n\r\n            </images-by-entity-and-type-sm>\r\n        </ion-col>\r\n        <ion-col size=\"9\">\r\n            <div class=\"w-100\">\r\n                <ion-label class=\"font-black font-weight-bold fs-8\">\r\n                    {{(usersUserProfileByUserNoTemplateComponent.user_profile|usersUserProfileToUserProfileValue:'NAME').value}}\r\n                </ion-label>\r\n            </div>\r\n            <div *ngIf=\"quickbloxListDialogsNoTemplateComponent.quickblox_dialogs?.items?.length\">\r\n                <div *ngFor=\"let item of quickbloxListDialogsNoTemplateComponent.quickblox_dialogs.items\">\r\n                    \r\n                    <ion-label class=\"float-left\">\r\n                        {{item.last_message}}\r\n                    </ion-label>\r\n                    <ion-label class=\"float-right\">\r\n                        {{item.updated_at|amTimeAgo}}\r\n                    </ion-label>\r\n                </div>\r\n            </div>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/components/chats-user-chats-by-dialog-id/chats-user-chats-by-dialog-id.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/components/chats-user-chats-by-dialog-id/chats-user-chats-by-dialog-id.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  chats-user-chats-by-dialog-id works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/components/chats-user-chats/chats-user-chats-no-template.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/components/chats-user-chats/chats-user-chats-no-template.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/components/chats-user-chats/chats-user-chats.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/components/chats-user-chats/chats-user-chats.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let user_chat of user_chats\" class=\"bb-medium\">\r\n    <a routerLink=\"/signedin/chats/chat/{{user_chat.quickbloxId}}\">\r\n        <chats-user-chat [userChat]=\"user_chat\"></chats-user-chat>\r\n    </a>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/components/chats-user-requests/chats-user-requests.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/components/chats-user-requests/chats-user-requests.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card>\n  <ion-row>\n    <ion-col size=\"3\">\n      <div class=\"top_layout\">\n        <div>\n          <!-- <p class=\"img-sm-circular text-center font-white fs-15 br-max b-0\" [ngStyle]=\"{'background-color' : 'red'}\">\n            A\n          </p> -->\n        </div>\n        <div>\n          <img src=\"../../../../assets/heart-outline.svg\" />\n        </div>\n      </div>\n    </ion-col>\n    <ion-col size=\"9\">\n      <div class=\"w-100\">\n        <ion-label class=\"font-black font-weight-bold fs-8\">\n          John Doe has shown interest in your profile\n        </ion-label>\n      </div>\n      <div>\n        <div>\n          <ion-label>\n            <ion-button>Decline</ion-button>\n          </ion-label>\n          <ion-label>\n            <ion-button color=\"secondary\">Accept</ion-button>\n          </ion-label>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-card>\n<hr />\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/pages/chats-user-chat-page/chats-user-chat-page.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/pages/chats-user-chat-page/chats-user-chat-page.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\">\r\n    <ion-row>\r\n        <ion-col [size]=\"3\" class=\"p-2\" routerLink=\"/signedin/profile/chats\">\r\n            <fa-icon icon=\"chevron-left\"></fa-icon>\r\n        </ion-col>\r\n        <ion-col [size]=\"6\" class=\"text-center\">\r\n            <ion-label class=\"font-black font-weight-bold ion-text-uppercase fs-12 ellipses-2\">\r\n                {{((userChatAndOtherProfile$|async).otherProfile|usersUserProfileToUserProfileValue:'NAME').value}}\r\n            </ion-label>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <quickblox-get-message-list-and-listener [dialogItem]=\"dialogItem$|async\"\r\n                                             #messageListAndListenerComponent></quickblox-get-message-list-and-listener>\r\n    <div class=\"p-1\">\r\n        <div *ngFor=\"let message of messageListAndListenerComponent.quickblox_messages\">\r\n            <div>\r\n                <ion-row *ngIf=\"message.sender_id == loggedProfile.userAccount.quickbloxId\">\r\n                    <ion-col [size]=\"10\" [offset]=\"2\">\r\n                        <ion-row class=\" bg-primary ml-6 b-2 br-3\">\r\n                            <ion-col [size]=\"3\">\r\n                                <span class=\"text-color text-left\">\r\n                                    {{message.date_sent | appTimeFormat:'hh:mm'}}\r\n                                    </span>\r\n                            </ion-col>\r\n                            <ion-col [size]=\"5\">\r\n                                <p class=\"p-1 m-0 whitespace-pre-line\" [innerHTML]=\"message.message\"></p>\r\n                            </ion-col>\r\n                            <ion-col [size]=\"3\" class=\"float-right\">\r\n                                <images-by-entity-and-type-sm [entity]=\"loggedProfile.userAccount._id\"\r\n                                                              [entityType]=\"'USER_ACCOUNT'\"\r\n                                                              [alt]=\"(loggedProfile|usersUserProfileToUserProfileValue:'NAME').value\"></images-by-entity-and-type-sm>\r\n                            </ion-col>\r\n\r\n                        </ion-row>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row *ngIf=\"message.sender_id != loggedProfile.userAccount.quickbloxId\">\r\n                    <ion-col [size]=\"10\" [offset]=\"0\">\r\n                        <ion-row class=\"bg-primary-grey-d b-2 br-3\">\r\n                            <ion-col [size]=\"3\">\r\n                                <images-by-entity-and-type-sm\r\n                                        [entity]=\"(userChatAndOtherProfile$|async).otherProfile.userAccount._id\"\r\n                                        [entityType]=\"'USER_ACCOUNT'\"\r\n                                        [alt]=\"((userChatAndOtherProfile$|async).otherProfile|usersUserProfileToUserProfileValue:'NAME').value\"></images-by-entity-and-type-sm>\r\n                            </ion-col>\r\n                            <ion-col [size]=\"5\">\r\n                                <p class=\"p-1 m-0 whitespace-pre-line\" [innerHTML]=\"message.message\"></p>\r\n                            </ion-col>\r\n                            <ion-col [size]=\"3\">\r\n                                <span class=\"text-color float-right text-right\">\r\n                                    {{message.date_sent | appTimeFormat:'hh:mm'}}\r\n                                    </span>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</ion-content>\r\n<quickblox-message-create-and-listener\r\n        [dialogId]=\"(dialogItem$|async).id\"></quickblox-message-create-and-listener>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/pages/chats-user-chats-page/chats-user-chats-page.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/pages/chats-user-chats-page/chats-user-chats-page.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<chats-user-chats></chats-user-chats>"

/***/ }),

/***/ "./src/app/chat/chat.constants.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.constants.ts ***!
  \****************************************/
/*! exports provided: ChatConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatConstants", function() { return ChatConstants; });
class ChatConstants {
}
ChatConstants.CHAT_ENDPOINT = 'chat';


/***/ }),

/***/ "./src/app/chat/chat.models.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.models.ts ***!
  \*************************************/
/*! exports provided: ChatRequests, UserChatAndOtherProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRequests", function() { return ChatRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserChatAndOtherProfile", function() { return UserChatAndOtherProfile; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");



var ChatRequests;
(function (ChatRequests) {
    let CreateUserChat;
    (function (CreateUserChat) {
        var UserChat = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["Chats"].UserChat;
        let Request = class Request {
            constructor() {
                this.otherAccount = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('otherAccount', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "otherAccount", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        CreateUserChat.Request = Request;
        let Response = class Response extends UserChat {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        CreateUserChat.Response = Response;
    })(CreateUserChat = ChatRequests.CreateUserChat || (ChatRequests.CreateUserChat = {}));
    let GetUserChats;
    (function (GetUserChats) {
        var UserChat = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["Chats"].UserChat;
        let Request = class Request {
        };
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        GetUserChats.Request = Request;
        let Response = class Response extends UserChat {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        GetUserChats.Response = Response;
    })(GetUserChats = ChatRequests.GetUserChats || (ChatRequests.GetUserChats = {}));
    let GetUserChat;
    (function (GetUserChat) {
        var UserChat = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["Chats"].UserChat;
        let Request = class Request {
            constructor() {
                this.chatId = undefined;
            }
        };
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        GetUserChat.Request = Request;
        let Response = class Response extends UserChat {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        GetUserChat.Response = Response;
    })(GetUserChat = ChatRequests.GetUserChat || (ChatRequests.GetUserChat = {}));
    let GetUserChatsByDialogId;
    (function (GetUserChatsByDialogId) {
        var UserChat = _core_core_models__WEBPACK_IMPORTED_MODULE_2__["Chats"].UserChat;
        let Request = class Request {
            constructor() {
                this.dialogId = undefined;
            }
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('dialogId', String),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
        ], Request.prototype, "dialogId", void 0);
        Request = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Request);
        GetUserChatsByDialogId.Request = Request;
        let Response = class Response extends UserChat {
        };
        Response = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])()
        ], Response);
        GetUserChatsByDialogId.Response = Response;
    })(GetUserChatsByDialogId = ChatRequests.GetUserChatsByDialogId || (ChatRequests.GetUserChatsByDialogId = {}));
})(ChatRequests || (ChatRequests = {}));
class UserChatAndOtherProfile {
}


/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chat_components_chats_create_user_chat_chats_create_user_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chat/components/chats-create-user-chat/chats-create-user-chat.component */ "./src/app/chat/components/chats-create-user-chat/chats-create-user-chat.component.ts");
/* harmony import */ var _chat_components_chats_user_chat_chats_user_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chat/components/chats-user-chat/chats-user-chat.component */ "./src/app/chat/components/chats-user-chat/chats-user-chat.component.ts");
/* harmony import */ var _chat_components_chats_user_chats_chats_user_chats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chat/components/chats-user-chats/chats-user-chats.component */ "./src/app/chat/components/chats-user-chats/chats-user-chats.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _quickblox_quickblox_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @quickblox/quickblox.module */ "./src/app/quickblox/quickblox.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_chat_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chat/chat.routes */ "./src/app/chat/chat.routes.ts");
/* harmony import */ var _chat_pages_chats_user_chat_page_chats_user_chat_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chat/pages/chats-user-chat-page/chats-user-chat-page.component */ "./src/app/chat/pages/chats-user-chat-page/chats-user-chat-page.component.ts");
/* harmony import */ var _chat_pages_chats_user_chats_page_chats_user_chats_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chat/pages/chats-user-chats-page/chats-user-chats-page.component */ "./src/app/chat/pages/chats-user-chats-page/chats-user-chats-page.component.ts");
/* harmony import */ var _chat_chat_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chat/chat.pipe */ "./src/app/chat/chat.pipe.ts");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @users/users.module */ "./src/app/users/users.module.ts");
/* harmony import */ var _images_images_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @images/images.module */ "./src/app/images/images.module.ts");
/* harmony import */ var _chat_components_chats_user_chats_by_dialog_id_chats_user_chats_by_dialog_id_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chat/components/chats-user-chats-by-dialog-id/chats-user-chats-by-dialog-id.component */ "./src/app/chat/components/chats-user-chats-by-dialog-id/chats-user-chats-by-dialog-id.component.ts");
/* harmony import */ var _chat_chat_resolver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @chat/chat.resolver */ "./src/app/chat/chat.resolver.ts");
/* harmony import */ var _components_chats_user_requests_chats_user_requests_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/chats-user-requests/chats-user-requests.component */ "./src/app/chat/components/chats-user-requests/chats-user-requests.component.ts");

















let ChatModule = class ChatModule {
};
ChatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _chat_components_chats_create_user_chat_chats_create_user_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatsCreateUserChatComponent"],
            _chat_components_chats_user_chat_chats_user_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatsUserChatComponent"],
            _chat_components_chats_user_chats_chats_user_chats_component__WEBPACK_IMPORTED_MODULE_4__["ChatsUserChatsComponent"],
            _chat_pages_chats_user_chat_page_chats_user_chat_page_component__WEBPACK_IMPORTED_MODULE_9__["ChatsUserChatPageComponent"],
            _chat_pages_chats_user_chats_page_chats_user_chats_page_component__WEBPACK_IMPORTED_MODULE_10__["ChatsUserChatsPageComponent"],
            _chat_chat_pipe__WEBPACK_IMPORTED_MODULE_11__["ChatsUserAccountsToOtherAccountPipe"],
            _chat_components_chats_user_chats_by_dialog_id_chats_user_chats_by_dialog_id_component__WEBPACK_IMPORTED_MODULE_14__["ChatsUserChatsByDialogIdComponent"],
            _chat_chat_pipe__WEBPACK_IMPORTED_MODULE_11__["ChatsUserAccountsToSameAccountPipe"],
            _chat_components_chats_user_chats_chats_user_chats_component__WEBPACK_IMPORTED_MODULE_4__["ChatsUserChatsNoTemplateComponent"],
            _components_chats_user_requests_chats_user_requests_component__WEBPACK_IMPORTED_MODULE_16__["ChatsUserRequestsComponent"],
        ],
        imports: [
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            _quickblox_quickblox_module__WEBPACK_IMPORTED_MODULE_6__["QuickbloxModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(_chat_chat_routes__WEBPACK_IMPORTED_MODULE_8__["CHAT_ROUTES"]),
            _users_users_module__WEBPACK_IMPORTED_MODULE_12__["UsersModule"],
            _images_images_module__WEBPACK_IMPORTED_MODULE_13__["ImagesModule"],
        ],
        exports: [
            _chat_components_chats_create_user_chat_chats_create_user_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatsCreateUserChatComponent"],
            _chat_components_chats_user_chat_chats_user_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatsUserChatComponent"],
            _chat_components_chats_user_chats_chats_user_chats_component__WEBPACK_IMPORTED_MODULE_4__["ChatsUserChatsComponent"],
            _chat_pages_chats_user_chat_page_chats_user_chat_page_component__WEBPACK_IMPORTED_MODULE_9__["ChatsUserChatPageComponent"],
            _chat_pages_chats_user_chats_page_chats_user_chats_page_component__WEBPACK_IMPORTED_MODULE_10__["ChatsUserChatsPageComponent"],
            _chat_chat_pipe__WEBPACK_IMPORTED_MODULE_11__["ChatsUserAccountsToOtherAccountPipe"],
            _chat_components_chats_user_chats_by_dialog_id_chats_user_chats_by_dialog_id_component__WEBPACK_IMPORTED_MODULE_14__["ChatsUserChatsByDialogIdComponent"],
            _chat_chat_pipe__WEBPACK_IMPORTED_MODULE_11__["ChatsUserAccountsToSameAccountPipe"],
            _chat_components_chats_user_chats_chats_user_chats_component__WEBPACK_IMPORTED_MODULE_4__["ChatsUserChatsNoTemplateComponent"],
            _components_chats_user_requests_chats_user_requests_component__WEBPACK_IMPORTED_MODULE_16__["ChatsUserRequestsComponent"],
        ],
        providers: [
            _chat_chat_resolver__WEBPACK_IMPORTED_MODULE_15__["ChatUserChatByDialogIdResolver"],
            _chat_chat_resolver__WEBPACK_IMPORTED_MODULE_15__["ChatUserChatByDialogIdAndOtherProfileResolver"],
        ],
    })
], ChatModule);



/***/ }),

/***/ "./src/app/chat/chat.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/chat/chat.pipe.ts ***!
  \***********************************/
/*! exports provided: ChatsUserAccountsToOtherAccountPipe, ChatsUserAccountsToSameAccountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsUserAccountsToOtherAccountPipe", function() { return ChatsUserAccountsToOtherAccountPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsUserAccountsToSameAccountPipe", function() { return ChatsUserAccountsToSameAccountPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatsUserAccountsToOtherAccountPipe = class ChatsUserAccountsToOtherAccountPipe {
    transform(value, account, ...args) {
        return value.userAccounts.find(user_account => account._id !== user_account._id);
    }
};
ChatsUserAccountsToOtherAccountPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'chatsUserAccountsToOtherAccount'
    })
], ChatsUserAccountsToOtherAccountPipe);

let ChatsUserAccountsToSameAccountPipe = class ChatsUserAccountsToSameAccountPipe {
    transform(value, account, ...args) {
        return value.userAccounts.find(user_account => account._id === user_account._id);
    }
};
ChatsUserAccountsToSameAccountPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'chatsUserAccountsToSameAccount'
    })
], ChatsUserAccountsToSameAccountPipe);



/***/ }),

/***/ "./src/app/chat/chat.resolver.ts":
/*!***************************************!*\
  !*** ./src/app/chat/chat.resolver.ts ***!
  \***************************************/
/*! exports provided: ChatUserChatByDialogIdResolver, ChatUserChatByDialogIdAndOtherProfileResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatUserChatByDialogIdResolver", function() { return ChatUserChatByDialogIdResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatUserChatByDialogIdAndOtherProfileResolver", function() { return ChatUserChatByDialogIdAndOtherProfileResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _chat_chat_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chat/chat.models */ "./src/app/chat/chat.models.ts");
/* harmony import */ var _chat_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chat/chat.service */ "./src/app/chat/chat.service.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @users/users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _chat_chat_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chat/chat.pipe */ "./src/app/chat/chat.pipe.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _users_users_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @users/users.models */ "./src/app/users/users.models.ts");





var GetUserChatsByDialogId = _chat_chat_models__WEBPACK_IMPORTED_MODULE_4__["ChatRequests"].GetUserChatsByDialogId;


var UserChat = _core_core_models__WEBPACK_IMPORTED_MODULE_6__["Chats"].UserChat;




var GetUserProfileByUser = _users_users_models__WEBPACK_IMPORTED_MODULE_10__["UserRequests"].GetUserProfileByUser;
var UserProfile = _core_core_models__WEBPACK_IMPORTED_MODULE_6__["Users"].UserProfile;
let ChatUserChatByDialogIdResolver = class ChatUserChatByDialogIdResolver {
    constructor(chatService) {
        this.chatService = chatService;
    }
    resolve(route) {
        const request = new GetUserChatsByDialogId.Request();
        request.dialogId = route.paramMap.get('dialogId');
        return this.chatService.getUserChatsByDialogId(request)
            .pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].deserializeMap(UserChat), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(success => success[0]));
    }
};
ChatUserChatByDialogIdResolver.ctorParameters = () => [
    { type: _chat_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"] }
];
ChatUserChatByDialogIdResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"]])
], ChatUserChatByDialogIdResolver);

let ChatUserChatByDialogIdAndOtherProfileResolver = class ChatUserChatByDialogIdAndOtherProfileResolver {
    constructor(usersService, authService, userChatByDialogIdResolver) {
        this.usersService = usersService;
        this.authService = authService;
        this.userChatByDialogIdResolver = userChatByDialogIdResolver;
        this.pipe = new _chat_chat_pipe__WEBPACK_IMPORTED_MODULE_8__["ChatsUserAccountsToOtherAccountPipe"]();
    }
    resolve(route) {
        return this.userChatByDialogIdResolver.resolve(route).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(user_chat_response => {
            const user_chat = user_chat_response;
            const other_account = this.pipe.transform(user_chat, this.authService.userProfile.userAccount);
            const request = new GetUserProfileByUser.Request();
            request.user = other_account._id;
            return this.usersService.getUserProfileByUser(request)
                .pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"].deserializeMap(UserProfile), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
                const user_chat_other_profile = new _chat_chat_models__WEBPACK_IMPORTED_MODULE_4__["UserChatAndOtherProfile"]();
                user_chat_other_profile.userChat = user_chat;
                user_chat_other_profile.otherProfile = response;
                return user_chat_other_profile;
            }));
        }));
    }
};
ChatUserChatByDialogIdAndOtherProfileResolver.ctorParameters = () => [
    { type: _users_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"] },
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: ChatUserChatByDialogIdResolver }
];
ChatUserChatByDialogIdAndOtherProfileResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"], _core_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
        ChatUserChatByDialogIdResolver])
], ChatUserChatByDialogIdAndOtherProfileResolver);



/***/ }),

/***/ "./src/app/chat/chat.routes.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.routes.ts ***!
  \*************************************/
/*! exports provided: CHAT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAT_ROUTES", function() { return CHAT_ROUTES; });
/* harmony import */ var _chat_pages_chats_user_chat_page_chats_user_chat_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chat/pages/chats-user-chat-page/chats-user-chat-page.component */ "./src/app/chat/pages/chats-user-chat-page/chats-user-chat-page.component.ts");
/* harmony import */ var _quickblox_quickblox_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @quickblox/quickblox.resolver */ "./src/app/quickblox/quickblox.resolver.ts");
/* harmony import */ var _chat_pages_chats_user_chats_page_chats_user_chats_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chat/pages/chats-user-chats-page/chats-user-chats-page.component */ "./src/app/chat/pages/chats-user-chats-page/chats-user-chats-page.component.ts");
/* harmony import */ var _chat_chat_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chat/chat.resolver */ "./src/app/chat/chat.resolver.ts");




const CHAT_ROUTES = [
    {
        path: 'chat', children: [{
                path: ':dialogId', component: _chat_pages_chats_user_chat_page_chats_user_chat_page_component__WEBPACK_IMPORTED_MODULE_0__["ChatsUserChatPageComponent"], resolve: {
                    dialogItem: _quickblox_quickblox_resolver__WEBPACK_IMPORTED_MODULE_1__["QuickbloxDialogItemResolver"],
                    chatDialogJid: _quickblox_quickblox_resolver__WEBPACK_IMPORTED_MODULE_1__["QuickbloxJoinDialogResolver"],
                    userChatAndOtherProfile: _chat_chat_resolver__WEBPACK_IMPORTED_MODULE_3__["ChatUserChatByDialogIdAndOtherProfileResolver"]
                }
            }]
    },
    {
        path: 'user', component: _chat_pages_chats_user_chats_page_chats_user_chats_page_component__WEBPACK_IMPORTED_MODULE_2__["ChatsUserChatsPageComponent"]
    },
];


/***/ }),

/***/ "./src/app/chat/chat.service.ts":
/*!**************************************!*\
  !*** ./src/app/chat/chat.service.ts ***!
  \**************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_http_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/http/rest.service */ "./src/app/core/http/rest.service.ts");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm2015/ngx-restangular.js");
/* harmony import */ var _chat_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat.constants */ "./src/app/chat/chat.constants.ts");





let ChatService = class ChatService extends _core_http_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] {
    constructor(restangular) {
        super(restangular);
        this.chatService = this.getService(_chat_constants__WEBPACK_IMPORTED_MODULE_4__["ChatConstants"].CHAT_ENDPOINT);
    }
    createUserChat(request) {
        return this.chatService.one('').customPOST(this.serialize(request));
    }
    getUserChats(request) {
        return this.chatService.one('').get();
    }
    getUserChat(request) {
        return this.chatService.one(request.chatId).get();
    }
    getUserChatsByDialogId(request) {
        return this.chatService.one('dialogs').customGET('', this.serialize(request));
    }
    getUserRequest(request) {
        return this.chatService.one('').get();
    }
};
ChatService.ctorParameters = () => [
    { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_3__["Restangular"] }
];
ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_3__["Restangular"]])
], ChatService);



/***/ }),

/***/ "./src/app/chat/components/chats-create-user-chat/chats-create-user-chat.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/chat/components/chats-create-user-chat/chats-create-user-chat.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY29tcG9uZW50cy9jaGF0cy1jcmVhdGUtdXNlci1jaGF0L2NoYXRzLWNyZWF0ZS11c2VyLWNoYXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/chat/components/chats-create-user-chat/chats-create-user-chat.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/chat/components/chats-create-user-chat/chats-create-user-chat.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ChatsCreateUserChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsCreateUserChatComponent", function() { return ChatsCreateUserChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chat.service */ "./src/app/chat/chat.service.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _chat_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../chat.models */ "./src/app/chat/chat.models.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");





var UserAccount = _core_core_models__WEBPACK_IMPORTED_MODULE_4__["Users"].UserAccount;

var CreateUserChat = _chat_models__WEBPACK_IMPORTED_MODULE_5__["ChatRequests"].CreateUserChat;

let ChatsCreateUserChatComponent = class ChatsCreateUserChatComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(chatService, injector) {
        super(injector);
        this.chatService = chatService;
        this.userChatCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
    }
    createRequestData(other_id) {
        const request = new CreateUserChat.Request();
        request.otherAccount = other_id || this.otherAccount._id;
        return request;
    }
    createUserChat(request) {
        this.chatService.createUserChat(request).pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_6__["CommonsService"].deserializeMap(CreateUserChat.Response))
            .subscribe(value => {
            this.userChatCreated.emit(value);
        });
    }
};
ChatsCreateUserChatComponent.ctorParameters = () => [
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", UserAccount)
], ChatsCreateUserChatComponent.prototype, "otherAccount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ChatsCreateUserChatComponent.prototype, "userChatCreated", void 0);
ChatsCreateUserChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'chats-create-user-chat',
        template: __webpack_require__(/*! raw-loader!./chats-create-user-chat.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/components/chats-create-user-chat/chats-create-user-chat.component.html"),
        styles: [__webpack_require__(/*! ./chats-create-user-chat.component.scss */ "./src/app/chat/components/chats-create-user-chat/chats-create-user-chat.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], ChatsCreateUserChatComponent);



/***/ }),

/***/ "./src/app/chat/components/chats-user-chat/chats-user-chat.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/chat/components/chats-user-chat/chats-user-chat.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY29tcG9uZW50cy9jaGF0cy11c2VyLWNoYXQvY2hhdHMtdXNlci1jaGF0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/chat/components/chats-user-chat/chats-user-chat.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/chat/components/chats-user-chat/chats-user-chat.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChatsUserChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsUserChatComponent", function() { return ChatsUserChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _chat_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../chat.models */ "./src/app/chat/chat.models.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../chat.service */ "./src/app/chat/chat.service.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");




var UserChat = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["Chats"].UserChat;

var GetUserChat = _chat_models__WEBPACK_IMPORTED_MODULE_4__["ChatRequests"].GetUserChat;


let ChatsUserChatComponent = class ChatsUserChatComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(chatService, injector) {
        super(injector);
        this.chatService = chatService;
        this.userChatReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getUserChat = (request) => {
            this.chatService.getUserChat(request).pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_6__["CommonsService"].deserializeMap(GetUserChat.Response))
                .subscribe(value => {
                console.log(value);
                this.userChat = value;
                this.userChatReceived.emit(value);
            });
        };
    }
    initializeComponent() {
        this.makeServiceCallWithIdIfObjectNull(this.userChat, this.createRequestData(), this.getUserChat);
    }
    createRequestData(chat_id) {
        const request = new GetUserChat.Request();
        request.chatId = chat_id || this.chatId;
        return request;
    }
};
ChatsUserChatComponent.ctorParameters = () => [
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ChatsUserChatComponent.prototype, "chatId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", UserChat)
], ChatsUserChatComponent.prototype, "userChat", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ChatsUserChatComponent.prototype, "userChatReceived", void 0);
ChatsUserChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'chats-user-chat',
        template: __webpack_require__(/*! raw-loader!./chats-user-chat.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/components/chats-user-chat/chats-user-chat.component.html"),
        styles: [__webpack_require__(/*! ./chats-user-chat.component.scss */ "./src/app/chat/components/chats-user-chat/chats-user-chat.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], ChatsUserChatComponent);



/***/ }),

/***/ "./src/app/chat/components/chats-user-chats-by-dialog-id/chats-user-chats-by-dialog-id.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/chat/components/chats-user-chats-by-dialog-id/chats-user-chats-by-dialog-id.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY29tcG9uZW50cy9jaGF0cy11c2VyLWNoYXRzLWJ5LWRpYWxvZy1pZC9jaGF0cy11c2VyLWNoYXRzLWJ5LWRpYWxvZy1pZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/chat/components/chats-user-chats-by-dialog-id/chats-user-chats-by-dialog-id.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/chat/components/chats-user-chats-by-dialog-id/chats-user-chats-by-dialog-id.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ChatsUserChatsByDialogIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsUserChatsByDialogIdComponent", function() { return ChatsUserChatsByDialogIdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _chat_chat_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chat/chat.models */ "./src/app/chat/chat.models.ts");
/* harmony import */ var _chat_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chat/chat.service */ "./src/app/chat/chat.service.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");







var UserChat = _core_core_models__WEBPACK_IMPORTED_MODULE_3__["Chats"].UserChat;
var GetUserChatsByDialogId = _chat_chat_models__WEBPACK_IMPORTED_MODULE_4__["ChatRequests"].GetUserChatsByDialogId;
let ChatsUserChatsByDialogIdComponent = class ChatsUserChatsByDialogIdComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(chatService, injector) {
        super(injector);
        this.chatService = chatService;
        this.userChatsReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
        this.getUserChatsByDialogId(this.createRequestData());
    }
    createRequestData(dialog_id) {
        const request = new GetUserChatsByDialogId.Request();
        request.dialogId = dialog_id || this.dialogId;
        return request;
    }
    getUserChatsByDialogId(request) {
        this.chatService.getUserChatsByDialogId(request).pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_6__["CommonsService"].deserializeMap(UserChat))
            .subscribe(value => {
            this.user_chats = value;
            this.userChatsReceived.emit(value);
        });
    }
};
ChatsUserChatsByDialogIdComponent.ctorParameters = () => [
    { type: _chat_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ChatsUserChatsByDialogIdComponent.prototype, "dialogId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ChatsUserChatsByDialogIdComponent.prototype, "userChatsReceived", void 0);
ChatsUserChatsByDialogIdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'chats-user-chats-by-dialog-id',
        template: __webpack_require__(/*! raw-loader!./chats-user-chats-by-dialog-id.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/components/chats-user-chats-by-dialog-id/chats-user-chats-by-dialog-id.component.html"),
        styles: [__webpack_require__(/*! ./chats-user-chats-by-dialog-id.component.scss */ "./src/app/chat/components/chats-user-chats-by-dialog-id/chats-user-chats-by-dialog-id.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], ChatsUserChatsByDialogIdComponent);



/***/ }),

/***/ "./src/app/chat/components/chats-user-chats/chats-user-chats.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/chat/components/chats-user-chats/chats-user-chats.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY29tcG9uZW50cy9jaGF0cy11c2VyLWNoYXRzL2NoYXRzLXVzZXItY2hhdHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/chat/components/chats-user-chats/chats-user-chats.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/chat/components/chats-user-chats/chats-user-chats.component.ts ***!
  \********************************************************************************/
/*! exports provided: ChatsUserChatsComponent, ChatsUserChatsNoTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsUserChatsComponent", function() { return ChatsUserChatsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsUserChatsNoTemplateComponent", function() { return ChatsUserChatsNoTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/base.component */ "./src/app/core/components/base.component.ts");
/* harmony import */ var _chat_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chat/chat.service */ "./src/app/chat/chat.service.ts");
/* harmony import */ var _core_core_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/core.models */ "./src/app/core/core.models.ts");
/* harmony import */ var _chat_chat_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chat/chat.models */ "./src/app/chat/chat.models.ts");
/* harmony import */ var _core_commons_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/commons.service */ "./src/app/core/commons.service.ts");





var UserChat = _core_core_models__WEBPACK_IMPORTED_MODULE_4__["Chats"].UserChat;

var GetUserChats = _chat_chat_models__WEBPACK_IMPORTED_MODULE_5__["ChatRequests"].GetUserChats;

let ChatsUserChatsComponent = class ChatsUserChatsComponent extends _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(chatService, injector) {
        super(injector);
        this.chatService = chatService;
        this.userChatsReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    initializeComponent() {
        this.getUserChats(this.createRequestData());
    }
    createRequestData() {
        return new GetUserChats.Request();
    }
    getUserChats(request) {
        this.chatService
            .getUserChats(request)
            .pipe(_core_commons_service__WEBPACK_IMPORTED_MODULE_6__["CommonsService"].deserializeMap(UserChat))
            .subscribe((value) => {
            this.user_chats = value;
            this.userChatsReceived.emit(value);
        });
    }
};
ChatsUserChatsComponent.ctorParameters = () => [
    { type: _chat_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ChatsUserChatsComponent.prototype, "userChatsReceived", void 0);
ChatsUserChatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "chats-user-chats",
        template: __webpack_require__(/*! raw-loader!./chats-user-chats.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/components/chats-user-chats/chats-user-chats.component.html"),
        styles: [__webpack_require__(/*! ./chats-user-chats.component.scss */ "./src/app/chat/components/chats-user-chats/chats-user-chats.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], ChatsUserChatsComponent);

let ChatsUserChatsNoTemplateComponent = class ChatsUserChatsNoTemplateComponent extends ChatsUserChatsComponent {
};
ChatsUserChatsNoTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "chats-user-chats-no-template",
        template: __webpack_require__(/*! raw-loader!./chats-user-chats-no-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/components/chats-user-chats/chats-user-chats-no-template.component.html"),
        styles: [__webpack_require__(/*! ./chats-user-chats.component.scss */ "./src/app/chat/components/chats-user-chats/chats-user-chats.component.scss")]
    })
], ChatsUserChatsNoTemplateComponent);



/***/ }),

/***/ "./src/app/chat/components/chats-user-requests/chats-user-requests.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/chat/components/chats-user-requests/chats-user-requests.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY29tcG9uZW50cy9jaGF0cy11c2VyLXJlcXVlc3RzL2NoYXRzLXVzZXItcmVxdWVzdHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/chat/components/chats-user-requests/chats-user-requests.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/chat/components/chats-user-requests/chats-user-requests.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ChatsUserRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsUserRequestsComponent", function() { return ChatsUserRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatsUserRequestsComponent = class ChatsUserRequestsComponent {
    constructor() { }
    ngOnInit() { }
};
ChatsUserRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chats-user-requests',
        template: __webpack_require__(/*! raw-loader!./chats-user-requests.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/components/chats-user-requests/chats-user-requests.component.html"),
        styles: [__webpack_require__(/*! ./chats-user-requests.component.scss */ "./src/app/chat/components/chats-user-requests/chats-user-requests.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChatsUserRequestsComponent);



/***/ }),

/***/ "./src/app/chat/pages/chats-user-chat-page/chats-user-chat-page.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/chat/pages/chats-user-chat-page/chats-user-chat-page.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvcGFnZXMvY2hhdHMtdXNlci1jaGF0LXBhZ2UvY2hhdHMtdXNlci1jaGF0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/chat/pages/chats-user-chat-page/chats-user-chat-page.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/chat/pages/chats-user-chat-page/chats-user-chat-page.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ChatsUserChatPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsUserChatPageComponent", function() { return ChatsUserChatPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/page.component */ "./src/app/core/components/page.component.ts");



let ChatsUserChatPageComponent = class ChatsUserChatPageComponent extends _core_components_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"] {
    constructor(injector) {
        super(injector);
    }
    initializeComponent() {
        this.dialogItem$ = this.getRouterParameterObservable('dialogItem');
        this.chatDialogJid$ = this.getRouterParameterObservable('chatDialogJid');
        this.userChatAndOtherProfile$ = this.getRouterParameterObservable('userChatAndOtherProfile');
    }
};
ChatsUserChatPageComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
ChatsUserChatPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'chats-user-chat-page',
        template: __webpack_require__(/*! raw-loader!./chats-user-chat-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/pages/chats-user-chat-page/chats-user-chat-page.component.html"),
        styles: [__webpack_require__(/*! ./chats-user-chat-page.component.scss */ "./src/app/chat/pages/chats-user-chat-page/chats-user-chat-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], ChatsUserChatPageComponent);



/***/ }),

/***/ "./src/app/chat/pages/chats-user-chats-page/chats-user-chats-page.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/chat/pages/chats-user-chats-page/chats-user-chats-page.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvcGFnZXMvY2hhdHMtdXNlci1jaGF0cy1wYWdlL2NoYXRzLXVzZXItY2hhdHMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/chat/pages/chats-user-chats-page/chats-user-chats-page.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/chat/pages/chats-user-chats-page/chats-user-chats-page.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ChatsUserChatsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsUserChatsPageComponent", function() { return ChatsUserChatsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/page.component */ "./src/app/core/components/page.component.ts");



let ChatsUserChatsPageComponent = class ChatsUserChatsPageComponent extends _core_components_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"] {
    constructor(injector) {
        super(injector);
    }
    initializeComponent() {
    }
};
ChatsUserChatsPageComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
ChatsUserChatsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'chats-user-chats-page',
        template: __webpack_require__(/*! raw-loader!./chats-user-chats-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/pages/chats-user-chats-page/chats-user-chats-page.component.html"),
        styles: [__webpack_require__(/*! ./chats-user-chats-page.component.scss */ "./src/app/chat/pages/chats-user-chats-page/chats-user-chats-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], ChatsUserChatsPageComponent);



/***/ })

}]);
//# sourceMappingURL=default~chat-chat-module~events-events-module~user-profiles-user-profiles-module-es2015.js.map