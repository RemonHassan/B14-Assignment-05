import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import NavBaar from "./Components/NavBaar";
import type { ITechnology } from "./Types/CardType";
import AllCards from "./Components/AllCards";
import Explore from "./Components/Explore";

const cardsFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/public/data.json");
  const data = await res.json();
  return data;
};
function App() {
  const [cardsPromise] = useState(() => cardsFetch());
  return (
    <>
      <NavBaar></NavBaar>
      <Banner></Banner>
      <Explore></Explore>
      <Suspense fallback={<div>Loading...</div>}>
        <AllCards cardsPromise={cardsPromise}></AllCards>
      </Suspense>
    </>
  );
}

export default App;
