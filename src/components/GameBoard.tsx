import { Card } from "@/types/Game";

type Props = {
  cards: Card[];
};
//tambine vale asi directament en la fucnion { cards }: { cards: Card[] } es destrucuturado sin el type Props.
export function GameBoard({ cards }: Props) {
  return (
    <div>
      <h1 className="mb-4 text-xl font-bold">Gameboard</h1>
      {/*tablero */}
      <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4">
        {/*carta */}
        {cards.map((card) => (
          <div
            className="flex aspect-square items-center justify-center rounded-xl border-2 bg-white text-slate-800 shadow-sm hover:border-blue-500"
            key={card.id}
          >
            Card: {card.text}
          </div>
        ))}
      </div>
    </div>
  );
}
