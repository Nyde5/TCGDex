import { Routes } from '@angular/router';
import {CardsMenuComponent} from "./pages/cards-menu/cards-menu.component";

export const routes: Routes = [
    {path:'', redirectTo:'/cards-menu', pathMatch:'full'},
    {path:'cards-menu', component: CardsMenuComponent,}
];
