import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';
import {Button, ButtonModule} from 'primeng/button';
import {CommonModule, NgClass, NgIf} from '@angular/common';
import {Avatar, AvatarModule} from 'primeng/avatar';
import {RouterOutlet} from '@angular/router';
import {Ripple} from 'primeng/ripple';

@Component({
  selector: 'app-navbar',
  imports: [
    MegaMenu,
    NgClass,
    NgIf,
    Button,
    Avatar,
    Ripple,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  items: MegaMenuItem[] | undefined;

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
