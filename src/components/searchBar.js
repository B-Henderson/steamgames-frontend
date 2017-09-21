import React from 'react';



export default class SteamInput extends React.Component {
    render() {
        return (
            <div className="search-container">
            <div className="field has-addons">
                <div className="control is-expanded">
                    <input
                    className="input is-large steam-input is-fullwidth"
                    type="text"
                    placeholder="Steam ID"
                    value={this.props.val}
                    onChange={this.props.handleInput}
                    />
                </div>
                <div className="control">
                    <a
                    className="button is-large is-dark is-outlined is-inverted"
                    onClick={this.props.handleSearch}
                    >
                    Randomize
                    </a>
                </div>
            </div>
            </div>
        );
    }
}
