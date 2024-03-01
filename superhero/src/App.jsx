import { useState } from "react";
import { Battle, Home, Profile } from "./Pages";
import { Header } from "./components";
import { Routes, Route, Outlet } from "react-router-dom";
import { SearchProvider } from "./contexts";
import "./App.css";


function App() {
  return (
    <>
    <SearchProvider>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/battle" element={<Battle />} />
        </Route>
      </Routes>
      </SearchProvider>
    </>
  );
}

export default App;
