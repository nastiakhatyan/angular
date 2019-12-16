import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

	num:number = -1

	constructor(num:number) {
		this.num = num;
	}

	ngOnInit() {
	}


}
