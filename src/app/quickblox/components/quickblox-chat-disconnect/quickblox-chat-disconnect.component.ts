import {Component, EventEmitter, Injector, Output} from '@angular/core';
import {QuickbloxService} from '@quickblox/quickblox.service';
import {BaseComponent} from '@core/components/base.component';

@Component({
    selector: 'quickblox-chat-disconnect',
    templateUrl: './quickblox-chat-disconnect.component.html',
    styleUrls: ['./quickblox-chat-disconnect.component.scss']
})
export class QuickbloxChatDisconnectComponent extends BaseComponent {

    @Output() chatDisconnected = new EventEmitter<boolean>();

    constructor(public quickbloxService: QuickbloxService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    disconnectChat() {
        this.quickbloxService.chatDisconnect()
          .subscribe(success => {
              this.chatDisconnected.emit(true);
          });
    }
}
