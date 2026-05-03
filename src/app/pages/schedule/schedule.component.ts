import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuntosVerdesService } from '../../services/puntos-verdes.service';
import { CountHoyPipe } from '../../pipes/count-hoy.pipe';
import { Barrio } from '../../models/punto-verde.model';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, CountHoyPipe],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  barrios: Barrio[];
  diaHoy: string;

  dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  constructor(private puntosService: PuntosVerdesService) {
    this.barrios = this.puntosService.getBarrios();
    const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    this.diaHoy = dayNames[new Date().getDay()];
  }

  tieneRecoleccionHoy(barrio: Barrio): boolean {
    return barrio.diasRecoleccion.includes(this.diaHoy);
  }
}
