import React from "react";
import './blockmarket.css';
import { Link } from "react-router-dom";
const BlockMarket = () => {
    return(
        <>
            <div className="main_wrap">
                {/* <!-- Center Column --> */}
                <div className="full-wrap">
                    {/* <!-- Loading Wrap --> */}
                    <div id="loading" className="loading-wrap" style={{ display: "none" }}>
                        <ul className="loading">
                            <li><img src="/assets/images/loading40.gif" /></li>
                            <li>Loading...</li>
                        </ul>
                    </div>
                    {/* <!-- Message --> */}
                    <div id="message" className="message-wrap success">
                        <a className="btn-close">Close</a>
                        <p></p>
                    </div>
                    <h2>Sport Listing
                    </h2>
                    <table id="table_log" className="table01">
                        <tbody>
                            <tr>
                            <th width="15%" className="align-L">S.No.</th>
                            <th width="18%">Betfair ID</th>
                            <th width="18%">Name</th>
                            <th width="18%">Status</th>
                            <th width="16%">Action</th>
                            </tr>
                        </tbody>
                        <tbody id="content">
                            <tr id="tempTr">
                            <td id="createDate" className="align-L">1</td>
                            <td id="deposit">1</td>
                            <td id="withdraw"><span className="red"><a to="/BlockMarketList">Soccer</a></span></td>
                            <td id="balance">Soccer <span id="game1status">is ON</span></td>
                            <td onclick="editGames('1')"><label className="switch">
                                <input type="checkbox" id="game1" defaultChecked  />
                                <span className="slider round"></span>
                                </label>
                            </td>
                            </tr>
                            <tr id="tempTr">
                            <td id="createDate" className="align-L">2</td>
                            <td id="deposit">2</td>
                            <td id="withdraw"><span className="red"><Link to="/BlockMarketList">Tennis</Link></span></td>
                            <td id="balance">Tennis <span id="game2status">is ON</span></td>
                            <td onclick="editGames('2')"><label className="switch">
                                <input type="checkbox" id="game2" defaultChecked  />
                                <span className="slider round"></span>
                                </label>
                            </td>
                            </tr>
                            <tr id="tempTr">
                            <td id="createDate" className="align-L">3</td>
                            <td id="deposit">4</td>
                            <td id="withdraw"><span className="red"><Link to="/BlockMarketList">Cricket</Link></span></td>
                            <td id="balance">Cricket  <span id="game4status">is ON</span></td>
                            <td onclick="editGames('4')"><label className="switch">
                                <input type="checkbox" defaultChecked  id="game4" />
                                <span className="slider round"></span>
                                </label>
                            </td>
                            </tr>
                            <tr id="tempTr">
                            <td id="createDate" className="align-L">4</td>
                            <td id="deposit">8</td>
                            <td id="withdraw"><span className="red"><a href="#">Live Casino</a></span></td>
                            <td id="balance">Live Casino <span id="game8status">is ON</span></td>
                            <td onclick="editGames('8')"><label className="switch">
                                <input type="checkbox" id="game8" defaultChecked  />
                                <span className="slider round"></span>
                                </label>
                            </td>
                            </tr>
                            <tr id="tempTr">
                            <td id="createDate" className="align-L">5</td>
                            <td id="deposit">6</td>
                            <td id="withdraw"><span className="red"><a href="#" onclick="goToGames()">AWC Casino</a></span></td>
                            <td id="balance">AWC Casino<span id="game6status">is ON</span></td>
                            <td onclick="editGames('6')"><label className="switch">
                                <input type="checkbox" id="game6" defaultChecked  />
                                <span className="slider round"></span>
                                </label>
                            </td>
                            </tr>
                            <tr id="tempTr">
                            <td id="createDate" className="align-L">5</td>
                            <td id="deposit">7</td>
                            <td id="withdraw"><span className="red"><a href="#" onclick="goToIntGames()">Inter. Casino</a></span></td>
                            <td id="balance">Inter. Casino<span id="game7status">is ON</span></td>
                            <td onclick="editGames('7')"><label className="switch">
                                <input type="checkbox" id="game7" defaultChecked  />
                                <span className="slider round"></span>
                                </label>
                            </td>
                            </tr>
                            <tr id="dwtr" >
                            <td id="createDate" className="align-L">5</td>
                            <td id="deposit">101</td>
                            <td id="withdraw"><span className="red"><a href="#">Deposit/Wtihdraw</a></span></td>
                            <td id="balance">Deposit/Wtihdraw <span id="game101status">is ON</span></td>
                            <td onclick="editGames('101')"><label className="switch">
                                <input type="checkbox" id="game101" defaultChecked  />
                                <span className="slider round"></span>
                                </label>
                            </td>
                            </tr>
                            <tr id="dwtr">
                            <td id="createDate" className="align-L">5</td>
                            <td id="deposit">11</td>
                            <td id="withdraw"><span className="red"><a href="#">SABA</a></span></td>
                            <td id="balance">SABA <span id="game11status">is ON</span></td>
                            <td onclick="editGames('11')"><label className="switch">
                                <input type="checkbox" id="game11" defaultChecked  />
                                <span className="slider round"></span>
                                </label>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
export default BlockMarket;