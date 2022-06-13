import { Routes } from '@angular/router';
import { CivilizationsComponent } from '../layouts/civilizations/civilizations.component';
import { HomeComponent } from './home.component';

export const homeRoutes: Routes = [
  {
    path: 'civilizations',
    component: CivilizationsComponent,
    data: {
      pageTitle: 'Civilizations',
    },
  },
  {
    path: '',
    component: HomeComponent,
    data: {
      pageTitle: 'Age Of Angular',
    },
  },
];
