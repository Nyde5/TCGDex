import { Component } from '@angular/core';
import {InputGroup} from "primeng/inputgroup";
import {InputGroupAddon} from "primeng/inputgroupaddon";
import {FormsModule} from "@angular/forms";
import {InputText} from "primeng/inputtext";
import {Menu} from "primeng/menu";
import {Ripple} from "primeng/ripple";
import {Badge} from "primeng/badge";
import {InfoService} from "../../services/info/info.service";
import {Select} from "primeng/select";
import {NgIf} from "@angular/common";
import {BehaviorSubject} from "rxjs";
import {CardsService} from "../../services/cards/cards.service";

@Component({
  selector: 'app-sidebar',
  imports: [
    InputGroup,
    InputGroupAddon,
    FormsModule,
    InputText,
    Menu,
    Ripple,
    Badge,
    Select,
    NgIf,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  search_bar!: string;
  cardRarities = new BehaviorSubject<string[]>([]);
  selectedCardRarity: string = "";
  cardSuffix = new BehaviorSubject<string[]>([]);
  selectedCardSuffix: string = "";
  items: any[] = [
    {
      separator: true
    },
    {
      label: "search_bar"
    },
    {
      label: 'Filters',
      items: [
        {
          label: 'select_rarity',
          displayName: 'Rarity',
          array: this.cardRarities,
          selected: this.selectedCardRarity,
        },
        {
          label: 'select_suffix',
          displayName: 'Suffix',
          array: this.cardSuffix,
          selected: this.selectedCardSuffix,
        },
        {
          label: 'Search',
          icon: 'pi pi-user',
        }
      ]
    },
    {
      separator: true
    }
  ];

  constructor(private infoService: InfoService, private cardsService: CardsService) {
  }

  ngOnInit() {
    this.infoService.getAllRarities().subscribe(rarities => {
      this.cardRarities.next(rarities);
    })
    this.infoService.getAllSuffix().subscribe(suffix => {
      this.cardSuffix.next(suffix);
    })
  }

  syncSubject($event: any, displayName: string) {
    switch (displayName) {
      case "Rarity":
        this.cardsService.rarity.next($event);
        return;
      case "Suffix":
        this.cardsService.suffix.next($event)
        return;
    }
  }
}
