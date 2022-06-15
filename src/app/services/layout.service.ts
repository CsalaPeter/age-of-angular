import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Civilizations } from '../models/civilizations.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Civilizations[]> {
    return this.http.get<Civilizations[]>('/api/v1/civilizations');
  }
}
