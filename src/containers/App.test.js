import { shallow } from 'enzyme';
import App from './App';
import React from 'react';

let wrapper;
beforeEach(() => {
    const mockProps = {
        robots: [],
        searchField: ''
    }
    wrapper = shallow(<App  {...mockProps}/>)
})

it('it renders main page without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})

it('it filters robots correctly', () => {
    expect(wrapper).toEqual({})
})


