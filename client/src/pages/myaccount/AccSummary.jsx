import React from "react"; 
import { Link } from "react-router-dom";
const AccSummary = () => {
    return(
        <> 
            <div className="main_wrap">
                {/* <!-- agent path --> */}
                <div className="agent_path">
                    <ul id="agentPath" className="agent_path-L">
                        <li id="path3" className="last_li">
                            <Link href="javascript: void(0);">
                            <span id="userLevel" className="lv_3">A</span>
                            <strong id="userLevelId">admin</strong>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* <!-- Agent Left Column --> */}
                <div className="col-left">
                    {/* <!-- Sub Menu and Path --> */}
                    <div className="sub_path">
                        {/* <!-- Sub Menu --> */}
                        <ul className="menu-list">
                            <li className="class">Position</li>
                            <li className="li-hover"><Link id="accountStatement" to="/AccStatement">Account Statement</Link></li>
                            <li className="li-hover select"><Link id="accountSummary" to="/AccSummary" className="">Account Summary</Link></li>
                            <li className="class">Account Details</li>
                            <li className="li-hover"><Link id="profile" to="/AccProfile">Profile</Link></li>
                            <li className="li-hover"><Link id="activityLog" to="/AccActivityLog">Activity Log</Link></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Center Column --> */}
                <div className="col-center report">
                    <h2>Account Summary</h2>
                    <div className="white-wrap">
                        <dl className="head-balance">
                            <dt>Your Balances</dt>
                            <dd><strong id="acBalance">2.00</strong> <span>PBU</span></dd>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AccSummary