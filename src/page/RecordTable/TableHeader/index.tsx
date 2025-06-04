import { PlusOutlined } from '@ant-design/icons';

import { TableHeaderAddButton, TableHeaderContainer, TableHeaderTitle } from './styles';

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
