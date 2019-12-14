import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
     
  constructor(private authService: AuthService, private router: Router) {}
     
     canActivate(): Observable<boolean> {
        return this.authService.isAuthenticated().pipe(map(
          auth => {
            if(auth) {
              return true
            }
            this.router.navigate(['/login'])
            return false
          }
        ))
     }
}
