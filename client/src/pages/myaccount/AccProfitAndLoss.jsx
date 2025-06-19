import React from "react"; 
import { Link } from "react-router-dom";
const AccProfitAndLoss = () => {
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
                                <Link id="profitLoss" to="/AccProfitAndLoss" className="select">Betting Profit &amp; Loss</Link>
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
                    <h2>Betting Profit &amp; Loss : Main wallet</h2>
                    <ul className="acc-info">
                        <li className="user">admin
                        </li>
                    </ul>
                    <ul className="report-tab-wrap" style={{ display: "block" }}>
                        <li className="report-tab select" id="reportType_Odds">
                            Exchange
                        </li>
                        <li className="report-tab" onclick="setNewBets('Fancy')" id="reportType_Fancy">
                            FancyBet
                        </li>
                        <li className="report-tab" onclick="setNewBets('Fancy1')" id="reportType_Fancy1">
                            FancyBet1
                        </li>
                        <li className="report-tab" onclick="setNewBets('Toss')" id="reportType_Toss">
                            Toss
                        </li>
                        <li className="report-tab" onclick="setNewBets('Casino')" id="reportType_Casino">
                            Casino
                        </li>
                        <li className="report-tab" id="reportType_sportsBook" onclick="setNewBets('sportsBook')">
                            Sportsbook
                        </li>
                        <li className="report-tab" onclick="setNewBets('BooKMaker')" id="reportType_BooKMaker" data-reporttabtype="3">
                            BookMaker
                        </li>
                        <li className="report-tab" id="reportType_bPoker" onclick="setNewBets('bPoker')" data-reporttabtype="4">
                            BPoker
                        </li>
                        <li className="report-tab" id="reportType_Premium" onclick="setNewBets('Premium')" data-reporttabtype="5">
                            Premium
                        </li>
                        <li className="report-tab" id="reportType_Other" onclick="setNewBets('Other')" data-reporttabtype="5">
                            Other
                        </li>
                        <li className="report-tab" id="reportType_SABA" onclick="setNewBets('SABA')" data-reporttabtype="5">
                            SABA SPORTS
                        </li> 
                    </ul>
                    <div className="function-wrap">
                        <ul className="input-list">
                            <div id="statusCondition" style={{ display: "none" }}>
                                <li><label>Bet Status:</label></li>
                                <li>
                                <select name="betStatus" id="betStatus">
                                </select>
                                </li>
                            </div>
                            <li><label>Period</label></li>
                            <li>
                                <input id="startDate" className="cal-input" type="date" placeholder="YYYY-MM-DD" />
                                <input id="startTime" className="time-input" type="text" placeholder="09:00" maxlength="5" />
                                to
                                <input id="endDate" className="cal-input" type="date" placeholder="YYYY-MM-DD" />
                                <input id="endTime" className="time-input" type="text" placeholder="08:59" maxlength="5" readonly="readonly" />
                            </li>
                            <li style={{ display: "none" }}>(TimeZone:IST)</li>
                        </ul>
                        <ul className="input-list">
                            <li><a id="today" onclick="changeDate('today')" className="btn">Just For Today</a></li>
                            <li><a id="yesterday" onclick="changeDate('yesterday')" className="btn">From Yesterday</a></li>
                            <li style={{ display: "none" }}><a id="last7days" href="#" className="btn">Last 7 days</a></li>
                            <li style={{ display: "none" }}><a id="last30days" href="#" className="btn">Last 30 days</a></li>
                            <li style={{ display: "none" }}><a id="last2months" href="#" className="btn">Last 2 Months</a></li>
                            <li style={{ display: "none" }}><a id="last3months" href="#" className="btn">Last 3 Months</a></li>
                            <li><a id="getPL" onclick="getBetHistory('all',1)" className="btn-send">Get P &amp; L</a></li>
                        </ul>
                    </div> 
                    <div id="noReportMessage">
                        <p>Betting Profit &amp; Loss enables you to review the bets you have placed. <br />Specify the time period during which your bets were placed, the type of markets on which the bets were placed, and the sport.</p>
                        <p>Betting Profit &amp; Loss is available online for the past 30 days.</p>
                    </div>
                    <div id="report" data-report="profitAndLossReport">
                        <ul id="spotsUl" className="total-show">
                            <li id="totalPL">Total P/L: PBU <span className="plTotal red">(-1757.50)</span></li>
                            <li id="sumOfQuery" className="sports-switch">PBU <span className="plTotal red">(-1757.50)</span></li>
                            <li className="sports-switch">
                                <select name="sports" id="sports" onchange="changeSport()">
                                <option selected="selected" value="1,2,4">ALL</option>
                                <option value="1">SOCCER</option>
                                <option value="2">TENNIS</option>
                                <option value="4">CRICKET</option>
                                </select>
                            </li>
                        </ul>
                        <ul id="binaryPL" className="total-show" style={{ display: "none" }}>
                            <li id="binaryTotalPL"></li>
                        </ul>
                        <table id="reportTable" className="table01 table-pnl" style={{ display: "table" }}>
                            <thead>
                                <tr>
                                <th width="" className="align-L">Market
                                </th>
                                <th width="15%">Settled date
                                </th>
                                <th width="18%">Profit/Loss
                                </th>
                                </tr>
                            </thead>
                            <tbody id="matchedBetsList">
                                <tr id="summary0" style={{ display: "table-row" }}>
                                <td id="title" className="align-L">Soccer<img className="fromto" src="/assets/images/transparent.gif" /><strong>Ferroviaria v Botafogo SP</strong><img className="fromto" src="/assets/images/transparent.gif" />Ferroviaria v Botafogo SP</td>
                                <td id="settledDate">2025-05-30 06:05:00</td>
                                <td><a id="pl0" className="expand-close" onclick="getBets('68391cc191997ce66863846e','34350414','0')"><span className="red">(-158.97)</span></a></td>
                                </tr>
                                <tr id="expandMatched68391cc191997ce66863846e" style={{ display: "none" }} className="expand">
                                <td colspan="4">
                                    <img className="expand-arrow-R" src="/assets/images/transparent.gif" />
                                    <table className="table-commission">
                                        <tbody id="betsList68391cc191997ce66863846e"></tbody>
                                    </table>
                                </td>
                                </tr>
                                <tr id="summary0" style={{ display: "table-row" }}>
                                <td id="title" className="align-L">Soccer<img className="fromto" src="/assets/images/transparent.gif" /><strong>Fluminense v Once Caldas</strong><img className="fromto" src="/assets/images/transparent.gif" />Fluminense v Once Caldas</td>
                                <td id="settledDate">2025-05-30 06:00:00</td>
                                <td><a id="pl0" className="expand-close" onclick="getBets('68391cc191997ce66863835a','34327920','0')"><span className="green">(12.67)</span></a></td>
                                </tr>
                                <tr id="expandMatched68391cc191997ce66863835a" style={{ display: "none" }} className="expand">
                                <td colspan="4">
                                    <img className="expand-arrow-R" src="/assets/images/transparent.gif" />
                                    <table className="table-commission">
                                        <tbody id="betsList68391cc191997ce66863835a"></tbody>
                                    </table>
                                </td>
                                </tr>
                                <tr id="summary0" style={{ display: "table-row" }}>
                                <td id="title" className="align-L">Soccer<img className="fromto" src="/assets/images/transparent.gif" /><strong>Colo Colo v Atletico Bucaramanga</strong><img className="fromto" src="/assets/images/transparent.gif" />Colo Colo v Atletico Bucaramanga</td>
                                <td id="settledDate">2025-05-30 06:00:00</td>
                                <td><a id="pl0" className="expand-close" onclick="getBets('68391cc191997ce66863823e','34324161','0')"><span className="green">(46.68)</span></a></td>
                                </tr>
                                <tr id="expandMatched68391cc191997ce66863823e" style={{ display: "none" }} className="expand">
                                <td colspan="4">
                                    <img className="expand-arrow-R" src="/assets/images/transparent.gif" />
                                    <table className="table-commission">
                                        <tbody id="betsList68391cc191997ce66863823e"></tbody>
                                    </table>
                                </td>
                                </tr>
                                <tr id="summary0" style={{ display: "table-row" }}>
                                <td id="title" className="align-L">Soccer<img className="fromto" src="/assets/images/transparent.gif" /><strong>Caracas v Deportes Iquique</strong><img className="fromto" src="/assets/images/transparent.gif" />Caracas v Deportes Iquique</td>
                                <td id="settledDate">2025-05-30 06:00:00</td>
                                <td><a id="pl0" className="expand-close" onclick="getBets('68391cc091997ce6686380c4','34340384','0')"><span className="red">(-28.39)</span></a></td>
                                </tr>
                                <tr id="expandMatched68391cc091997ce6686380c4" style={{ display: "none" }} className="expand">
                                <td colspan="4">
                                    <img className="expand-arrow-R" src="/assets/images/transparent.gif" />
                                    <table className="table-commission">
                                        <tbody id="betsList68391cc091997ce6686380c4"></tbody>
                                    </table>
                                </td>
                                </tr>
                                <tr id="summary0" style={{ display: "table-row" }}>
                                <td id="title" className="align-L">Soccer<img className="fromto" src="/assets/images/transparent.gif" /><strong>Racing Club v Fortaleza EC</strong><img className="fromto" src="/assets/images/transparent.gif" />Racing Club v Fortaleza EC</td>
                                <td id="settledDate">2025-05-30 06:00:00</td>
                                <td><a id="pl0" className="expand-close" onclick="getBets('68391cc091997ce668637f02','34324149','0')"><span className="red">(-750.15)</span></a></td>
                                </tr>
                                <tr id="expandMatched68391cc091997ce668637f02" style={{ display: "none" }} className="expand">
                                <td colspan="4">
                                    <img className="expand-arrow-R" src="/assets/images/transparent.gif" />
                                    <table className="table-commission">
                                        <tbody id="betsList68391cc091997ce668637f02"></tbody>
                                    </table>
                                </td>
                                </tr>
                                <tr id="summary0" style={{ display: "table-row" }}>
                                <td id="title" className="align-L">Soccer<img className="fromto" src="/assets/images/transparent.gif" /><strong>Real Cartagena v Tigres FC Zipaquira</strong><img className="fromto" src="/assets/images/transparent.gif" />Real Cartagena v Tigres FC Zipaquira</td>
                                <td id="settledDate">2025-05-30 06:00:00</td>
                                <td><a id="pl0" className="expand-close" onclick="getBets('68391cc091997ce668637d77','34365802','0')"><span className="green">(22.50)</span></a></td>
                                </tr>
                                <tr id="expandMatched68391cc091997ce668637d77" style={{ display: "none" }} className="expand">
                                <td colspan="4">
                                    <img className="expand-arrow-R" src="/assets/images/transparent.gif" />
                                    <table className="table-commission">
                                        <tbody id="betsList68391cc091997ce668637d77"></tbody>
                                    </table>
                                </td>
                                </tr>
                                <tr id="summary0" style={{ display: "table-row" }}>
                                <td id="title" className="align-L">Soccer<img className="fromto" src="/assets/images/transparent.gif" /><strong>Union Espanola v CD Gualberto Villarroel</strong><img className="fromto" src="/assets/images/transparent.gif" />Union Espanola v CD Gualberto Villarroel</td>
                                <td id="settledDate">2025-05-30 06:00:00</td>
                                <td><a id="pl0" className="expand-close" onclick="getBets('68391cc091997ce668637cbe','34338891','0')"><span className="green">(10.41)</span></a></td>
                                </tr>
                                <tr id="expandMatched68391cc091997ce668637cbe" style={{ display: "none" }} className="expand">
                                <td colspan="4">
                                    <img className="expand-arrow-R" src="/assets/images/transparent.gif" />
                                    <table className="table-commission">
                                        <tbody id="betsList68391cc091997ce668637cbe"></tbody>
                                    </table>
                                </td>
                                </tr>
                                <tr id="summary0" style={{ display: "table-row" }}>
                                <td id="title" className="align-L">Soccer<img className="fromto" src="/assets/images/transparent.gif" /><strong>Atletico MG v Cienciano</strong><img className="fromto" src="/assets/images/transparent.gif" />Atletico MG v Cienciano</td>
                                <td id="settledDate">2025-05-30 06:00:00</td>
                                <td><a id="pl0" className="expand-close" onclick="getBets('68391cbf91997ce66863791c','34329010','0')"><span className="red">(-1268.48)</span></a></td>
                                </tr>
                                <tr id="expandMatched68391cbf91997ce66863791c" style={{ display: "none" }} className="expand">
                                <td colspan="4">
                                    <img className="expand-arrow-R" src="/assets/images/transparent.gif" />
                                    <table className="table-commission">
                                        <tbody id="betsList68391cbf91997ce66863791c"></tbody>
                                    </table>
                                </td>
                                </tr>
                                <tr id="summary0" style={{ display: "table-row" }}>
                                <td id="title" className="align-L">Soccer<img className="fromto" src="/assets/images/transparent.gif" /><strong>Chacaritas SC v Cumbaya FC</strong><img className="fromto" src="/assets/images/transparent.gif" />Chacaritas SC v Cumbaya FC</td>
                                <td id="settledDate">2025-05-30 05:30:00</td>
                                <td><a id="pl0" className="expand-close" onclick="getBets('683915b791997ce66860bffe','34360932','0')"><span className="red">(-103.18)</span></a></td>
                                </tr>
                                <tr id="expandMatched683915b791997ce66860bffe" style={{ display: "none" }} className="expand">
                                <td colspan="4">
                                    <img className="expand-arrow-R" src="/assets/images/transparent.gif" />
                                    <table className="table-commission">
                                        <tbody id="betsList683915b791997ce66860bffe"></tbody>
                                    </table>
                                </td>
                                </tr>
                                <tr id="summary0" style={{ display: "table-row" }}>
                                <td id="title" className="align-L">Soccer<img className="fromto" src="/assets/images/transparent.gif" /><strong>Gremio v Sportivo Luqueno</strong><img className="fromto" src="/assets/images/transparent.gif" />Gremio v Sportivo Luqueno</td>
                                <td id="settledDate">2025-05-30 03:30:00</td>
                                <td><a id="pl0" className="expand-close" onclick="getBets('6838f99891997ce66852939e','34327917','0')"><span className="green">(6.06)</span></a></td>
                                </tr>
                                <tr id="expandMatched6838f99891997ce66852939e" style={{ display: "none" }} className="expand">
                                <td colspan="4">
                                    <img className="expand-arrow-R" src="/assets/images/transparent.gif" />
                                    <table className="table-commission">
                                        <tbody id="betsList6838f99891997ce66852939e"></tbody>
                                    </table>
                                </td>
                                </tr>
                                <tr id="summary0" style={{ display: "table-row" }}>
                                <td id="title" className="align-L">Soccer<img className="fromto" src="/assets/images/transparent.gif" /><strong>Olimpia v San Antonio FC</strong><img className="fromto" src="/assets/images/transparent.gif" />Olimpia v San Antonio FC</td>
                                <td id="settledDate">2025-05-30 03:30:00</td>
                                <td><a id="pl0" className="expand-close" onclick="getBets('6838f99891997ce668529257','34327514','0')"><span className="green">(86.00)</span></a></td>
                                </tr>
                                <tr id="expandMatched6838f99891997ce668529257" style={{ display: "none" }} className="expand">
                                <td colspan="4">
                                    <img className="expand-arrow-R" src="/assets/images/transparent.gif" />
                                    <table className="table-commission">
                                        <tbody id="betsList6838f99891997ce668529257"></tbody>
                                    </table>
                                </td>
                                </tr>
                                <tr id="summary0" style={{ display: "table-row" }}>
                                <td id="title" className="align-L">Soccer<img className="fromto" src="/assets/images/transparent.gif" /><strong>Godoy Cruz v Atletico Grau</strong><img className="fromto" src="/assets/images/transparent.gif" />Godoy Cruz v Atletico Grau</td>
                                <td id="settledDate">2025-05-30 03:30:00</td>
                                <td><a id="pl0" className="expand-close" onclick="getBets('6838f99791997ce668528fdc','34327915','0')"><span className="red">(-19.64)</span></a></td>
                                </tr>
                                <tr id="expandMatched6838f99791997ce668528fdc" style={{ display: "none" }} className="expand">
                                <td colspan="4">
                                    <img className="expand-arrow-R" src="/assets/images/transparent.gif" />
                                    <table className="table-commission">
                                        <tbody id="betsList6838f99791997ce668528fdc"></tbody>
                                    </table>
                                </td>
                                </tr>
                                <tr id="summary0" style={{ display: "table-row" }}>
                                <td id="title" className="align-L">Soccer<img className="fromto" src="/assets/images/transparent.gif" /><strong>Penarol v Velez Sarsfield</strong><img className="fromto" src="/assets/images/transparent.gif" />Penarol v Velez Sarsfield</td>
                                <td id="settledDate">2025-05-30 03:30:00</td>
                                <td><a id="pl0" className="expand-close" onclick="getBets('6838f4e791997ce66850b1a7','34323298','0')"><span className="red">(-58.14)</span></a></td>
                                </tr>
                                <tr id="expandMatched6838f4e791997ce66850b1a7" style={{ display: "none" }} className="expand">
                                <td colspan="4">
                                    <img className="expand-arrow-R" src="/assets/images/transparent.gif" />
                                    <table className="table-commission">
                                        <tbody id="betsList6838f4e791997ce66850b1a7"></tbody>
                                    </table>
                                </td>
                                </tr>
                                <tr id="summary0" style={{ display: "table-row" }}>
                                <td id="title" className="align-L">Tennis<img className="fromto" src="/assets/images/transparent.gif" /><strong>P Kypson v Zink</strong><img className="fromto" src="/assets/images/transparent.gif" />P Kypson v Zink</td>
                                <td id="settledDate">2025-05-30 03:30:00</td>
                                <td><a id="pl0" className="expand-close" onclick="getBets('6838f28f91997ce6684fdceb','34368373','0')"><span className="green">(7.32)</span></a></td>
                                </tr>
                                <tr id="expandMatched6838f28f91997ce6684fdceb" style={{ display: "none" }} className="expand">
                                <td colspan="4">
                                    <img className="expand-arrow-R" src="/assets/images/transparent.gif" />
                                    <table className="table-commission">
                                        <tbody id="betsList6838f28f91997ce6684fdceb"></tbody>
                                    </table>
                                </td>
                                </tr>
                                <tr id="summary0" style={{ display: "table-row" }}>
                                <td id="title" className="align-L">Soccer<img className="fromto" src="/assets/images/transparent.gif" /><strong>Honduras (W) v Dominican Republic (W)</strong><img className="fromto" src="/assets/images/transparent.gif" />Honduras (W) v Dominican Republic (W)</td>
                                <td id="settledDate">2025-05-30 02:30:00</td>
                                <td><a id="pl0" className="expand-close" onclick="getBets('6838eddf91997ce6684d8061','34365892','0')"><span className="red">(-44.97)</span></a></td>
                                </tr>
                                <tr id="expandMatched6838eddf91997ce6684d8061" style={{ display: "none" }} className="expand">
                                <td colspan="4">
                                    <img className="expand-arrow-R" src="/assets/images/transparent.gif" />
                                    <table className="table-commission">
                                        <tbody id="betsList6838eddf91997ce6684d8061"></tbody>
                                    </table>
                                </td>
                                </tr>
                                <tr id="summary0" style={{ display: "table-row" }}>
                                <td id="title" className="align-L">Soccer<img className="fromto" src="/assets/images/transparent.gif" /><strong>Sao Paulo U20 v Internacional U20</strong><img className="fromto" src="/assets/images/transparent.gif" />Sao Paulo U20 v Internacional U20</td>
                                <td id="settledDate">2025-05-30 02:30:00</td>
                                <td><a id="pl0" className="expand-close" onclick="getBets('6838e93091997ce6684b8074','34366089','0')"><span className="green">(167.86)</span></a></td>
                                </tr>
                                <tr id="expandMatched6838e93091997ce6684b8074" style={{ display: "none" }} className="expand">
                                <td colspan="4">
                                    <img className="expand-arrow-R" src="/assets/images/transparent.gif" />
                                    <table className="table-commission">
                                        <tbody id="betsList6838e93091997ce6684b8074"></tbody>
                                    </table>
                                </td>
                                </tr>
                                <tr id="summary0" style={{ display: "table-row" }}>
                                <td id="title" className="align-L">Tennis<img className="fromto" src="/assets/images/transparent.gif" /><strong>Ri Noguchi v Jubb</strong><img className="fromto" src="/assets/images/transparent.gif" />Ri Noguchi v Jubb</td>
                                <td id="settledDate">2025-05-30 02:20:00</td>
                                <td><a id="pl0" className="expand-close" onclick="getBets('6838e47f91997ce66848ffa0','34367997','0')"><span className="green">(19.72)</span></a></td>
                                </tr>
                                <tr id="expandMatched6838e47f91997ce66848ffa0" style={{ display: "none" }} className="expand">
                                <td colspan="4">
                                    <img className="expand-arrow-R" src="/assets/images/transparent.gif" />
                                    <table className="table-commission">
                                        <tbody id="betsList6838e47f91997ce66848ffa0"></tbody>
                                    </table>
                                </td>
                                </tr>
                                <tr id="summary0" style={{ display: "table-row" }}>
                                <td id="title" className="align-L">Tennis<img className="fromto" src="/assets/images/transparent.gif" /><strong>Pa Maloney v Draxl</strong><img className="fromto" src="/assets/images/transparent.gif" />Pa Maloney v Draxl</td>
                                <td id="settledDate">2025-05-30 00:45:00</td>
                                <td><a id="pl0" className="expand-close" onclick="getBets('6838cd1091997ce668380251','34368507','0')"><span className="green">(9.50)</span></a></td>
                                </tr>
                                <tr id="expandMatched6838cd1091997ce668380251" style={{ display: "none" }} className="expand">
                                <td colspan="4">
                                    <img className="expand-arrow-R" src="/assets/images/transparent.gif" />
                                    <table className="table-commission">
                                        <tbody id="betsList6838cd1091997ce668380251"></tbody>
                                    </table>
                                </td>
                                </tr>
                                <tr id="summary0" style={{ display: "table-row" }}>
                                <td id="title" className="align-L">Tennis<img className="fromto" src="/assets/images/transparent.gif" /><strong>Ke Miyoshi v Dani Milavsky</strong><img className="fromto" src="/assets/images/transparent.gif" />Ke Miyoshi v Dani Milavsky</td>
                                <td id="settledDate">2025-05-30 00:45:00</td>
                                <td><a id="pl0" className="expand-close" onclick="getBets('6838cab891997ce6683526b2','34368307','0')"><span className="green">(6.29)</span></a></td>
                                </tr>
                                <tr id="expandMatched6838cab891997ce6683526b2" style={{ display: "none" }} className="expand">
                                <td colspan="4">
                                    <img className="expand-arrow-R" src="/assets/images/transparent.gif" />
                                    <table className="table-commission">
                                        <tbody id="betsList6838cab891997ce6683526b2"></tbody>
                                    </table>
                                </td>
                                </tr>
                                <tr id="summary0" style={{ display: "table-row" }}>
                                <td id="title" className="align-L">Soccer<img className="fromto" src="/assets/images/transparent.gif" /><strong>Wisla Krakow v Miedz Legnica</strong><img className="fromto" src="/assets/images/transparent.gif" />Wisla Krakow v Miedz Legnica</td>
                                <td id="settledDate">2025-05-30 00:30:00</td>
                                <td><a id="pl0" className="expand-close" onclick="getBets('6838ce3991997ce66839622c','34362426','0')"><span className="green">(147.64)</span></a></td>
                                </tr>
                                <tr id="expandMatched6838ce3991997ce66839622c" style={{ display: "none" }} className="expand">
                                <td colspan="4">
                                    <img className="expand-arrow-R" src="/assets/images/transparent.gif" />
                                    <table className="table-commission">
                                        <tbody id="betsList6838ce3991997ce66839622c"></tbody>
                                    </table>
                                </td>
                                </tr>
                                <tr id="summary0" style={{ display: "table-row" }}>
                                <td id="title" className="align-L">Tennis<img className="fromto" src="/assets/images/transparent.gif" /><strong>D Kasatkina v Le Jeanjean</strong><img className="fromto" src="/assets/images/transparent.gif" />D Kasatkina v Le Jeanjean</td>
                                <td id="settledDate">2025-05-30 00:28:00</td>
                                <td><a id="pl0" className="expand-close" onclick="getBets('6838cd1091997ce66837ff94','34361305','0')"><span className="green">(131.77)</span></a></td>
                                </tr>
                                <tr id="expandMatched6838cd1091997ce66837ff94" style={{ display: "none" }} className="expand">
                                <td colspan="4">
                                    <img className="expand-arrow-R" src="/assets/images/transparent.gif" />
                                    <table className="table-commission">
                                        <tbody id="betsList6838cd1091997ce66837ff94"></tbody>
                                    </table>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="table-other">Profit and Loss is shown net of commission.
                        </p>
                    </div>
                    <div>
                        <ul id="pageNumberContent" className="pages">
                            <li id="prev"><a href="javascript:void(0);" className="disable" style={{ pointerEvents: "none" }}>Prev</a></li>
                            <li id="pageNumber"><a href="javascript:void(0);" className="select" style={{ pointerEvents: "none" }}>1</a></li>
                            <li id="next"><a href="javascript:void(0);" className="disable" style={{ pointerEvents: "none" }}>Next</a></li>
                            <input type="text" id="goToPageNumber_1" maxlength="6" size="4" /><a id="goPageBtn_1">GO</a>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AccProfitAndLoss;