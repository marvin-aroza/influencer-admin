import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollabRoutingModule } from './collab-routing.module';
import { RequestComponent } from './request/request.component';
import { ConnectionComponent } from './connection/connection.component';


@NgModule({
  declarations: [
    RequestComponent,
    ConnectionComponent
  ],
  imports: [
    CommonModule,
    CollabRoutingModule
  ]
})
export class CollabModule { }
