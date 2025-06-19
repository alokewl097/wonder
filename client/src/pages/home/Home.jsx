import React, { useState } from "react";
import Marquee from "../components/Marquee";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    return (
        <>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                
            <div className="main_wrap">
                <Marquee />
                <div className="total_all">
                    <div className="search-wrap" id="userSearchUl">
                        <div>
                            <input className="search-input" type="text" name="userId" id="userId" placeholder="Find member..." readonly="readonly" />
                            <button className="search-but" id="searchKey">Search</button>
                        </div>
                    </div>
                    <ul className="input-list" id="accountStatusUl">
                        <li><strong>Status</strong></li>
                        <li>
                            <select className="" name="accountStatus" id="accountStatus">
                                <option value="0">ACTIVE
                                </option>
                                <option value="1">SUSPENDED
                                </option>
                                <option value="2">LOCKED
                                </option>
                                <option value="3">ALL</option>
                            </select>
                        </li>
                    </ul>
                    <div className="agent_path">
                        <ul id="agentPath" className="agent_path-L" style={{ display: "block" }}>
                            <li id="patha" className="" style={{ display: "none" }} >
                                <a id="adminLink">
                                    <span className="lv_0">
                                        A
                                    </span>
                                    <strong id="adminUser"></strong>
                                </a>
                            </li>
                            <li id="pathsua" className="currency_tag" style={{ display: "none" }}>
                                <a id="suaLink">
                                    <span className="lv_1">SUA</span>
                                    <strong id="suaUser"> </strong>
                                </a>
                            </li>
                            <li id="pathsab" className="" style={{ display: "none" }}>
                                <a id="sabLink">
                                    <span className="lv_3">
                                        SAB
                                    </span>
                                    <strong id="sabUser"></strong>
                                </a>
                            </li>
                            <li id="pathsup" className="" style={{ display: "none" }}>
                                <a id="supLink">
                                    <span className="lv_4">
                                        SUP
                                    </span>
                                    <strong id="supUser"></strong>
                                </a>
                            </li>
                            <li id="pathsa" className="" style={{ display: "none" }}>
                                <a id="saLink">
                                    <span className="lv_2">
                                        SA
                                    </span>
                                    <strong id="saUser"> </strong>
                                </a>
                            </li>
                            <li id="pathc" className="last_li" style={{ display: "none" }}>
                                <a id="userLink">
                                    <span className="lv_3">
                                        A
                                    </span>
                                    <strong id="cUser"> </strong>
                                </a>
                            </li>
                            <ul className="account_pop" id="accountPop">
                                <li id="popTmp" style={{ display: "none" }}>
                                    <a href="">
                                        <span className="lv_4">
                                            PL
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </ul>
                    </div>
                    <a id="refresh" className="btn_replay"><img src="/assets/images/transparent.gif" /></a>
                    <a className="add_member"><img src="/assets/images/transparent.gif" /><span id="createButton">Add Whitelable</span> </a>
                </div>
                <div id="totalBox" className="total_box">
                    <dl id="creditLimitDL" className="total_dl" style={{ display: "none" }}>
                        <dt>Credit Limit</dt>
                        <dd id="myCreditLimit">IR 500.00</dd>
                    </dl>
                    <dl id="creditGivenOutDL" className="total_dl" style={{ display: "none" }}>
                        <dt>Total Credit Given Out</dt>
                        <dd id="totalCreditGivenOut">IR 417.29</dd>
                    </dl>
                    <dl id="creditAvailBalDL" className="total_dl" style={{ display: "none" }}>
                        <dt>Credit Avail Bal</dt>
                        <dd id="myCreditAvailBal">IR 82.71</dd>
                    </dl>
                    <dl id="totalBalanceDL" className="total_dl">
                        <dt>Total Balance</dt>
                        <dd id="totalBalance">PBU 3,272,697.84</dd>
                    </dl>
                    <dl id="totalExposureDL" className="total_dl">
                        <dt>Total Exposure</dt>
                        <dd id="">PBU  <span id="totalExposure" style={{ color: "red" }}>78,977.27</span></dd>
                    </dl>
                    <dl id="myCurrentPLDL" className="total_dl" style={{ display: "none" }}>
                        <dt>Today P/L with Upline
                        </dt>
                        <dd id="myCurrentPL">IR 0.00</dd>
                    </dl>
                    <dl id="availableBalanceDL" className="total_dl">
                        <dt>Total Avail. bal.</dt>
                        <dd id="totalAvailBal">PBU 3,193,720.57</dd>
                    </dl>
                    <dl id="masterBalanceDL" className="total_dl">
                        <dt>Balance</dt>
                        <dd id="mastersBalance">PBU 2.00</dd>
                    </dl>
                    <dl id="masterAvailableBalanceDL" className="total_dl">
                        <dt>Available Balance</dt>
                        <dd id="mastersAvailBal">PBU 3,193,722.57</dd>
                    </dl>
                    <dl id="transferablePLWithUplineDL" className="total_dl">
                        <dt>Total Player Balance
                        </dt>
                        <dd id="totalpBal">PBU 775,460.67</dd>
                    </dl>
                </div>
                <div id="widthAll" className="width-all">
                    <table id="resultTable" className="table01 margin-table" style={{ display: "table" }}>
                        <thead>
                            <tr>
                                <th id="accountTh" width="" className="align-L">Account</th>
                                <th id="creditRefTh" width="10%">Credit Ref.</th>
                                <th id="creditLimitTh" width="10%" style={{ display: "none" }}>Credit Limit</th>
                                <th id="currentPLTh" width="10%" style={{ display: "none" }}>Current P/L
                                </th>
                                <th id="transferablePLTh" width="10%" style={{ display: "none" }}>Transferable P/L
                                </th>
                                <th id="balanceTh" width="10%">Balance</th>
                                <th id="exposureTh" width="10%">Exposure</th>
                                <th id="availableBalanceTh" width="10%">Avail. bal.</th>
                                <th id="creditPLTh" width="10%" style={{ display: "none" }}>Balance</th>
                                <th id="exposureLimitTh" width="10%" style={{ display: "none" }}>Exposure Limit</th>
                                <th id="usrWeb" width="10%">Website Name</th>
                                <th id="playerBalanceTh" width="10%">Player Balance</th>
                                <th id="refPLTh" width="10%">Ref. P/L</th>
                                <th id="statusTh" width="10%">Status</th>
                                <th id="actionTh" width="15%">Action</th>
                            </tr>
                        </thead>
                        <tbody id="userData">
                            <tr id="level1" style={{ display: "table-row" }} main_userid="level1">
                                <td id="accountCol" className="align-L"><a id="account0" className="ico_account" onclick="goInside(0)"><span className="lv_4">SUA</span>level1</a></td>
                                <td id="creditRef1" className="credit-amount-member" onclick="openCreditref('0')"><a id="creditRefBtn" className="favor-set" href="#">0.00</a></td>
                                <td id="balance1"><a href="#" className="link-open">3,270,022.82</a></td>
                                <td id="currentExposure1" onclick="loadExpo(0)" style={{ color: "red" }}><span style={{ cursor: "pointer", width: "67px", textAlign: "center", display: "inline-block" }} className="status-suspend">78,977.27</span></td>
                                <td id="available1">3,191,045.55</td>
                                <td id="exposureLimit1" style={{ display: "none" }}>0.00</td>
                                <td id="exposureLimit1" style={{ display: "table-cell" }}>baajiwala.live</td>
                                <td id="available1" style={{ display: "table-cell" }}>773,278.72</td>
                                <td id="refPL1">3,270,022.82</td>
                                <td id="statusCol"><span id="status1" className="status-active"><img src="/assets/images/transparent.gif" />Active</span> </td>
                                <td id="actionCol">
                                    <ul className="action">
                                        <li> <Link id="p_l1" className="p_l" to="/AccProfitAndLoss">Betting Profit &amp; Loss</Link></li>
                                        <li> <Link id="betting_history1" to="/AccBettingHistory" className="betting_history">Betting History</Link></li>
                                        <li><a id="change1" className="status" onclick="openstatusmod('Active' , '0')">Change Status</a></li>
                                        <li><Link id="profile1" className="profile" to="/MemberAcctSmry">Profile</Link></li>
                                        <li><a className="bank" onclick="openBlockMod('0' , 'level1')">Block</a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr id="satest" style={{ display: "table-row" }} main_userid="satest">
                                <td id="accountCol" className="align-L"><a id="account0" className="ico_account" onclick="goInside(1)"><span className="lv_4">SUA</span>satest</a></td>
                                <td id="creditRef1" className="credit-amount-member" onclick="openCreditref('1')"><a id="creditRefBtn" className="favor-set" href="#">0.00</a></td>
                                <td id="balance1"><a href="#" className="link-open">2,670.02</a></td>
                                <td id="currentExposure1" onclick="loadExpo(1)"><span style={{ cursor: "pointer", width: "67px", textAlign: "center", display: "inline-block" }} className="status-suspend">0.00</span></td>
                                <td id="available1">2,670.02</td>
                                <td id="exposureLimit1" style={{ display: "none" }}>0.00</td>
                                <td id="exposureLimit1" style={{ display: "table-cell" }}>baajiwala.live</td>
                                <td id="available1" style={{ display: "table-cell" }}>2,181.95</td>
                                <td id="refPL1">2,670.02</td>
                                <td id="statusCol"><span id="status1" className="status-active"><img src="/assets/images/transparent.gif" />Active</span> </td>
                                <td id="actionCol">
                                    <ul className="action">
                                        <li> <Link id="p_l1" className="p_l" to="/AccProfitAndLoss">Betting Profit &amp; Loss</Link></li>
                                        <li> <Link id="betting_history1" to="/AccBettingHistory" className="betting_history">Betting History</Link></li>
                                        <li><a id="change1" className="status" onclick="openstatusmod('Active' , '1')">Change Status</a></li>
                                        <li><Link id="profile1" className="profile" to="/MemberAcctSmry">Profile</Link></li>
                                        <li><a className="bank" onclick="openBlockMod('1' , 'satest')">Block</a></li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="paginationList">
                <ul id="pageNumberContent" className="pages">
                    <li id="prev"><a href="javascript:void(0);" className="disable" style={{ pointerEvents: "none" }}>Prev</a></li>
                    <li id="pageNumber"><a href="javascript:void(0);" className="select" style={{ pointerEvents: "none" }}>1</a></li>
                    <li id="next"><a href="javascript:void(0);" className="disable" style={{ pointerEvents: "none" }}>Next</a></li>
                    <input type="text" id="goToPageNumber_1" maxlength="6" size="4" /><a id="goPageBtn_1">GO</a>
                </ul>
            </div>
            <div className="footer_info">
                <div className="main_wrap">
                    <ul className="action">
                        <li className="bank">
                            <p>Block Market</p>
                        </li>
                        <li className="p_l">
                            <p>Betting Profit &amp; Loss</p>
                        </li>
                        <li className="betting_history">
                            <p>Betting History</p>
                        </li>
                        <li className="profile">
                            <p>Profile</p>
                        </li>
                        <li className="status">
                            <p>Change Status</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
export default Home;