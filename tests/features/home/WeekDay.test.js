import React from 'react';
import { shallow } from 'enzyme';
import { WeekDay } from '../../../src/features/home/WeekDay';

describe('home/WeekDay', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <WeekDay {...props} />
    );

    expect(
      renderedComponent.find('.home-week-day').length
    ).toBe(1);
  });
});
