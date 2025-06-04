import type { ColumnsType } from 'antd/es/table';
import type { MemberRecord } from '../../../../types/record/type';
import { DEFAULT_FIELDS } from '../../../../constants/fields';
import type { FieldConfig } from '../../../../types/field/type';

type FilteredInfo = Partial<Record<keyof MemberRecord, string[] | null>>;

interface GetColumnsProps {
  filteredInfo: FilteredInfo;
  onEdit: (record: MemberRecord) => void;
  onDelete: (record: MemberRecord) => void;
}

const getEmailAgreementColumn = (
  field: FieldConfig,
  filteredInfo: FilteredInfo
): ColumnsType<MemberRecord>[number] => ({
  ...field,
  filters: [
    { text: '동의', value: 'true' },
    { text: '미동의', value: 'false' },
  ],
  onFilter: (value: boolean | React.Key, record: MemberRecord) => {
    return String(record[field.dataIndex as keyof MemberRecord]) === String(value);
  },
  filteredValue: filteredInfo[field.dataIndex] || null,
});

export const getTableColumns = ({
  filteredInfo,
  onEdit,
  onDelete,
}: GetColumnsProps): ColumnsType<MemberRecord> => [
  ...DEFAULT_FIELDS.map((field) => {
    if (field.dataIndex === 'isAgreedWithEmail') {
      return getEmailAgreementColumn(field, filteredInfo);
    }

    return {
      ...field,
      onFilter: (value: string | number | boolean, record: MemberRecord) => {
        if (field.dataIndex) {
          return String(record[field.dataIndex as keyof MemberRecord]) === String(value);
        }
        return false;
      },
      filteredValue: filteredInfo[field.label] || null,
    } as ColumnsType<MemberRecord>[number];
  }),
  {
    title: '',
    key: 'action',
    render: (_: unknown, record: MemberRecord) => null,
  },
];
