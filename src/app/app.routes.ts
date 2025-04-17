import { Routes } from '@angular/router';
import {CardsMenuComponent} from "./pages/cards-menu/cards-menu.component";
import {CardInfoComponent} from "./pages/card-info/card-info.component";

export const routes: Routes = [
    {path:'', redirectTo:'/cards-menu', pathMatch:'full'},
    {path:'cards-menu', component: CardsMenuComponent},
    {path:'card-info', component: CardInfoComponent},
];
