import { Component } from '@angular/core';

@Component({
  selector: 'wrapper',
  template: `
    <div class="box">
      <ng-content></ng-content>
    </div>
  `
})
class Wrapper {}