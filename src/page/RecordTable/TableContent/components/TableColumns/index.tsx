import type { ColumnsType } from 'antd/es/table';

import { DEFAULT_FIELDS } from '@/constants/fields';
import { MEMBER_RECORDS } from '@/constants/records';
import { FieldProperty } from '@/types/field/enum';
import type { MemberRecord } from '@/types/record/type';

import { useColumnFilterCondition } from '../../../../../hooks/table/columns/useColumnFilterCondition';
import { useColumnFilterOptions } from '../../../../../hooks/table/columns/useColumnFilterOptions';
import type { FilteredInfo } from '../../../../../types/record/type';
import RecordFilterDropdown from '../RecordFilterDropdown';
import RecordMoreMenu from '../RecordMoreMenu';
import { renderCheckbox, renderJobLabel } from './FieldRenderers';

interface GetColumnsProps {
  filteredInfo: FilteredInfo;
  onEdit: (record: MemberRecord) => void;
  onDelete: (record: MemberRecord) => void;
}

const createFieldColumn = (
  field: (typeof DEFAULT_FIELDS)[number],
  filteredInfo: GetColumnsProps['filteredInfo'],
  records: MemberRecord[]
) => {
  const filters = useColumnFilterOptions(field, records);
  const dataIndex = field[FieldProperty.DATA_INDEX];

  return {
    title: field[FieldProperty.LABEL],
    dataIndex,
    filters,
    onFilter: (value: string | number | boolean, record: MemberRecord) =>
      useColumnFilterCondition(field, record)(value),
    filteredValue: filteredInfo[dataIndex] || null,
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }: any) => (
      <RecordFilterDropdown
        filters={filters}
        selectedKeys={selectedKeys}
        setSelectedKeys={setSelectedKeys}
        confirm={confirm}
      />
    ),
    ...(dataIndex === 'isAgreedWithEmail' && {
      render: renderCheckbox,
    }),
    ...(dataIndex === 'job' && {
      render: renderJobLabel,
    }),
  } as ColumnsType<MemberRecord>[number];
};

const createActionColumn = (
  onEdit: GetColumnsProps['onEdit'],
  onDelete: GetColumnsProps['onDelete']
) => ({
  title: '',
  key: 'action',
  width: 48,
  render: (record: MemberRecord) => (
    <RecordMoreMenu record={record} onEdit={onEdit} onDelete={onDelete} />
  ),
});

export const getColumns = ({
  filteredInfo,
  onEdit,
  onDelete,
}: GetColumnsProps): ColumnsType<MemberRecord> => [
  ...DEFAULT_FIELDS.map((field) =>
    createFieldColumn(field, filteredInfo, MEMBER_RECORDS as unknown as MemberRecord[])
  ),
  createActionColumn(onEdit, onDelete),
];
