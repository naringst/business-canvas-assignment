import { CloseOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'antd';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

import { useEffect } from 'react';

import { type Control, useForm } from 'react-hook-form';

import { DEFAULT_FIELDS } from '@/constants/fields';
import { FieldProperty } from '@/types/field/enum';
import type { MemberRecord } from '@/types/record/type';

import { FieldRenderer } from './FieldRenderer';
import {
  CloseButton,
  FormBody,
  FormFooter,
  ModalHeader,
  ModalTitle,
  StyledForm,
  StyledModal,
} from './styles';
import type { RecordFormData } from './types';
import { schema } from './validation';

interface RecordFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: MemberRecord) => void;
  initialData?: MemberRecord;
  title?: string;
}

const RecordForm = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  title = '회원 추가',
}: RecordFormProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, isDirty },
  } = useForm<RecordFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      id: '',
      name: '',
      address: '',
      memo: '',
      joinedAt: dayjs().format('YYYY-MM-DD'),
      job: '',
      isAgreedWithEmail: false,
    },
  });

  useEffect(() => {
    if (initialData) {
      reset({
        ...initialData,
        joinedAt: initialData.joinedAt,
      });
    }
  }, [initialData, reset]);

  const onFormSubmit = (data: RecordFormData) => {
    onSubmit({
      ...data,
      id: data.id || uuidv4(),
    } as MemberRecord);
    reset();
    onClose();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const isSubmitDisabled = !isValid || !isDirty;

  return (
    <StyledModal open={isOpen} onCancel={handleClose} footer={null} width={480} closeIcon={false}>
      <ModalHeader>
        <ModalTitle>{title}</ModalTitle>
        <CloseButton onClick={handleClose}>
          <CloseOutlined />
        </CloseButton>
      </ModalHeader>

      <StyledForm onFinish={() => handleSubmit(onFormSubmit)()} layout="vertical">
        <FormBody>
          {DEFAULT_FIELDS.map((field) => (
            <FieldRenderer
              key={field[FieldProperty.DATA_INDEX]}
              field={field}
              control={control as Control<MemberRecord>}
            />
          ))}
        </FormBody>

        <FormFooter>
          <Button onClick={handleClose}>취소</Button>
          <Button type="primary" htmlType="submit" disabled={isSubmitDisabled}>
            {title === '회원 추가' ? '추가' : '수정'}
          </Button>
        </FormFooter>
      </StyledForm>
    </StyledModal>
  );
};

export default RecordForm;
