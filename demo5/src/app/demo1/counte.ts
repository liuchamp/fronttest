import { Component, OnInit } from '@angular/core';

let instances = 0;

@Component({
    selector: 'counter',
    template: `<h1>{{this.id}}</h1>`
})

export class NameComponent implements OnInit {
    id: number;
    
    constructor() {
      this.id = ++instances;
    }

    ngOnInit() { }
}