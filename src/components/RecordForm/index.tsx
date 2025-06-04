import { yupResolver } from '@hookform/resolvers/yup';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

import { useEffect } from 'react';

import { type Control, useForm } from 'react-hook-form';

import { FORM_MODES } from '@/types/form/enum';
import type { FormMode } from '@/types/form/enum';
import type { MemberRecord } from '@/types/record/type';

import FormBody from './components/FormBody';
import FormFooter from './components/FormFooter';
import FormHeader from './components/FormHeader';
import { StyledForm, StyledModal } from './styles';
import type { RecordFormData } from './types';
import { schema } from './validation';

interface RecordFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: MemberRecord) => void;
  formMode: FormMode;
  initialData?: MemberRecord | null;
}

const RecordForm = ({ isOpen, onClose, onSubmit, initialData, formMode }: RecordFormProps) => {
  const mode = formMode === FORM_MODES.ADD ? '추가' : '수정';
  const title = `회원 ${mode}`;

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
    if (formMode === FORM_MODES.ADD && initialData) {
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
      <StyledForm onFinish={() => handleSubmit(onFormSubmit)()} layout="vertical">
        <FormHeader title={title} handleClose={handleClose} />
        <FormBody control={control as Control<MemberRecord>} />
        <FormFooter isSubmitDisabled={isSubmitDisabled} handleSubmit={handleSubmit(onFormSubmit)} />
      </StyledForm>
    </StyledModal>
  );
};

export default RecordForm;
