import { type Control } from 'react-hook-form';

import { useRecordForm } from '@/hooks/form/useRecordForm';
import type { FormMode } from '@/types/form/enum';
import type { MemberRecord } from '@/types/record/type';

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
  const { control, handleSubmit, onFormSubmit, handleClose, isSubmitDisabled } = useRecordForm({
    formMode,
    initialData,
    onSubmit,
    onClose,
  });

  return (
    <FormContainer onFinish={() => handleSubmit(onFormSubmit)()} layout="vertical">
      <FormHeader title={title} handleClose={handleClose} />
      <FormBody control={control as Control<MemberRecord>} />
      <FormFooter isSubmitDisabled={isSubmitDisabled} handleClose={handleClose} />
    </FormContainer>
  );
};

export default FormContent;
