import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type {
  Civilization,
  GetAllCivilizations,
} from '../models/civilizations.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAllBuildings, Building } from '../models/buildings.model';
import type {
  GetAllTechnologies,
  Technology,
} from '../models/technologies.model';
import type { GetAllUnits, Unit } from '../models/units.model';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  constructor(private http: HttpClient) {}

  getAllCivs(): Observable<Civilization[]> {
    return this.http
      .get<GetAllCivilizations>(
        'https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations'
      )
      .pipe(map((data: GetAllCivilizations) => data.civilizations));
  }

  getCivilization(id: number): Observable<Civilization> {
    return this.http.get<Civilization>('src/app/data/civilizations.json');
  }

  getAllStructs(): Observable<Building[]> {
    return this.http
      .get<GetAllBuildings>(
        'https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/structures'
      )
      .pipe(map((data: GetAllBuildings) => data.structures));
  }

  getStructure(id: number): Observable<Building> {
    return this.http.get<Building>(
      'https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/structure/' +
        id
    );
  }

  createdIn(buildingName: string): Observable<Building[]> {
    return this.http.get<Building[]>(
      'https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/structure/' +
        buildingName
    );
  }

  developsIn(buildingName: string): Observable<Building[]> {
    return this.http.get<Building[]>(
      'https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/structure/' +
        buildingName
    );
  }

  getAllTechs(): Observable<Technology[]> {
    return this.http
      .get<GetAllTechnologies>(
        'https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/technologies'
      )
      .pipe(map((data: GetAllTechnologies) => data.technologies));
  }

  getTech(id: number): Observable<Technology> {
    return this.http.get<Technology>(
      'https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/technology/' +
        id
    );
  }

  getUniqueTech(techName: string): Observable<Technology> {
    return this.http.get<Technology>(
      'https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/technology/' +
        techName
    );
  }

  getAllUnits(): Observable<Unit[]> {
    return this.http
      .get<GetAllUnits>(
        'https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/units'
      )
      .pipe(map((data: GetAllUnits) => data.units));
  }

  getUnit(id: number): Observable<Unit> {
    return this.http.get<Unit>(
      'https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/unit/' +
        id
    );
  }

  getUniqueUnit(unitName: string): Observable<Unit> {
    return this.http.get<Unit>(
      'https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/unit/' +
        unitName
    );
  }

  appliesTo(unitName: string): Observable<Unit> {
    return this.http.get<Unit>(
      'https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/unit/' +
        unitName
    );
  }
}
