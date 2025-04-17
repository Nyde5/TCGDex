import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Ripple} from "primeng/ripple";

@Component({
  selector: 'app-card-info',
  imports: [
    Ripple
  ],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.scss'
})
export class CardInfoComponent {
  constructor(private route: ActivatedRoute, private _location: Location) {
    route.params.subscribe(params => {
      //console.log(params);
    })
  }

  back() {
    console.log("called")
    this._location.back();
  }
}
