import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from "./features/auth/SignIn";
import SignUp from "./features/auth/SignUp";
import Home from "./features/home/Home";
import Store from "./features/auth/Store";
import AccountDashboard from "./features/account/AccountDashboard";
import AccountSettings from "./features/account/AccountSettings";
import UserSearch from "./features/search/UserSearch";
import GamePage from "./features/games/GamePage";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router  = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div>404 Not Found</div>,
    },
    {
        path: '/sign-in',
        element: <SignIn />,
    },
    {
        path: '/sign-up',
        element: <SignUp />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/dashboard',
        element: <AccountDashboard />
    },
    {
        path: '/settings',
        element: <AccountSettings />
    },
    {
        path: '/user-results',
        element: <UserSearch />
    },
    {
        path: '/game',
        element: <GamePage />
    }
]);
root.render(
  <React.StrictMode>
      <Store>
          <RouterProvider router={router}/>
      </Store>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
