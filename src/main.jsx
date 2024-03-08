import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';

import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom';

import { Home } from './routes/Home.jsx';
import { NewPost } from './routes/NewPost.jsx';
import { Post } from './routes/Post.jsx';
import { Admin } from './routes/Admin.jsx';
import { EditPost } from './routes/Editpost.jsx';


const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "Blog",
        element: <Home />
      },
      {
        path: "/new",
        element: <NewPost />
      },
      {
        path: "/posts/:id",
        element: <Post /> 
      },
      {
        path: "/admin",
        element: <Admin /> 
      },
      {
        path: "/edit/:id",
        element: <EditPost /> 
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
