import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import NavBaar from "./Components/NavBaar";
import type { ITechnology } from "./Types/CardType";
import AllCards from "./Components/AllCards";
import Explore from "./Components/Explore";
import Footer from "./Components/Footer";

const cardsFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
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
      <Suspense
        fallback={
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 text-3xl bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent font-bold">
            Loading...
          </div>
        }
      >
        <AllCards cardsPromise={cardsPromise}></AllCards>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
