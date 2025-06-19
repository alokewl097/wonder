import React from "react";
import styles from '../../assets/css/function.module.css';
const BookmakerSetting = () => {
    return(
        <>
       <div className="main_wrap" style={{ height: "calc(100% - 105px)" }}>
            {/* <!-- function --> */}
            <div className={`function-wrap ${styles['function-wrap']} ${styles['col-lg-12']}`}>
                <div className={styles['col-lg-12']} style={{ marginBottom: "5px" }}>
                    <h2>Set BookMaker Header</h2>
                </div>
                <div className={styles['col-lg-2']} style={{ marginBottom: "5px" }}>
                    <label>	 Header 	 
                    <input type="text" className="form-control" id="bookMakerHeader" placeholder="Enter Header" readonly="readonly" /></label>
                </div>
                <div className={styles['col-lg-2']} style={{ marginBottom: "5px" }}>
                    <label>	 Team1 <input type="text" className="form-control" id="bookMakerTeam1" placeholder="Enter Team 1" readonly="readonly" /> </label> 
                </div>
                <div className={styles['col-lg-2']} style={{ marginBottom: "5px" }}>
                    <label>Team2 <input type="text" className="form-control" id="bookMakerTeam2" placeholder="Enter Team 2" readonly="readonly" /></label>
                </div>
                <div className={styles['col-lg-2']} style={{ marginBottom: "5px" }}>
                    <label>Team3 <input type="text" className="form-control" id="bookMakerTeam3" placeholder="Enter Team 3" readonly="readonly" /></label>
                </div>
                <div className="col-lg-2 " style={{ marginBottom: "5px" }}>
                    <button style={{ width: "80px" }} className="btn-send" onclick="setLimit()">Set Headers</button>
                </div>
            </div>
            <div className={`function-wrap ${styles['function-wrap']} ${styles['col-lg-12']}`}>
                <div className={styles['col-lg-12']} style={{ marginBottom: "5px" }}>
                    <h2>Data BookMaker Header</h2>
                </div>
                <div className={styles['col-lg-2']} style={{ marginBottom: "5px" }}>
                    <label>	 Header 	 
                    <input type="text" className="form-control" id="databookMakerHeader" placeholder="Enter Header" readonly="readonly" /></label>
                </div>
                <div className={styles['col-lg-2']} style={{ marginBottom: "5px" }}>
                    <label>	 Team1 <input type="text" className="form-control" id="databookMakerTeam1" placeholder="Enter Team 1" readonly="readonly" /> </label> 
                </div>
                <div className={styles['col-lg-2']} style={{ marginBottom: "5px" }}>
                    <label>Team2 <input type="text" className="form-control" id="databookMakerTeam2" placeholder="Enter Team 2" readonly="readonly" /></label>
                </div>
                <div className={styles['col-lg-2']} style={{ marginBottom: "5px" }}>
                    <label>Team3 <input type="text" className="form-control" id="databookMakerTeam3" placeholder="Enter Team 3" readonly="readonly" /></label>
                </div>
                <div className="col-lg-2 " style={{ marginBottom: "5px" }}>
                </div>
            </div>
        </div>
        </>
    )
}
export default BookmakerSetting;