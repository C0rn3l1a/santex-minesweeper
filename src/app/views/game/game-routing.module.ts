import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { SaveComponent } from './save/save.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
    { path: '', component: SettingsComponent },
    { path: 'board', component: BoardComponent },
    { path: 'save', component: SaveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }