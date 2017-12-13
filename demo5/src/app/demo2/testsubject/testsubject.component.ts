import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-testsubject',
  templateUrl: './testsubject.component.html',
  styleUrls: ['./testsubject.component.css']
})
export class TestsubjectComponent implements OnInit {

  currentmessages: any;
  constructor(private message: MessageService) {
 
    
   }

  ngOnInit() {
  }


  sendMessage() {

    this.message.send(this.currentmessages);
  }
}
