import { useState } from 'react';

import { FORM_MODES } from '@/types/form/enum';
import type { FormMode } from '@/types/form/enum';
import type { MemberRecord } from '@/types/record/type';

interface UseRecordFormModalReturn {
  isFormOpen: boolean;
  formMode: FormMode;
  selectedRecord: MemberRecord | null;
  openAddForm: () => void;
  openEditForm: (record: MemberRecord) => void;
  handleCloseForm: () => void;
}

export const useRecordFormModal = (): UseRecordFormModalReturn => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formMode, setFormMode] = useState<FormMode>('add');
  const [selectedRecord, setSelectedRecord] = useState<MemberRecord | null>(null);

  const openAddForm = () => {
    setFormMode(FORM_MODES.ADD);
    setSelectedRecord(null);
    setIsFormOpen(true);
  };

  const openEditForm = (record: MemberRecord) => {
    setFormMode(FORM_MODES.EDIT);
    setSelectedRecord(record);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setSelectedRecord(null);
  };

  return {
    isFormOpen,
    formMode,
    selectedRecord,
    openAddForm,
    openEditForm,
    handleCloseForm,
  };
};
