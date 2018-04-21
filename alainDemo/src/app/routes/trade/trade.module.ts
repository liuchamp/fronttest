import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TradeRoutingModule } from './trade-routing.module';
import { ListComponent } from './list/list.component';

const COMPONENT_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    TradeRoutingModule
  ],
  declarations: [
      ...COMPONENT_NOROUNT,
      ListComponent
  ],
  entryComponents: COMPONENT_NOROUNT
})
export class TradeModule { }
