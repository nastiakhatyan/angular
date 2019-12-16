import { Component, OnInit } from '@angular/core';
import { EvenComponent } from '../even/even.component'; 
import { OddComponent } from '../odd/odd.component'; 

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

	evenList:Array<EvenComponent> = [];
	oddList:Array<OddComponent> = [];

	flag:boolean = false;


  constructor() { }

  ngOnInit() {
  }

  start() {
  	this.flag = true;
  	this.create();
  }

  stop() {
  	this.flag = false;
  }

  create() {
  	if (this.flag) {
  		var num = Math.floor(Math.random() * 100) + 1;
  		if (num % 2 == 0) {
  			this.evenList.push(new EvenComponent(num));
  		}
  		else {
  			this.oddList.push(new OddComponent(num));
  		}
  	}

  	if (this.flag) {
  		setTimeout(() => {this.create()}, 1000);
  	}

  }

}
