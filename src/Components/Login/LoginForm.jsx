import './login.css' ;
import {useContext} from "react";
import RouteState from "../../Contexts/route";

export default function LoginForm()
{
    let Route_ = useContext(RouteState) ;
    return (
        <>
            <div className={'loginForm'}>
                <input type={'text'} id={'phone'} placeholder={'example@email.com'}/>
                <input type={'password'} id={'password'} placeholder={"Password..."}/>
                <div className={'formControll'}>
                    <button className={"Left"} onClick={()=>{Route_.setroute("/signup")}}>Sign up</button>
                    <button className={"Right"}>Next</button>
                </div>
            </div>
        </>
    )
}