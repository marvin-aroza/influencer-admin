import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollabRoutingModule } from './collab-routing.module';
import { RequestComponent } from './request/request.component';
import { ConnectionComponent } from './connection/connection.component';
import { RejectedComponent } from './rejected/rejected.component';


@NgModule({
  declarations: [
    RequestComponent,
    ConnectionComponent,
    RejectedComponent
  ],
  imports: [
    CommonModule,
    CollabRoutingModule
  ]
})
export class CollabModule { }
