import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscrib',
  templateUrl: './subscrib.component.html',
  styleUrls: ['./subscrib.component.css']
})
export class SubscribComponent implements OnInit {

  message: any;
  constructor(private msv: MessageService) { }

  ngOnInit() {
    this.msv.get().subscribe((result) => {
        this.message = result;
    });
  }

}
