import { Table } from 'antd';
import type { TableProps } from 'antd';

import { useState } from 'react';

import type { FilteredInfo, MemberRecord } from '@/types/record/type';

import { getColumns } from './components/TableColumns';

interface TableContentProps {
  onEdit: (record: MemberRecord) => void;
  onDelete: (record: MemberRecord) => void;
  records: MemberRecord[];
}

const TableContent = ({ onEdit, onDelete, records }: TableContentProps) => {
  const [filteredInfo, setFilteredInfo] = useState<FilteredInfo>({});
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const handleChange: TableProps<MemberRecord>['onChange'] = (_, filters) => {
    setFilteredInfo(filters as FilteredInfo);
  };

  const columns = getColumns({
    filteredInfo,
    onEdit,
    onDelete,
  });

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(selectedRowKeys);

      // NOTE 필요하다면 여기서 선택된 레코드들에 대한 동작 추가 처리 가능
      // 2nd param : selectedRows: MemberRecord[],
    },
  };

  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={records}
      onChange={handleChange}
      pagination={false}
      rowKey="id"
    />
  );
};

export default TableContent;
