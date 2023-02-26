import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShop,
  faChevronDown,
  faStore,
  faUsers,
  faArrowUpWideShort,
  faCreditCard,
  faBook,
  faGauge,
  faUsersLine,
} from "@fortawesome/free-solid-svg-icons";
const SideNav = () => {
  return (
    <div>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link " href="index.html">
              <FontAwesomeIcon icon={faGauge} />
              &nbsp;&nbsp;
              <span>Dashboard</span>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#components-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <FontAwesomeIcon icon={faShop} />
              &nbsp;&nbsp; <span>Shop</span>
              <FontAwesomeIcon className="ms-auto" icon={faChevronDown} />
            </a>
            <ul
              id="components-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="/admin/products">
                  <i className="bi bi-circle"></i>
                  <span>Products</span>
                </a>
              </li>
              <li>
                <a href="/admin/sales">
                  <i className="bi bi-circle"></i>
                  <span>Sales</span>
                </a>
              </li>
              <li>
                <a href="/admin/stock">
                  <i className="bi bi-circle"></i>
                  <span>Stock</span>
                </a>
              </li>
              <li>
                <a href="/admin/category">
                  <i className="bi bi-circle"></i>
                  <span>Categories</span>
                </a>
              </li>
              <li>
                <a href="/admin/variance">
                  <i className="bi bi-circle"></i>
                  <span>Variance</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/admin/stores">
              <FontAwesomeIcon icon={faStore} />
              &nbsp;&nbsp;
              <span>Stores</span>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#charts-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <FontAwesomeIcon icon={faUsers} />
              &nbsp;&nbsp;
              <span>Users</span>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#icons-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <FontAwesomeIcon icon={faUsersLine} />
              &nbsp;&nbsp;
              <span>Suppliers</span>
            </a>
          </li>
          <li className="nav-heading">Activities</li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <FontAwesomeIcon icon={faArrowUpWideShort} />
              &nbsp;&nbsp;
              <span>Ordes</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-faq.html">
              <FontAwesomeIcon icon={faCreditCard} />
              &nbsp;&nbsp;
              <span>Payments</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#components"
              data-bs-toggle="collapse"
              href="#"
            >
              <FontAwesomeIcon icon={faBook} />
              &nbsp;&nbsp;
              <span>Reports</span>
              <FontAwesomeIcon className="ms-auto" icon={faChevronDown} />
            </a>
            <ul
              id="components"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="components-alerts.html">
                  <i className="bi bi-circle"></i>
                  <span>Daily</span>
                </a>
              </li>
              <li>
                <a href="components-accordion.html">
                  <i className="bi bi-circle"></i>
                  <span>Weekly</span>
                </a>
              </li>
              <li>
                <a href="components-badges.html">
                  <i className="bi bi-circle"></i>
                  <span>Monthly</span>
                </a>
              </li>
              <li>
                <a href="components-breadcrumbs.html">
                  <i className="bi bi-circle"></i>
                  <span>Commissions</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default SideNav;
