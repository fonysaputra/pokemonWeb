import { EPokemonActions } from './../actions/pokemon.actions';
import { PokemonActions } from '../actions/pokemon.actions';
import { initialPokemonState, IPokemonState } from '../state/pokemon.state';

export const pokemonReducers = (
  state = initialPokemonState,
  action: PokemonActions
): IPokemonState => {
  switch (action.type) {
    case EPokemonActions.GetPokemonsSuccess: {
      return {
        ...state,
        pokemons: action.payload
      };
    }


    default:
      return state;
  }
};
