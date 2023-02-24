import React from "react";
// import { Route, Routes } from "react-router-dom";
import CardJob from "./Components/CardJob";
import Navbar from "./Components/Navbar";
// import { BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <div style={{background: "#50A561",fontFamily: "Roboto"}}>
    {/* <BrowserRouter>
      <Routes> */}
        <Navbar />
        <CardJob />
        {/* <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter> */}
    </div>
  );
};
export default App;
