import { Injectable } from "@angular/core";
import {
    CanActivate,
    CanLoad,
    Route,
    UrlSegment,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from "@angular/router";

import { Observable } from "rxjs";
import { tap } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanLoad, CanActivate {

    constructor(
        private autService: AuthService,
        private router: Router
        ) {

    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        
            return this.autService.verifieAuth()
                .pipe(
                    tap( authenticate => {
                        if (! authenticate){
                            this.router.navigate(['./auth/login'])
                        }
                    })
                )           
    }

    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

            return this.autService.verifieAuth()
            .pipe(
                tap( authenticate => {
                    if (! authenticate){
                        this.router.navigate(['./auth/login'])
                    }
                })
            )
    }
} 