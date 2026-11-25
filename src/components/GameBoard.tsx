import { Card } from "@/types/Game";

   type Props = {
   cards: Card[];
 };
//tambine vale asi directament en la fucnion { cards }: { cards: Card[] } es destrucuturado sin el type Props.
export function GameBoard({ cards }: Props) {
 
    
    return (
        <div>
            <h1>Gameboard</h1>
            {cards.map(card=>(
                <p key={card.id}>Card: {card.text}</p>
            
            ))}
        </div>
    )

}