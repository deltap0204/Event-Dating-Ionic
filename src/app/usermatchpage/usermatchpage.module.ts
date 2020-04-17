import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UsermatchpagePage } from './usermatchpage.page';

const routes: Routes = [
  {
    path: '',
    component: UsermatchpagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsermatchpagePage]
})
export class UsermatchpagePageModule {}
