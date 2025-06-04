import type { FieldType, FieldProperty } from './enum';

// NOTE FieldConfig 타입 정의
export interface TextField {
  [FieldProperty.TYPE]: typeof FieldType.TEXT;
  [FieldProperty.DATA_INDEX]: string;
  [FieldProperty.LABEL]: string;
  [FieldProperty.REQUIRED]: boolean;
}

export interface SelectField {
  [FieldProperty.TYPE]: typeof FieldType.SELECT;
  [FieldProperty.DATA_INDEX]: string;
  [FieldProperty.LABEL]: string;
  [FieldProperty.REQUIRED]: boolean;
  [FieldProperty.SELECT_OPTIONS]?: { label: string; value: string }[];
}

export interface CheckboxField {
  [FieldProperty.TYPE]: typeof FieldType.CHECKBOX;
  [FieldProperty.DATA_INDEX]: string;
  [FieldProperty.LABEL]: string;
  [FieldProperty.REQUIRED]: boolean;
}

export interface DateField {
  [FieldProperty.TYPE]: typeof FieldType.DATE;
  [FieldProperty.DATA_INDEX]: string;
  [FieldProperty.LABEL]: string;
  [FieldProperty.REQUIRED]: boolean;
}

export interface TextareaField {
  [FieldProperty.TYPE]: typeof FieldType.TEXTAREA;
  [FieldProperty.DATA_INDEX]: string;
  [FieldProperty.LABEL]: string;
  [FieldProperty.REQUIRED]: boolean;
}

// FieldType 추가 시 여기에 해당 필드 타입 추가

export type FieldConfig = TextField | SelectField | CheckboxField | DateField | TextareaField;
