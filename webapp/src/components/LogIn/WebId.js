import './LogIn.css';
import React from 'react';

class WebId extends React.Component {

    render() {
        return (
            <section>
                <p class="webid-title">WebId</p>
                <input class="webid-input" id="webId" type="text">
                </input>
            </section>
        );
    }
}

export default WebId;