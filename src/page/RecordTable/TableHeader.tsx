import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styled from 'styled-components';

const TableHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const TableHeader = ({ onClickAdd }: { onClickAdd: () => void }) => {
  return (
    <TableHeaderContainer>
      <h2>회원 목록</h2>
      <Button type="primary" icon={<PlusOutlined />} onClick={onClickAdd}>
        추가
      </Button>
    </TableHeaderContainer>
  );
};

export default TableHeader;
