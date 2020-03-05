import {Component, Injector} from '@angular/core';
import {PageComponent} from '@core/components/page.component';
import {Observable} from 'rxjs';
import {Events} from '@core/core.models';
import Event = Events.Event;

@Component({
    selector: 'events-event-page',
    templateUrl: './events-event-page.component.html',
    styleUrls: ['./events-event-page.component.scss'],
})
export class EventsEventPageComponent extends PageComponent {


    event$: Observable<Event>;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.event$ = this.getRouterParameterObservable('event');
    }
}
