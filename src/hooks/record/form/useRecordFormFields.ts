import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

import { useEffect } from 'react';

import { useForm } from 'react-hook-form';

import { FORM_MODES } from '@/types/form/enum';
import type { FormMode } from '@/types/form/enum';
import type { RecordFormData } from '@/types/form/types';
import type { MemberRecord } from '@/types/record/type';

import { useRecordFormValidation } from './useRecordFormValidation';

interface UseRecordFormFieldsProps {
  formMode: FormMode;
  initialData?: MemberRecord | null;
  onSubmit: (data: MemberRecord) => void;
  onClose: () => void;
  isOpen: boolean;
}

export const useRecordFormFields = ({
  formMode,
  initialData,
  onSubmit,
  onClose,
  isOpen,
}: UseRecordFormFieldsProps) => {
  const { resolver } = useRecordFormValidation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, isDirty },
  } = useForm<RecordFormData>({
    resolver,
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
    if (formMode === FORM_MODES.EDIT && initialData) {
      reset({
        ...initialData,
        joinedAt: initialData.joinedAt,
      });
      return;
    }
  }, [initialData, reset, formMode]);

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  const onFormSubmit = (data: RecordFormData) => {
    onSubmit({
      ...data,
      id: data.id || uuidv4(),
    } as MemberRecord);
    onClose();
    reset();
  };

  const handleClose = () => {
    onClose();
  };

  const isSubmitDisabled = !isValid || !isDirty;

  return {
    control,
    handleSubmit,
    onFormSubmit,
    handleClose,
    isSubmitDisabled,
  };
};
