import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import HomePage from "./pages/homePage/HomePage.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SearchPage from "./pages/searchPage/SearchPage.tsx";
import CompanyPage from "./pages/companyPage/CompanyPage.tsx";
import CompanyProfile from "./components/companyProfile/CompanyProfile.tsx";
import IncomeStatement from "./components/incomeStatement/IncomeStatement.tsx";
import DesignGuide from "./pages/designGuide/DesignGuide.tsx";
import BalanceSheet from "./components/balanceSheet/BalanceSheet.tsx";
import CashflowStatement from "./components/cashflowStatement/CashflowStatement.tsx";
import HistoricalDividend from "./components/historicalDividend/HistoricalDividend.tsx";
import LoginPage from "./pages/loginPage/LoginPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "search", element: <SearchPage /> },
      { path: "design-guide", element: <DesignGuide /> },
      {
        path: "company/:ticker",
        element: <CompanyPage />,
        children: [
          { path: "company-profile", element: <CompanyProfile /> },
          { path: "income-statement", element: <IncomeStatement /> },
          { path: "balance-sheet", element: <BalanceSheet /> },
          { path: "cashflow-statement", element: <CashflowStatement /> },
          { path: "historical-dividend", element: <HistoricalDividend /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
