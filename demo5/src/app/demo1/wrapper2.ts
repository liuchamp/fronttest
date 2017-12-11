import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'wrapper2',
    template: `
    <div class="box red">
    <ng-content></ng-content>
  </div>
  <div class="box blue">
    <ng-content select="counter"></ng-content>
  </div>`,
  styles: [`
  .red {background: red;}
  .blue {background: blue;}
  `]
})

export class Wapper2Component implements OnInit {
    constructor() { }

    ngOnInit() { }
}
/**
 * 有时你希望将包装器的不同子项投影到模板的不同部分。为了处理这个问题，<ng-content> 支持一个 select 属性，可以让你在特定的地方投射具体的内容。该属性支持 CSS 选择器（my-element，.my-class，[my-attribute]，...）来匹配你想要的内容。如果 ng-content 上没有设置 select 属性，它将接收全部内容，或接收不匹配任何其他 ng-content 元素的内容。
 */

 /**
  *有时你的内部组件会被隐藏在另一个更大的组件中。有时你只需要将其包装在额外的容器中即可应用 ngIf 或 ngSwitch。无论什么原因，通常情况下，你的内部组件不是包装器的直接子节点。为了演示上述情况，我们将 Counter 组件包装在一个 <ng-container> 中，看看我们的目标投影会发生什么：

<wrapper2>
  <ng-container>
    <counter></counter>
  </ng-container>
</wrapper2>
现在我们的 couter 组件会被投影到第一个红色框中。因为 ng-container 容器不再匹配 select="counter"。为了解决这个问题，我们必须使用 ngProjectAs 属性，它可以应用于任何元素上。 
  *
  */