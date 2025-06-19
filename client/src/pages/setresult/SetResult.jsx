import React from "react";
import { Link } from "react-router-dom";
import styles from './SetResult.module.css';
const SetResult = () => {
    return(
        <>
            <div className="main_wrap" style={{ height: "calc(100% - 105px)" }}>
              {/* General Settings */}
              <div className="function-wrap col-lg-12">
                <div className="col-lg-12" style={{ marginBottom: "5px" }}>
                  <h2 style={{ margin: "0 5px" }}>Set Result</h2>
                </div>
                <ul className="status_but" style={{ width: "auto" }}>
                  <li><Link className={`but_suspend ${styles.but_suspend}  ${styles.asetfancyres}`} to="/SetFancyResult" data-status="suspend"></Link></li>
                  <li><Link className={`but_suspend ${styles.but_suspend}  ${styles.asetmarketres}`} to="/SetMarketResult" data-status="suspend"></Link></li> 
                </ul>
              </div>
            </div>
        </>
    )
}
export default SetResult;