import type { Control } from 'react-hook-form';

import { DEFAULT_FIELDS } from '@/constants/fields';
import { FieldProperty } from '@/types/field/enum';
import type { MemberRecord } from '@/types/record/type';

import { FieldRenderer } from './FieldRenderer';
import { FormBodyContainer } from './styles';

interface FormBodyProps {
  control: Control<MemberRecord>;
}

const FormBody = ({ control }: FormBodyProps) => {
  return (
    <FormBodyContainer>
      {DEFAULT_FIELDS.map((field) => (
        <FieldRenderer
          key={field[FieldProperty.DATA_INDEX]}
          field={field}
          control={control as Control<MemberRecord>}
        />
      ))}
    </FormBodyContainer>
  );
};

export default FormBody;
