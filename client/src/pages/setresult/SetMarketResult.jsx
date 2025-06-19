import React from "react";
import styles from '../../assets/css/function.module.css';
const SetMarketResult = () => {
    return(
        <>
            <div className="main_wrap" style={{height: "calc(100% - 105px)" }}>
                <h2>Market Result</h2>
                {/* <!-- function --> */}
                <div className={`function-wrap ${styles['function-wrap']} ${styles['col-lg-12']}`}>
                    <div className={styles['col-lg-2']}>
                        <label>Select Sport</label>
                        <select className="form-control purp" id="sport">
                            <option> <a href="#">Select Sport</a> </option>
                            <option id="4" value="4" name="Cricket"> Cricket </option>
                            <option id="1" value="1" name="Soccer"> Soccer </option>
                            <option id="2" value="2" name="Tennis"> Tennis </option>
                        </select>
                    </div>
                    <div className={styles['col-lg-2']} id="TypeSelectDiv">
                        <label>Select Match</label>
                        <select className="form-control purp" id="match">
                        </select>
                    </div>
                    <div className={styles['col-lg-2']} id="rangeSelectDiv">
                        <label>Select Market</label>
                        <select className="form-control purp" id="market">
                        </select>
                    </div>
                    <div className={styles['col-lg-2']} id="gapSelectDiv">
                        <label>Select Winner</label>
                        <select className="form-control purp" id="selection">
                        </select>
                    </div>
                    <div className={styles['col-lg-2']}>
                        <button className="btn-send" style={{ width: "80px" }} onclick="requestMatchResult()">Set Result</button>
                    </div>
                </div>
                <div className="total_all banking-top">
                    <ul className="input-list">
                        <li>
                            <label>Sport:</label>
                            <select className="form-control purp" id="sportidResult">
                            <option value="0" selected="">Select</option>
                            <option value="4">Cricket</option>
                            <option value="2">Tennis</option>
                            <option value="1">Soccer</option>
                            </select>
                        </li>
                        <li><label>From </label></li>
                        <li>
                            <input style={{ width: "150px", padding: "6px !important" }} id="betsstartDate" className="cal-input" type="datetime-local" placeholder="YYYY-MM-DD" />
                            to
                            <input style={{ width: "150px", padding: "6px !important" }} id="betsendDate" className="cal-input" type="datetime-local" placeholder="YYYY-MM-DD" />
                        </li>
                        <li><a className="btn-send" onclick="resultList(true)">Search</a></li>
                    </ul>
                    <div className="search-wrap" id="userSearchUl">
                        <div>
                            <input className="search-input" type="text" name="searchUserId" id="searchMatch" placeholder="Search here..." readonly="readonly" />
                        </div>
                    </div>
                </div>
                <div id="widthAll" className="width-all">
                    <table id="resultTable" className="table01 margin-table" style={{ display: "table" }}>
                        <thead>
                            <tr>
                            <th className="align-L">Sport</th>
                            <th className="align-L">Match ID</th>
                            <th className="align-L">Match Name</th>
                            <th className="align-L">Market</th>
                            <th className="align-L">Winner</th>
                            <th className="align-L">IP</th>
                            <th className="align-L">Date</th>
                            <th className="align-L">Action</th>
                            </tr>
                        </thead>
                        <tbody id="oldResult">
                            <tr style={{ display: "table-row" }}>
                            <td className="align-L">Cricket</td>
                            <td className="align-L">34387383</td>
                            <td className="align-L">NaMo Bandra Blasters v Eagle Thane Strikers</td>
                            <td aria-colindex="2" role="cell" className="">Match Odds</td>
                            <td className="align-L">Eagle Thane Strikers</td>
                            <td className="align-L">
                                <div className="text-success"><span>Central Panel</span></div>
                            </td>
                            <td className="align-L">2025-06-05 18:34:51</td>
                            <td className="align-L">
                                <div role="group" style={{ display: "flex" }} className=""><button type="button" onclick="requestMatchRollback(0)" style={{ background: "#dc143c", color: "#fff", width: "80px" }} className="btn-send">Rollback</button>  <button type="button" onclick="requestActiveInactive(0)" style={{ background: "Red", color: "#fff", width: "80px", marginLeft: "5px" }} className="btn-send">Inactive</button></div>
                            </td>
                            </tr>
                            <tr style={{ display: "table-row" }}>
                            <td className="align-L">Tennis</td>
                            <td className="align-L">34382008</td>
                            <td className="align-L">Nagal v Ro Pacheco Mendez</td>
                            <td aria-colindex="2" role="cell" className="">Match Odds</td>
                            <td className="align-L">Rodrigo Pacheco Mendez</td>
                            <td className="align-L">
                                <div className="text-success"><span>AutoMatic</span></div>
                            </td>
                            <td className="align-L">2025-06-05 18:29:35</td>
                            <td className="align-L">
                                <div role="group" style={{ display: "flex" }} className=""><button type="button" onclick="requestMatchRollback(1)" style={{ background: "#dc143c", color: "#fff", width: "80px" }} className="btn-send">Rollback</button>  <button type="button" onclick="requestActiveInactive(1)" style={{ background: "Red", color: "#fff", width: "80px", marginLeft: "5px" }} className="btn-send">Inactive</button></div>
                            </td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default SetMarketResult;