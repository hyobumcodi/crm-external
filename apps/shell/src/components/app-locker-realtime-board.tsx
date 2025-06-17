import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { importRemote } from "@module-federation/utilities";

import { type InjectFuncType, useShellEvent } from "@bodycodi/shell-router";

import { appLockerRealtimeBoardBasename } from "../constants/prefix";

export default function AppLockerRealtimeBoard() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useShellEvent("app-locker-realtime-board", appLockerRealtimeBoardBasename);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }

    isFirstRunRef.current = false;

    importRemote<{ default: InjectFuncType }>({
      url: "http://localhost:3001",
      scope: "locker_realtime_board",
      module: "injector",
      remoteEntryFileName: `remoteEntry.js`,
    })
      .then(({ default: inject }) => {
        unmountRef.current = inject({
          routerType: "memory",
          rootElement: wrapperRef.current!,
          basePath: location.pathname.replace(
            appLockerRealtimeBoardBasename,
            ""
          ),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [location]);

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="app-locker-realtime-board" />;
}
