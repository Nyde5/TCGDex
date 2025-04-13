import {Component, Input} from '@angular/core';
import {PokeCard} from "../../models/interfaces/card.interface";
import {Card} from "primeng/card";

@Component({
  selector: 'app-pokemon-card',
    imports: [
        Card,
    ],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {
    @Input() card!: PokeCard;

    constructor() { }
}
