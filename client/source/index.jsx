import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes.jsx';

ReactDOM.render(<Router><Routes /></Router>, document.getElementById("app"));
