import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './Components/Admin/header/header.component';
import { SidebarComponent } from './Components/Admin/sidebar/sidebar.component';
import { FooterComponent } from './Components/Admin/footer/footer.component';
import { LandingComponent } from './Components/landing/landing.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
