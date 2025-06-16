import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
// import { Button } from "@bodycodi/ui-kit";
import {
  appLockerRealtimeBoardBasename,
  appScheduleCheckinBasename,
} from "../constants/prefix";

const Layout = () => {
  //   const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  // const handleLogin = async () => {
  //   await loginWithRedirect({
  //     appState: {
  //       returnTo: "/",
  //     },
  //   });
  // };

  // const handleLogout = async () => {
  //   await logout({
  //     logoutParams: {
  //       returnTo: window.location.origin,
  //     },
  //   });
  // };

  return (
    <div>
      <header className="global-nav">
        <div className="global-nav-content">
          <Link className="global-nav-logo" to="/">
            <span>Bodycodi External</span>
          </Link>
          {/* {!isAuthenticated && ( */}
          {/* <div style={{ marginLeft: 20 }}>
            <Button onClick={handleLogin}>Login</Button>
          </div> */}
          {/* )} */}
          {/* {isAuthenticated && ( */}
          {/* <div style={{ marginLeft: 20 }}>
            <Button onClick={handleLogout}>Logout</Button>
          </div> */}
          {/* )} */}
          <nav className="global-nav-nav">
            <ul className="global-nav-items">
              <li className="global-nav-item">
                <NavLink
                  className="global-nav-link"
                  to={`${appLockerRealtimeBoardBasename}`}
                >
                  {/* <Icon.LockerRealtimeBoard /> */}
                  <span className="global-nav-link-text">락커 현황판</span>
                </NavLink>
              </li>
              <li className="global-nav-item">
                <NavLink
                  className="global-nav-link"
                  to={`${appScheduleCheckinBasename}`}
                >
                  {/* <Icon.ScheduleCheckin /> */}
                  <span className="global-nav-link-text">
                    그룹수업 얼굴인식 체크인
                  </span>
                </NavLink>
              </li>
              {/* <li className="global-nav-item">
                <NavLink className="global-nav-link" to={`${appJobBasename}`}>
                  <Icon.PlaceCheckin />
                  <span className="global-nav-link-text">
                    시설 얼굴인식 체크인
                  </span>
                </NavLink>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
      <div className="global-container">
        <Outlet />
      </div>
      {/* <div className="global-container">{isAuthenticated && <Outlet />}</div> */}
    </div>
  );
};

export default Layout;
