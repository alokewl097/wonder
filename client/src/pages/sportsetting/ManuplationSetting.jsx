import React from "react";
import styles from '../../assets/css/function.module.css';
const ManuplationSetting = () => {
    return(
        <>
       <div className="main_wrap" style={{ height: "calc(100% - 105px)" }}>
            {/* <!-- function --> */}
            <div className={`function-wrap ${styles['function-wrap']} ${styles['col-lg-12']}`}>
                <div className={styles['col-lg-2']}>
                    <label>Select target</label>
                    <select className="form-control purp" id="oddsTypeSelect">
                        <option value="-1">Select Target</option>
                        <option value="Odds">Odds</option>
                        <option value="BookMaker">BookMaker</option>
                    </select>
                </div>
                <div className={styles['col-lg-2']} id="TypeSelectDiv">
                    <label>Select Type</label>
                    <select className="form-control purp" id="TypeSelect">
                        <option value="-1">Select Type</option>
                        <option value="static">Static</option>
                        <option value="real">Real</option>
                    </select>
                </div>
                <div className={styles['col-lg-2']} id="rangeSelectDiv">
                    <label>Select Range</label>
                    <select className="form-control purp" id="rangeSelect">
                        <option value="-1">Select Range</option>
                        <option value="type1">1||0.01||0.1-Gap||0.1||0.85</option>
                        <option value="type2">1||0.01||0.15-Gap||0.15||0.85</option>
                    </select>
                </div>
                <div className={styles['col-lg-2']} id="gapSelectDiv">
                    <label>Select Gap</label>
                    <select className="form-control purp" id="gapSelect">
                        <option value="-1">Select Gap</option>
                        <option>0.01</option>
                        <option>0.015</option>
                        <option>0.02</option>
                        <option>0.025</option>
                        <option>0.03</option>
                        <option>0.035</option>
                        <option>0.04</option>
                        <option>0.045</option>
                        <option>0.05</option>
                        <option>0.055</option>
                        <option>0.06</option>
                        <option>0.065</option>
                        <option>0.07</option>
                        <option>0.075</option>
                        <option>0.08</option>
                        <option>0.085</option>
                        <option>0.09</option>
                        <option>0.095</option>
                        <option>0.10</option>
                    </select>
                </div>
                <div className={styles['col-lg-2']}>
                    <button className="btn-send" style={{ width: "80px" }} onclick="addManipulation()">Submit</button>
                </div>
            </div>
            <div id="widthAll" className="width-all">
                <table id="resultTable" className="table01 margin-table" style={{ display: "table" }}>
                    <tbody>
                        <tr>
                            <th id="accountTh" width="10%" className="align-L">S.No.</th>
                            <th id="creditRefTh" width="10%">Odds Type</th>
                            <th id="balanceTh" width="10%">Type</th>
                            <th id="exposureTh" width="10%">Info</th>
                            <th id="actionTh" width="15%">Status</th>
                        </tr>
                        <tr id="1" style={{ display: "table-row" }} main_userid="butler22">
                            <td id="accountCol" className="align-L">#</td>
                            <td id="creditRef1" className="credit-amount-member">
                            Odds
                            </td>
                            <td id="balance1">Real</td>
                            <td id="currentExposure1"><a className="openrangemodal">Info</a></td>
                            <td id="currentExposure1">
                            IS OFF
                            </td>
                        </tr>
                        <tr id="1" style={{ display: "table-row" }} main_userid="butler22">
                            <td id="accountCol" className="align-L">#</td>
                            <td id="creditRef1" className="credit-amount-member">
                            Bookmaker
                            </td>
                            <td id="balance1">Real</td>
                            <td id="currentExposure1"><a className="openrangemodal">Info</a></td>
                            <td id="currentExposure1">
                            IS OFF
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}
export default ManuplationSetting;