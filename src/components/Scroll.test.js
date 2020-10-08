import { shallow } from 'enzyme';
import Scroll from './Scroll';
import React from 'react';

it('expect to render Scroll component', () => {
    expect(shallow(<Scroll />)).toMatchSnapshot()
});