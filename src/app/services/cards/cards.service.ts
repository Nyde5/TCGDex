import {Injectable, Input} from '@angular/core';
import {PokeCard} from "../../models/interfaces/card.interface";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, combineLatest, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  searchBy = new BehaviorSubject<string>("");
  suffix = new BehaviorSubject<string>("");
  rarity = new BehaviorSubject<string>("");
  category = new BehaviorSubject<string>("");
  constructor(private http: HttpClient) { }

  getAllCards(noImageIncluded?:boolean) {
    return combineLatest([this.suffix, this.rarity, this.category, this.searchBy]).pipe(
        switchMap(([suffix, rarity, category, searchBy]) => {
          let url = "https://api.tcgdex.net/v2/en/cards?pagination:page=1&pagination:itemsPerPage=100";

          if (!noImageIncluded) url += "&image=notnull:";
          if (suffix) url += "&suffix=" + suffix;
          if (rarity) url += "&rarity=" + rarity;
          if (category) url += "&category=" + category;
          if (searchBy) url += "&name=" + searchBy;

          return this.http.get<PokeCard[]>(url); // La richiesta HTTP con i parametri aggiornati
        })
    );
  }
}
