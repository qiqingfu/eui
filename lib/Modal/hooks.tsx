import React, { useState, useEffect } from 'react';
import { Button } from '../index';
import { Type } from '../_util/index';

interface useEventReturn {
  okHandle(e: React.MouseEvent): void;
  cancelHandle(e: React.MouseEvent): void;
}

interface useFooterParams extends useEventReturn {
  footer?: React.ReactNode[] | null;
}

interface useFooterReturn {
  footerNode: React.ReactNode;
}

export const useEvent = (
  onOk?: React.MouseEventHandler,
  onCancel?: React.MouseEventHandler,
): useEventReturn => {
  const cancelHandle = (e: React.MouseEvent) => {
    if (onCancel && Type.Function(onCancel)) {
      onCancel(e);
    }
  };

  const okHandle = (e: React.MouseEvent) => {
    if (onOk && Type.Function(onOk)) {
      onOk(e);
    }
  };

  return {
    okHandle,
    cancelHandle,
  };
};

export const useFooter = ({ okHandle, cancelHandle, footer }: useFooterParams): useFooterReturn => {
  const initFooter = (
    <div className="e-modal__footer">
      <Button key="cancel" size="small" onClick={cancelHandle}>
        取消
      </Button>
      <Button key="confirm" size="small" type="primary" onClick={okHandle}>
        确认
      </Button>
    </div>
  );

  const [footerNode, setFooter] = useState<React.ReactNode | null>(initFooter);
  // 后面需要进行优化
  useEffect(() => {
    if (footer === null) {
      setFooter(null);
    } else if (footer === undefined) {
      setFooter(initFooter);
    } else {
      setFooter(<div className="e-modal__footer">{footer}</div>);
    }
  }, [footer]);

  return {
    footerNode,
  };
};
