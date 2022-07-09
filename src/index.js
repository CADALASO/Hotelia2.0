import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import AppRoutes from './routes/AppRoutes';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppRoutes/>
);

