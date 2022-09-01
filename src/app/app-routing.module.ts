import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusComponent } from './components/add-bus/add-bus.component';
import { BookSeatsComponent } from './components/book-seats/book-seats.component';
import { BookTicketsComponent } from './components/book-tickets/book-tickets.component';
import { DisplayBusComponent } from './components/display-bus/display-bus.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { ViewTicketsComponent } from './components/view-tickets/view-tickets.component';
import { WalletComponent } from './components/wallet/wallet.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path:'addBus',component:AddBusComponent},
  {path:'displayBus',component:DisplayBusComponent},
  {path:'booktickets',component:BookTicketsComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'wallet',component:WalletComponent},
  {path:'bookseats',component:BookSeatsComponent},
  {path:'viewtickets',component:ViewTicketsComponent},
  {path:'ticket',component:TicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
