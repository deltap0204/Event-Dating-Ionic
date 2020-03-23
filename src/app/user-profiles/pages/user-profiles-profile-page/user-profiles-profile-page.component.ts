import {Component, Injector, OnInit} from '@angular/core';
import {PageComponent} from '@core/components/page.component';

@Component({
  selector: 'user-profiles-profile-page',
  templateUrl: './user-profiles-profile-page.component.html',
  styleUrls: ['./user-profiles-profile-page.component.scss'],
})
export class UserProfilesProfilePageComponent extends PageComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  initializeComponent() {
  }
}
