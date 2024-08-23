import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddIncome from "./components/AddIncome";
import DeductIncome from "./components/DeductIncome";
import PieGraph from "./components/PieGraph";
import PieGraphDateFilter from "./components/PieGraphDateFilter";
import "./App.css"

function App() {
 

  return (
    <>
    <div className="container is-fluid">
    <Header />
    <div className="addData">
    <div className="grid">
      <PieGraphDateFilter className="cell"/>
      <PieGraph className="cell" />
      <AddIncome className="cell" />
      <DeductIncome className="cell" />
    </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default App
