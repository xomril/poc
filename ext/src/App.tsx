import React from 'react';
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import "./App.css";
import Cori from "./base/Cori";

function App() {
  return (
    <div className="App">
      <AppProvider i18n={enTranslations}>
       <Cori />
        
      </AppProvider>
    </div>
  );
}

export default App;
