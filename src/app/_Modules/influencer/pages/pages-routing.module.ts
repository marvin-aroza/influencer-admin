import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionsComponent } from './connections/connections.component';
import { ProfileComponent } from './profile/profile.component';
import { RejectedComponent } from './rejected/rejected.component';
import { RequestComponent } from './request/request.component';

const routes: Routes = [
  {
    path: 'collab/request',
    component: RequestComponent
  },
  {
    path: 'collab/connection',
    component: ConnectionsComponent
  },
  {
    path: 'collab/rejected',
    component: RejectedComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: '',
    redirectTo: 'collab/request'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
