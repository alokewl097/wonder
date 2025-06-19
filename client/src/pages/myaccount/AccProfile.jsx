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
                            <li className="li-hover"><Link id="accountSummary" to="/AccSummary" className="">Account Summary</Link></li>
                            <li className="class">Account Details</li>
                            <li className="li-hover select"><Link id="profile" to="/AccProfile">Profile</Link></li>
                            <li className="li-hover"><Link id="activityLog" to="/AccActivityLog">Activity Log</Link></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Center Column --> */}
                <div className="col-center report">
                    <h2>Profile</h2>
                    <div className="d-flex profile-flex">
                        <div className="event-left">
                            <div className="profile-wrap">
                                <h3>About You</h3>
                                <dl>
                                <dt>First Name</dt>
                                <dd id="userFirstName">admin</dd>
                                </dl>
                                <dl>
                                <dt>Last Name</dt>
                                <dd id="userLastName">abc</dd>
                                </dl>
                                <dl>
                                <dt>Birthday</dt>
                                <dd>--</dd>
                                </dl>
                                <dl>
                                <dt>E-mail</dt>
                                <dd id="useremail">abc@xyz.com</dd>
                                </dl>
                                <dl>
                                <dt>Password</dt>
                                <dd>
                                    ********************************
                                    <a href="#" className="favor-set openchangepwdmodal">
                                        Edit
                                        <i className="fas fa-pen"></i>
                                    </a>
                                </dd>
                                </dl>
                                <dl>
                                <dt>Time Zone</dt>
                                <dd id="usertimeZone">IST</dd>
                                </dl>
                            </div>
                        </div>
                        <div className="event-right">
                            <div className="profile-wrap">
                                <h3>Contact Details</h3>
                                <dl>
                                <dt>WhatsApp number</dt>
                                <dd id="userMob">0987654321</dd>
                                </dl>
                            </div>
                            <div className="profile-wrap">
                                <h3>Upline WhatsApp Number</h3>
                                <dl>
                                <dt>WhatsApp number</dt>
                                <dd id="userMobPar">0987654321</dd>
                                </dl>
                            </div>
                            <div className="profile-wrap" id="limits">
                                <h3>Set  Limits</h3>
                                <dl>
                                <dt>Exposure Limit</dt>
                                <dd><span id="pmainwalletExposureLimit"><a onclick="showExpoUpdate()" className="favor-set">Edit</a></span></dd>
                                <dt>Commission</dt>
                                <dd>
                                    <span id="pcommission"><a onclick="showCommUpdate()" className="favor-set">Edit</a></span>
                                </dd>
                                </dl>
                            </div>
                            <div className="profile-wrap" style={{ display: "none"}}>
                                <h3>PT</h3>
                                <dl>
                                <dt>My PT Allowed</dt>
                                <dd>0%</dd>
                                </dl>
                                <dl>
                                <dt>My Fancy Bet PT</dt>
                                <dd>0%</dd>
                                </dl>
                                <dl>
                                <dt>Sportsbook PT</dt>
                                <dd>0%</dd>
                                </dl>
                                <dl>
                                <dt>Sportsbook Premium PT</dt>
                                <dd>0%</dd>
                                </dl>
                                <dl>
                                <dt>My Book Maker PT</dt>
                                <dd>0%</dd>
                                </dl>
                                <dl>
                                <dt>Casino PT Allowed</dt>
                                <dd>LIVE: 0%, RNG: 0%, SLOT: 0%, VIRTUAL: 0%</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AccSummary