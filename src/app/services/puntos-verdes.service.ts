import { Injectable } from '@angular/core';
import { PuntoVerde, Barrio, UserLocation } from '../models/punto-verde.model';

@Injectable({
  providedIn: 'root'
})
export class PuntosVerdesService {

  private puntosVerdes: PuntoVerde[] = [
    {
      id: 1,
      nombre: 'Punto Verde - Plaza Vera',
      direccion: 'Plaza Vera, Av. 3 de Abril',
      barrio: 'Centro',
      lat: -27.4718,
      lng: -58.8343,
      horario: '07:00 - 20:00',
      dias: ['Lunes', 'Miércoles', 'Viernes', 'Sábado'],
      materiales: ['Cartón', 'Papel', 'Plástico', 'Vidrio', 'Metal'],
      estado: 'activo',
      observaciones: 'Contenedores diferenciados por material'
    },
    {
      id: 2,
      nombre: 'Punto Verde - Plaza Torrent',
      direccion: 'Plaza Torrent, Mendoza y San Juan',
      barrio: 'Arazaty',
      lat: -27.4755,
      lng: -58.8310,
      horario: '07:00 - 20:00',
      dias: ['Martes', 'Jueves', 'Sábado'],
      materiales: ['Cartón', 'Papel', 'Plástico', 'Vidrio'],
      estado: 'activo'
    },
    {
      id: 3,
      nombre: 'Punto Verde',
      direccion: 'Av. Armenia y Corrientes',
      barrio: 'Sol de Mayo',
      lat: -27.4690,
      lng: -58.8220,
      horario: '08:00 - 18:00',
      dias: ['Lunes', 'Miércoles', 'Viernes'],
      materiales: ['Plástico', 'Vidrio', 'Metal', 'Cartón'],
      estado: 'activo'
    },
    {
      id: 4,
      nombre: 'Punto Verde - Cerrado permanentemente',
      direccion: 'Santa Teresita y Ruta 12',
      barrio: 'Santa Teresita',
      lat: -27.4780,
      lng: -58.8100,
      horario: '-',
      dias: [],
      materiales: [],
      estado: 'cerrado',
      observaciones: 'Punto verde fuera de servicio'
    },
    {
      id: 5,
      nombre: 'Punto Verde B° Laguna Seca',
      direccion: 'Laguna Seca, Av. Maipú',
      barrio: 'Laguna Seca',
      lat: -27.4830,
      lng: -58.8150,
      horario: '07:00 - 19:00',
      dias: ['Lunes', 'Martes', 'Jueves', 'Sábado'],
      materiales: ['Plástico', 'Papel', 'Cartón', 'Vidrio', 'Metales'],
      estado: 'activo'
    },
    {
      id: 6,
      nombre: 'LUSA - Centro de Reciclaje',
      direccion: 'Av. Milán y Ruta 12',
      barrio: 'Cremonte',
      lat: -27.4820,
      lng: -58.8060,
      horario: '06:00 - 22:00',
      dias: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      materiales: ['Plástico', 'Papel', 'Cartón', 'Vidrio', 'Metales', 'Electrónicos', 'Ropa'],
      estado: 'activo',
      observaciones: 'Centro de reciclaje integral. Acepta electrónicos y ropa usada.'
    },
    {
      id: 7,
      nombre: 'Punto Verde - B° Nicolini',
      direccion: 'Barrio Nicolini, Av. Maipú',
      barrio: 'Nicolini',
      lat: -27.4890,
      lng: -58.8280,
      horario: '07:00 - 18:00',
      dias: ['Martes', 'Jueves', 'Sábado'],
      materiales: ['Cartón', 'Plástico', 'Vidrio'],
      estado: 'activo'
    },
    {
      id: 8,
      nombre: 'Centro de Transferencia de Reciclables',
      direccion: 'San Antonio Este, Guayquiraró',
      barrio: 'San Antonio Este',
      lat: -27.5020,
      lng: -58.8180,
      horario: '06:00 - 14:00',
      dias: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
      materiales: ['Todos los materiales reciclables', 'Electrónicos', 'Baterías', 'Aceite'],
      estado: 'activo',
      observaciones: 'Centro principal de transferencia. Solo días hábiles.'
    },
    {
      id: 9,
      nombre: 'Punto Verde - Plaza Giovanni',
      direccion: 'Plaza Giovanni, Pirayuí II',
      barrio: 'Pirayuí II',
      lat: -27.5010,
      lng: -58.8040,
      horario: '08:00 - 20:00',
      dias: ['Lunes', 'Miércoles', 'Viernes', 'Domingo'],
      materiales: ['Plástico', 'Papel', 'Vidrio', 'Metales'],
      estado: 'activo'
    }
  ];

