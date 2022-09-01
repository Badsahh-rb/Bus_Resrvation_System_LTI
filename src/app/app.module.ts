import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators, FormArray, FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AddBusComponent } from './components/add-bus/add-bus.component';
import { DisplayBusComponent } from './components/display-bus/display-bus.component';
import { DatepickerModule } from 'ng2-datepicker';
import { BookTicketsComponent } from './components/book-tickets/book-tickets.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { BookSeatsComponent } from './components/book-seats/book-seats.component';
import { SharedService } from './components/shared/shared.service';
import { ViewTicketsComponent } from './components/view-tickets/view-tickets.component';
import { TicketComponent } from './components/ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    AddBusComponent,
    DisplayBusComponent,
    BookTicketsComponent,
    FeedbackComponent,
    WalletComponent,
    BookSeatsComponent,
    ViewTicketsComponent,
    TicketComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DatepickerModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [SharedService,BookTicketsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
