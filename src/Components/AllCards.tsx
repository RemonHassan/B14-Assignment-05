import { use } from "react";
import type { ITechnology } from "../Types/CardType";
import { IoIosStar } from "react-icons/io";
import SingleCard from "./SingleCard";

export interface AllCardsProps {
  cardsPromise: Promise<ITechnology[]>;
}

export default function AllCards({ cardsPromise }: AllCardsProps) {
  const cards = use(cardsPromise);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
      <div>
        <SingleCard cards={cards}></SingleCard>
      </div>
    </div>
  );
}
