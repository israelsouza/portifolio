import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// importando 'páginas' e objetos do router

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Apresentacao from './components/home view/apresentacao';
import Sobre from './components/sobre';
import Projeto from './components/Projeto';

// configurando o router

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Apresentacao />
//   },

//   {
//     path: 'sobre',
//     element: <Sobre />
//   },

//   {
//     path: 'projetos',
//     element: <Projeto />
//   }
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Apresentacao />
      },

      {
        path: 'sobre',
        element: <Sobre />
      },

      {
        path: 'projetos',
        element: <Projeto />
      }
      
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < RouterProvider router={router} />
  </React.StrictMode>
);

