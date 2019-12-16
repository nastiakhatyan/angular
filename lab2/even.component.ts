import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

	num:number = -1

	constructor(num:number) {
		this.num = num;
	}

	ngOnInit() {
	}

}
