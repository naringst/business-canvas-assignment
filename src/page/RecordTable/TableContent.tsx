import { Table, Button, Dropdown, Checkbox } from 'antd';
import type { TableProps } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import { MoreOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import type { MemberRecord } from '../../types/record/type';
import { DEFAULT_FIELDS } from '../../constants/fields';
import { MEMBER_RECORDS } from '../../constants/records';

const StyledDropdown = styled(Dropdown)`
  .ant-dropdown-menu {
    min-width: 185px;
  }

  .ant-dropdown-menu-item-danger {
    color: ${(props) => props.theme.colors.dropdown.colorError};
  }
`;

type FilteredInfo = Partial<Record<keyof MemberRecord, string[] | null>>;

interface TableContentProps {
  onEdit: (record: MemberRecord) => void;
}

const TableContent = ({ onEdit }: TableContentProps) => {
  const [filteredInfo, setFilteredInfo] = useState<FilteredInfo>({});
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const handleChange: TableProps<any>['onChange'] = (_, filters) => {
    setFilteredInfo(filters as FilteredInfo);
  };

  const handleDelete = (record: MemberRecord) => {};

  const getMoreMenuItems = (record: MemberRecord) => ({
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
        onClick: () => handleDelete(record),
      },
    ],
  });

  const columns: ColumnsType<MemberRecord> = [
    ...DEFAULT_FIELDS.map((field) => {
      if (field.dataIndex === 'isAgreedWithEmail') {
        return {
          ...field,
          filters: [
            { text: '동의', value: 'true' },
            { text: '미동의', value: 'false' },
          ],
          onFilter: (value: string | number | boolean, record: MemberRecord) => {
            return String(record[field.dataIndex as keyof MemberRecord]) === String(value);
          },
          filteredValue: filteredInfo[field.dataIndex] || null,
          render: (value: boolean) => <Checkbox checked={value} disabled />,
        } as ColumnsType<MemberRecord>[number];
      }

      return {
        ...field,
        onFilter: (value: string | number | boolean, record: MemberRecord) => {
          if (field.dataIndex) {
            return String(record[field.dataIndex as keyof MemberRecord]) === String(value);
          }
          return false;
        },
        filteredValue: filteredInfo[field.title] || null,
      } as ColumnsType<MemberRecord>[number];
    }),
    {
      title: '',
      key: 'action',
      render: (_: unknown, record: MemberRecord) => (
        <StyledDropdown
          menu={getMoreMenuItems(record)}
          trigger={['click']}
          placement="bottomRight"
          overlayStyle={{ minWidth: '185px', gap: '10px' }}
        >
          <Button type="text" icon={<MoreOutlined />} />
        </StyledDropdown>
      ),
    },
  ];

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
