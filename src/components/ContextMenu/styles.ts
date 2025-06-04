import { Dropdown } from 'antd';
import { styled } from 'styled-components';

export const StyledDropdown = styled(Dropdown)`
  .ant-dropdown-menu-item-danger {
    color: ${(props) => props.theme.colors.dropdown.colorError};
  }
`;
