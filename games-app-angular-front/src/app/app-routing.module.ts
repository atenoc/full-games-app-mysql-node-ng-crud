import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch:'full'}, // al precionar localhost:4200 reditecciones a la ruta /games
  { path: 'games', component: GameListComponent}, // ruta /games
  { path: 'games/agregar', component: GameFormComponent }, // ruta /games/agregar
  { path: 'games/editar/:id', component: GameFormComponent } // ruta /games/editar/ + id
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
