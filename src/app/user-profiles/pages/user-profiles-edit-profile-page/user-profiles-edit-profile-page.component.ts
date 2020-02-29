import { Component, Injector } from '@angular/core';
import { PageComponent } from '@core/components/page.component';

@Component({
  selector: 'user-profiles-edit-profile-page',
  templateUrl: './user-profiles-edit-profile-page.component.html',
  styleUrls: ['./user-profiles-edit-profile-page.component.scss'],
})
export class UserProfilesEditProfilePageComponent extends PageComponent {


  constructor(injector: Injector) {
    super(injector);
  }

  initializeComponent() {
  }


}