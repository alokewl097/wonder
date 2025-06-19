import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return(
        <div className="top">
            <div className="header">
                <h1><Link style={{ display: "flex" }} id="mainLink" to="/home">
                    <img id="headLogo" src="" />
                    </Link>
                </h1>
                <ul className="account-wrap">
                    <li><span id="loginId">A</span><strong style={{ color: "var(--admintopheadertextcolor)" }}>admin</strong></li>
                    <li className="main-wallet no-multi">
                        <Link to="#multi-balance_pop" className="a-wallet">
                        <ul>
                            <li>
                                <span>Main</span>
                                <strong id="mainBalance">PBU 2.00</strong>
                            </li>
                        </ul>
                        <p className="loading-bar" id="menuRefreshLoading" style={{ display: "none" }}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </p>
                        </Link>
                        <Link id="topRefresh" className="a-refresh" style={{ cursor: "pointer" }}><img src="/assets/images/transparent.gif" /></Link>
                    </li>
                </ul>
            </div>
            {/* <!-- Menu Wrap --> */}
            <div className="menu-wrap">
                <div className="main_wrap">
                    <ul className="menu" id="menuItems">
                        <li><Link id="menu_downline_list" className="select" to="/home">Downline List </Link>
                        </li>
                        <li>
                            <Link id="menu_my_account" className="" to="/AccSummary">My Account</Link>
                        </li>
                        <li>
                        <Link id="menu_my_report" className="menu-drop" to="#">My Report
                        </Link>
                        <ul className="submenudiv">
                            <li><Link className="sbmenu" to="/ProfitMarket">Profit/Loss Report by Market
                                </Link>
                            </li>
                            <li><Link className="sbmenu" to="/DownlinePt2">Profit/Loss Downline</Link></li>
                            <li><Link className="sbmenu" to="/MatchProfitLoss">Match Profit Loss
                                </Link>
                            </li>
                            <li><Link className="sbmenu" to="/CasinoPLDownlineNew">Casino P/L Downline Monthly
                                </Link>
                            </li>
                            <li><Link className="sbmenu" to="/SABAPLDownlineNew">SABA P/L Downline Monthly
                                </Link>
                            </li>
                            <li><Link className="sbmenu" to="/ParlayPLDownLine">Parlay P/L Downline Monthly
                                </Link>
                            </li>
                            <li><Link className="sbmenu" to="/ShowProviderPL">Provider PL
                                </Link>
                            </li>
                        </ul>
                        </li>
                        <li><Link id="menu_bet_list" className="" to="/BetList">BetList
                        </Link>
                        </li>
                        <li><Link id="menu_bet_list_live" className="" to="/BetListLive">BetListLive
                        </Link>
                        </li>
                        <li>
                        <Link id="menu_risk_management" className="menu-drop" to="#">Risk Management
                        </Link>
                        <ul className="submenudiv">
                            <li><Link className="sbmenu" to="/RiskManagement">Sports Risk Management
                                </Link>
                            </li>
                            <li><Link className="sbmenu" to="/CasinoRiskManagement">Casino Risk Management
                                </Link>
                            </li>
                            <li><Link className="sbmenu" to="/ParlayRiskManagement">Parlay Risk Management
                                </Link>
                            </li>
                        </ul>
                        </li>
                        <li><Link id="menu_banking" to="/Banking">Banking
                        </Link>
                        </li>
                        {/* <li><Link className="menu-drop" to="#">Banking
                        </Link>
                        <ul className="submenudiv">
                            
                            <li><Link id="menu_banking" className="sbmenu">Banking
                            </Link></li>
                            <li><Link id="menu_banking1" className="sbmenu">Fast Banking
                            </Link></li>
                            </ul>
                        </li>   */}
                        <li><Link id="block_Market" className="" to="/BlockMarket">Block Market
                        </Link>
                        </li>
                        <li><Link id="sportSetting" className="" to="/SportSettings">Sport Setting
                        </Link>
                        </li>
                        <li><Link id="adminSetting" className="" to="/AdminSettings">Admin Setting
                        </Link>
                        </li>
                        <li><Link id="adminResult" className="" to="/SetResult">Result
                        </Link>
                        </li>
                        <li><Link id="addMatch" className="" to="/AddMatch">Add Match
                        </Link>
                        </li>
                        <li><Link to="/CheckSportWiseResult">Old Res.
                        </Link>
                        </li>
                        <li className="logout" onclick="selfLogoutUser()">
                        <Link id="logout" to="/login">Logout<img src="/assets/images/transparent.gif" /></Link>
                        </li>
                        <li className="time_zone"><span>Time Zone :</span> <span id="loginTimeZone" style={{ color: "var(--adminbottomheadertextcolor)", fontWeight: "bold"}}>GMT+5:30</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;