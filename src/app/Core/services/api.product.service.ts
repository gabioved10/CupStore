import { Injectable } from '@angular/core';
import { Product } from '../Moudels/product';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private http: HttpClient) { }

  getProductById(id): Observable<Product> {
    return this.http.get<Product>(`${environment.ProductApiUrl}/${id}`);
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.ProductApiUrl)
  }

  addProduct(product: Product): Observable<Product> {
    console.log(product);
    return this.http.post<Product>(environment.ProductApiUrl, product)
  }

  editProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${environment.ProductApiUrl}/${product.prductID}`, product)
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${environment.ProductApiUrl}/${id}`)
  }

}