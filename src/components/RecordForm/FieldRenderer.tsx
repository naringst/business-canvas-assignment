import { Form, Input, DatePicker, Checkbox, Select } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { Controller } from 'react-hook-form';
import type { Control } from 'react-hook-form';
import type { FieldConfig, SelectField } from '../../types/field/type';
import { FieldProperty, FieldType } from '../../types/field/enum';
import dayjs from 'dayjs';
import type { MemberRecord } from '../../types/record/type';
import type { TextAreaProps } from 'antd/es/input/TextArea';

interface FieldRendererProps {
  field: FieldConfig;
  control: Control<MemberRecord>;
}

export const FieldRenderer = ({ field, control }: FieldRendererProps) => {
  const title = field[FieldProperty.TITLE];
  const data_index = field[FieldProperty.DATA_INDEX];
  const type = field[FieldProperty.TYPE];
  const required = field[FieldProperty.REQUIRED];

  function isSelectField(field: FieldConfig): field is SelectField {
    return field[FieldProperty.TYPE] === FieldType.SELECT;
  }

  let options: { label: string; value: string }[] | undefined;
  if (isSelectField(field)) {
    options = field[FieldProperty.SELECT_OPTIONS];
  }

  switch (type) {
    case FieldType.TEXT:
      return (
        <Controller
          key={data_index}
          name={data_index}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Form.Item
              label={title}
              required={required}
              validateStatus={error ? 'error' : ''}
              help={error?.message}
            >
              <Input {...field} value={field.value as string} style={{ width: '100%' }} />
            </Form.Item>
          )}
        />
      );
    case FieldType.TEXTAREA:
      return (
        <Controller
          key={data_index}
          name={data_index}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Form.Item
              label={title}
              required={required}
              validateStatus={error ? 'error' : ''}
              help={error?.message}
            >
              <Input.TextArea {...(field as TextAreaProps)} style={{ width: '100%' }} />
            </Form.Item>
          )}
        />
      );
    case FieldType.DATE:
      return (
        <Controller
          key={data_index}
          name={data_index}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Form.Item
              label={title}
              required={required}
              validateStatus={error ? 'error' : ''}
              help={error?.message}
            >
              <DatePicker
                {...field}
                value={field.value ? dayjs(field.value as string) : null}
                onChange={(date) => field.onChange(date ? date.format('YYYY-MM-DD') : null)}
                style={{ width: '160px' }}
                suffixIcon={<CalendarOutlined />}
              />
            </Form.Item>
          )}
        />
      );
    case FieldType.CHECKBOX:
      return (
        <Controller
          key={data_index}
          name={data_index}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Form.Item
              label={title}
              required={required}
              validateStatus={error ? 'error' : ''}
              help={error?.message}
            >
              <Checkbox {...field} checked={field.value as boolean} />
            </Form.Item>
          )}
        />
      );
    case FieldType.SELECT:
      return (
        <Controller
          key={data_index}
          name={data_index}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Form.Item
              label={title}
              required={required}
              validateStatus={error ? 'error' : ''}
              help={error?.message}
            >
              <Select
                {...field}
                style={{ width: '360px' }}
                options={options}
                placeholder="직업을 선택해주세요"
              />
            </Form.Item>
          )}
        />
      );
  }
};
