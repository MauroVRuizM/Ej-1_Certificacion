import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ALumnoMainComponent } from './components/alumno-main/alumno-main.component';
import { AlumnoCardComponent } from './components/alumno-card/alumno-card.component';
import { MateriaformComponent } from './components/materiaform/materiaform.component';
import { MatriculaFormComponent } from './components/matricula-form/matricula-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'alumnos', component: ALumnoMainComponent},
  {path: 'alumnos/:id', component: AlumnoCardComponent},
  {path: 'materias', component: MateriaformComponent},
  {path: 'materias/:id', component: MateriaformComponent},
  {path: 'matriculas', component: MatriculaFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
