import React from "react";
import './blockmarket.css';
import { Link } from "react-router-dom";
const BlockMarketList = () => {
    return(
        <>
            <div class="full-wrap">
                {/* <!-- Loading Wrap --> */}
                <div id="loading" class="loading-wrap" style={{ display: "none" }}>
                    <ul class="loading">
                        <li><img src="/assets/images/loading40.gif" /></li>
                        <li>Loading...</li>
                    </ul>
                </div>
                {/* <!-- Message --> */}
                <div id="message" class="message-wrap success">
                    <a class="btn-close">Close</a>
                    <p></p>
                </div>
                <h2>Games Listing
                </h2>
                <div id="content">
                    <table id="table_log" class="table01">
                        <tbody>
                            <tr>
                            <th width="15%" class="align-L">S.No.</th>
                            <th width="18%">Match Name</th>
                            <th width="18%">Date</th>
                            <th width="18%">Match Odds ON/OFF</th>
                            <th width="18%">Book Maker ON/OFF</th>
                            <th width="18%">Manual Odds ON/OFF</th>
                            <th width="18%">Fancy ON/OFF</th>
                            <th width="18%">Manual Fancy ON/OFF</th>
                            <th width="18%">Other ON/OFF</th>
                            <th width="16%">Match ON/OFF</th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr id="user_row_">
                            <td class="align-L">#</td>
                            <td class=" ">
                                <a>Thailand (W) v Nepal (W)</a>
                            </td>
                            <td class=" ">
                                Mon Jun 02 10:29:37 IST 2025
                            </td>
                            <td>		
                                <label class="switch"><input type="checkbox" defaultChecked onclick="editGames('34377570','Odds')" id="game34377570Odds" /><span class="slider round"></span></label>	 
                            </td>
                            <td>		
                                <label class="switch"><input type="checkbox" defaultChecked onclick="editGames('34377570','BooKMaker')" id="game34377570BooKMaker" /><span class="slider round"></span></label>	 
                            </td>
                            <td>		
                                <label class="switch"><input type="checkbox" defaultChecked onclick="editGames('34377570','Manual')" id="game34377570Manual" /><span class="slider round"></span></label>	 
                            </td>
                            <td>		
                                <label class="switch"><input type="checkbox" defaultChecked onclick="editGames('34377570','Fancy')" id="game34377570Fancy" /><span class="slider round"></span></label>	 
                            </td>
                            <td>		
                                <label class="switch"><input type="checkbox" defaultChecked onclick="editGames('34377570','ManualF')" id="game34377570ManualF" /><span class="slider round"></span></label>	 
                            </td>
                            <td>		
                                <label class="switch"><input type="checkbox" defaultChecked onclick="editGames('34377570','Other')" id="game34377570Other" /><span class="slider round"></span></label>	 
                            </td>
                            <td>		
                                <label class="switch"><input type="checkbox" defaultChecked onclick="editGames('34377570','')" id="game34377570" /><span class="slider round"></span></label>	 
                            </td>
                            </tr>
                            <tr id="user_row_">
                            <td class="align-L">#</td>
                            <td class=" ">
                                <a>Narva Trans II v FC Kuressaare II</a>
                            </td>
                            <td class=" ">
                                Mon Jun 02 10:29:38 IST 2025
                            </td>
                            <td>		
                                <label class="switch"><input type="checkbox" defaultChecked onclick="editGames('34378112','Odds')" id="game34378112Odds" /><span class="slider round"></span></label>	 
                            </td>
                            <td>		
                                <label class="switch"><input type="checkbox" defaultChecked onclick="editGames('34378112','BooKMaker')" id="game34378112BooKMaker" /><span class="slider round"></span></label>	 
                            </td>
                            <td>		
                                <label class="switch"><input type="checkbox" defaultChecked onclick="editGames('34378112','Manual')" id="game34378112Manual" /><span class="slider round"></span></label>	 
                            </td>
                            <td>		
                                <label class="switch"><input type="checkbox" defaultChecked onclick="editGames('34378112','Fancy')" id="game34378112Fancy" /><span class="slider round"></span></label>	 
                            </td>
                            <td>		
                                <label class="switch"><input type="checkbox" defaultChecked onclick="editGames('34378112','ManualF')" id="game34378112ManualF" /><span class="slider round"></span></label>	 
                            </td>
                            <td>		
                                <label class="switch"><input type="checkbox" defaultChecked onclick="editGames('34378112','Other')" id="game34378112Other" /><span class="slider round"></span></label>	 
                            </td>
                            <td>		
                                <label class="switch"><input type="checkbox" defaultChecked onclick="editGames('34378112','')" id="game34378112" /><span class="slider round"></span></label>	 
                            </td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
export default BlockMarketList;