import { Game } from "@/app/types/Game";

export async function cards(id: string, text: string): Promise<Game> {
  const params = new URLSearchParams({ id, text });
  const res = await fetch(
    `{process.env.NEXT_PUBLIC_API_URL}/api/cards?${params.toString()}`,
    { method: "POST" },
  );
  if (!res.ok) {
    throw new Error(`Error fetching cards: ${res.status} ${res.statusText}`);
  }
  return res.json();
}
