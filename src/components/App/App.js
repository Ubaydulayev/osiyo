import "./App.css";
import React from "react";
import Home from "../../pages/home/Home";
import Header from "../../container/header/Header";
import Footer from "../../container/footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
