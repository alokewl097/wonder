import React from "react"; 
// import '../../assets/css/style.css' ;
const MatchProfitLoss = () => {
    return(
        <> 
           <div className="full-wrap" style={{ color: "height(100% - 105px)" }}> 
                <div className="over-wrap"> 
                    <h2>Profit Loss - <span style={{ color: "red" }}>YOU CAN SEE DATA STARTING FROM 25-JUNE-2024</span></h2> 
                    <div className="function-wrap"> 
                        <ul className="input-list">
                            <li><label>Period</label></li>
                            <li>
                            <input id="betsstartDate" className="cal-input" type="date" placeholder="YYYY-MM-DD" min="2024-06-25" />
                            to
                            <input id="betsendDate" className="cal-input" type="date" placeholder="YYYY-MM-DD" min="2024-06-25" />
                            </li>
                            <li><a className="btn-send" onclick="filter()">Apply</a></li>
                            <li><a className="btn">Clear</a></li>
                        </ul>
                    </div>
                    <div className="total_all banking-top">
                        <ul className="input-list">
                            <li><a className="btn-send" onclick="filterSport(4)">Cricket</a></li>
                            <li><a className="btn-send" onclick="filterSport(1)">Soccer</a></li>
                            <li><a className="btn-send" onclick="filterSport(2)">Tennis</a></li>
                        </ul>
                        <div className="search-wrap" style={{ float: "right"}}>
                            <div>
                            <input id="searchMatches" className="search-input" type="text" placeholder="Search..." readonly="readonly" />
                            </div>
                        </div>
                    </div>
                    <table id="matchTable" className="table-s" style={{ display: "table", marginBottom: "2%" }}>
                        <thead>
                            <tr>
                            <th width="4%" className="align-L blk">S.No.</th>
                            <th width="4%" className="align-L blk">Sport Name</th>
                            <th width="10%" className="align-L blk">Match Name
                            </th>
                            <th width="5%" className="align-L blk">Match Date
                            </th>
                            <th width="5%" className="align-L blk">Pnl+</th>
                            <th width="7%" className="align-L blk">Pnl-</th>
                            <th width="7%" className="align-L blk">Commission
                            </th>
                            <th width="4%" className="align-L blk">Final P&amp;L
                            </th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                            <th width="4%" className="align-L"></th>
                            <th width="4%" className="align-L"></th>
                            <th width="10%" className="align-L">Total
                            </th>
                            <th width="5%" className="align-L">
                            </th>
                            <th width="5%" className="align-L red" id="pnlM">-39569.51</th>
                            <th width="7%" className="align-L green" id="pnlP">160508.43</th>
                            <th width="7%" className="align-L green" id="com">0.00</th>
                            <th width="4%" className="align-L green" id="finalPnl">120938.92</th>
                            </tr>
                        </thead>
                        <tbody id="betlistdiv" className="auto-index">
                            <tr>
                            <td className="align-L"></td>
                            <td className="align-L">Cricket</td>
                            <td className="align-L"><a onclick="getCompletedFancy('-10852672')">Hobart Hurricanes SRL v Sydney Thunder SRL</a></td>
                            <td className="align-L">2025-05-30 15:30:00</td>
                            <td className="align-L">0</td>
                            <td className="align-L green">507.75</td>
                            <td className="align-L green">0.00</td>
                            <td className="align-L green">507.75</td>
                            </tr>
                            <tr>
                            <td className="align-L"></td>
                            <td className="align-L">Tennis</td>
                            <td className="align-L"><a onclick="getCompletedFancy('34366051')">Erler/Frantzen v Granollers/Zeballos</a></td>
                            <td className="align-L">2025-05-30 14:28:00</td>
                            <td className="align-L">0</td>
                            <td className="align-L green">36.40</td>
                            <td className="align-L green">0.00</td>
                            <td className="align-L green">36.40</td>
                            </tr>  
                        </tbody>
                    </table>
                    <div className="table-responsive" id="fancyresultdiv" style={{ marginTop: "1%", marginBottom: "2%", width: "100%", display: "none"}}>
                        <table className="table-s" style={{ margin: "0 !important", background: "#fff"}}>
                            <thead>
                            <tr role="row">
                                <th className="align-L" rowspan="1" colspan="1">Title</th>
                                <th className="align-L" rowspan="1" colspan="1">P&amp;L </th>
                                <th className="align-L" rowspan="1" colspan="1">Com+</th>
                                <th className="align-L" rowspan="1" colspan="1">	Com-</th>
                                <th className="align-L" rowspan="1" colspan="1">Won By</th>
                                <th className="align-L" rowspan="1" colspan="1"> Net P&amp;L </th>
                                <th className="align-L" rowspan="1" colspan="1">Action</th>
                            </tr>
                            </thead>
                            <thead>
                            <tr role="row">
                                <th className="align-C">Total</th>
                                <th id="totalPnl" className="align-L">0.00</th>
                                <th id="totalComP" className="green align-L">0.00</th>
                                <th id="totalComN" className="red align-L">0.00</th>
                                <th></th>
                                <th id="totalNet" className="align-L">0.00</th>
                                <th>
                                </th>
                            </tr>
                            </thead>
                            <tbody id="completedFancy"></tbody>
                        </table>
                    </div>
                    <div></div> 
                </div>
            </div>
        </>
    );
};
export default MatchProfitLoss;