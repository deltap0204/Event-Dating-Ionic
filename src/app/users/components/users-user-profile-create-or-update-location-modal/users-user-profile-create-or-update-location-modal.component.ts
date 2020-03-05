import { Component, Injector, Input, OnInit } from '@angular/core';
import { BaseModalComponent } from '@core/components/modals/base-modal.component';
import { Users } from '@core/core.models';
import { UsersUserProfileCreateOrUpdateLocationModalContentComponent } from '@users/components/users-user-profile-create-or-update-location-modal/users-user-profile-create-or-update-location-modal-content/users-user-profile-create-or-update-location-modal-content.component';
import UserProfile = Users.UserProfile;

@Component({
    selector: 'users-user-profile-create-or-update-location-modal',
    templateUrl: './users-user-profile-create-or-update-location-modal.component.html',
    styleUrls: ['./users-user-profile-create-or-update-location-modal.component.scss'],
})
export class UsersUserProfileCreateOrUpdateLocationModalComponent extends BaseModalComponent implements OnInit {


    @Input()
    userProfile: UserProfile;

    address_value: String;

    constructor(injector: Injector) {
        super(injector);
    }


    async openModal() {
        this.setModalData('userProfile', this.userProfile);
        await super.open(UsersUserProfileCreateOrUpdateLocationModalContentComponent);
    }

    initializeComponent() {
        this.getAddress().then(address => {
            this.address_value=address;
          })
          .catch(err => {
            console.log(err);
          });
    }


    getAddress(): Promise<String> {
        var lat = this.userProfile.location.latitude;
        var lng = this.userProfile.location.longitude;;
        var latlng = new google.maps.LatLng(lat, lng);
        var geocoder = geocoder = new google.maps.Geocoder();
        return new Promise((resolve, reject) => {
            geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        resolve(results[1].formatted_address);
                    } else {
                        reject(new Error(status));
                    }
                }
            });
        });
    }


}
