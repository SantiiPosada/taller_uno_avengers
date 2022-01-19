import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { VotacionComponent } from './components/votacion/votacion.component';
import { APP_ROUTING } from './app.routes';
import { AvengersService } from './services/avengers.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    VotacionComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [AvengersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
