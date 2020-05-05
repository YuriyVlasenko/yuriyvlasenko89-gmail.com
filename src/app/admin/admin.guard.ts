import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import routerPaths from '../routerPaths.const';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('AdminGuard');
    const currentUser = this.loginService.getCurrentUser();
    if (currentUser) {
      // authorised so return true
      return true;
    }
    console.log('AdminGuard currentUser', currentUser);
    // not logged in so redirect to login page with the return url
    this.router.navigate([routerPaths.LOGIN], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
}
