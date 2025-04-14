import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  constructor(private http: HttpClient) { }

  getAllRarities() {
    return this.http.get<string[]>("https://api.tcgdex.net/v2/en/rarities")
  }

  getAllSuffix() {
    return this.http.get<string[]>("https://api.tcgdex.net/v2/en/suffixes")
  }

  getAllCategories() {
    return this.http.get<string[]>("https://api.tcgdex.net/v2/en/categories")
  }
}
