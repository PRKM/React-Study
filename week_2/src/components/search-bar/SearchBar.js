import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.text} onChange={(e) => {this.props.onChange(e.target.value)}}/>
            </div>
        )
    }
}

SearchBar.propTypes = {
    text: PropTypes.string,
    onChange: PropTypes.func
};