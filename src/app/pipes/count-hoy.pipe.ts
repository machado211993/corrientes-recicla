import { Pipe, PipeTransform } from '@angular/core';
import { Barrio } from '../models/punto-verde.model';

@Pipe({
  name: 'countHoy',
  standalone: true
})
export class CountHoyPipe implements PipeTransform {
  transform(barrios: Barrio[], diaHoy: string): number {
    return barrios.filter(b => b.diasRecoleccion.includes(diaHoy)).length;
  }
}
