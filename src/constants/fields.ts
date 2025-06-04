import type { FieldConfig } from '../types/field/type';
import { FieldType, FieldProperty } from '../types/field/enum';

export const DEFAULT_FIELDS: FieldConfig[] = [
  {
    [FieldProperty.TYPE]: FieldType.TEXT,
    [FieldProperty.DATA_INDEX]: 'name',
    [FieldProperty.LABEL]: '이름',
    [FieldProperty.REQUIRED]: true,
  },
  {
    [FieldProperty.TYPE]: FieldType.TEXT,
    [FieldProperty.DATA_INDEX]: 'address',
    [FieldProperty.LABEL]: '주소',
    [FieldProperty.REQUIRED]: false,
  },
  {
    [FieldProperty.TYPE]: FieldType.TEXTAREA,
    [FieldProperty.DATA_INDEX]: 'memo',
    [FieldProperty.LABEL]: '메모',
    [FieldProperty.REQUIRED]: false,
  },
  {
    [FieldProperty.TYPE]: FieldType.DATE,
    [FieldProperty.DATA_INDEX]: 'joinedAt',
    [FieldProperty.LABEL]: '가입일',
    [FieldProperty.REQUIRED]: true,
  },
  {
    [FieldProperty.TYPE]: FieldType.SELECT,
    [FieldProperty.DATA_INDEX]: 'job',
    [FieldProperty.LABEL]: '직업',
    [FieldProperty.REQUIRED]: false,
    [FieldProperty.SELECT_OPTIONS]: [
      { label: '개발자', value: 'developer' },
      { label: 'PO', value: 'po' },
      { label: '디자이너', value: 'designer' },
    ],
  },
  {
    [FieldProperty.TYPE]: FieldType.CHECKBOX,
    [FieldProperty.DATA_INDEX]: 'isAgreedWithEmail',
    [FieldProperty.LABEL]: '이메일 수신 동의',
    [FieldProperty.REQUIRED]: false,
  },
];
