import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDirective } from './directives/card/card.directive';
import { ButtonDirective } from './directives/button/button.directive';
import { InputDirective } from './directives/input/input.directive';

@NgModule({
    declarations: [CardDirective, ButtonDirective, InputDirective],
    imports: [
        CommonModule
    ],
    exports: [CardDirective, ButtonDirective, InputDirective],
})
export class UiKitModule {}
