import React from 'react';
import Provider from './Provider';
import  LoginService from "../../services/LoginService.js"

class LogIn extends React.Component {

    getProvider(){
        var provider = document.getElementById("providers").value;
        return provider;
    }
    
    render() {
        return (
            <div class="Login">
                    <div>
                    <hr />
                        <Provider />
                    </div>
                    <div>
                        <button onClick={()=> new LoginService().login(this.getProvider())}>login</button>
                    </div>
            </div>
        );
    }
}
export default LogIn;