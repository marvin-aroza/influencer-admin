import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
// service imports
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InfluencerGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let userToken = this.authService.getToken();
      let role = this.authService.getRole();
      if(userToken !== null && role === 'Influencer') {
        return true;
      }
      return this.router.navigate(['/influencer/login']);
  }

}
