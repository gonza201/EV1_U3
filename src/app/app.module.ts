import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormularioUsuarioComponent } from './componentes/formulario-usuario/formulario-usuario.component';
import { FormularioEgresoComponent } from './componentes/formulario-egreso/formulario-egreso.component';
import { VerUsuarioComponent } from './componentes/ver-usuario/ver-usuario.component';
import { VerEgresoComponent } from './componentes/ver-egreso/ver-egreso.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioUsuarioComponent,
    FormularioEgresoComponent,
    VerUsuarioComponent,
    VerEgresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
