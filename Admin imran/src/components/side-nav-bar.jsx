import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RecentActorsIcon from '@material-ui/icons/RecentActors';

function SideNav() {
  return (
    <>
        <div className="side-nav py-3">
          <h3 className="p-4">Dashboard</h3>
          <ul className="container-fluid text-left">
            <Link to="/">
              <li><HomeIcon /> Home</li>
            </Link>
            <Link to="/dash">
              <li><AccountCircleIcon /> User</li>
            </Link>
            <Link to="/profiles">
              <li><RecentActorsIcon /> Profiles</li>
            </Link>
          </ul>
        </div>
    </>
  );
}

export default SideNav;