  private barrios: Barrio[] = [
    {
      nombre: 'Centro / Arazaty',
      diasRecoleccion: ['Lunes', 'Miércoles', 'Viernes'],
      horarioRecoleccion: '07:00 - 12:00',
      descripcion: 'Zona céntrica con alta densidad'
    },
    {
      nombre: 'Sol de Mayo / Anahí',
      diasRecoleccion: ['Martes', 'Jueves', 'Sábado'],
      horarioRecoleccion: '07:00 - 13:00'
    },
    {
      nombre: 'Santa Teresita / Galván III',
      diasRecoleccion: ['Lunes', 'Jueves'],
      horarioRecoleccion: '08:00 - 14:00'
    },
    {
      nombre: 'Laguna Seca / La Olla',
      diasRecoleccion: ['Martes', 'Sábado'],
      horarioRecoleccion: '07:00 - 12:00'
    },
    {
      nombre: 'Nicolini / Quilmes',
      diasRecoleccion: ['Miércoles', 'Sábado'],
      horarioRecoleccion: '08:00 - 13:00'
    },
    {
      nombre: 'San Antonio Este / Pirayuí II',
      diasRecoleccion: ['Lunes', 'Miércoles', 'Viernes'],
      horarioRecoleccion: '06:30 - 12:00'
    },
    {
      nombre: 'Cremonte / Sapucay',
      diasRecoleccion: ['Martes', 'Jueves'],
      horarioRecoleccion: '07:00 - 13:00'
    },
    {
      nombre: 'La Chola / Alta Gracia',
      diasRecoleccion: ['Lunes', 'Jueves', 'Sábado'],
      horarioRecoleccion: '08:00 - 14:00'
    }
  ];

  getPuntosVerdes(): PuntoVerde[] {
    return this.puntosVerdes.filter(p => p.estado !== 'cerrado');
  }

  getAllPuntosVerdes(): PuntoVerde[] {
    return this.puntosVerdes;
  }

  getBarrios(): Barrio[] {
    return this.barrios;
  }

  calcularDistancia(lat1: number, lng1: number, lat2: number, lng2: number): number {
    const R = 6371000; // metros
    const dLat = this.toRad(lat2 - lat1);
    const dLng = this.toRad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  private toRad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  getPuntoMasCercano(userLat: number, userLng: number): PuntoVerde | null {
    const activos = this.getPuntosVerdes();
    if (activos.length === 0) return null;

    let closest = activos[0];
    let minDist = this.calcularDistancia(userLat, userLng, activos[0].lat, activos[0].lng);

    for (const punto of activos) {
      const dist = this.calcularDistancia(userLat, userLng, punto.lat, punto.lng);
      if (dist < minDist) {
        minDist = dist;
        closest = punto;
      }
    }

    closest.distancia = Math.round(minDist);
    return closest;
  }

  getPuntosConDistancia(userLat: number, userLng: number): PuntoVerde[] {
    return this.getPuntosVerdes()
      .map(p => ({
        ...p,
        distancia: Math.round(this.calcularDistancia(userLat, userLng, p.lat, p.lng))
      }))
      .sort((a, b) => (a.distancia ?? 0) - (b.distancia ?? 0));
  }

  abrirEnMaps(punto: PuntoVerde, userLat?: number, userLng?: number): void {
    let url: string;
    if (userLat && userLng) {
      url = `https://www.google.com/maps/dir/${userLat},${userLng}/${punto.lat},${punto.lng}`;
    } else {
      url = `https://www.google.com/maps/search/?api=1&query=${punto.lat},${punto.lng}`;
    }
    window.open(url, '_blank');
  }
}
