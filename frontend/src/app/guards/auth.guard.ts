import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../@core/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private router: Router, private tokenService: TokenService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
     |Observable<boolean | UrlTree>
     | Promise<boolean | UrlTree> 
     | boolean | UrlTree {
    if (this.tokenService.isLogged() && this.tokenService.userStorage.admin === true) {
      console.log('is admin')
      return true;
    }if (this.tokenService.isLogged() && this.tokenService.userStorage.admin === false) {
      console.log('is user')
      return this.router.navigate(['/']);
    }
    return this.router.navigate(['/login']);
  }
  
}
