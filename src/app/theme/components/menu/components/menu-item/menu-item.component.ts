import { 
	Component, ViewEncapsulation, Input, Output, EventEmitter 
} from '@angular/core';

@Component({
	selector: 'dc-menu-item',
	encapsulation: ViewEncapsulation.None,
	styleUrls: ['./menu-item.component.scss'],
	templateUrl: './menu-item.component.html'
})
export class MenuItem {

	@Input() menuItem:any;
	@Input() child:boolean = false;

	@Output() itemHover = new EventEmitter<any>();
	@Output() toggleSubMenu = new EventEmitter<any>();

	public onHoverItem($event):void {
		this.itemHover.emit($event);
	}

	public onToggleSubMenu($event, item):boolean {
		$event.item = item;
		this.toggleSubMenu.emit($event);
		return false;
	}
}
