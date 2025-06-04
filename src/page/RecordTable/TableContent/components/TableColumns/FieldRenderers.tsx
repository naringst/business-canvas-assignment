import { Checkbox } from 'antd';

import { DEFAULT_FIELDS } from '@/constants/fields';
import { FieldProperty } from '@/types/field/enum';
import { isSelectField } from '@/utils/type-guards';

export const renderCheckbox = (value: boolean) => <Checkbox checked={value} />;

export const renderJobLabel = (value: string) => {
  const jobField = DEFAULT_FIELDS.find((f) => f[FieldProperty.DATA_INDEX] === 'job');
  if (jobField && isSelectField(jobField)) {
    const option = jobField[FieldProperty.SELECT_OPTIONS]?.find((opt) => opt.value === value);
    return option?.label || value;
  }
  return value;
};
