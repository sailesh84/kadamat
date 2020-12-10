import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
/* Routing */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
/* Angular Services */
import { DataServiceService } from './service/data-service.service';


/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

/* Components */
// import { LogInComponent } from './components/log-in/log-in.component';
// import { RegisterComponent } from './components/register/register.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CreateServiceComponent } from './components/create-service/create-service.component';
import { ProviderRegistrationComponent } from './components/provider-registration/provider-registration.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
   // LogInComponent,
   // RegisterComponent,
	LandingpageComponent,
	NavBarComponent,
  CreateServiceComponent,
  ProviderRegistrationComponent,
  CreateOrderComponent,
  MyOrdersComponent,
  OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
    AppRoutingModule,

    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
  HttpClientModule,
  MatStepperModule,
  MatCheckboxModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
