import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
// service imports
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InfluencerRedirectGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let userToken = this.authService.getToken();
      let role = this.authService.getRole();
      if(!userToken && (role !== 'Influencer' || role === 'Influencer')) {
        return true;
      } else if(userToken && role !== 'Influencer') {
        return true
      }
      return this.router.navigate(['/influencer']);
  }

}
