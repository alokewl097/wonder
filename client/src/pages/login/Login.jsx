import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './Login.css';
import useLogin from "../../hooks/useLogin";
 

const Login = () => {

 const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login, loading, error } = useLogin();
  const { token, login: loginContext } = useLogin();
  const navigate = useNavigate();
 
  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await login({ username, password });

    if (result.success) {
      loginContext(result.data.token, result.data.user);
      window.location.href= '/home'
    //   navigate("/home");
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
                    <form name="loginForm" method="post" onSubmit={handleLogin}>
                        <dl className="login-panel">
                            <dt>Login</dt>
                            <dd>
                                <input id="username" name="username" type="text" placeholder="Username" value={username} onChange={(e) => setUserName(e.target.value)} />
                            </dd>
                            <dd style={{ display: "flex", alignItems: "center" }}>
                                <input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <i onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", color: "#000", right: "10px", fontSize: "18px", cursor: "pointer" }} className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"}`} aria-hidden="true"></i>
                            </dd>

                            <dd><button id="loginBtn" type="submit" className="btn-send"> {loading ? "Logging in..." : "Login"} <img className="icon-login" src="/assets/images/transparent.gif" /></button>

                            </dd>
                            {error && <p style={{ color: "red" }}>{error}</p>}
                        </dl>
                    </form>
                </div>
                 
            </div>
        </>
    );
};
export default Login;
