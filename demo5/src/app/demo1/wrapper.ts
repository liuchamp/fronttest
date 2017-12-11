import { Component } from '@angular/core';

@Component({
  selector: 'wrapper',
  template: `
    <div class="box">
      <div>diasdigiaofidssf </div>
      <ng-content></ng-content>
    </div>
  `
})
export class Wrapper { }
/**
 * ng-content指令，隐藏了这个标签下的子组件。和<router-outlet></router-outlet> 的功能类似，可以在页面中显示子组件的页面内容。
 * 使用的好处是提高了代码的对外不可见性，其中的不好之处是，是的代码产生了很多歧义，是的开发调试出现问题。
 */