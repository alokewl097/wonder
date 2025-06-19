import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import axios from "axios";
 

const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
 

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous error

        try {
            const res = await axios.post(`/api/v1/mpanels/user/login`, {
                username,
                password,
                mpanelid: "6835a376164982c3cc2155c9", 
            });

            console.log("Login Success:", res.data);
            navigate("/dashboard"); 

        } catch (err) {
   
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError("Something went wrong. Please try again.");
            }
        }
    };
    return (
        <>
            <div className="body">
                <div className="loginWrap">
                    <div className="kv">
                        <img id="poupppLogo" src="https://imagedelivery.net/I9sos4ch_2vM7bVAQ311tg/baajiwala.live-mostplay-bn-desktop.webp/LoginImage?v=0.32" />
                    </div>
                    <h2 style={{ color: "#000", fontWeight: "bold", textAlign: "center" }} id="loginMessage">-</h2>
                    <form name="loginForm" method="post" onSubmit={handleLogin} accept-charset="utf-8" autocomplete="off">
                        <dl className="login-panel">
                            <dt>Login</dt>
                            <dd>
                                <input id="username" name="username" type="text" placeholder="Username" value={username} onChange={(e) => setUserName(e.target.value)} />
                            </dd>
                            <dd style={{ display: "flex", alignItems: "center" }}>
                                <input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <i onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", color: "#000", right: "10px", fontSize: "18px", cursor: "pointer" }} className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"}`} aria-hidden="true"></i>
                            </dd>

                            <dd><button id="loginBtn" type="submit" className="btn-send">Login <img className="icon-login" src="/assets/images/transparent.gif" /></button>

                            </dd>
                            {error && <p style={{ color: "red" }}>{error}</p>}
                        </dl>
                    </form>
                </div>
                <div className="moreinfoWrap">
                    <div id="supportWrap" className="supportWrap">
                        <div className="supportService">
                            <a id="support_email" href="#" className="support-mail ui-link"><img src="/assets/images/transparent.gif" title="Email" /></a>
                            <a id="support_whatsapp" className="support-whatsapp ui-link"><img src="/assets/images/transparent.gif" title="WhatsApp" /></a>
                            <a id="support_telegram" className="support-telegram ui-link"><img src="/assets/images/transparent.gif" title="Telegram" /></a>
                            <a id="support_skype" href="#" className="support-skype ui-link"><img src="/assets/images/transparent.gif" title="Skype" /></a>
                            <a id="support_instagram" href="#" className="support-ig ui-link"><img src="/assets/images/transparent.gif" title="Instagram" /></a>
                            <a id="support_facebook" href="#" className="support-fb ui-link"><img src="/assets/images/transparent.gif" title="Facebook" /></a>
                        </div>
                        <div className="supportInfo">
                            <div id="supportDetail_email" className="support-detail"><a id="emailContent" className="ui-link"></a></div>
                            <div id="supportDetail_whatsapp" className="support-detail">
                                <a id="whatsappContent" className="ui-link"></a>
                            </div>
                            <div id="supportDetail_telegram" className="support-detail">
                                <a id="telegramContent" className="ui-link"></a>
                            </div>
                            <div id="supportDetail_skype" className="support-detail">
                                <a id="skypeContent" className="ui-link"></a>
                            </div>
                            <div id="supportDetail_instagram" className="support-detail">
                                <a id="instagramContent" className="ui-link"></a>
                            </div>
                            <div id="supportDetail_facebook" className="support-detail">
                                <a id="facebookContent" className="ui-link"></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Power by -->
                <!-- Browser Support --> */}
                    <div className="browser-wrap">
                        <img src="/assets/images/transparent.gif" /><br />
                        Our website works best in the newest and last prior version of these browsers: <br />Google Chrome. Firefox
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;
