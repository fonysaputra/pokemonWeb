import { IPokemon } from '../../models/pokemon.interface';

export interface IPokemonState {
  pokemons: IPokemon[];
  selectedPokemon: IPokemon;
}

export const initialPokemonState: IPokemonState = {
  pokemons: null,
  selectedPokemon: null
};
