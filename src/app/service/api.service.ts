import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  // Get all items
  getAll(url:any): Observable<any> {
    return this.http.get<any>(this.apiURL+"/"+url);
  }

  // Get a single item by ID
  getById(id: any,urll:any): Observable<any> {
    const url = `${this.apiURL}/${urll}/${id}`;
    return this.http.get<any>(url);
  }

  get(urll:any): Observable<any> {
    const url = `${urll}`;
    return this.http.get(url, { responseType: 'text' });
  }

  // Create a new item
  post(item: any,url:any): Observable<any> {
    return this.http.post(this.apiURL+url, item);
  }

  postString(item: any,url:any): Observable<any> {
    return this.http.post(this.apiURL+url, item, { responseType: 'text' });
  }

  // Update an existing item
  put(id: number, item: any,urll:any): Observable<any> {
    const url = `${this.apiURL}/${urll}/${id}`;
    return this.http.put<any>(url, item);
  }

  // Delete an item
  delete(id: number,urll:any): Observable<any> {
    const url = `${this.apiURL}/${urll}/${id}`;
    return this.http.delete<any>(url);
  }
}
