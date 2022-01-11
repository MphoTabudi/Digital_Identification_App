import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendIdPage } from './send-id.page';

const routes: Routes = [
  {
    path: '',
    component: SendIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendIdPageRoutingModule {}
