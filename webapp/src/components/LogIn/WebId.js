import './LogIn.css';
import React from 'react';

function WebId(props) {
    return (
        <section>
            <p className="webid-title">WebId</p>
            <input className="webid-input" id="webId" type="text">
            </input>
        </section>
    );
}

export default WebId;