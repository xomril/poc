import React from "react";

import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import "./App.css";
import Header from "./base/Header";
import Cori from "./base/Cori";


function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <AppProvider>
     

     <Header/>
     <Cori/>
    </AppProvider>
  );
}

export default App;
