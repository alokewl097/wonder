import React from "react"; 
// import '../../assets/css/style.css' ;
const ParlayPLDownLine = () => {
    return(
        <> 
            <div className="main_wrap" style={{ height: "calc(100% - 105px)" }}>
                <h2>Profit/Loss Report by Downline</h2>
                <lable className="data-l">Data source :</lable>
                <select id="dataSource" name="dataSource">
                    <option value="db">DB</option>
                    <option value="elk">ELK</option>
                </select>
                {/* <!-- function --> */}
                <div className="function-wrap">
                    <ul className="input-list">
                        <li><label>Type</label></li>
                        <li>
                            <select name="sports" id="sports">
                                <option value="0">All</option>
                            </select>
                        </li>
                        <li></li>
                        <li><label>Period</label></li>
                        <li>
                            <input id="startDate" className="cal-input" type="date" placeholder="YYYY-MM-DD" />
                            <input id="startTime"  style={{ display: "none" }} className="time-input " type="text" placeholder="09:00"
                                maxlength="8" readonly="readonly"/>
                            to
                            <input id="endDate" className="cal-input" type="date" placeholder="YYYY-MM-DD" />
                            <input id="endTime"  style={{ display: "none" }} className="time-input " type="text" placeholder="08:59"
                                maxlength="8" readonly="readonly" />
                        </li>
                    </ul>
                    <ul className="input-list">
                        <li><a id="today" onclick="changeDate('today')" className="btn">Just For Today</a></li>
                        <li><a id="yesterday" onclick="changeDate('yesterday')" className="btn">From Yesterday</a>
                        </li>
                        <li><a id="getPL" onclick="changeDate('all')" className="btn-send">Get P &amp; L</a></li>
                    </ul>
                </div>
                <div className="total_all" id="userTreeDiv"  style={{ display: "block" }}>
                    <ul  style={{ display: "none" }}>
                        <li id="tempTree" className=""><a><span className="lv_1"></span></a></li>
                        <li id="tempCurrencyTree" className="currency_tag"><strong></strong></li>
                    </ul>
                    {/* <!-- <div id="treePath" className="agent_path">
                    <ul className="agent_path-L" id="userTree"><li id="tempTree" className="last_li"><a><span className="lv_1">SS</span>skyexhinr454</a></li></ul>
                    </div> --> */}
                    <div id="expandAllDiv"  style={{ display: "none" }}>
                        <a id="showDetail" href="#" className="btn_expand">Expand All</a>
                    </div>
                </div>
                <table id="table_DL" className="table01 table-pt">
                    <tbody>
                        <tr id="head">
                            <th id="header_eventName" width="" className="align-L">UID</th>
                            <th id="header_profitLoss_downLine" className="">Parlay P/L</th>
                            <th id="header_tax_agent_1" className=""> Comm.</th>
                            <th className="">Total P/L</th>
                        </tr>
                    </tbody>
                    <tbody id="content">
                        <tr id="">
                            <td className="align-L"><a href="javascript:void(0);"></a><a href="javascript:void(0);" className="ico_account" onclick="getPlDataByuser(0)"><span className="lv_2">SUA</span>satest</a></td>
                            <td id="_profitLoss"><span className="green">1.00</span></td>
                            <td id="_profitLoss"><span className="green">0</span></td>
                            <td id="_profitLoss"><span className="green">1.00</span></td>
                        </tr>
                        <tr style={{ diaplay: "contents" }} id="satest"></tr>
                        <tr id="">
                            <td className="align-L"><a href="javascript:void(0);"></a><a href="javascript:void(0);" className="ico_account" onclick="getPlDataByuser(1)"><span className="lv_2">SUA</span>level1</a></td>
                            <td id="_profitLoss"><span className="red"> ( -557.73 )</span></td>
                            <td id="_profitLoss"><span className="green">0</span></td>
                            <td id="_profitLoss"><span className="red"> ( -557.73 )</span></td>
                        </tr>
                        <tr style={{ diaplay: "contents" }} id="level1"></tr>
                        <tr id="tempTotalTr" className="total">
                            <td className="align-L">Total</td>
                            <td id="_totalProfitLoss"><span className="red"> ( -556.73 ) </span></td>
                            <td id="_totalProfitLossDownLine"><span className="green">0.00</span></td>
                            <td id="_totalProfitLossDownLine"><span className="red"> ( -556.73 )</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};
export default ParlayPLDownLine;