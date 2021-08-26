import React from "react";
import "./App.css";
import Nav from "./components/Nav.js";
import BookList from "./components/BookList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <div>
          <BookList />
        </div>
      </header>
    </div>
  );
}

export default App;
