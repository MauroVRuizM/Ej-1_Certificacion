import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ALumnoMainComponent } from './components/alumno-main/alumno-main.component';
import { ALumnoListComponent } from './components/alumno-main/alumno-list/alumno-list.component';
import { ALumnoFormComponent } from './components/alumno-main/alumno-form/alumno-form.component';
import { AlumnoCardComponent } from './components/alumno-card/alumno-card.component';
import { MasmasPipe } from './shared/pipes/masmas.pipe';
import { SexdescPipe } from './shared/pipes/sexdesc.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlumnoService } from './services/alumno.service';
import { ServiceInterceptor } from './services/service.interceptor';
import { registerLocaleData } from '@angular/common';

import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

import { ReactiveFormsModule } from '@angular/forms';
import { MateriaformComponent } from './components/materiaform/materiaform.component';
import { MatriculaFormComponent } from './components/matricula-form/matricula-form.component';
import { TiposBecaFormComponent } from './components/tipos-beca-form/tipos-beca-form.component';
import { TiposBecaCardComponent } from './components/tipos-beca-card/tipos-beca-card.component';
import { TiposBecaListComponent } from './components/tipos-beca-list/tipos-beca-list.component';
import { CalificacionFormComponent } from './components/calificacion-form/calificacion-form.component';
import { AlumnoSearchComponent } from './components/alumno-search/alumno-search.component';
import { AporteFormComponent } from './components/aporte-form/aporte-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ALumnoMainComponent,
    ALumnoFormComponent,
    ALumnoListComponent,
    AlumnoCardComponent,
    MasmasPipe,
    MateriaformComponent,
    SexdescPipe,
    MateriaformComponent,
    MatriculaFormComponent,
    TiposBecaFormComponent,
    TiposBecaCardComponent,
    TiposBecaListComponent,
    CalificacionFormComponent,
    AlumnoSearchComponent,
    AporteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [
    AlumnoService, {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue : 'es-EC'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
