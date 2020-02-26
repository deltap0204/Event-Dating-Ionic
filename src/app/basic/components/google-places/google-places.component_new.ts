/// <reference types="@types/googlemaps" />
import { Component,NgZone, ViewChild, EventEmitter, Output, OnInit, AfterViewInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';



@Component({
  selector: 'AutocompleteComponent',
  template: `<input 
  ngx-google-places-autocomplete   
  [(ngModel)]="autocompleteInput"
  (onAddressChange)="handleAddressChange($event)"
  placeholder="Location"
  #addresstext 
  style="font-weight:bold;"
  class="w-100 pr-3 pl-3 br-2 mt-2 mb-2 h-3 font-primary-dark placeholder-dark native-input sc-ion-input-md" 
  />`,
})
export class AutocompleteComponent implements OnInit, AfterViewInit {




  @Input() adressType: string;
    @Output() setAddress: EventEmitter<any> = new EventEmitter();
    @ViewChild('addresstext', {static: false}) addresstext: any;

    autocompleteInput: string;
    queryWait: boolean;

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.getPlaceAutocomplete();
    }

    private getPlaceAutocomplete() {

       // alert('hihh');
        const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
            {
                componentRestrictions: { country: 'US' },
                types: [this.adressType]  // 'establishment' / 'address' / 'geocode'
            });
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            const place = autocomplete.getPlace();
            this.invokeEvent(place);
        });
    }

    invokeEvent(place: Object) {
        this.setAddress.emit(place);
    }

  

   


}
