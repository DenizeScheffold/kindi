import * as React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function HeaderComponent() {
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;

  function logout() {
    authContext.logout();
  }

  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg">


            <ul className="navbar-nav">
              <li className="nav-item">
                {isAuthenticated && (
                  <Link className="nav-link" to="/welcome/user">
                  <h3> <b> Kindi </b></h3>
                  </Link>
                )}
              </li>
            </ul>


            <ul className="navbar-nav">
              <li className="nav-item">
                {isAuthenticated && (
                  <Link className="nav-link" to="/setdays">
                    {/* to={`/setdays/${authContext.userId}`}> */}
                    Planera dagar
                  </Link>
                )}
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                {isAuthenticated && (
                  <Link className="nav-link" to="/viewweek">
                    Se er plan
                  </Link>
                )}
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                {isAuthenticated && (
                  <Link className="nav-link" to={`/profile`}>
                    Profil
                  </Link>
                )}
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                {!isAuthenticated && (
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                )}
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                {!isAuthenticated && (
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                )}

              </li>

              <li className="nav-item">
                {isAuthenticated && (
                  <Link className="nav-link" to="/logout" onClick={logout}>
                    Logout
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;