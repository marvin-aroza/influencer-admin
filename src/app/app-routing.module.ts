import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import(`./_Modules/admin/admin.module`).then(m => m.AdminModule)
  },
  {
    path: '',
    loadChildren: () => import(`./_Modules/user/user.module`).then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
