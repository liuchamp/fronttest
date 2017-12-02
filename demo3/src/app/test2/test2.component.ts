import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
@Component({
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  changeRouter(){
    this.router.navigateByUrl("test1");
  }
}
