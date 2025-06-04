import { Table } from 'antd';
import type { TableProps } from 'antd';
import { useState } from 'react';
import type { MemberRecord } from '../../../types/record/type';

import { getColumns } from './columns';

interface TableContentProps {
  onEdit: (record: MemberRecord) => void;
  onDelete: (record: MemberRecord) => void;
  records: MemberRecord[];
}

const TableContent = ({ onEdit, onDelete, records }: TableContentProps) => {
  const [filteredInfo, setFilteredInfo] = useState<
    Partial<Record<keyof MemberRecord, string[] | null>>
  >({});
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const handleChange: TableProps<MemberRecord>['onChange'] = (_, filters) => {
    setFilteredInfo(filters as typeof filteredInfo);
  };

  const columns = getColumns({
    filteredInfo,
    onEdit,
    onDelete,
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
      dataSource={records}
      onChange={handleChange}
      pagination={false}
    />
  );
};

export default TableContent;
