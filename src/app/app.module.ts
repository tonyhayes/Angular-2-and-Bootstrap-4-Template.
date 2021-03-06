import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule }  from '@angular/http';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { Auth }              from './auth.service';
import { AuthGuard } from './auth-guard.service';

/*
 * Auth0 helper library
 */
import { AUTH_PROVIDERS }      from 'angular2-jwt';
/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { routing } from './app.routing';
import { NgaModule } from './theme/nga.module';


// App is our top level component
import { App } from './app.component';
import { AppState, InteralStateType } from './app.service';
import { GlobalState } from './global.state';
import { PagesModule } from './pages/pages.module';

//Redux data management
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import reducer from './reducers';
import { QuestionActions, UserAdministrationActions } from './actions';
import { QuestionService, UserAdministrationService } from './services';
import { QuestionEffects, UserAdministrationEffects } from './effects';


// Application wide providers
const APP_PROVIDERS = [
	AppState,
	GlobalState,
	QuestionService, UserAdministrationService, 
	QuestionActions, UserAdministrationActions,
	Auth,
	AuthGuard
];

type StoreType = {
	state: InteralStateType,
	restoreInputValues: () => void,
	disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
	bootstrap: [App],
	declarations: [
		App
	],
	imports: [ // import Angular's modules
		BrowserModule,
		RouterModule,
    	HttpModule,
    	NgaModule.forRoot(),
		PagesModule,
		routing,
    	StoreModule.provideStore(reducer),
    	EffectsModule.run(QuestionEffects),
    	EffectsModule.run(UserAdministrationEffects),
	 ],
	providers: [ // expose our Services and Providers into Angular's dependency injection
		ENV_PROVIDERS,
		APP_PROVIDERS,
		AUTH_PROVIDERS
	]
})

export class AppModule {

	constructor(public appRef: ApplicationRef, public appState: AppState) {
	}

	hmrOnInit(store: StoreType) {
		if (!store || !store.state) return;
		console.log('HMR store', JSON.stringify(store, null, 2));
		// set state
		this.appState._state = store.state;
		// set input values
		if ('restoreInputValues' in store) {
			let restoreInputValues = store.restoreInputValues;
			setTimeout(restoreInputValues);
		}
		this.appRef.tick();
		delete store.state;
		delete store.restoreInputValues;
	}

	hmrOnDestroy(store: StoreType) {
		const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
		// save state
		const state = this.appState._state;
		store.state = state;
		// recreate root elements
		store.disposeOldHosts = createNewHosts(cmpLocation);
		// save input values
		store.restoreInputValues = createInputTransfer();
		// remove styles
		removeNgStyles();
	}

	hmrAfterDestroy(store: StoreType) {
		// display new elements
		store.disposeOldHosts();
		delete store.disposeOldHosts;
	}
}
