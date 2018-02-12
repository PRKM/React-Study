import React from 'react';
import PropTypes from 'prop-types';

export default class ResultContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.props.searchData.filter(s => s.indexOf(this.props.filterText) >= 0)
                        .map((s, i) => {
                            return (
                                <h4 key={i}>{s}</h4>
                            )
                        })
                }
            </div>
        )
    }
}

ResultContainer.propTypes = {
    filterText: PropTypes.string,
    searchData: PropTypes.array
};