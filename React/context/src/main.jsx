import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { CounterContextProvider } from "./context/CunterContext.jsx";
import { TitleColorContextProvider } from "./context/TitleColorContext.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Contact from "./routes/Contact.jsx";
import Home from "./routes/Home.jsx";

const router = createBrowserRouter([
  {
    pate: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterContextProvider>
      <TitleColorContextProvider>
        <RouterProvider router={router} />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </React.StrictMode>
);
