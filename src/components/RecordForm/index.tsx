import { Button } from 'antd';
import { useForm, type Control } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import {
  FormFooter,
  ModalHeader,
  ModalTitle,
  StyledForm,
  StyledModal,
  CloseButton,
  FormBody,
} from './styles';
import type { MemberRecord } from '../../types/record/type';
import { DEFAULT_FIELDS } from '../../constants/fields';
import { FieldProperty } from '../../types/field/enum';
import { FieldRenderer } from './FieldRenderer';
import { schema } from './validation';
import type { RecordFormData } from './types';
import { CloseOutlined } from '@ant-design/icons';

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
    onSubmit(data as MemberRecord);
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
