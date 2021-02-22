import * as React from 'react';
import StyledUIInput from './styles';

import * as ErrorSvg from '../../../assets/error.svg';

interface UIInputProps {
  errors: {};
  name: string;
  type: string;
  label: string;
  register(): void;
}

export default function UIInput({
  type,
  name,
  errors,
  register,
  label,
}: UIInputProps): JSX.Element {
  return (
    <StyledUIInput hasError={errors && errors[name]}>
      <label htmlFor={name}>
        <span data-testid="label-text">{label}</span>
        <input
          id={name}
          type={type}
          name={name}
          ref={register}
          data-testid="input"
        />

        {errors && errors[name] && <ErrorSvg data-testid="svg" />}

        {errors && errors[name] && errors[name].type === 'required' ? (
          <span data-testid="error-msg" className="error">
            Este campo é obrigatório;
          </span>
        ) : (
          errors &&
          errors[name] &&
          errors[name].message === 'email must be a valid email' && (
            <span data-testid="error-msg" className="error">
              Digite um e-mail válido;
            </span>
          )
        )}
      </label>
    </StyledUIInput>
  );
}
