import React from "react"; 
import { Link } from "react-router-dom";
const AccSummary = () => {
    return(
        <> 
            <div className="main_wrap">
                {/* <!-- agent path --> */}
                <div className="agent_path" style={{ display: "none"}}>
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
                            <li>
                                <Link id="accountSummary" to="/MemberAcctSmry">Account Profile</Link>
                            </li>
                            <li className="class">Performance</li>
                            <li>
                                <Link id="bettingHistory" to="/AccBettingHistory">Betting History</Link>
                            </li>
                            <li>
                                <Link id="profitLoss" to="/AccProfitAndLoss">Betting Profit &amp; Loss</Link>
                            </li>
                            <li>
                                <Link id="transactionHistory" to="/AccTransactionHistory">Transaction&nbsp;History
                                </Link>
                            </li>
                            <li>
                                <Link id="transactionHistory2" to="/AccTransactionHistory2">Account&nbsp;Statement
                                </Link>
                            </li>
                            <li>
                                <Link id="lifeTimepl" to="/LifetimePL">Life Time P&amp;L
                                </Link>
                            </li>
                            <li><Link id="_activityLog" to="/AccActivityLog" className="select">Activity Log</Link></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Center Column --> */}
                <div className="col-center report">
                    <h2>Activity Log</h2>
                    <table className="table01">
                        <tbody>
                            <tr>
                                <th width="15%" className="align-L">Login Date &amp; Time
                                </th>
                                <th width="15%" className="align-L">Login Status
                                </th>
                                <th width="12%" className="sky-align">IP Address
                                </th>
                                <th width="28%" className="sky-align">ISP
                                </th>
                                <th width="" className="sky-align">City/State/Country
                                </th>
                                <th width="" className="sky-align">User Agent Type
                                </th>
                            </tr>
                        </tbody>
                        <tbody id="statements">
                            <tr id="tempTr">
                                <td className="align-L" id="loginDate">30-05-2025 00:06:38</td>
                                <td className="align-L green" id="loginMessage">Login - -</td>
                                <td id="ipAddress" className="sky-align">5.31.44.168</td>
                                <td id="isp" className="sky-align">Emirates Integrated Telecommunications Company PJSC</td>
                                <td id="location" className="sky-align">Sharjah, United Arab Emirates</td>
                                <td id="userAgentType" className="sky-align">Mobile</td>
                            </tr>
                            <tr id="tempTr">
                                <td className="align-L" id="loginDate">29-05-2025 23:59:36</td>
                                <td className="align-L green" id="loginMessage">Login - -</td>
                                <td id="ipAddress" className="sky-align">194.61.40.117</td>
                                <td id="isp" className="sky-align">GSL Networks Pty LTD</td>
                                <td id="location" className="sky-align">Mumbai, India</td>
                                <td id="userAgentType" className="sky-align">Mobile</td>
                            </tr>
                            <tr id="tempTr">
                                <td className="align-L" id="loginDate">29-05-2025 23:26:20</td>
                                <td className="align-L green" id="loginMessage">Login - -</td>
                                <td id="ipAddress" className="sky-align">42.111.20.236</td>
                                <td id="isp" className="sky-align">Vodafone Idea Ltd.</td>
                                <td id="location" className="sky-align">Delhi, India</td>
                                <td id="userAgentType" className="sky-align">Browser</td>
                            </tr>
                            <tr id="tempTr">
                                <td className="align-L" id="loginDate">29-05-2025 22:29:33</td>
                                <td className="align-L green" id="loginMessage">Login - -</td>
                                <td id="ipAddress" className="sky-align">194.61.40.128</td>
                                <td id="isp" className="sky-align">GSL Networks Pty LTD</td>
                                <td id="location" className="sky-align">Mumbai, India</td>
                                <td id="userAgentType" className="sky-align">Mobile</td>
                            </tr> 
                        </tbody>
                    </table>
                    <div>
                        <ul id="pageNumberContent" className="pages">
                            <li id="prev" onclick="changePage(1)"><a href="javascript:void(0);" className="enable" style={{ pointerEvents: "none"}}>Prev</a></li>
                            <li id="pageNumber" onclick="changePage(1)"><a href="javascript:void(0);" className="" style={{ pointerEvents: "none"}}>1</a></li>
                            <li id="pageNumber"><a href="javascript:void(0);" className="select" style={{ pointerEvents: "none"}}>2</a></li>
                            <li id="pageNumber" onclick="changePage(3)"><a href="javascript:void(0);" class="" className={{ pointerEvents: "none"}}>3</a></li>
                            <li id="next" onclick="changePage(3)"><a href="javascript:void(0);" class="enable" className={{ pointerEvents: "none"}}>Next</a></li>
                            <input type="number" style={{ width: "50px"}} onkeypress="return isNumberKey(event)" id="gotoPage" maxlength="6" size="4" /><a id="goPageBtn_1" onclick="goToPage(25)">GO</a>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AccSummary