import { Component } from '@angular/core';
import {InputGroup} from "primeng/inputgroup";
import {InputGroupAddon} from "primeng/inputgroupaddon";
import {FormsModule} from "@angular/forms";
import {InputText} from "primeng/inputtext";
import {Menu} from "primeng/menu";
import {Ripple} from "primeng/ripple";
import {Badge} from "primeng/badge";
import {Select} from "primeng/select";
import {NgIf} from "@angular/common";
import {SidebarService} from '../../services/sidebar/sidebar.service';
import {BehaviorSubject} from 'rxjs';

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
  items!: any[];

  constructor(private sidebarService: SidebarService) {
  }

  ngOnInit(): void {
    this.sidebarService.selected_sidebar.subscribe(sidebar_elements => {
      this.items = sidebar_elements;
    })
  }

  syncSubject($event: string, behaviorSubject: BehaviorSubject<string>) {
    behaviorSubject.next($event);
  }
}
