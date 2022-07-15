import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfluencerRedirectGuard } from 'src/app/_Core/Guards/influencer-redirect.guard';
import { InfluencerGuard } from 'src/app/_Core/Guards/influencer.guard';
import { HeaderComponent } from 'src/app/_Shared/Components/Admin/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    canActivate: [InfluencerGuard],
    loadChildren: () => import(`./pages/pages.module`).then(m => m.PagesModule)
  },
  {
    path: 'login',
    canActivate: [InfluencerRedirectGuard],
    loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfluencerRoutingModule { }
