import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { RequestComponent } from './request/request.component';

const routes: Routes = [
  {
    path: 'request',
    component: RequestComponent
  },
  {
    path: 'connection',
    component: ConnectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollabRoutingModule { }
