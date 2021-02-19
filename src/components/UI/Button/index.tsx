import Ink from 'react-ink';

interface UIButtonProps {
  text: string;
  className?: string;
  type?: 'button' | 'submit';
  onClick?: React.ChangeEvent<HTMLInputElement>;
}

export default function UIButton({
  text,
  type,
  onClick,
  className,
}: UIButtonProps): JSX.Element {
  return (
    <button className={className} type={type} onClick={onClick}>
      {text}
      <Ink />
    </button>
  );
}

UIButton.defaultProps = {
  type: 'button',
  onClick: null,
  className: '',
};
