import React from "react"; 
import { Link } from "react-router-dom";
const MemberAcctSmry = () => {
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
                                <Link id="accountSummary" to="/MemberAcctSmry" className="select">Account Profile</Link>
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
                            <li><Link id="_activityLog" to="/AccActivityLog">Activity Log</Link></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Center Column --> */}
                <div className="col-center report">  
                    <div id="message" className="message-wrap success">
                    <a className="btn-close">Close</a>
                    <p></p>
                    </div> 
		            <h2>Account Summary</h2>

                    <ul className="acc-info">
			<li className="user" id="muserId"></li>
            <li className="status_all">
                <strong id="status"></strong>
            </li> 
                    </ul> 
                    <table className="table01">
                        <tbody>
                            <tr>
                                <th width="20%" className="align-L">Wallet</th> 
                                <th width="25%">Available to Bet</th>
                                <th width="">Funds available to withdraw</th>
                                <th width="25%">Current exposure</th>
                            </tr> 
                            <tr>
                                <td className="align-L">Main wallet</td> 
                                <td id="availableToBet">0.00</td>
                                <td id="availableToWithDraw">0.00</td>
                                <td id="currentExposure">0.00</td>
                            </tr>
                        </tbody>
                    </table> 
                    <h2>Profile</h2>
                    <div className="event-left">
                        <div className="profile-wrap">
                            <h3>About You</h3>
                            <dl>
                                <dt>First Name</dt>
                                <dd id="puserId">-</dd> 
                                <dt>Last Name</dt>
                                <dd id="plastName">--</dd> 
                                <dt>Birthday</dt>
                                <dd>--</dd> 
                                <dt>E-mail</dt>
                                <dd id="pemail"></dd> 
                                <dt>Password</dt>
                                <dd>******************************** 
                                    <a href="#" className="favor-set openchangepwdmodal">Edit</a> 
                                </dd> 
                                <dt>Time Zone</dt>
                                <dd id="ptimeZone">--</dd>
                            </dl>
                        </div> 
                        <div className="profile-wrap">
                            <h3>Contact Details</h3>
                            <dl>
                                <dt>WhatsApp number</dt>
                                <dd id="pMob">--</dd>  
                            </dl>
                        </div> 
                        <div className="profile-wrap">
                            <h3>Upline WhatsApp Number</h3>
                            <dl>
                                <dt>WhatsApp number</dt>
                                <dd id="parMob">--</dd>
                            </dl>
                        </div>
                    </div> 
                    <div className="event-right" id="expoDiv" style={{ display: "none" }}>
                        <div className="profile-wrap">
                            <h3>Limits &amp; Commission</h3>
                            <dl>
                                <dt>Exposure Limit</dt>
                                <dd><span id="pmainwalletExposureLimit">--</span></dd> 
                                <dt>Commission</dt>
                                <dd>
                                    <span id="pcommission">--</span> 
                                </dd> 
                            </dl>
                        </div> 
                        <div className="profile-wrap" style={{ display: "none" }}>
                            <h3>PT</h3>
                            <dl className="casinopt-list-wrap"> 
                                <dt>PT Setting</dt>
                                <dd> 
                                    <a href="#" className="favor-set" onclick="PTAllowedHandler.showDialog()">Edit</a> 
                                </dd> 
                                <dd className="dl_list">
                                    <img className="expand-arrow" src="/assets/images/transparent.gif" />
                                    <dl className="casinopt-list-head">
                                        <dt></dt> 
                                        <dd>Total PT</dd> 
                                    </dl> 
                                    <dl className="casinopt-list">
                                    <dt>Soccer</dt> 
                                    <dd id="profile_soccer_PT">0%</dd> 
                                    </dl> 
                                    <dl className="casinopt-list">
                                    <dt>Tennis</dt> 
                                    <dd id="profile_tennis_PT">0%</dd> 
                                    </dl> 
                                    <dl className="casinopt-list">
                                    <dt>Cricket</dt> 
                                    <dd id="profile_cricket_PT">0%</dd> 
                                    </dl> 
                                    <dl className="casinopt-list">
                                    <dt>Rugby Union</dt> 
                                    <dd id="profile_rugby_union_PT">0%</dd> 
                                    </dl> 
                                    <dl className="casinopt-list">
                                    <dt>Horse Racing</dt> 
                                    <dd id="profile_horse_racing_PT">0%</dd> 
                                    </dl> 
                                    <dl className="casinopt-list">
                                    <dt>Greyhound Racing</dt> 
                                    <dd id="profile_greyhound_racing_PT">0%</dd>
                                        
                                    </dl>
                                    
                                    <dl className="casinopt-list">
                                    <dt>American Football</dt>
                                        
                                    <dd id="profile_american_football_PT">0%</dd>
                                        
                                    </dl>
                                    
                                    <dl className="casinopt-list">
                                    <dt>Basketball</dt>
                                        
                                    <dd id="profile_basketball_PT">0%</dd>
                                        
                                    </dl>
                                    
                                    <dl className="casinopt-list">
                                    <dt>Politics</dt>
                                        
                                    <dd id="profile_politics_PT"></dd>
                                        
                                    </dl>
                                    
                                    <dl className="casinopt-list">
                                    <dt>Kabaddi </dt>
                                        
                                    <dd id="profile_kabaddi_PT"></dd>
                                        
                                    </dl>
                                    
                                </dd>

                                <div style={{ display: "none" }}>
                                    <dt>Fancy Bet PT Setting</dt>
                                    <dd></dd>
                                    <dd className="dl_list">
                                        <img className="expand-arrow" src="/assets/images/transparent.gif" />
                                        <dl>
                                            <dt>Fancy Bet</dt>
                                            <dd id="profile_company_fancy_bet_PT">0%</dd>
                                        </dl>
                                    </dd>
                                </div>

                                <div style={{ display: "none" }}>
                                    <dt>Book Maker PT Setting</dt>
                                    <dd></dd>
                                    <dd className="dl_list">
                                        <img className="expand-arrow" src="/assets/images/transparent.gif" />
                                        <dl>
                                            <dt>Book Maker</dt>
                                            <dd id="profile_company_book_maker_PT">0%</dd>
                                        </dl>
                                    </dd>
                                </div>

                                <div style={{ display: "none" }}>
                                    <dt style={{ width: "200px" }}>SportsBook PT Setting</dt>
                                    <dd></dd>
                                    <dd className="dl_list">
                                        <img className="expand-arrow" src="/assets/images/transparent.gif" />
                                        <dl>
                                            <dt>PT</dt>
                                            <dd id="profile_is_allow_sportsbookTennis">ON</dd>

                                            <dt>Sportsbook</dt>
                                            <dd id="profile_company_sportsbook_tennis_PT">0%</dd>
                                        </dl>
                                    </dd>
                                </div>

                                <div style={{ display: "none" }}>
                                    <dt style={{ width: "200px" }}>SportsBook - Premium PT Setting</dt>
                                    <dd></dd>
                                    <dd className="dl_list">
                                        <img className="expand-arrow" src="/assets/images/transparent.gif" />
                                        <dl>
                                            <dt>Premium PT</dt>
                                            <dd id="profile_is_allow_sportsbookPremiumCricket">ON</dd>

                                            <dt>Premium</dt>
                                            <dd id="profile_company_sportsbookPremiumCricket_PT">0%</dd>
                                        </dl>
                                    </dd>
                                </div>

                                <div style={{ display: "none" }}>
                                    <dt>Binary PT Setting</dt>
                                    <dd></dd>
                                    <dd className="dl_list">
                                        <img className="expand-arrow" src="/assets/images/transparent.gif" />
                                        <dl>
                                            <dt>Binary</dt>
                                            <dd id="profile_company_binary_PT">0%</dd>
                                        </dl>
                                    </dd>
                                </div>
                            </dl>
                        </div> 
                        <div className="profile-wrap" style={{ display: "none" }}>
                            <h3>Casino PT</h3>
                            <dl className="casinopt-list-wrap">
                                <dt>Casino PT</dt>
                                <dd id="profile_is_allow_casino">ON</dd>
                                <dd className="casino-edit"> 
                                    <a href="#" className="favor-set">Edit</a> 
                                </dd>
                                
                                <dd className="dl_list">
                                    <img className="expand-arrow" src="/assets/images/transparent.gif" />
                                    <dl className="casinopt-list-head">
                                        <dt></dt>
                                        <dd>Master Agent</dd>
                                        <dd>Player</dd>
                                        <dd>PT allowed</dd>
                                        <dd>Commission</dd>
                                    </dl>
                                    
                                    <dl className="casinopt-list">
                                        <dt>LIVE</dt>
                                        <dd id="profile_live_agent_casino_PT">0%</dd>
                                        <dd id="profile_live_downline_casino_PT">0%</dd>
                                        <dd id="profile_live_casino_pt_allowed">100%</dd>
                                        <dd id="profile_live_casino_commition">0%</dd>
                                    </dl>
                                    
                                    <dl className="casinopt-list">
                                        <dt>RNG</dt>
                                        <dd id="profile_rng_agent_casino_PT">0%</dd>
                                        <dd id="profile_rng_downline_casino_PT">0%</dd>
                                        <dd id="profile_rng_casino_pt_allowed">100%</dd>
                                        <dd id="profile_rng_casino_commition">0%</dd>
                                    </dl>
                                    
                                    <dl className="casinopt-list">
                                        <dt>SLOT</dt>
                                        <dd id="profile_slot_agent_casino_PT">0%</dd>
                                        <dd id="profile_slot_downline_casino_PT">0%</dd>
                                        <dd id="profile_slot_casino_pt_allowed">100%</dd>
                                        <dd id="profile_slot_casino_commition">0%</dd>
                                    </dl>
                                    
                                    <dl className="casinopt-list">
                                        <dt>VIRTUAL</dt>
                                        <dd id="profile_virtual_agent_casino_PT">0%</dd>
                                        <dd id="profile_virtual_downline_casino_PT">0%</dd>
                                        <dd id="profile_virtual_casino_pt_allowed">100%</dd>
                                        <dd id="profile_virtual_casino_commition"></dd>
                                    </dl>
                                    
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default MemberAcctSmry;