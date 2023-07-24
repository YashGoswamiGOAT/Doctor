import React from "react";
import {useContext} from "react";
import Account from "../../Contexts/account";
import './login.css' ;
import banner from '../../images/design1.png' ;
import logo from '../../images/Logo.png' ;

export default function Login(){
    let account = useContext(Account) ;
    return (
        <>
            <div className={'homeScreenGrid'}>
                <img src={banner} className={'banner'}/>
                <div className={'loginForm'}>
                    <input type={'number'} id={'phone'}/>
                    <input type={'password'} id={'password'}/>
                </div>
                <div className={'footer'}>
                    <img src={logo} className={'logo'}/>
                </div>
            </div>
        </>
    )
}