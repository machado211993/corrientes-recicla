export interface PuntoVerde {
  id: number;
  nombre: string;
  direccion: string;
  barrio: string;
  lat: number;
  lng: number;
  horario: string;
  dias: string[];
  materiales: string[];
  estado: 'activo' | 'cerrado' | 'temporal';
  telefono?: string;
  observaciones?: string;
  distancia?: number;
}

export interface Barrio {
  nombre: string;
  diasRecoleccion: string[];
  horarioRecoleccion: string;
  descripcion?: string;
}

export interface UserLocation {
  lat: number;
  lng: number;
  accuracy?: number;
}
