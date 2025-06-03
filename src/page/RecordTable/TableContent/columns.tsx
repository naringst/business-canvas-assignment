import { Checkbox } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { MemberRecord } from '../../../types/record/type';
import { DEFAULT_FIELDS } from '../../../constants/fields';
import MoreMenu from './MoreMenu';

type FilteredInfo = Partial<Record<keyof MemberRecord, string[] | null>>;

interface GetColumnsProps {
  filteredInfo: FilteredInfo;
  onEdit: (record: MemberRecord) => void;
  onDelete: (record: MemberRecord) => void;
}

export const getColumns = ({
  filteredInfo,
  onEdit,
  onDelete,
}: GetColumnsProps): ColumnsType<MemberRecord> => [
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
      <MoreMenu record={record} onEdit={onEdit} onDelete={onDelete} />
    ),
  },
];
