import {Component, Injector, OnInit} from '@angular/core';
import {PageComponent} from '@core/components/page.component';

@Component({
  selector: 'user-profiles-chats-page',
  templateUrl: './user-profiles-chats-page.component.html',
  styleUrls: ['./user-profiles-chats-page.component.scss'],
})
export class UserProfilesChatsPageComponent extends PageComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  initializeComponent() {
  }
}
