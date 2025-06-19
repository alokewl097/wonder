import React from "react";
import { Link } from "react-router-dom";
const SportSettings = () => {
    return(
        <>
            <div className="main_wrap" style={{ height: "calc(100% - 105px)" }}>
                <h2>Sport Settings</h2>
                {/* <!-- function --> */}
                <div className="function-wrap">
                    <ul className="input-list">
                        <li><a id="cricket" onclick="getActiveMatchList(4)" className="btn-send">Cricket</a></li>
                        <li><a id="tennis" onclick="getActiveMatchList(2)" className="btn">Tennis</a></li>
                        <li><a id="soccer" onclick="getActiveMatchList(1)" className="btn">Soccer</a></li>
                    </ul>
                </div>
                <div id="games" className="width-all">
                    <table id="resultTable" className="table01 margin-table" style={{ display: "table" }}>
                        <thead>
                            <tr>
                            <th id="accountTh" width="10%" className="align-L">Match ID</th>
                            <th id="creditRefTh" width="10%">Match Name</th>
                            <th id="balanceTh" width="10%">Market ID</th>
                            <th id="balanceh" width="10%">Cup Winner</th>
                            <th id="exposureTh" width="10%">Open Date</th>
                            <th id="exposureTh" width="10%">Priority No.</th>
                            <th id="actionTh" width="15%">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="1" style={{ display: "table-row" }} main_userid="butler22">
                            <td id="accountCol" className="align-L">-10856007</td>
                            <td id="creditRef1" className="credit-amount-member">Satara Warriors v Raigad Royals</td>
                            <td id="balance1">-10856053</td>
                            <td id="" style={{ display: "-webkit-inline-box" }}> -- </td>
                            <td id="currentExposure1">2025-06-05 14:00:00</td>
                            <td id="currentExposure1"></td>
                            <td id="" style={{ display: "-webkit-inline-box" }}>
                                <Link id="getPL" to="/MinMaxBet" className="btn-send" style={{ width: "120px", marginRight: "1px" }}>Set Limit</Link>
                                <a onclick="setPriority(`-10856007`,'',4)" className="btn-send" style={{ width: "120px", marginRight: "1px" }}>Set Priority</a>
                                <Link id="getPL" to="/BookmakerSetting" className="btn-send" style={{ width: "120px", marginRight: "1px" }}>Set Bookmaker</Link>
                                <Link id="getPL" to="/ManuplationSetting" className="btn-send" style={{ width: "120px", marginRight: "1px" }}>Manuplation</Link>
                                <a title="Set Cup Winner" onclick="AddTitle(`-10856007` , `Satara Warriors v Raigad Royals`)" className="btn-send" style={{ width: "120px", marginRight: "1px" }}>S.C.W</a>
                            </td>
                            </tr>  
                            <tr id="1" style={{ display: "table-row" }} main_userid="butler22">
                            <td id="accountCol" className="align-L">34387484</td>
                            <td id="creditRef1" className="credit-amount-member">Mumbai North East Triumph Kn v Msc Maratha Royals</td>
                            <td id="balance1">1.244528937</td>
                            <td id="" style={{ display: "-webkit-inline-box" }}> -- </td>
                            <td id="currentExposure1">2025-06-05 19:30:00</td>
                            <td id="currentExposure1"></td>
                            <td id="" style={{ display: "-webkit-inline-box" }}>
                                <Link id="getPL" to="/MinMaxBet" className="btn-send" style={{ width: "120px", marginRight: "1px" }}>Set Limit</Link>
                                <a onclick="setPriority(`34387484`,'',4)" className="btn-send" style={{ width: "120px", marginRight: "1px" }}>Set Priority</a>
                                <Link id="getPL" to="/BookmakerSetting" className="btn-send" style={{ width: "120px", marginRight: "1px" }}>Set Bookmaker</Link>
                                <Link id="getPL" to="/ManuplationSetting" className="btn-send" style={{ width: "120px", marginRight: "1px" }}>Manuplation</Link>
                                <a title="Set Cup Winner" onclick="AddTitle(`34387484` , `Mumbai North East Triumph Kn v Msc Maratha Royals`)" className="btn-send" style={{ width: "120px", marginRight: "1px" }}>S.C.W</a>
                            </td>
                            </tr>   
                            <tr id="1" style={{ display: "table-row" }} main_userid="butler22">
                            <td id="accountCol" className="align-L">-10855807</td>
                            <td id="creditRef1" className="credit-amount-member">Antigua And Barbuda Falcons SRL T20 v Barbados Royals SRL T20</td>
                            <td id="balance1">-10855853</td>
                            <td id="" style={{ display: "-webkit-inline-box" }}> -- </td>
                            <td id="currentExposure1">2025-06-05 23:30:00</td>
                            <td id="currentExposure1"></td>
                            <td id="" style={{ display: "-webkit-inline-box" }}>
                                <Link id="getPL" to="/MinMaxBet" className="btn-send" style={{ width: "120px", marginRight: "1px" }}>Set Limit</Link>
                                <a onclick="setPriority(`-10855807`,'',4)" className="btn-send" style={{ width: "120px", marginRight: "1px" }}>Set Priority</a>
                                <Link id="getPL" to="/BookmakerSetting" className="btn-send" style={{ width: "120px", marginRight: "1px" }}>Set Bookmaker</Link>
                                <Link id="getPL" to="/ManuplationSetting" className="btn-send" style={{ width: "120px", marginRight: "1px" }}>Manuplation</Link>
                                <a title="Set Cup Winner" onclick="AddTitle(`-10855807` , `Antigua And Barbuda Falcons SRL T20 v Barbados Royals SRL T20`)" className="btn-send" style={{ width: "120px", marginRight: "1px" }}>S.C.W</a>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default SportSettings;