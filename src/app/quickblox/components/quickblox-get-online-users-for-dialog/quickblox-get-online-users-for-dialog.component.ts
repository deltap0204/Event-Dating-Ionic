import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {QuickbloxService} from '@quickblox/quickblox.service';
import {QuickbloxRequests} from '@quickblox/quickblox.models';
import GetOnlineUsers = QuickbloxRequests.GetOnlineUsers;

@Component({
    selector: 'quickblox-get-online-users-for-dialog',
    templateUrl: './quickblox-get-online-users-for-dialog.component.html',
    styleUrls: ['./quickblox-get-online-users-for-dialog.component.scss']
})
export class QuickbloxGetOnlineUsersForDialogComponent extends BaseComponent {

    @Input() dialogId: string;

    @Output() onReceivingOnlineUsers = new EventEmitter<boolean>();

    constructor(public quickbloxService: QuickbloxService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        // this.getOnlineUsers(this.createRequestData());
    }

    createRequestData(dialog_id?: string): GetOnlineUsers.Request {
        const request = new GetOnlineUsers.Request();
        request.dailog_id = dialog_id || this.dialogId;
        return request;
    }

    getOnlineUsers(request: GetOnlineUsers.Request) {
        this.quickbloxService.getOnlineUsers(request)
            .subscribe(result => {
                this.onReceivingOnlineUsers.emit(true);
            }, error => {
                this.onReceivingOnlineUsers.emit(error);
            });
    }
}
