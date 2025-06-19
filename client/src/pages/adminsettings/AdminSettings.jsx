import React from 'react';
import styles from './AdminSettings.module.css';

const AdminSettings = () => {
  return (
    <div className="main_wrap" style={{ height: "calc(100% - 105px)" }}>
      {/* General Settings */}
      <div className="function-wrap col-lg-12">
        <div className="col-lg-12" style={{ marginBottom: "5px" }}>
          <h2 style={{ margin: "0 5px" }}>General Settings</h2>
        </div>
        <ul className="status_but" style={{ width: "auto" }}>
          <li><a className={`but_suspend ${styles.but_suspend}  ${styles.openchangepwdmodal}`} href="#suspend" data-status="suspend"></a></li>
          <li><a className={`but_suspend ${styles.but_suspend}  ${styles.opendepositchipmodal}`} href="#suspend" data-status="suspend"></a></li>
          <li><a className={`but_suspend ${styles.but_suspend}  ${styles.searchusericon}`} href="/Asearchusers" data-status="suspend"></a></li>
          <li><a className={`but_suspend ${styles.but_suspend}  ${styles.websetting}`} href="/AWebsiteSetting" data-status="suspend"></a></li>
          <li><a className={`but_suspend ${styles.but_suspend}  ${styles.defaultsettings}`} href="/ADeafultSetting" data-status="suspend"></a></li>
          <li><a className={`but_suspend ${styles.but_suspend}  ${styles.cusers}`} href="/gameUsersList/4/A/2" data-status="suspend"></a></li>
          <li><a className={`but_suspend ${styles.but_suspend}  ${styles.p2ptransfer}`} href="/P2PSetting" data-status="suspend"></a></li>
          <li><a className={`but_suspend ${styles.but_suspend}  ${styles.surveillanceicon}`} href="/Asurveillance" data-status="suspend"></a></li>
          <li><a className={`but_suspend ${styles.but_suspend}  ${styles.limitset}`} href="/whiteLimit" data-status="suspend"></a></li>
        </ul>
      </div>

      {/* Match And Bets */}
      <div className="function-wrap col-lg-12">
        <div className="col-lg-12" style={{ marginBottom: "5px" }}>
          <h2 style={{ margin: "0 5px" }}>Match And Bets</h2>
        </div>
        <ul className="status_but" style={{ width: "auto" }}>
          <li><a className={`but_suspend ${styles.but_suspend}  ${styles.aactivematch}`} href="/AactiveMatch" data-status="suspend"></a></li>
          <li><a className={`but_suspend ${styles.but_suspend}  ${styles.ainactivematch}`} href="/AinactiveMatch" data-status="suspend"></a></li>
          <li><a className={`but_suspend ${styles.but_suspend}  ${styles.adeletedbet}`} href="/AdeletedBets" data-status="suspend"></a></li>
          <li><a className={`but_suspend ${styles.but_suspend}  ${styles.aupdatestatus}`} href="/AupdateFancyStatus" data-status="suspend"></a></li>
          <li><a className={`but_suspend ${styles.but_suspend}  ${styles.asuspendresult}`} href="/AsuspendedResults" data-status="suspend"></a></li>
        </ul>
      </div>

      {/* Message Settings */}
      <div className="function-wrap col-lg-12">
        <div className="col-lg-12" style={{ marginBottom: "5px" }}>
          <h2 style={{ margin: "0 5px" }}>Message Settings</h2>
        </div>
        <ul className="status_but" style={{ width: "auto" }}>
          <li><a className={`but_suspend ${styles.but_suspend}  ${styles.ausermessage}`} href="/AUserMessage" data-status="suspend"></a></li>
          <li><a className={`but_suspend ${styles.but_suspend}  ${styles.ahypermessage}`} href="/AHyperMessage" data-status="suspend"></a></li>
          <li><a className={`but_suspend ${styles.but_suspend}  ${styles.aimpmessage}`} href="/AImpMessage" data-status="suspend"></a></li>
          <li><a className={`but_suspend ${styles.but_suspend}  ${styles.imgmsg}`} href="/AImageAdd" data-status="suspend"></a></li>
        </ul>
      </div>

      {/* User Settings */}
      <div className="function-wrap col-lg-12">
        <div className="col-lg-12" style={{ marginBottom: "5px" }}>
          <h2 style={{ margin: "0 5px" }}>User Settings</h2>
        </div>
        <ul className="status_but" style={{ width: "auto" }}>
          <li><a className={`but_suspend ${styles.but_suspend}  ${styles.ainactiveuser}`} href="#suspend" data-status="suspend"></a></li>
          <li><a className={`but_suspend ${styles.but_suspend}  ${styles.abetlockuser}`} href="#suspend" data-status="suspend"></a></li>
          <li><a className={`but_suspend ${styles.but_suspend}  ${styles.deletedUser}`} href="/AdeletedUsers" data-status="suspend"></a></li>
        </ul>
      </div>

      {/* Match And Bets - Additional */}
      <div className="function-wrap col-lg-12">
        <div className="col-lg-12" style={{ marginBottom: "5px" }}>
          <h2 style={{ margin: "0 5px" }}>Match And Bets</h2>
        </div>
        <ul className="status_but" style={{ width: "auto" }}>
          <li><a className={`but_suspend ${styles.but_suspend}  ${styles.acheatbet}`} href="#suspend" data-status="suspend"></a></li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSettings;
