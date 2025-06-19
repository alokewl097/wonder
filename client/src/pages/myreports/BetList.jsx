import React from "react"; 
const BetList = () => {
    return(
        <> 
            <div className="full-wrap" style={{ height: "calc(100% - 105px)"}}>
                {/* <!-- Center Column --> */}
                <div className="over-wrap">
                    {/* <!-- Loading Wrap --> */}
                    <h2>Bet List</h2>
                    {/* <!-- function --> */}
                    <div className="function-wrap">
                        <ul className="input-list">
                            <li>
                            <label>Sport:</label>
                            <select className="form-control purp" id="sportidResult">
                                <option value="4">Cricket</option>
                                <option value="2">Tennis</option>
                                <option value="1">Soccer</option>
                            </select>
                            </li>
                            <li><label>Period</label></li>
                            <li>
                            <input id="startDate" className="cal-input" type="date" placeholder="YYYY-MM-DD" />
                            <input id="startTime" className="time-input " type="text" placeholder="09:00" maxlength="5" readonly="readonly" />
                            to
                            <input id="endDate" className="cal-input" type="date" placeholder="YYYY-MM-DD" />
                            <input id="endTime" className="time-input " type="text" placeholder="08:59" maxlength="5" readonly="readonly" />
                            </li>
                        </ul>
                        <ul className="input-list">
                            <li><a id="today" onclick="changeDate('today')" className="btn">Just For Today</a></li>
                            <li><a id="yesterday" onclick="changeDate('yesterday')" className="btn">From Yesterday</a></li>
                            <li><a id="getPL" onclick="changeDate('all')" className="btn-send">Get Matches</a></li>
                        </ul>
                        <ul className="input-list">
                            <div id="statusCondition" className="d-flex">
                            <li><label>Bet Status:</label></li>
                            <li>
                                <select name="betStatus" id="betStatus">
                                    {/* <!--  <option value="0">Unmatched</option>
                                        <option value="1">Matched</option> --> */}
                                    <option value="2">Settled</option>
                                    <option value="3">Cancelled</option>
                                    <option value="4">Voided</option>
                                </select>
                            </li>
                            </div>
                            <li><a id="getPL" onclick="betHistory()" className="btn-send">Filter Bets</a></li>
                        </ul>
                    </div>
                    {/* <!-- No Report Message --> */}
                    <div id="noReportMessage">
                        <p>Bet List enables you to review the bets you have placed. <br />Specify the time period during which
                            your bets were placed, the type of markets on which the bets were placed, and the sport.
                        </p>
                        <p>Bet List is available online for the past 30 days.</p>
                        <ul className="input-list" style={{ float: "right" }}>
                            <li><a id="getPL" onclick="resultList(true)" className="btn-send">Back</a></li>
                        </ul>
                    </div>
                    <table id="matchListTables" className="table-s">
                        <thead>
                            <tr>
                            <th width="8%" className="align-L">S.no</th>
                            <th width="8%" className="align-L">Match Name</th>
                            <th width="8%" className="align-L">Action</th>
                            </tr>
                        </thead>
                        <tbody id="matchListTable">
                            <tr>
                            <td style={{ textAlign: "left" }}>0</td>
                            <td style={{ textAlign: "left" }}>Pakistan SRL T20 v South Africa SRL T20</td>
                            <td><a onclick="betHistory('-10854239','Odds')"><button className="btn-send" style={{ float: "left", margin: "4px",width: "100px" }}>Odds Bets</button></a><a onclick="betHistory('-10854239','Book')"><button className="btn-send" style={{ float: "left",margin: "4px",width:"100px",background:"brown",color:"#fff" }}>BookMaker Bets</button></a><a onclick="betHistory('-10854239','Fancy')"><button className="btn-send" style={{ float: "left",margin: "4px",width:"100px",background:"tomato",color:"#fff" }}>Fancy Bets</button></a><a onclick="betHistory('-10854239','Fancy1')"><button className="btn-send" style={{ float: "left",margin: "4px",width:"100px",background:"teal",color:"#fff" }}>Fancy1 Bets</button></a><a onclick="betHistory('-10854239','Premium')"><button className="btn-send" style={{ float: "left",margin: "4px",width:"100px",background:"steelblue",color:"#fff" }}>Premium Bets</button></a><a onclick="betHistory('-10854239','Other')"><button className="btn-send" style={{ float: "left",margin: "4px",width:"100px",background:"sienna",color:"#fff" }}>Other Bets</button></a></td>
                            </tr>
                            <tr>
                            <td style={{ textAlign: "left" }}>1</td>
                            <td style={{ textAlign: "left" }}>Otago SRL T20 v Wellington SRL T20</td>
                            <td><a onclick="betHistory('-10854233','Odds')"><button className="btn-send" style={{ float: "left", margin: "4px",width: "100px" }}>Odds Bets</button></a><a onclick="betHistory('-10854233','Book')"><button className="btn-send" style={{ float: "left",margin: "4px",width:"100px",background:"brown",color:"#fff" }}>BookMaker Bets</button></a><a onclick="betHistory('-10854233','Fancy')"><button className="btn-send" style={{ float: "left",margin: "4px",width:"100px",background:"tomato",color:"#fff" }}>Fancy Bets</button></a><a onclick="betHistory('-10854233','Fancy1')"><button className="btn-send" style={{ float: "left",margin: "4px",width:"100px",background:"teal",color:"#fff" }}>Fancy1 Bets</button></a><a onclick="betHistory('-10854233','Premium')"><button className="btn-send" style={{ float: "left",margin: "4px",width:"100px",background:"steelblue",color:"#fff" }}>Premium Bets</button></a><a onclick="betHistory('-10854233','Other')"><button className="btn-send" style={{ float: "left",margin: "4px",width:"100px",background:"sienna",color:"#fff" }}>Other Bets</button></a></td>
                            </tr>
                        </tbody>
                    </table>
                    <table id="betsListTables" className="table-s" style={{ display: "none" }}>
                        <thead>
                            <tr>
                            <th width="8%" className="align-L">PL ID</th>
                            <th width="5%" className="align-L">Bet ID
                            </th>
                            <th id="betTime" width="6%" className="align-L">Bet placed</th>
                            <th width="7%" className="align-L">IP Address</th>
                            <th width="" className="align-L">Market
                            </th>
                            <th width="7%" className="align-L">Selection
                            </th>
                            <th width="4%" className="align-C">Type
                            </th>
                            <th width="4%">Odds req.
                            </th>
                            <th width="8%">Stake
                            </th>
                            <th width="5%">Liability
                            </th>
                            <th width="5%" name="profitOrLossTh">Profit/Loss
                            </th>
                            <th width="3%" id="currencyType_title" style={{ display: "none" }}>Currency
                            </th>
                            <th width="5%" id="site_title" style={{ display: "none" }}>Site
                            </th>
                            <th width="5%" id="onePT_title" style={{ display: "none" }}>Percentage PT</th>
                            <th width="5%" id="afterPT_title" style={{ display: "none" }}>PSB After PT</th>
                            <th width="5%" id="afterPTInEUR_title" style={{ display: "none" }}>H.PT in EURO</th>
                            </tr>
                        </thead>
                        <tbody id="betsListTable">
                            <tr id="noDataTemplate" style={{ display: "table-row" }}>
                            <td className="no-data" colspan="9">
                                <p>You have no bets in this time period.</p>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <ul id="pageNumberContent" className="pages" style={{ display: "none" }}>
                            <li id="prev"><a href="javascript:void(0);" className="disable" style={{ pointerEvents: "none" }}>Prev</a></li>
                            <li id="pageNumber"><a href="javascript:void(0);" className="select" style={{ pointerEvents: "none" }}>1</a></li>
                            <li id="next"><a href="javascript:void(0);" className="disable" style={{ pointerEvents: "none" }}>Next</a></li>
                            <input type="text" id="goToPageNumber_1" maxlength="6" size="4" /><a id="goPageBtn_1">GO</a>
                        </ul>
                    </div>
                    {/* <!-- function end--> */}
                </div>
            </div>
        </>
    );
};
export default BetList;