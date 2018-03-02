import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

const SearchBar = function(props) {
    let { column, value, onChange } = props;
    return (
        <div>
            <input type="search" value={value} placeholder={column} onChange={(e) => {onChange(column, e.target.value)}}/>
        </div>
    );
}

SearchBar.propTypes = {
    column: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default SearchBar;