import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import guards
import { AuthGuard } from 'src/app/_Core/Guards/auth.guard';
import { RedirectGuard } from 'src/app/_Core/Guards/redirect.guard';
//header from shared
import { HeaderComponent } from 'src/app/_Shared/Components/Admin/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    canActivate: [AuthGuard],
        loadChildren: () => import(`./pages/pages.module`).then(m => m.PagesModule)
      
  },
  {
    path: 'login',
    canActivate: [RedirectGuard],
    loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
