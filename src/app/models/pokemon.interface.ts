export interface IPokemon {
  count: number;
  next: number;
  previous: string;
  results: Results;
}


export class Results {
  name: string;
  url: string;
}
