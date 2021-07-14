import React from "react";
import "../css/DemoCall.css";
const DemoCall = () => {
    return (<>
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-7">
                    <p className="h2">We're Here To <br/>Help You.<br/>Ask Us Anything<br/>Or Schedule A Demo Call.</p>
                </div>
                <div className="col-lg-5 mt-5">
                    <button className="btn colorful" style={{borderRadius:"5rem"}}>Talk To Advisor</button>
                </div>
            </div>
        </div>
    </>);
}
export default DemoCall;