import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {PokemonCardComponent} from "../../components/pokemon-card/pokemon-card.component";
import {CardsService} from "../../services/cards/cards.service";
import {PokeCard} from "../../models/interfaces/card.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cards-menu',
    imports: [
        NgForOf,
        PokemonCardComponent
    ],
  templateUrl: './cards-menu.component.html',
  styleUrl: './cards-menu.component.scss'
})
export class CardsMenuComponent implements OnInit {
    cards!: PokeCard[]

    constructor(private cardsService: CardsService, private router: Router) {}
    ngOnInit() {
        this.cardsService.getAllCards().subscribe(cards =>{
            this.cards = cards;
        });
    }

  cardInfos(card: PokeCard) {
    this.router.navigate(['/card-info', card]);
  }
}
