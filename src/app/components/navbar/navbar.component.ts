import { Component } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';
import {Button} from 'primeng/button';
import {NgClass, NgIf} from '@angular/common';
import {Avatar} from 'primeng/avatar';
import {Ripple} from 'primeng/ripple';
import {SvgIconComponent} from "angular-svg-icon";

@Component({
  selector: 'app-navbar',
  imports: [
    MegaMenu,
    NgClass,
    NgIf,
    Button,
    Avatar,
    Ripple,
    SvgIconComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  items!: MegaMenuItem[]


  ngOnInit() {
    this.items = [
      {
        label: 'Company',
        root: true,
        items: [
          [
            {
              items: [
                { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item' },
                { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item' },
                { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item' }
              ]
            }
          ]
        ]
      },
      {
        label: 'Resources',
        root: true
      },
      {
        label: 'Contact',
        root: true
      }
    ];
  }
}
