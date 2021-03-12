import './LogIn.css';
import { Button } from '@material-ui/core'
import { Login, Register } from '../../services/LoginService';

function getProvider() {
    var provider = document.getElementById("providers").value;
    return provider;
}
function getWebId() {
    var webId = document.getElementById("webId").value;
    return webId;
}

function LoginButton(props) {
    return (
        <Button variant="contained"
            class="loginButton"
            onClick={() => Login(getProvider(), getWebId())}>
            login</Button>);
}

function RegisterButton(props) {
    return (
        <Button
            variant="contained"
            class="registerButton"
            onClick={() => Register(getProvider())}>
            Crear un pod</Button>);
}

export { LoginButton, RegisterButton };