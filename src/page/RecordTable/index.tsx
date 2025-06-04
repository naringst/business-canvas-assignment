import { useState } from 'react';

import RecordForm from '@/components/RecordForm';
import { useStorage } from '@/hooks/storage/useStorage';
import { FORM_MODES } from '@/types/form/enum';
import type { FormMode } from '@/types/form/enum';
import type { MemberRecord } from '@/types/record/type';

import TableContent from './TableContent';
import TableHeader from './TableHeader';

const RecordTable = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formMode, setFormMode] = useState<FormMode>('add');
  const [selectedRecord, setSelectedRecord] = useState<MemberRecord | null>(null);

  const { records, addRecord, updateRecord, deleteRecord } = useStorage();

  const handleAddRecord = async (data: MemberRecord) => {
    await addRecord(data);
    setIsFormOpen(false);
  };

  const handleUpdateRecord = async (data: MemberRecord) => {
    await updateRecord(data);
    setIsFormOpen(false);
    setSelectedRecord(null);
  };

  const handleDeleteRecord = async (record: MemberRecord) => {
    await deleteRecord(record.id);
  };

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

  return (
    <>
      <TableHeader onClickAdd={openAddForm} />
      <TableContent onEdit={openEditForm} onDelete={handleDeleteRecord} records={records} />
      <RecordForm
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        formMode={formMode}
        initialData={selectedRecord}
        onSubmit={formMode === FORM_MODES.ADD ? handleAddRecord : handleUpdateRecord}
      />
    </>
  );
};

export default RecordTable;
