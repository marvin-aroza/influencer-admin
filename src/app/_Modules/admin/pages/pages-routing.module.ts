import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule)
  },
  {
    path: 'user',
    loadChildren: () => import(`./user/user.module`).then(m => m.UserModule)
  },
  {
    path: 'influencer',
    loadChildren: () => import(`./influencers/influencers.module`).then(m => m.InfluencersModule)
  },
  {
    path: 'collab',
    loadChildren: () => import(`./collab/collab.module`).then(m => m.CollabModule)
  },
  {
    path: '',
    loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
