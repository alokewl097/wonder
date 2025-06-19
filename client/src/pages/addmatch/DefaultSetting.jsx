import React from "react";
import styles from "../../assets/css/function.module.css";
const DefaultSetting = () => {
    return(
        <>
        <div class="main_wrap" style={{ height: "calc(100% - 105px)" }}>
            <div class={`function-wrap ${styles['function-wrap']} ${styles['col-lg-12']}`} style={{ background: "lightblue", padding: "0 !important" }}>
                <div class={styles['col-lg-12']} style={{ background: "#000", padding: "3px", color: "#fff", marginBottom: "5px" }}>
                    <h2 style={{ fontSize: "17px" }}>SET AUTO SPORTS RESULT</h2>
                </div>
                <div class="row" style={{ margin: "0" }}>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <div class="user-lock-search" style={{ position: "relative" }}>
                        <div class="confirm-bets" style={{ padding: "7px" }}>
                            <div class="custom-control custom-switch">
                                <input id="cricketResultRadio" type="checkbox" name="autocon-1" data-toggle="toggle" class="custom-control-input" value="true" />
                                <strong><label for="cricketResultRadio" class="custom-control-label" id="cricketResultRadioVal">OFF</label><span> (Cricket)</span></strong>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <div class="user-lock-search" style={{ position: "relative" }}>
                        <div class="confirm-bets" style={{ padding: "7px" }}>
                            <div class="custom-control custom-switch">
                                <input id="tennisResultRadio" type="checkbox" name="autocon-1" data-toggle="toggle" class="custom-control-input" value="true" />
                                <strong><label for="tennisResultRadio" class="custom-control-label" id="tennisResultRadioVal">ON</label><span> (Tennis)</span></strong>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <div class="user-lock-search" style={{ position: "relative" }}>
                        <div class="confirm-bets" style={{ padding: "7px" }}>
                            <div class="custom-control custom-switch">
                                <input id="soccerResultRadio" type="checkbox" name="autocon-1" data-toggle="toggle" class="custom-control-input" value="true" />
                                <strong><label for="soccerResultRadio" class="custom-control-label" id="soccerResultRadioVal">ON</label><span> (Soccer)</span></strong>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="row" style={{ margin: "0" }}>
                    <div class="col-lg-2 col-xs-4" style={{ marginBottom: "5px" }}>
                        <strong><label for="d-inline-block">Action</label></strong><br /> 
                        <button class="btn-send" style={{ width: "80px" }} onclick="setAutoResultSetting()">Update</button>
                    </div>
                </div>
            </div>
            <div class={`function-wrap ${styles['function-wrap']} ${styles['col-lg-12']}`}>
                <div class={styles['col-lg-12']} style={{ marginBottom: "5px" }}>
                    <h2>Set Auto Add Sports</h2>
                </div>
                <div class="row" style={{ margin: "0" }}>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <div class="user-lock-search" style={{ position: "relative" }}>
                        <div class="confirm-bets" style={{ padding: "7px" }}>
                            <div class="custom-control custom-switch">
                                <input id="cricketRadio" type="checkbox" name="autocon-1" data-toggle="toggle" class="custom-control-input" value="true" />
                                <label for="cricketRadio" class="custom-control-label" id="cricketRadioVal">ON</label><span> (Cricket)</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <div class="user-lock-search" style={{ position: "relative" }}>
                        <div class="confirm-bets" style={{ padding: "7px" }}>
                            <div class="custom-control custom-switch">
                                <input id="tennisRadio" type="checkbox" name="autocon-1" data-toggle="toggle" class="custom-control-input" value="true" />
                                <label for="tennisRadio" class="custom-control-label" id="tennisRadioVal">ON</label><span> (Tennis)</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <div class="user-lock-search" style={{ position: "relative" }}>
                        <div class="confirm-bets" style={{ padding: "7px" }}>
                            <div class="custom-control custom-switch">
                                <input id="soccerRadio" type="checkbox" name="autocon-1" data-toggle="toggle" class="custom-control-input" value="true" />
                                <label for="soccerRadio" class="custom-control-label" id="soccerRadioVal">ON</label><span> (Soccer)</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="row" style={{ margin: "0" }}>
                    <div class="col-lg-2 col-xs-4" style={{ marginBottom: "5px" }}>
                        <label for="d-inline-block">Action</label><br /> 
                        <button class="btn-send" style={{ width: "80px" }} onclick="setMatchAddSetting()">Update</button>
                    </div>
                </div>
            </div>
            <div class={`function-wrap ${styles['function-wrap']} ${styles['col-lg-12']}`}>
                <div class={styles['col-lg-12']} style={{ marginBottom: "5px" }}>
                    <h2>Set Delay Setting</h2>
                </div>
                <div class="row" style={{ margin: "0" }}>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <div class="user-lock-search" style={{ position: "relative" }}>
                        <div class="confirm-bets" style={{ padding: "7px" }}>
                            <div class="custom-control custom-switch">
                                <input id="providerRadio" type="checkbox" name="autocon-1" class="custom-control-input" value="true" />
                                <label for="providerRadio" class="custom-control-label" id="providerRadioVal">NOT IN USE</label><span> (PROVIDER)</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <div class="user-lock-search" style={{ position: "relative" }}>
                        <div class="confirm-bets" style={{ padding: "7px" }}>
                            <div class="custom-control custom-switch">
                                <input id="websiteRadio" type="checkbox" name="autocon-1" class="custom-control-input" value="true" />
                                <label for="websiteRadio" class="custom-control-label" id="websiteRadioVal">IN USE</label><span> (WEBSITE)</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="row" style={{ margin: "0" }}>
                    <div class="col-lg-2 col-xs-4" style={{ marginBottom: "5px" }}>
                        <label for="d-inline-block">Action</label><br /> 
                        <button class="btn-send" style={{ width: "80px" }} onclick="setDelaySetting()">Update</button>
                    </div>
                </div>
            </div>
            <div class={`function-wrap ${styles['function-wrap']} ${styles['col-lg-12']}`}>
                <div class={styles['col-lg-12']} style={{ marginBottom: "5px" }}>
                    <h2>Set Casino Win X</h2>
                </div>
                <div class="row" style={{ margin: "0" }}>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <input type="number" class="form-control ng-untouched ng-pristine ng-valid" id="cwinX" placeholder="set WIN X" />
                    </div>
                </div>
                <div class="row" style={{ margin: "0" }}>
                    <div class="col-lg-2 col-xs-4" style={{ marginBottom: "5px" }}>
                        <button class="btn-send" style={{ width: "80px" }} onclick="setCasinoWINX()">Update</button>
                    </div>
                </div>
            </div>
            {/* <!-- function --> */}
            <div class={`function-wrap ${styles['function-wrap']} ${styles['col-lg-12']}`}>
                <label>Select Sports</label>
                <select name="refreshTime" id="sportId" onchange="getLimit()">
                    <option value="4">Cricket</option>
                    <option value="1">Soccer</option>
                    <option value="2">Tennis</option>
                </select>
                <button class="btn-send" style={{ width: "80px" }} onclick="setLimit()">Set Limit</button>
                <div class={styles['col-lg-12']} style={{ marginBottom: "5px" }}>
                    <h2>Set Auto Odds Min Max</h2>
                </div>
                <div class="row">
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>Pre Min 	 
                        <input type="number" class="form-control" id="autoOddsMinPre" placeholder="Pre Min Bet" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>Pre Max <input type="number" class="form-control" id="autoOddsMaxPre" placeholder="Pre Max Bet" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	Pre Max PL <input type="number" class="form-control" min="0" id="oddsPLPre" placeholder="Pre Profit Loss" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Min 	 
                        <input type="number" class="form-control" id="autoOddsMin" placeholder="Min Bet" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Max <input type="number" class="form-control" id="autoOddsMax" placeholder="Max Bet" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Max Profit <input type="number" class="form-control" min="0" id="oddsPL" placeholder="Odds Profit Loss" /></label>
                    </div>
                </div>
                <div class="row" style={{ margin: "0" }}>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Bet Delay <input type="number" class="form-control" min="0" id="autoOddsDelay" placeholder="Enter Delay" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Max Bhav <input type="number" class="form-control" min="0" id="autoMaxBhav" onkeypress="return isNumberKeyWithDot(event)" placeholder="Enter Bhav" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <div class="user-lock-search" style={{ position: "relative" }}>
                        <div class="confirm-bets" style={{ padding: "7px" }}>
                            <div class="custom-control custom-switch">
                                <input id="autoOddsRadio" type="checkbox" name="autocon-1" data-toggle="toggle" class="custom-control-input" value="true" />
                                <label for="autoOddsRadio" class="custom-control-label" id="autoOddsRadioVal">ON</label><span> (IS SHOWING)</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class={`function-wrap ${styles['function-wrap']} ${styles['col-lg-12']}`}>
                <div class={styles['col-lg-12']} style={{ marginBottom: "5px" }}>
                    <h2>Set Other Market Min Max</h2>
                </div>
                <div class="row" style={{ margin: "0" }}>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>Pre Min 	 
                        <input type="number" class="form-control" id="OtherMinPre" placeholder="Pre Min Bet" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>Pre Max <input type="number" class="form-control" id="OtherMaxPre" placeholder="Pre Max Bet" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	Pre Max PL <input type="number" class="form-control" min="0" id="OtherPLPre" placeholder="Pre Profit Loss" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Min 	 
                        <input type="number" class="form-control" id="OtherMin" placeholder="Min Bet" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Max <input type="number" class="form-control" id="OtherMax" placeholder="Max Bet" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Max Profit <input type="number" class="form-control" min="0" id="OtherPL" placeholder=" Profit Loss" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Bet Delay <input type="number" class="form-control" min="0" id="OtherDelay" placeholder="Enter Delay" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Max Bhav <input type="number" class="form-control" min="0" id="OtherMaxBhav" onkeypress="return isNumberKeyWithDot(event)" placeholder="Enter Bhav" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <div class="user-lock-search" style={{ position: "relative" }}>
                        <div class="confirm-bets" style={{ padding: "7px" }}>
                            <div class="custom-control custom-switch">
                                <input id="otherOddsRadio" type="checkbox" name="autocon-1" data-toggle="toggle" class="custom-control-input" value="true" />
                                <label for="otherOddsRadio" class="custom-control-label" id="otherOddsRadioVal">OFF</label><span> (IS SHOWING)</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class={`function-wrap ${styles['function-wrap']} ${styles['col-lg-12']}`}>
                <div class={styles['col-lg-12']} style={{ marginBottom: "5px" }}>
                    <h2>Set BookMaker Min Max</h2>
                </div>
                <div class="row" style={{ margin: "0" }}>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>Pre Min 	 
                        <input type="number" class="form-control" id="bookMinPre" placeholder="Pre Min Bet" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>Pre Max <input type="number" class="form-control" id="bookMaxPre" placeholder="Pre Max Bet" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	Pre Max PL <input type="number" class="form-control" min="0" id="bookPLPre" placeholder="Pre Profit Loss" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Min 	 
                        <input type="number" class="form-control" id="bookMakerMin" placeholder="Min Bet" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Max <input type="number" class="form-control" id="bookMakerMax" placeholder="Max Bet" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Max Profit <input type="number" class="form-control" min="0" id="BookPL" placeholder="Odds Profit Loss" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Bet Delay <input type="number" class="form-control" min="0" id="bookMakerDelay" placeholder="Enter Delay" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Max Bhav <input type="number" class="form-control" min="0" id="bookMaxBhav" onkeypress="return isNumberKeyWithDot(event)" placeholder="Enter Bhav" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <div class="user-lock-search" style={{ position: "relative" }}>
                        <div class="confirm-bets" style={{ padding: "7px" }}>
                            <div class="custom-control custom-switch">
                                <input id="bookMakerRadio" type="checkbox" name="autocon-1" data-toggle="toggle" class="custom-control-input" value="true" />
                                <label for="bookMakerRadio" class="custom-control-label" id="bookMakerRadioVal">ON</label><span> (IS SHOWING)</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class={`function-wrap ${styles['function-wrap']} ${styles['col-lg-12']}`}>
                <div class={styles['col-lg-12']} style={{ marginBottom: "5px" }}>
                    <h2>Set Auto Fancy Min Max</h2>
                </div>
                <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                    <label style={{ width: "100%" }}>Pre Min 	 
                    <input type="number" class="form-control" id="fancyMinPre" placeholder="Pre Min Bet" /></label>
                </div>
                <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                    <label style={{ width: "100%" }}>Pre Max <input type="number" class="form-control" id="fancyMaxPre" placeholder="Pre Max Bet" /></label>
                </div>
                <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                    <label style={{ width: "100%" }}>	Pre Max PL <input type="number" class="form-control" min="0" id="fancyPLPre" placeholder="Pre Profit Loss" /></label>
                </div>
                <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                    <label style={{ width: "100%" }}>	 Min 	 
                    <input type="number" class="form-control" id="autoFancyMin" placeholder="Min Bet" /></label>
                </div>
                <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                    <label style={{ width: "100%" }}>	 Max 	<input type="number" class="form-control" id="autoFancyMax" placeholder="Max Bet" /></label>
                </div>
                <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                    <label style={{ width: "100%" }}>	 Max Profit <input type="number" class="form-control" min="0" id="autoFancyPL" placeholder="Fancy Profit Loss" /></label>
                </div>
                <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                    <label style={{ width: "100%" }}>	 Bet Delay <input type="number" class="form-control" min="0" id="autoFancyDelay" placeholder="Enter Delay" /></label>
                </div>
                <div class="col-lg-4 col-xs-6" style={{ marginBottom: "5px" }}>
                    <div class="user-lock-search" style={{ position: "relative" }}>
                        <div class="confirm-bets" style={{ padding: "7px" }}>
                        <div class="custom-control custom-switch">
                            <input id="autoFancyRadio" type="checkbox" name="autocon-1" data-toggle="toggle" class="custom-control-input" value="true" />
                            <label for="autoFancyRadio" class="custom-control-label" id="autoFancyRadioVal">ON</label><span> (IS SHOWING)</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class={`function-wrap ${styles['function-wrap']} ${styles['col-lg-12']}`}>
                <div class={styles['col-lg-12']} style={{ marginBottom: "5px" }}>
                    <h2>Set Premium Min Max</h2>
                </div>
                <div class="row" style={{ margin: "0" }}>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>Pre Min 	 
                        <input type="number" class="form-control" id="premMinPre" placeholder="Pre Min Bet" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>Pre Max <input type="number" class="form-control" id="premMaxPre" placeholder="Pre Max Bet" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	Pre Max PL <input type="number" class="form-control" min="0" id="premPLPre" placeholder="Pre Profit Loss" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Min 	 
                        <input type="number" class="form-control" id="premMin" placeholder="Min Bet" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Max <input type="number" class="form-control" id="premMax" placeholder="Max Bet" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Max Profit <input type="number" class="form-control" min="0" id="premPL" placeholder="Odds Profit Loss" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Bet Delay <input type="number" class="form-control" min="0" id="premDelay" placeholder="Enter Delay" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Max Bhav <input type="number" class="form-control" min="0" id="premMaxBhav" onkeypress="return isNumberKeyWithDot(event)" placeholder="Enter Bhav" /></label>
                    </div>
                    <div class={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <div class="user-lock-search" style={{ position: "relative" }}>
                        <div class="confirm-bets" style={{ padding: "7px" }}>
                            <div class="custom-control custom-switch">
                                <input id="premRadio" type="checkbox" name="autocon-1" data-toggle="toggle" class="custom-control-input" value="true" />
                                <label for="premRadio" class="custom-control-label" id="premRadioVal">ON</label><span> (IS SHOWING)</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn-send" style={{ width: "80px" }} onclick="setLimit()">Set Limit</button> 
        </div>
        </>        
    )
}
export default DefaultSetting;