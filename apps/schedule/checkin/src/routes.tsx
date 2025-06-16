import React from "react";
import { type RouteObject } from "react-router-dom";
import { AppRoutingManager } from "@bodycodi/shell-router";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppRoutingManager type="app-schedule-checkin" />,
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
