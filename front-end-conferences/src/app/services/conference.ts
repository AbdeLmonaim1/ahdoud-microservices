import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conference } from '../models/conference.model';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {
  private apiUrl = 'http://localhost:8082/api/conferences'; // Assumed endpoint

  constructor(private http: HttpClient) { }

  getConferences(): Observable<Conference[]> {
    return this.http.get<Conference[]>(this.apiUrl);
  }

  getConferenceById(id: number): Observable<Conference> {
    return this.http.get<Conference>(`${this.apiUrl}/${id}`);
  }

  saveConference(conference: Conference): Observable<Conference> {
    return this.http.post<Conference>(this.apiUrl, conference);
  }

  updateConference(id: number, conference: Conference): Observable<Conference> {
    return this.http.put<Conference>(`${this.apiUrl}/${id}`, conference);
  }

  deleteConference(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
