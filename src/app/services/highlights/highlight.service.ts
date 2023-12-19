import { Injectable } from '@angular/core';
import { Highlights } from '../../shared/models/highlight';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  constructor() { }

  getAll(): Highlights[] {
    return [
        {
           videoImgUrl: '/assets/Highlights/GP de Baréin.jpg',
           nombreCarrera: 'GP de Baréin',
           linkVideo: 'https://youtu.be/f9j8nhMNYO4?si=IsdlQLu_-_-HGgp8',
           fechaCarrera: 'Domingo, 5 Marzo 2023'
        },
        {
            videoImgUrl: '/assets/Highlights/GP de Arabia Saudita.jpg',
            nombreCarrera: 'GP de Arabia Saudita',
            linkVideo: 'https://youtu.be/BxGpi0racMc?si=hLDY2oY_9AHUXzMn',
            fechaCarrera: 'Domingo, 19 Marzo 2023'
        },
        {
            videoImgUrl: '/assets/Highlights/GP de Australia.jpg',
            nombreCarrera: 'GP de Australia',
            linkVideo: 'https://youtu.be/FExS3lFEwqc?si=X9lWZtg5gzzefNzl',
            fechaCarrera: 'Domingo, 2 Abril 2023'
        },
        {
            videoImgUrl: '/assets/Highlights/GP de Azerbaiyán.jpg',
            nombreCarrera: 'GP de Azerbaiyán',
            linkVideo: 'https://youtu.be/nJIrvbkr4pk?si=_51ohmN2zVWaxC3J',
            fechaCarrera: 'Domingo, 30 Abril 2023'
        },
        {
            videoImgUrl: '/assets/Highlights/GP de Miami.jpg',
            nombreCarrera: 'GP de Miami',
            linkVideo: 'https://youtu.be/2-jvlhc7c58?si=mJcY5203pE2D3HAg',
            fechaCarrera: 'Domingo, 7 Mayo 2023'
        },
        {
            videoImgUrl: '/assets/Highlights/GP de Mónaco.jpg',
            nombreCarrera: 'GP de Mónaco',
            linkVideo: 'https://youtu.be/JyBq7XYDiBg?si=xcZ3jlcsdluLBhZ2',
            fechaCarrera: 'Domingo, 28 Mayo 2023'
        },
        {
            videoImgUrl: '/assets/Highlights/GP de España.jpg',
            nombreCarrera: 'GP de España',
            linkVideo: 'https://youtu.be/Yd5FCI0JWMg?si=CnZIta7BiPHcJEvf',
            fechaCarrera: 'Domingo, 4 Junio 2023'
        },
        {
            videoImgUrl: '/assets/Highlights/GP de Canadá.jpg',
            nombreCarrera: 'GP de Canadá',
            linkVideo: 'https://youtu.be/yX_GUhWiBHk?si=cF7N9EZtLDY-lSYf',
            fechaCarrera: 'Domingo, 18 Junio 2023'
        },
        {
            videoImgUrl: '/assets/Highlights/GP de Austria.jpg',
            nombreCarrera: 'GP de Austria',
            linkVideo: 'https://youtu.be/gzwm8hYryro?si=NicZvZINas4N0wJX',
            fechaCarrera: 'Domingo, 2 Julio 2023'
        },
        {
            videoImgUrl: '/assets/Highlights/GP de Gran Bretaña.jpg',
            nombreCarrera: 'GP de Gran Bretaña',
            linkVideo: 'https://youtu.be/NxQT7GIkPLI?si=jf7gyPIpcDpjjLBu',
            fechaCarrera: 'Domingo, 9 Julio 2023'
        },
        {
            videoImgUrl: '/assets/Highlights/GP de Hungría.jpg',
            nombreCarrera: 'GP de Hungría',
            linkVideo: 'https://youtu.be/ZANotpFRoMo?si=Y_lQANEBLqPgTqv4',
            fechaCarrera: 'Domingo, 23 Julio 2023'
        },
        {
            videoImgUrl: '/assets/Highlights/GP de Bélgica.jpg',
            nombreCarrera: 'GP de Bélgica',
            linkVideo: 'https://youtu.be/C6h7NnkX7hk?si=wQvaEjzmOX7Ghu1M',
            fechaCarrera: 'Domingo, 30 Julio  2023'
        },
        {
            videoImgUrl: '/assets/Highlights/GP de Países Bajos.jpg',
            nombreCarrera: 'GP de Países Bajos',
            linkVideo: 'https://youtu.be/Ao7X7BS_vIs?si=iDTQ4TigrQdddZu5',
            fechaCarrera: 'Domingo, 27 Agosto 2023'
        },
        {
            videoImgUrl: '/assets/Highlights/GP de Italia.jpg',
            nombreCarrera: 'GP de Italia',
            linkVideo: 'https://youtu.be/bd9eALWJRzY?si=soqnsBD6Qiy2j2Bu',
            fechaCarrera: 'Domingo, 3 Septiembre 2023'
        },
        {
            videoImgUrl: '/assets/Highlights/GP de Singapur.jpg',
            nombreCarrera: 'GP de Singapur',
            linkVideo: 'https://youtu.be/8TmrPvoHSGQ?si=jaDV2FWht71t9ltU',
            fechaCarrera: 'Domingo, 17 Septiembre 2023'
        },
        {
            videoImgUrl: '/assets/Highlights/GP de Japón.jpg',
            nombreCarrera: 'GP de Japón',
            linkVideo: 'https://youtu.be/rPLxuLE62gI?si=94CQxr9aPx9a__Rm',
            fechaCarrera: 'Domingo, 24 Septiembre 2023'
        },
        {
            videoImgUrl: '/assets/Highlights/GP de Qatar.jpg',
            nombreCarrera: 'GP de Qatar',
            linkVideo: 'https://youtu.be/meckBwrnZnU?si=pdXpvzre6M3gZUju',
            fechaCarrera: 'Domingo, 8 Octubre 2023'
        },
        {
            videoImgUrl: '/assets/Highlights/GP de Estados Unidos.jpg',
            nombreCarrera: 'GP de Estados Unidos',
            linkVideo: 'https://youtu.be/OTbaG_uTn-M?si=Y8fGTMrnt-kz5JVD',
            fechaCarrera: 'Domingo, 22 Octubre 2023'
        },
        {
            videoImgUrl: '/assets/Highlights/GP de México.jpg',
            nombreCarrera: 'GP de México',
            linkVideo: 'https://youtu.be/PtRf6VS15oM?si=wm0yDbU2KiaTZa71',
            fechaCarrera: 'Domingo, 29 Octubre 2023'
        },
        {
            videoImgUrl: '/assets/Highlights/GP de Brasil.jpg',
            nombreCarrera: 'GP de Brasil',
            linkVideo: 'https://youtu.be/WkLTWmlTaJM?si=TWTVQwc67MB_OfN2',
            fechaCarrera: 'Domingo, 5 Noviembre 2023'
        },
        {
            videoImgUrl: '/assets/Highlights/GP de Las Vegas.jpg',
            nombreCarrera: 'GP de Las Vegas',
            linkVideo: 'https://youtu.be/Q9qSwDxF6YI?si=MpmHTLIZrwz--Fju',
            fechaCarrera: 'Domingo, 19 Noviembre 2023'
        },
        {
            videoImgUrl: '/assets/Highlights/GP de Abu Dhabi.jpg',
            nombreCarrera: 'GP de Abu Dhabi',
            linkVideo: 'https://youtu.be/9Z6rtYo1qBU?si=a-OJ_WO1L-JO--dT',
            fechaCarrera: 'Domingo, 26 Noviembre 2023'
        },
    ]
  }
}
