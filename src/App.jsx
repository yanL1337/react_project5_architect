import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { DarkTheme, LoadingContext } from "./context/Contexte";
import Home from "./pages/Home";
import Loading from "./pages/Loading";
import "./App.scss";
import Header from "./components/Header/Header";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer/Footer";

function App() {
  const [dark, setTheme] = useState(false);
  const [loading, setLoading] = useState(true);

  console.log(dark);
  return (
    <section className={dark ? "dark" : null}>
      <DarkTheme.Provider value={{ dark, setTheme }}>
        <LoadingContext.Provider value={{ setLoading }}>
          {loading ? (
            <Loading />
          ) : (
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          )}
        </LoadingContext.Provider>
      </DarkTheme.Provider>
    </section>
  );
}

export default App;
