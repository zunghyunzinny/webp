import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Template from './components/Template';
import Head from "./Header/Head";
import FixPage from "./components/FixPage";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Profile from "./pages/Profile";
import 'bootstrap/dist/css/bootstrap.min.css';


const GlobalStyle = createGlobalStyle`
  body {
    background: #F6769F;
  }
`;

const App = () => {
  return (
    <BrowserRouter>
      <>
        <GlobalStyle />
        <Template>
          <Head />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Intro" element={<Intro />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
          <FixPage />
        </Template>
      </>
    </BrowserRouter>
  );
}

export default App;