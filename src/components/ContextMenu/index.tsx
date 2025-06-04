import { MoreOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { StyledDropdown } from './styles';

export interface MenuItem<T = unknown> {
  key: string;
  label: string;
  danger?: boolean;
  onClick: (record: T) => void;
}

interface ContextMenuProps<T = unknown> {
  record: T;
  menuItems: MenuItem<T>[];
  trigger?: ('click' | 'hover' | 'contextMenu')[];
  placement?: 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight';
  minWidth?: number;
  offset?: [number, number];
}

const ContextMenu = <T extends unknown>({
  record,
  menuItems,
  trigger = ['click'],
  placement = 'bottomRight',
  minWidth = 181,
  offset = [0, 8],
}: ContextMenuProps<T>) => {
  const menu = {
    items: menuItems.map(({ key, label, danger, onClick }) => ({
      key,
      label,
      danger,
      onClick: () => onClick(record),
    })),
  };

  return (
    <StyledDropdown
      menu={menu}
      trigger={trigger}
      placement={placement}
      overlayStyle={{
        minWidth: `${minWidth}px`,
        gap: '8px',
      }}
      align={{ offset }}
    >
      <Button type="text" icon={<MoreOutlined />} />
    </StyledDropdown>
  );
};

export default ContextMenu;
