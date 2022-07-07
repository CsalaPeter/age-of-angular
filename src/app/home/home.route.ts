import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { CivilizationComponent } from '../layouts/civilizations/civilization/civilization.component';
import { CivilizationsComponent } from '../layouts/civilizations/civilizationsList/civilizations.component';
import { StructureComponent } from '../layouts/structures/structure/structure.component';
import { StructuresComponent } from '../layouts/structures/structuresList/structures.component';
import { TechnologieComponent } from '../layouts/technologies/technologie/technologie.component';
import { TechnologiesComponent } from '../layouts/technologies/technologiesList/technologies.component';
import { UnitComponent } from '../layouts/units/unit/unit.component';
import { UnitsComponent } from '../layouts/units/unitsList/units.component';
import { Civilization } from '../models/civilizations.model';
import { Building } from '../models/buildings.model';
import { Technology } from '../models/technologies.model';
import { Unit } from '../models/units.model';
import { HomeComponent } from './home.component';

@Injectable({ providedIn: 'root' })
export class CivilizationResolver implements Resolve<Civilization> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot): Observable<Civilization> {
    const id = route.params['id'];
    return id;
  }
}

@Injectable({ providedIn: 'root' })
export class StructureResolver implements Resolve<Building> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot): Observable<Building> {
    const id = route.params['id'];
    return id;
  }
}

@Injectable({ providedIn: 'root' })
export class TechnologieResolver implements Resolve<Technology> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot): Observable<Technology> {
    const id = route.params['id'];
    return id;
  }
}

@Injectable({ providedIn: 'root' })
export class UnitResolver implements Resolve<Unit> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot): Observable<Unit> {
    const id = route.params['id'];
    return id;
  }
}

export const homeRoutes: Routes = [
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

  {
    path: 'structures',
    component: StructuresComponent,
  },

  {
    path: 'structure/:id',
    component: StructureComponent,
    resolve: {
      id: StructureResolver,
    },
  },

  {
    path: 'technologies',
    component: TechnologiesComponent,
  },

  {
    path: 'technology/:id',
    component: TechnologieComponent,
    resolve: {
      id: TechnologieResolver,
    },
  },

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

  {
    path: '',
    component: HomeComponent,
    data: {
      pageTitle: 'Age Of Angular',
    },
  },
];
