import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { pokemonReducers } from './pokemon.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  pokemons: pokemonReducers
};
