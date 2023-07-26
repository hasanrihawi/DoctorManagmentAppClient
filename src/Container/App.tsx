import React from "react";
import { Footer, Header } from "../Components/Layout";
import { Home, NotFound } from "../Pages";
import { Routes, Route } from "react-router-dom";
import NewPatientForm from "../Components/Page/Patient/NewPatientForm";
function App() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Header />
      <div className="pb-5" style={{ width: '100%', height: '100%' }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/NewPatientForm"
            element={<NewPatientForm />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
