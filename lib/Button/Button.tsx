import React from 'react';
import classNames from 'classnames';

export type ButtonSize = 'small' | 'middle' | 'large';
interface ButtonProps {
  size?: ButtonSize;
  disabled?: boolean;
  // https://github.com/yannickcr/eslint-plugin-react/issues/7#issuecomment-90294004
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps): React.ReactElement => {
  const { size = 'middle', disabled = false, children } = props;

  const cls = classNames('__e-ui-btn', size);

  return (
    <button disabled={disabled} className={cls}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
