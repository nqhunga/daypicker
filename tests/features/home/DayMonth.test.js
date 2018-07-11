import React from 'react';
import { shallow } from 'enzyme';
import { DayMonth } from '../../../src/features/home/DayMonth';

describe('home/DayMonth', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DayMonth {...props} />
    );

    expect(
      renderedComponent.find('.home-day-month').length
    ).toBe(1);
  });
});
