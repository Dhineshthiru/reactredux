import { BrowserRouter as Routers, Switch, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Redux/containers/productDetail";
import productListing from "./Redux/containers/productListing";
import productDetail from "./Redux/containers/productDetail";
import React from "react";

function App() {
  return (
    <div className="App">
      <Routers>
        <Header />
        <Routes>
          <Route path="/" exact Component={productListing}></Route>
          <Route
            path="/product/productId"
            exact
            Component={productDetail}
          ></Route>
          <Route> 404 Not Found!</Route>
        </Routes>
      </Routers>
    </div>
  );
}

export default App;
