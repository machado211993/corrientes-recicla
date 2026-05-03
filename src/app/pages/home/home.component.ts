import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GeolocalizacionService } from '../../services/geolocalizacion.service';
import { PuntosVerdesService } from '../../services/puntos-verdes.service';
import { PuntoVerde } from '../../models/punto-verde.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  buscandoUbicacion = false;
  puntoMasCercano: PuntoVerde | null = null;
  errorUbicacion = '';
  userLat?: number;
  userLng?: number;

  constructor(
    private geoService: GeolocalizacionService,
    private puntosService: PuntosVerdesService,
    private router: Router
  ) {}

  ngOnInit() {
    // Auto-detect location on load for QR scan use case
    this.detectarUbicacion();
  }

  detectarUbicacion() {
    this.buscandoUbicacion = true;
    this.errorUbicacion = '';
    this.puntoMasCercano = null;

    this.geoService.obtenerUbicacion().subscribe({
      next: (location) => {
        this.userLat = location.lat;
        this.userLng = location.lng;
        this.puntoMasCercano = this.puntosService.getPuntoMasCercano(location.lat, location.lng);
        this.buscandoUbicacion = false;
      },
      error: (err) => {
        this.errorUbicacion = err.message;
        this.buscandoUbicacion = false;
      }
    });
  }

  irAlPuntoMasCercano() {
    if (this.puntoMasCercano) {
      this.puntosService.abrirEnMaps(this.puntoMasCercano, this.userLat, this.userLng);
    }
  }

  verTodosLosPuntos() {
    this.router.navigate(['/mapa']);
  }

  formatearDistancia(metros: number): string {
    if (metros < 1000) return `${metros} m`;
    return `${(metros / 1000).toFixed(1)} km`;
  }

  getMaterialIcon(material: string): string {
    const icons: {[key: string]: string} = {
      'Cartón': '📦',
      'Papel': '📄',
      'Plástico': '🧴',
      'Vidrio': '🫙',
      'Metal': '🔩',
      'Metales': '🔩',
      'Electrónicos': '📱',
      'Ropa': '👕',
      'Baterías': '🔋',
      'Aceite': '🫗',
      'Todos los materiales reciclables': '♻️'
    };
    return icons[material] || '♻️';
  }
}
