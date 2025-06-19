import React from "react";
const Banking = () => {
    return(
        <>
            <div class="full-wrap" style={{ height: "calc(100% - 105px)" }}>
                <h2>Banking</h2>
                <div class="total_all banking-top">
                    <div class="search-wrap" id="userSearchUl">
                        <div>
                            <input class="search-input" type="text" name="searchUserId" id="userId" placeholder="Enter userId..." readonly="readonly" />
                        </div>
                    </div>
                    <ul class="input-list" id="companySearchUl">
                        <li class="bank-li">
                            <a class="btn-send banking-btn" href="#" id="searchKey">Search</a>
                        </li>
                    </ul>
                    <ul class="input-list" id="accountStatusUl">
                        <li><strong>Status</strong></li>
                        <li>
                            <select class="" name="accountStatus" id="accountStatus">
                            <option value="0">ACTIVE
                            </option>
                            <option value="1">SUSPENDED
                            </option>
                            <option value="2">LOCKED
                            </option>
                            <option value="-1">ALL</option>
                            </select>
                        </li>
                    </ul>
                </div> 
                <div class="report_over-wrap" style={{ maxHeight: "calc(100% - 208px)" }}>
                    <div class="function-wrap clearfix">
                        <dl class="banking-head float-L">
                            <dt>Your Balance</dt>
                            <dd id=""><span>PBU</span><strong id="yourBalance">2.00</strong></dd>
                        </dl>
                        <ul class="input-list float-R" style={{ display: "none" }}>
                            <li><label>Sort by</label></li>
                            <li>
                            <select id="sort">
                                <option value="userId">UID</option>
                                <option value="site">Site</option>
                                <option value="currencyType">Currency</option>
                            </select>
                            </li>
                        </ul>
                    </div>
                    <table style={{ display: "none" }}>
                        <tbody>
                            <tr id="tempTr">
                            <td class="td-uid" id="userId"></td>
                            <td id="siteCol" style={{ display: "none" }}></td>
                            <td id="currencyTypeCol" style={{ display: "none" }}></td>
                            <td id="balance"></td>
                            <td id="availableBalance"></td>
                            <td id="userExposure"></td>
                            <td class="DW-amount">
                                <ul class="btn_list-DW">
                                    <li><a id="dBtn" class="btn" href="#">D</a></li>
                                    <li><a id="wBtn" class="btn" href="#">W</a></li>
                                </ul>
                                <input id="amount" name="amount" class="" type="text" placeholder="0" maxlength="18" readonly="readonly" />
                                <a id="fullBtn" href="javascript:void(0);" class="btn float-L disable">Full</a>
                            </td>
                            <td class="credit-amount">
                                <a href="javascript:void(0);" id="userCreditReference"></a>
                                <input id="editCreditReference" name="editCreditReference" class="" type="text" placeholder="0" maxlength="18" style={{ display: "none" }} readonly="readonly" />
                                <a id="editCreditReferenceBtn" href="javascript:void(0);" class="btn">Edit</a>
                                <a id="cancelCreditReferenceBtn" href="javascript:void(0);" class="btn" style={{ display: "none" }}>Cancel</a>
                            </td>
                            <td id="userReferencePL"></td>
                            <td class="border-l"><input id="remark" class="" type="text" placeholder="Remark" readonly="readonly" /></td>
                            <td class="full-amount">
                                <a id="log" class="btn">Log</a>
                            </td>
                            </tr>
                            <tr id="tempBalanceTr" class="expand first expand-balance">
                            <td></td>
                            <td colspan="10">
                                <img class="expand-arrow" src="/assets/images/transparent.gif" />
                                <table>
                                    <tbody id="tempVendorContent">
                                        <tr>
                                        <th width="9%" class="align-L">Game</th>
                                        <th width="11%">Balance</th>
                                        <th width="7%"><a id="recallAll" href="#" class="btn-recall">Recall All</a></th>
                                        <th></th>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            </tr>
                            <tr id="tempVendorTr">
                            <td id="vendorTitle" class="align-L">Houise</td>
                            <td id="vendorBalance">200,000,000,000.00</td>
                            <td><a id="recall" href="#" class="btn-recall">Recall</a></td>
                            <td></td>
                            </tr>
                            <tr id="noDataTempTr">
                            <td class="no-data" colspan="11">
                                <p>No Data</p>
                            </td>
                            </tr>
                            <tr id="totalTempTr" class="total">
                            <td class="align-L">Total</td>
                            <td id="totalSite" style={{ display: "none" }}></td>
                            <td id="totalCurrencyType" style={{ display: "none" }}></td>
                            <td id="totalBalance"></td>
                            <td id="totalAvailableBalance"></td>
                            <td id="totalExposure"></td>
                            <td id="totalCreditReference" class="" colspan="2"></td>
                            <td id="totalReferencePL"></td>
                            <td></td>
                            <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <table id="table_transfer" class="table01 tab-transfer tab-banking">
                        <colgroup>
                            <col span="1" width="190" />
                            <col span="1" width="120" style={{ display: "none" }} id="siteColumn" />
                            <col span="1" width="120" style={{ display: "none" }} id="currencyTypeColumn" />
                            <col span="1" width="120" />
                            <col span="1" width="120" />
                            <col span="1" width="120" />
                            <col span="1" width="280" />
                        </colgroup>
                        <tbody>
                            <tr>
                            <th id="userIdTH" class="align-L sort-this">UID</th>
                            <th id="siteTH" style={{ display: "none" }}>Site</th>
                            <th id="currencyTypeTH" style={{ display: "none" }}>Currency</th>
                            <th class="sky-align">Balance</th>
                            <th class="sky-align">Available D/W</th>
                            <th class="sky-align">Exposure</th>
                            <th class="align-C border-l">Deposit / Withdraw</th>
                            <th class="border-l">Credit Reference</th>
                            <th class="">Reference P/L</th>
                            <th class="border-l sky-align">Remark</th>
                            <th class="full-amount" style={{ width: "7%" }}>
                                Logs
                            </th>
                            </tr>
                        </tbody>
                        <tbody id="userData">
                            <tr id="level1" style={{ display: "table-row" }} main_userid="level1">
                            <td class="td-uid" id="userId"><span class="order">1</span>level1</td>
                            <td id="balance">3,189,286.33</td>
                            <td id="balance">0.00</td>
                            <td id="balance" style={{ color: "red" }}>50,918.06</td>
                            <td class="DW-amount">
                                <ul id="ulDWlevel1" class="btn_list-DW">
                                    <li><a id="dBtn" class="btn" onclick="loadDepo(0)">D</a></li>
                                    <li><a id="wBtn" class="btn" onclick="loadWith(0)">W</a></li>
                                </ul>
                                <input id="amountlevel1" onkeypress="return isNumberKeyWithDot(event)" onkeyup="validateAmount(0);" onpaste="return false;" readonly="true" ondrop="return false;" name="amount" class="" type="number" placeholder="0" maxlength="18" /><a id="fullBtnlevel1" onclick="loadFull(0)" class="btn float-L disable">Full</a>
                            </td>
                            <td class="credit-amount"><a href="javascript:void(0);" onclick="loadOldref(0)" id="userCreditReferencelevel1" style={{ display: "inline" }}>0.00</a><a id="editCreditReferenceBtnlevel1" onclick="openCreditref(0)" class="btn" style={{ display: "block" }}>Edit</a></td>
                            <td id="userReferencePL">3,189,286.33</td>
                            <td class="border-l"><input id="remarklevel1" onkeyup="addRemark(0);" class="" type="text" placeholder="Remark" /></td>
                            <td class="full-amount"><a id="log" href="/Atransactionhistory/level1/1" class="btn">Log</a></td>
                            </tr>
                            <tr id="satest" style={{ display: "table-row" }} main_userid="satest">
                            <td class="td-uid" id="userId"><span class="order">2</span>satest</td>
                            <td id="balance">2,670.02</td>
                            <td id="balance">203.99</td>
                            <td id="balance" style={{ color: "red" }}>0.00</td>
                            <td class="DW-amount">
                                <ul id="ulDWsatest" class="btn_list-DW">
                                    <li><a id="dBtn" class="btn" onclick="loadDepo(1)">D</a></li>
                                    <li><a id="wBtn" class="btn" onclick="loadWith(1)">W</a></li>
                                </ul>
                                <input id="amountsatest" onkeypress="return isNumberKeyWithDot(event)" onkeyup="validateAmount(1);" onpaste="return false;" readonly="true" ondrop="return false;" name="amount" class="" type="number" placeholder="0" maxlength="18" /><a id="fullBtnsatest" onclick="loadFull(1)" class="btn float-L disable">Full</a>
                            </td>
                            <td class="credit-amount"><a href="javascript:void(0);" onclick="loadOldref(1)" id="userCreditReferencesatest" style={{ display: "inline" }}>0.00</a><a id="editCreditReferenceBtnsatest" onclick="openCreditref(1)" class="btn" style={{ display: "block" }}>Edit</a></td>
                            <td id="userReferencePL">2,670.02</td>
                            <td class="border-l"><input id="remarksatest" onkeyup="addRemark(1);" class="" type="text" placeholder="Remark" /></td>
                            <td class="full-amount"><a id="log" href="/Atransactionhistory/satest/1" class="btn">Log</a></td>
                            </tr>
                            <tr id="supadmintest" style={{ display: "table-row" }} main_userid="supadmintest">
                            <td class="td-uid" id="userId"><span class="order">3</span>supadmintest</td>
                            <td id="balance">5.00</td>
                            <td id="balance">5.00</td>
                            <td id="balance" style={{ color: "red" }}>0.00</td>
                            <td class="DW-amount">
                                <ul id="ulDWsupadmintest" class="btn_list-DW">
                                    <li><a id="dBtn" class="btn" onclick="loadDepo(2)">D</a></li>
                                    <li><a id="wBtn" class="btn" onclick="loadWith(2)">W</a></li>
                                </ul>
                                <input id="amountsupadmintest" onkeypress="return isNumberKeyWithDot(event)" onkeyup="validateAmount(2);" onpaste="return false;" readonly="true" ondrop="return false;" name="amount" class="" type="number" placeholder="0" maxlength="18" /><a id="fullBtnsupadmintest" onclick="loadFull(2)" class="btn float-L disable">Full</a>
                            </td>
                            <td class="credit-amount"><a href="javascript:void(0);" onclick="loadOldref(2)" id="userCreditReferencesupadmintest" style={{ display: "inline" }}>0.00</a><a id="editCreditReferenceBtnsupadmintest" onclick="openCreditref(2)" class="btn" style={{ display: "block" }}>Edit</a></td>
                            <td id="userReferencePL">5.00</td>
                            <td class="border-l"><input id="remarksupadmintest" onkeyup="addRemark(2);" class="" type="text" placeholder="Remark" /></td>
                            <td class="full-amount"><a id="log" href="/Atransactionhistory/supadmintest/1" class="btn">Log</a></td>
                            </tr>
                            <tr id="suppass" style={{ display: "table-row" }} main_userid="suppass">
                            <td class="td-uid" id="userId"><span class="order">4</span>suppass</td>
                            <td id="balance">0.00</td>
                            <td id="balance">0.00</td>
                            <td id="balance" style={{ color: "red" }}>0.00</td>
                            <td class="DW-amount">
                                <ul id="ulDWsuppass" class="btn_list-DW">
                                    <li><a id="dBtn" class="btn" onclick="loadDepo(3)">D</a></li>
                                    <li><a id="wBtn" class="btn" onclick="loadWith(3)">W</a></li>
                                </ul>
                                <input id="amountsuppass" onkeypress="return isNumberKeyWithDot(event)" onkeyup="validateAmount(3);" onpaste="return false;" readonly="true" ondrop="return false;" name="amount" class="" type="number" placeholder="0" maxlength="18" /><a id="fullBtnsuppass" onclick="loadFull(3)" class="btn float-L disable">Full</a>
                            </td>
                            <td class="credit-amount"><a href="javascript:void(0);" onclick="loadOldref(3)" id="userCreditReferencesuppass" style={{ display: "inline" }}>0.00</a><a id="editCreditReferenceBtnsuppass" onclick="openCreditref(3)" class="btn" style={{ display: "block" }}>Edit</a></td>
                            <td id="userReferencePL">0.00</td>
                            <td class="border-l"><input id="remarksuppass" onkeyup="addRemark(3);" class="" type="text" placeholder="Remark" /></td>
                            <td class="full-amount"><a id="log" href="/Atransactionhistory/suppass/1" class="btn">Log</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <div id="paginationList">
                        <ul id="pageNumberContent" class="pages">
                            <li id="prev"><a href="javascript:void(0);" class="disable" style={{ pointerEvents: "none" }}>Prev</a></li>
                            <li id="pageNumber"><a href="javascript:void(0);" class="select" style={{ pointerEvents: "none" }}>1</a></li>
                            <li id="next"><a href="javascript:void(0);" class="disable" style={{ pointerEvents: "none" }}>Next</a></li>
                            <input type="text" id="goToPageNumber_1" maxlength="6" size="4" /><a id="goPageBtn_1">GO</a>
                        </ul>
                    </div>
                </div>
                <div class="submit-wrap" id="settlementBar">
                    <ul>
                        <li><a id="clearAllBtn" class="btn">Clear All</a></li>
                        <li class="submit-payment">
                            <input id="paymentPassword" type="password" placeholder="Password" />
                            <a id="buttonSubmit" onclick="processData()" class="btn-send">Submit <span id="submitCount">0</span>
                            Payment</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
export default Banking;