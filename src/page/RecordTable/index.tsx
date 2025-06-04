import RecordForm from '@/components/RecordForm';
import { useRecordManager } from '@/hooks/record/useRecordManager';

import RecordTableContent from './RecordTableContent';
import RecordTableHeader from './RecordTableHeader';

const RecordTable = () => {
  const {
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
  } = useRecordManager();

  const handleAddClick = () => {
    openAddForm();
  };

  return (
    <>
      <RecordTableHeader onClickAdd={handleAddClick} />
      <RecordTableContent onEdit={openEditForm} onDelete={handleDelete} records={records} />
      <RecordForm
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        formMode={formMode}
        initialData={selectedRecord}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default RecordTable;
