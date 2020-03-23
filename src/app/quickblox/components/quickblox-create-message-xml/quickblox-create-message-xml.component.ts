import {Component, EventEmitter, Injector, Input, Output, ViewChild} from '@angular/core';
import {QuickbloxService} from '@quickblox/quickblox.service';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {CREATE_MESSAGE_MODEL} from '@quickblox/quickblox.forms.models';
import {QuickbloxObjects, QuickbloxRequests} from '@quickblox/quickblox.models';
import {CommonsService} from '@core/commons.service';
import {QuickbloxCreateAndUploadFileResponseToAttachmentPipe} from '@quickblox/quickblox.pipe';
// tslint:disable-next-line:max-line-length
import {QuickbloxCreateAndUploadFileComponent} from '@quickblox/components/quickblox-create-and-upload-file/quickblox-create-and-upload-file.component';
import CreateQuickbloxMessageExtension = QuickbloxRequests.CreateQuickbloxMessageXml.CreateQuickbloxMessageExtension;
import CreateQuickbloxMessageXml = QuickbloxRequests.CreateQuickbloxMessageXml;
import Attachment = QuickbloxObjects.Attachment;

@Component({
    selector: 'quickblox-create-message-xml',
    templateUrl: './quickblox-create-message-xml.component.html',
    styleUrls: ['./quickblox-create-message-xml.component.scss']
})
export class QuickbloxCreateMessageXmlComponent extends FormComponent {

    @Input()
    dialogId: string;
    @Input()
    type: string;
    @Input()
    attachments: Attachment | Attachment[];


    @Output()
    quickbloxMessageCreated = new EventEmitter<string>();
    @Output()
    quickbloxMessageCreateError = new EventEmitter();

    quickblox_create_and_upload_file_response_to_attachment_pipe = new QuickbloxCreateAndUploadFileResponseToAttachmentPipe();

    @ViewChild(QuickbloxCreateAndUploadFileComponent, {static: false})
    quickblox_create_and_upload: QuickbloxCreateAndUploadFileComponent;

    constructor(protected quickbloxService: QuickbloxService, injector: Injector) {
        super(injector);
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

    getFormModel(): DynamicFormControlModel[] {
        return CREATE_MESSAGE_MODEL;
    }

    createRequestData(dialog_id?: string, body?: string, type?: string,
                      attachments?: Attachment | Attachment[]): CreateQuickbloxMessageXml.Request {
        const request = new CreateQuickbloxMessageXml.Request();
        request.dialog_id = dialog_id || this.dialogId;
        request.body = body || this.getInputModelValueAsString('message');
        request.type = type || this.type || 'groupchat';
        const extension = new CreateQuickbloxMessageExtension();
        extension.save_to_history = 1;
        extension.attachments = CommonsService.convertToArray(attachments || this.attachments);

        request.extension = extension;
        request.markable = 1;
        request.send_to_chat = 1;
        return request;
    }

    createMessage(request: CreateQuickbloxMessageXml.Request) {
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
        } else {
            this.quickbloxService.setIsTypingStatus(this.dialogId);
        }
    }

}
