import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'load', loadChildren:() => import('./views/load/load.module').then(m => m.LoadModule) },
    { path: 'history', loadChildren:() => import('./views/history/history.module').then(m => m.HistoryModule) },
    { path: 'game', loadChildren:() => import('./views/game/game.module').then(m => m.GameModule) },
    { path: 'menu', loadChildren:() => import('./views/menu/menu.module').then(m => m.MenuModule) },
    { path: '', redirectTo: 'menu', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
