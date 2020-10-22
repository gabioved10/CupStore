import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Category } from '../Moudels/category';
import { environment } from '../../../environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  constructor(private http: HttpClient) { }

  getCategoryById(id): Observable<Category> {
    return this.http.get<Category>(`${environment.CategoryApiUrl}/${id}`);
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.CategoryApiUrl)
  }

}





