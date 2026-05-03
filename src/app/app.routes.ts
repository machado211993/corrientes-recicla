import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { InfoComponent } from './pages/info/info.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'mapa', component: MapComponent },
  { path: 'cronograma', component: ScheduleComponent },
  { path: 'que-reciclar', component: InfoComponent },
  { path: '**', redirectTo: 'inicio' }
];
