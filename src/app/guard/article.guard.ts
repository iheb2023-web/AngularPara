import { CanActivate, ActivatedRouteSnapshot,  RouterStateSnapshot} from '@angular/router';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',  
})
export class articletGuard implements CanActivate {

  constructor(private authServ: AuthService, private rout: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authServ.testerAdmin() == true) {
      return true;
    } else {
      this.rout.navigate(['forbidden']);
      return false;
    }
  }
}
