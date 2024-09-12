import {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BodyContent from "./components/BodyContent";
import Pages from "./components/Pages";
import "./App.css"

function App() {
  
  const [page, setPage] = useState("home");

  function changePage(title) {
    setPage(title);
  }

  return (
    <>
      <div className="container is-fluid">
        <Header />
        <Pages>
        <button onClick={() => changePage("home")} className="navbar-item">Home</button>
        <button onClick={() => changePage("bar")} className="navbar-item">Look Up By Day</button>
        <button onClick={() => changePage("income")} className="navbar-item">Income</button>
        <button onClick={() => changePage("expense")} className="navbar-item">Expense</button>
        </Pages>
        <br />
        <br />
        <div className="addData">
          <div className="grid">
            <BodyContent page={page} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App
