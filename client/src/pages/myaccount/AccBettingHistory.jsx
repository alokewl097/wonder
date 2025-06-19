import React from "react"; 
import { Link } from "react-router-dom";
const AccBettingHistory = () => {
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
                                <Link id="bettingHistory" to="/AccBettingHistory" className="select">Betting History</Link>
                            </li>
                            <li>
                                <Link id="profitLoss" to="/AccProfitAndLoss">Betting Profit &amp; Loss</Link>
                            </li>
                            <li>
                                <Link id="transactionHistory" to="/AccTransactionHistory">Transaction&nbsp;History</Link>
                            </li>
                            <li>
                                <Link id="transactionHistory2" to="/AccTransactionHistory2">Account&nbsp;Statement</Link>
                            </li>
                            <li>
                                <Link id="lifeTimepl" to="/LifetimePL">Life Time P&amp;L</Link>
                            </li>
                            <li><Link id="_activityLog" to="/AccActivityLog">Activity Log</Link></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Center Column --> */}
                <div className="col-center report"> 
                    <div id="loading" className="loading-wrap" style={{ display: "none"}}>
                        <ul className="loading">
                            <li><img src="/assets/images/loading40.gif" /></li>
                            <li>Loading...</li>
                        </ul>
                    </div> 
                    <div id="message" className="message-wrap success">
                        <a className="btn-close">Close</a>
                        <p></p>
                    </div>
                    <h2>Betting History</h2> 
                    <ul className="report-tab-wrap" style={{ display: "block"}}>
                        <li className="report-tab  select" onclick="setNewBets('Odds')" id="reportType_Odds">
                            Exchange
                        </li>
                        <li className="report-tab " onclick="setNewBets('Fancy')" id="reportType_Fancy">
                            FancyBet
                        </li>
                        <li className="report-tab " onclick="setNewBets('Fancy1')" id="reportType_Fancy1" data-reporttabtype="7">
                            Fancy1Bet
                        </li>
                        <li className="report-tab " onclick="setNewBets('Toss')" id="reportType_Toss" data-reporttabtype="7">
                            Toss
                        </li>
                        <li className="report-tab " onclick="setNewBets('intCasino')" id="reportType_intCasino" data-reporttabtype="7">
                            Int. Casino Bet
                        </li>
                        <li className="report-tab " onclick="setNewBets('awcCasino')" id="reportType_awcCasino" data-reporttabtype="7">
                            Awc Casino Bet
                        </li>
                        <li className="report-tab " onclick="setNewBets('virtualSports')" id="reportType_virtualSports" data-reporttabtype="2">
                            Virtual Sports
                        </li>
                        <li className="report-tab " onclick="setNewBets('BooKMaker')" id="reportType_BooKMaker" data-reporttabtype="3">
                            BookMaker
                        </li>
                        <li className="report-tab " onclick="setNewBets('Premium')" id="reportType_Premium" data-reporttabtype="5">
                            Premium
                        </li>
                        <li className="report-tab " onclick="setNewBets('Other')" id="reportType_Other" data-reporttabtype="5">
                            Other
                        </li>
                        <li className="report-tab " onclick="setNewBets('SABA')" id="reportType_SABA" data-reporttabtype="5">
                            SABA SPORTS
                        </li>
                    </ul> 
                    <div className="function-wrap">
                        <ul className="input-list">
                            <div id="statusCondition">
                                <li><label>Bet Status:</label></li>
                                <li>
                                <select name="betStatus" onchange="changeStatus()" id="betStatus">
                                    <option value="2">Settled</option>
                                    <option value="3">Cancelled</option>
                                    <option value="4">Voided</option>
                                </select>
                                </li>
                            </div>
                            <li><label>Period</label></li>
                            <li>
                                <input id="startDate" className="cal-input" type="date" placeholder="YYYY-MM-DD" />
                                <input id="startTime" className="time-input " type="text" placeholder="09:00" maxlength="5" readonly="readonly" />
                                to
                                <input id="endDate" className="cal-input" type="date" placeholder="YYYY-MM-DD" />
                                <input id="endTime" className="time-input " type="text" placeholder="08:59" maxlength="5" readonly="readonly" />
                            </li>
                            <li style={{ display: "none"}}>(TimeZone:IST)</li>
                        </ul>
                        <ul className="input-list">
                            <li><a id="today" onclick="changeDate('today')" className="btn">Just For Today</a></li>
                            <li><a id="yesterday" onclick="changeDate('yesterday')" className="btn">From Yesterday</a></li>
                            <li style={{ display: "none"}}><a id="last7days" href="#" className="btn">Last 7 days</a></li>
                            <li style={{ display: "none"}}><a id="last30days" href="#" className="btn">Last 30 days</a></li>
                            <li style={{ display: "none"}}><a id="last2months" href="#" className="btn">Last 2 Months</a></li>
                            <li style={{ display: "none"}}><a id="last3months" href="#" className="btn">Last 3 Months</a></li>
                            <li><a id="getPL" onclick="getBetHistory('all',1)" className="btn-send">Get History</a></li>
                        </ul>
                    </div> 
                    <div id="noReportMessage">
                        <p>Betting History enables you to review the bets you have placed. <br />Specify the time period during which your bets were placed, the type of markets on which the bets were placed, and the sport.</p>
                        <p>Betting History is available online for the past 30 days.</p>
                    </div> 
                    <div id="report">
                        <table id="matchTableTemplate" className="table-s" style={{ display: "none"}}>
                            <tbody>
                                <tr>
                                <th className="align-L">Bet ID
                                </th>
                                <th className="align-L">PL ID
                                </th>
                                <th className="align-L" id="siteTitle" style={{ display: "none"}}>Site
                                </th>
                                <th className="align-L">Market
                                </th>
                                <th>Selection
                                </th>
                                <th>Type
                                </th>
                                <th>Bet placed
                                </th>
                                <th>Odds req.
                                </th>
                                <th>Stake
                                </th>
                                <th>Avg. odds matched
                                </th>
                                <th>Profit/Loss
                                </th>
                                <th id="userCancelTitle" style={{ display: "none"}}>User Cancel
                                </th>
                                </tr>
                                <tr id="matchRowTemplate" style={{ display: "none"}}>
                                <td className="align-L"><a id="betID" href="javascript: void(0);"></a></td>
                                <td className="align-L" id="playerID"></td>
                                <td className="align-L" id="siteName" style={{ display: "none"}}></td>
                                <td id="matchTitle" className="align-L"></td>
                                <td id="matchSelection"></td>
                                <td><span id="matchType"></span></td>
                                <td><span id="betPlaced" className="small-date"></span></td>
                                <td id="matchOddsReq"></td>
                                <td id="matchStake"></td>
                                <td id="matchAvgOdds"></td>
                                <td><span id="pol" className="small-date"></span></td>
                                <td id="userCancel"></td>
                                </tr>
                                <tr id="expandReductionRowTemplate" className="expand" style={{ display: "none"}}>
                                <td colspan="11">
                                    <img className="expand-arrow" src="assets/images/transparent.gif" />
                                    <table id="txTableTemplate">
                                        <tbody>
                                            <tr>
                                            <th>Bet taken
                                            </th>
                                            <th width="14%">Odds req.
                                            </th>
                                            <th width="14%">Stake
                                            </th>
                                            <th width="14%">Liability
                                            </th>
                                            <th width="14%">Odds matched
                                            </th>
                                            <th width="14%">Reduction
                                            </th>
                                            <th width="14%">Actual Odds.
                                            </th>
                                            </tr>
                                            <tr id="txRowTemplate" style={{ display: "none"}}>
                                            <td><span id="betTaken" className="small-date"></span></td>
                                            <td id="txOddsReq"></td>
                                            <td id="txStake"></td>
                                            <td id="txLiability"></td>
                                            <td id="txOddsMatched"></td>
                                            <td id="reduction"></td>
                                            <td id="actualOdds"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                </tr>
                                <tr id="expandRowTemplate" className="expand" style={{ display: "none"}}>
                                <td colspan="2"></td>
                                <td colspan="9">
                                    <img className="expand-arrow" src="assets/images/transparent.gif" />
                                    <table id="txTableTemplate">
                                        <tbody>
                                            <tr>
                                            <th>Bet taken
                                            </th>
                                            <th width="16%">Odds req.
                                            </th>
                                            <th width="17%">Stake
                                            </th>
                                            <th width="24%">Liability
                                            </th>
                                            <th width="24%">Odds matched
                                            </th>
                                            </tr>
                                            <tr id="txRowTemplate" style={{ display: "none"}}>
                                            <td><span id="betTaken" className="small-date"></span></td>
                                            <td id="txOddsReq"></td>
                                            <td id="txStake"></td>
                                            <td id="txLiability"></td>
                                            <td id="txOddsMatched"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                        <table id="matchTable" className="table-s" style={{ display: "table"}}>
                            <thead>
                                <tr>
                                <th className="align-L">Bet ID
                                </th>
                                <th className="align-L">PL ID
                                </th>
                                <th className="align-L" id="siteTitle" style={{ display: "none"}}>Site
                                </th>
                                <th className="align-L">Market
                                </th>
                                <th>Selection
                                </th>
                                <th>Type
                                </th>
                                <th>Bet placed
                                </th>
                                <th>Odds req.
                                </th>
                                <th>Stake
                                </th>
                                <th>Avg. odds matched
                                </th>
                                <th>Profit/Loss
                                </th>
                                <th id="userCancelTitle" style={{ display: "none"}}>User Cancel
                                </th>
                                </tr>
                            </thead>
                            <tbody id="matchedBetsList">
                                <tr id="noDataTemplate" style={{ display: "table-row"}}>
                                <td className="no-data" colspan="9">
                                    <p>You have no bets in this time period.</p>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="table-other">
                        </p>
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
            </div>
        </>
    );
};
export default AccBettingHistory;