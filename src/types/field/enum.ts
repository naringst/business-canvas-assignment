export const FieldType = {
    TEXT: 'text',
    TEXTAREA: 'textarea',
    DATE: 'date',
    SELECT: 'select',
    CHECKBOX: 'checkbox'
    // FieldType 추가 시 여기에 추가
  } as const;
  
  export type FieldType = typeof FieldType[keyof typeof FieldType];
  
  export const FieldProperty = {
    TYPE: 'type',
    DATA_INDEX: 'dataIndex',
    TITLE: 'title',
    REQUIRED: 'required',
    SELECT_OPTIONS: 'selectOptions'
  } as const;
  
  export type FieldProperty = typeof FieldProperty[keyof typeof FieldProperty];