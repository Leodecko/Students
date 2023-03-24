import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

  constructor(private _securityService: SecurityService,
    private _router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this._securityService.getRol() === 'admin'){
        return true;
      }
      this._router.navigate(['/login']);
      return false;
  }
  
}
