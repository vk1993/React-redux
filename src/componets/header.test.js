import React from 'react';
import Header from './header';
import { shallow,configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import NavItem from './header/NavItem';

configure({adapter: new Adapter()})

describe('<Header />',()=>{
    it('it should contains five <Nav /> items',()=>{
        const wrapper = shallow(<Header />);
        expect(wrapper.find(NavItem)).toHaveLength(5);
    })
})