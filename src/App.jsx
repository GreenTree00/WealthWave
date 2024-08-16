import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddIncome from "./components/AddIncome";
import DeductIncome from "./components/DeductIncome";
import PieGraph from "./components/PieGraph";
import "./App.css"

function App() {
 

  return (
    <div className="body">
    <Header />
    <div className="addData">
    <PieGraph />
    <AddIncome />
    <DeductIncome />
    </div>
    <Footer />
    </div>
  )
}

export default App
