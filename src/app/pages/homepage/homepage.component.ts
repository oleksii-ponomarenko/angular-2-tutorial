import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'homepage',
	templateUrl: 'homepage.component.html'
})
export class HomepageComponent implements OnInit {
	title : string = 'It is a homepage!';

	constructor() {
	}

	ngOnInit() { }
};