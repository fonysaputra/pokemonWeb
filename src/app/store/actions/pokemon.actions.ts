import { Action } from '@ngrx/store';

import { IPokemon } from '../../models/pokemon.interface';

export enum EPokemonActions {
  GetPokemons = '[Pokemon] Get Pokemons',
  GetPokemonsSuccess = '[Pokemon] Get Pokemons Success',
}

export class GetPokemons implements Action {
  public readonly type = EPokemonActions.GetPokemons;
}

export class GetPokemonsSuccess implements Action {
  public readonly type = EPokemonActions.GetPokemonsSuccess;
  constructor(public payload: IPokemon[]) { }
}


export type PokemonActions = GetPokemons | GetPokemonsSuccess;
