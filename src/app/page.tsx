"use client";
import { createGame } from "@/lib/api";
import { useState } from "react";
import { Game } from "@/types/Game";
import { GameBoard } from "@/components/GameBoard";

export default function Home() {
  //estado para guardar la respuesta de la API
  const [game, setGame] = useState<Game | null>(null);
  //estado para guardar el error de la API
  const [error, setError] = useState<string | null>(null);
  //estado para guardar el loading de la API
  const [loading, setLoading] = useState<boolean>(false);

  async function handleClick() {
    //1. cargado el estado de loading a true
    setLoading(true);
    //2. limpiar el estado de error
    setError(null);
    //3. llamar a la API
    try {
      const response = await createGame("TRANSLATION", 2);
      console.log("Response from API:", response);
      setGame(response);
    } catch (e) {
      //4. manejar el error de la API
      console.error("Error fetching createGame:", e);
      setError("Error al crear la partida. Por favor, inténtalo de nuevo.");
    } finally {
      //5. cargado el estado de loading a false
      setLoading(false);
    }
  }
  return (
    <div className="min-h-screen p-8 text-center">
      <h1 className="mb-6 text-7xl font-bold">Welcome to the Game</h1>
      <button
        className="rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:bg-yellow-500"
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? "Cargando..." : "Pulsar Aquí"}
      </button>

      {/* Mostrar el error si existe */}
      {error && <p className="mt-4 font-medium text-red-500">{error}</p>}
      <div className="mt-6">
        {game ? (
          <GameBoard cards={game.cards} />
        ) : (
          <p className="text-slate-500">Pulsa el botón para crear partida</p>
        )}
      </div>
    </div>
  );
}
