import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { UnitComponent } from 'src/app/layouts/units/unit/unit.component';
import { UnitsComponent } from 'src/app/layouts/units/unitsList/units.component';
import { Unit } from '../../models/units.model';

@Injectable({ providedIn: 'root' })
export class UnitResolver implements Resolve<Unit> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot): Observable<Unit> {
    const id = route.params['id'];
    return id;
  }
}

export const unitRoutes: Routes = [
  {
    path: 'units',
    component: UnitsComponent,
  },

  {
    path: 'unit/:id',
    component: UnitComponent,
    resolve: {
      id: UnitResolver,
    },
  },
];
