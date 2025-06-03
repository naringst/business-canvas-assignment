import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styled from 'styled-components';

const TableHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const TableHeaderTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;

const TableHeaderAddButton = styled(Button)`
  width: 73px;
  height: 32px;
  padding: ${({ theme }) => theme.padding.button.sm}px ${({ theme }) => theme.padding.button.md}px;
  gap: 8px;
  border-radius: ${({ theme }) => theme.borderRadius.buttonBorderRadius}px;
`;

const TableHeader = ({ onClickAdd }: { onClickAdd: () => void }) => {
  return (
    <TableHeaderContainer>
      <TableHeaderTitle>회원 목록</TableHeaderTitle>
      <TableHeaderAddButton type="primary" icon={<PlusOutlined />} onClick={onClickAdd}>
        추가
      </TableHeaderAddButton>
    </TableHeaderContainer>
  );
};

export default TableHeader;
