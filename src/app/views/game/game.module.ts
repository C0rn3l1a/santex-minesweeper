import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { BoardComponent } from './board/board.component';
import { GameRoutingModule } from './game-routing.module';
import { UiKitModule } from 'src/app/ui-kit/ui-kit.module';
import { FormsModule } from '@angular/forms';
import { SaveComponent } from './save/save.component';

@NgModule({
    declarations: [SettingsComponent, BoardComponent, SaveComponent],
    imports: [
        CommonModule,
        GameRoutingModule,
        FormsModule,
        UiKitModule,
    ]
})
export class GameModule { }
