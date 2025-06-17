import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Layout from "./components/layout";
import AppScheduleCheckin from "./components/app-schedule-checkin";
import AppLockerRealtimeBoard from "./components/app-locker-realtime-board";

import {
  appScheduleCheckinBasename,
  appLockerRealtimeBoardBasename,
} from "./constants/prefix";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        index: true,
        element: <Navigate to={appLockerRealtimeBoardBasename} />,
      },
      {
        path: `${appLockerRealtimeBoardBasename}/*`,
        element: <AppLockerRealtimeBoard />,
      },
      {
        path: `${appScheduleCheckinBasename}/*`,
        element: <AppScheduleCheckin />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={browserRouter} />;
}
