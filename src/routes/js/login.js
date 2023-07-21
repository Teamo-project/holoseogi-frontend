import React from "react";
import Navigation from "../../components/js/landing_navigation.js";
import login from "../css/login.module.css";
import GoogleButton from "../../components/js/GoogleButton.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

function Login() {
  return (
    <div>
      <Navigation />
      <div className={login.login_total}>
        <div className={login.login_box}>
          <div className={login.login_form}>
            <h1>Sign In</h1>
            <p className={login.login_form_p}>
              It's time to check Your business
            </p>
            <GoogleOAuthProvider clientId="617889757552-kkjsgl2e9rs1heefavl8macrgnsvh891.apps.googleusercontent.com">
              <GoogleButton />
            </GoogleOAuthProvider>

            <p> 위의 버튼을 눌러 구글 아이디를 연동하여 로그인을 진행하세요.</p>
            <span>구글 아이디를 통하여 바로 로그인이 가능합니다.</span>
          </div>
        </div>

        <div className={login.description_box}>
          <div className={login.description}>
            <h1>FEATURES</h1>
            <p>
              <i class="fa-regular fa-circle-check"></i>100% Free Sign Up
            </p>
            <p>
              <i class="fa-regular fa-circle-check"></i>Free register company
            </p>
            <p>
              <i class="fa-regular fa-circle-check"></i>Account can be linked
            </p>
            <p>
              <i class="fa-regular fa-circle-check"></i>Anyone can use
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;