import './login.css' ;
import {useContext} from "react";
import RouteState from "../../Contexts/route";

export default function SignupForm()
{
    let Route_ = useContext(RouteState) ;
    return (
        <>
            <div className={'loginForm'}>
                <input type={'text'} id={'email'} placeholder={'example@email.com'}/>
                <input type={'text'} id={'name'} placeholder={'Name...'}/>
                <input type={'password'} id={'password'} placeholder={"Password..."}/>
                <input type={'password'} id={'ConfirmPassword'} placeholder={"Confirm Password..."}/>
                <div className={'formControll'}>
                    <button className={"Left"} onClick={()=>{Route_.setroute("/login")}}>Log in</button>
                    <button className={"Right"}>Next</button>
                </div>
            </div>
        </>
    )
}