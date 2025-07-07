import React, { Suspense } from "react";
import { type RouteObject } from "react-router-dom";
import { AppRoutingManager } from "@packages/shell-router";

const ErrorBoundary = React.lazy(
  () => import("fragment_error_connections/container")
);

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>
          <AppRoutingManager type="app-locker-realtime-board" />
        </ErrorBoundary>
      </Suspense>
    ),
    errorElement: <div>App Realtime Board Error</div>,
    children: [
      {
        index: true,
        element: <div>App Realtime Board Root</div>,
      },
      {
        path: "1",
        element: <div>App Realtime Board Page 1</div>,
      },
    ],
  },
];
