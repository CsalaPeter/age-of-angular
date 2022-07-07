import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { CivilizationComponent } from './civilization/civilization.component';
import { CivilizationsComponent } from './civilizationsList/civilizations.component';
import { Civilization } from '../../models/civilizations.model';

@Injectable({ providedIn: 'root' })
export class CivilizationResolver implements Resolve<Civilization> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot): Observable<Civilization> {
    const id = route.params['id'];
    return id;
  }
}

export const civilizationRoutes: Routes = [
  {
    path: 'civilizations',
    component: CivilizationsComponent,
  },

  {
    path: 'civilization/:id',
    component: CivilizationComponent,
    resolve: {
      id: CivilizationResolver,
    },
  },
];
