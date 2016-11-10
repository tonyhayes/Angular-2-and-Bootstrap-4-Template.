// app/auth.service.ts

import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import Auth0Lock from 'auth0-lock';

@Injectable()
export class Auth {
  	// Configure Auth0
  	lock = new Auth0Lock('YOUR_CLIENT_ID', 'YOUR_AUTH0_DOMAIN', {});

  	constructor() {
		// Add callback for lock `authenticated` event
		this.lock.on("authenticated", (authResult) => {
	  		localStorage.setItem('id_token', authResult.idToken);
		});
  	}

  	public login() {
		// Call the show method to display the widget.
		this.lock.show();
  	};

  	public authenticated() {
		// Check if there's an unexpired JWT
		// This searches for an item in localStorage with key == 'id_token'
		return tokenNotExpired();
  	};

  	public logout() {
		// Remove token from localStorage
		localStorage.removeItem('id_token');
  	};
}