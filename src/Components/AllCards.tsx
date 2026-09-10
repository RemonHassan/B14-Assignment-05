import { use, useState } from "react";
import type { ITechnology } from "../Types/CardType";
import SingleCard from "./SingleCard";
import AddToStack from "./AddToStack";

export interface AllCardsProps {
  cardsPromise: Promise<ITechnology[]>;
}

export default function AllCards({ cardsPromise }: AllCardsProps) {
  const cards = use(cardsPromise);
  const [addToStack, setAddToStack] = useState<ITechnology[]>([]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card: ITechnology) => (
            <SingleCard
              key={card.id}
              addToStack={addToStack}
              setAddToStack={setAddToStack}
              card={card}
            />
          ))}
        </div>

        {/* Right Column: Your Stack Sidebar (Clean / Empty State) */}
        <div className="lg:col-span-1 sticky top-24 bg-white rounded-2xl p-6 border border-gray-100 shadow-xs">
          <AddToStack
            addToStack={addToStack}
            setAddToStack={setAddToStack}
          ></AddToStack>
        </div>
      </div>
    </div>
  );
}
