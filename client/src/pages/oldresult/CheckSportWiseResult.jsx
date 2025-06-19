import React from "react";
const CheckSportWiseResult = () => {
    return(
        <>
        <div class="full-wrap" style={{ height: "calc(100% - 105px)" }}>
            {/* <!-- Center Column --> */}
            <div class="over-wrap">
                <h2>Check Result</h2>
                <div class="function-wrap">
                    <ul class="input-list">
                        <li><label>Period</label></li>
                        <li>
                        <input style={{ width:"150px", padding: "6px !important" }} id="betsstartDate" class="cal-input" type="datetime-local" placeholder="YYYY-MM-DD" />
                        to
                        <input style={{ width:"150px", padding: "6px !important" }} id="betsendDate" class="cal-input" type="datetime-local" placeholder="YYYY-MM-DD" />
                        </li> 
                        <li><a class="btn-send" onclick="resultList(4)">Cricket</a></li>
                        <li><a class="btn-send" onclick="resultList(1)">Soccer</a></li>
                        <li><a class="btn-send" onclick="resultList(2)">Tennis</a></li>
                        <li><a class="btn-send" href="/Acheckvt10result">Virtual T10</a></li>
                    </ul>
                </div>
                <div class="total_all banking-top">
                    <ul class="input-list"> 
                    </ul>
                    <div class="search-wrap" style={{ float: "right" }}>
                        <div>
                        <input id="searchMatches" class="search-input" type="text" placeholder="Search..." readonly="readonly" />
                        </div>
                    </div>
                </div> 
                <table id="matchTable" class="table-s" style={{ display: "table", marginBottom: "2%"}}>
                    <thead>
                        <tr>
                        <th width="4%" class="align-L blk">S.No.</th>
                        <th width="4%" class="align-L blk">Sport</th>
                        <th width="5%" class="align-L blk">Match Date</th>
                        <th width="10%" class="align-L blk">Match Name</th>
                        <th width="5%" class="align-L blk">Winner</th>
                        </tr>
                    </thead>
                    <tbody id="oldResult" class="auto-index">
                        <tr>
                        <td class="align-L"></td>
                        <td class="align-L">Cricket</td>
                        <td class="align-L">2025-06-05 19:51:07</td>
                        <td class="align-L">Rwanda Women v Malawi Women - (-10856050)</td>
                        <td class="align-L">Rwanda Women</td>
                        </tr>
                        <tr>
                        <td class="align-L"></td>
                        <td class="align-L">Cricket</td>
                        <td class="align-L">2025-06-05 19:36:23</td>
                        <td class="align-L">Brisbane Heat SRL T20 v Sydney Thunder SRL T20 - (-10855802)</td>
                        <td class="align-L">Sydney Thunder SRL T20</td>
                        </tr> 
                    </tbody>
                </table> 
            </div>
        </div>
        </>
    )
}
export default CheckSportWiseResult