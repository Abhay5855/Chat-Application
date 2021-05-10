import React from 'react'
import './Login.css'
import {Button} from "@material-ui/core"
import {auth,provider} from "../Firebase"
function Login() {


    const signIn = () =>{

        auth 
        .signInWithPopup(provider)
        .then(result => {

            console.log(result)

        })

        .catch((error) => {
            alert(error.message)
        })

    }
    return (
        <div className="login">

        <div className="login__container">

        <Button onClick={signIn}>Sign In with Google</Button>

        </div>
            
        </div>
    )
}

export default Login
