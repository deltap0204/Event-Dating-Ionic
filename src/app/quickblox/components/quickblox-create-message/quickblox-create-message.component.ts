import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {CREATE_MESSAGE_MODEL} from '@quickblox/quickblox.forms.models';
import {QuickbloxService} from '@quickblox/quickblox.service';
import {FormComponent} from '@core/components/form.component';
import {QuickbloxObjects, QuickbloxRequests} from '@quickblox/quickblox.models';
import {CommonsService} from '@core/commons.service';
import CreateQuickbloxMessage = QuickbloxRequests.CreateQuickbloxMessage;
import QuickbloxMessage = QuickbloxObjects.QuickbloxMessage;

@Component({
    selector: 'quickblox-create-message',
    templateUrl: './quickblox-create-message.component.html',
    styleUrls: ['./quickblox-create-message.component.scss']
})
export class QuickbloxCreateMessageComponent extends FormComponent {

    @Input() message: string;
    @Input() chatDialogId: string;
    @Input() sendToChat: number;
    @Input() saveToHistory: number;
    @Input() markable: number;

    @Output()
    quickbloxMessageCreated = new EventEmitter<QuickbloxMessage>();
    @Output()
    quickbloxMessageCreateError = new EventEmitter();

    @Output()
    qiukbloxTypingListener = new EventEmitter<string>();

    constructor(public quickbloxService: QuickbloxService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return CREATE_MESSAGE_MODEL;
    }

    createRequestData(chat_dialog_id?: string, message?: string, send_to_chat?: number, markable?: number,
                      save_to_history?: number): CreateQuickbloxMessage.Request {
        const request = new CreateQuickbloxMessage.Request();
        request.chat_dialog_id = chat_dialog_id || this.chatDialogId;
        request.message = message || this.getInputModelValueAsString('message');
        request.send_to_chat = send_to_chat || this.sendToChat || 1; // default 1
        request.markable = markable || this.markable || 1; // default 1
        request.save_to_history = save_to_history || this.saveToHistory || 1; // default 1
        return request;
    }

    createMessage(request: CreateQuickbloxMessage.Request) {
        this.quickbloxService.createMessage(request)
            .pipe(CommonsService.deserializeMap(CreateQuickbloxMessage.Response))
            .subscribe(message => {
                this.quickbloxMessageCreated.emit(message);
            }, error => {
                this.quickbloxMessageCreateError.emit(error);
            });
    }

}
