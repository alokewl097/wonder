import React from "react";

const SetFancyResult = () =>{
    return(
        <>
            <div class="full-wrap" style={{ height: "calc(100% - 105px)"}}>
                <h2>Set Fancy Result</h2>
                <div class="total_all banking-top">
                    <ul class="input-list" id="companySearchUl">
                        <div >
                            <li>
                            <label>Select Sport:</label>
                            <select class="form-control purp" id="sportid">
                                <option value="-1" selected="">Select Sport</option>
                                <option value="4">Cricket</option>
                                <option value="2">Tennis</option>
                                <option value="1">Soccer</option>
                            </select>
                            </li>
                            <li><label>Select Match:</label></li>
                            <li>
                            <select style={{margin: "0" }} id="match">
                            </select>
                            </li>
                        </div>
                    </ul>
                </div>
                <table id="table_log_0" class="table01" style={{ fontWeight: "bold" }}>
                    <tbody>
                        <tr>
                            <th class="align-L">Sport</th>
                            <th class="align-L">Fancy ID</th>
                            <th class="align-L">Fancy Name</th>
                            <th class="align-L">Match Name</th>
                        </tr>
                    </tbody>
                    <tbody id="openFancy" style={{ textAlign: "left" }}>
                        <tr>
                            <td class="align-L">Cricket</td>
                            <td class="align-L">34377454-929130.FY</td>
                            <td class="align-L">
                            <div>Who will win the Toss</div>
                            </td>
                            <td class="align-L">
                            <div class="text-success"><span>Middlesex v Kent</span></div>
                            </td>
                        </tr>
                        <tr>
                            <td class="align-L">
                            <input type="hidden" value="toss" id="type92913034377454" />
                            <select id="tossfancy34377454" class="form-control">
                                <option value="select">Select</option>
                                <option value="Middlesex" name="31378">Middlesex</option>
                                <option value="Kent" name="5901">Kent</option>
                            </select>
                            </td>
                            <td class="align-L">
                            <div><button type="button" style={{ width: "80px" }} class="btn-send" onclick="requestFancyResult(0)">Set</button></div>
                            </td>
                            <td class="align-L">
                            <div class="text-success"><span><button type="button" style={{ background: "#dc143c", color: "#fff", width: "80px" }} class="btn-send" onclick="requestFancySuspend(0)">Suspended</button></span></div>
                            </td>
                        </tr>
                        <tr>
                            <td class="align-L">Cricket</td>
                            <td class="align-L">1.244425824</td>
                            <td class="align-L">
                            <div>Completed Match</div>
                            </td>
                            <td class="align-L">
                            <div class="text-success"><span>Middlesex v Kent</span></div>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
                <table id="table_log" class="table01" style={{ fontWeight: "bold", display: "none" }}>
                    <tbody>
                        <tr>
                            <th class="align-L">Sport</th>
                            <th class="align-L">Match Name</th>
                            <th class="align-L">Fancy ID</th>
                            <th class="align-L">Fancy Name</th>
                            <th class="align-L">IP</th>
                            <th class="align-L">Date</th>
                            <th class="align-L">Result</th>
                            <th class="align-L">Action</th>
                        </tr>
                    </tbody>
                    <tbody id="closedFancy">
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default SetFancyResult;