import "./App.css";
import React, { useEffect } from 'react';
import ApiExample from "./components/examples/ApiExample";
import { keepTheme } from "./utils/Themes";

function App() {

  useEffect(() => {
    keepTheme();
  });

  return (
    <div className="App" useEffect>
      <ApiExample />
    </div>
  );
}

export default App;
