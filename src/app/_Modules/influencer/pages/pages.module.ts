import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { RequestComponent } from './request/request.component';
import { ConnectionsComponent } from './connections/connections.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    RequestComponent,
    ConnectionsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
