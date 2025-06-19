import React from "react";
import { Link } from "react-router-dom";
const AddMatch = () => {
    return(
        <>
        <div class="full-wrap" style={{ height: "calc(100% - 105px)" }}>
            <div class="function-wrap">
                <ul class="input-list">
                    <li><Link to="/DefaultSetting" class="btn-send" style={{ width: "auto" }}>Default &amp; Add Setting</Link></li>
                </ul>
            </div>
            <div id="cricdiv">
                <h2 style={{ background: "#ffb90e", margin: "0", padding: "5px" }}>Cricket</h2>
                <table id="table_log" class="table01" style={{ fontWeight: "bold" }}>
                    <tbody>
                        <tr>
                        <th class="align-L" style={{ width: "10%" }}>Event Id</th>
                        <th class="align-L" style={{ width: "10%" }}>Market Id</th>
                        <th class="align-L" style={{ width: "60%" }}>Match Name</th>
                        <th class="align-L" style={{ width: "20%" }}>Action</th>
                        </tr>
                    </tbody>
                    <tbody id="cricketMatches">
                        <tr>
                        <td class="align-L">34377454</td>
                        <td class="align-L">1.244425820</td>
                        <td class="align-L"><span style={{ color: "#113a17", fontSize: "12px" }}>Thu, 05 Jun 2025 22:45:00</span><br /><span style={{ color: "#4083a9", fontSize: "14px" }}>Middlesex v Kent</span></td>
                        <td class="align-L"><button class="btn-send" style={{ width: "120px", marginRight: "1px" }} onclick="addMarket(34377454,4)">Add Match</button></td> 
                        </tr> 
                    </tbody>
                </table>
            </div>
            <div id="tennisdiv">
                <h2 style={{ background: "#ffb90e", margin: "0", padding: "5px" }}>Tennis</h2>
                <table id="table_log" class="table01" style={{ fontWeight: "bold" }}>
                    <tbody>
                        <tr>
                        <th class="align-L" style={{ width: "10%" }}>Event Id</th>
                        <th class="align-L" style={{ width: "10%" }}>Market Id</th>
                        <th class="align-L" style={{ width: "60%" }}>Match Name</th>
                        <th class="align-L" style={{ width: "20%" }}>Action</th>
                        </tr>
                    </tbody>
                    <tbody id="tennisMatches">
                        <tr>
                        <td class="align-L">34387452</td>
                        <td class="align-L">1.244527419</td>
                        <td class="align-L"><span style={{ color: "#113a17", fontSize: "12px" }}>Thu, 05 Jun 2025 18:05:00</span><br /><span style={{ color: "#4083a9", fontSize: "14px" }}>Chun  Tseng v J Rodionov</span></td>
                        <td class="align-L"><button class="btn-send" style={{ width: "120px", marginRight: "1px" }} onclick="addMarket(34387452,2)">Add Match</button></td> 
                        </tr> 
                    </tbody>
                </table>
            </div>
            <div id="soccerdiv">
                <h2 style={{ background: "#ffb90e", margin: "0", padding: "5px" }}>Soccer</h2>
                <table id="table_log" class="table01" style={{ fontWeight: "bold" }}>
                    <tbody>
                        <tr>
                        <th class="align-L" style={{ width: "10%" }}>Event Id</th>
                        <th class="align-L" style={{ width: "10%" }}>Market Id</th>
                        <th class="align-L" style={{ width: "60%" }}>Match Name</th>
                        <th class="align-L" style={{ width: "20%" }}>Action</th>
                        </tr>
                    </tbody>
                    <tbody id="soccerMatches">
                        <tr>
                        <td class="align-L">34380322</td>
                        <td class="align-L">1.244462260</td>
                        <td class="align-L"><span style={{ color: "#113a17", fontSize: "12px" }}>Thu, 05 Jun 2025 18:30:00</span><br /><span style={{ color: "#4083a9", fontSize: "14px" }}>Malawi v Lesotho</span></td>
                        <td class="align-L"><button class="btn-send" style={{ width: "120px", marginRight: "1px" }} onclick="addMarket(34380322,1)">Add Match</button></td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};  
export default AddMatch;