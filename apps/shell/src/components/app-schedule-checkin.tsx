import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { importRemote } from "@module-federation/utilities";

import { type InjectFuncType, useShellEvent } from "@packages/shell-router";

import { appScheduleCheckinBasename } from "../constants/prefix";

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

    isFirstRunRef.current = false;
    importRemote<{ default: InjectFuncType }>({
      url: process.env.REACT_APP_MICROAPP_SCHEDULE_CHECKIN!,
      scope: "schedule_checkin",
      module: "injector",
      remoteEntryFileName: `remoteEntry.js`,
    })
      .then(({ default: inject }) => {
        unmountRef.current = inject({
          routerType: "memory",
          rootElement: wrapperRef.current!,
          basePath: location.pathname.replace(appScheduleCheckinBasename, ""),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [location]);

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="app-schedule-checkin" />;
}
