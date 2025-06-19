import React from "react"; 
// import '../../assets/css/style.css' ;
const ShowProviderPL = () => {
    return(
        <> 
            <div class="full-wrap" style={{ height: "calc(100% - 105px)"}}>
                <h2 style={{ fontWeight: "bold",fontSize: "20px",color: "red"}}>Provider PL  - <span style={{ fontWeight: "bold",fontSize: "18px",color: "red"}}>Green Amount Means Company is in Plus - Starting From 24-AUG-2024</span></h2>
                <div class="total_all banking-top">
                    <ul class="input-list">
                        <li><label>Type</label></li>
                        <li>
                            <select name="sports" id="typePl">
                            <option value="0">All</option>
                            <option value="7">Inter. Casino</option>
                            <option value="6">AWC Casino</option>
                            </select>
                        </li>
                        <li><label>Period</label></li>
                        <li>
                            <input id="startDate" class="cal-input" type="date" placeholder="YYYY-MM-DD" />
                            <input id="startTime" style={{ display: "none" }} class="time-input " type="text" placeholder="09:00" maxlength="8" readonly="readonly" />
                            to
                            <input id="endDate" class="cal-input" type="date" placeholder="YYYY-MM-DD" />
                            <input id="endTime" style={{ display: "none" }} class="time-input " type="text" placeholder="08:59" maxlength="8" readonly="readonly" />
                        </li>
                    </ul>
                    <ul class="input-list" style={{ marginBottom: "10px" }}>
                        <li><a id="getPL" onclick="getPL()" class="btn-send">Get P &amp; L</a></li>
                        <li id="backBtn" style={{ display: "none" }}><a onclick="showFirst()" class="btn-send">Back</a></li>
                    </ul>
                    <ul class="input-list" id="companySearchUl">
                    </ul>
                    <table id="" class="table01" style={{ fontSize: "20px",marginTop: "5px" }}>
                        <tbody>
                            <tr>
                            <th class="align-L" id="th1"><span>Page Total -: </span><span id="totalPL" style={{ color: "green" }}>46978.01</span></th>
                            <th class="align-L" id="th2" style={{ display: "none" }}><span>Page Total -: </span><span id="totalPL1" style={{ color: "green" }}>16887.15</span></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <table id="table_log" class="table01"  style={{ fontWeight: "bold" }}>
                    <tbody>
                        <tr>
                            <th width="15%" class="align-L">Company</th>
                            <th width="15%" class="align-L">Provider</th>
                            <th width="15%" class="align-L">Type</th>
                            <th width="15%" class="align-L">PL</th>
                            <th width="16%" class="align-L">Action</th>
                        </tr>
                    </tbody>
                    <tbody id="games">
                        <tr>
                            <td class="align-L">INT.</td>
                            <td class="align-L">evo</td>
                            <td class="align-L">LIVE</td>
                            <td  style={{ color: "green" }} class="align-L">16887.15</td>
                            <td><a class="btn-send"  style={{ width: "120px", marginRight: "1px" }} onclick="getDetails(0)">Get Details</a></td>
                        </tr>
                        <tr>
                            <td class="align-L">AWC</td>
                            <td class="align-L">KM</td>
                            <td class="align-L">TABLE</td>
                            <td  style={{ color: "green" }} class="align-L">8471.25</td>
                            <td><a class="btn-send"  style={{ width: "120px", marginRight: "1px" }} onclick="getDetails(1)">Get Details</a></td>
                        </tr>
                        <tr>
                            <td class="align-L">INT.</td>
                            <td class="align-L">sbe</td>
                            <td class="align-L">LIVE</td>
                            <td  style={{ color: "green" }} class="align-L">4821.30</td>
                            <td><a class="btn-send"  style={{ width: "120px", marginRight: "1px" }} onclick="getDetails(2)">Get Details</a></td>
                        </tr> 
                    </tbody>
                </table>
                <table id="table_details" class="table01" style={{ fontWeight: "bold", display: "none" }}>
                    <tbody>
                        <tr>
                            <th width="15%" class="align-L">Company</th>
                            <th width="15%" class="align-L">Provider</th>
                            <th width="15%" class="align-L">Type</th>
                            <th width="15%" class="align-L">Tabel Id</th>
                            <th width="15%" class="align-L">Tabel Name</th>
                            <th width="15%" class="align-L">PL</th>
                        </tr>
                    </tbody>
                    <tbody id="games2">
                        <tr>
                            <td class="align-L">INT.</td>
                            <td class="align-L">evo</td>
                            <td class="align-L">LIVE</td>
                            <td class="align-L">evo_imperialquest</td>
                            <td class="align-L">evo_imperialquest</td>
                            <td  style={{ color: "green" }} class="align-L">4090.40</td>
                        </tr>
                        <tr>
                            <td class="align-L">INT.</td>
                            <td class="align-L">evo</td>
                            <td class="align-L">LIVE</td>
                            <td class="align-L">evo_lightning_roulette</td>
                            <td class="align-L">evo_lightning_roulette</td>
                            <td  style={{ color: "green" }} class="align-L">2525.70</td>
                        </tr>
                        <tr>
                            <td class="align-L">INT.</td>
                            <td class="align-L">evo</td>
                            <td class="align-L">LIVE</td>
                            <td class="align-L">evo_supersicbo</td>
                            <td class="align-L">evo_supersicbo</td>
                            <td  style={{ color: "green" }} class="align-L">1896.70</td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </>
    );
};
export default ShowProviderPL;