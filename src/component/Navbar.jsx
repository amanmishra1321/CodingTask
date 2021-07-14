import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="gradient">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <div className="container-fluid">
            <a className="navbar-brand text-light" href="#">
              TRIPUPP HR
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active text-light pe-5"
                    aria-current="page"
                    href="#"
                  >
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light pe-5" href="#">
                    PAYROLLS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light pe-5" href="#">
                    BENEFITS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light pe-5" href="#">
                    PRICING
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light pe-5" href="#">
                    WORK WITH US
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <button type="button" class="btn btn-light blank">
          Light
        </button>
        <p className="h2 text-light me-5">
          Set Up Your Business Up <br /> With Modern Payroll,
          <br /> Benefits, And HR.
        </p>
      </div>
    </>
  );
};
export default Navbar;
