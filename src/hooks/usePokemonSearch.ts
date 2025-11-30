import { useState } from "react";
import { fetchPokemon } from "@/lib/pokemonApi";
import type { Pokemon } from "@/lib/pokemonTypes";

export function usePokemonSearch() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchPokemon = async (name: string) => {
    const trimmedName = name.trim();

    // Validate: empty input
    if (!trimmedName) {
      setError("Please enter a Pokémon name");
      setPokemon(null);
      return;
    }

    // Clear previous state and start loading
    setError(null);
    setPokemon(null);
    setIsLoading(true);

    try {
      const data = await fetchPokemon(trimmedName.toLowerCase());
      setPokemon(data);
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "Pokémon not found") {
          setError("Pokémon not found. Please check the spelling and try again.");
        } else {
          setError("Network error. Please check your connection and try again.");
        }
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  return {
    pokemon,
    isLoading,
    error,
    searchPokemon,
    clearError,
  };
}
