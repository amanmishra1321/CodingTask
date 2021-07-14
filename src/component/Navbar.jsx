import React from "react";
import "../css/Navbar.css";
import AddNewEmployee from "./AddNewEmployee";
import JobDetailsCard from "./JobDetailsCard";
const Navbar = () => {
  return (
    <>
      <div className="gradient top-header">
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
        <div className="row position-relative">
          <div className="col-6 px-5 pt-5 ml-5">
            <button className="rounded-x-btn fw-bold try-free-btn px-3 h5 p-2">
              Try For Free Now ! &nbsp; &nbsp; {`>`}
            </button>
            <div className="h1 mt-5 text-white">
              Set Your Business Up With Modern Payroll, Benefits, And HR.
            </div>
            <div>
              <div className="get-started d-inline-block p-2">
                <span className="">@ Your Email address &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
                <button className="btn-primary text-white p-2 ml-5">Get Start</button>
              </div>
            </div>
            <div className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non, enim quisquam reprehenderit commodi odio similique perspiciatis error dolorem atque eaque beatae impedit delectus sequi eligendi voluptatem nostrum officiis libero.</div>
          </div>
          <div className="col-6 row p-3">
            <AddNewEmployee/>
            <JobDetailsCard/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
