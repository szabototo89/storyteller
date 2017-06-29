import * as React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { Dashboard } from '../../src/storyboard/dashboard';

describe("Dashboard component", () => {
  it('should have a .dashboard element', () => {
    const component = shallow(<Dashboard />);
  })
});
 