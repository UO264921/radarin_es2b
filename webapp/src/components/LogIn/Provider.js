import React from 'react';

class Provider extends React.Component {

    render() {
        return (
            <div class="webId">
                <span>Provider</span>
                <select name= "providers" id="providers">
                    <option value="https://m.inrupt.net"> inrupt.net</option>
                    <option value="https://m.solidcommunity.net"> solidcommunity.net</option>
                </select>
            </div>
        );
    }
}

export default Provider;