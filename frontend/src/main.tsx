import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import HomePage from './pages/homePage/HomePage.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SearchPage from './pages/searchPage/SearchPage.tsx';
import CompanyPage from './pages/companyPage/CompanyPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      { path: "company/:ticker", element: <CompanyPage /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
