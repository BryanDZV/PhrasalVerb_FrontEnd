import type { Game, GameMode } from "@/types/Game";
import { apiUrl } from "@/lib/config";
export async function createGame(mode: GameMode, pairs: number): Promise<Game> {
  //urlSearchParams te da una url tipo
  //api/games?mode=TRANSLATION&pairs=1
  const params = new URLSearchParams({
    mode,
    pairs: String(pairs),
  });

  const res = await fetch(`${apiUrl}/api/games?${params.toString()}`, {
    method: "POST",
  });

  if (!res.ok) {
    throw new Error(`Error creando partida: ${res.status} ${res.statusText}`);
  }

  return res.json();
}
