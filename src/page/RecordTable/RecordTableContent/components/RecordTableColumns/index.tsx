import type { ColumnsType } from 'antd/es/table';

import { DEFAULT_FIELDS } from '@/constants/fields';
import { MEMBER_RECORDS } from '@/constants/records';
import { FieldProperty } from '@/types/field/enum';
import type { MemberRecord } from '@/types/record/type';

import { useRecordFilterCondition } from '../../../../../hooks/record/columns/useRecordFilterCondition';
import { useRecordFilterOptions } from '../../../../../hooks/record/columns/useRecordFilterOptions';
import type { FilteredInfo } from '../../../../../types/record/type';
import RecordFilterDropdown from '../RecordFilterDropdown';
import RecordMoreMenu from '../RecordMoreMenu';
import { renderCheckbox, renderJobLabel } from './FieldRenderers';

interface GetRecordColumnsProps {
  filteredInfo: FilteredInfo;
  onEdit: (record: MemberRecord) => void;
  onDelete: (record: MemberRecord) => void;
}

const createRecordFieldColumn = (
  field: (typeof DEFAULT_FIELDS)[number],
  filteredInfo: GetRecordColumnsProps['filteredInfo'],
  records: MemberRecord[]
) => {
  const filters = useRecordFilterOptions(field, records);
  const dataIndex = field[FieldProperty.DATA_INDEX];

  return {
    title: field[FieldProperty.LABEL],
    dataIndex,
    filters,
    onFilter: (value: string | number | boolean, record: MemberRecord) =>
      useRecordFilterCondition(field, record)(value),
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

const createRecordActionColumn = (
  onEdit: GetRecordColumnsProps['onEdit'],
  onDelete: GetRecordColumnsProps['onDelete']
) => ({
  title: '',
  key: 'action',
  width: 48,
  render: (record: MemberRecord) => (
    <RecordMoreMenu record={record} onEdit={onEdit} onDelete={onDelete} />
  ),
});

export const getRecordColumns = ({
  filteredInfo,
  onEdit,
  onDelete,
}: GetRecordColumnsProps): ColumnsType<MemberRecord> => [
  ...DEFAULT_FIELDS.map((field) =>
    createRecordFieldColumn(field, filteredInfo, MEMBER_RECORDS as unknown as MemberRecord[])
  ),
  createRecordActionColumn(onEdit, onDelete),
];
