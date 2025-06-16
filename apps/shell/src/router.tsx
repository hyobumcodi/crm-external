import React, { Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout";
import {
  appScheduleCheckinBasename,
  appLockerRealtimeBoardBasename,
} from "./constants/prefix";

const AppScheduleCheckinLazy = React.lazy(
  () => import("./components/app-schedule-checkin")
);
const AppLockerRealtimeBoardLazy = React.lazy(
  () => import("./components/app-locker-realtime-board")
);

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        index: true,
        element: <Navigate to={`${appLockerRealtimeBoardBasename}`} />,
      },
      {
        path: `${appLockerRealtimeBoardBasename}/*`,
        element: (
          <Suspense fallback="Loading Locker Realtime Board...">
            <AppLockerRealtimeBoardLazy />
          </Suspense>
        ),
      },
      {
        path: `${appScheduleCheckinBasename}/*`,
        element: (
          <Suspense fallback="Loading Schedule Checkin...">
            <AppScheduleCheckinLazy />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={browserRouter} />;
}
