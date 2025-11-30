import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PokemonDisplay from "@/components/PokemonDisplay";
import { usePokemonSearch } from "@/hooks/usePokemonSearch";
import { Loader2 } from "lucide-react";

export default function PokemonSearch() {
  const [inputValue, setInputValue] = useState("");
  const { pokemon, isLoading, error, searchPokemon } = usePokemonSearch();

  const handleSearch = () => {
    searchPokemon(inputValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section id="pokemon" className="py-16 px-8 max-w-2xl mx-auto">
      {/* Header */}
      <header className="mb-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-2">Pokémon Lookup</h2>
        <p className="text-muted-foreground">Search for any Pokémon by name</p>
      </header>

      {/* Search Input */}
      <div className="bg-card rounded-lg shadow-md p-6 mb-8 border border-border">
        <div className="flex gap-3">
          <Input
            type="text"
            placeholder="Enter Pokémon name (e.g., pikachu, charizard)"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            className="flex-1"
          />
          <Button onClick={handleSearch} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" />
                Searching
              </>
            ) : (
              "Search"
            )}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-3">💡 Tip: Press Enter to search</p>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="bg-card rounded-lg shadow-md p-12 text-center border border-border">
          <Loader2 className="w-12 h-12 mx-auto text-primary animate-spin" />
          <p className="text-muted-foreground mt-4 font-medium">Searching for Pokémon...</p>
        </div>
      )}

      {/* Error State */}
      {error && !isLoading && (
        <div className="bg-destructive/10 border border-destructive/50 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <svg
              className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div>
              <h3 className="font-semibold text-destructive">Error</h3>
              <p className="text-sm text-destructive/90 mt-1">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {pokemon && !isLoading && !error && <PokemonDisplay pokemon={pokemon} />}
    </section>
  );
}
