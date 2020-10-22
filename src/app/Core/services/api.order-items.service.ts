import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { Orderitem } from '../Moudels/orderitem';



@Injectable({
  providedIn: 'root'
})
export class OrderItemsApiService {


  constructor(private http: HttpClient) { }


  getOrdermIteById(id): Observable<Orderitem> {
    return this.http.get<Orderitem>(`${environment.OrderItemsApiUrl}/${id}`);
  }

  getAll(): Observable<Orderitem[]> {
    return this.http.get<Orderitem[]>(environment.OrderItemsApiUrl)
  }

  addOrderitem(orderitem: Orderitem): Observable<Orderitem> {
    return this.http.post<Orderitem>(environment.OrderItemsApiUrl, orderitem)
  }

  editOrderitem(orderitem: Orderitem): Observable<Orderitem> {
    return this.http.put<Orderitem>(`${environment.OrderItemsApiUrl}/${orderitem.orderID}`, Orderitem)
  }

  deleteOrderitem(id: number): Observable<Orderitem> {
    return this.http.delete<Orderitem>(`${environment.OrderItemsApiUrl}/${id}`)
  }


}
