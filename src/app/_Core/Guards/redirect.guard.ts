import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
// service imports
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let userToken = this.authService.getToken();
      let role = this.authService.getRole();
      if(!userToken && (role !== 'Admin' || role === 'Admin')) {
        return true;
      } else if(userToken && role !== 'Admin') {
        return true
      }
      return this.router.navigate(['/admin']);

  }
  
}
