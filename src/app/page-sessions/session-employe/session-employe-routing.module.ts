import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionEmployePage } from './session-employe.page';

const routes: Routes = [
  {
    path: '',
    component: SessionEmployePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionEmployePageRoutingModule {}
