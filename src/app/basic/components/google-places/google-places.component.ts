/// <reference types="@types/googlemaps" />
import { Component,Injector, ViewChild, EventEmitter, Output, Input , AfterViewInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {BaseComponent} from '@core/components/base.component';



@Component({
  selector: 'AutocompleteComponent',
  templateUrl:'./google-places.component.html',
  styleUrls:['./google-places.component.scss']
})
export class AutocompleteComponent extends BaseComponent implements AfterViewInit{

    constructor(injector: Injector) {
        super(injector);
       
       
    }

    initializeComponent() {
       
    }

    @Output() setAddress: EventEmitter<Object> = new EventEmitter();
    @ViewChild('addresstext', {static: false}) addresstext: any;

    autocompleteInput: string;
    queryWait: boolean;
   

   /* ngOnInit() {
    }*/

    ngAfterViewInit() {
        this.getPlaceAutocomplete();
    }
    

    private getPlaceAutocomplete() {

        const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
            {
                componentRestrictions: { country: 'US' },
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
