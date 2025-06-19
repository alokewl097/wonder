import React from "react"; 
const BetListLive = () => {
    return(
        <> 
            <div className="full-wrap" style={{ height: "calc(100% - 105px)"}}>
                {/* <!-- Center Column --> */}
                <div className="over-wrap">
                    {/* <!-- Loading Wrap --> */}
                    <div id="loading" className="loading-wrap" style={{ display: "none" }}>
                        <ul className="loading">
                            <li><img src="/assets/images/loading40.gif" /></li>
                            <li>Loading...</li>
                        </ul>
                    </div>
                    {/* <!-- Message --> */}
                    <h2>Bet List Live
                    </h2>
                    <div id="limitCondition" className="function-wrap">
                        <ul className="input-list">
                            <li id="eventRadioBtnList">
                            <input type="radio" name="events" id="events_1" data-eventtype="1" value="1" />
                            Soccer
                            {/* <!-- <input type="radio" name="events" id="SOCCER_sportsbook" data-eventtype="1" value="true">
                                S/R Soccer 
                                <input type="radio" name="events" id="SOCCER_ow" data-eventtype="1" value="true">
                                S/B Soccer --> */}
                            {/* <!-- <input type="radio" name="events" id="SOCCER_BOOK" data-eventtype="1" data-categorytype="5">
                                BOOK Soccer --> */}
                            <input type="radio" name="events" id="events_2" data-eventtype="2" value="2" />
                            Tennis
                            {/* <!--  <input type="radio" name="events" id="TENNIS_sportsbook" data-eventtype="2" value="true">
                                S/R Tennis
                                <input type="radio" name="events" id="TENNIS_BOOK" data-eventtype="2" data-categorytype="5">
                                BOOK Tennis --> */}
                            <input type="radio" name="events" checked="" id="events_4" data-eventtype="4" value="4" />
                            Cricket
                            <input type="radio" name="events" id="CRICKET_fancy" data-eventtype="4" data-categorytype="2" value="Fancy" />
                            Cricket/Fancy Bet
                            <input type="radio" name="events" id="CRICKET_fancy" data-eventtype="4" data-categorytype="2" value="Fancy1" />
                            Cricket/Fancy1 Bet
                            {/* <!--  <input type="radio" name="events" id="CRICKET_sportsbook" data-eventtype="4"
                                value="true">
                                S/R Cricket --> */}
                            <input type="radio" name="events" id="CRICKET_BOOK" value="Book" data-eventtype="4" data-categorytype="5" />
                            BOOK Cricket
                            <input type="radio" name="events" id="TOSS" data-eventtype="9999999" data-categorytype="2" value="TOSS" />
                            Toss
                            <input type="radio" name="events" id="IntCasino" data-eventtype="9999999" data-categorytype="2" value="IntCasino" />
                            Int. Casino
                            <input type="radio" name="events" id="AwcCasino" data-eventtype="9999999" data-categorytype="2" value="AwcCasino" />
                            AWC Casino
                            <input type="radio" name="events" id="virtual" data-eventtype="9999999" data-categorytype="2" value="virtual" />
                            Virtual Sports
                            <input type="radio" name="events" id="Premium" value="Premium" data-categorytype="6" />Premium Fancy
                            <input type="radio" name="events" id="OtherC" value="OtherC" data-categorytype="6" />Other Cricket
                            <input type="radio" name="events" id="OtherS" value="OtherS" data-categorytype="6" />Other Soccer
                            <input type="radio" name="events" id="SABA" value="SABA" data-categorytype="6" />SABA SPORTS
                            </li>
                        </ul>
                        <ul className="input-list">
                            <li>
                            <label>Order of display:</label>
                            <select name="sortCondition" id="sortCondition">
                                <option value="stake" selected="">
                                    Stake
                                </option>
                                <option value="userid">
                                    Player ID
                                </option>
                                <option value="createdOn">
                                    Time
                                </option>
                            </select>
                            <label> of </label>
                            <select name="orderByClause" id="orderByClause">
                                <option value="asc" selected="">Ascending</option>
                                <option value="desc">Descending</option>
                            </select>
                            </li>
                            <li>&nbsp;&nbsp;</li>
                            <li>
                            <label>Last:</label>
                            <select name="limit" id="limit">
                                <option value="100">100 Txn</option>
                                <option value="50">50 Txn</option>
                                <option value="25" selected="">25 Txn</option>
                            </select>
                            </li>
                            <li>&nbsp;&nbsp;</li>
                            <li>
                            <label>Auto Refresh (Seconds)</label>
                            <select name="refreshTime" id="refreshTime">
                                <option value="stop">Stop</option>
                                <option value="60">60</option>
                                <option value="30">30</option>
                                <option value="15" selected="">15</option>
                                <option value="5">5</option>
                                <option value="2">2</option>
                            </select>
                            </li>
                            <li>&nbsp;&nbsp;</li>
                            <li>
                            <label>Bet Status:</label>
                            <select name="betStatus" id="betStatus">
                                <option value="all">All</option>
                                {/* <!--   <option value="0">Unmatched</option>
                                    <option value="1">Matched</option> --> */}
                            </select>
                            </li>
                            <li>&nbsp;&nbsp;</li>
                            <li><a style={{ width: "60px"}} href="#" className="btn-send" onclick="changeDate('all')" id="betListLiveRefresh">Refresh</a></li>
                        </ul>
                    </div>
                    <table id="unMatchTable" className="table-s" style={{ display: "table" }}>
                        <caption id="unMatchedTitle" className="betlistlive-top">UnMatched</caption>
                        <tbody>
                            <tr className="no-data">
                            <td>You have no bets in this time period.</td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <!--   <table id="pendingTable" className="table-s" style={{ display: "table" }}>
                        <caption id="pendingTitle" className="betlistlive-top">Pending</caption>
                        <tbody>
                            <tr className="no-data">
                                <td>You have no bets in this time period.</td>
                            </tr>
                        </tbody>
                        </table> --> */}
                    <table id="matchTable" className="table-s" style={{ display: "table" }}>
                        <caption id="matchedTitle" className="betlistlive-top">Matched</caption>
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
                            </tr>
                        </thead>
                        <tbody id="matchedBetsList">
                            <tr id="matchRow0" style={{ display: "table-row" }}>
                            <td id="playerId" className="align-L">krisna928</td>
                            <td className="align-L"><a id="betID" href="javascript: void(0);">1748809008</a></td>
                            <td className="align-L"><span id="betPlaced" className="small-date">Mon Jun 02 01:46:41 IST 2025</span></td>
                            <td id="ip" className="align-L">103.65.135.129</td>
                            <td id="matchTitle" className="align-L">Cricket<img className="fromto" src="/assets/images/transparent.gif" /><strong>England W v West Indies W</strong><img className="fromto" src="/assets/images/transparent.gif" />Match odds</td>
                            <td id="matchSelection" className="align-L">England W</td>
                            <td className="align-C"><span id="matchType" className="back">Lay</span></td>
                            <td id="matchOddsReq">0.09</td>
                            <td id="matchStake">1</td>
                            <td id="liability">0.09</td>
                            </tr>
                            <tr id="expandMatched1748809008" style={{ display: "none" }} className="expand">
                            <td colspan="2"></td>
                            <td colspan="9">
                                <img className="expand-arrow" src="/assets/images/transparent.gif" />
                                <table id="txTable0">
                                    <tbody>
                                        <tr>
                                        <th>Bet taken</th>
                                        <th width="16%">Odds req.</th>
                                        <th width="17%">Stake</th>
                                        <th width="24%">Liability</th>
                                        <th width="24%">Odds matched</th>
                                        </tr>
                                        <tr id="txRowTemplate" style={{ display: "none" }}>
                                        <td><span id="betTaken" className="small-date"></span></td>
                                        <td id="txOddsReq"></td>
                                        <td id="txStake"></td>
                                        <td id="txLiability"></td>
                                        <td id="txOddsMatched"></td>
                                        </tr>
                                        <tr id="txRow0" style={{ display: "table-row" }} className="even">
                                        <td><span id="betTaken" className="small-date">Mon Jun 02 01:46:48 IST 2025</span></td>
                                        <td id="txOddsReq">0.09</td>
                                        <td id="txStake">1</td>
                                        <td id="txLiability">-</td>
                                        <td id="txOddsMatched">0.09</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            </tr>
                            <tr id="matchRow0" style={{ display: "table-row" }}>
                            <td id="playerId" className="align-L">imran8623</td>
                            <td className="align-L"><a id="betID" href="javascript: void(0);">1748828425</a></td>
                            <td className="align-L"><span id="betPlaced" className="small-date">Mon Jun 02 07:10:18 IST 2025</span></td>
                            <td id="ip" className="align-L">116.58.200.237</td>
                            <td id="matchTitle" className="align-L">Cricket<img className="fromto" src="/assets/images/transparent.gif" /><strong>England W v West Indies W</strong><img className="fromto" src="/assets/images/transparent.gif" />Match odds</td>
                            <td id="matchSelection" className="align-L">England W</td>
                            <td className="align-C"><span id="matchType" className="back">Lay</span></td>
                            <td id="matchOddsReq">0.1</td>
                            <td id="matchStake">1</td>
                            <td id="liability">0.1</td>
                            </tr>
                            <tr id="expandMatched1748828425" style={{ display: "none" }} className="expand">
                            <td colspan="2"></td>
                            <td colspan="9">
                                <img className="expand-arrow" src="/assets//images/transparent.gif" />
                                <table id="txTable0">
                                    <tbody>
                                        <tr>
                                        <th>Bet taken</th>
                                        <th width="16%">Odds req.</th>
                                        <th width="17%">Stake</th>
                                        <th width="24%">Liability</th>
                                        <th width="24%">Odds matched</th>
                                        </tr>
                                        <tr id="txRowTemplate" style={{ display: "none" }}>
                                        <td><span id="betTaken" className="small-date"></span></td>
                                        <td id="txOddsReq"></td>
                                        <td id="txStake"></td>
                                        <td id="txLiability"></td>
                                        <td id="txOddsMatched"></td>
                                        </tr>
                                        <tr id="txRow0" style={{ display: "table-row" }} className="even">
                                        <td><span id="betTaken" className="small-date">Mon Jun 02 07:10:25 IST 2025</span></td>
                                        <td id="txOddsReq">0.1</td>
                                        <td id="txStake">1</td>
                                        <td id="txLiability">-</td>
                                        <td id="txOddsMatched">0.1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            </tr> 
                        </tbody>
                    </table>
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
export default BetListLive;