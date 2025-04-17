import { Injectable } from '@angular/core';
import {BehaviorSubject, filter} from 'rxjs';
import {CardsService} from '../cards/cards.service';
import {InfoService} from '../info/info.service';
import {NavigationEnd, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  search_bar: string = "";
  cardRarities = new BehaviorSubject<string[]>([]);
  selectedCardRarity: string = "";
  cardSuffix = new BehaviorSubject<string[]>([]);
  selectedCardSuffix: string = "";
  cardCategories = new BehaviorSubject<string[]>([]);
  selectedCardCategory: string = "";

  routes_sidebars!: any;
  selected_sidebar = new BehaviorSubject<any>(null);

  constructor(private infoService: InfoService, private cardsService: CardsService, private router: Router) {
    this.getAllInfos();

    this.routes_sidebars = {
      "cards-menu": [
        {
          label: "search_bar",
          selected: this.search_bar,
          associatedService: this.cardsService.searchBy,
        },
        {
          label: 'Filters',
          items: [
            {
              label: 'select_rarity',
              displayName: 'Rarity',
              array: this.cardRarities,
              selected: this.selectedCardRarity,
              associatedService: this.cardsService.rarity,
            },
            {
              label: 'select_suffix',
              displayName: 'Suffix',
              array: this.cardSuffix,
              selected: this.selectedCardSuffix,
              associatedService: this.cardsService.suffix,
            },
            {
              label: 'select_category',
              displayName: 'Category',
              array: this.cardCategories,
              selected: this.selectedCardCategory,
              associatedService: this.cardsService.category,
            },
            /*{
              label: 'Test Button',
              icon: 'pi pi-user',
            }*/
          ]
        },
        {
          separator: true
        }
      ],
      "card-info": [
        {
          label: "back",
          items: []
        },
        {
          separator: true
        },
        {
          label: "test"
        }
      ]
    }

    this.setupSideBar()
  }

  getAllInfos() {
    this.infoService.getAllRarities().subscribe(rarities => {
      this.cardRarities.next(rarities);
    })
    this.infoService.getAllSuffix().subscribe(suffix => {
      this.cardSuffix.next(suffix);
    })
    this.infoService.getAllCategories().subscribe(categories => {
      this.cardCategories.next(categories);
    })
  }

  setupSideBar() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.urlAfterRedirects;

        // Rimuove eventuali slash iniziali e divide la stringa
        const segments = url.replace(/^\/+/, '').split(/[/;]+/);
        const page = segments[0];

        // Usa il nome della pagina per accedere alla configurazione nel servizio
        this.selected_sidebar.next(this.routes_sidebars[page]);
      });
  }
}
