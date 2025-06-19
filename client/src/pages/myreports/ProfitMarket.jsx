import React from "react";  
const ProfitMarket = () => {
    return(
        <> 
            <div className="main_wrap" style={{ height: "calc(100% - 105px)"}}> 
                <h2>Profit/Loss Report by Market  
                </h2>
                <lable className="data-l">Data source :</lable>
                <select id="dataSource" name="dataSource">
                    <option value="db">DB</option>
                    <option value="elk">ELK</option>
                </select>
                <div className="function-wrap">
                    <ul className="input-list">
                        <div id="statusCondition" style={{ display: "none" }}>
                            <li><label>Bet Status:</label></li>
                            <li>
                            <select name="betStatus" id="betStatus">
                            </select>
                            </li>
                        </div>
                        <li><label>Sports</label></li>
                        <li>
                            <select id="func_sports"> 
                            <option value="4">CRICKET OODS</option>
                            <option value="Book">CRICKET BOOKMAKER</option>
                            <option value="Fancy">CRICKET FANCY</option>
                            <option value="Fancy1">CRICKET FANCY1</option>
                            <option value="PremiumC">CRICKET PREMIUM</option>
                            <option value="OtherC">CRICKET OTHER</option>
                            <option value="Toss" selected="selected">Toss</option>
                            <option value="2">TENNIS OODS</option>
                            <option value="PremiumT">TENNIS PREMIUM</option>
                            <option value="OtherT">TENNIS OTHER</option>
                            <option value="1">SOCCER OODS</option>
                            <option value="PremiumS">SOCCER PREMIUM</option>
                            <option value="OtherS">SOCCER OTHER</option>
                            <option value="2378962">ELECTION FANCY</option>
                            <option value="138">KABADDI</option>
                            <option value="-100">BINARY</option>
                            </select>
                        </li>
                        <li><label>Time Zone</label></li>
                        <li>
                            <select name="timezone" id="timezone">
                            <option value="Pacific/Midway">Pacific/Midway(GMT-11:00)</option>
                            <option value="Pacific/Honolulu">Pacific/Honolulu(GMT-10:00)</option>
                            <option value="America/Juneau">America/Juneau(GMT-9:00)</option>
                            <option value="America/Los_Angeles">America/Los_Angeles(GMT-8:00)</option>
                            <option value="America/Phoenix">America/Phoenix(GMT-7:00)</option>
                            <option value="America/Chicago">America/Chicago(GMT-6:00)</option>
                            <option value="America/New_York">America/New_York(GMT-5:00)</option>
                            <option value="America/Santiago">America/Santiago(GMT-4:00)</option>
                            <option value="America/Sao_Paulo">America/Sao_Paulo(GMT-3:00)</option>
                            <option value="Atlantic/South_Georgia">Atlantic/South_Georgia(GMT-2:00)</option>
                            <option value="Atlantic/Azores">Atlantic/Azores(GMT-1:00)</option>
                            <option value="Europe/London">Europe/London(GMT+0:00)</option>
                            <option value="Europe/Paris">Europe/Paris(GMT+1:00)</option>
                            <option value="Africa/Cairo">Africa/Cairo(GMT+2:00)</option>
                            <option value="Asia/Qatar">Asia/Qatar(GMT+3:00)</option>
                            <option value="Asia/Dubai">Asia/Dubai(GMT+4:00)</option>
                            <option value="Asia/Karachi">Asia/Karachi(GMT+5:00)</option>
                            <option value="IST" selected="selected">IST(Bangalore / Bombay / New Delhi) (GMT+5:30)</option>
                            <option value="Asia/Kathmandu">Asia/Kathmandu(GMT+5:45)</option>
                            <option value="Asia/Dhaka">Asia/Dhaka(GMT+6:00)</option>
                            <option value="Asia/Bangkok">Asia/Bangkok(GMT+7:00)</option>
                            <option value="Asia/Hong_Kong">Asia/Hong_Kong(GMT+8:00)</option>
                            <option value="Asia/Tokyo">Asia/Tokyo(GMT+9:00)</option>
                            <option value="Australia/Adelaide">Australia/Adelaide(GMT+9:30)</option>
                            <option value="Australia/Melbourne">Australia/Melbourne(GMT+10:00)</option>
                            <option value="Asia/Magadan">Asia/Magadan(GMT+11:00)</option>
                            <option value="Pacific/Fiji">Pacific/Fiji(GMT+12:00)</option>
                            </select>
                        </li>
                        <li></li>
                        <li><label>Period</label></li>
                        <li>
                            <input id="startDate" className="cal-input" type="date" placeholder="YYYY-MM-DD" />
                            <input id="startTime" className="time-input " type="text" placeholder="09:00" maxlength="8" style={{ width: "15%" }} readonly="readonly" />
                            to
                            <input id="endDate" className="cal-input" type="date" placeholder="YYYY-MM-DD" />
                            <input id="endTime" className="time-input " type="text" placeholder="08:59" maxlength="8" style={{ width: "15%" }} readonly="readonly" />
                        </li>
                    </ul>
                    <ul className="input-list">
                        <li><a id="today" onclick="changeDate('today')" className="btn">Just For Today</a></li>
                        <li><a id="yesterday" onclick="changeDate('yesterday')" className="btn">From Yesterday</a></li>
                        <li><a id="getPL" onclick="changeDate('all')" className="btn-send">Get P &amp; L</a></li>
                    </ul>
                </div>
                <div id="reportDiv" className="over-wrap" style={{ maxHeight: "calc(100% - 32px - 93px)" }}>
                    <table id="table_DL" className="table01 table-pt">
                        <tbody>
                            <tr id="head">
                            <th id="header_eventName" width="" className="align-L">UID</th>
                            <th className="">Stake</th>
                            <th id="header_profitLoss_downLine" className="">Downline P/L</th>
                            <th className="">Player P/L</th>
                            <th id="header_tax_agent_1" className=""> Comm.</th>
                            <th className="">Upline P/L</th>
                            </tr>
                        </tbody>
                        <tbody id="content">
                            <tr id="">
                            <td className="align-L" onclick="loadMore(0)"><a id="click34359951_Toss" href="javascript:void(0);" className="expand-close"></a><a href="javascript:void(0);"><span id="_eventType">Toss</span><img className="fromto" src="/assets/images/transparent.gif" /><strong id="_eventName">England v West Indies</strong></a></td>
                            <td id="_profitLoss"><span className="">19</span></td>
                            <td id="_profitLoss"><span className="red"> ( -83.55 )</span></td>
                            <td id="_profitLoss"><span className="green">83.55</span></td>
                            <td id="_profitLoss"><span className="green">0</span></td>
                            <td id="_profitLoss"><span className="red"> ( -83.55 )</span></td>
                            </tr>
                            <tr id="34359951_Tossnwtr" className="expand first last"></tr>
                            <tr id="">
                            <td className="align-L" onclick="loadMore(1)"><a id="click34364444_Toss" href="javascript:void(0);" className="expand-close"></a><a href="javascript:void(0);"><span id="_eventType">Toss</span><img className="fromto" src="/assets/images/transparent.gif" /><strong id="_eventName">Punjab Kings v Royal Challengers Bengaluru</strong></a></td>
                            <td id="_profitLoss"><span className="">129</span></td>
                            <td id="_profitLoss"><span className="green">143.85</span></td>
                            <td id="_profitLoss"><span className="red"> ( -143.85 )</span></td>
                            <td id="_profitLoss"><span className="green">0</span></td>
                            <td id="_profitLoss"><span className="green">143.85</span></td>
                            </tr>
                            <tr id="34364444_Tossnwtr" className="expand first last"></tr>
                            <tr id="tempTotalTr" className="total">
                            <td className="align-L">Total</td>
                            <td id="_totalProfitLoss"><span className="">148</span></td>
                            <td id="_totalProfitLossDownLine"><span className="green">60.30</span></td>
                            <td id="_totalProfitLoss"><span className="red"> ( -60.30 ) </span></td>
                            <td id="_totalProfitLossDownLine"><span className="green">0.00</span></td>
                            <td id="_totalProfitLossDownLine"><span className="green">60.30</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
            </div>
        </>
    );
};
export default ProfitMarket;