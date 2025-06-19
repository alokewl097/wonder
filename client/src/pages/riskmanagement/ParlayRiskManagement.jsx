import React from "react";

const ParlayRiskManagement = () => {
    return(
        <>
        <div className="main_wrap">
            <div className="total_all">
                <h2>Parlay Risk Management Summary
                </h2>
                <a className="btn_replay" href="" id="refresh_Top_Racing"><i className="fas fa-redo-alt"></i></a>
            </div>
            <div className="play_race-wrap">
            <div className="function-wrap">
    
                <ul className="input-list">
                    <li><a id="cricket" className="btn-send">Parlay</a></li>
                </ul>
            </div>
                <div className="top_player-wrap">
                    <h3>
                        <ul className="tab-topplay d-flex">
                            <li id="top10totalFancyStake" className="top10 select"><a onclick="getTopTenClients('totalFancyStake')">Top 20 Matched Amount Player</a></li>
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
                                <tbody id="content_top_1_5"><tr id="tempTr_top"><td className="align-L"><span className="order" id="number">1</span><a onclick="openBetHistory('shurjo31m')" id="userId">shurjo31m</a></td><td id="exposure"><span className="red">(3.00)</span></td><td id="amount">3.00</td></tr></tbody>
                            </table>
                        </div>
                        <div className="col-2">
                            <ul className="slip-head">
                                <li className="col-playID">UID</li>
                                <li className="col-exp">Exposure</li>
                                <li className="col-amount sort-this">Matched Amount</li>
                            </ul>
                            <table className="table01">
                                <tbody id="content_top_6_10"></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="match-wrap">
                <div className="total_all">
                    <h2>Parlay List</h2>
                    <a className="btn_replay" onclick="getRiskManagement()" id="refresh_Match_Odds"><i className="fas fa-redo-alt"></i></a>
                </div>
                <table className="table01 risk_matchodd">
                    <tbody>
                        <tr>
                            <th width="10%" className="align-L" rowspan="2">Parlay Id</th>
                            <th width="20%" className="align-L" rowspan="2">Date</th>
                            <th className="align-L" rowspan="2">User Id</th>
                            <th width="21%" className="align-C border-l bg-yellow" colspan="2">Player P/L</th> 
                            <th width="7%" className="align-C border-l bg-yellow" rowspan="2">Action</th>
                        </tr>
                        <tr>
                            <th width="7%" className="bg-yellow sky-align">Exposure</th>
                            <th width="7%" className="bg-yellow sky-align">Odds</th>
                        </tr>

                    </tbody>
                    <tbody id="matchOddsListTest"><tr><td className="border-l"><a><span className="">1747771582187</span></a></td><td className="border-l align-L"><a><span className="">2025-05-21 01:00:00</span></a></td><td className="border-l align-L"><a><span className="">shurjo31m</span></a></td><td className="border-l"><a><span className="red">1</span></a></td><td className="border-l"><a><span className="red">4.17</span></a></td><td className="border-l"><a onclick="showBets('1747771582187')" className="btn" id="view">View</a></td></tr><tr><td className="border-l"><a><span className="">1747067301890</span></a></td><td className="border-l align-L"><a><span className="">2025-05-12 21:30:00</span></a></td><td className="border-l align-L"><a><span className="">shurjo31m</span></a></td><td className="border-l"><a><span className="red">1</span></a></td><td className="border-l"><a><span className="red">1.9</span></a></td><td className="border-l"><a onclick="showBets('1747067301890')" className="btn" id="view">View</a></td></tr><tr><td className="border-l"><a><span className="">1747771364571</span></a></td><td className="border-l align-L"><a><span className="">2025-05-21 00:30:00</span></a></td><td className="border-l align-L"><a><span className="">shurjo31m</span></a></td><td className="border-l"><a><span className="red">1</span></a></td><td className="border-l"><a><span className="red">4.12</span></a></td><td className="border-l"><a onclick="showBets('1747771364571')" className="btn" id="view">View</a></td></tr></tbody>
                </table>
            </div>
        </div>
        </>
    );
};
export default ParlayRiskManagement;