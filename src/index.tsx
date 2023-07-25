import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Container/App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
  </BrowserRouter>
);
