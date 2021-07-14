import React from "react";
import { faAward, faCalendarAlt, faChartBar, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Payroll = () => {
    return(<>
    <div className="container my-5 ">
    <p className="text-primary"><FontAwesomeIcon icon={faChartBar} size="2x" style={{paddingRight:"10px"}}/><span className="h2">Payroll </span>Payroll that's easy to use and seriously smart.</p>
        <div className="row my-5 ps-5">
            <div className="col-lg-3">
            <FontAwesomeIcon  size="4x" icon={faDollarSign}/>
            <p className="text-primary text-center">Unlimited Payroll's.<br/> Clear Pricing, No Surprises</p>
            </div>
            <div className="col-lg-3">
            <FontAwesomeIcon size="4x"  icon={faAward}/>
            <p className="text-primary text-center">Automatically files,<br/> your payroll taxes</p>
            </div>
            <div className="col-lg-3">
            <FontAwesomeIcon size="4x"  icon={faEnvelopeOpenText}/>
            <p className="text-primary text-center">Everything you need<br/> synced with payroll.</p>
            </div>
            <div className="col-lg-3">
            <FontAwesomeIcon size="4x"  icon={faCalendarAlt}/>
            <p className="text-primary text-center">Compilance,accuracy,<br/> and peace of mind </p>
            </div>

        </div>
    </div>
    </>);
}
export default Payroll;