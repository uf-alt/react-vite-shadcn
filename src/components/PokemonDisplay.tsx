import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Pokemon } from "@/lib/pokemonTypes";

interface PokemonDisplayProps {
  pokemon: Pokemon;
}

const STAT_COLORS: Record<string, string> = {
  hp: "bg-green-500",
  attack: "bg-orange-500",
  defense: "bg-blue-500",
  "special-attack": "bg-purple-500",
  "special-defense": "bg-indigo-500",
  speed: "bg-pink-500",
};

const STAT_LABELS: Record<string, string> = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Special Attack",
  "special-defense": "Special Defense",
  speed: "Speed",
};

export default function PokemonDisplay({ pokemon }: PokemonDisplayProps) {
  const formattedId = `#${pokemon.id.toString().padStart(3, "0")}`;

  return (
    <Card className="overflow-hidden fade-in">
      {/* Pokemon Header */}
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white text-center border-b-0">
        <img
          src={pokemon.sprite}
          alt={pokemon.name}
          className="w-48 h-48 mx-auto drop-shadow-2xl"
        />
        <h2 className="text-4xl font-bold mt-4">{pokemon.name}</h2>
        <p className="text-lg opacity-90 mt-1">{formattedId}</p>
      </CardHeader>

      {/* Types */}
      <CardContent className="px-8 py-6 border-b border-border">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
          Type
        </h3>
        <div className="flex gap-2 flex-wrap">
          {pokemon.types.map((type) => (
            <Badge key={type} variant="default">
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Badge>
          ))}
        </div>
      </CardContent>

      {/* Stats */}
      <CardContent className="px-8 py-6 border-b border-border">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
          Base Stats
        </h3>
        <div className="space-y-3">
          {pokemon.stats.map((stat) => {
            const percentage = Math.min((stat.value / 255) * 100, 100);
            const colorClass = STAT_COLORS[stat.name] || "bg-slate-500";
            const label = STAT_LABELS[stat.name] || stat.name;

            return (
              <div key={stat.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-foreground">{label}</span>
                  <span className="text-muted-foreground">{stat.value}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className={`${colorClass} h-2 rounded-full transition-all`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>

      {/* Physical Attributes */}
      <CardContent className="px-8 py-6">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
          Physical Attributes
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-muted rounded-lg p-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Height</p>
            <p className="text-2xl font-bold text-foreground">{pokemon.height.toFixed(1)} m</p>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Weight</p>
            <p className="text-2xl font-bold text-foreground">{pokemon.weight.toFixed(1)} kg</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
