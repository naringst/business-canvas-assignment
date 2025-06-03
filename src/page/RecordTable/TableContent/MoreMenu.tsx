import { Button, Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import type { MemberRecord } from '../../../types/record/type';

const StyledDropdown = styled(Dropdown)`
  .ant-dropdown-menu-item-danger {
    color: ${(props) => props.theme.colors.dropdown.colorError};
  }
`;

interface MoreMenuProps {
  record: MemberRecord;
  onEdit: (record: MemberRecord) => void;
  onDelete: (record: MemberRecord) => void;
}

const MoreMenu = ({ record, onEdit, onDelete }: MoreMenuProps) => {
  const menuItems = {
    items: [
      {
        key: 'edit',
        label: '수정',
        onClick: () => onEdit(record),
      },
      {
        key: 'delete',
        label: '삭제',
        danger: true,
        onClick: () => onDelete(record),
      },
    ],
  };

  return (
    <StyledDropdown
      menu={menuItems}
      trigger={['click']}
      placement="bottomRight"
      overlayStyle={{
        minWidth: '181px',
        gap: '8px',
      }}
      align={{ offset: [0, 8] }}
    >
      <Button type="text" icon={<MoreOutlined />} />
    </StyledDropdown>
  );
};

export default MoreMenu;
