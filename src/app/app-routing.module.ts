import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsideComponent } from './components/aside/aside.component';
import { BasketOrderComponent } from './components/basket-order/basket-order.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MainFormComponent } from './components/main-form/main-form.component';
import { MainComponent } from './components/main/main.component';
import { MangeOrderComponent } from './components/mange/mange-order/mange-order.component';
import { MangeProductComponent } from './components/mange/mange-product/mange-product.component';
import { MangeUsersComponent } from './components/mange/mange-users/mange-users.component';
import { MangeComponent } from './components/mange/mange.component';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { OrderComponent } from './components/order/order.component';
import { ProductsComponent } from './components/products/products.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AuthGuard } from './Core/guards/auth.guard';


const routes: Routes = [

  { path: '', component: MainFormComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'aside', component: AsideComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'order', component: OrderComponent },
  { path: 'regist', component: RegistrationComponent },
  { path: 'userLogin', component: UserLoginComponent },
  { path: 'newOrder', component: NewOrderComponent },
  { path: 'orderitem', component: OrderItemComponent },
  { path: 'basket', component: BasketOrderComponent },
  { path: 'mange', component: MangeComponent },
  { path: 'mangeuser', component: MangeUsersComponent, canActivate: [AuthGuard] },
  { path: 'mp', component: MangeProductComponent, canActivate: [AuthGuard] },
  { path: 'mangeorder', component: MangeOrderComponent, canActivate: [AuthGuard] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
