import { shallow } from 'enzyme';
import CardList from './CardList';
import React from 'react';


it('expect to render CardList component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            userName: 'Snowman',
            email: 'JohnSnow@gmail.com'
        }
    ];
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot()
});