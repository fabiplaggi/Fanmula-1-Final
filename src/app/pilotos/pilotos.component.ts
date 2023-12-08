import { Component } from '@angular/core';
import { Pilotos } from '../shared/models/piloto';
import { PilotoService } from '../services/pilotos/piloto.service';

@Component({
  selector: 'app-pilotos',
  templateUrl: './pilotos.component.html',
  styleUrl: './pilotos.component.css'
})
export class PilotosComponent {

  pilotos: Pilotos[] = [];
  constructor(private ps:PilotoService) {

  }

  ngOnInit(): void {
    this.pilotos = this.ps.getAll();
  }

}
