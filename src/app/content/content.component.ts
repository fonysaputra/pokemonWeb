import { Component, OnInit } from '@angular/core'
import { PokemonService } from '../service/pokemon.service'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  public pokemon = [];
  constructor(private _pokemonService: PokemonService) { }

  ngOnInit() {

    this._pokemonService.getPokemons().subscribe(data => this.pokemon = data.results);
  }
}
