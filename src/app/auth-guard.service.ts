import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Auth } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  	constructor(private auth: Auth, private router: Router) {}

  	canActivate() {
    	// if (!this.auth.loggedIn()) {
    	// 	this.auth.login();
     //  		this.router.navigate(['']);
     //  		return false;
    	// }
	    if (window.location.pathname == '/user-administration'){
	    	this.router.navigate(['/user-administration']);
	    }
	    return true;
    }	

}