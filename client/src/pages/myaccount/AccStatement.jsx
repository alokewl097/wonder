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
                            <li className="li-hover select"><Link id="accountStatement" to="/AccStatement">Account Statement</Link></li>
                            <li className="li-hover"><Link id="accountSummary" to="/AccSummary" className="">Account Summary</Link></li>
                            <li className="class">Account Details</li>
                            <li className="li-hover"><Link id="profile" to="/AccProfile">Profile</Link></li>
                            <li className="li-hover"><Link id="activityLog" to="/AccActivityLog">Activity Log</Link></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Center Column --> */}
                <div className="col-center report">
                    <h2>Account Statement</h2>
                    <table id="table_log" className="table01">
                        <tbody>
                            <tr>
                                <th width="15%" className="align-L">Date/Time</th>
                                <th width="18%" className="align-R">Deposit From Upline</th>
                                <th width="18%" className="align-R">Deposit to Downline</th>
                                <th width="18%" className="align-R">WihtDraw By Upline</th>
                                <th width="18%" className="align-R">WithDraw From Downline</th>
                                <th width="18%" className="align-R">Balance</th>
                                <th width="16%" className="align-R">Remark</th>
                                <th width="" className="align-R">From/To</th>
                            </tr>
                        </tbody>
                        <tbody id="statements">
                            <tr id="tempTr">
                                <td className="align-L" id="loginDate">05/05/2025 11:30:28</td>
                                <td className="green" id="loginMessage">-</td>
                                <td className="green" id="loginMessage">1.00</td>
                                <td id="ipAddress" className="sky-align red">-</td>
                                <td id="ipAddress" className="sky-align red">-</td>
                                <td id="isp" className="sky-align">2.00</td>
                                <td id="location" className="sky-align"></td>
                                <td id="userAgentType" className="sky-align">Admin -&gt; satest</td>
                            </tr>
                            <tr id="tempTr">
                                <td className="align-L" id="loginDate">05/05/2025 11:30:18</td>
                                <td className="green" id="loginMessage">-</td>
                                <td className="green" id="loginMessage">1.00</td>
                                <td id="ipAddress" className="sky-align red">-</td>
                                <td id="ipAddress" className="sky-align red">-</td>
                                <td id="isp" className="sky-align">3.00</td>
                                <td id="location" className="sky-align"></td>
                                <td id="userAgentType" className="sky-align">Admin -&gt; satest</td>
                            </tr>
                            <tr id="tempTr">
                                <td className="align-L" id="loginDate">01/03/2025 17:52:24</td>
                                <td className="green" id="loginMessage">-</td>
                                <td className="green" id="loginMessage">1.00</td>
                                <td id="ipAddress" className="sky-align red">-</td>
                                <td id="ipAddress" className="sky-align red">-</td>
                                <td id="isp" className="sky-align">4.00</td>
                                <td id="location" className="sky-align"></td>
                                <td id="userAgentType" className="sky-align">Admin -&gt; satest</td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <ul id="pageNumberContent" className="pages">
                            <li id="prev"><a href="javascript:void(0);" className="disable" style={{ pointerEvents: "none"}}>Prev</a></li>
                            <li id="pageNumber"><a href="javascript:void(0);" className="select" style={{ pointerEvents: "none"}}>1</a></li>
                            <li id="next"><a href="javascript:void(0);" className="disable" style={{ pointerEvents: "none"}}>Next</a></li>
                            <input type="text" id="goToPageNumber_1" maxlength="6" size="4" /><a id="goPageBtn_1">GO</a>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AccSummary