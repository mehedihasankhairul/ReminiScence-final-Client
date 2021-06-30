
import {
  faClipboardList,
  faQuoteLeft,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const { panel } = useParams();
  return (
    <div className="mt-5 pt-5">
      <nav id="sidebar">
        <ul className="list-unstyled sidebar-items">
          <li>
            <Link
              to="/dashboard/profile"
              className={panel === "profile" ? "link-active" : ""}
            >
              <FontAwesomeIcon icon={faUser} /> <span>User Profile</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/addBlog"
              className={panel === "addBlog" ? "link-active" : ""}
            >
              <FontAwesomeIcon icon={faQuoteLeft} /> <span>Add Blog</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/blog-management"
              className={panel === "blog-management" ? "link-active" : ""}
            >
              <FontAwesomeIcon icon={faClipboardList} /> <span>Manage Blog</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;