import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfluencersRoutingModule } from './influencers-routing.module';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    ListComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    InfluencersRoutingModule
  ]
})
export class InfluencersModule { }
