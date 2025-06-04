import { Checkbox } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { DEFAULT_FIELDS } from '@/constants/fields';
import { MEMBER_RECORDS } from '@/constants/records';
import { FieldProperty } from '@/types/field/enum';
import type { MemberRecord } from '@/types/record/type';
import { isSelectField } from '@/utils/type-guards';

import FilterDropdown from './RecordFilterDropdown/FilterDropdown';
import RecordMoreMenu from './RecordMoreMenu';

type FilteredInfo = Partial<Record<keyof MemberRecord, string[] | null>>;

interface GetColumnsProps {
  filteredInfo: FilteredInfo;
  onEdit: (record: MemberRecord) => void;
  onDelete: (record: MemberRecord) => void;
}

const getColumnFilters = (field: (typeof DEFAULT_FIELDS)[number], records: MemberRecord[]) => {
  if (field.dataIndex === 'isAgreedWithEmail') {
    return [
      { text: '선택됨', value: 'true' },
      { text: '선택 안함', value: 'false' },
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
    const filters = getColumnFilters(field, MEMBER_RECORDS as unknown as MemberRecord[]);

    return {
      title: field[FieldProperty.LABEL],
      dataIndex: field[FieldProperty.DATA_INDEX],
      filters,
      onFilter: (value: string | number | boolean, record: MemberRecord) => {
        if (field[FieldProperty.DATA_INDEX]) {
          return (
            String(record[field[FieldProperty.DATA_INDEX] as keyof MemberRecord]) === String(value)
          );
        }
        return false;
      },
      filteredValue: filteredInfo[field[FieldProperty.DATA_INDEX]] || null,
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }: any) => (
        <FilterDropdown
          filters={filters}
          selectedKeys={selectedKeys}
          setSelectedKeys={setSelectedKeys}
          confirm={confirm}
        />
      ),
      ...(field[FieldProperty.DATA_INDEX] === 'isAgreedWithEmail' && {
        render: (value: boolean) => <Checkbox checked={value} />,
      }),
      ...(field[FieldProperty.DATA_INDEX] === 'job' && {
        render: (value: string) => {
          const jobField = DEFAULT_FIELDS.find((f) => f[FieldProperty.DATA_INDEX] === 'job');
          if (jobField && isSelectField(jobField)) {
            const option = jobField[FieldProperty.SELECT_OPTIONS]?.find(
              (opt) => opt.value === value
            );
            return option?.label || value;
          }
          return value;
        },
      }),
    } as ColumnsType<MemberRecord>[number];
  }),
  {
    title: '',
    key: 'action',
    width: 48,
    render: (record: MemberRecord) => (
      <RecordMoreMenu record={record} onEdit={onEdit} onDelete={onDelete} />
    ),
  },
];
