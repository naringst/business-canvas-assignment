import { PlusOutlined } from '@ant-design/icons';

import { memo, useMemo } from 'react';

import { TableHeaderAddButton, TableHeaderContainer, TableHeaderTitle } from './styles';

interface RecordTableHeaderProps {
  onClickAdd: () => void;
}

const RecordTableHeader = memo(({ onClickAdd }: RecordTableHeaderProps) => {
  const addIcon = useMemo(() => <PlusOutlined />, []);

  return (
    <TableHeaderContainer>
      <TableHeaderTitle>회원 목록</TableHeaderTitle>
      <TableHeaderAddButton type="primary" icon={addIcon} onClick={onClickAdd}>
        추가
      </TableHeaderAddButton>
    </TableHeaderContainer>
  );
});

RecordTableHeader.displayName = 'RecordTableHeader';

export default RecordTableHeader;
