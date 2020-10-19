import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MenuRoutingModule } from './menu-routing.module';
import { UiKitModule } from 'src/app/ui-kit/ui-kit.module';

@NgModule({
    declarations: [MainComponent],
    imports: [
        CommonModule,
        MenuRoutingModule,
        UiKitModule
    ]
})
export class MenuModule { }
