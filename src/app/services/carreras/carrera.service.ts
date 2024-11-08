import { Injectable } from '@angular/core';
import { Carreras } from '../../shared/models/carrera';

interface CarreraDetalle {
  resultados: Carreras[];
  fecha: string;
  pista: string;
  nota: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  private carreras: Record<string, CarreraDetalle> = {};

  constructor() {
    this.carreras['GP de Baréin'] = {
      resultados: [
        { posicion: 1, numero: 1, nombrePiloto: 'Max Verstappen', escuderia: 'Red Bull', vueltas: 57, tiempo: '1:33:56.736', puntos: 25 },
        { posicion: 2, numero: 11, nombrePiloto: 'Sergio Pérez', escuderia: 'Red Bull', vueltas: 57, tiempo: '+11.987s', puntos: 18 },
        { posicion: 3, numero: 14, nombrePiloto: 'Fernando Alonso', escuderia: 'Aston Martin', vueltas: 57, tiempo: '+38.637s', puntos: 15 },
        { posicion: 4, numero: 55, nombrePiloto: 'Carlos Sainz', escuderia: 'Ferrari', vueltas: 57, tiempo: '+48.052s', puntos: 12 },
        { posicion: 5, numero: 44, nombrePiloto: 'Lewis Hamilton', escuderia: 'Mercedes', vueltas: 57, tiempo: '+50.977s', puntos: 10 },
        { posicion: 6, numero: 18, nombrePiloto: 'Lance Stroll', escuderia: 'Aston Martin', vueltas: 57, tiempo: '+54.502s', puntos: 8 },
        { posicion: 7, numero: 63, nombrePiloto: 'George Russell', escuderia: 'Mercedes', vueltas: 57, tiempo: '+55.873s', puntos: 6 },
        { posicion: 8, numero: 77, nombrePiloto: 'Valtteri Bottas', escuderia: 'Alfa Romeo', vueltas: 57, tiempo: '+72.647s', puntos: 4 },
        { posicion: 9, numero: 10, nombrePiloto: 'Pierre Gasly', escuderia: 'Alpine', vueltas: 57, tiempo: '+73.753s', puntos: 2 },
        { posicion: 10, numero: 23, nombrePiloto: 'Alexander Albon', escuderia: 'Williams', vueltas: 57, tiempo: '+89.774s', puntos: 1 },
        { posicion: 11, numero: 22, nombrePiloto: 'Yuki Tsunoda', escuderia: 'Alpha Tauri', vueltas: 57, tiempo: '+90.870s', puntos: 0 },
        { posicion: 12, numero: 2, nombrePiloto: 'Logan Sargeant', escuderia: 'Williams', vueltas: 56, tiempo: '+1 lap', puntos: 0 },
        { posicion: 13, numero: 20, nombrePiloto: 'Kevin Magnussen', escuderia: 'Haas', vueltas: 56, tiempo: '+1 lap', puntos: 0 },
        { posicion: 14, numero: 21, nombrePiloto: 'Nyck De Vries', escuderia: 'Alpha Tauri', vueltas: 56, tiempo: '+1 lap', puntos: 0 },
        { posicion: 15, numero: 27, nombrePiloto: 'Nico Hulkenberg', escuderia: 'Haas', vueltas: 56, tiempo: '+1 lap', puntos: 0 },
        { posicion: 16, numero: 24, nombrePiloto: 'Zhou Guanyu', escuderia: 'Alfa Romeo', vueltas: 56, tiempo: '+1 lap', puntos: 0 },
        { posicion: 17, numero: 4, nombrePiloto: 'Lando Norris', escuderia: 'McLaren', vueltas: 55, tiempo: '+2 laps', puntos: 0 },
        { posicion: 18, numero: 31, nombrePiloto: 'Esteban Ocon', escuderia: 'Alpine', vueltas: 41, tiempo: 'Abandono', puntos: 0 },
        { posicion: 19, numero: 16, nombrePiloto: 'Charles Leclerc', escuderia: 'Ferrari', vueltas: 39, tiempo: 'Abandono', puntos: 0 },
        { posicion: 20, numero: 81, nombrePiloto: 'Oscar Piastri', escuderia: 'McLaren', vueltas: 13, tiempo: 'Abandono', puntos: 0 },
      ],
      fecha: 'Domingo, 5 Marzo 2023, 12:00PM',
      pista: 'Circuito Internacional de Baréin, Sakhir',
      nota: 'Hulkenberg recibió una penalización de 15 segundos por múltiples infracciones del límite de la pista.'
    };
    this.carreras['GP de Arabia Saudita'] = {
      resultados: [
        { posicion: 1, numero: 11, nombrePiloto: 'Sergio Pérez', escuderia: 'Red Bull', vueltas: 50, tiempo: '1:21:14.894', puntos: 25 },
        { posicion: 2, numero: 1, nombrePiloto: 'Max Verstappen', escuderia: 'Red Bull', vueltas: 50, tiempo: '+5.355s', puntos: 19 },
        { posicion: 3, numero: 14, nombrePiloto: 'Fernando Alonso', escuderia: 'Aston Martin', vueltas: 50, tiempo: '+20.728s', puntos: 15 },
        { posicion: 4, numero: 63, nombrePiloto: 'George Russell', escuderia: 'Mercedes', vueltas: 50, tiempo: '+25.866s', puntos: 12 },
        { posicion: 5, numero: 44, nombrePiloto: 'Lewis Hamilton', escuderia: 'Mercedes', vueltas: 50, tiempo: '+31.065s', puntos: 10 },
        { posicion: 6, numero: 55, nombrePiloto: 'Carlos Sainz', escuderia: 'Ferrari', vueltas: 50, tiempo: '+35.876s', puntos: 8 },
        { posicion: 7, numero: 16, nombrePiloto: 'Charles Leclerc', escuderia: 'Ferrari', vueltas: 50, tiempo: '+43.162s', puntos: 6 },
        { posicion: 8, numero: 31, nombrePiloto: 'Esteban Ocon', escuderia: 'Alpine', vueltas: 50, tiempo: '+52.832s', puntos: 4 },
        { posicion: 9, numero: 10, nombrePiloto: 'Pierre Gasly', escuderia: 'Alpine', vueltas: 50, tiempo: '+54.747s	', puntos: 2 },
        { posicion: 10, numero: 20, nombrePiloto: 'Kevin Magnussen', escuderia: 'Haas', vueltas: 50, tiempo: '+64.826s', puntos: 1 },
        { posicion: 11, numero: 22, nombrePiloto: 'Yuki Tsunoda', escuderia: 'Alpha Tauri', vueltas: 50, tiempo: '+67.494s', puntos: 0 },
        { posicion: 12, numero: 27, nombrePiloto: 'Nico Hulkenberg', escuderia: 'Haas', vueltas: 50, tiempo: '+70.588s', puntos: 0 },
        { posicion: 13, numero: 24, nombrePiloto: 'Zhou Guanyu', escuderia: 'Alfa Romeo', vueltas: 50, tiempo: '+76.060s', puntos: 0 },
        { posicion: 14, numero: 21, nombrePiloto: 'Nyck De Vries', escuderia: 'Alpha Tauri', vueltas: 50, tiempo: '+77.478s', puntos: 0 },
        { posicion: 15, numero: 81, nombrePiloto: 'Oscar Piastri', escuderia: 'McLaren', vueltas: 50, tiempo: '+85.021s', puntos: 0 },
        { posicion: 16, numero: 2, nombrePiloto: 'Logan Sargeant', escuderia: 'Williams', vueltas: 50, tiempo: '+86.293s', puntos: 0 },
        { posicion: 17, numero: 4, nombrePiloto: 'Lando Norris', escuderia: 'McLaren', vueltas: 50, tiempo: '+86.445s', puntos: 0 },
        { posicion: 18, numero: 77, nombrePiloto: 'Valtteri Bottas', escuderia: 'Alfa Romeo', vueltas: 49, tiempo: '+1 lap', puntos: 0 },
        { posicion: 19, numero: 23, nombrePiloto: 'Alexander Albon', escuderia: 'Williams', vueltas: 27, tiempo: 'Abandono', puntos: 0 },
        { posicion: 20, numero: 18, nombrePiloto: 'Lance Stroll', escuderia: 'Aston Martin', vueltas: 16, tiempo: 'Abandono', puntos: 0 },
      ],
      fecha: 'Domingo, 19 Marzo 2023, 2:00PM',
      pista: 'Circuito Jeddah Corniche, Jeddah',
      nota: 'Verstappen obtuvo un punto adicional por marcar la vuelta más rápida de la carrera.'
    };
    this.carreras['GP de Australia'] = {
      resultados: [
        { posicion: 1, numero: 1, nombrePiloto: 'Max Verstappen', escuderia: 'Red Bull', vueltas: 58, tiempo: '2:32:38.371	', puntos: 25 },
        { posicion: 2, numero: 44, nombrePiloto: 'Lewis Hamilton', escuderia: 'Mercedes', vueltas: 58, tiempo: '+0.179s', puntos: 18 },
        { posicion: 3, numero: 14, nombrePiloto: 'Fernando Alonso', escuderia: 'Aston Martin', vueltas: 58, tiempo: '+0.769s', puntos: 15 },
        { posicion: 4, numero: 18, nombrePiloto: 'Lance Stroll', escuderia: 'Aston Martin', vueltas: 58, tiempo: '+3.082s', puntos: 12 },
        { posicion: 5, numero: 11, nombrePiloto: 'Sergio Pérez', escuderia: 'Red Bull', vueltas: 58, tiempo: '+3.320s', puntos: 11 },
        { posicion: 6, numero: 4, nombrePiloto: 'Lando Norris', escuderia: 'McLaren', vueltas: 58, tiempo: '+3.701s', puntos: 8 },
        { posicion: 7, numero: 27, nombrePiloto: 'Nico Hulkenberg', escuderia: 'Haas', vueltas: 58, tiempo: '+4.939s', puntos: 6 },
        { posicion: 8, numero: 81, nombrePiloto: 'Oscar Piastri', escuderia: 'McLaren', vueltas: 58, tiempo: '+5.382s	', puntos: 4 },
        { posicion: 9, numero: 24, nombrePiloto: 'Zhou Guanyu', escuderia: 'Alfa Romeo', vueltas: 58, tiempo: '+5.713s', puntos: 2 },
        { posicion: 10, numero: 22, nombrePiloto: 'Yuki Tsunoda', escuderia: 'Alpha Tauri', vueltas: 58, tiempo: '+6.052s', puntos: 1 },
        { posicion: 11, numero: 77, nombrePiloto: 'Valtteri Bottas', escuderia: 'Alfa Romeo', vueltas: 58, tiempo: '+6.513s', puntos: 0 },
        { posicion: 12, numero: 55, nombrePiloto: 'Carlos Sainz', escuderia: 'Ferrari', vueltas: 58, tiempo: '+6.594s', puntos: 0 },
        { posicion: 13, numero: 10, nombrePiloto: 'Pierre Gasly', escuderia: 'Alpine', vueltas: 56, tiempo: 'Abandono', puntos: 0 },
        { posicion: 14, numero: 31, nombrePiloto: 'Esteban Ocon', escuderia: 'Alpine', vueltas: 56, tiempo: 'Abandono', puntos: 0 },
        { posicion: 15, numero: 21, nombrePiloto: 'Nyck De Vries', escuderia: 'Alpha Tauri', vueltas: 56, tiempo: 'Abandono', puntos: 0 },
        { posicion: 16, numero: 2, nombrePiloto: 'Logan Sargeant', escuderia: 'Williams', vueltas: 56, tiempo: 'Abandono', puntos: 0 },
        { posicion: 17, numero: 20, nombrePiloto: 'Kevin Magnussen', escuderia: 'Haas', vueltas: 52, tiempo: 'Abandono', puntos: 0 },
        { posicion: 18, numero: 63, nombrePiloto: 'George Russell', escuderia: 'Mercedes', vueltas: 17, tiempo: 'Abandono', puntos: 0 },
        { posicion: 19, numero: 23, nombrePiloto: 'Alexander Albon', escuderia: 'Williams', vueltas: 6, tiempo: 'Abandono', puntos: 0 },
        { posicion: 20, numero: 16, nombrePiloto: 'Charles Leclerc', escuderia: 'Ferrari', vueltas: 0, tiempo: 'Abandono', puntos: 0 },
      ],
      fecha: 'Domingo, 2 Abril 2023, 2:00AM',
      pista: 'Circuito del Gran Premio de Melbourne, Melbourne',
      nota: 'Pérez anotó un punto adicional por marcar la vuelta más rápida de la carrera. Sainz recibió una penalización de cinco segundos por provocar una colisión.'
    };
    this.carreras['GP de Azerbaiyán'] = {
      resultados: [
        { posicion: 1, numero: 11, nombrePiloto: 'Sergio Pérez', escuderia: 'Red Bull', vueltas: 51, tiempo: '1:32:42.436	', puntos: 25 },
        { posicion: 2, numero: 1, nombrePiloto: 'Max Verstappen', escuderia: 'Red Bull', vueltas: 51, tiempo: '+2.137s', puntos: 18 },
        { posicion: 3, numero: 16, nombrePiloto: 'Charles Leclerc', escuderia: 'Ferrari', vueltas: 51, tiempo: '+21.217s', puntos: 15 },
        { posicion: 4, numero: 14, nombrePiloto: 'Fernando Alonso', escuderia: 'Aston Martin', vueltas: 51, tiempo: '+22.024s', puntos: 12 },
        { posicion: 5, numero: 55, nombrePiloto: 'Carlos Sainz', escuderia: 'Ferrari', vueltas: 51, tiempo: '+45.491s', puntos: 10 },
        { posicion: 6, numero: 44, nombrePiloto: 'Lewis Hamilton', escuderia: 'Mercedes', vueltas: 51, tiempo: '+46.145s', puntos: 8 },
        { posicion: 7, numero: 18, nombrePiloto: 'Lance Stroll', escuderia: 'Aston Martin', vueltas: 51, tiempo: '+51.617s', puntos: 6 },
        { posicion: 8, numero: 63, nombrePiloto: 'George Russell', escuderia: 'Mercedes', vueltas: 51, tiempo: '+74.240s', puntos: 5 },
        { posicion: 9, numero: 4, nombrePiloto: 'Lando Norris', escuderia: 'McLaren', vueltas: 51, tiempo: '+80.376s', puntos: 2 },
        { posicion: 10, numero: 22, nombrePiloto: 'Yuki Tsunoda', escuderia: 'Alpha Tauri', vueltas: 51, tiempo: '+83.862s', puntos: 1 },
        { posicion: 11, numero: 81, nombrePiloto: 'Oscar Piastri', escuderia: 'McLaren', vueltas: 51, tiempo: '+86.501s', puntos: 0 },
        { posicion: 12, numero: 23, nombrePiloto: 'Alexander Albon', escuderia: 'Williams', vueltas: 51, tiempo: '+88.623s', puntos: 0 },
        { posicion: 13, numero: 20, nombrePiloto: 'Kevin Magnussen', escuderia: 'Haas', vueltas: 51, tiempo: '+89.729s', puntos: 0 },
        { posicion: 14, numero: 10, nombrePiloto: 'Pierre Gasly', escuderia: 'Alpine', vueltas: 51, tiempo: '+91.332s', puntos: 0 },
        { posicion: 15, numero: 31, nombrePiloto: 'Esteban Ocon', escuderia: 'Alpine', vueltas: 51, tiempo: '+97.794s', puntos: 0 },
        { posicion: 16, numero: 2, nombrePiloto: 'Logan Sargeant', escuderia: 'Williams', vueltas: 51, tiempo: '+100.943s', puntos: 0 },
        { posicion: 17, numero: 27, nombrePiloto: 'Nico Hulkenberg', escuderia: 'Haas', vueltas: 50, tiempo: '+1 lap', puntos: 0 },
        { posicion: 18, numero: 77, nombrePiloto: 'Valtteri Bottas', escuderia: 'Alfa Romeo', vueltas: 50, tiempo: '+1 lap', puntos: 0 },
        { posicion: 19, numero: 24, nombrePiloto: 'Zhou Guanyu', escuderia: 'Alfa Romeo', vueltas: 36, tiempo: 'Abandono', puntos: 0 },
        { posicion: 20, numero: 21, nombrePiloto: 'Nyck De Vries', escuderia: 'Alpha Tauri', vueltas: 9, tiempo: 'Abandono', puntos: 0 },
      ],
      fecha: 'Domingo, 30 Abril 2023, 8:00AM',
      pista: 'Circuito de la ciudad de Bakú, Bakú',
      nota: 'Russell anotó un punto adicional por marcar la vuelta más rápida de la carrera.'
    };
    this.carreras['GP de Miami'] = {
      resultados: [
        { posicion: 1, numero: 1, nombrePiloto: 'Max Verstappen', escuderia: 'Red Bull', vueltas: 57, tiempo: '1:27:38.241', puntos: 26 },
        { posicion: 2, numero: 11, nombrePiloto: 'Sergio Pérez', escuderia: 'Red Bull', vueltas: 57, tiempo: '+5.384s', puntos: 18 },
        { posicion: 3, numero: 14, nombrePiloto: 'Fernando Alonso', escuderia: 'Aston Martin', vueltas: 57, tiempo: '+26.305s', puntos: 15 },
        { posicion: 4, numero: 63, nombrePiloto: 'George Russell', escuderia: 'Mercedes', vueltas: 57, tiempo: '+33.229s', puntos: 12 },
        { posicion: 5, numero: 55, nombrePiloto: 'Carlos Sainz', escuderia: 'Ferrari', vueltas: 57, tiempo: '+42.511s', puntos: 10 },
        { posicion: 6, numero: 44, nombrePiloto: 'Lewis Hamilton', escuderia: 'Mercedes', vueltas: 57, tiempo: '+51.249s', puntos: 8 },
        { posicion: 7, numero: 16, nombrePiloto: 'Charles Leclerc', escuderia: 'Ferrari', vueltas: 57, tiempo: '+52.988s', puntos: 6 },
        { posicion: 8, numero: 10, nombrePiloto: 'Pierre Gasly', escuderia: 'Alpine', vueltas: 57, tiempo: '+55.670s', puntos: 4 },
        { posicion: 9, numero: 31, nombrePiloto: 'Esteban Ocon', escuderia: 'Alpine', vueltas: 57, tiempo: '+58.123s', puntos: 2 },
        { posicion: 10, numero: 20, nombrePiloto: 'Kevin Magnussen', escuderia: 'Haas ', vueltas: 57, tiempo: '+62.945s', puntos: 1 },
        { posicion: 11, numero: 22, nombrePiloto: 'Yuki Tsunoda', escuderia: 'Alpha Tauri', vueltas: 57, tiempo: '+64.309s', puntos: 0 },
        { posicion: 12, numero: 18, nombrePiloto: 'Lance Stroll', escuderia: 'Aston Martin', vueltas: 57, tiempo: '+64.754s', puntos: 0 },
        { posicion: 13, numero: 77, nombrePiloto: 'Valtteri Bottas', escuderia: 'Alfa Romeo', vueltas: 57, tiempo: '+71.637s', puntos: 0 },
        { posicion: 14, numero: 23, nombrePiloto: 'Alexander Albon', escuderia: 'Williams', vueltas: 57, tiempo: '+72.861s', puntos: 0 },
        { posicion: 15, numero: 27, nombrePiloto: 'Nico Hulkenberg', escuderia: 'Haas', vueltas: 57, tiempo: '+74.950s', puntos: 0 },
        { posicion: 16, numero: 24, nombrePiloto: 'Zhou Guanyu', escuderia: 'Alfa Romeo', vueltas: 57, tiempo: '+78.440s', puntos: 0 },
        { posicion: 17, numero: 4, nombrePiloto: 'Lando Norris', escuderia: 'McLaren', vueltas: 57, tiempo: '+87.717s', puntos: 0 },
        { posicion: 18, numero: 21, nombrePiloto: 'Nyck De Vries', escuderia: 'Alpha Tauri', vueltas: 57, tiempo: '+88.949s', puntos: 0 },
        { posicion: 19, numero: 81, nombrePiloto: 'Oscar Piastri', escuderia: 'McLaren', vueltas: 56, tiempo: '+1 lap', puntos: 0 },
        { posicion: 20, numero: 2, nombrePiloto: 'Logan Sargeant', escuderia: 'Williams', vueltas: 56, tiempo: '+1 lap', puntos: 0 },
      ],
      fecha: 'Domingo, 7 Mayo 2023, 4:30PM',
      pista: 'Autódromo Internacional de Miami, Miami',
      nota: 'Verstappen obtuvo un punto adicional por marcar la vuelta más rápida de la carrera. Sainz recibió una '+
      'penalización de cinco segundos por exceso de velocidad en el pit lane.'
    };
    this.carreras['GP de Emilia-Romaña'] = {
      resultados: [
        { posicion: 1, numero: 0, nombrePiloto: '-', escuderia: '-', vueltas: 0, tiempo: '-', puntos: 0 },
        { posicion: 2, numero: 0, nombrePiloto: '-', escuderia: '-', vueltas: 0, tiempo: '-', puntos: 0 },
        { posicion: 3, numero: 0, nombrePiloto: '-', escuderia: '-', vueltas: 0, tiempo: '-', puntos: 0 },
        { posicion: 4, numero: 0, nombrePiloto: '-', escuderia: '-', vueltas: 0, tiempo: '-', puntos: 0 },
        { posicion: 5, numero: 0, nombrePiloto: '-', escuderia: '-', vueltas: 0, tiempo: '-', puntos: 0 },
        { posicion: 6, numero: 0, nombrePiloto: '-', escuderia: '-', vueltas: 0, tiempo: '-', puntos: 0 },
        { posicion: 7, numero: 0, nombrePiloto: '-', escuderia: '-', vueltas: 0, tiempo: '-', puntos: 0 },
        { posicion: 8, numero: 0, nombrePiloto: '-', escuderia: '-', vueltas: 0, tiempo: '-', puntos: 0 },
        { posicion: 9, numero: 0, nombrePiloto: '-', escuderia: '-', vueltas: 0, tiempo: '-', puntos: 0 },
        { posicion: 10, numero: 0, nombrePiloto: '-', escuderia: '-', vueltas: 0, tiempo: '-', puntos: 0 },
        { posicion: 11, numero: 0, nombrePiloto: '-', escuderia: '-', vueltas: 0, tiempo: '-', puntos: 0 },
        { posicion: 12, numero: 0, nombrePiloto: '-', escuderia: '-', vueltas: 0, tiempo: '-', puntos: 0 },
        { posicion: 13, numero: 0, nombrePiloto: '-', escuderia: '-', vueltas: 0, tiempo: '-', puntos: 0 },
        { posicion: 14, numero: 0, nombrePiloto: '-', escuderia: '-', vueltas: 0, tiempo: '-', puntos: 0 },
        { posicion: 15, numero: 0, nombrePiloto: '-', escuderia: '-', vueltas: 0, tiempo: '-', puntos: 0 },
        { posicion: 16, numero: 0, nombrePiloto: '-', escuderia: '-', vueltas: 0, tiempo: '-', puntos: 0 },
        { posicion: 17, numero: 0, nombrePiloto: '-', escuderia: '-', vueltas: 0, tiempo: '-', puntos: 0 },
        { posicion: 18, numero: 0, nombrePiloto: '-', escuderia: '-', vueltas: 0, tiempo: '-', puntos: 0 },
        { posicion: 19, numero: 0, nombrePiloto: '-', escuderia: '-', vueltas: 0, tiempo: '-', puntos: 0 },
        { posicion: 20, numero: 0, nombrePiloto: '-', escuderia: '-', vueltas: 0, tiempo: '-', puntos: 0 },
      ],
      fecha: 'Cancelado',
      pista: 'Autódromo Enzo y Dino Ferrari, Imola',
      nota: 'Carrera cancelada.'
    };
    this.carreras['GP de Mónaco'] = {
      resultados: [
        { posicion: 1, numero: 1, nombrePiloto: 'Max Verstappen', escuderia: 'Red Bull', vueltas: 78, tiempo: '1:48:51.980', puntos: 25 },
        { posicion: 2, numero: 14, nombrePiloto: 'Fernando Alonso', escuderia: 'Aston Martin', vueltas: 78, tiempo: '+27.921s', puntos: 18 },
        { posicion: 3, numero: 31, nombrePiloto: 'Esteban Ocon', escuderia: 'Alpine', vueltas: 78, tiempo: '+36.990s', puntos: 15 },
        { posicion: 4, numero: 44, nombrePiloto: 'Lewis Hamilton', escuderia: 'Mercedes', vueltas: 78, tiempo: '+39.062s', puntos: 13 },
        { posicion: 5, numero: 63, nombrePiloto: 'George Russell', escuderia: 'Mercedes', vueltas: 78, tiempo: '+56.284s', puntos: 10 },
        { posicion: 6, numero: 16, nombrePiloto: 'Charles Leclerc', escuderia: 'Ferrari', vueltas: 78, tiempo: '+61.890s', puntos: 8 },
        { posicion: 7, numero: 10, nombrePiloto: 'Pierre Gasly', escuderia: 'Alpine', vueltas: 78, tiempo: '+62.362s', puntos: 6 },
        { posicion: 8, numero: 55, nombrePiloto: 'Carlos Sainz', escuderia: 'Ferrari', vueltas: 78, tiempo: '+63.391s', puntos: 4 },
        { posicion: 9, numero: 4, nombrePiloto: 'Lando Norris', escuderia: 'Mclaren', vueltas: 77, tiempo: '+1 lap', puntos: 2 },
        { posicion: 10, numero: 81, nombrePiloto: 'Oscar Piastri', escuderia: 'McLaren', vueltas: 77, tiempo: '+1 lap', puntos: 1 },
        { posicion: 11, numero: 77, nombrePiloto: 'Valtteri Bottas', escuderia: 'Alfa Romeo', vueltas: 77, tiempo: '+1 lap', puntos: 0 },
        { posicion: 12, numero: 21, nombrePiloto: 'Nyck De Vries', escuderia: 'Alpha Tauri', vueltas: 77, tiempo: '+1 lap', puntos: 0 },
        { posicion: 13, numero: 24, nombrePiloto: 'Zhou Guanyu', escuderia: 'Alfa Romeo', vueltas: 77, tiempo: '+1 lap', puntos: 0 },
        { posicion: 14, numero: 23, nombrePiloto: 'Alexander Albon', escuderia: 'Williams', vueltas: 77, tiempo: '+1 lap', puntos: 0 },
        { posicion: 15, numero: 22, nombrePiloto: 'Yuki Tsunoda', escuderia: 'Alpha Tauri', vueltas: 76, tiempo: '+2 laps', puntos: 0 },
        { posicion: 16, numero: 11, nombrePiloto: 'Sergio Pérez', escuderia: 'Red Bull', vueltas: 76, tiempo: '+2 laps', puntos: 0 },
        { posicion: 17, numero: 27, nombrePiloto: 'Nico Hulkenberg', escuderia: 'Haas', vueltas: 76, tiempo: '+2 laps', puntos: 0 },
        { posicion: 18, numero: 2, nombrePiloto: 'Logan Sargeant', escuderia: 'Williams', vueltas: 76, tiempo: '+2 laps', puntos: 0 },
        { posicion: 19, numero: 20, nombrePiloto: 'Kevin Magnussen', escuderia: 'Haas', vueltas: 70, tiempo: 'Abandono', puntos: 0 },
        { posicion: 20, numero: 18, nombrePiloto: 'Lance Stroll', escuderia: 'Aston Martin', vueltas: 53, tiempo: 'Abandono', puntos: 0 },
      ],
      fecha: 'Domingo, 28 Mayo 2023, 10:00AM',
      pista: 'Circuito de Mónaco, Mónaco',
      nota: 'Hamilton obtuvo un punto adicional por marcar la vuelta más rápida de la carrera. Sargeant recibió una '+
      'penalización de cinco segundos por exceso de velocidad en el pit lane. Russell recibió una penalización de cinco '+
      'segundos por reincorporarse a la pista de manera insegura. Hulkenberg recibió una penalización de 10 segundos por no '+
      'cumplir una penalización durante una parada en boxes.'
    };
    this.carreras['GP de España'] = {
      resultados: [
        { posicion: 1, numero: 1, nombrePiloto: 'Max Verstappen', escuderia: 'Red Bull', vueltas: 66, tiempo: '1:27:57.940', puntos: 26 },
        { posicion: 2, numero: 44, nombrePiloto: 'Lewis Hamilton', escuderia: 'Mercedes', vueltas: 66, tiempo: '+24.090s', puntos: 18 },
        { posicion: 3, numero: 63, nombrePiloto: 'George Russell', escuderia: 'Mercedes', vueltas: 66, tiempo: '+32.389s', puntos: 15 },
        { posicion: 4, numero: 11, nombrePiloto: 'Sergio Pérez', escuderia: 'Red Bull', vueltas: 66, tiempo: '+35.812s', puntos: 12 },
        { posicion: 5, numero: 55, nombrePiloto: 'Carlos Sainz', escuderia: 'Ferrari', vueltas: 66, tiempo: '+45.698s	', puntos: 10 },
        { posicion: 6, numero: 18, nombrePiloto: 'Lance Stroll', escuderia: 'Aston Martin', vueltas: 66, tiempo: '+63.320s', puntos: 8 },
        { posicion: 7, numero: 14, nombrePiloto: 'Fernando Alonso', escuderia: 'Aston Martin', vueltas: 66, tiempo: '+64.127s', puntos: 6 },
        { posicion: 8, numero: 31, nombrePiloto: 'Esteban Ocon', escuderia: 'Alpine', vueltas: 66, tiempo: '+69.242s', puntos: 4 },
        { posicion: 9, numero: 24, nombrePiloto: 'Zhou Guanyu', escuderia: 'Alfa Romeo', vueltas: 66, tiempo: '+71.878s', puntos: 2 },
        { posicion: 10, numero: 10, nombrePiloto: 'Pierre Gasly', escuderia: 'Alpine', vueltas: 66, tiempo: '+73.530s	', puntos: 1 },
        { posicion: 11, numero: 16, nombrePiloto: 'Charles Leclerc', escuderia: 'Ferrari', vueltas: 66, tiempo: '+74.419s', puntos: 0 },
        { posicion: 12, numero: 22, nombrePiloto: 'Yuki Tsunoda', escuderia: 'Alpha Tauri', vueltas: 66, tiempo: '+75.416s', puntos: 0 },
        { posicion: 13, numero: 81, nombrePiloto: 'Oscar Piastri', escuderia: 'McLaren', vueltas: 65, tiempo: '+1 lap', puntos: 0 },
        { posicion: 14, numero: 21, nombrePiloto: 'Nyck De Vries', escuderia: 'Alpha Tauri', vueltas: 65, tiempo: '+1 lap', puntos: 0 },
        { posicion: 15, numero: 27, nombrePiloto: 'Nico Hulkenberg', escuderia: 'Haas', vueltas: 65, tiempo: '+1 lap', puntos: 0 },
        { posicion: 16, numero: 23, nombrePiloto: 'Alexander Albon', escuderia: 'Williams', vueltas: 65, tiempo: '+1 lap', puntos: 0 },
        { posicion: 17, numero: 4, nombrePiloto: 'Lando Norris', escuderia: 'McLaren', vueltas: 65, tiempo: '+1 lap', puntos: 0 },
        { posicion: 18, numero: 20, nombrePiloto: 'Kevin Magnussen', escuderia: 'Haas', vueltas: 65, tiempo: '+1 lap', puntos: 0 },
        { posicion: 19, numero: 77, nombrePiloto: 'Valtteri Bottas', escuderia: 'Alfa Romeo', vueltas: 65, tiempo: '+1 lap', puntos: 0 },
        { posicion: 20, numero: 2, nombrePiloto: 'Logan Sargeant', escuderia: 'Williams', vueltas: 65, tiempo: '+1 lap', puntos: 0 },
      ],
      fecha: 'Domingo, 4 Junio 2023, 10:00AM',
      pista: 'Circuito de Barcelona-Catalunya, Barcelona',
      nota: 'Verstappen obtuvo un punto adicional por marcar la vuelta más rápida de la carrera. Tsunoda recibió una' + 
      ' penalización de cinco segundos por obligar a otro piloto a salir de la pista.'
    };
    this.carreras['GP de Canadá'] = {
      resultados: [
        { posicion: 1, numero: 1, nombrePiloto: 'Max Verstappen', escuderia: 'Red Bull', vueltas: 70, tiempo: '1:33:58.348', puntos: 25 },
        { posicion: 2, numero: 14, nombrePiloto: 'Fernando Alonso', escuderia: 'Aston Martin', vueltas: 70, tiempo: '+9.570s', puntos: 18 },
        { posicion: 3, numero: 44, nombrePiloto: 'Lewis Hamilton', escuderia: 'Mercedes', vueltas: 70, tiempo: '+14.168s', puntos: 15 },
        { posicion: 4, numero: 16, nombrePiloto: 'Charles Leclerc', escuderia: 'Ferrari', vueltas: 70, tiempo: '+18.648s', puntos: 12 },
        { posicion: 5, numero: 55, nombrePiloto: 'Carlos Sainz', escuderia: 'Ferrari', vueltas: 70, tiempo: '+21.540s', puntos: 10 },
        { posicion: 6, numero: 11, nombrePiloto: 'Sergio Pérez', escuderia: 'Red Bull', vueltas: 70, tiempo: '+51.028s', puntos: 9 },
        { posicion: 7, numero: 23, nombrePiloto: 'Alexander Albon', escuderia: 'Williamas', vueltas: 70, tiempo: '+60.813s', puntos: 6 },
        { posicion: 8, numero: 31, nombrePiloto: 'Esteban Ocon', escuderia: 'Alpine', vueltas: 70, tiempo: '+61.692s', puntos: 4 },
        { posicion: 9, numero: 18, nombrePiloto: 'Lance Stroll', escuderia: 'Aston Martin', vueltas: 70, tiempo: '+64.402s', puntos: 2 },
        { posicion: 10, numero: 77, nombrePiloto: 'Valtteri Bottas', escuderia: 'Alfa Romeo', vueltas: 70, tiempo: '+64.432s', puntos: 1 },
        { posicion: 11, numero: 81, nombrePiloto: 'Oscar Piastri', escuderia: 'McLaren', vueltas: 70, tiempo: '+65.101s', puntos: 0 },
        { posicion: 12, numero: 10, nombrePiloto: 'Pierre Gasly', escuderia: 'Alpine', vueltas: 70, tiempo: '+65.249s', puntos: 0 },
        { posicion: 13, numero: 4, nombrePiloto: 'Lando Norris', escuderia: 'McLaren', vueltas: 70, tiempo: '+68.363s', puntos: 0 },
        { posicion: 14, numero: 22, nombrePiloto: 'Yuki Tsunoda', escuderia: 'Alpha Tauri', vueltas: 70, tiempo: '+73.423s', puntos: 0 },
        { posicion: 15, numero: 27, nombrePiloto: 'Nico Hulkenberg', escuderia: 'Haas', vueltas: 69, tiempo: '+1 lap', puntos: 0 },
        { posicion: 16, numero: 24, nombrePiloto: 'Zhou Guanyu', escuderia: 'Alfa Romeo', vueltas: 69, tiempo: '+1 lap', puntos: 0 },
        { posicion: 17, numero: 20, nombrePiloto: 'Kevin Magnussen', escuderia: 'Haas', vueltas: 69, tiempo: '+1 lap', puntos: 0 },
        { posicion: 18, numero: 21, nombrePiloto: 'Nyck De Vries', escuderia: 'Alpha Tauri', vueltas: 69, tiempo: '+1 lap', puntos: 0 },
        { posicion: 19, numero: 63, nombrePiloto: 'George Russell', escuderia: 'Mercedes', vueltas: 53, tiempo: 'Abandono', puntos: 0 },
        { posicion: 20, numero: 2, nombrePiloto: 'Logan Sargeant', escuderia: 'Williams', vueltas: 6, tiempo: 'Abandono', puntos: 0 },
      ],
      fecha: 'Domingo, 18 Junio 2023, 3:00PM',
      pista: 'Circuito Gilles-Villeneuve, Montreal',
      nota: 'Pérez anotó un punto adicional por marcar la vuelta más rápida de la carrera. Norris recibió una penalización de cinco segundos por comportamiento antideportivo.'
    };
    this.carreras['GP de Austria'] = {
      resultados: [
        { posicion: 1, numero: 1, nombrePiloto: 'Max Verstappen', escuderia: 'Red Bull', vueltas: 71, tiempo: '1:25:33.607', puntos: 26 },
        { posicion: 2, numero: 16, nombrePiloto: 'Charles Leclerc', escuderia: 'Ferrari', vueltas: 71, tiempo: '+5.155s', puntos: 18 },
        { posicion: 3, numero: 11, nombrePiloto: 'Sergio Pérez', escuderia: 'Red Bull', vueltas: 71, tiempo: '+17.188s', puntos: 15 },
        { posicion: 4, numero: 4, nombrePiloto: 'Lando Norris', escuderia: 'McLaren', vueltas: 71, tiempo: '+26.327s', puntos: 12 },
        { posicion: 5, numero: 14, nombrePiloto: 'Fernando Alonso', escuderia: 'Aston Martin', vueltas: 71, tiempo: '+30.317s', puntos: 10 },
        { posicion: 6, numero: 55, nombrePiloto: 'Carlos Sainz', escuderia: 'Ferrari', vueltas: 71, tiempo: '+31.377s', puntos: 8 },
        { posicion: 7, numero: 63, nombrePiloto: 'George Russell', escuderia: 'Mercedes', vueltas: 71, tiempo: '+48.403s', puntos: 6 },
        { posicion: 8, numero: 44, nombrePiloto: 'Lewis Hamilton', escuderia: 'Mercedes', vueltas: 71, tiempo: '+49.196s', puntos: 4 },
        { posicion: 9, numero: 18, nombrePiloto: 'Lance Stroll', escuderia: 'Aston Martin', vueltas: 71, tiempo: '+59.043s', puntos: 2 },
        { posicion: 10, numero: 10, nombrePiloto: 'Pierre Gasly', escuderia: 'Alpine', vueltas: 71, tiempo: '+67.667s', puntos: 1 },
        { posicion: 11, numero: 23, nombrePiloto: 'Alexander Albon', escuderia: 'Williams', vueltas: 71, tiempo: '+79.767s', puntos: 0 },
        { posicion: 12, numero: 24, nombrePiloto: 'Zhou Guanyu', escuderia: 'Alfa Romeo', vueltas: 70, tiempo: '+1 lap', puntos: 0 },
        { posicion: 13, numero: 2, nombrePiloto: 'Logan Sargeant', escuderia: 'Wiliimas', vueltas: 70, tiempo: '+1 lap', puntos: 0 },
        { posicion: 14, numero: 31, nombrePiloto: 'Esteban Ocon', escuderia: 'Alpine', vueltas: 70, tiempo: '+1 lap', puntos: 0 },
        { posicion: 15, numero: 77, nombrePiloto: 'Valtteri Bottas', escuderia: 'Alfa Romeo', vueltas: 70, tiempo: '+1 lap', puntos: 0 },
        { posicion: 16, numero: 81, nombrePiloto: 'Oscar Piastri', escuderia: 'McLaren', vueltas: 70, tiempo: '+1 lap', puntos: 0 },
        { posicion: 17, numero: 21, nombrePiloto: 'Nyck De Vries', escuderia: 'Alpha Tauri', vueltas: 70, tiempo: '+1 lap', puntos: 0 },
        { posicion: 18, numero: 20, nombrePiloto: 'Kevin Magnussen', escuderia: 'Haas', vueltas: 70, tiempo: '+1 lap', puntos: 0 },
        { posicion: 19, numero: 22, nombrePiloto: 'Yuki Tsunoda', escuderia: 'Alpha Tauri', vueltas: 70, tiempo: '+1 lap', puntos: 0 },
        { posicion: 20, numero: 27, nombrePiloto: 'Nico Hulkenberg', escuderia: 'Haas', vueltas: 12, tiempo: 'Abandono', puntos: 0 },
      ],
      fecha: 'Domingo, 2 Julio 2023, 10:00AM',
      pista: 'Red Bull Ring, Spielberg',
      nota: 'Verstappen obtuvo un punto adicional por marcar la vuelta más rápida de la carrera. De Vries recibió una penalización de cinco segundos por obligar a otro piloto a salirse de la pista. Sargeant, Magnussen, Ocon (x2), De Vries y Tsunoda recibieron penalizaciones de cinco segundos por exceder los límites de la pista. Tsunoda, Sainz, Hamilton, Gasly, Albon, Ocon (x2) y De Vries recibieron penalizaciones de 10 segundos por exceder los límites de la pista.'
    };
    this.carreras['GP de Gran Bretaña'] = {
      resultados: [
        { posicion: 1, numero: 1, nombrePiloto: 'Max Verstappen', escuderia: 'Red Bull', vueltas: 52, tiempo: '1:25:16.938', puntos: 26 },
        { posicion: 2, numero: 4, nombrePiloto: 'Lando Norris', escuderia: 'McLaren', vueltas: 52, tiempo: '+3.798s', puntos: 18 },
        { posicion: 3, numero: 44, nombrePiloto: 'Lewis Hamilton', escuderia: 'Mercedes', vueltas: 52, tiempo: '+6.783s', puntos: 15 },
        { posicion: 4, numero: 81, nombrePiloto: 'Oscar Piastri', escuderia: 'McLaren', vueltas: 52, tiempo: '+7.776s', puntos: 12 },
        { posicion: 5, numero: 63, nombrePiloto: 'George Russell', escuderia: 'Mercedes', vueltas: 52, tiempo: '+11.206s', puntos: 10 },
        { posicion: 6, numero: 11, nombrePiloto: 'Sergio Pérez', escuderia: 'Red Bull', vueltas: 52, tiempo: '+12.882s', puntos: 8 },
        { posicion: 7, numero: 14, nombrePiloto: 'Fernando Alonso', escuderia: 'Aston Martin', vueltas: 52, tiempo: '+17.193s', puntos: 6 },
        { posicion: 8, numero: 23, nombrePiloto: 'Alexander Albon', escuderia: 'Williams', vueltas: 52, tiempo: '+17.878s', puntos: 4 },
        { posicion: 9, numero: 16, nombrePiloto: 'Charles Leclerc', escuderia: 'Ferrari', vueltas: 52, tiempo: '+18.689s', puntos: 2 },
        { posicion: 10, numero: 55, nombrePiloto: 'Carlos Sainz', escuderia: 'Ferrari', vueltas: 52, tiempo: '+19.448s', puntos: 1 },
        { posicion: 11, numero: 2, nombrePiloto: 'Logan Sargeant', escuderia: 'Williams', vueltas: 52, tiempo: '+23.632s', puntos: 0 },
        { posicion: 12, numero: 77, nombrePiloto: 'Valtteri Bottas', escuderia: 'Alfa Romeo', vueltas: 52, tiempo: '+25.830s', puntos: 0 },
        { posicion: 13, numero: 27, nombrePiloto: 'Nico Hulkenberg', escuderia: 'Haas', vueltas: 52, tiempo: '+26.663s', puntos: 0 },
        { posicion: 14, numero: 18, nombrePiloto: 'Lance Stroll', escuderia: 'Aston Martin', vueltas: 52, tiempo: '+27.483s', puntos: 0 },
        { posicion: 15, numero: 24, nombrePiloto: 'Zhou Guanyu', escuderia: 'Alfa Romeo', vueltas: 52, tiempo: '+29.820s', puntos: 0 },
        { posicion: 16, numero: 22, nombrePiloto: 'Yuki Tsunoda', escuderia: 'Alpha Tauri', vueltas: 52, tiempo: '+31.225s', puntos: 0 },
        { posicion: 17, numero: 21, nombrePiloto: 'Nyck De Vries', escuderia: 'Alpha Tauri', vueltas: 52, tiempo: '+33.128s', puntos: 0 },
        { posicion: 18, numero: 10, nombrePiloto: 'Pierre Gasly', escuderia: 'Alpine', vueltas: 46, tiempo: 'Abandono', puntos: 0 },
        { posicion: 19, numero: 20, nombrePiloto: 'Kevin Magnussen', escuderia: 'Haas', vueltas: 31, tiempo: 'Abandono', puntos: 0 },
        { posicion: 20, numero: 31, nombrePiloto: 'Esteban Ocon', escuderia: 'Alpine', vueltas: 9, tiempo: 'Abandono', puntos: 0 },
      ],
      fecha: 'Domingo, 9 Julio 2023, 11:00AM',
      pista: 'Circuito de Silverstone, Silverstone',
      nota: 'Verstappen obtuvo un punto adicional por marcar la vuelta más rápida de la carrera. Stroll recibió una penalización de cinco segundos por provocar una colisión.'
    };
    this.carreras['GP de Hungría'] = {
      resultados: [
        { posicion: 1, numero: 1, nombrePiloto: 'Max Verstappen', escuderia: 'Red Bull', vueltas: 70, tiempo: '1:38:08.634', puntos: 26 },
        { posicion: 2, numero: 4, nombrePiloto: 'Lando Norris', escuderia: 'McLaren', vueltas: 70, tiempo: '+33.731s', puntos: 18 },
        { posicion: 3, numero: 11, nombrePiloto: 'Sergio Pérez', escuderia: 'Red Bull', vueltas: 70, tiempo: '+37.603s', puntos: 15 },
        { posicion: 4, numero: 44, nombrePiloto: 'Lewis Hamilton', escuderia: 'Mercedes', vueltas: 70, tiempo: '+39.134s', puntos: 12 },
        { posicion: 5, numero: 81, nombrePiloto: 'Oscar Piastri', escuderia: 'McLaren', vueltas: 70, tiempo: '+62.572s', puntos: 10 },
        { posicion: 6, numero: 63, nombrePiloto: 'George Russell', escuderia: 'Mercedes', vueltas: 70, tiempo: '+65.825s', puntos: 8 },
        { posicion: 7, numero: 16, nombrePiloto: 'Charles Leclerc', escuderia: 'Ferrari', vueltas: 70, tiempo: '+70.317s', puntos: 6 },
        { posicion: 8, numero: 55, nombrePiloto: 'Carlos Sainz', escuderia: 'Ferrari', vueltas: 70, tiempo: '+71.073s', puntos: 4 },
        { posicion: 9, numero: 14, nombrePiloto: 'Fernando Alonso', escuderia: 'Aston Martin', vueltas: 70, tiempo: '+75.709s', puntos: 2 },
        { posicion: 10, numero: 18, nombrePiloto: 'Lance Stroll', escuderia: 'Aston Martin', vueltas: 69, tiempo: '+1 lap', puntos: 1 },
        { posicion: 11, numero: 23, nombrePiloto: 'Alexander Albon', escuderia: 'Williams', vueltas: 69, tiempo: '+1 lap', puntos: 0 },
        { posicion: 12, numero: 77, nombrePiloto: 'Valtteri Bottas', escuderia: 'Alfa Romeo', vueltas: 69, tiempo: '+1 lap', puntos: 0 },
        { posicion: 13, numero: 3, nombrePiloto: 'Daniel Ricciardo', escuderia: 'Alpha Tauri', vueltas: 69, tiempo: '+1 lap', puntos: 0 },
        { posicion: 14, numero: 27, nombrePiloto: 'Nico Hulkenberg', escuderia: 'Haas', vueltas: 69, tiempo: '+1 lap', puntos: 0 },
        { posicion: 15, numero: 22, nombrePiloto: 'Yuki Tsunoda', escuderia: 'Alpha Tauri', vueltas: 69, tiempo: '+1 lap', puntos: 0 },
        { posicion: 16, numero: 24, nombrePiloto: 'Zhou Guanyu', escuderia: 'Alfa Romeo', vueltas: 69, tiempo: '+1 lap', puntos: 0 },
        { posicion: 17, numero: 20, nombrePiloto: 'Kevin Magnussen', escuderia: 'Haas', vueltas: 69, tiempo: '+1 lap', puntos: 0 },
        { posicion: 18, numero: 2, nombrePiloto: 'Logan Sargeant', escuderia: 'Williams', vueltas: 67, tiempo: 'Abandono', puntos: 0 },
        { posicion: 19, numero: 31, nombrePiloto: 'Esteban Ocon', escuderia: 'Alpine', vueltas: 2, tiempo: 'Abandono', puntos: 0 },
        { posicion: 20, numero: 10, nombrePiloto: 'Pierre Gasly', escuderia: 'Alpine', vueltas: 1, tiempo: 'Abandono', puntos: 0 },
      ],
      fecha: 'Domingo, 23 Julio 2023, 10:00AM',
      pista: 'Hungaroring, Budapest',
      nota: 'Verstappen obtuvo un punto adicional por marcar la vuelta más rápida de la carrera. Leclerc recibió una penalización de cinco segundos por exceso de velocidad en el pit lane.'
    };
    this.carreras['GP de Bélgica'] = {
      resultados: [
        { posicion: 1, numero: 1, nombrePiloto: 'Max Verstappen', escuderia: 'Red Bull', vueltas: 44, tiempo: '1:22:30.450', puntos: 25 },
        { posicion: 2, numero: 11, nombrePiloto: 'Sergio Pérez', escuderia: 'Red Bull', vueltas: 44, tiempo: '+22.305s', puntos: 18 },
        { posicion: 3, numero: 16, nombrePiloto: 'Charles Leclerc', escuderia: 'Ferrari', vueltas: 44, tiempo: '+32.259s', puntos: 15 },
        { posicion: 4, numero: 44, nombrePiloto: 'Lewis Hamilton', escuderia: 'Mercedes', vueltas: 44, tiempo: '+49.671s', puntos: 13 },
        { posicion: 5, numero: 14, nombrePiloto: 'Fernando Alonso', escuderia: 'Aston Martin', vueltas: 44, tiempo: '+56.184s', puntos: 10 },
        { posicion: 6, numero: 63, nombrePiloto: 'George Russell', escuderia: 'Mercedes', vueltas: 44, tiempo: '+63.101s', puntos: 8 },
        { posicion: 7, numero: 4, nombrePiloto: 'Lando Norris', escuderia: 'McLaren', vueltas: 44, tiempo: '+73.719s', puntos: 6 },
        { posicion: 8, numero: 31, nombrePiloto: 'Esteban Ocon', escuderia: 'Alpine', vueltas: 44, tiempo: '+74.719s', puntos: 4 },
        { posicion: 9, numero: 18, nombrePiloto: 'Lance Stroll', escuderia: 'Aston Martin', vueltas: 44, tiempo: '+79.340s', puntos: 2 },
        { posicion: 10, numero: 22, nombrePiloto: 'Yuki Tsunoda', escuderia: 'Alpha Tauri', vueltas: 44, tiempo: '+80.221s', puntos: 1 },
        { posicion: 11, numero: 10, nombrePiloto: 'Pierre Gasly', escuderia: 'Alpine', vueltas: 44, tiempo: '+83.084s', puntos: 0 },
        { posicion: 12, numero: 77, nombrePiloto: 'Valtteri Bottas', escuderia: 'Alfa Romeo', vueltas: 44, tiempo: '+85.191s', puntos: 0 },
        { posicion: 13, numero: 24, nombrePiloto: 'Zhou Guanyu', escuderia: 'Alfa Romeo', vueltas: 44, tiempo: '+95.441s', puntos: 0 },
        { posicion: 14, numero: 23, nombrePiloto: 'Alexander Albon', escuderia: 'Williams', vueltas: 44, tiempo: '+96.184s', puntos: 0 },
        { posicion: 15, numero: 20, nombrePiloto: 'Kevin Magnussen', escuderia: 'Haas', vueltas: 44, tiempo: '+101.754s', puntos: 0 },
        { posicion: 16, numero: 3, nombrePiloto: 'Daniel Ricciardo', escuderia: 'Alpha Tauri', vueltas: 44, tiempo: '+103.071s', puntos: 0 },
        { posicion: 17, numero: 2, nombrePiloto: 'Logan Sargeant', escuderia: 'Williams', vueltas: 44, tiempo: '+104.476s', puntos: 0 },
        { posicion: 18, numero: 27, nombrePiloto: 'Nico Hulkenberg', escuderia: 'Haas', vueltas: 44, tiempo: '+110.450s', puntos: 0 },
        { posicion: 19, numero: 55, nombrePiloto: 'Carlos Sainz', escuderia: 'Ferrari', vueltas: 23, tiempo: 'Abandono', puntos: 0 },
        { posicion: 20, numero: 81, nombrePiloto: 'Oscar Piastri', escuderia: 'McLaren', vueltas: 0, tiempo: 'Abandono', puntos: 0 },
      ],
      fecha: 'Domingo, 30 Julio  2023, 10:00AM',
      pista: 'Circuito de Spa-Francorchamps, Spa-Francorchamps',
      nota: 'Hamilton obtuvo un punto adicional por marcar la vuelta más rápida de la carrera.'
    };
    this.carreras['GP de Países Bajos'] = {
      resultados: [
        { posicion: 1, numero: 1, nombrePiloto: 'Max Verstappen', escuderia: 'Red Bull', vueltas: 72, tiempo: '2:24:04.411', puntos: 25 },
        { posicion: 2, numero: 14, nombrePiloto: 'Fernando Alonso', escuderia: 'Aston Martin', vueltas: 72, tiempo: '+3.744s', puntos: 19 },
        { posicion: 3, numero: 10, nombrePiloto: 'Pierre Gasly', escuderia: 'Alpine', vueltas: 72, tiempo: '+7.058s', puntos: 15 },
        { posicion: 4, numero: 11, nombrePiloto: 'Sergio Pérez', escuderia: 'Red Bull', vueltas: 72, tiempo: '+10.068s', puntos: 12 },
        { posicion: 5, numero: 55, nombrePiloto: 'Carlos Sainz', escuderia: 'Ferrari', vueltas: 72, tiempo: '+12.541s', puntos: 10 },
        { posicion: 6, numero: 44, nombrePiloto: 'Lewis Hamilton', escuderia: 'Mercedes', vueltas: 72, tiempo: '+13.209s', puntos: 8 },
        { posicion: 7, numero: 4, nombrePiloto: 'Lando Norris', escuderia: 'McLaren', vueltas: 72, tiempo: '+13.232s', puntos: 6 },
        { posicion: 8, numero: 23, nombrePiloto: 'Alexander Albon', escuderia: 'Williams', vueltas: 72, tiempo: '+15.155s', puntos: 4 },
        { posicion: 9, numero: 81, nombrePiloto: 'Oscar Piastri', escuderia: 'McLaren', vueltas: 72, tiempo: '+16.580s', puntos: 2 },
        { posicion: 10, numero: 31, nombrePiloto: 'Esteban Ocon', escuderia: 'Alpine', vueltas: 72, tiempo: '+18.346s', puntos: 1 },
        { posicion: 11, numero: 18, nombrePiloto: 'Lance Stroll', escuderia: 'Aston Martin', vueltas: 72, tiempo: '+20.087s', puntos: 0 },
        { posicion: 12, numero: 27, nombrePiloto: 'Nico Hulkenberg', escuderia: 'Haas', vueltas: 72, tiempo: '+20.840s', puntos: 0 },
        { posicion: 13, numero: 40, nombrePiloto: 'Liam Lawson', escuderia: 'Alpha Tauri', vueltas: 72, tiempo: '+26.147s', puntos: 0 },
        { posicion: 14, numero: 77, nombrePiloto: 'Valtteri Bottas', escuderia: 'Alfa Romeo', vueltas: 72, tiempo: '+27.388s', puntos: 0 },
        { posicion: 15, numero: 22, nombrePiloto: 'Yuki Tsunoda', escuderia: 'Alpha Tauri', vueltas: 72, tiempo: '+29.893s', puntos: 0 },
        { posicion: 16, numero: 20, nombrePiloto: 'Kevin Magnussen', escuderia: 'Haas', vueltas: 72, tiempo: '+31.410s', puntos: 0 },
        { posicion: 17, numero: 63, nombrePiloto: 'George Russell', escuderia: 'Mercedes', vueltas: 72, tiempo: '+55.754s', puntos: 0 },
        { posicion: 18, numero: 24, nombrePiloto: 'Zhou Guanyu', escuderia: 'Alfa Romeo', vueltas: 62, tiempo: 'Abandono', puntos: 0 },
        { posicion: 19, numero: 16, nombrePiloto: 'Charles Leclerc', escuderia: 'Ferrari', vueltas: 41, tiempo: 'Abandono', puntos: 0 },
        { posicion: 20, numero: 2, nombrePiloto: 'Logan Sargeant', escuderia: 'Williams', vueltas: 14, tiempo: 'Abandono', puntos: 0 },
      ],
      fecha: 'Domingo, 27 Agosto 2023, 10:00AM',
      pista: 'Circuito Zandvoort, Zandvoort',
      nota: 'Alonso anotó un punto adicional por marcar la vuelta más rápida de la carrera. Tsunoda recibió una penalización de cinco segundos por provocar una colisión. Pérez recibió una penalización de cinco segundos por exceso de velocidad en el pit lane. Magnussen recibió una penalización de cinco segundos por quedar más de 10 coches detrás del coche de seguridad.'
    };
    this.carreras['GP de Italia'] = {
      resultados: [
        { posicion: 1, numero: 1, nombrePiloto: 'Max Verstappen', escuderia: 'Red Bull', vueltas: 51, tiempo: '1:13:41.143', puntos: 25 },
        { posicion: 2, numero: 11, nombrePiloto: 'Sergio Pérez', escuderia: 'Red Bull', vueltas: 51, tiempo: '+6.064s', puntos: 18 },
        { posicion: 3, numero: 55, nombrePiloto: 'Carlos Sainz', escuderia: 'Ferrari', vueltas: 51, tiempo: '+11.193s', puntos: 15 },
        { posicion: 4, numero: 16, nombrePiloto: 'Charles Leclerc', escuderia: 'Ferrari', vueltas: 51, tiempo: '+11.377s', puntos: 12 },
        { posicion: 5, numero: 63, nombrePiloto: 'George Russell', escuderia: 'Mercedes', vueltas: 51, tiempo: '+23.028s', puntos: 10 },
        { posicion: 6, numero: 44, nombrePiloto: 'Lewis Hamilton', escuderia: 'Mercedes', vueltas: 51, tiempo: '+42.679s', puntos: 8 },
        { posicion: 7, numero: 23, nombrePiloto: 'Alexander Albon', escuderia: 'Williams', vueltas: 51, tiempo: '+45.106s', puntos: 6 },
        { posicion: 8, numero: 4, nombrePiloto: 'Lando Norris', escuderia: 'McLaren', vueltas: 51, tiempo: '+45.449s', puntos: 4 },
        { posicion: 9, numero: 14, nombrePiloto: 'Fernando Alonso', escuderia: 'Aston Martin', vueltas: 51, tiempo: '+46.294s', puntos: 2 },
        { posicion: 10, numero: 77, nombrePiloto: 'Valtteri Bottas', escuderia: 'Alfa Romeo', vueltas: 51, tiempo: '+64.056s', puntos: 1 },
        { posicion: 11, numero: 40, nombrePiloto: 'Liam Lawson', escuderia: 'Alpha Tauri', vueltas: 51, tiempo: '+70.638s', puntos: 0 },
        { posicion: 12, numero: 81, nombrePiloto: 'Oscar Piastri', escuderia: 'McLaren', vueltas: 51, tiempo: '+73.074s', puntos: 0 },
        { posicion: 13, numero: 2, nombrePiloto: 'Logan Sargeant', escuderia: 'Williams', vueltas: 51, tiempo: '+78.557s', puntos: 0 },
        { posicion: 14, numero: 24, nombrePiloto: 'Zhou Guanyu', escuderia: 'Alfa Romeo', vueltas: 51, tiempo: '+80.164s', puntos: 0 },
        { posicion: 15, numero: 10, nombrePiloto: 'Pierre Gasly', escuderia: 'Alpine', vueltas: 51, tiempo: '+82.510s', puntos: 0 },
        { posicion: 16, numero: 18, nombrePiloto: 'Lance Stroll', escuderia: 'Aston Martin', vueltas: 51, tiempo: '+87.266s', puntos: 0 },
        { posicion: 17, numero: 27, nombrePiloto: 'Nico Hulkenberg', escuderia: 'Haas', vueltas: 50, tiempo: '+1 lap', puntos: 0 },
        { posicion: 18, numero: 20, nombrePiloto: 'Kevin Magnussen', escuderia: 'Haas', vueltas: 50, tiempo: '+1 lap', puntos: 0 },
        { posicion: 19, numero: 31, nombrePiloto: 'Esteban Ocon', escuderia: 'Alpine', vueltas: 39, tiempo: 'Abandono', puntos: 0 },
        { posicion: 20, numero: 22, nombrePiloto: 'Yuki Tsunoda', escuderia: 'Alpha Tauri', vueltas: 0, tiempo: 'Abandono', puntos: 0 },
      ],
      fecha: 'Domingo, 3 Septiembre 2023, 10:00AM',
      pista: 'Autódromo Nacional de Monza, Monza',
      nota: 'Russell y Piastri recibieron penalizaciones de cinco segundos por abandonar la pista y obtener una ventaja. Hamilton y Sargeant recibieron penalizaciones de cinco segundos por provocar una colisión.'
    };
    this.carreras['GP de Singapur'] = {
      resultados: [
        { posicion: 1, numero: 55, nombrePiloto: 'Carlos Sainz', escuderia: 'Ferrari', vueltas: 62, tiempo: '1:46:37.418', puntos: 25 },
        { posicion: 2, numero: 4, nombrePiloto: 'Lando Norris', escuderia: 'McLaren', vueltas: 62, tiempo: '+0.812s', puntos: 18 },
        { posicion: 3, numero: 44, nombrePiloto: 'Lewis Hamilton', escuderia: 'Mercedes', vueltas: 62, tiempo: '+1.269s', puntos: 16 },
        { posicion: 4, numero: 16, nombrePiloto: 'Charles Leclerc', escuderia: 'Ferrari', vueltas: 62, tiempo: '+21.177s', puntos: 12 },
        { posicion: 5, numero: 1, nombrePiloto: 'Max Verstappen', escuderia: 'Red Bull', vueltas: 62, tiempo: '+21.441s', puntos: 10 },
        { posicion: 6, numero: 10, nombrePiloto: 'Pierre Gasly', escuderia: 'Alpine', vueltas: 62, tiempo: '+38.441s', puntos: 8 },
        { posicion: 7, numero: 81, nombrePiloto: 'Oscar Piastri', escuderia: 'McLaren', vueltas: 62, tiempo: '+41.479s', puntos: 6 },
        { posicion: 8, numero: 11, nombrePiloto: 'Sergio Pérez', escuderia: 'Red Bull', vueltas: 62, tiempo: '+59.534s', puntos: 4 },
        { posicion: 9, numero: 40, nombrePiloto: 'Liam Lawson', escuderia: 'Alpha Tauri', vueltas: 62, tiempo: '+65.918s', puntos: 2 },
        { posicion: 10, numero: 20, nombrePiloto: 'Kevin Magnussen', escuderia: 'Haas', vueltas: 62, tiempo: '+72.116s', puntos: 1 },
        { posicion: 11, numero: 23, nombrePiloto: 'Alexander Albon', escuderia: 'Williams', vueltas: 62, tiempo: '+73.417s', puntos: 0 },
        { posicion: 12, numero: 24, nombrePiloto: 'Zhou Guanyu', escuderia: 'Alfa Romeo', vueltas: 62, tiempo: '+83.649s', puntos: 0 },
        { posicion: 13, numero: 27, nombrePiloto: 'Nico Hulkenberg', escuderia: 'Haas', vueltas: 62, tiempo: '+86.201s', puntos: 0 },
        { posicion: 14, numero: 2, nombrePiloto: 'Logan Sargeant', escuderia: 'Williams', vueltas: 62, tiempo: '+86.889s', puntos: 0 },
        { posicion: 15, numero: 14, nombrePiloto: 'Fernando Alonso', escuderia: 'Aston Martin', vueltas: 62, tiempo: '+87.603s', puntos: 0 },
        { posicion: 16, numero: 63, nombrePiloto: 'George Russell', escuderia: 'Mercedes', vueltas: 61, tiempo: 'Abandono', puntos: 0 },
        { posicion: 17, numero: 77, nombrePiloto: 'Valtteri Bottas', escuderia: 'Alfa Romeo', vueltas: 51, tiempo: 'Abandono', puntos: 0 },
        { posicion: 18, numero: 31, nombrePiloto: 'Esteban Ocon', escuderia: 'Alpine', vueltas: 42, tiempo: 'Abandono', puntos: 0 },
        { posicion: 19, numero: 22, nombrePiloto: 'Yuki Tsunoda', escuderia: 'Alpha Tauri', vueltas: 0, tiempo: 'Abandono', puntos: 0 },
      ],
      fecha: 'Domingo, 17 Septiembre 2023, 9:00AM',
      pista: 'Circuito callejero de Marina Bay, Marina Bay',
      nota: 'Hamilton obtuvo un punto adicional por marcar la vuelta más rápida de la carrera. Pérez recibió una penalización de cinco segundos por provocar una colisión.'
    };
    this.carreras['GP de Japón'] = {
      resultados: [
        { posicion: 1, numero: 1, nombrePiloto: 'Max Verstappen', escuderia: 'Red Bull', vueltas: 53, tiempo: '1:30:58.421', puntos: 26 },
        { posicion: 2, numero: 4, nombrePiloto: 'Lando Norris', escuderia: 'McLaren', vueltas: 53, tiempo: '+19.387s', puntos: 18 },
        { posicion: 3, numero: 81, nombrePiloto: 'Oscar Piastri', escuderia: 'McLaren', vueltas: 53, tiempo: '+36.494s ', puntos: 15 },
        { posicion: 4, numero: 16, nombrePiloto: 'Charles Leclerc', escuderia: 'Ferrari', vueltas: 53, tiempo: '+43.998s', puntos: 12 },
        { posicion: 5, numero: 44, nombrePiloto: 'Lewis Hamilton', escuderia: 'Mercedes', vueltas: 53, tiempo: '+49.376s', puntos: 10 },
        { posicion: 6, numero: 55, nombrePiloto: 'Carlos Sainz', escuderia: 'Ferrari', vueltas: 53, tiempo: '+50.221s', puntos: 8 },
        { posicion: 7, numero: 63, nombrePiloto: 'George Russell', escuderia: 'Mercedes', vueltas: 53, tiempo: '+57.659s', puntos: 6 },
        { posicion: 8, numero: 14, nombrePiloto: 'Fernando Alonso', escuderia: 'Aston Martin', vueltas: 53, tiempo: '+74.725s', puntos: 4 },
        { posicion: 9, numero: 31, nombrePiloto: 'Esteban Ocon', escuderia: 'Alpine', vueltas: 53, tiempo: '+79.678s', puntos: 2 },
        { posicion: 10, numero: 10, nombrePiloto: 'Pierre Gasly', escuderia: 'Alpine', vueltas: 53, tiempo: '+83.155s', puntos: 1 },
        { posicion: 11, numero: 40, nombrePiloto: 'Liam Lawson', escuderia: 'Alpha Tauri', vueltas: 52, tiempo: '+1 lap', puntos: 0 },
        { posicion: 12, numero: 22, nombrePiloto: 'Yuki Tsunoda', escuderia: 'Alpha Tauri', vueltas: 52, tiempo: '+1 lap', puntos: 0 },
        { posicion: 13, numero: 24, nombrePiloto: 'Zhou Guanyu', escuderia: 'Alfa Romeo', vueltas: 52, tiempo: '+1 lap', puntos: 0 },
        { posicion: 14, numero: 27, nombrePiloto: 'Nico Hulkenberg', escuderia: 'Haas', vueltas: 52, tiempo: '+1 lap', puntos: 0 },
        { posicion: 15, numero: 20, nombrePiloto: 'Kevin Magnussen', escuderia: 'Haas', vueltas: 52, tiempo: '+1 lap', puntos: 0 },
        { posicion: 16, numero: 23, nombrePiloto: 'Alexander Albon', escuderia: 'Williams', vueltas: 26, tiempo: 'Abandono', puntos: 0 },
        { posicion: 17, numero: 2, nombrePiloto: 'Logan Sargeant', escuderia: 'Williams', vueltas: 22, tiempo: 'Abandono', puntos: 0 },
        { posicion: 18, numero: 18, nombrePiloto: 'Lance Stroll', escuderia: 'Aston Martin', vueltas: 20, tiempo: 'Abandono', puntos: 0 },
        { posicion: 19, numero: 11, nombrePiloto: 'Sergio Pérez', escuderia: 'Red Bull', vueltas: 15, tiempo: 'Abandono', puntos: 0 },
        { posicion: 20, numero: 77, nombrePiloto: 'Valtteri Bottas', escuderia: 'Alfa Romeo', vueltas: 7, tiempo: 'Abandono', puntos: 0 },
      ],
      fecha: 'Domingo, 24 Septiembre 2023, 2:00AM',
      pista: 'Circuito de carreras internacional de Suzuka, Suzuka',
      nota: 'Verstappen obtuvo un punto adicional por marcar la vuelta más rápida de la carrera.'
    };
    this.carreras['GP de Qatar'] = {
      resultados: [
        { posicion: 1, numero: 1, nombrePiloto: 'Max Verstappen', escuderia: 'Red Bull', vueltas: 57, tiempo: '1:27:39.168', puntos: 26 },
        { posicion: 2, numero: 81, nombrePiloto: 'Oscar Piastri', escuderia: 'McLaren', vueltas: 57, tiempo: '+4.833s	', puntos: 18 },
        { posicion: 3, numero: 4, nombrePiloto: 'Lando Norris', escuderia: 'McLaren', vueltas: 57, tiempo: '+5.969s', puntos: 15 },
        { posicion: 4, numero: 63, nombrePiloto: 'George Russell', escuderia: 'Mercedes', vueltas: 57, tiempo: '+34.119s', puntos: 12 },
        { posicion: 5, numero: 16, nombrePiloto: 'Charles Leclerc', escuderia: 'Ferrari', vueltas: 57, tiempo: '+38.976s', puntos: 10 },
        { posicion: 6, numero: 14, nombrePiloto: 'Fernando Alonso', escuderia: 'Aston Martin', vueltas: 57, tiempo: '+49.032s', puntos: 8 },
        { posicion: 7, numero: 31, nombrePiloto: 'Esteban Ocon', escuderia: 'Alpine', vueltas: 57, tiempo: '+62.390s', puntos: 6 },
        { posicion: 8, numero: 77, nombrePiloto: 'Valtteri Bottas', escuderia: 'Alfa Romeo', vueltas: 57, tiempo: '+66.563s', puntos: 4 },
        { posicion: 9, numero: 24, nombrePiloto: 'Zhou Guanyu', escuderia: 'Alfa Romeo', vueltas: 57, tiempo: '+76.127s', puntos: 2 },
        { posicion: 10, numero: 11, nombrePiloto: 'Sergio Pérez', escuderia: 'Red Bull', vueltas: 57, tiempo: '+80.181s', puntos: 1 },
        { posicion: 11, numero: 18, nombrePiloto: 'Lance Stroll', escuderia: 'Aston Martin', vueltas: 57, tiempo: '+81.652s', puntos: 0 },
        { posicion: 12, numero: 10, nombrePiloto: 'Pierre Gasly', escuderia: 'Alpine', vueltas: 57, tiempo: '+82.300s', puntos: 0 },
        { posicion: 13, numero: 23, nombrePiloto: 'Alexander Albon', escuderia: 'Williams', vueltas: 57, tiempo: '+91.014s', puntos: 0 },
        { posicion: 14, numero: 20, nombrePiloto: 'Kevin Magnussen', escuderia: 'Haas', vueltas: 56, tiempo: '+1 lap', puntos: 0 },
        { posicion: 15, numero: 22, nombrePiloto: 'Yuki Tsunoda', escuderia: 'Alpha Tauri', vueltas: 56, tiempo: '+1 lap', puntos: 0 },
        { posicion: 16, numero: 27, nombrePiloto: 'Nico Hulkenberg', escuderia: 'Haas', vueltas: 56, tiempo: '+1 lap', puntos: 0 },
        { posicion: 17, numero: 40, nombrePiloto: 'Liam Lawson', escuderia: 'Alpha Tauri', vueltas: 56, tiempo: '+1 lap', puntos: 0 },
        { posicion: 18, numero: 2, nombrePiloto: 'Logan Sargeant', escuderia: 'Williams', vueltas: 40, tiempo: 'Abandono', puntos: 0 },
        { posicion: 19, numero: 44, nombrePiloto: 'Lewis Hamilton', escuderia: 'Mercedes', vueltas: 0, tiempo: 'Abandono', puntos: 0 },
        { posicion: 20, numero: 55, nombrePiloto: 'Carlos Sainz', escuderia: 'Ferrari', vueltas: 0, tiempo: 'Abandono', puntos: 0 },  
      ],
      fecha: 'Domingo, 8 Octubre 2023, 2:00PM',
      pista: 'Circuito Internacional de Lusail, Lusail',
      nota: 'Verstappen obtuvo un punto adicional por marcar la vuelta más rápida de la carrera. Pérez y Gasly recibieron tres penalizaciones de cinco segundos por infracciones de los límites de la pista. Stroll y Albon recibieron cada uno dos penalizaciones de cinco segundos por infracciones de los límites de la pista.'
    };
    this.carreras['GP de Estados Unidos'] = {
      resultados: [
        { posicion: 1, numero: 1, nombrePiloto: 'Max Verstappen', escuderia: 'Red Bull', vueltas: 56, tiempo: '1:35:21.362', puntos: 25 },
        { posicion: 2, numero: 44, nombrePiloto: 'Lewis Hamilton', escuderia: 'Mercedes', vueltas: 56, tiempo: '+2.225s', puntos: 0 },
        { posicion: 3, numero: 4, nombrePiloto: 'Lando Norris', escuderia: 'McLaren', vueltas: 56, tiempo: '+10.730s', puntos: 18 },
        { posicion: 4, numero: 55, nombrePiloto: 'Carlos Sainz', escuderia: 'Ferrari', vueltas: 56, tiempo: '+15.134s', puntos: 15 },
        { posicion: 5, numero: 11, nombrePiloto: 'Sergio Pérez', escuderia: 'Red Bull', vueltas: 56, tiempo: '+18.460s', puntos: 12 },
        { posicion: 6, numero: 16, nombrePiloto: 'Charles Leclerc', escuderia: 'Ferrari', vueltas: 56, tiempo: '+24.662s', puntos: 0 },
        { posicion: 7, numero: 63, nombrePiloto: 'George Russell', escuderia: 'Mercedes', vueltas: 56, tiempo: '+24.999s', puntos: 10 },
        { posicion: 8, numero: 10, nombrePiloto: 'Pierre Gasly', escuderia: 'Alpine', vueltas: 56, tiempo: '+47.996s', puntos: 8 },
        { posicion: 9, numero: 18, nombrePiloto: 'Lance Stroll', escuderia: 'Aston Martin', vueltas: 56, tiempo: '+48.696s', puntos: 6 },
        { posicion: 10, numero: 22, nombrePiloto: 'Yuki Tsunoda', escuderia: 'Alpha Tauri', vueltas: 56, tiempo: '+74.385s', puntos: 5 },
        { posicion: 11, numero: 23, nombrePiloto: 'Alexander Albon', escuderia: 'Williams', vueltas: 56, tiempo: '+86.714s', puntos: 2 },
        { posicion: 12, numero: 2, nombrePiloto: 'Logan Sargeant', escuderia: 'Williams', vueltas: 56, tiempo: '+87.998s', puntos: 1 },
        { posicion: 13, numero: 27, nombrePiloto: 'Nico Hulkenberg', escuderia: 'Haas', vueltas: 56, tiempo: '+89.904s', puntos: 0 },
        { posicion: 14, numero: 77, nombrePiloto: 'Valtteri Bottas', escuderia: 'Alfa Romeo', vueltas: 56, tiempo: '+98.601s', puntos: 0 },
        { posicion: 15, numero: 24, nombrePiloto: 'Zhou Guanyu', escuderia: 'Alfa Romeo', vueltas: 55, tiempo: '+1 lap', puntos: 0 },
        { posicion: 16, numero: 20, nombrePiloto: 'Kevin Magnussen', escuderia: 'Haas', vueltas: 55, tiempo: '+1 lap', puntos: 0 },
        { posicion: 17, numero: 3, nombrePiloto: 'Daniel Ricciardo', escuderia: 'Alpha Tauri', vueltas: 55, tiempo: '+1 lap', puntos: 0 },
        { posicion: 18, numero: 14, nombrePiloto: 'Fernando Alonso', escuderia: 'Aston Martin', vueltas: 49, tiempo: 'Abandono', puntos: 0 },
        { posicion: 19, numero: 81, nombrePiloto: 'Oscar Piastri', escuderia: 'McLaren', vueltas: 10, tiempo: 'Abandono', puntos: 0 },
        { posicion: 20, numero: 31, nombrePiloto: 'Esteban Ocon', escuderia: 'Alpine', vueltas: 6, tiempo: 'Abandono', puntos: 0 },
      ],
      fecha: 'Domingo, 22 Octubre 2023, 4:00PM',
      pista: 'Circuito de las Américas, Austin',
      nota: 'Tsunoda obtuvo un punto adicional por marcar la vuelta más rápida de la carrera. Albon recibió una penalización de cinco segundos por infringir los límites de la pista. Hamilton y Leclerc descalificados por infracciones técnicas.'
    };
    this.carreras['GP de México'] = {
      resultados: [
        { posicion: 1, numero: 1, nombrePiloto: 'Max Verstappen', escuderia: 'Red Bull', vueltas: 71, tiempo: '2:02:30.814', puntos: 25 },
        { posicion: 2, numero: 44, nombrePiloto: 'Lewis Hamilton', escuderia: 'Mercedes', vueltas: 71, tiempo: '+13.875s', puntos: 19 },
        { posicion: 3, numero: 16, nombrePiloto: 'Charles Leclerc', escuderia: 'Ferrari', vueltas: 71, tiempo: '+23.124s', puntos: 15 },
        { posicion: 4, numero: 55, nombrePiloto: 'Carlos Sainz', escuderia: 'Ferrari', vueltas: 71, tiempo: '+27.154s', puntos: 12 },
        { posicion: 5, numero: 4, nombrePiloto: 'Lando Norris', escuderia: 'McLaren', vueltas: 71, tiempo: '+33.266s', puntos: 10 },
        { posicion: 6, numero: 63, nombrePiloto: 'George Russell', escuderia: 'Mercedes', vueltas: 71, tiempo: '+41.020s', puntos: 8 },
        { posicion: 7, numero: 3, nombrePiloto: 'Daniel Ricciardo', escuderia: 'Alpha Tauri', vueltas: 71, tiempo: '+41.570s', puntos: 6 },
        { posicion: 8, numero: 81, nombrePiloto: 'Oscar Piastri', escuderia: 'McLaren', vueltas: 71, tiempo: '+43.104s', puntos: 4 },
        { posicion: 9, numero: 23, nombrePiloto: 'Alexander Albon', escuderia: 'Williams', vueltas: 71, tiempo: '+48.573s', puntos: 2 },
        { posicion: 10, numero: 31, nombrePiloto: 'Esteban Ocon', escuderia: 'Alpine', vueltas: 71, tiempo: '+62.879s', puntos: 1 },
        { posicion: 11, numero: 10, nombrePiloto: 'Pierre Gasly', escuderia: 'Alpine', vueltas: 71, tiempo: '+66.208s', puntos: 0 },
        { posicion: 12, numero: 22, nombrePiloto: 'Yuki Tsunoda', escuderia: 'Alpha Tauri', vueltas: 71, tiempo: '+78.982s', puntos: 0 },
        { posicion: 13, numero: 27, nombrePiloto: 'Nico Hulkenberg', escuderia: 'Haas', vueltas: 71, tiempo: '+80.309s', puntos: 0 },
        { posicion: 14, numero: 24, nombrePiloto: 'Zhou Guanyu', escuderia: 'Alfa Romeo', vueltas: 71, tiempo: '+81.676s', puntos: 0 },
        { posicion: 15, numero: 77, nombrePiloto: 'Valtteri Bottas', escuderia: 'Alfa Romeo', vueltas: 71, tiempo: '+85.597s', puntos: 0 },
        { posicion: 16, numero: 2, nombrePiloto: 'Logan Sargeant', escuderia: 'Williams', vueltas: 70, tiempo: 'Abandono', puntos: 0 },
        { posicion: 17, numero: 18, nombrePiloto: 'Lance Stroll', escuderia: 'Aston Martin', vueltas: 66, tiempo: 'Abandono', puntos: 0 },
        { posicion: 18, numero: 14, nombrePiloto: 'Fernando Alonso', escuderia: 'Aston Martin', vueltas: 47, tiempo: 'Abandono', puntos: 0 },
        { posicion: 19, numero: 20, nombrePiloto: 'Kevin Magnussen', escuderia: 'Haas', vueltas: 31, tiempo: 'Abandono', puntos: 0 },
        { posicion: 20, numero: 11, nombrePiloto: 'Sergio Pérez', escuderia: 'Red Bull', vueltas: 1, tiempo: 'Abandono', puntos: 0 },
      ],
      fecha: 'Domingo, 29 Octubre 2023, 5:00PM',
      pista: 'Autódromo Hermanos Rodríguez, Ciudad de México',
      nota: 'Hamilton obtuvo un punto adicional por marcar la vuelta más rápida de la carrera. Bottas recibió una penalización de cinco segundos por provocar una colisión.'
    };
    this.carreras['GP de Brasil'] = {
      resultados: [
        { posicion: 1, numero: 1, nombrePiloto: 'Max Verstappen', escuderia: 'Red Bull', vueltas: 71, tiempo: '1:56:48.894', puntos: 25 },
        { posicion: 2, numero: 4, nombrePiloto: 'Lando Norris', escuderia: 'McLaren', vueltas: 71, tiempo: '+8.277s', puntos: 19 },
        { posicion: 3, numero: 14, nombrePiloto: 'Fernando Alonso', escuderia: 'Aston Martin', vueltas: 71, tiempo: '+34.155s', puntos: 15 },
        { posicion: 4, numero: 11, nombrePiloto: 'Sergio Pérez', escuderia: 'Red Bull', vueltas: 71, tiempo: '+34.208s', puntos: 12 },
        { posicion: 5, numero: 18, nombrePiloto: 'Lance Stroll', escuderia: 'Aston Martin', vueltas: 71, tiempo: '+40.845s', puntos: 10 },
        { posicion: 6, numero: 55, nombrePiloto: 'Carlos Sainz', escuderia: 'Ferrari', vueltas: 71, tiempo: '+50.188s', puntos: 8 },
        { posicion: 7, numero: 10, nombrePiloto: 'Pierre Gasly', escuderia: 'Alpine', vueltas: 71, tiempo: '+56.093s', puntos: 6 },
        { posicion: 8, numero: 44, nombrePiloto: 'Lewis Hamilton', escuderia: 'Mercedes', vueltas: 71, tiempo: '+62.859s', puntos: 4 },
        { posicion: 9, numero: 22, nombrePiloto: 'Yuki Tsunoda', escuderia: 'Alpha Tauri', vueltas: 71, tiempo: '+69.880s', puntos: 2 },
        { posicion: 10, numero: 31, nombrePiloto: 'Esteban Ocon', escuderia: 'Alpine', vueltas: 70, tiempo: '+1 lap', puntos: 1 },
        { posicion: 11, numero: 2, nombrePiloto: 'Logan Sargeant', escuderia: 'Williams', vueltas: 70, tiempo: '+1 lap', puntos: 0 },
        { posicion: 12, numero: 27, nombrePiloto: 'Nico Hulkenberg', escuderia: 'Haas', vueltas: 70, tiempo: '+1 lap', puntos: 0 },
        { posicion: 13, numero: 3, nombrePiloto: 'Daniel Ricciardo', escuderia: 'Alpha Tauri', vueltas: 70, tiempo: '+1 lap', puntos: 0 },
        { posicion: 14, numero: 81, nombrePiloto: 'Oscar Piastri', escuderia: 'McLaren', vueltas: 69, tiempo: '+2 laps', puntos: 0 },
        { posicion: 15, numero: 63, nombrePiloto: 'George Russell', escuderia: 'Mercedes', vueltas: 57, tiempo: 'Abandono', puntos: 0 },
        { posicion: 16, numero: 77, nombrePiloto: 'Valtteri Bottas', escuderia: 'Alfa Romeo', vueltas: 39, tiempo: 'Abandono', puntos: 0 },
        { posicion: 17, numero: 24, nombrePiloto: 'Zhou Guanyu', escuderia: 'Alfa Romeo', vueltas: 22, tiempo: 'Abandono', puntos: 0 },
        { posicion: 18, numero: 20, nombrePiloto: 'Kevin Magnussen', escuderia: 'Haas', vueltas: 0, tiempo: 'Abandono', puntos: 0 },
        { posicion: 19, numero: 23, nombrePiloto: 'Alexander Albon', escuderia: 'Williams', vueltas: 0, tiempo: 'Abandono', puntos: 0 },
        { posicion: 20, numero: 16, nombrePiloto: 'Charles Leclerc', escuderia: 'Ferrari', vueltas: 0, tiempo: 'Abandono', puntos: 0 },
      ],
      fecha: 'Domingo, 5 Noviembre 2023, 2:00PM',
      pista: 'Autódromo José Carlos Pace, São Paulo',
      nota: 'Norris obtuvo un punto adicional por marcar la vuelta más rápida de la carrera.'
    };
    this.carreras['GP de Las Vegas'] = {
      resultados: [
        { posicion: 1, numero: 1, nombrePiloto: 'Max Verstappen', escuderia: 'Red Bull', vueltas: 50, tiempo: '1:29:08.289', puntos: 25 },
        { posicion: 2, numero: 16, nombrePiloto: 'Charles Leclerc', escuderia: 'Ferrari', vueltas: 50, tiempo: '+2.070s', puntos: 18 },
        { posicion: 3, numero: 11, nombrePiloto: 'Sergio Pérez', escuderia: 'Red Bull', vueltas: 50, tiempo: '+2.241s', puntos: 15 },
        { posicion: 4, numero: 31, nombrePiloto: 'Esteban Ocon', escuderia: 'Alpine', vueltas: 50, tiempo: '+18.665s', puntos: 12 },
        { posicion: 5, numero: 18, nombrePiloto: 'Lance Stroll', escuderia: 'Aston Martin', vueltas: 50, tiempo: '+20.067s', puntos: 10 },
        { posicion: 6, numero: 55, nombrePiloto: 'Carlos Sainz', escuderia: 'Ferrari', vueltas: 50, tiempo: '+20.834s', puntos: 8 },
        { posicion: 7, numero: 44, nombrePiloto: 'Lewis Hamilton', escuderia: 'Mercedes', vueltas: 50, tiempo: '+21.755s', puntos: 6 },
        { posicion: 8, numero: 63, nombrePiloto: 'George Russell', escuderia: 'Mercedes', vueltas: 50, tiempo: '+23.091s', puntos: 4 },
        { posicion: 9, numero: 14, nombrePiloto: 'Fernando Alonso', escuderia: 'Aston Martin', vueltas: 50, tiempo: '+25.964s', puntos: 2 },
        { posicion: 10, numero: 81, nombrePiloto: 'Oscar Piastri', escuderia: 'McLaren', vueltas: 50, tiempo: '+29.496s', puntos: 2 },
        { posicion: 11, numero: 10, nombrePiloto: 'Pierre Gasly', escuderia: 'Alpine', vueltas: 50, tiempo: '+34.270s', puntos: 0 },
        { posicion: 12, numero: 23, nombrePiloto: 'Alexander Albon', escuderia: 'Williams', vueltas: 50, tiempo: '+43.398s', puntos: 0 },
        { posicion: 13, numero: 20, nombrePiloto: 'Kevin Magnussen', escuderia: 'Haas', vueltas: 50, tiempo: '+44.825s', puntos: 0 },
        { posicion: 14, numero: 3, nombrePiloto: 'Daniel Ricciardo', escuderia: 'Alpha Tauri', vueltas: 50, tiempo: '+48.525s', puntos: 0 },
        { posicion: 15, numero: 24, nombrePiloto: 'Zhou Guanyu', escuderia: 'Alfa Romeo', vueltas: 50, tiempo: '+50.162s', puntos: 0 },
        { posicion: 16, numero: 2, nombrePiloto: 'Logan Sargeant', escuderia: 'Williams', vueltas: 50, tiempo: '+50.882s', puntos: 0 },
        { posicion: 17, numero: 77, nombrePiloto: 'Valtteri Bottas', escuderia: 'Alfa Romeo', vueltas: 50, tiempo: '+85.350s', puntos: 0 },
        { posicion: 18, numero: 22, nombrePiloto: 'Yuki Tsunoda', escuderia: 'Alpha Tauri', vueltas: 46, tiempo: 'Abandono', puntos: 0 },
        { posicion: 19, numero: 27, nombrePiloto: 'Nico Hulkenberg', escuderia: 'Haas', vueltas: 45, tiempo: 'Abandono', puntos: 0 },
        { posicion: 20, numero: 4, nombrePiloto: 'Lando Norris', escuderia: 'McLaren', vueltas: 2, tiempo: 'Abandono', puntos: 0 },
      ],
      fecha: 'Domingo, 19 Noviembre 2023, 3:00AM',
      pista: 'Circuito del Strip de Las Vegas, Las Vegas',
      nota: 'Piastri obtuvo un punto adicional por marcar la vuelta más rápida de la carrera. Russell recibió una penalización de cinco segundos por provocar una colisión.'
    };
    this.carreras['GP de Abu Dhabi'] = {
      resultados: [
        { posicion: 1, numero: 1, nombrePiloto: 'Max Verstappen', escuderia: 'Red Bull', vueltas: 58, tiempo: '1:27:02.624', puntos: 26 },
        { posicion: 2, numero: 16, nombrePiloto: 'Charles Leclerc', escuderia: 'Ferrari', vueltas: 58, tiempo: '+17.993s', puntos: 18 },
        { posicion: 3, numero: 63, nombrePiloto: 'George Russell', escuderia: 'Mercedes', vueltas: 58, tiempo: '+20.328s', puntos: 15 },
        { posicion: 4, numero: 11, nombrePiloto: 'Sergio Pérez', escuderia: 'Red Bull', vueltas: 58, tiempo: '+21.453s', puntos: 12 },
        { posicion: 5, numero: 4, nombrePiloto: 'Lando Norris', escuderia: 'McLaren', vueltas: 58, tiempo: '+24.284s', puntos: 10 },
        { posicion: 6, numero: 81, nombrePiloto: 'Oscar Piastri', escuderia: 'McLaren', vueltas: 58, tiempo: '+31.487s', puntos: 8 },
        { posicion: 7, numero: 14, nombrePiloto: 'Fernando Alonso', escuderia: 'Aston Martin', vueltas: 58, tiempo: '+39.512s', puntos: 6 },
        { posicion: 8, numero: 22, nombrePiloto: 'Yuki Tsunoda', escuderia: 'Alpha Tauri', vueltas: 58, tiempo: '+43.088s', puntos: 4 },
        { posicion: 9, numero: 44, nombrePiloto: 'Lewis Hamilton', escuderia: 'Mercedes', vueltas: 58, tiempo: '+44.424s', puntos: 2 },
        { posicion: 10, numero: 18, nombrePiloto: 'Lance Stroll', escuderia: 'Aston Martin', vueltas: 58, tiempo: '+55.632s', puntos: 1 },
        { posicion: 11, numero: 3, nombrePiloto: 'Daniel Ricciardo', escuderia: 'Alpha Tauri', vueltas: 58, tiempo: '+56.229s', puntos: 0 },
        { posicion: 12, numero: 31, nombrePiloto: 'Esteban Ocon', escuderia: 'Alpine', vueltas: 58, tiempo: '+66.373s', puntos: 0 },
        { posicion: 13, numero: 10, nombrePiloto: 'Pierre Gasly', escuderia: 'Alpine', vueltas: 58, tiempo: '+70.360s', puntos: 0 },
        { posicion: 14, numero: 23, nombrePiloto: 'Alexander Albon', escuderia: 'Williams', vueltas: 58, tiempo: '+73.184s', puntos: 0 },
        { posicion: 15, numero: 27, nombrePiloto: 'Nico Hulkenberg', escuderia: 'Haas', vueltas: 58, tiempo: '+83.696s', puntos: 0 },
        { posicion: 16, numero: 2, nombrePiloto: 'Logan Sargeant', escuderia: 'Williams', vueltas: 58, tiempo: '+87.791s', puntos: 0 },
        { posicion: 17, numero: 24, nombrePiloto: 'Zhou Guanyu', escuderia: 'Alfa Romeo', vueltas: 58, tiempo: '+89.422s', puntos: 0 },
        { posicion: 18, numero: 55, nombrePiloto: 'Carlos Sainz', escuderia: 'Ferrari', vueltas: 57, tiempo: 'Abandono', puntos: 0 },
        { posicion: 19, numero: 77, nombrePiloto: 'Valtteri Bottas', escuderia: 'Alfa Romeo', vueltas: 57, tiempo: '+1 lap', puntos: 0 },
        { posicion: 20, numero: 20, nombrePiloto: 'Kevin Magnussen', escuderia: 'Haas', vueltas: 57, tiempo: '+1 lap', puntos: 0 },
      ],
      fecha: 'Domingo, 26 Noviembre 2023, 10:00AM',
      pista: 'Circuito Yas Marina, Isla Yas',
      nota: 'Verstappen obtuvo un punto adicional por marcar la vuelta más rápida de la carrera. Pérez recibió una penalización de cinco segundos por provocar una colisión.'
    };
  }

  getCarrerasDisponibles(): string[] {
    return Object.keys(this.carreras);
  }

  getResultadosCarrera(carrera: string): Carreras[] {
    return this.carreras[carrera]?.resultados || [];
  }

  getFechaCarrera(carrera: string): string {
    return this.carreras[carrera]?.fecha || '';
  }

  getPistaCarrera(carrera: string): string {
    return this.carreras[carrera]?.pista || '';
  }

  getNotaCarrera(carrera: string): string {
    return this.carreras[carrera]?.nota || '';
  }
}
