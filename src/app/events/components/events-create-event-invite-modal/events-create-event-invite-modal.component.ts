import {Component, Injector, Input} from '@angular/core';
import {BaseModalComponent} from '@core/components/modals/base-modal.component';
import {Events} from '@core/core.models';
// tslint:disable-next-line:max-line-length
import {EventsCreateEventInviteModalContentComponent} from '@events/components/events-create-event-invite-modal/events-create-event-invite-modal-content/events-create-event-invite-modal-content.component';
import Event = Events.Event;

@Component({
    selector: 'events-create-event-invite-modal',
    templateUrl: './events-create-event-invite-modal.component.html',
    styleUrls: ['./events-create-event-invite-modal.component.scss'],
})
export class EventsCreateEventInviteModalComponent extends BaseModalComponent {

    @Input()
    event: Event;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

  async openModal() {
    this.setModalData('event', this.event);
    await super.open(EventsCreateEventInviteModalContentComponent);
  }


}
