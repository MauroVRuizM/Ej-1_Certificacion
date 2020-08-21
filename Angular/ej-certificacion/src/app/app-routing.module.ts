import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ALumnoMainComponent } from './components/alumno-main/alumno-main.component';
import { AlumnoCardComponent } from './components/alumno-card/alumno-card.component';
import { MateriaformComponent } from './components/materiaform/materiaform.component';
import { MatriculaFormComponent } from './components/matricula-form/matricula-form.component';
import { TiposBecaFormComponent } from './components/tipos-beca-form/tipos-beca-form.component';
import { TiposBecaCardComponent } from './components/tipos-beca-card/tipos-beca-card.component';
import { TiposBecaListComponent } from './components/tipos-beca-list/tipos-beca-list.component';
import { CalificacionFormComponent } from './components/calificacion-form/calificacion-form.component';
const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'alumnos', component: ALumnoMainComponent},
  {path: 'alumnos/:id', component: AlumnoCardComponent},
  {path: 'materias', component: MateriaformComponent},
  {path: 'materias/:id', component: MateriaformComponent},
  {path: 'matriculas', component: MatriculaFormComponent},
  {path: 'calificaciones', component: CalificacionFormComponent},
  {path: 'tiposBeca/form', component: TiposBecaFormComponent},
  {path: 'tiposBeca/form/:id', component: TiposBecaFormComponent},
  {path: 'tiposBeca/card/:id', component: TiposBecaCardComponent},
  {path: 'tiposBeca/list', component: TiposBecaListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
