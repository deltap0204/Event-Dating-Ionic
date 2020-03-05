import {NgModule} from '@angular/core';
import {CoreModule} from '@core/core.module';
import {EventsPipe} from './events.pipe';
import {EventsCreateEventComponent} from '@events/components/events-create-event/events-create-event.component';
import {EventsEventDetailsComponent} from '@events/components/events-event-details/events-event-details.component';
import {EventsGetEventsComponent} from '@events/components/events-get-events/events-get-events.component';
import {EventsEventInvitesComponent} from '@events/components/events-event-invites/events-event-invites.component';
import {EventsEventInviteDetailsComponent} from '@events/components/events-event-invite-details/events-event-invite-details.component';
import {
    EventsCreateEventInviteComponent,
    EventsCreateEventInviteNoTemplateComponent
} from '@events/components/events-create-event-invite/events-create-event-invite.component';
import {ImagesModule} from '@images/images.module';
import {RouterModule} from '@angular/router';
import {EVENTS_ROUTES} from '@events/events.routes';
import {UsersModule} from '@users/users.module';
import {EventsEventPageComponent} from '@events/pages/events-event-page/events-event-page.component';
import {EventResolver} from '@events/events.resolver';
import {UserInterestsModule} from '@user-interests/user-interests.module';
import {EventsCreateEventModalComponent} from '@events/components/events-create-event-modal/events-create-event-modal.component';
// tslint:disable-next-line:max-line-length
import {EventsCreateEventModalContentComponent} from '@events/components/events-create-event-modal/events-create-event-modal-content/events-create-event-modal-content.component';
// tslint:disable-next-line:max-line-length
import {EventsCreateEventInviteModalContentComponent} from '@events/components/events-create-event-invite-modal/events-create-event-invite-modal-content/events-create-event-invite-modal-content.component';
// tslint:disable-next-line:max-line-length
import {EventsCreateEventInviteModalComponent} from '@events/components/events-create-event-invite-modal/events-create-event-invite-modal.component';
import {ChatModule} from '@chat/chat.module';
import {UserInterestsGetOrCreateWithDeleteComponent} from '@user-interests/components/user-interests-get-or-create/user-interests-get-or-create.component';
import {CategoriesModule} from '@categories/categories.module';



@NgModule({
    declarations: [EventsPipe,
        EventsCreateEventComponent,
        EventsEventDetailsComponent,
        EventsGetEventsComponent,
        EventsEventInvitesComponent,
        EventsEventInviteDetailsComponent,
        EventsCreateEventInviteComponent,
        EventsEventPageComponent,
        EventsCreateEventModalComponent,
        EventsCreateEventModalContentComponent,
        EventsCreateEventInviteModalContentComponent,
        EventsCreateEventInviteModalComponent,
        EventsCreateEventInviteNoTemplateComponent,
        UserInterestsGetOrCreateWithDeleteComponent
    ],
    imports: [
        CoreModule,
        ImagesModule,
        UsersModule,
        RouterModule.forChild(EVENTS_ROUTES),
        UserInterestsModule,
        ChatModule,
        CategoriesModule
    ],
    exports: [EventsPipe,
        EventsCreateEventComponent,
        EventsEventDetailsComponent,
        EventsGetEventsComponent,
        EventsEventInvitesComponent,
        EventsEventInviteDetailsComponent,
        EventsCreateEventInviteComponent,
        EventsEventPageComponent,
        EventsCreateEventModalComponent,
        EventsCreateEventModalContentComponent,
        EventsCreateEventInviteModalContentComponent,
        EventsCreateEventInviteModalComponent,
        EventsCreateEventInviteNoTemplateComponent,
        UserInterestsGetOrCreateWithDeleteComponent
    ],
    providers: [EventResolver],
    entryComponents: [
        EventsCreateEventModalContentComponent,
        EventsCreateEventInviteModalContentComponent]
})
export class EventsModule {
}
