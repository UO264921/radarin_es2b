import {login,getDefaultSession}from "@inrupt/solid-client-authn-browser";
import React from "react";

class LoginService extends React.Component{
    login(provider) {
        var session = getDefaultSession();
        if (!session.info.isLoggedIn) {
           return login({
                oidcIssuer: provider,
                redirectUrl: window.location.href
            });
        }
        session.fetch(session.info.webId);
    }
}
export default LoginService
