import React, { useEffect, useRef } from "react";
import inject from "locker-realtime-board/injector";
import { useLocation } from "react-router-dom";
import { appLockerRealtimeBoardBasename } from "../constants/prefix";
import { useShellEvent } from "@bodycodi/shell-router";

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
    unmountRef.current = inject({
      routerType: "memory",
      rootElement: wrapperRef.current!,
      basePath: location.pathname.replace(appLockerRealtimeBoardBasename, ""),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="app-locker-realtime-board" />;
}
