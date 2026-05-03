import { Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { UserLocation } from '../models/punto-verde.model';

@Injectable({
  providedIn: 'root'
})
export class GeolocalizacionService {

  obtenerUbicacion(): Observable<UserLocation> {
    if (!navigator.geolocation) {
      return throwError(() => new Error('Geolocalización no soportada por este navegador'));
    }

    return new Observable(observer => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            accuracy: position.coords.accuracy
          });
          observer.complete();
        },
        (error) => {
          let mensaje = 'Error obteniendo ubicación';
          switch (error.code) {
            case error.PERMISSION_DENIED:
              mensaje = 'Permiso de ubicación denegado. Por favor habilitá la ubicación en tu navegador.';
              break;
            case error.POSITION_UNAVAILABLE:
              mensaje = 'Ubicación no disponible en este momento.';
              break;
            case error.TIMEOUT:
              mensaje = 'Tiempo de espera agotado al obtener la ubicación.';
              break;
          }
          observer.error(new Error(mensaje));
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 30000
        }
      );
    });
  }
}
