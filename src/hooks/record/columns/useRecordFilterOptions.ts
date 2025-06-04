import { DEFAULT_FIELDS } from '@/constants/fields';
import type { MemberRecord } from '@/types/record/type';

export const useRecordFilterOptions = (
  field: (typeof DEFAULT_FIELDS)[number],
  records: MemberRecord[]
) => {
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
