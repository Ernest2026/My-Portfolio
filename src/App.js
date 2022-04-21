import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import Mail from "./component/pages/Mail";
import Readmsg from "./component/pages/Readmsg";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/mailbox" element={<Mail />}></Route>
          <Route path="/mailbox/:userId" element={<Readmsg />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
