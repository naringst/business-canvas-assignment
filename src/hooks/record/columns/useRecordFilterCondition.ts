import { DEFAULT_FIELDS } from '@/constants/fields';
import { FieldProperty } from '@/types/field/enum';
import type { MemberRecord } from '@/types/record/type';

type FieldType = (typeof DEFAULT_FIELDS)[number];

export const useRecordFilterCondition = (field: FieldType, record: MemberRecord) => {
  const dataIndex = field[FieldProperty.DATA_INDEX];
  if (!dataIndex) {
    return () => false;
  }

  return (value: string | number | boolean) =>
    String(record[dataIndex as keyof MemberRecord]) === String(value);
};
