import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ALumnoMainComponent } from './alumno-main/alumno-main.component';
import { ALumnoFormComponent } from './alumno-main/alumno-form/alumno-form.component';
import { ALumnoListComponent } from './alumno-main/alumno-list/alumno-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
