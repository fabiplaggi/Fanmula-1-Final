import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PilotosComponent } from './pilotos/pilotos.component';
import { InicioComponent } from './inicio/inicio.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { EscuderiasComponent } from './escuderias/escuderias.component';
import { ClasificacionComponent } from './clasificacion/clasificacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PilotosComponent,
    InicioComponent,
    InicioSesionComponent,
    EscuderiasComponent,
    ClasificacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
