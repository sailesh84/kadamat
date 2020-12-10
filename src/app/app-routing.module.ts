import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateOrderComponent } from './components/create-order/create-order.component';
//import { LogInComponent } from './components/log-in/log-in.component';
 //import { RegisterComponent } from './components/register/register.component';
import { CreateServiceComponent } from './components/create-service/create-service.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ProviderRegistrationComponent } from './components/provider-registration/provider-registration.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landingpage' },
 // { path: 'login', component: LogInComponent },
 // { path: 'register', component: RegisterComponent },
  { path: 'create-service', component: CreateServiceComponent },
  { path: 'landingpage', component: LandingpageComponent },
  { path: 'create-order', component: CreateOrderComponent },
  { path: 'my-order', component: MyOrdersComponent },
  { path: 'order-details', component: OrderDetailsComponent },
  { path: 'providers-registration', component: ProviderRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
