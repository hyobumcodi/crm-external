import React from "react";
import { type RouteObject } from "react-router-dom";
import { AppRoutingManager } from "@bodycodi/shell-router";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppRoutingManager type="app-locker-realtime-board" />,
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
