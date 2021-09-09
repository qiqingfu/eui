import React, { useMemo } from 'react';
import classNames from 'classnames';
import { Icon } from '../index';

export type ButtonSize = 'small' | 'middle' | 'large';

export type ButtonType = 'default' | 'primary' | 'dange' | 'success';

interface ButtonProps extends React.DOMAttributes<Element> {
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
  loading?: boolean;
  // https://github.com/yannickcr/eslint-plugin-react/issues/7#issuecomment-90294004
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps): React.ReactElement => {
  const { size = 'middle', loading = false, type = 'default', children, ...restProps } = props;
  const { disabled } = restProps;

  const isLoading = useMemo(() => loading && !disabled, [loading, disabled]);

  const cls = classNames(
    'e-btn',
    { [`e-btn_${size}`]: size },
    { 'e-btn_loading': isLoading, [`e-btn_${type}`]: type },
  );

  return (
    <button {...restProps} className={cls}>
      {isLoading && <Icon name="loading" className="e-btn__icon" />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
