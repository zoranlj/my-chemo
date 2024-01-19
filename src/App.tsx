import React from 'react';
import './App.scss';
import MyResponsiveLine from "./components/MyResponsiveLine";
import data from "./data";

function App() {
  return (
    <div className="App">
      <MyResponsiveLine data={data} />
    </div>
  );
}

export default App;
