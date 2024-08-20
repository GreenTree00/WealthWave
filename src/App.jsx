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
    <div className="body">
    <Header />
    <div className="addData">
    <div class="grid">
      <PieGraphDateFilter class="cell"/>
      <PieGraph class="cell" />
      <AddIncome class="cell" />
      <DeductIncome class="cell" />
    </div>
    </div>
    <Footer />
    </div>
  )
}

export default App
