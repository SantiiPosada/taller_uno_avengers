import { RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import {NavbarComponent } from "./components/navbar/navbar.component"
import { VotacionComponent } from "./components/votacion/votacion.component";


const APP_ROUTES = [
    { path: "home", component: HomeComponent },
    { path: "navbar", component: NavbarComponent },
    { path: "votaciones", component: VotacionComponent },
    { path: "**",pathMatch:"full",redirectTo:"home" }
]


export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES); 

