import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./component/Home";
import Main from "./Gallery_component/Gallery_Main";
import SHOW from "./Gallery_component/Show";
import Gallery from "./component/Gallery";
import Introduce from "./component/Introduce";
import Map from "./component/Map";
import NotFound from "./component/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Gallery" element={<Navigate replace to="/Home" />} />
        <Route path="/Gallery/*" element={<Gallery />}>
          <Route path="main" element={<Main />} />
          <Route path="1" element={<SHOW />} />
          <Route path="2" element={<SHOW />} />
          <Route path="3" element={<SHOW />} />
          <Route path="4" element={<SHOW />} />
          <Route path="5" element={<SHOW />} />
        </Route>
        <Route path="/Introduce" element={<Introduce />}></Route>
        <Route path="/Map" element={<Map />}></Route>
        <Route path="*" element={<Navigate replace to="/Home" />} />
        <Route path="/" element={<Navigate replace to="/Home" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
