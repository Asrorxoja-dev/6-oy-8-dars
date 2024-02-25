import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Portfolio from "./components";
import "./App.css";
import Loader from "./loader";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <>
        <Loader></Loader>
        <Portfolio></Portfolio>
      </>
    </I18nextProvider>
  );
}

export default App;
