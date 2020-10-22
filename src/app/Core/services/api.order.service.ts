import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { Order } from '../Moudels/order';


@Injectable({
  providedIn: 'root'
})
export class OrderApiService {

  constructor(private http: HttpClient) { }

  getOrderById(id): Observable<Order> {
    return this.http.get<Order>(`${environment.OrderApiUrl}/${id}`);
  }

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(environment.OrderApiUrl)
  }

  addOrder(order: Order): Observable<Order> {

    return this.http.post<Order>(environment.OrderApiUrl, order)
    console.log(order);
  }

  editOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(`${environment.OrderApiUrl}/${order.orderID}`, order)
  }

  deleteOrder(id: number): Observable<Order> {
    return this.http.delete<Order>(`${environment.OrderApiUrl}/${id}`)
  }


}
