import React from "react";
import styles from '../../assets/css/function.module.css';
const MinMaxBet = () => {
    return(
        <>
        <div className="main_wrap" style={{ height: "calc(100% - 105px)" }} >
            {/* <!-- function --> */}
            <button className="btn-send" style={{ width: "80px" }} onclick="setLimit()">Set Limit</button>
            <div className={`function-wrap ${styles['function-wrap']} ${styles['col-lg-12']}`}>
                <div className={styles['col-lg-12']} style={{ marginBottom: "5px" }}>
                    <h2>Set Auto Odds Min Max</h2>
                </div>
                <div className="row">
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>Pre Min 	 
                        <input type="number" className="form-control" id="autoOddsMinPre" placeholder="Pre Min Bet" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>Pre Max <input type="number" className="form-control" id="autoOddsMaxPre" placeholder="Pre Max Bet" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	Pre Max PL <input type="number" className="form-control" min="0" id="oddsPLPre" placeholder="Pre Profit Loss" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Min 	 
                        <input type="number" className="form-control" id="autoOddsMin" placeholder="Min Bet" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Max <input type="number" className="form-control" id="autoOddsMax" placeholder="Max Bet" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Max Profit <input type="number" className="form-control" min="0" id="oddsPL" placeholder="Odds Profit Loss" /></label>
                    </div>
                </div>
                <div className="row" style={{ margin: "0" }}>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Bet Delay <input type="number" className="form-control" min="0" id="autoOddsDelay" placeholder="Enter Delay" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Max Bhav <input type="number" className="form-control" min="0" id="autoMaxBhav" onkeypress="return isNumberKeyWithDot(event)" placeholder="Enter Bhav" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <div className="user-lock-search" style={{ position: "relative" }}>
                        <div className="confirm-bets" style={{ padding: "7px" }}>
                            <div className="custom-control custom-switch">
                                <input id="autoOddsRadio" type="checkbox" name="autocon-1" data-toggle="toggle" className="custom-control-input" value="true" />
                                <label for="autoOddsRadio" className="custom-control-label" id="autoOddsRadioVal">OFF</label><span> (IS SHOWING)</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`function-wrap ${styles['function-wrap']} ${styles['col-lg-12']}`}>
                <div className={styles['col-lg-12']} style={{ marginBottom: "5px" }}>
                    <h2>Set Other Market Min Max</h2>
                </div>
                <div className="row" style={{ margin: "0" }}>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>Pre Min 	 
                        <input type="number" className="form-control" id="OtherMinPre" placeholder="Pre Min Bet" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>Pre Max <input type="number" className="form-control" id="OtherMaxPre" placeholder="Pre Max Bet" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	Pre Max PL <input type="number" className="form-control" min="0" id="OtherPLPre" placeholder="Pre Profit Loss" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Min 	 
                        <input type="number" className="form-control" id="OtherMin" placeholder="Min Bet" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Max <input type="number" className="form-control" id="OtherMax" placeholder="Max Bet" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Max Profit <input type="number" className="form-control" min="0" id="OtherPL" placeholder=" Profit Loss" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Bet Delay <input type="number" className="form-control" min="0" id="OtherDelay" placeholder="Enter Delay" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Max Bhav <input type="number" className="form-control" min="0" id="OtherMaxBhav" onkeypress="return isNumberKeyWithDot(event)" placeholder="Enter Bhav" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <div className="user-lock-search" style={{ position: "relative" }}>
                        <div className="confirm-bets" style={{ padding: "7px" }}>
                            <div className="custom-control custom-switch">
                                <input id="otherOddsRadio" type="checkbox" name="autocon-1" data-toggle="toggle" className="custom-control-input" value="true" />
                                <label for="otherOddsRadio" className="custom-control-label" id="otherOddsRadioVal">OFF</label><span> (IS SHOWING)</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`function-wrap ${styles['function-wrap']} ${styles['col-lg-12']}`}>
                <div className={styles['col-lg-12']} style={{ marginBottom: "5px" }}>
                    <h2>Set BookMaker Min Max</h2>
                </div>
                <div className="row" style={{ margin: "0" }}>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>Pre Min 	 
                        <input type="number" className="form-control" id="bookMinPre" placeholder="Pre Min Bet" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>Pre Max <input type="number" className="form-control" id="bookMaxPre" placeholder="Pre Max Bet" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	Pre Max PL <input type="number" className="form-control" min="0" id="bookPLPre" placeholder="Pre Profit Loss" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Min 	 
                        <input type="number" className="form-control" id="bookMakerMin" placeholder="Min Bet" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Max <input type="number" className="form-control" id="bookMakerMax" placeholder="Max Bet" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Max Profit <input type="number" className="form-control" min="0" id="BookPL" placeholder="Odds Profit Loss" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Bet Delay <input type="number" className="form-control" min="0" id="bookMakerDelay" placeholder="Enter Delay" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Max Bhav <input type="number" className="form-control" min="0" id="bookMaxBhav" onkeypress="return isNumberKeyWithDot(event)" placeholder="Enter Bhav" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <div className="user-lock-search" style={{ position: "relative" }}>
                        <div className="confirm-bets" style={{ padding: "7px" }}>
                            <div className="custom-control custom-switch">
                                <input id="bookMakerRadio" type="checkbox" name="autocon-1" data-toggle="toggle" className="custom-control-input" value="true" />
                                <label for="bookMakerRadio" className="custom-control-label" id="bookMakerRadioVal">ON</label><span> (IS SHOWING)</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`function-wrap ${styles['function-wrap']} ${styles['col-lg-12']}`}>
                <div className={styles['col-lg-12']} style={{ marginBottom: "5px" }}>
                    <h2>Set Auto Fancy Min Max</h2>
                </div>
                <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                    <label style={{ width: "100%" }}>Pre Min 	 
                    <input type="number" className="form-control" id="fancyMinPre" placeholder="Pre Min Bet" /></label>
                </div>
                <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                    <label style={{ width: "100%" }}>Pre Max <input type="number" className="form-control" id="fancyMaxPre" placeholder="Pre Max Bet" /></label>
                </div>
                <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                    <label style={{ width: "100%" }}>	Pre Max PL <input type="number" className="form-control" min="0" id="fancyPLPre" placeholder="Pre Profit Loss" /></label>
                </div>
                <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                    <label style={{ width: "100%" }}>	 Min 	 
                    <input type="number" className="form-control" id="autoFancyMin" placeholder="Min Bet" /></label>
                </div>
                <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                    <label style={{ width: "100%" }}>	 Max 	<input type="number" className="form-control" id="autoFancyMax" placeholder="Max Bet" /></label>
                </div>
                <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                    <label style={{ width: "100%" }}>	 Max Profit <input type="number" className="form-control" min="0" id="autoFancyPL" placeholder="Fancy Profit Loss" /></label>
                </div>
                <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                    <label style={{ width: "100%" }}>	 Bet Delay <input type="number" className="form-control" min="0" id="autoFancyDelay" placeholder="Enter Delay" /></label>
                </div>
                <div className="col-lg-4 col-xs-6" style={{ marginBottom: "5px" }}>
                    <div className="user-lock-search" style={{ position: "relative" }}>
                        <div className="confirm-bets" style={{ padding: "7px" }}>
                        <div className="custom-control custom-switch">
                            <input id="autoFancyRadio" type="checkbox" name="autocon-1" data-toggle="toggle" className="custom-control-input" value="true" />
                            <label for="autoFancyRadio" className="custom-control-label" id="autoFancyRadioVal">ON</label><span> (IS SHOWING)</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`function-wrap ${styles['function-wrap']} ${styles['col-lg-12']}`}>
                <div className={styles['col-lg-12']} style={{ marginBottom: "5px" }}>
                    <h2>Set Premium Min Max</h2>
                </div>
                <div className="row" style={{ margin: "0" }}>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>Pre Min 	 
                        <input type="number" className="form-control" id="premMinPre" placeholder="Pre Min Bet" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>Pre Max <input type="number" className="form-control" id="premMaxPre" placeholder="Pre Max Bet" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	Pre Max PL <input type="number" className="form-control" min="0" id="premPLPre" placeholder="Pre Profit Loss" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Min 	 
                        <input type="number" className="form-control" id="premMin" placeholder="Min Bet" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Max <input type="number" className="form-control" id="premMax" placeholder="Max Bet" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Max Profit <input type="number" className="form-control" min="0" id="premPL" placeholder="Odds Profit Loss" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Bet Delay <input type="number" className="form-control" min="0" id="premDelay" placeholder="Enter Delay" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <label style={{ width: "100%" }}>	 Max Bhav <input type="number" className="form-control" min="0" id="premMaxBhav" onkeypress="return isNumberKeyWithDot(event)" placeholder="Enter Bhav" /></label>
                    </div>
                    <div className={`${styles['col-lg-2']} ${styles['col-xs-6']}`} style={{ marginBottom: "5px" }}>
                        <div className="user-lock-search" style={{ position: "relative" }}>
                        <div className="confirm-bets" style={{ padding: "7px" }}>
                            <div className="custom-control custom-switch">
                                <input id="premRadio" type="checkbox" name="autocon-1" data-toggle="toggle" className="custom-control-input" value="true" />
                                <label for="premRadio" className="custom-control-label" id="premRadioVal">ON</label><span> (IS SHOWING)</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn-send" style={{ width:"80px" }} onclick="setLimit()">Set Limit</button>
            
        </div>
        </>
    )
}
export default MinMaxBet;