import { useState } from 'react';
import RecordForm from '../../components/RecordForm';
import type { MemberRecord } from '../../types/record/type';
import TableContent from './TableContent';
import TableHeader from './TableHeader';

const RecordTable = () => {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<MemberRecord | null>(null);

  const handleAddRecord = (data: MemberRecord) => {
    setIsAddFormOpen(false);
    console.log('Add record:', data);
  };

  // 수정 버튼 클릭 시 폼을 여는 함수
  const openEditForm = (record: MemberRecord) => {
    setSelectedRecord(record);
    setIsEditFormOpen(true);
  };

  // 폼에서 수정 완료 후 호출되는 함수
  const handleUpdateRecord = (data: MemberRecord) => {
    setIsEditFormOpen(false);
    setSelectedRecord(null);
    console.log('Edit record:', data);
  };

  return (
    <div>
      <TableHeader onClickAdd={() => setIsAddFormOpen(true)} />
      <TableContent onEdit={openEditForm} />

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
