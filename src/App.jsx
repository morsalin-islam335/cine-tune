import Header from "./components/Header";
import MovieList from "./components/MovieList";
import SideBar from "./components/SideBar";
import Footer from "./components/footer";

import { useState } from "react";
// import { MovieContext } from "./context";m
import { MovieContext } from "./context/index";
export default function App() {
  const [cardData, setCardData] = useState([]); // initially set an empty array
  return (
    <>
      <MovieContext.Provider value={{ cardData, setCardData }}>
        <Header />

        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar />

            <MovieList />
          </div>
        </main>

        <Footer />
      </MovieContext.Provider>
    </>
  );
}
