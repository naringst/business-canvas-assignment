import { useRecordFormModal } from '@/hooks/record/form/useRecordFormModal';
import { useStorage } from '@/hooks/storage/useStorage';
import { FORM_MODES, type FormMode } from '@/types/form/enum';
import type { MemberRecord } from '@/types/record/type';

interface UseRecordManagerReturn {
  // Form Modal State
  isFormOpen: boolean;
  formMode: FormMode;
  selectedRecord: MemberRecord | null;

  // Records
  records: MemberRecord[];

  // Actions
  openAddForm: () => void;
  openEditForm: (record: MemberRecord) => void;
  handleCloseForm: () => void;
  handleSubmit: (data: MemberRecord) => Promise<void>;
  handleDelete: (record: MemberRecord) => void;
}

export const useRecordManager = (): UseRecordManagerReturn => {
  const { isFormOpen, formMode, selectedRecord, openAddForm, openEditForm, handleCloseForm } =
    useRecordFormModal();

  const { records, addRecord, updateRecord, deleteRecord } = useStorage();

  const handleSubmit = async (data: MemberRecord) => {
    if (formMode === FORM_MODES.ADD) {
      await addRecord(data);
    } else {
      await updateRecord(data);
    }
    handleCloseForm();
  };

  const handleDelete = (record: MemberRecord) => {
    deleteRecord(record.id);
  };

  return {
    // Form Modal State
    isFormOpen,
    formMode,
    selectedRecord,

    // Records
    records,

    // Actions
    openAddForm,
    openEditForm,
    handleCloseForm,
    handleSubmit,
    handleDelete,
  };
};
