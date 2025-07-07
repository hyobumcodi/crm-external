import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useShellNavigateListener } from "@packages/shell-router";

// import { Button } from "@packages/ui-kit";
import {
  appScheduleCheckinBasename,
  appLockerRealtimeBoardBasename,
} from "../constants/prefix";

const Layout = () => {
  useShellNavigateListener();

  return (
    <div>
      <header className="global-nav">
        <div className="global-nav-content">
          <Link className="global-nav-logo" to="/">
            <span>Bodycodi External</span>
          </Link>
          <nav className="global-nav-nav">
            <ul className="global-nav-items">
              <li className="global-nav-item">
                <NavLink
                  className="global-nav-link"
                  to={`${appLockerRealtimeBoardBasename}`}
                >
                  <span className="global-nav-link-text">락커 현황판</span>
                </NavLink>
              </li>
              <li className="global-nav-item">
                <NavLink
                  className="global-nav-link"
                  to={`${appScheduleCheckinBasename}`}
                >
                  <span className="global-nav-link-text">
                    그룹수업 얼굴인식 체크인
                  </span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="global-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
