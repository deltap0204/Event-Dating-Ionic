import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {QuickbloxService} from '@quickblox/quickblox.service';
import {QuickbloxRequests} from '@quickblox/quickblox.models';
import {CommonsService} from '@core/commons.service';
import GetUsers = QuickbloxRequests.GetUsers;

@Component({
    selector: 'quickblox-get-users',
    templateUrl: './quickblox-get-users.component.html',
    styleUrls: ['./quickblox-get-users.component.scss']
})
export class QuickbloxGetUsersComponent extends BaseComponent {

    @Input() email: string;
    @Input() id: string;

    @Output() userDetailsReceived = new EventEmitter<GetUsers.Response>();

    user_details: GetUsers.Response;

    constructor(public quickbloxService: QuickbloxService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.getUsers(this.createRequestData());
    }

    createRequestData(email?: string, id?: string): GetUsers.Request {
        const request = new GetUsers.Request();
        request.email = email || this.email;
        request.id = id || this.id;
        return request;
    }

    getUsers(request: GetUsers.Request) {
        this.quickbloxService.getUsers(request)
            .pipe(CommonsService.deserializeMap(GetUsers.Response))
            .subscribe(user_details => {
                this.user_details = user_details;
                this.userDetailsReceived.emit(user_details);
            });
    }
}
