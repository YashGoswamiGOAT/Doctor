import './login.css' ;
import {useContext, useState} from "react";
import RouteState from "../../Contexts/route";
import Account from "../../Contexts/account";
import route from "../../Contexts/route";

function Verify(otp)
{

    var otp = fetch(process.env.REACT_APP_BACKEND_API+"/sendmail",{
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            to : document.querySelector("#email").value,
            name : document.querySelector("#name").value,
            otp : otp
        })
    })
}

export default function SignupForm()
{
    function randomIntFromInterval(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    let Route_ = useContext(RouteState) ;
    let [otp,setopt] = useState(null);
    let account = useContext(Account) ;
    let obj  = {
        'name' : "",
        'email' : "",
        'otp' : otp,
    }
    return (
        <>
            <div className={'loginForm'}>
                <input type={'text'} id={'email'} placeholder={'example@email.com'}/>
                <input type={'text'} id={'name'} placeholder={'Name...'}/>
                <input type={'password'} id={'password'} placeholder={"Password..."}/>
                <input type={'password'} id={'ConfirmPassword'} placeholder={"Confirm Password..."}/>
                <div className={'formControll'}>
                    <button className={"Left"} onClick={()=>{Route_.setroute("/login")}}>Log in</button>
                    <button className={"Right"}
                    onClick={()=>{
                        let otp = randomIntFromInterval(1000,9999) ;
                        setopt(otp) ;
                        Verify(otp) ;
                        obj  = {
                            'name' : document.querySelector("#name").value,
                            'email' : document.querySelector("#email").value,
                            'otp' : otp,
                            'Auth' : false
                        }
                        account.setaccount(obj)
                        Route_.setroute("/verify")
                    }}
                    >Next</button>
                </div>
            </div>
        </>
    )
}