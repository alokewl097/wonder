import React from "react"; 
import { Link } from "react-router-dom";
const LifetimePL = () => {
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
                                <Link id="lifeTimepl" to="/LifetimePL" className="select">Life Time P&amp;L
                                </Link>
                            </li>
                            <li><Link id="_activityLog" to="/AccActivityLog">Activity Log</Link></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Center Column --> */}
                <div className="col-center report"> 
                    <div id="loading" className="loading-wrap" style={{ display: "none" }}>
                        <ul className="loading">
                            <li><img src="/assets/images/loading40.gif" /></li>
                            <li>Loading...</li>
                        </ul>
                    </div> 
                    <div id="message" className="message-wrap success">
                        <a className="btn-close">Close</a>
                        <p></p>
                    </div>
                    <h2>Balance Summary
                    </h2>
                    <div className="event-left">
                        <div className="profile-wrap">
                            <h3>About Balance</h3>
                            <dl>
                                <dt style={{ fontWeight: "bold" }}>Total Deposit</dt>
                                <dd id="userDeposit" className="green" style={{ fontWeight: "bold" }}>0.00</dd>
                                <dt style={{ fontWeight: "bold" }}>Total Withdraw</dt>
                                <dd id="userWithdraw" className="red" style={{ fontWeight: "bold" }}>-3.00</dd>
                                <dt style={{ fontWeight: "bold" }}>Balance</dt>
                                <dd id="userTotal" style={{ fontWeight: "bold" }} className="green">2</dd>
                                <dt style={{ fontWeight: "bold" }}>Final PL</dt>
                                <dd id="userpl" style={{ fontWeight: "bold" }} className="green">5.00</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default LifetimePL;