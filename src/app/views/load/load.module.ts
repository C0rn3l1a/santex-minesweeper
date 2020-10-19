import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadGameComponent } from './load-game/load-game.component';
import { LoadRoutingModule } from './load-routing.module';
import { UiKitModule } from 'src/app/ui-kit/ui-kit.module';

@NgModule({
    declarations: [LoadGameComponent],
    imports: [
        CommonModule,
        LoadRoutingModule,
        UiKitModule
    ]
})
export class LoadModule { }
