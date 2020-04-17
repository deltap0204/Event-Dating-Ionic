import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {QuickbloxObjects, QuickbloxRequests} from '@quickblox/quickblox.models';
import {CommonsService} from '@core/commons.service';
import {QuickbloxService} from '@quickblox/quickblox.service';
import ListMessages = QuickbloxRequests.ListMessages;
import QuickbloxMessage = QuickbloxObjects.QuickbloxMessage;

@Component({
    selector: 'quickblox-get-message-list',
    templateUrl: './quickblox-get-message-list.component.html',
    styleUrls: ['./quickblox-get-message-list.component.scss']
})
export class QuickbloxGetMessageListComponent extends BaseComponent {

    @Input()
    id: string;
    @Input()
    chatDialogId: string;
    @Input()
    sortDesc: boolean;
    @Input()
    sortAsc: boolean;
    @Input()
    dateSent: string;
    @Input()
    updatedAt: string;
    @Input()
    senderId: number;
    @Input()
    recipientId: number;
    @Input()
    limit: number;
    @Input()
    skip: number;

    @Output()
    quickbloxMessagesReceived = new EventEmitter<QuickbloxMessage[]>();
    @Output()
    quickbloxMessageAdded = new EventEmitter<QuickbloxMessage[]>();

    quickblox_messages: QuickbloxMessage[];

    constructor(protected quickbloxService: QuickbloxService, injector: Injector) {
        super(injector);
        this.quickbloxMessageAdded.subscribe(message => {
            this.addMessage(message);
        });
    }

    initializeComponent() {
        this.getMessages(this.createRequestData());
    }

    createRequestData(id?: string, chat_dialog_id?: string, sort_desc?: boolean, sort_asc?: boolean, date_sent?: string,
                      updated_at?: string, sender_id?: number, recipient_id?: number, limit?: number,
                      skip?: number): ListMessages.Request {
        const request = new ListMessages.Request();
        request.id = id || this.id;
        request.chat_dialog_id = chat_dialog_id || this.chatDialogId;
        request.sort_desc = (sort_desc || this.sortDesc) ? 'date_sent' : undefined;
        request.sort_asc = (sort_asc || this.sortAsc) ? 'date_sent' : undefined;
        request.date_sent = CommonsService.getTimestampFromMoment(
            CommonsService.getMomentFromDateTimeString(date_sent || this.dateSent));
        request.updated_at = CommonsService.getMomentFromDateTimeString(updated_at || this.updatedAt);
        request.sender_id = sender_id || this.senderId;
        request.recipient_id = recipient_id || this.recipientId;
        request.limit = limit || this.limit;
        request.skip = skip || this.skip;
        return request;
    }

    getMessages(request: ListMessages.Request) {
        this.quickbloxService.getListMessage(request)
            .pipe(CommonsService.deserializeMap(ListMessages.Response))
            .subscribe(list_messages => {
                this.quickblox_messages = list_messages.items;
                this.quickbloxMessagesReceived.emit(list_messages.items);
            });
    }

    addMessage(messages: QuickbloxMessage[]) {
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

    deleteMessage(messages: QuickbloxMessage[]) {
        // TODO: Complete implementation
    }
}

@Component({
    selector: 'quickblox-get-message-list-no-template',
    template: '',
    styleUrls: ['./quickblox-get-message-list.component.scss']
})
export class QuickbloxGetMessageListNoTemplateComponent extends QuickbloxGetMessageListComponent {

}

@Component({
    selector: 'quickblox-get-message-list-no-template-no-initialize',
    template: '',
    styleUrls: ['./quickblox-get-message-list.component.scss']
})
export class QuickbloxGetMessageListNoTemplateNoInitializeComponent extends QuickbloxGetMessageListComponent {

    initializeComponent() {
    }

}
