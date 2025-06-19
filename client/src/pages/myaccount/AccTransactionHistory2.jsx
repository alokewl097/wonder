import React from "react"; 
import { Link } from "react-router-dom";
const AccTransactionHistory2 = () => {
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
                                <Link id="transactionHistory2" to="/AccTransactionHistory2" className="select">Account&nbsp;Statement
                                </Link>
                            </li>
                            <li>
                                <Link id="lifeTimepl" to="/LifetimePL">Life Time P&amp;L
                                </Link>
                            </li>
                            <li><Link id="_activityLog" to="/AccActivityLog">Activity Log</Link></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Center Column --> */}
                <div className="col-center report">
                    <h2>Account Statement</h2>
                    <table id="table_log" className="table01">
                        <tbody>
                            <tr>
                                <th className="align-L">Date/Time</th>
                                <th className="align-R">Deposit From Upline</th>
                                <th className="align-R">Deposit to Downline</th>
                                <th className="align-R">WihtDraw By Upline</th>
                                <th className="align-R">WithDraw From Downline</th>
                                <th>Balance</th>
                                <th>Remark</th>
                                <th>From/To</th>
                            </tr>
                        </tbody>
                        <tbody id="statements">
                            <tr id="tempTr">
                                <td className="align-L" id="loginDate">05/05/2025 11:30:28</td>
                                <td className="green" id="loginMessage">-</td>
                                <td className="green" id="loginMessage">-</td>
                                <td id="ipAddress" className="sky-align red">1.00</td>
                                <td id="ipAddress" className="sky-align red">-</td>
                                <td id="isp" className="sky-align">2.00</td>
                                <td id="location" className="sky-align">-</td>
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
export default AccTransactionHistory2;