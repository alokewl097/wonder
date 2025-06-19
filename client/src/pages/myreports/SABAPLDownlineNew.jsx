import React from "react"; 
// import '../../assets/css/style.css' ;
const SABAPLDownlineNew = () => {
    return(
        <> 
            <div className="main_wrap" style={{ height: "calc(100% - 105px)"}}>
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
                            <option value="11">SABA Sports</option>
                            <option value="1">Vgaming</option>
                            <option value="2">Lottery</option>
                            <option value="3">RNG Keno</option>
                            <option value="4">Virtual Sports 3</option>
                            <option value="5">Saba Virtual Sports</option>
                            <option value="6">Virtual Sports 2</option>
                            <option value="7">Number Game</option>
                            <option value="8">SportsBook</option>
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
                <div className="total_all" id="userTreeDiv" style={{ display: "block" }}>
                    <ul style={{ display: "none" }}>
                        <li id="tempTree" className=""><a><span className="lv_1"></span></a></li>
                        <li id="tempCurrencyTree" className="currency_tag"><strong></strong></li>
                    </ul>
                    {/* <!-- <div id="treePath" className="agent_path">
                        <ul className="agent_path-L" id="userTree"><li id="tempTree" className="last_li"><a><span className="lv_1">SS</span>skyexhinr454</a></li></ul>
                        </div> --> */}
                    <div id="expandAllDiv" style={{ display: "none" }}>
                        <a id="showDetail" href="#" className="btn_expand">Expand All</a>
                    </div>
                </div>
                <table id="table_DL" className="table01 table-pt">
                    <tbody>
                        <tr id="head">
                            <th id="header_eventName" width="" className="align-L">Website</th>
                            <th id="header_eventName" width="" className="align-L">UID</th>
                            <th id="header_profitLoss_downLine" className="">Vgamin P/L</th>
                            <th id="header_profitLoss_downLine" className="">Lottery P/L</th>
                            <th id="header_profitLoss_downLine" className="">RNG Keno P/L</th>
                            <th id="header_profitLoss_downLine" className="">Virtual Sports 3 P/L</th>
                            <th id="header_profitLoss_downLine" className="">Saba Virtual Sports P/L</th>
                            <th id="header_profitLoss_downLine" className="">Virtual Sports 2 P/L</th>
                            <th id="header_profitLoss_downLine" className="">Number Game P/L</th>
                            <th id="header_profitLoss_downLine" className="">SportsBook P/L</th>
                            <th id="header_tax_agent_1" className=""> Comm.</th>
                            <th className="">Total P/L</th>
                        </tr>
                    </tbody>
                    <tbody id="content"></tbody>
                </table>
            </div>
        </>
    );
};
export default SABAPLDownlineNew;