import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useMemo } from 'react';

import { DEFAULT_FIELDS } from '@/constants/fields';
import { FieldProperty, FieldType } from '@/types/field/enum';
import type { FieldConfig } from '@/types/field/type';

const createValidationSchema = (fields: FieldConfig[]) => {
  const schema: Record<string, yup.Schema<any>> = {};

  fields.forEach((field) => {
    const fieldType = field[FieldProperty.TYPE];
    const fieldName = field[FieldProperty.DATA_INDEX];
    const fieldLabel = field[FieldProperty.LABEL];
    const isRequired = field[FieldProperty.REQUIRED];

    switch (fieldType) {
      case FieldType.TEXT:
        schema[fieldName] = yup
          .string()
          .max(20, `글자수 20을 초과할 수 없습니다.`)
          .when('$required', {
            is: () => isRequired,
            then: (schema) => schema.required(`${fieldLabel}은 필수값입니다.`),
          });
        break;
      case FieldType.TEXTAREA:
        schema[fieldName] = yup
          .string()
          .max(50, `글자수 50을 초과할 수 없습니다.`)
          .when('$required', {
            is: () => isRequired,
            then: (schema) => schema.required(`${fieldLabel}을(를) 입력해주세요`),
          });
        break;
      case FieldType.DATE:
        schema[fieldName] = yup.string().when('$required', {
          is: () => isRequired,
          then: (schema) => schema.required(`${fieldLabel}은 필수값입니다.`),
        });
        break;
      case FieldType.CHECKBOX:
        schema[fieldName] = yup.boolean().transform((value) => (value === null ? false : value));
        break;
      case FieldType.SELECT:
        schema[fieldName] = yup.string().when('$required', {
          is: () => isRequired,
          then: (schema) => schema.required(`${fieldLabel}을(를) 선택해주세요`),
        });
        break;
    }
  });

  return yup.object(schema);
};

export const useFormValidation = () => {
  const schema = useMemo(() => createValidationSchema(DEFAULT_FIELDS), []);

  return {
    resolver: yupResolver(schema),
    schema,
  };
};
