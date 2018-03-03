import React from 'react';
import {shallow} from 'enzyme';

import SearchBar from './SearchBar';

import 'isomorphic-fetch';

describe('<SearchBar/>', () => {
    let onChange;

    beforeAll(() => {
        onChange = (column, value) => console.log(`${column}: ${value}`);
    })

    it('Init render', () => {
        let component = shallow(<SearchBar column="country" value="" onChange={onChange}/>);

        expect(component).toMatchSnapshot();
    });

    it('Init state', () => {
        let component = shallow(<SearchBar column="country" value="" onChange={onChange}/>);

        // expect(component.prop('column')).toEqual('country');
        expect(component.prop('value')).toEqual('');
        // expect(component.prop('onChange')).toBeDefined();
    })
})