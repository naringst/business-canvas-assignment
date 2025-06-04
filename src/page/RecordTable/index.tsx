import { useRecordManager } from '@/hooks/record/useRecordManager';
import RecordForm from '@/page/RecordTable/RecordForm';

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

  return (
    <>
      <RecordTableHeader onClickAdd={openAddForm} />
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
