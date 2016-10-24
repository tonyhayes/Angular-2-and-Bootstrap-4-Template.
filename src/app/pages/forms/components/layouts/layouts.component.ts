import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  	moduleId: module.id,
  	selector: 'layouts',
  	encapsulation: ViewEncapsulation.None,
  	styles: [],
  	templateUrl: 'layouts.html',
})
export class Layouts {

  	public defaultPicture = 'assets/img/theme/no-photo.png';
  	public profile:any = {
		picture: 'assets/img/app/profile/Nasta.png'
  	};
  	public uploaderOptions:any = {
		// url: 'http://website.com/upload'
  	};

  	constructor() {}

  	ngOnInit() {}
}
