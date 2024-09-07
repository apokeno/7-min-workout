import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';

import TgDemo from "./routes/tgDemo";
import App from "./App";
import Go from './routes/Go';
import ExerciseList from "./routes/ExerciseList";
import WorkoutList from "./routes/WorkoutList";

const router = createBrowserRouter([
  {
    path: "/demo",
    element: <TgDemo />,
  }, {
    path: "/list",
    element: <WorkoutList />,
  }, {
    path: "/edit",
    element: <div>Hello world!</div>,
  }, {
    path: "/about",
    element: <div>Hello world!</div>,
  }, {
    path: "/exercises",
    element: <ExerciseList />,
  }, {
    path: "/",
    element: <Go />,
  }, {
    path: "/a",
    element: <App />,
  },
], { basename: process.env.PUBLIC_URL});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
