import { useContext } from "react";
import { ThemeContext } from "../context";
import Header from "./Header";
import MovieList from "./MovieList";
import SideBar from "./SideBar";
import Footer from "./footer";

export default function Dummy() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
        <Header />

        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar />

            <MovieList />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
