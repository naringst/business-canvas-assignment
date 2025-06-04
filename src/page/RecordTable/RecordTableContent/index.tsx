import { Table } from 'antd';
import type { TableProps } from 'antd';

import { useState } from 'react';

import type { FilteredInfo, MemberRecord } from '@/types/record/type';

import { getRecordColumns } from './components/RecordTableColumns';

interface RecordTableContentProps {
  onEdit: (record: MemberRecord) => void;
  onDelete: (record: MemberRecord) => void;
  records: MemberRecord[];
}

const RecordTableContent = ({ onEdit, onDelete, records }: RecordTableContentProps) => {
  const [filteredInfo, setFilteredInfo] = useState<FilteredInfo>({});
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const handleChange: TableProps<MemberRecord>['onChange'] = (_, filters) => {
    setFilteredInfo(filters as FilteredInfo);
  };

  const columns = getRecordColumns({
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

export default RecordTableContent;
