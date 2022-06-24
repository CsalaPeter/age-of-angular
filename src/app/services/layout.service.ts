import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type {
  Civilization,
  GetAllCivilizations,
} from '../models/civilizations.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAllStructures, Structure } from '../models/structures.model';
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
      .get<GetAllCivilizations>('/api/v1/civilizations')
      .pipe(map((data: GetAllCivilizations) => data.civilizations));
  }

  getCivilization(id: number): Observable<Civilization> {
    return this.http.get<Civilization>('/api/v1/civilization/' + id);
  }

  getAllStructs(): Observable<Structure[]> {
    return this.http
      .get<GetAllStructures>('/api/v1/structures')
      .pipe(map((data: GetAllStructures) => data.structures));
  }

  getStructure(id: number): Observable<Structure> {
    return this.http.get<Structure>('/api/v1/structure/' + id);
  }

  createdIn(buildingName: string): Observable<Structure[]> {
    return this.http.get<Structure[]>('/api/v1/structure/' + buildingName);
  }

  developsIn(buildingName: string): Observable<Structure[]> {
    return this.http.get<Structure[]>('/api/v1/structure/' + buildingName);
  }

  getAllTechs(): Observable<Technology[]> {
    return this.http
      .get<GetAllTechnologies>('/api/v1/technologies')
      .pipe(map((data: GetAllTechnologies) => data.technologies));
  }

  getTech(id: number): Observable<Technology> {
    return this.http.get<Technology>('/api/v1/technology/' + id);
  }

  getUniqueTech(techName: string): Observable<Technology> {
    return this.http.get<Technology>('/api/v1/technology/' + techName);
  }

  getAllUnits(): Observable<Unit[]> {
    return this.http
      .get<GetAllUnits>('/api/v1/units')
      .pipe(map((data: GetAllUnits) => data.units));
  }

  getUnit(id: number): Observable<Unit> {
    return this.http.get<Unit>('/api/v1/unit/' + id);
  }

  getUniqueUnit(unitName: string): Observable<Unit> {
    return this.http.get<Unit>('/api/v1/unit/' + unitName);
  }

  appliesTo(unitName: string): Observable<Unit> {
    return this.http.get<Unit>('/api/v1/unit/' + unitName);
  }
}
