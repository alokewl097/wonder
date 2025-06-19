import React from "react";

const Marquee = () =>{
    return(
        <div className="marquee-box container" style={{ display: "flex", borderRadius: "5px"}}>
            <h4><i className="" aria-hidden="true"></i>
                News
            </h4>
            <div className="marquee">
                <div  className="js-marquee-wrapper">
                    <div className="js-marquee" style={{ marginRight: "0px", width: "100%", float: "left"}}>
                        <marquee width="100%" direction="left">
                            <span id="news_data" style={{ display: " -webkit-inline-box"}}>--</span>
                        </marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Marquee;