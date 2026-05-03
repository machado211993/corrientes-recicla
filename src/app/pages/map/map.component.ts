import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuntosVerdesService } from '../../services/puntos-verdes.service';
import { GeolocalizacionService } from '../../services/geolocalizacion.service';
import { PuntoVerde, UserLocation } from '../../models/punto-verde.model';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  puntos: PuntoVerde[] = [];
  puntosConDistancia: PuntoVerde[] = [];
  puntoSeleccionado: PuntoVerde | null = null;
  userLocation: UserLocation | null = null;
  buscandoUbicacion = false;
  errorUbicacion = '';
  filtroActivo: 'todos' | 'activo' | 'cerrado' = 'todos';

  constructor(
    private puntosService: PuntosVerdesService,
    private geoService: GeolocalizacionService
  ) {}

  ngOnInit() {
    this.puntos = this.puntosService.getAllPuntosVerdes();
    this.obtenerUbicacion();
  }

  ngAfterViewInit() {}

  obtenerUbicacion() {
    this.buscandoUbicacion = true;
    this.geoService.obtenerUbicacion().subscribe({
      next: (loc) => {
        this.userLocation = loc;
        this.puntosConDistancia = this.puntosService.getPuntosConDistancia(loc.lat, loc.lng);
        this.buscandoUbicacion = false;
      },
      error: () => {
        this.buscandoUbicacion = false;
        this.puntosConDistancia = [...this.puntosService.getPuntosVerdes()];
      }
    });
  }

  get puntosFiltrados(): PuntoVerde[] {
    const lista = this.puntosConDistancia.length > 0 ? this.puntosConDistancia : this.puntos;
    if (this.filtroActivo === 'todos') return lista;
    return lista.filter(p => p.estado === this.filtroActivo);
  }

  seleccionarPunto(punto: PuntoVerde) {
    this.puntoSeleccionado = this.puntoSeleccionado?.id === punto.id ? null : punto;
  }

  abrirMaps(punto: PuntoVerde) {
    this.puntosService.abrirEnMaps(punto, this.userLocation?.lat, this.userLocation?.lng);
  }

  abrirMapaCompleto() {
    const url = `https://www.google.com/maps/search/Punto+Verde+reciclaje+Corrientes/@-27.484,-58.82,14z`;
    window.open(url, '_blank');
  }

  formatearDistancia(metros?: number): string {
    if (!metros) return '';
    if (metros < 1000) return `${metros} m`;
    return `${(metros / 1000).toFixed(1)} km`;
  }

  getMaterialIcon(material: string): string {
    const icons: {[key: string]: string} = {
      'Cartón': '📦', 'Papel': '📄', 'Plástico': '🧴',
      'Vidrio': '🫙', 'Metal': '🔩', 'Metales': '🔩',
      'Electrónicos': '📱', 'Ropa': '👕', 'Baterías': '🔋',
      'Aceite': '🫗', 'Todos los materiales reciclables': '♻️'
    };
    return icons[material] || '♻️';
  }

  getEstadoLabel(estado: string): string {
    return estado === 'activo' ? 'Activo' : estado === 'cerrado' ? 'Cerrado' : 'Temporal';
  }
}
