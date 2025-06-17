import React, { Suspense } from "react";

import { type RouteObject } from "react-router-dom";
import { AppRoutingManager } from "@bodycodi/shell-router";

const ErrorBoundary = React.lazy(
  () => import("fragment_error_connections/container")
);

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>
          <AppRoutingManager type="app-schedule-checkin" />
        </ErrorBoundary>
      </Suspense>
    ),
    errorElement: <div>App Schedule Checkin Error</div>,
    children: [
      {
        index: true,
        element: <div>App Schedule Checkin Root</div>,
      },
      {
        path: "1",
        element: <div>App Schedule Checkin Page 1</div>,
      },
    ],
  },
];
