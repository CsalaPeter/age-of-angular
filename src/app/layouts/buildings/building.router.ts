import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { BuildingComponent } from './building/building.component';
import { BuildingsComponent } from './buildingsList/buildings.component';
import { Building } from '../../models/buildings.model';

@Injectable({ providedIn: 'root' })
export class StructureResolver implements Resolve<Building> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot): Observable<Building> {
    const id = route.params['id'];
    return id;
  }
}

export const buildingRoutes: Routes = [
  {
    path: 'structures',
    component: BuildingsComponent,
  },

  {
    path: 'structure/:id',
    component: BuildingComponent,
    resolve: {
      id: StructureResolver,
    },
  },
];
