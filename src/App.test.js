import React from 'react';
import { shallow } from 'enzyme';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import App from './App';

describe('App', () => {
  const app = shallow(<App />);
  it('renders the title', () => {
    expect(app.find('h1').exists()).toBe(true);
  });
});