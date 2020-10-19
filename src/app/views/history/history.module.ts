import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { HistoryRoutingModule } from './history-routing.module';
import { UiKitModule } from 'src/app/ui-kit/ui-kit.module';

@NgModule({
    declarations: [TableComponent],
    imports: [
        CommonModule,
        HistoryRoutingModule,
        UiKitModule
    ]
})
export class HistoryModule { }
