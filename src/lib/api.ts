import type { Game, GameMode } from "@/app/types/Game";

export async function createGame(mode: GameMode, pairs: number): Promise<Game> {
  //urlSearchParams te da una url tipo
  //api/games?mode=TRANSLATION&pairs=1
  const params = new URLSearchParams({
    mode,
    pairs: String(pairs),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/games?${params.toString()}`,
    { method: "POST" },
  );

  if (!res.ok) {
    throw new Error(`Error creando partida: ${res.status} ${res.statusText}`);
  }

  return res.json();
}
