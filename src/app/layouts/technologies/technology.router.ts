import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { TechnologyComponent } from 'src/app/layouts/technologies/technology/technology.component';
import { TechnologiesComponent } from 'src/app/layouts/technologies/technologiesList/technologies.component';
import { Technology } from '../../models/technologies.model';

@Injectable({ providedIn: 'root' })
export class TechnologieResolver implements Resolve<Technology> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot): Observable<Technology> {
    const id = route.params['id'];
    return id;
  }
}

export const techRoutes: Routes = [
  {
    path: 'technologies',
    component: TechnologiesComponent,
  },

  {
    path: 'technology/:id',
    component: TechnologyComponent,
    resolve: {
      id: TechnologieResolver,
    },
  },
];
