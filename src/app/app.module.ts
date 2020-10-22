import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { AsideComponent } from './components/aside/aside.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { BasketOrderComponent } from './components/basket-order/basket-order.component';
import { OrderComponent } from './components/order/order.component';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MangeComponent } from './components/mange/mange.component';
import { MangeProductComponent } from './components/mange/mange-product/mange-product.component';
import { MangeOrderComponent } from './components/mange/mange-order/mange-order.component';
import { MangeUsersComponent } from './components/mange/mange-users/mange-users.component';
import { MainFormComponent } from './components/main-form/main-form.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    NavComponent,
    AsideComponent,
    ProductsComponent,
    UsersComponent,
    LoginComponent,
    BasketOrderComponent,
    OrderComponent,
    NewOrderComponent,
    OrderItemComponent,
    UserLoginComponent,
    RegistrationComponent,
    MangeComponent,
    MangeProductComponent,
    MangeOrderComponent,
    MangeUsersComponent,
    MainFormComponent,
    HomePageComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule,
    NgImageSliderModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
