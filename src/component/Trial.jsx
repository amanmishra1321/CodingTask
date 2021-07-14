import React from "react";
import CheckIcon from '@material-ui/icons/Check';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Trial = () => {
    return(<>
<div className="fluid-container">
    <div className="row my-5">
        <div className="col-lg-4 ps-5 col-md-12 col-xs-12">
            <p className="h3 text-primary"><FontAwesomeIcon icon={faCheck} style={{color:"green"}}/>Free Trial Demo</p>
        </div>
        <div className="col-lg-4 ps-5 col-md-12 col-xs-12">
        <p className="h3 text-primary"><i class="fas fa-check"></i>
        <FontAwesomeIcon icon={faCheck} style={{color:"green"}}/>No Credit Card Needed</p>
        </div>
        <div className="col-lg-4 ps-5 col-md-12 col-xs-12">
        <p className="h3 text-primary"><FontAwesomeIcon icon={faCheck} style={{color:"green"}}/>No Setup</p>
        </div>
    </div>
</div>

    </>);
}
export default Trial;