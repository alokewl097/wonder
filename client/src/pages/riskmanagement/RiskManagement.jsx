import React from "react";  
import { Link } from "react-router-dom";
const RiskManagement = () => {
     return( 
        <> 
            <div className="main_wrap">
                <div className="total_all">
                    <h2>Risk Management Summary
                    </h2>
                    <a className="btn_replay" href="" id="refresh_Top_Racing"><i className="fas fa-redo-alt"></i></a>
                </div>
                <div className="play_race-wrap">
                    <div className="function-wrap">
                        <ul className="input-list">
                            <li><a id="cricket" onclick="changeSports(4)" className="btn-send">Cricket</a></li>
                            <li><a id="tennis" onclick="changeSports(2)" className="btn">Tennis</a></li>
                            <li><a id="soccer" onclick="changeSports(1)" className="btn">Soccer</a></li>
                            <li><a id="all" onclick="changeSports(0)" className="btn">All</a></li>
                            <li id="AcasRisk"><Link to="/CasinoRiskManagement" className="btn">Cas. Risk Mgmt</Link></li>
                        </ul>
                    </div>
                    <div className="top_player-wrap">
                        <h3>
                            <ul className="tab-topplay d-flex">
                            <li id="top10totalFancyStake" className="top10 select"><a onclick="getTopTenClients('totalFancyStake')">Top 20 Matched Amount Player</a></li>
                            <li id="top10liability" className="top10"><a onclick="getTopTenClients('liability')">Top 20 Exposure Player</a></li>
                            </ul>
                        </h3>
                        <div className="d-flex">
                            <div className="col-2">
                            <ul className="slip-head">
                                <li className="col-playID">UID</li>
                                <li className="col-exp">Exposure</li>
                                <li className="col-amount sort-this">Matched Amount</li>
                            </ul>
                            <table className="table01">
                                <tbody id="content_top_1_5">
                                    <tr id="tempTr_top">
                                        <td className="align-L"><span className="order" id="number">1</span><a onclick="openBetHistory('sun609')" id="userId">sun609</a></td>
                                        <td id="exposure"><span className="red">(1770.00)</span></td>
                                        <td id="amount">3541.00</td>
                                    </tr>
                                    <tr id="tempTr_top">
                                        <td className="align-L"><span className="order" id="number">2</span><a onclick="openBetHistory('jack10')" id="userId">jack10</a></td>
                                        <td id="exposure"><span className="red">(2000.00)</span></td>
                                        <td id="amount">2000.00</td>
                                    </tr>
                                    <tr id="tempTr_top">
                                        <td className="align-L"><span className="order" id="number">3</span><a onclick="openBetHistory('rahman852')" id="userId">rahman852</a></td>
                                        <td id="exposure"><span className="red">(298.00)</span></td>
                                        <td id="amount">1750.00</td>
                                    </tr>
                                    <tr id="tempTr_top">
                                        <td className="align-L"><span className="order" id="number">4</span><a onclick="openBetHistory('badboy59')" id="userId">badboy59</a></td>
                                        <td id="exposure"><span className="red">(485.00)</span></td>
                                        <td id="amount">1500.00</td>
                                    </tr>
                                    <tr id="tempTr_top">
                                        <td className="align-L"><span className="order" id="number">5</span><a onclick="openBetHistory('lucky718')" id="userId">lucky718</a></td>
                                        <td id="exposure"><span className="red">(1408.00)</span></td>
                                        <td id="amount">1408.00</td>
                                    </tr>
                                    <tr id="tempTr_top">
                                        <td className="align-L"><span className="order" id="number">6</span><a onclick="openBetHistory('mahmud8877')" id="userId">mahmud8877</a></td>
                                        <td id="exposure"><span className="red">(1305.00)</span></td>
                                        <td id="amount">1305.00</td>
                                    </tr>
                                    <tr id="tempTr_top">
                                        <td className="align-L"><span className="order" id="number">7</span><a onclick="openBetHistory('manik488')" id="userId">manik488</a></td>
                                        <td id="exposure"><span className="red">(1200.00)</span></td>
                                        <td id="amount">1200.00</td>
                                    </tr>
                                    <tr id="tempTr_top">
                                        <td className="align-L"><span className="order" id="number">8</span><a onclick="openBetHistory('rabbi4831')" id="userId">rabbi4831</a></td>
                                        <td id="exposure"><span className="red">(308.00)</span></td>
                                        <td id="amount">1116.00</td>
                                    </tr>
                                    <tr id="tempTr_top">
                                        <td className="align-L"><span className="order" id="number">9</span><a onclick="openBetHistory('tayef97')" id="userId">tayef97</a></td>
                                        <td id="exposure"><span className="red">(256.00)</span></td>
                                        <td id="amount">1080.00</td>
                                    </tr>
                                    <tr id="tempTr_top">
                                        <td className="align-L"><span className="order" id="number">10</span><a onclick="openBetHistory('tamim48')" id="userId">tamim48</a></td>
                                        <td id="exposure"><span className="red">(0.00)</span></td>
                                        <td id="amount">1059.00</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                            <div className="col-2">
                            <ul className="slip-head">
                                <li className="col-playID">UID</li>
                                <li className="col-exp">Exposure</li>
                                <li className="col-amount sort-this">Matched Amount</li>
                            </ul>
                            <table className="table01">
                                <tbody id="content_top_6_10">
                                    <tr id="tempTr_top">
                                        <td className="align-L"><span className="order" id="number">11</span><a onclick="openBetHistory('jahangir500')" id="userId">jahangir500</a></td>
                                        <td id="exposure"><span className="red">(1000.00)</span></td>
                                        <td id="amount">1000.00</td>
                                    </tr>
                                    <tr id="tempTr_top">
                                        <td className="align-L"><span className="order" id="number">12</span><a onclick="openBetHistory('shl34')" id="userId">shl34</a></td>
                                        <td id="exposure"><span className="red">(39.00)</span></td>
                                        <td id="amount">963.00</td>
                                    </tr>
                                    <tr id="tempTr_top">
                                        <td className="align-L"><span className="order" id="number">13</span><a onclick="openBetHistory('nobe5050')" id="userId">nobe5050</a></td>
                                        <td id="exposure"><span className="red">(430.00)</span></td>
                                        <td id="amount">890.00</td>
                                    </tr>
                                    <tr id="tempTr_top">
                                        <td className="align-L"><span className="order" id="number">14</span><a onclick="openBetHistory('hasan90')" id="userId">hasan90</a></td>
                                        <td id="exposure"><span className="red">(50.00)</span></td>
                                        <td id="amount">850.00</td>
                                    </tr>
                                    <tr id="tempTr_top">
                                        <td className="align-L"><span className="order" id="number">15</span><a onclick="openBetHistory('rakib4206')" id="userId">rakib4206</a></td>
                                        <td id="exposure"><span className="red">(700.00)</span></td>
                                        <td id="amount">700.00</td>
                                    </tr>
                                    <tr id="tempTr_top">
                                        <td className="align-L"><span className="order" id="number">16</span><a onclick="openBetHistory('mahir8180')" id="userId">mahir8180</a></td>
                                        <td id="exposure"><span className="red">(630.00)</span></td>
                                        <td id="amount">630.00</td>
                                    </tr>
                                    <tr id="tempTr_top">
                                        <td className="align-L"><span className="order" id="number">17</span><a onclick="openBetHistory('anik71')" id="userId">anik71</a></td>
                                        <td id="exposure"><span className="red">(0.00)</span></td>
                                        <td id="amount">622.00</td>
                                    </tr>
                                    <tr id="tempTr_top">
                                        <td className="align-L"><span className="order" id="number">18</span><a onclick="openBetHistory('sajib8070')" id="userId">sajib8070</a></td>
                                        <td id="exposure"><span className="red">(615.00)</span></td>
                                        <td id="amount">615.00</td>
                                    </tr>
                                    <tr id="tempTr_top">
                                        <td className="align-L"><span className="order" id="number">19</span><a onclick="openBetHistory('khan563k')" id="userId">khan563k</a></td>
                                        <td id="exposure"><span className="red">(600.00)</span></td>
                                        <td id="amount">600.00</td>
                                    </tr>
                                    <tr id="tempTr_top">
                                        <td className="align-L"><span className="order" id="number">20</span><a onclick="openBetHistory('som66')" id="userId">som66</a></td>
                                        <td id="exposure"><span className="red">(600.00)</span></td>
                                        <td id="amount">600.00</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="match-wrap">
                    <div className="total_all">
                        <h2>Match Odds</h2>
                        <a className="btn_replay" onclick="getRiskManagement()" id="refresh_Match_Odds"><i className="fas fa-redo-alt"></i></a>
                    </div>
                    <table className="table01 risk_matchodd">
                        <tbody>
                            <tr>
                            <th width="10%" className="align-L" rowspan="2">Sports</th>
                            <th width="7%" className="align-L" rowspan="2">Market Date</th>
                            <th className="align-L" rowspan="2">Event/Market Name</th>
                            <th width="21%" className="align-C border-l bg-yellow" colspan="3">Player P/L</th>
                            <th width="6%" className="align-C border-l" rowspan="2">Downline P/L</th>
                            </tr>
                            <tr>
                            <th width="7%" className="border-l bg-yellow sky-align">1</th>
                            <th width="7%" className="bg-yellow sky-align">X</th>
                            <th width="7%" className="bg-yellow sky-align">2</th>
                            </tr>
                        </tbody>
                        <tbody id="matchOddsListTest">
                            <tr id="tempTr_noData_MATCH_ODDS_DRAW">
                            <td className="no-data" colspan="7">
                                <p>No Data</p>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table01 risk_matchodd">
                        <tbody>
                            <tr>
                            <th width="10%" className="align-L" rowspan="2">Sports</th>
                            <th width="8%" className="align-L" rowspan="2">Market Date</th>
                            <th className="align-L" rowspan="2">Event/Market Name</th>
                            <th width="18%" className="align-C border-l bg-yellow" colspan="2">Player P/L</th>
                            <th width="6%" className="align-C border-l" rowspan="2">Downline P/L</th>
                            </tr>
                            <tr>
                            <th width="9%" className="border-l bg-yellow sky-align">1</th>
                            <th width="9%" className="bg-yellow sky-align">2</th>
                            </tr>
                        </tbody>
                        <tbody id="matchOddsListone"> 
                            <tr id="tempTr_MATCH_ODDS_DRAW" className="border-t">
                            <td className="align-L dropSport dropSport34377723odds" rowspan="1"  id="0_1"><a id="eventType" onclick="window.open('/AriskEventSelectionMatchAmount/sports/4/Odds','pagename','resizable,height=600,width=550'); return false;">Cricket</a></td>
                            <td className="align-L dropDate dropDate34377723odds border-l" rowspan="1" id="1_1" >2025-06-03</td>
                            <td className="align-L border-l"> 
                                <a onclick="showLiveData('34377723odds','34377723','Odds',34377723)" className="btn open-odds" id="showOddsBtn34377723odds"  name="oddsBtn_31162031">Open</a>
                                <a onclick="window.open('/AriskEventSelectionMatchAmount/match/34377723/Odds','pagename','resizable,height=600,width=550'); return false;" id="marketPath">
                                <strong id="eventName">England v West Indies</strong>
                                <img className="fromto" src="/assets/images/transparent.gif" />
                                <span id="marketName">Match Odds</span>
                                </a>
                            </td>
                            <td className="border-l"><a className="" href="javascript:void(0);" id="selection_exposure_1"><span className="green">(48.80)</span></a></td>
                            <td><a className="" href="javascript:void(0);" id="selection_exposure_2"><span className="red">(-203.00)</span></a></td>
                            <td className="border-l"><a onclick="openInNew('/AriskDownLinePL/34377723/Odds')" className="btn" id="view">View</a></td>
                            </tr>
                            <tr id="expand34377723odds" className="expand" style={{ display: "none" }}>
                            <td className="border-l align-L" colspan="3">
                                <img className="expand-arrow" src="/assets/images/transparent.gif" />
                                <iframe id="frame34377723odds" className="frameView" frameborder="0" height="197" scrolling="no"></iframe>
                                <div className="risk-message" id="risk_message" style={{ display: "none" }}></div>
                            </td>
                            <td width="80" className="border-l"></td>
                            </tr>
                            <tr id="tempTr_MATCH_ODDS_DRAW" className="border-t">
                            <td className="align-L dropSport dropSport34379444odds" rowspan="1"  id="0_1"><a id="eventType" onclick="window.open('/AriskEventSelectionMatchAmount/sports/4/Odds','pagename','resizable,height=600,width=550'); return false;">Cricket</a></td>
                            <td className="align-L dropDate dropDate34379444odds border-l" rowspan="1" id="1_1" >2025-06-03</td>
                            <td className="align-L border-l"> 
                                <a onclick="showLiveData('34379444odds','34379444','Odds',34379444)" className="btn open-odds" id="showOddsBtn34379444odds"  name="oddsBtn_31162031">Open</a>
                                <a onclick="window.open('/AriskEventSelectionMatchAmount/match/34379444/Odds','pagename','resizable,height=600,width=550'); return false;" id="marketPath">
                                <strong id="eventName">Royal Challengers Bengaluru v Punjab Kings</strong>
                                <img className="fromto" src="/assets/images/transparent.gif" />
                                <span id="marketName">Match Odds</span>
                                </a>
                            </td>
                            <td className="border-l"><a className="" href="javascript:void(0);" id="selection_exposure_1"><span className="green">(2.41)</span></a></td>
                            <td><a className="" href="javascript:void(0);" id="selection_exposure_2"><span className="red">(-2.08)</span></a></td>
                            <td className="border-l"><a onclick="openInNew('/AriskDownLinePL/34379444/Odds')" className="btn" id="view">View</a></td>
                            </tr>
                            <tr id="expand34379444odds" className="expand" style={{ display: "none" }}>
                            <td className="border-l align-L" colspan="3">
                                <img className="expand-arrow" src="/assets/images/transparent.gif" />
                                <iframe id="frame34379444odds" className="frameView" frameborder="0" height="197" scrolling="no"></iframe>
                                <div className="risk-message" id="risk_message" style={{ display: "none" }}></div>
                            </td>
                            <td width="80" className="border-l"></td>
                            </tr>
                            <tr id="tempTr_MATCH_ODDS_DRAW" className="border-t">
                            <td className="align-L dropSport dropSport34362707odds" rowspan="1"  id="0_1"><a id="eventType" onclick="window.open('/AriskEventSelectionMatchAmount/sports/4/Odds','pagename','resizable,height=600,width=550'); return false;">Cricket</a></td>
                            <td className="align-L dropDate dropDate34362707odds border-l" rowspan="1" id="1_1" >2025-06-02</td>
                            <td className="align-L border-l"> 
                                <a onclick="showLiveData('34362707odds','34362707','Odds',34362707)" className="btn open-odds" id="showOddsBtn34362707odds"  name="oddsBtn_31162031">Open</a>
                                <a onclick="window.open('/AriskEventSelectionMatchAmount/match/34362707/Odds','pagename','resizable,height=600,width=550'); return false;" id="marketPath">
                                <strong id="eventName">Scotland v Nepal</strong>
                                <img className="fromto" src="/assets/images/transparent.gif" />
                                <span id="marketName">Match Odds</span>
                                </a>
                            </td>
                            <td className="border-l"><a className="" href="javascript:void(0);" id="selection_exposure_1"><span className="green">(3705.69)</span></a></td>
                            <td><a className="" href="javascript:void(0);" id="selection_exposure_2"><span className="red">(-17194.21)</span></a></td>
                            <td className="border-l"><a onclick="openInNew('/AriskDownLinePL/34362707/Odds')" className="btn" id="view">View</a></td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
                <div className="match-wrap">
                    <div className="total_all">
                        <h2>Book Maker</h2>
                        <a className="btn_replay" onclick="getRiskManagement()" id="refresh_BookMaker_MatchOdds"><i className="fas fa-redo-alt"></i></a>
                    </div>
                    <table className="table01 risk_matchodd">
                        <tbody>
                            <tr>
                            <th width="10%" className="align-L" rowspan="2">Sports</th>
                            <th width="7%" className="align-L" rowspan="2">Market Date</th>
                            <th className="align-L" rowspan="2">Event/Market Name</th>
                            <th width="21%" className="align-C border-l bg-yellow" colspan="3">Player P/L</th>
                            <th width="6%" className="align-C border-l" rowspan="2">Downline P/L</th>
                            </tr>
                            <tr>
                            <th width="7%" className="border-l bg-yellow sky-align">1</th>
                            <th width="7%" className="bg-yellow sky-align">X</th>
                            <th width="7%" className="bg-yellow sky-align">2</th>
                            </tr>
                        </tbody>
                        <tbody id="bookMakerListTest">
                            <tr id="tempTr_noData_MATCH_ODDS_DRAW">
                            <td className="no-data" colspan="7">
                                <p>No Data</p>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table01 risk_matchodd">
                        <tbody>
                            <tr>
                            <th width="10%" className="align-L" rowspan="2">Sports</th>
                            <th width="8%" className="align-L" rowspan="2">Market Date</th>
                            <th className="align-L" rowspan="2">Event/Market Name</th>
                            <th width="18%" className="align-C border-l bg-yellow" colspan="2">Player P/L</th>
                            <th width="6%" className="align-C border-l" rowspan="2">Downline P/L</th>
                            </tr>
                            <tr>
                            <th width="9%" className="border-l bg-yellow sky-align">1</th>
                            <th width="9%" className="bg-yellow sky-align">2</th>
                            </tr>
                        </tbody>
                        <tbody id="bookMakerListone">
                            <tr id="tempTr_MATCH_ODDS_DRAW" className="border-t">
                            <td className="align-L" rowspan="1"  id="0_1"><a id="eventType" onclick="window.open('/AriskEventSelectionMatchAmount/sports/4/BooKMaker','pagename','resizable,height=600,width=550'); return false;">Cricket</a></td>
                            <td className="align-L border-l" rowspan="1" id="1_1" >2025-06-03</td>
                            <td className="align-L border-l">
                                <a onclick="window.open('/AriskEventSelectionMatchAmount/match/34377723/BooKMaker','pagename','resizable,height=600,width=550'); return false;" id="marketPath">
                                <strong id="eventName">England v West Indies</strong>
                                <img className="fromto" src="/assets/images/transparent.gif" />
                                <span id="marketName">Book Maker</span>
                                </a>
                            </td>
                            <td className="border-l"><a className="" href="javascript:void(0);" id="selection_exposure_1"><span className="green">(0.75)</span></a></td>
                            <td><a className="" href="javascript:void(0);" id="selection_exposure_2"><span className="red">(-3.00)</span></a></td>
                            <td className="border-l"><a onclick="openInNew('/AriskDownLinePL/34377723/Book')" className="btn" id="view">View</a></td>
                            </tr>
                            <tr id="tempTr_MATCH_ODDS_DRAW" className="border-t">
                            <td className="align-L" rowspan="1"  id="0_1"><a id="eventType" onclick="window.open('/AriskEventSelectionMatchAmount/sports/4/BooKMaker','pagename','resizable,height=600,width=550'); return false;">Cricket</a></td>
                            <td className="align-L border-l" rowspan="1" id="1_1" >2025-06-02</td>
                            <td className="align-L border-l">
                                <a onclick="window.open('/AriskEventSelectionMatchAmount/match/34362707/BooKMaker','pagename','resizable,height=600,width=550'); return false;" id="marketPath">
                                <strong id="eventName">Scotland v Nepal</strong>
                                <img className="fromto" src="/assets/images/transparent.gif" />
                                <span id="marketName">Book Maker</span>
                                </a>
                            </td>
                            <td className="border-l"><a className="" href="javascript:void(0);" id="selection_exposure_1"><span className="green">(1052.26)</span></a></td>
                            <td><a className="" href="javascript:void(0);" id="selection_exposure_2"><span className="red">(-3622.00)</span></a></td>
                            <td className="border-l"><a onclick="openInNew('/AriskDownLinePL/34362707/Book')" className="btn" id="view">View</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="match-wrap">
                    <div className="total_all">
                        <h2>Toss</h2>
                        <a className="btn_replay" onclick="getTossRiskManagement()" id="refresh_BookMaker_MatchOdds"><i className="fas fa-redo-alt"></i></a>
                    </div>
                    <table className="table01 risk_matchodd">
                        <tbody>
                            <tr>
                            <th width="10%" className="align-L" rowspan="2">Sports</th>
                            <th width="8%" className="align-L" rowspan="2">Market Date</th>
                            <th className="align-L" rowspan="2">Event/Market Name</th>
                            <th width="18%" className="align-C border-l bg-yellow" colspan="2">Player P/L</th>
                            </tr>
                            <tr>
                            <th width="9%" className="border-l bg-yellow sky-align">1</th>
                            <th width="9%" className="bg-yellow sky-align">2</th>
                            </tr>
                        </tbody>
                        <tbody id="TossListone">
                            <tr id="tempTr_MATCH_ODDS_DRAW" className="border-t">
                            <td className="align-L dropSport dropSport34377465-301559.FYodds" rowspan="1"  id="0_1">Cricket</td>
                            <td className="align-L dropDate dropDate34377465-301559.FYodds border-l" rowspan="1" id="1_1" >2025-06-03</td>
                            <td className="align-L border-l" style={{ color: "#2789ce" }}> 
                                <strong id="eventName">34377465					<img className="fromto" src="/assets/images/transparent.gif" />Glamorgan v Surrey</strong>
                                <img className="fromto" src="/assets/images/transparent.gif" />
                                <span id="marketName">Who will win the Toss</span>
                            </td>
                            <td className="border-l"><a className="" href="javascript:void(0);" id="selection_exposure_1"><span className="green">(5.00)</span></a></td>
                            <td><a className="" href="javascript:void(0);" id="selection_exposure_2"><span className="red">(-4.75)</span></a></td>
                            </tr>
                            <tr id="expand34377465-301559.FYodds" className="expand" style={{ display: "none" }}>
                            <td className="border-l align-L" colspan="3">
                                <img className="expand-arrow" src="/assets/images/transparent.gif" />
                                <iframe id="frame34377465-301559.FYodds" className="frameView" frameborder="0" height="197" scrolling="no"></iframe>
                                <div className="risk-message" id="risk_message" style={{ display: "none" }}></div>
                            </td>
                            <td width="80" className="border-l"></td>
                            </tr>
                            <tr id="tempTr_MATCH_ODDS_DRAW" className="border-t">
                            <td className="align-L dropSport dropSport34377723-549942.FYodds" rowspan="1"  id="0_1">Cricket</td>
                            <td className="align-L dropDate dropDate34377723-549942.FYodds border-l" rowspan="1" id="1_1" >2025-06-03</td>
                            <td className="align-L border-l" style={{ color: "#2789ce" }}> 
                                <strong id="eventName">34377723					<img className="fromto" src="/assets/images/transparent.gif" />England v West Indies</strong>
                                <img className="fromto" src="/assets/images/transparent.gif" />
                                <span id="marketName">Who will win the Toss</span>
                            </td>
                            <td className="border-l"><a className="" href="javascript:void(0);" id="selection_exposure_1"><span className="red">(-4.50)</span></a></td>
                            <td><a className="" href="javascript:void(0);" id="selection_exposure_2"><span className="green">(5.25)</span></a></td>
                            </tr>
                            <tr id="expand34377723-549942.FYodds" className="expand" style={{ display: "none" }}>
                            <td className="border-l align-L" colspan="3">
                                <img className="expand-arrow" src="/assets/images/transparent.gif" />
                                <iframe id="frame34377723-549942.FYodds" className="frameView" frameborder="0" height="197" scrolling="no"></iframe>
                                <div className="risk-message" id="risk_message" style={{ display: "none" }}></div>
                            </td>
                            <td width="80" className="border-l"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* <!-- Fancy Bet  --> */}
                <div className="match-wrap">
                    <div className="total_all">
                        <h2>Fancy Bet</h2>
                        <a className="btn_replay" onclick="getRiskManagementFancyList()" id="refresh_Fancy_Bet"><i className="fas fa-redo-alt"></i></a>
                    </div>
                    {/* <!-- Fancy Bet --> */}
                    <table className="table01 risk_matchodd">
                        <thead>
                            <tr>
                            <th width="10%" className="align-L" rowspan="2">Sports</th>
                            <th width="8%" className="align-L" rowspan="2">Market Date</th>
                            <th className="align-L" rowspan="2">Event/Market Name</th>
                            <th width="18%" className="align-C border-l bg-yellow" colspan="2">Player P/L</th>
                            <th width="6%" className="align-C border-l" rowspan="2">Books</th>
                            </tr>
                            <tr>
                            <th width="9%" className="border-l bg-yellow sky-align">MIN</th>
                            <th width="9%" className="bg-yellow sky-align">MAX</th>
                            </tr>
                        </thead>
                        <tbody id="fancyRiskList">
                            <tr id="tempTr_FANCY_BET" className="border-t">
                            <td className="align-L dropSport dropSport4357556734377723" rowspan="1"  id="0_1"><a id="eventType" href="javascript:void(0);">Cricket</a></td>
                            <td className="align-L dropDate dropDate4357556734377723 border-l" rowspan="1" id="1_1" >2025-06-03</td>
                            <td className="align-L border-l">
                                <a onclick="showLiveData('4357556734377723','34377723-43575567.FY','Fancy',34377723)" className="btn open-odds" id="showOddsBtn4357556734377723"  name="oddsBtn_31171367_418314">Open</a>
                                <a href="javascript:void(0);" id="marketPath">
                                <strong id="eventName">England v West Indies</strong>
                                <img className="fromto" src="/assets/images/transparent.gif" />
                                <span id="marketName">Top Scoring Batsman Runs ADV.</span>
                                </a>
                            </td>
                            <td className="border-l"><a className="" href="javascript:void(0);" id="min_exposure"><span className="red" id="minFancy4357556734377723">-50.00</span></a></td>
                            <td><a className="" href="javascript:void(0);" id="max_exposure"><span id="maxFancy4357556734377723">50.00</span></a></td>
                            <td className="border-l"><a href="#" onclick="window.open('/AFancyBetBook/34377723-43575567.FY','pagename','resizable,height=600,width=550'); return false;" className="btn-book" id="books">Books</a></td>
                            </tr> 
                            <tr id="tempTr_FANCY_BET" className="border-t">
                            <td className="align-L dropSport dropSport229348234362707" rowspan="1"  id="0_1"><a id="eventType" href="javascript:void(0);">Cricket</a></td>
                            <td className="align-L dropDate dropDate229348234362707 border-l" rowspan="1" id="1_1" >2025-06-02</td>
                            <td className="align-L border-l">
                                <a onclick="showLiveData('229348234362707','34362707-2293482.FY','Fancy',34362707)" className="btn open-odds" id="showOddsBtn229348234362707"  name="oddsBtn_31171367_418314">Open</a>
                                <a href="javascript:void(0);" id="marketPath">
                                <strong id="eventName">Scotland v Nepal</strong>
                                <img className="fromto" src="/assets/images/transparent.gif" />
                                <span id="marketName">25 Over SCO</span>
                                </a>
                            </td>
                            <td className="border-l"><a className="" href="javascript:void(0);" id="min_exposure"><span className="red" id="minFancy229348234362707">-1320.00</span></a></td>
                            <td><a className="" href="javascript:void(0);" id="max_exposure"><span id="maxFancy229348234362707">1746.00</span></a></td>
                            <td className="border-l"><a href="#" onclick="window.open('/AFancyBetBook/34362707-2293482.FY','pagename','resizable,height=600,width=550'); return false;" className="btn-book" id="books">Books</a></td>
                            </tr>
                            <tr id="expand229348234362707" className="expand" style={{ display: "none" }}>
                            <td className="border-l align-L" colspan="3">
                                <img className="expand-arrow" src="/assets/images/transparent.gif" />
                                <iframe id="frame229348234362707" className="frameView" frameborder="0" height="197" scrolling="no"></iframe>
                                <div className="risk-message" id="risk_message" style={{ display: "none" }}></div>
                            </td>
                            <td width="80" className="border-l"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="match-wrap">
                    <div className="total_all">
                        <h2>Sports Book</h2>
                        <a className="btn_replay" href="" id="refresh_Ow"><i className="fas fa-redo-alt"></i></a>
                    </div>
                    <table className="table01">
                        <tbody>
                            <tr>
                            <th width="10%" className="align-L">Sports</th>
                            <th width="8%" className="align-L">Market Date</th>
                            <th className="align-L">Event/Market Name</th>
                            <th width="26%" className="">Matched Amount</th>
                            </tr>
                        </tbody>
                        <tbody id="content_Ow">
                            <tr id="tempTr_noData_Ow">
                            <td className="no-data" colspan="4">
                                <p>No Data
                                </p>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="match-wrap">
                    <div className="total_all">
                        <h2>Premium Cricket</h2>
                        <a className="btn_replay" onclick="getRiskManagementPremiumList()" id="refresh_Sportradar"><i className="fas fa-redo-alt"></i></a>
                    </div>
                    <table className="table01">
                        <tbody>
                            <tr>
                            <th width="10%" className="align-L">Sports</th>
                            <th width="8%" className="align-L">Market Date</th>
                            <th className="align-L">Event/Market Name</th>
                            <th width="26%" className="">Matched Amount</th>
                            </tr>
                        </tbody>
                        <tbody id="premiumDesign">
                            <tr id="tempTr_Sportradar" className="border-t">
                            <td className="align-L" rowspan="1"  id="0_1"><a id="eventType" onclick="window.open('/AriskEventSelectionMatchAmount/sports/4/Premium','pagename','resizable,height=600,width=550'); return false;">Cricket</a></td>
                            <td className="align-L border-l" rowspan="1" id="1_1" >2025-06-02</td>
                            <td className="align-L border-l">
                                <a href="javascript:void(0);" id="marketPath" style={{ margin: "0" }}>
                                <strong id="eventName">Indian Warriors v Trans Titans</strong>
                                <img className="fromto" src="/assets/images/transparent.gif" />
                                <span id="marketName">1st innings - Indian Warriors total</span>
                                </a>
                            </td>
                            <td className="border-l" id="amount">313</td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
                {/* <!-- TS_BINARY  --> */}
                <div className="match-wrap">
                    <div className="total_all">
                        <h2>Binary</h2>
                        <a className="btn_replay" href="" id="refresh_Binary"><i className="fas fa-redo-alt"></i></a>
                    </div>
                    <table className="table01 risk_matchodd">
                        <tbody>
                            <tr>
                            <th width="10%" className="align-L" rowspan="2">Sports</th>
                            <th width="8%" className="align-L" rowspan="2">Market Date</th>
                            <th className="align-L" rowspan="2">Event/Market Name</th>
                            <th width="18%" className="align-C border-l bg-yellow" colspan="2">Player P/L</th>
                            <th width="6%" className="align-C border-l" rowspan="2">Books</th>
                            </tr>
                            <tr>
                            <th width="9%" className="border-l bg-yellow sky-align">MIN</th>
                            <th width="9%" className="bg-yellow sky-align">MAX</th>
                            </tr>
                        </tbody>
                        <tbody id="content_TS_BINARY">
                            <tr id="tempTr_noData_TS_BINARY">
                            <td className="no-data" colspan="6">
                                <p>No Data
                                </p>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="match-wrap">
                    <div className="total_all">
                        <h2>Other Markets</h2>
                        <a className="btn_replay" onclick="getOtherRiskManagement()" id="refresh_Other_Market"><i className="fas fa-redo-alt"></i></a>
                    </div>
                    <table className="table01">
                        <tbody>
                            <tr>
                            <th width="10%" className="align-L" rowspan="2">Sports</th>
                            <th width="8%" className="align-L" rowspan="2">Market Date</th>
                            <th className="align-L" rowspan="2">Event/Market Name</th>
                            <th width="18%" className="align-C border-l bg-yellow" colspan="2">Player P/L</th>
                            </tr>
                            <tr>
                            <th width="9%" className="border-l bg-yellow sky-align">1</th>
                            <th width="9%" className="bg-yellow sky-align">2</th>
                            </tr>
                        </tbody>
                        <tbody id="OtherListone">
                            <tr id="tempTr_noData_MATCH_ODDS_DRAW">
                            <td className="no-data" colspan="7">
                                <p>No Data</p>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
     );
};
export default RiskManagement;