import React from 'react';

import ResultContainer from './result-container/ResultContainer';
import SearchBar from './search-bar/SearchBar';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: {
                country: '',
                capital: '',
                region: '',
                subregion: ''
            }
        };

        this.onChangeSearchText = this.onChangeSearchText.bind(this);
    }

    render() {
        const {searchText} = this.state;
        const {onChangeSearchText} = this;
        return (
            <div>
                <div>
                    <table>
                        <tr>
                            {
                                Object.entries(searchText).map(([key, value]) => {
                                    return (
                                        <td><SearchBar key={key} column={key} value={value} onChange={onChangeSearchText}/></td>
                                    );
                                })
                            }
                        </tr>
                    </table>
                </div>
                <div>
                    <ResultContainer searchText={searchText}/>
                </div>
            </div>
        );
    }

    onChangeSearchText(column, value) {
        let {searchText} = this.state;

        searchText[column] = value;

        this.setState({searchText: searchText});
    }
}