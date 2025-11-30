import type { Pokemon, PokeApiResponse } from "./pokemonTypes";

const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2/pokemon";

/**
 * Capitalize first letter of Pokemon name
 */
function capitalizeName(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

/**
 * Transform API response to UI model
 */
function transformPokemonData(data: PokeApiResponse): Pokemon {
  return {
    id: data.id,
    name: capitalizeName(data.name),
    sprite: data.sprites.other["official-artwork"].front_default || "",
    types: data.types.map((t) => t.type.name),
    stats: data.stats.map((s) => ({
      name: s.stat.name,
      value: s.base_stat,
    })),
    height: data.height / 10, // Convert decimeters to meters
    weight: data.weight / 10, // Convert hectograms to kilograms
  };
}

/**
 * Fetch Pokemon data from PokeAPI
 * @param pokemonName - Pokemon name (case-insensitive)
 * @returns Promise<Pokemon>
 * @throws Error with message "Pokémon not found" for 404
 * @throws Error with message "Network error" for network failures
 */
export async function fetchPokemon(pokemonName: string): Promise<Pokemon> {
  const url = `${POKEAPI_BASE_URL}/${pokemonName.toLowerCase()}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Pokémon not found");
      }
      throw new Error("Network error");
    }

    const data: PokeApiResponse = await response.json();
    return transformPokemonData(data);
  } catch (error) {
    if (error instanceof Error) {
      // Re-throw our custom errors
      if (error.message === "Pokémon not found" || error.message === "Network error") {
        throw error;
      }
    }
    // Network or JSON parsing errors
    throw new Error("Network error");
  }
}
