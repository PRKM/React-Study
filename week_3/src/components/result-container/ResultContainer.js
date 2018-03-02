import React from 'react';

import './ResultContainer.css';

export default class ResultContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentWillMount() {
        fetch('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
            .then(res => {
                res.json()
                    .then(data => {
                        data.forEach(o => o.country = o.name.official);
                        this.setState({data: data});
                    });
            });
    }

    render() {
        let data = Object.assign(this.state.data);
        const {country, capital, region, subregion} = this.props.searchText;

        data = data.filter(o => {
            return (
                o.name.official.match(new RegExp(country), 'gi') &&
                o.capital.toString().match(new RegExp(capital), 'gi') &&
                o.region.match(new RegExp(region), 'gi') &&
                o.subregion.match(new RegExp(subregion), 'gi')
            );
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Capital</th>
                        <th>Region</th>
                        <th>Subregion</th>
                        <th>Latitude</th>
                        <th>Longtitude</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((o, i) => {
                            return (
                                <tr key={i}>
                                    <td>{o.country}</td>
                                    <td>{o.capital.toString()}</td>
                                    <td>{o.region}</td>
                                    <td>{o.subregion}</td>
                                    <td>{o.latlng[0]}</td>
                                    <td>{o.latlng[1]}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}