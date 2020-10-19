import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { HistoryRoutingModule } from './history-routing.module';
import { UiKitModule } from 'src/app/ui-kit/ui-kit.module';
import { TableOrderPipe } from './table/table-order.pipe';

@NgModule({
    declarations: [TableComponent, TableOrderPipe],
    imports: [
        CommonModule,
        HistoryRoutingModule,
        UiKitModule
    ]
})
export class HistoryModule { }
