import React from "react"; 
const ProfitMarket = () => {
    return(
        <> 
            <div className="main_wrap" style={{ height: "calc(100% - 105px)"}}> 
                <h2>Profit/Loss Report by Downline - <span style={{ color: "red" }}>YOU CAN SEE DATA STARTING FROM 25-JUNE-2024</span></h2>
                <lable className="data-l">Data source :</lable>
                <select id="dataSource" name="dataSource">
                    <option value="db">DB</option>
                    <option value="elk">ELK</option>
                </select>
                <div className="function-wrap">
                    <ul className="input-list"> 
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
                            to
                            <input id="endDate" className="cal-input" type="date" placeholder="YYYY-MM-DD" /> 
                        </li>
                    </ul>
                    <ul className="input-list">
                        <li><a id="today" onclick="changeDate('today')" className="btn">Just For Today</a></li>
                        <li><a id="yesterday" onclick="changeDate('yesterday')" className="btn">From Yesterday</a></li>
                        <li><a id="getPL" onclick="changeDate('all')" className="btn-send">Get P &amp; L</a></li>
                    </ul>
                </div> 
                <table id="table_DL" className="table01 table-pt">
                    <tbody>
                        <tr id="head">
                            <th id="" width="" className="align-L">Website</th>
                            <th id="header_eventName" width="" className="align-L">UID</th>
                            <th className="">Sports PL</th>
                            <th id="header_profitLoss_downLine" className="">Casino P/L</th>
                            <th id="header_profitLoss_downLine" className="">Saba P/L</th>
                            <th id="header_tax_agent_1" className=""> Comm.</th>
                            <th className="">Total P/L</th>
                        </tr>
                    </tbody>
                    <tbody id="content">
                        <tr id="">
                            <td className="align-L">baajiwala.live</td>
                            <td className="align-L"><a href="javascript:void(0);"></a><a href="javascript:void(0);" className="ico_account" onclick="getPlDataByuser(0)"><span className="lv_2">SUA</span>level1</a></td>
                            <td id="_profitLoss"><span className="green">100531.07</span></td>
                            <td id="_profitLoss"><span className="green">33105.70</span></td>
                            <td id="_profitLoss"><span className="green">0.00</span></td>
                            <td id="_profitLoss"><span className="green">0.00</span></td>
                            <td id="_profitLoss"><span className="green">133636.77</span></td>
                        </tr>
                        <tr style={{ display: "contents"}} id="level1"></tr>
                        <tr id="tempTotalTr" className="total">
                            <td className="align-L"></td>
                            <td className="align-L">Total</td>
                            <td id="_totalProfitLossDownLine"><span className="green">100531.07</span></td>
                            <td id="_totalProfitLoss"><span className="green">33105.70</span></td>
                            <td id="_totalProfitLoss"><span className="green">0.00</span></td>
                            <td id="_totalProfitLossDownLine"><span className="green">0.00</span></td>
                            <td id="_totalProfitLossDownLine"><span className="green">133636.77</span></td>
                        </tr>
                    </tbody>
                </table> 
            </div>
        </>
    );
};
export default ProfitMarket;