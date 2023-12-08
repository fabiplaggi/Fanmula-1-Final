import { Injectable } from '@angular/core';
import { Pilotos } from '../../shared/models/piloto';

@Injectable({
  providedIn: 'root'
})
export class PilotoService {

  constructor() { }

  getAll(): Pilotos[] {
    return [
      {
        id: 1,
        numeroImageUrl: '/assets/NúmerosPilotos/77.png',
        nombre: 'Valtteri BOTTAS',
        pilotoImageUrl: '/assets/Pilotos/Valtteri Bottas.jpg',
        nacionalidadImageUrl: '/assets/Banderas/Finland.png',
        escuderia: 'Alfa Romeo'
      },
      {
        id: 2,
        numeroImageUrl: '/assets/NúmerosPilotos/24.png',
        nombre: 'Zhou GUANYU',
        pilotoImageUrl: '/assets/Pilotos/Zhou Guanyu.jpg',
        nacionalidadImageUrl: '/assets/Banderas/china.png',
        escuderia: 'Alfa Romeo'
      },
      {
        id: 3,
        numeroImageUrl: '/assets/NúmerosPilotos/22.png',
        nombre: 'Yuki TSUNODA',
        pilotoImageUrl: '/assets/Pilotos/Yuki Tsunoda.jpg',
        nacionalidadImageUrl: '/assets/Banderas/japan.png',
        escuderia: 'Alpha Tauri'
      },
      {
        id: 4,
        numeroImageUrl: '/assets/NúmerosPilotos/3.png',
        nombre: 'Daniel RICCIARDO',
        pilotoImageUrl: '/assets/Pilotos/Daniel Ricciardo.jpg',
        nacionalidadImageUrl: '/assets/Banderas/australia.png',
        escuderia: 'Alpha Tauri'
      },
      {
        id: 5,
        numeroImageUrl: '/assets/NúmerosPilotos/10.png',
        nombre: 'Pierre GASLY',
        pilotoImageUrl: '/assets/Pilotos/Pierre Gasly.jpg',
        nacionalidadImageUrl: '/assets/Banderas/france.png',
        escuderia: 'Alpine'
      },
      {
        id: 6,
        numeroImageUrl: '/assets/NúmerosPilotos/31.png',
        nombre: 'Esteban OCON',
        pilotoImageUrl: '/assets/Pilotos/Esteban Ocon.jpg',
        nacionalidadImageUrl: '/assets/Banderas/france.png',
        escuderia: 'Alpine'
      },
      {
        id: 7,
        numeroImageUrl: '/assets/NúmerosPilotos/14.png',
        nombre: 'Fernando ALONSO',
        pilotoImageUrl: '/assets/Pilotos/Fernando Alonso.jpg',
        nacionalidadImageUrl: '/assets/Banderas/spain.png',
        escuderia: 'Aston Martin'
      },
      {
        id: 8,
        numeroImageUrl: '/assets/NúmerosPilotos/18.png',
        nombre: 'Lance STROLL',
        pilotoImageUrl: '/assets/Pilotos/Lance Stroll.jpg',
        nacionalidadImageUrl: '/assets/Banderas/canada.png',
        escuderia: 'Aston Martin'
      },
      {
        id: 9,
        numeroImageUrl: '/assets/NúmerosPilotos/16.png',
        nombre: 'Charles LECLERC',
        pilotoImageUrl: '/assets/Pilotos/Charles Leclerc.jpg',
        nacionalidadImageUrl: '/assets/Banderas/monaco.png',
        escuderia: 'Ferrari'
      },
      {
        id: 10,
        numeroImageUrl: '/assets/NúmerosPilotos/55.png',
        nombre: 'Carlos SAINZ',
        pilotoImageUrl: '/assets/Pilotos/Carlos Sainz.jpg',
        nacionalidadImageUrl: '/assets/Banderas/spain.png',
        escuderia: 'Ferrari'
      },
      {
        id: 11,
        numeroImageUrl: '/assets/NúmerosPilotos/20.png',
        nombre: 'Kevin MAGNUSSEN',
        pilotoImageUrl: '/assets/Pilotos/Kevin Magnussen.jpg',
        nacionalidadImageUrl: '/assets/Banderas/denmark.png',
        escuderia: 'Haas'
      },
      {
        id: 12,
        numeroImageUrl: '/assets/NúmerosPilotos/27.png',
        nombre: 'Nico HULKENBERG',
        pilotoImageUrl: '/assets/Pilotos/Nico Hulkenberg.jpg',
        nacionalidadImageUrl: '/assets/Banderas/germany.png',
        escuderia: 'Haas'
      },
      {
        id: 13,
        numeroImageUrl: '/assets/NúmerosPilotos/4.png',
        nombre: 'Lando NORRIS',
        pilotoImageUrl: '/assets/Pilotos/Lando Norris.jpg',
        nacionalidadImageUrl: '/assets/Banderas/britain.png',
        escuderia: 'McLaren'
      },
      {
        id: 14,
        numeroImageUrl: '/assets/NúmerosPilotos/81.png',
        nombre: 'Oscar PIASTRI',
        pilotoImageUrl: '/assets/Pilotos/Oscar Piastri.jpg',
        nacionalidadImageUrl: '/assets/Banderas/australia.png',
        escuderia: 'McLaren'
      },
      {
        id: 15,
        numeroImageUrl: '/assets/NúmerosPilotos/44.png',
        nombre: 'Lewis HAMILTON',
        pilotoImageUrl: '/assets/Pilotos/Lewis Hamilton.jpg',
        nacionalidadImageUrl: '/assets/Banderas/britain.png',
        escuderia: 'Mercedes'
      },
      {
        id: 16,
        numeroImageUrl: '/assets/NúmerosPilotos/63.png',
        nombre: 'George RUSSELL',
        pilotoImageUrl: '/assets/Pilotos/George Russell.jpg',
        nacionalidadImageUrl: '/assets/Banderas/britain.png',
        escuderia: 'Mercedes'
      },
      {
        id: 17,
        numeroImageUrl: '/assets/NúmerosPilotos/1.png',
        nombre: 'Max VERSTAPPEN',
        pilotoImageUrl: '/assets/Pilotos/Max Verstappen.jpg',
        nacionalidadImageUrl: '/assets/Banderas/netherlands.png',
        escuderia: 'Red Bull'
      },
      {
        id: 18,
        numeroImageUrl: '/assets/NúmerosPilotos/11.png',
        nombre: 'Sergio PÉREZ',
        pilotoImageUrl: '/assets/Pilotos/Sergio Perez.jpg',
        nacionalidadImageUrl: '/assets/Banderas/mexico.png',
        escuderia: 'Red Bull'
      },
      {
        id: 19,
        numeroImageUrl: '/assets/NúmerosPilotos/23.png',
        nombre: 'Alexander ALBON',
        pilotoImageUrl: '/assets/Pilotos/Alexander Albon.jpg',
        nacionalidadImageUrl: '/assets/Banderas/thailand.png',
        escuderia: 'Williams'
      },
      {
        id: 20,
        numeroImageUrl: '/assets/NúmerosPilotos/2.png',
        nombre: 'Logan SARGEANT',
        pilotoImageUrl: '/assets/Pilotos/Logan Sargeant.jpg',
        nacionalidadImageUrl: '/assets/Banderas/UnitedStates.png',
        escuderia: 'Williams'
      },
    ];
  }
}
