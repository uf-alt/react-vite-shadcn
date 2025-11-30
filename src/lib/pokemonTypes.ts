// Raw API response from PokeAPI (subset of fields we use)
export interface PokeApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string | null;
      }
    }
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
}

// Transformed UI model
export interface Pokemon {
  id: number;
  name: string;
  sprite: string;
  types: string[];
  stats: PokemonStat[];
  height: number;
  weight: number;
}

export interface PokemonStat {
  name: string;
  value: number;
}
