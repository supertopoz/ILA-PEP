import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { Main } from './Main';

describe('Main', () => {
  test('is rendered', () => {
 
   const component = render(
     <Main/>
    );
    expect(component)
      .toMatchSnapshot();
  });
});