import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPokemon } from './../models/pokemon.interface';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private _url: string = environment.apiUrl + "ability?offset=20&limit=20";
  constructor(private http: HttpClient) { }

  getPokemons(): Observable<IPokemon[]> {
    return this.http.get<IPokemon[]>(this._url);
  }
}
