import React, { useMemo } from 'react';
import classNames from 'classnames';
import { Icon } from '../index';

export type ButtonSize = 'small' | 'middle' | 'large';
interface ButtonProps {
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  // https://github.com/yannickcr/eslint-plugin-react/issues/7#issuecomment-90294004
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps): React.ReactElement => {
  const { size = 'middle', loading = false, children, ...restProps } = props;
  const { disabled } = restProps;

  const isLoading = useMemo(() => loading && !disabled, [loading, disabled]);

  const cls = classNames('__e-ui-btn', size, { loading: isLoading });

  return (
    <button {...restProps} className={cls}>
      {isLoading && <Icon name="loading" className="btn-icon" />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
