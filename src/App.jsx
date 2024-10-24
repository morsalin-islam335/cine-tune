import Header from "./components/Header";
import MovieList from "./components/MovieList";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />

          {/* <!-- Content --> */}
          <MovieList />
        </div>
      </main>
      {/* <!-- End Main --> */}

      {/* <!-- Footer --> */}
      <footer className="py-6 md:py-8 mt-8">
        <div className="container mx-auto">
          <p className="text-center text-sm text-black/30 dark:text-[#EEEEEE] ">
            Copyright ©2024 | All rights reserved by Learn with Sumit
          </p>
        </div>
      </footer>
    </>
  );
}
