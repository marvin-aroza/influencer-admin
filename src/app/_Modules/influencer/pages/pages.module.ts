import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { RequestComponent } from './request/request.component';
import { ConnectionsComponent } from './connections/connections.component';
import { ProfileComponent } from './profile/profile.component';
import { RejectedComponent } from './rejected/rejected.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RequestComponent,
    ConnectionsComponent,
    ProfileComponent,
    RejectedComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
