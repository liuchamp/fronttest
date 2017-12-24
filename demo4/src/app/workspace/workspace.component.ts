import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('./assets/test.json').subscribe(res => {
      console.log(res);
      console.log(res['language']);
    });
  }

}
