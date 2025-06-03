import type { FieldConfig } from "../types/field/type";


export const DEFAULT_FIELDS: FieldConfig[] = [
  { dataIndex: 'name', title: '이름', type: 'text', required: true },
  { dataIndex: 'address', title: '주소', type: 'text', required: false },
  { dataIndex: 'memo', title: '메모', type: 'textarea', required: false },
  { dataIndex: 'joinedAt', title: '가입일', type: 'date', required: true },
  { dataIndex: 'job', title: '직업', type: 'select', required: false, selectOptions: [{ label: '개발자', value: 'developer' }, { label: 'PO', value: 'po' }, { label: '디자이너', value: 'designer' } ] },
  { dataIndex: 'isAgreedWithEmail', title: '이메일 수신 동의', type: 'checkbox', required: false }
]