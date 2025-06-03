import { Checkbox } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { MemberRecord } from '../../../types/record/type';
import { DEFAULT_FIELDS } from '../../../constants/fields';
import MoreMenu from './MoreMenu';
import { MEMBER_RECORDS } from '../../../constants/records';

type FilteredInfo = Partial<Record<keyof MemberRecord, string[] | null>>;

interface GetColumnsProps {
  filteredInfo: FilteredInfo;
  onEdit: (record: MemberRecord) => void;
  onDelete: (record: MemberRecord) => void;
}

const getColumnFilters = (field: (typeof DEFAULT_FIELDS)[number], records: MemberRecord[]) => {
  if (field.dataIndex === 'isAgreedWithEmail') {
    return [
      { text: '동의', value: 'true' },
      { text: '미동의', value: 'false' },
    ];
  }
  const uniqueValues = Array.from(
    new Set(records.map((record) => record[field.dataIndex as keyof MemberRecord]))
  );
  return uniqueValues.map((value) => ({
    text: String(value),
    value: String(value),
  }));
};

export const getColumns = ({
  filteredInfo,
  onEdit,
  onDelete,
}: GetColumnsProps): ColumnsType<MemberRecord> => [
  ...DEFAULT_FIELDS.map((field) => {
    return {
      ...field,
      filters: getColumnFilters(field, MEMBER_RECORDS as unknown as MemberRecord[]),
      onFilter: (value: string | number | boolean, record: MemberRecord) => {
        if (field.dataIndex) {
          return String(record[field.dataIndex as keyof MemberRecord]) === String(value);
        }
        return false;
      },
      filteredValue: filteredInfo[field.dataIndex] || null,
    } as ColumnsType<MemberRecord>[number];
  }),
  {
    title: '',
    key: 'action',
    render: (_: unknown, record: MemberRecord) => (
      <MoreMenu record={record} onEdit={onEdit} onDelete={onDelete} />
    ),
  },
];
