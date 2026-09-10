import { use } from "react";
import type { ITechnology } from "../Types/CardType";
import { IoIosStar } from "react-icons/io";

export interface AllCardsProps {
  cardsPromise: Promise<ITechnology[]>;
}

export default function AllCards({ cardsPromise }: AllCardsProps) {
  const cards = use(cardsPromise);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              {/* Header: Icon & Badge */}
              <div className="flex items-center justify-between mb-4">
                <img
                  src={card.icon}
                  alt={`${card.name} icon`}
                  className="w-10 h-10 object-contain"
                />
                {card.badge && (
                  <span className="bg-sky-50 text-sky-500 font-medium text-xs px-3 py-1 rounded-full">
                    {card.badge}
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {card.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {card.description}
              </p>
            </div>

            {/* Footer Metadata & Action Button */}
            <div className="space-y-4 pt-4 border-t border-gray-50">
              <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                  {card.category}
                </span>
                <span>{card.difficulty}</span>
                <span className="flex items-center gap-1 font-semibold text-gray-700">
                  <span className="text-amber-400">
                    <IoIosStar />
                  </span>{" "}
                  {card.rating}
                </span>
              </div>

              <button className="w-full bg-[#0b0f19] hover:bg-gray-800 text-white font-medium py-2.5 px-4 rounded-xl text-sm transition-colors cursor-pointer">
                Add to Stack
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
