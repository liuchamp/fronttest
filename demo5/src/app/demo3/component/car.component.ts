import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input() licensePlate: number;
  @Input() brand?: string;
  @Input() c?: number;
  @Input() d?: string;


  constructor() { 
    console.debug(this);
  }

  ngOnInit() {
    
  }

}
