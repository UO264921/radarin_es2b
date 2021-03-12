import "./LogIn.css"
import React from 'react';

class Provider extends React.Component {

    render() {
        return (
            <div>
                <p class="provider-title">Proveedor</p>
                <select class="provider-select" name= "providers" id="providers">
                    <option value="https://m.inrupt.net"> inrupt.net</option>
                    <option value="https://m.solidcommunity.net"> solidcommunity.net</option>
                </select>
            </div>
        );
    }
}

export default Provider;