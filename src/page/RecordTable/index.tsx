import { useState } from 'react';
import RecordForm from '../../components/RecordForm';
import type { MemberRecord } from '../../types/record/type';
import { useStorage } from '../../hooks/useStorage';

import TableHeader from './TableHeader';
import TableContent from './TableContent';

const RecordTable = () => {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<MemberRecord | null>(null);

  const { records, addRecord, updateRecord, deleteRecord } = useStorage();

  const handleAddRecord = async (data: MemberRecord) => {
    await addRecord(data);
    setIsAddFormOpen(false);
  };

  const handleUpdateRecord = async (data: MemberRecord) => {
    await updateRecord(data);
    setIsEditFormOpen(false);
    setSelectedRecord(null);
  };

  const handleDeleteRecord = async (record: MemberRecord) => {
    await deleteRecord(record.id);
  };

  const openEditForm = (record: MemberRecord) => {
    setSelectedRecord(record);
    setIsEditFormOpen(true);
  };

  return (
    <div>
      <TableHeader onClickAdd={() => setIsAddFormOpen(true)} />
      <TableContent onEdit={openEditForm} onDelete={handleDeleteRecord} records={records} />

      <RecordForm
        isOpen={isAddFormOpen}
        onClose={() => setIsAddFormOpen(false)}
        onSubmit={handleAddRecord}
        title="회원 추가"
      />

      <RecordForm
        isOpen={isEditFormOpen}
        onClose={() => {
          setIsEditFormOpen(false);
          setSelectedRecord(null);
        }}
        onSubmit={handleUpdateRecord}
        initialData={selectedRecord ?? undefined}
        title="회원 수정"
      />
    </div>
  );
};

export default RecordTable;
