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
  Technologie,
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

  getAllStructs(): Observable<Structure[]> {
    return this.http
      .get<GetAllStructures>('/api/v1/structures')
      .pipe(map((data: GetAllStructures) => data.structures));
  }

  getAllTechs(): Observable<Technologie[]> {
    return this.http
      .get<GetAllTechnologies>('/api/v1/technologies')
      .pipe(map((data: GetAllTechnologies) => data.technologies));
  }

  getAllUnits(): Observable<Unit[]> {
    return this.http
      .get<GetAllUnits>('/api/v1/units')
      .pipe(map((data: GetAllUnits) => data.units));
  }
}
