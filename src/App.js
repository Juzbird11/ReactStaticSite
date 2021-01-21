import React from "react";
import Header from "./Components/Header";
import Router from "./Router";
import Footer from "./Components/Footer";
import "./App.css";

let App = () => {
  return (
    <main className="App">
        <Header/>
        <Router />
        <Footer />
      </main>
  )
}

export default App;