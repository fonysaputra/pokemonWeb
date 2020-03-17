import { RouterReducerState } from '@ngrx/router-store';

import { IPokemonState, initialPokemonState } from './pokemon.state';


export interface IAppState {
  router?: RouterReducerState;
  pokemons: IPokemonState;
}

export const initialAppState: IAppState = {
  pokemons: initialPokemonState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
