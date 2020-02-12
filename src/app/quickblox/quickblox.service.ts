import {Inject, Injectable} from '@angular/core';
import * as Bluebird from 'bluebird';
import {QuickbloxObjects, QuickbloxRequests} from '@quickblox/quickblox.models';
import {CommonsService} from '@core/commons.service';
import {flatMap, map} from 'rxjs/operators';
import {RestService} from '@core/http/rest.service';
import {Restangular} from 'ngx-restangular';
import {QuickbloxConstants} from '@quickblox/quickblox.constants';
import {of} from 'rxjs';
import {Files} from '@core/core.models';
import CreateQuickbloxMessageXml = QuickbloxRequests.CreateQuickbloxMessageXml;
import CreateQuickbloxSession = QuickbloxRequests.CreateQuickbloxSession;
import RetrieveDialogs = QuickbloxRequests.ListDialogs;
import GetOnlineUsers = QuickbloxRequests.GetOnlineUsers;
import ConnectToQuickbloxChat = QuickbloxRequests.ConnectToQuickbloxChat;
import ListMessages = QuickbloxRequests.ListMessages;
import DeleteQuickbloxMessage = QuickbloxRequests.DeleteQuickbloxMessage;
import CreateQuickbloxMessage = QuickbloxRequests.CreateQuickbloxMessage;
import GetUsers = QuickbloxRequests.GetUsers;
import Attachment = QuickbloxObjects.Attachment;
import CreateAndUploadFile = QuickbloxRequests.CreateAndUploadFile;
import UploadedFile = Files.UploadedFile;

@Injectable({
    providedIn: 'root'
})
export class QuickbloxService extends RestService {

    quickbloxService: Restangular;


    constructor(@Inject('QuickBlox') public quickBlox: any, restangular: Restangular) {
        super(restangular);
        this.quickbloxService = super.getService(QuickbloxConstants.QUICKBLOX_ENDPOINT);
    }

    connectToChat(request: ConnectToQuickbloxChat.Request) {
        const connect_to_chat = Bluebird.promisify(this.quickBlox.chat.connect,
            {context: this.quickBlox.chat});
        // @ts-ignore
        return CommonsService.promiseToObservable(connect_to_chat(CommonsService.serialize(request)));
    }

    listDialogs(params: RetrieveDialogs.Request) {
        const retrieve_dialogs = Bluebird.promisify(this.quickBlox.chat.dialog.list,
            {context: this.quickBlox.chat});
        // @ts-ignore
        return CommonsService.promiseToObservable(retrieve_dialogs(CommonsService.serialize(params)));
    }

    getOnlineUsers(param: GetOnlineUsers.Request) {
        const dialogJid = this.getJidFromDialogId(param.dailog_id);
        const listOnlineUsers = Bluebird.promisify(this.quickBlox.chat.muc.listOnlineUsers, {context: this.quickBlox.chat.muc});
        // @ts-ignore
        return CommonsService.promiseToObservable(listOnlineUsers(dialogJid));
    }

    chatDisconnect() {
        const chat_disconnect = Bluebird.promisify(this.quickBlox.chat.disconnect(),
            {context: this.quickBlox});
        // @ts-ignore
        return CommonsService.promiseToObservable(chat_disconnect);
    }

    createMessage(request: CreateQuickbloxMessage.Request) {
        const create_message = Bluebird.promisify(this.quickBlox.chat.message.create,
            {context: this.quickBlox.chat.message});
        // @ts-ignore
        return CommonsService.promiseToObservable(create_message(CommonsService.serialize(request)));
    }

    createMessageXml(request: CreateQuickbloxMessageXml.Request) {
        // @ts-ignore
        return CommonsService.objectToObservable(
            this.quickBlox.chat.send(this.getJidFromDialogId(request.dialog_id), CommonsService.serialize(request)));
    }

    private getJidFromDialogId(dialog_id: string) {
        return this.quickBlox.chat.helpers.getRoomJidFromDialogId(dialog_id);
    }

    joinGroup(dialogId: string) {
        const join_dialog = Bluebird.promisify(this.quickBlox.chat.muc.join,
            {context: this.quickBlox.chat.muc});
        // @ts-ignore
        return CommonsService.promiseToObservable(join_dialog(this.getJidFromDialogId(dialogId)));
    }

    getListMessage(request: ListMessages.Request) {
        const get_list_message = Bluebird.promisify(this.quickBlox.chat.message.list,
            {context: this.quickBlox.chat.message});
        // @ts-ignore
        return CommonsService.promiseToObservable(get_list_message(CommonsService.serialize(request)));
    }

    createSessionAndConnect() {
        return this.createQuickbloxSession()
            .pipe(flatMap(success => {
                const sessionResp = <CreateQuickbloxSession.Response>success;
                const connectRequest = new ConnectToQuickbloxChat.Request();
                connectRequest.userId = sessionResp.user_id;
                connectRequest.password = sessionResp.token;
                return this.connectToChat(connectRequest)
                    .pipe(map(success2 => success));
            }));
    }

    deleteMessage(request: DeleteQuickbloxMessage.Request) {
        const delete_message = Bluebird.promisify(this.quickBlox.chat.message.delete,
            {context: this.quickBlox.chat.message});
        // @ts-ignore
        return CommonsService.promiseToObservable(delete_message(request.messageId, CommonsService.serialize(request.params)));
    }

    getUsers(request: GetUsers.Request) {
        const get_users = Bluebird.promisify(this.quickBlox.users.get,
            {context: this.quickBlox.users});
        // @ts-ignore
        return CommonsService.promiseToObservable(get_users(CommonsService.serialize(request)));
    }

    createAndUploadFile(request: CreateAndUploadFile.Request) {
        const create_and_upload = Bluebird.promisify(this.quickBlox.content.createAndUpload, {context: this.quickBlox.content});
        // @ts-ignore
        return CommonsService.promiseToObservable(create_and_upload(CommonsService.serialize(request)));
    }

    setIsTypingStatus(dialog_id: string) {
        const set_is_typing = Bluebird.promisify(this.quickBlox.chat.sendIsTypingStatus,
            {context: this.quickBlox.chat});
        // @ts-ignore
        return CommonsService.promiseToObservable(set_is_typing(this.getJidFromDialogId(dialog_id)));
    }

    setIsStopTypingStatus(dialog_id: string) {
        const set_is_stop_typing = Bluebird.promisify(this.quickBlox.chat.sendIsStopTypingStatus,
            {context: this.quickBlox.chat});
        // @ts-ignore
        return CommonsService.promiseToObservable(set_is_stop_typing(this.getJidFromDialogId(dialog_id)));
    }

    createQuickbloxSession() {
        return this.quickbloxService.one('session')
            .customPOST({})
            .pipe(map((success: any) => {
                this.quickBlox.init(success.session.token, success.session.application_id);
                return success.session;
            }));
    }



    getFilePrivateUrl(attachment: Attachment) {
        const uploaded_file = new UploadedFile();
        uploaded_file.fileUploadUrl = this.quickBlox.content.publicUrl(attachment.uid);
        return of(uploaded_file);
    }

}
