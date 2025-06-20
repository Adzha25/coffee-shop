import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import CartProvider from './context/CartContext.jsx';
import './index.css';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
);
