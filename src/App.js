import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Header from './layout/Head';
import Footer from './layout/Footer';
import Content from './Content';
import Gallery from './Gallery';
import Introduce from './Introduce';
import Map from './Map';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Home" element={<Content />}></Route>
        <Route path="/Gallery/*" element={<Gallery />}></Route>
        <Route path="/Introduce" element={<Introduce />}></Route>
        <Route path="/Map" element={<Map />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
