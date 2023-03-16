import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline/>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </BrowserRouter>    
</React.StrictMode>,
)
