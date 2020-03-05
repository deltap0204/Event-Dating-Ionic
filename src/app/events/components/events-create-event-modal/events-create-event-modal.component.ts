import {Component, Injector} from '@angular/core';
import {BaseModalComponent} from '@core/components/modals/base-modal.component';
// tslint:disable-next-line:max-line-length
import {EventsCreateEventModalContentComponent} from '@events/components/events-create-event-modal/events-create-event-modal-content/events-create-event-modal-content.component';

@Component({
  selector: 'events-create-event-modal',
  templateUrl: './events-create-event-modal.component.html',
  styleUrls: ['./events-create-event-modal.component.scss'],
})
export class EventsCreateEventModalComponent extends BaseModalComponent{


  constructor(injector: Injector) {
    super(injector);
  }

  async openModal() {
    await super.open(EventsCreateEventModalContentComponent);
  }

  initializeComponent() {
  }

}
