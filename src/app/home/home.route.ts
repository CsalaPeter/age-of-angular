import { Routes } from '@angular/router';
import { CivilizationsComponent } from '../layouts/civilizations/civilizations.component';
import { StructuresComponent } from '../layouts/structures/structures.component';
import { TechnologiesComponent } from '../layouts/technologies/technologies.component';
import { UnitsComponent } from '../layouts/units/units.component';
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
    path: 'structures',
    component: StructuresComponent,
    data: {
      pageTitle: 'Structures',
    },
  },
  {
    path: 'technologies',
    component: TechnologiesComponent,
    data: {
      pageTitle: 'Technologies',
    },
  },
  {
    path: 'units',
    component: UnitsComponent,
    data: {
      pageTitle: 'Units',
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
