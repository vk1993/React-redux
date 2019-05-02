import React from 'react';
import { shallow } from '../enzyme';

import Login from '../componets/Login';

describe('Login Test',()=>{
    
    it('should contain 1 Form tags',()=>{
        const wrapper = shallow(<Login />);
        expect(wrapper.find('form')).toHaveLength(1);
    })
})