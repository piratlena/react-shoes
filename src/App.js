import React from "react";
import HomePage from './pages/HomePage';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./utils/appRoutes";

function App() {
  return (
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
