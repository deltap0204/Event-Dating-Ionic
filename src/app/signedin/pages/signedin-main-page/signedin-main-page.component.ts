import {Component, Injector, OnInit} from '@angular/core';
import {PageComponent} from '@core/components/page.component';

@Component({
  selector: 'signedin-main-page',
  templateUrl: './signedin-main-page.component.html',
  styleUrls: ['./signedin-main-page.component.scss'],
})
export class SignedinMainPageComponent extends PageComponent{


  constructor(injector: Injector) {
    super(injector);
  }

  initializeComponent() {
  }


}
