import React from "react";
import {useContext} from "react";
import Account from "../../Contexts/account";
import './login.css' ;
import banner from '../../images/design1.png' ;
import logo from '../../images/Logo.png' ;
import RouteState from "../../Contexts/route";
import {Routes,Route} from "react-router";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

// Finilizing login

export default function Login(){
    let account = useContext(Account) ;
    let Route_ = useContext(RouteState) ;
    return (
        <>
            <div className={'homeScreenGrid'}>
                <img src={banner} className={'banner'}/>
                <div className={'loginForm'}>
                    <Routes location={Route_.route}>
                        <Route path={"/login/*"} element={<LoginForm/>}/>
                        <Route path={"/signup/*"} element={<SignupForm/>}/>
                    </Routes>
                </div>
                <div className={'footer'}>
                    <img src={logo} className={'logo'}/>
                </div>
            </div>
        </>
    )
}