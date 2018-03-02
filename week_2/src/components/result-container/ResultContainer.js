import React from 'react';
import PropTypes from 'prop-types';

import './ResultContainer.css';

export default class ResultContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { searchData, filterText } = this.props;
        return (
            <ul>
                {
                    searchData.filter(s => s.match(new RegExp(filterText, 'gi')))
                        .map((s, i) => {
                            return (
                                <li key={i}>{s}</li>
                            )
                        })
                }
            </ul>
        )
    }
}

ResultContainer.propTypes = {
    filterText: PropTypes.string,
    searchData: PropTypes.array
};