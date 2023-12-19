import { Component, OnInit } from '@angular/core';
import { CarreraService } from '../services/carreras/carrera.service';
import { Carreras } from '../shared/models/carrera';

@Component({
  selector: 'app-tabla-resultados',
  templateUrl: './tabla-resultados.component.html',
  styleUrls: ['./tabla-resultados.component.css'],
})
export class TablaResultadosComponent implements OnInit {

  carrerasDisponibles: string[] = [];
  resultadosCarrera: Carreras[] = [];
  carreraSeleccionada: string = 'GP de Baréin';
  fechaCarrera: string = 'Domingo, 5 Marzo 2023, 12:00PM';
  pistaCarrera: string = 'Circuito Internacional de Baréin, Sakhir';
  notaCarrera: string = 'Hulkenberg recibió una penalización de 15 segundos por múltiples infracciones del límite de la pista.';


  constructor(private carreraService: CarreraService) {}

  ngOnInit(): void {
    this.carrerasDisponibles = this.carreraService.getCarrerasDisponibles();

    this.cargarResultadosCarrera();
  }

  seleccionarCarrera(carrera: string) {
    this.carreraSeleccionada = carrera;
    this.cargarResultadosCarrera();
    this.fechaCarrera = this.carreraService.getFechaCarrera(carrera);
    this.pistaCarrera = this.carreraService.getPistaCarrera(carrera);
    this.notaCarrera = this.carreraService.getNotaCarrera(carrera);
  }

  cargarResultadosCarrera() {
    if (this.carreraSeleccionada) {

      this.resultadosCarrera = this.carreraService.getResultadosCarrera(
        this.carreraSeleccionada
      );

    }
  }

}
