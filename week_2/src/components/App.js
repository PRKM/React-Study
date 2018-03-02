import React from 'react';
import axios from 'axios';

import SearchBar from './search-bar/SearchBar';
import ResultContainer from './result-container/ResultContainer';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            filterText: '',
            searchData: []
        };

        this.onChangeFilterText = this.onChangeFilterText.bind(this);
    }

    componentWillMount() {
        axios.get('https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json')
            .then(res => {
                 this.setState({searchData: res.data.Reggae});
            });
    }

    onChangeFilterText(text) {
        this.setState({filterText: text});
    }

    render() {
        return (
            <div style={{width: '300px', margin: '0px auto', textAlign: 'center'}}>
                <SearchBar text={this.state.filterText} onChange={this.onChangeFilterText} />
                <ResultContainer filterText={this.state.filterText} searchData={this.state.searchData}/>
            </div>
        );
    }
}