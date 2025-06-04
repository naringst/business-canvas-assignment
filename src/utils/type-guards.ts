import type { SelectField } from '../types/field/type';
import { FieldProperty, FieldType } from '../types/field/enum';
import type { FieldConfig } from '../types/field/type';

export const isSelectField = (field: FieldConfig): field is SelectField => {
  return field[FieldProperty.TYPE] === FieldType.SELECT;
};
