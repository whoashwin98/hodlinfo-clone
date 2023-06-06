import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import TableContent from "./components/TableContent";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="padding-bottom-50">
        <Jumbotron />
        <TableContent />
      </div>
    </>
  );
};

export default App;
