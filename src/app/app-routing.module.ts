import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './_Shared/Components/landing/landing.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import(`./_Modules/admin/admin.module`).then(m => m.AdminModule)
  },
  {
    path: 'influencer',
    loadChildren: () => import(`./_Modules/influencer/influencer.module`).then(m => m.InfluencerModule)
  },
  {
    path: '',
    component: LandingComponent
  }
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'admin'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
