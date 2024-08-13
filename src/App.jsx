import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddIncome from "./components/AddIncome";
import DeductIncome from "./components/DeductIncome";
import "./App.css"

function App() {
 

  return (
    <>
    <Header />
    <AddIncome />
    <DeductIncome />
    <Footer />
    </>
  )
}

export default App
