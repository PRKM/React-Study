import React from 'react';
import {shallow} from 'enzyme';

import ResultContainer from './ResultContainer';

import 'isomorphic-fetch';

describe('<ResultContainer/>', () => {
    let searchText;

    beforeAll(() => {
        searchText = {
            country: '',
            capital: '',
            region: '',
            subregion: ''
        };
    })

    test('Init state', () => {
        searchText = {
            country: '',
            capital: '',
            region: '',
            subregion: ''
        };
        let component = shallow(
            <ResultContainer searchText={searchText}/>,
        );
        
        expect(component.prop('searchText')).toBeDefined();
    });
})