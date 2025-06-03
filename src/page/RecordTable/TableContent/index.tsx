import { Table } from 'antd';
import type { TableProps } from 'antd';
import { useState } from 'react';
import type { MemberRecord } from '../../../types/record/type';
import { MEMBER_RECORDS } from '../../../constants/records';

import { getColumns } from './columns';

interface TableContentProps {
  onEdit: (record: MemberRecord) => void;
}

const TableContent = ({ onEdit }: TableContentProps) => {
  const [filteredInfo, setFilteredInfo] = useState<
    Partial<Record<keyof MemberRecord, string[] | null>>
  >({});
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const handleChange: TableProps<any>['onChange'] = (_, filters) => {
    setFilteredInfo(filters as typeof filteredInfo);
  };

  const handleDelete = (record: MemberRecord) => {};

  const columns = getColumns({
    filteredInfo,
    onEdit,
    onDelete: handleDelete,
  });

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
    },
  };

  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={MEMBER_RECORDS}
      onChange={handleChange}
      pagination={false}
    />
  );
};

export default TableContent;
