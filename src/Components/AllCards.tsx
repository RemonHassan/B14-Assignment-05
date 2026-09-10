import { use, useState } from "react";
import type { ITechnology } from "../Types/CardType";
import SingleCard from "./SingleCard";

export interface AllCardsProps {
  cardsPromise: Promise<ITechnology[]>;
}

export default function AllCards({ cardsPromise }: AllCardsProps) {
  const cards = use(cardsPromise);
  const [addToStack, setAddToStack] = useState<ITechnology[]>([]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Left Column: Cards Grid */}
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
          <h3 className="text-lg font-bold text-gray-900 mb-1">Your Stack</h3>
          <p className="text-xs text-gray-400 mb-6">0 Technologies Selected</p>

          {/* Clean / Empty State Placeholder */}
          <div className="text-center py-8 text-gray-400 text-sm border border-dashed border-gray-200 rounded-xl mb-6">
            No technologies added yet.
          </div>

          {/* Disabled Remove All Button */}
          <button
            disabled
            className="w-full border border-gray-200 text-gray-300 font-medium py-2 px-4 rounded-xl text-sm cursor-not-allowed"
          >
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
}
