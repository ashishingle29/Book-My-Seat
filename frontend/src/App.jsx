import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TheaterSeat from "./TheaterSeat/TheaterSeat";
import AllTheater from "./AllTheater/AllTheater";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AllTheater />} />
          <Route exact path="/book-seat/:id" element={<TheaterSeat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
