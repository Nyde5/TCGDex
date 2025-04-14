import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import { PokeTheme }  from './poketheme';
import {NavbarComponent} from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'TCGWiki';

  ngOnInit() {
    const palette = PokeTheme["primitive"];

    for (const colorName in palette) {
      if(colorName === "borderRadius") continue;
      const colorShades = palette[colorName];

      if (typeof colorShades === "object") {
        for (const shade in colorShades) {
          const value = colorShades[shade];
          document.documentElement.style.setProperty(`--color-${colorName}-${shade}`, value);
        }
      }
    }
  }
}
