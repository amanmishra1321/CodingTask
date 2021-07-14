import React from "react";
import girl_image from "../static/Girl2.jpg";

const AddNewEmployee = () => {
  return (
    <div className="col-5 row add-employee border border-rounded p-3 position-absolute text-light" >
      <div className="col-6 mb-2">Add New Employee</div>
      <div className="col-6 text-end">Inbox
      </div>
      <div className="col-12 small">
        <div style={{ width: "30%" }} className="text-center">
          <img
            style={{ width: "50px" }}
            src={girl_image}
            className="img-fluid rounded-circle"
          />
          <div>Jillian Wilde</div>
          <div>Full time - Ls angleos</div>
        </div>
      </div>
    </div>
  );
};
export default AddNewEmployee;
