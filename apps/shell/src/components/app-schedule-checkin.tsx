import React, { useEffect, useRef } from "react";
import inject from "schedule-checkin/injector";
import { useLocation } from "react-router-dom";
import { appScheduleCheckinBasename } from "../constants/prefix";
import { useShellEvent } from "@bodycodi/shell-router";

export default function AppScheduleCheckin() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useShellEvent("app-schedule-checkin", appScheduleCheckinBasename);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }
    unmountRef.current = inject({
      routerType: "memory",
      rootElement: wrapperRef.current!,
      basePath: location.pathname.replace(appScheduleCheckinBasename, ""),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="app-schedule-checkin" />;
}
