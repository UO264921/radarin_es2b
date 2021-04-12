// Dependences from: ~/ui/logIn/modules
import { Login, Register } from './LoginService';
import '../LogIn.css';

function getProvider() {
    var provider = document.getElementById("providers").value;
    return provider;
}
function getWebId() {
    var webId = document.getElementById("webId").value;
    return webId;
}

function LoginButton() {
    return (
        <button variant="contained"
            className="loginButton"
            onClick={() => Login(getProvider(), getWebId())}>
            login</button>);
}

function RegisterButton() {
    return (
        <button
            variant="contained"
            className="registerButton"
            onClick={() => Register(getProvider())}>
            Crear un pod</button>);
}

export { LoginButton, RegisterButton };