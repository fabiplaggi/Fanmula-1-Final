import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotosComponent } from './pilotos/pilotos.component';
import { InicioComponent } from './inicio/inicio.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { EscuderiasComponent } from './escuderias/escuderias.component';
import { ClasificacionComponent } from './clasificacion/clasificacion.component';
import { TablaResultadosComponent } from './tabla-resultados/tabla-resultados.component';
import { HighlightsComponent } from './highlights/highlights.component';

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
  },
  {
    path: 'tabla-resultados', component: TablaResultadosComponent
  },
  {
    path: 'highlights', component: HighlightsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
