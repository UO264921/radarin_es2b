// External dependences
import { getDefaultSession, login } from "@inrupt/solid-client-authn-browser";
import FileClient from "solid-file-client";
import auth from "solid-auth-client";


const Login = async (provider, webId) => {
    const exist = await existWebId(webId);
    const size = String(webId).length;
    if (exist && size > 0) {
        //alert("Valido " + webId);
        provider = getProvider(webId);
        //await auth.login(provider);
        await loginWithProvider(provider);
    }
    else if (size === parseInt(0)) {
        //alert("WebId vacio " + webId);
        //await auth.login(provider);
        await loginWithProvider(provider);
    }
    else {
        //alert("Invalido " + webId);
    }
}
async function existWebId(webId) {
    try {
        const fc = new FileClient(auth);
        let op = async (client) => await client.itemExists(webId);
        return await op(fc);
    }
    catch (e) {
        return false;
    }
}
function getProvider(webId) {
    if (webId.includes("profile")) {
        const webIdParts = webId.split("/");
        const providerParts = webIdParts[2].split(".");
        const provider = "https://m." + providerParts[1] + "." + providerParts[2];
        alert(provider);
        return provider;
    }
    return webId
}
async function loginWithProvider(provider) {
    return await login({
        oidcIssuer: provider,
        redirectUrl: window.location.href
    });
}
const Register = async (provider) => {

}
const Logout = async () => {
    await auth.logout().then().alert("logout")
}
export { Login, Register, Logout }