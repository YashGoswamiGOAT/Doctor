import './login.css' ;
import {useContext, useState} from "react";
import RouteState from "../../Contexts/route";
import Account from "../../Contexts/account";

export default function Verify()
{
    let Route_ = useContext(RouteState) ;
    let account = useContext(Account) ;
    return (
        <>
            <div className={'loginForm'}>
                <div id={"verrification"}>Helo</div>
                <input type={'number'} id={'otp'} placeholder={'OTP'}/>
                <div className={'formControll'}>
                    <button className={"Left"} onClick={()=>{Route_.setroute("/signup")}}>Previous</button>
                    <button className={"Right"} onClick={()=>{
                        let enteredOTP = document.querySelector("#otp").value ;
                        // console.log(account.account.otp,enteredOTP,account.account.otp==enteredOTP) ;
                        document.querySelector("#verrification").innerHTML = account.account.otp==enteredOTP ;
                    }}>Verify</button>
                </div>
            </div>
        </>
    )
}