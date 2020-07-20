import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ALumnoMainComponent } from './components/alumno-main/alumno-main.component';
import { AlumnoCardComponent } from './components/alumno-card/alumno-card.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'alumnos', component: ALumnoMainComponent},
  {path: 'alumnos/:id', component: AlumnoCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
