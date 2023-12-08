import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotosComponent } from './pilotos/pilotos.component';
import { InicioComponent } from './inicio/inicio.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { EscuderiasComponent } from './escuderias/escuderias.component';
import { ClasificacionComponent } from './clasificacion/clasificacion.component';
const routes: Routes = [
  {
    path: '', component: InicioComponent
  },
  {
    path: 'pilotos', component: PilotosComponent
  },
  {
    path: 'inicio-sesion', component: InicioSesionComponent
  },
  {
    path: 'escuderias', component: EscuderiasComponent
  },
  {
    path: 'clasificacion', component: ClasificacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
