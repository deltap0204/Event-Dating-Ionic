import {Component, Injector, OnInit} from '@angular/core';
import {PageComponent} from '@core/components/page.component';

@Component({
    selector: 'chats-user-chats-page',
    templateUrl: './chats-user-chats-page.component.html',
    styleUrls: ['./chats-user-chats-page.component.scss'],
})
export class ChatsUserChatsPageComponent extends PageComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
