import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendIdPageRoutingModule } from './send-id-routing.module';

import { SendIdPage } from './send-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendIdPageRoutingModule
  ],
  declarations: [SendIdPage]
})
export class SendIdPageModule {}
