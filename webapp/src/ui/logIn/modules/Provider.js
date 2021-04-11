// External dependences
import React from 'react';

// Dependences from: ~/ui/logIn/modules
import "../logIn.css"

function Provider(props) {
    return (
        <div>
            <p className="provider-title">Proveedor</p>
            <select className="provider-select" name="providers" id="providers">
                <option value="https://m.inrupt.net"> inrupt.net</option>
                <option value="https://m.solidcommunity.net"> solidcommunity.net</option>
            </select>
        </div>
    );
}

export default Provider;