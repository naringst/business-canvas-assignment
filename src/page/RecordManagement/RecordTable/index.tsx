import { useState } from 'react';
import TableHeader from './TableHeader';
import TableContent from './TableContent';

const RecordTable = () => {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  return (
    <div>
      <TableHeader onClickAdd={() => setIsAddFormOpen(true)} />
      <TableContent />
    </div>
  );
};

export default RecordTable;
