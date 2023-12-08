import { Injectable } from '@angular/core';
import { Clasificaciones } from '../../shared/models/clasificacion';

@Injectable({
  providedIn: 'root'
})
export class ClasificacionService {

  constructor() { }

    getAll(): Clasificaciones[] {
        return [
            {
                posicion: 1,
                pilotoImageUrl: '/assets/PilotosPNG/Max Verstappen.png',
                nombre: 'Max Verstappen',
                nacionalidadImageUrl: '/assets/Banderas/netherlands.png',
                escuderia: 'RED BULL RACING',
                puntos: 575
            },
            {
                posicion: 2,
                pilotoImageUrl: '/assets/PilotosPNG/Sergio Perez.png',
                nombre: 'Sergio Pérez',
                nacionalidadImageUrl: '/assets/Banderas/mexico.png',
                escuderia: 'RED BULL RACING',
                puntos: 285
            },
            {
                posicion: 3,
                pilotoImageUrl: '/assets/PilotosPNG/Lewis Hamilton.png',
                nombre: 'Lewis Hamilton',
                nacionalidadImageUrl: '/assets/Banderas/britain.png',
                escuderia: 'MERCEDES',
                puntos: 234
            },
            {
                posicion: 4,
                pilotoImageUrl: '/assets/PilotosPNG/Fernando Alonso.png',
                nombre: 'Fernando Alonso',
                nacionalidadImageUrl: '/assets/Banderas/spain.png',
                escuderia: 'ASTON MARTIN',
                puntos: 206
            },
            {
                posicion: 5,
                pilotoImageUrl: '/assets/PilotosPNG/Charles Leclerc.png',
                nombre: 'Charles Leclerc',
                nacionalidadImageUrl: '/assets/Banderas/monaco.png',
                escuderia: 'FERRARI',
                puntos: 206
            },
            {
                posicion: 6,
                pilotoImageUrl: '/assets/PilotosPNG/Lando Norris.png',
                nombre: 'Lando Norris',
                nacionalidadImageUrl: '/assets/Banderas/britain.png',
                escuderia: 'MCLAREN',
                puntos: 205
            },
            {
                posicion: 7,
                pilotoImageUrl: '/assets/PilotosPNG/Carlos Sainz.png',
                nombre: 'Carlos Sainz',
                nacionalidadImageUrl: '/assets/Banderas/spain.png',
                escuderia: 'FERRARI',
                puntos: 200
            },
            {
                posicion: 8,
                pilotoImageUrl: '/assets/PilotosPNG/George Russell.png',
                nombre: 'George Russell',
                nacionalidadImageUrl: '/assets/Banderas/britain.png',
                escuderia: 'MERCEDES',
                puntos: 175
            },
            {
                posicion: 9,
                pilotoImageUrl: '/assets/PilotosPNG/Oscar Piastri.png',
                nombre: 'Oscar Piastri',
                nacionalidadImageUrl: '/assets/Banderas/australia.png',
                escuderia: 'MCLAREN',
                puntos: 97
            },
            {
                posicion: 10,
                pilotoImageUrl: '/assets/PilotosPNG/Lance Stroll.png',
                nombre: 'Lance Stroll',
                nacionalidadImageUrl: '/assets/Banderas/canada.png',
                escuderia: 'ASTON MARTIN',
                puntos: 74
            },
            {
                posicion: 11,
                pilotoImageUrl: '/assets/PilotosPNG/Pierre Gasly.png',
                nombre: 'Pierre Gasly',
                nacionalidadImageUrl: '/assets/Banderas/france.png',
                escuderia: 'ALPINE',
                puntos: 62
            },
            {
                posicion: 12,
                pilotoImageUrl: '/assets/PilotosPNG/Esteban Ocon.png',
                nombre: 'Esteban Ocon',
                nacionalidadImageUrl: '/assets/Banderas/france.png',
                escuderia: 'ALPINE',
                puntos: 58
            },
            {
                posicion: 13,
                pilotoImageUrl: '/assets/PilotosPNG/Alexander Albon.png',
                nombre: 'Alexander Albon',
                nacionalidadImageUrl: '/assets/Banderas/thailand.png',
                escuderia: 'WILLIAMS',
                puntos: 27
            },
            {
                posicion: 14,
                pilotoImageUrl: '/assets/PilotosPNG/Yuki Tsunoda.png',
                nombre: 'Yuki Tsunoda',
                nacionalidadImageUrl: '/assets/Banderas/japan.png',
                escuderia: 'ALPHA TAURI',
                puntos: 17
            },
            {
                posicion: 15,
                pilotoImageUrl: '/assets/PilotosPNG/Valtteri Bottas.png',
                nombre: 'Valtteri Bottas',
                nacionalidadImageUrl: '/assets/Banderas/Finland.png',
                escuderia: 'ALFA ROMEO',
                puntos: 10
            },
            {
                posicion: 16,
                pilotoImageUrl: '/assets/PilotosPNG/Nico Hulkenberg.png',
                nombre: 'Nico Hulkenberg',
                nacionalidadImageUrl: '/assets/Banderas/germany.png',
                escuderia: 'HAAS',
                puntos: 9
            },
            {
                posicion: 17,
                pilotoImageUrl: '/assets/PilotosPNG/Daniel Ricciardo.png',
                nombre: 'Daniel Ricciardo',
                nacionalidadImageUrl: '/assets/Banderas/australia.png',
                escuderia: 'ALPHA TAURI',
                puntos: 6
            },
            {
                posicion: 18,
                pilotoImageUrl: '/assets/PilotosPNG/Zhou Guanyu.png',
                nombre: 'Zhou Guanyu',
                nacionalidadImageUrl: '/assets/Banderas/china.png',
                escuderia: 'ALFA ROMEO',
                puntos: 6
            },
            {
                posicion: 19,
                pilotoImageUrl: '/assets/PilotosPNG/Kevin Magnussen.png',
                nombre: 'Kevin Magnussen',
                nacionalidadImageUrl: '/assets/Banderas/denmark.png',
                escuderia: 'HAAS',
                puntos: 3
            },
            {
                posicion: 20,
                pilotoImageUrl: '/assets/PilotosPNG/Logan Sargeant.png',
                nombre: 'Logan Sargeant',
                nacionalidadImageUrl: '/assets/Banderas/UnitedStates.png',
                escuderia: 'WILLIAMS',
                puntos: 1
            },
        ]
    }
}