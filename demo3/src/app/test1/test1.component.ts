import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Person } from '../person';
import { ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    let dig: Person;
    let promise = new Promise(resolve => {
      setTimeout(() => {
        resolve(dig={
          age:10,
          name: 'dsaignsdai',
          location: 'iadgnaisdoif'
        });
      },2000);
    });
    promise.then(value => console.log(value));

    //以下是Observable的写法
    let stream1$ = new Observable(observer => {
      let timeout = setTimeout(() => {
          observer.next('observable timeout');
      }, 2000);

      return () => {
          clearTimeout(timeout);
      }
  });
  let disposable = stream1$.subscribe(value => console.log(value));

  //【第一个核心不同点来了】：Observable是可以中途取消的，而Promise一旦触发就不能取消了
  // setTimeout(() => {
  //       disposable.unsubscribe();
  //   }, 1000);

  let stream2$ = new Observable<number>( observe=>{
    let count = 0;
    let interval = setInterval(()=>{
      observe.next(count++);
    },1000);
    return ()=> {
      clearInterval(interval);
    }
  });
  // stream2$.subscribe(value=> console.log("Observable -->" + value ));
  stream2$.filter(value => value%2==0)
          .map(value =>value*value)
          .subscribe(value=> console.log('Fileter -->'+ value));
  }

  ngOnInit() {
  }

}
