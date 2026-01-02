import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Keynote } from '../models/keynote.model';

@Injectable({
  providedIn: 'root'
})
export class KeynoteService {
  private apiUrl = 'http://localhost:8888/keynote-service/api/keynotes'; // Via API Gateway

  constructor(private http: HttpClient) { }

  getKeynotes(): Observable<Keynote[]> {
    return this.http.get<Keynote[]>(this.apiUrl);
  }

  getKeynoteById(id: number): Observable<Keynote> {
    return this.http.get<Keynote>(`${this.apiUrl}/${id}`);
  }

  saveKeynote(keynote: Keynote): Observable<Keynote> {
    return this.http.post<Keynote>(this.apiUrl, keynote);
  }

  updateKeynote(id: number, keynote: Keynote): Observable<Keynote> {
    return this.http.put<Keynote>(`${this.apiUrl}/${id}`, keynote);
  }

  deleteKeynote(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
