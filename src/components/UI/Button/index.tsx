/* eslint-disable react/button-has-type */
import * as React from 'react';

interface UIButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function UIButton({
  text,
  type,
  onClick,
  className,
}: UIButtonProps): JSX.Element {
  return (
    <button
      type={type}
      data-testid="button"
      className={className}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      <span data-testid="button-span">{text}</span>
    </button>
  );
}

UIButton.defaultProps = {
  type: 'button',
  onClick: null,
  className: '',
};
