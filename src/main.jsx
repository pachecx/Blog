import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';

import { createBrowserRoute, RouterProvider, Router } from 'react-router-dom';

import { Home } from './routes/Home.jsx';
import { NewPost } from './routes/NewPost.jsx';


const router = createBrowserRoute([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/new",
        element: <NewPost />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
