import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { StoreData } from '../models/store-data.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.supabase.apiUrl;

  constructor(private http: HttpClient) {}

  getData(): Observable<StoreData> {
    return this.http.get<StoreData>(this.apiUrl);
  }
}
