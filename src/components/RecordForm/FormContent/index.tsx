import { yupResolver } from '@hookform/resolvers/yup';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

import { useEffect } from 'react';

import { type Control, useForm } from 'react-hook-form';

import { FORM_MODES } from '@/types/form/enum';
import type { FormMode } from '@/types/form/enum';
import type { MemberRecord } from '@/types/record/type';

import type { RecordFormData } from '../../../types/form/types';
import { schema } from '../validation';
import FormBody from './FormBody/FormBody';
import FormFooter from './FormFooter/FormFooter';
import FormHeader from './FormHeader/FormHeader';
import { FormContainer } from './styles';

interface FormContentProps {
  title: string;
  formMode: FormMode;
  initialData?: MemberRecord | null;
  onSubmit: (data: MemberRecord) => void;
  onClose: () => void;
}

const FormContent = ({ title, formMode, initialData, onSubmit, onClose }: FormContentProps) => {
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
  }, [initialData, reset, formMode]);

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
    <FormContainer onFinish={() => handleSubmit(onFormSubmit)()} layout="vertical">
      <FormHeader title={title} handleClose={handleClose} />
      <FormBody control={control as Control<MemberRecord>} />
      <FormFooter isSubmitDisabled={isSubmitDisabled} handleSubmit={handleSubmit(onFormSubmit)} />
    </FormContainer>
  );
};

export default FormContent;
