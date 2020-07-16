import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ALumnoMainComponent } from './alumno-main/alumno-main.component';
import { ALumnoFormComponent } from './alumno-main/alumno-form/alumno-form.component';
import { ALumnoListComponent } from './alumno-main/alumno-list/alumno-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlumnoService } from './services/alumno.service';
import { ServiceInterceptor } from './services/service.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ALumnoMainComponent,
    ALumnoFormComponent,
    ALumnoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule  
  ],
  providers: [
    AlumnoService, {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
