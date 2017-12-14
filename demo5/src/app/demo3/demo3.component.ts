import { Car } from './util/types';
import { Component, OnInit } from '@angular/core';

import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {

  cars: Car[] = [];
  car: Car;
  constructor(private http: Http) {     
    this.http.get('app/demo3/util/data/car.json').subscribe( (res: Response) => {
      console.log(res.json());
    });
    
  
    console.log(this.cars);
  }

  ngOnInit() {
  }

}
