import React from "react";  
const CasinoRiskManagement = () => {
     return( 
        <> 
        <div className="full-wrap" style={{ height: "calc(100% - 105px)" }}>
                <h2>Casino Risk Management</h2>
                <div className="total_all banking-top">
                    <div className="search-wrap" id="userSearchUl">
                        <div>
                            <input className="search-input" type="text" name="searchUserId" id="userId" placeholder="Enter userId..." readonly="readonly" />
                            <input className="search-input" type="number" name="amount" id="amt" placeholder="Enter Amount" />   
                        </div>
                    </div>
                    <ul className="input-list" id="companySearchUl">
                        <li className="bank-li" onclick="getList()">
                            <a className="btn-send banking-btn" id="searchKey">Search</a>
                        </li>
                        <li className="bank-li" onclick="exportReportToExcel()">                    
                            <a className="btn-send" style={{ background: "teal",color: "#fff",float:"right"}}>Export Excel</a>
                        </li>
                    </ul>
                </div>
                <div className="topDiv">
                    <table id="table_transfer" className="table-s">
                        <tbody>
                            <tr>
                            <th className="align-L">S No.</th>
                            <th className="align-L">UserId</th>
                            <th className="align-L">UserName</th>
                            <th className="align-L">SourceId</th>
                            <th className="align-L">Time</th>
                            <th className="align-L">Game Code</th>
                            <th className="align-L">Game Name</th>
                            <th className="align-L">Market Name</th>
                            <th className="align-L">Transaction Id</th>
                            <th className="align-L">Stake</th>
                            <th className="align-L">PL</th>
                            </tr>
                        </tbody>
                    </table>
                    <div className="report_over-wrap" style={{ maxHeight: "calc(100% - 208px)"}}>
                        <table id="table_transfer" className="table-s">
                            <tbody id="userData">
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="paginationList">
                    <ul id="pageNumberContent" className="pages">
                    </ul>
                </div>
            </div>
        </>
     );
};
export default CasinoRiskManagement;