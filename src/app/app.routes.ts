import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DoveSiamoPageComponent } from './dove-siamo-page/dove-siamo-page.component';
import { ChiSiamoPageComponent } from './chi-siamo-page/chi-siamo-page.component';

export const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'dove-siamo', component: DoveSiamoPageComponent},
  {path: 'chi-siamo', component: ChiSiamoPageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
