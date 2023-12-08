import { Component } from '@angular/core';
import { Clasificaciones } from '../shared/models/clasificacion';
import { ClasificacionService } from '../services/clasificaciones/clasificacion.service';

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styleUrl: './clasificacion.component.css'
})
export class ClasificacionComponent {

  clasificaciones: Clasificaciones[] = [];
  constructor(private cs:ClasificacionService) {

  }

  ngOnInit(): void {
    this.clasificaciones = this.cs.getAll();
  }

}
