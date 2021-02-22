import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import UIButton from './index';

describe('Test Button component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();
    render(<UIButton type="button" text="text test" onClick={mockCallBack} />);
    fireEvent.click(screen.getByTestId('button'));
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
});
