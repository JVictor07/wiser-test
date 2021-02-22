import * as React from 'react';
import '@testing-library/jest-dom';
import UIInput from './index';
import { render } from '../../../../__tests__/customRender';

describe('Test UIInput component', () => {
  it('Test label name', () => {
    const { getByTestId } = render(
      <UIInput
        type="text"
        name="email"
        label="E-mail"
        register={null}
        errors={{
          email: { type: 'required', message: 'email must be a valid email' },
        }}
      />
    );

    expect(getByTestId('label-text')).toHaveTextContent('E-mail');
  });

  it('Test UIInput id', () => {
    const { getByTestId } = render(
      <UIInput
        type="text"
        name="email"
        label="E-mail"
        register={null}
        errors={{
          email: { type: 'required', message: 'email must be a valid email' },
        }}
      />
    );

    expect(getByTestId('input')).toHaveProperty('id', 'email');
  });

  it('Test UIInput name', () => {
    const { getByTestId } = render(
      <UIInput
        type="text"
        name="email"
        label="E-mail"
        register={null}
        errors={{
          email: { type: 'required', message: 'email must be a valid email' },
        }}
      />
    );

    expect(getByTestId('input')).toHaveProperty('name', 'email');
  });

  it('Test UIInput type', () => {
    const { getByTestId } = render(
      <UIInput
        type="text"
        name="email"
        label="E-mail"
        register={null}
        errors={{
          email: { type: 'required', message: 'email must be a valid email' },
        }}
      />
    );

    expect(getByTestId('input')).toHaveProperty('type', 'text');
  });

  it('Test if has the error icon', () => {
    const { getByTestId } = render(
      <UIInput
        type="text"
        name="email"
        label="E-mail"
        register={null}
        errors={{
          email: { type: 'required', message: 'email must be a valid email' },
        }}
      />
    );

    expect(getByTestId('svg')).toBeTruthy();
  });

  it('Test if has the error message', () => {
    const { getByTestId } = render(
      <UIInput
        type="text"
        name="email"
        label="E-mail"
        register={null}
        errors={{
          email: { type: 'required', message: 'email must be a valid email' },
        }}
      />
    );

    expect(getByTestId('error-msg')).toBeTruthy();
  });
});
