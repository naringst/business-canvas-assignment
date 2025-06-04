import ContextMenu, { type MenuItem } from '@/components/ContextMenu';
import type { MemberRecord } from '@/types/record/type';

interface RecordMoreMenuProps {
  record: MemberRecord;
  onEdit: (record: MemberRecord) => void;
  onDelete: (record: MemberRecord) => void;
}

const RecordMoreMenu = ({ record, onEdit, onDelete }: RecordMoreMenuProps) => {
  const menuItems: MenuItem<MemberRecord>[] = [
    {
      key: 'edit',
      label: '수정',
      onClick: () => onEdit(record),
    },
    {
      key: 'delete',
      label: '삭제',
      danger: true,
      onClick: () => onDelete(record),
    },
  ];

  return <ContextMenu record={record} menuItems={menuItems} />;
};

export default RecordMoreMenu;
