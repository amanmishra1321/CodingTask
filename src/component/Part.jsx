import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrella, faMitten, faMedkit } from "@fortawesome/free-solid-svg-icons";
const Part = () => {
    return (<>
        <div className="container mt-4">
            <div className="row ">
                <div className="col-lg-4 ">
                    <FontAwesomeIcon icon={faUmbrella} size='4x' />
                    <p className="text-primary text-center">Our benefits are designed to.<br /> be accessbile to all </p>
                </div>
                <div className="col-lg-4">
                    <FontAwesomeIcon icon={faMitten} size='4x' />
                    <p className="text-primary text-center">A healthy team can better <br /> support your business and your bottom line.</p>
                </div>
                <div className="col-lg-4">
                    <FontAwesomeIcon icon={faMedkit} size='4x' />
                    <p className="text-primary text-center">Become a business where <br /> talented people want to <br /> work  and stick around.</p>
                </div>
            </div>
        </div>
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-6">
                    <span className="h1">A Complete HR<br/>Platform<br/>Saves You<br/>Time.</span>

                </div>
                <div className="col-lg-6">
                    <span> TripUpp streamlines your workflow by <br/> automatically<br/>connecting HR, Benefits,Payroll and <br/> Scheduling, together in one platform.This <br/> means less time spent on low-priority <br/> tasks so your team can focus on more <br/> important things.</span>
                </div>
            </div>

        </div>
    </>);
}
export default Part;