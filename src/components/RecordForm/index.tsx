import { FORM_MODES } from '@/types/form/enum';
import type { FormMode } from '@/types/form/enum';
import type { MemberRecord } from '@/types/record/type';

import Modal from '../Modal';
import FormContent from './FormContent';

interface RecordFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: MemberRecord) => void;
  formMode: FormMode;
  initialData?: MemberRecord | null;
}

const RecordForm = ({ isOpen, onClose, onSubmit, initialData, formMode }: RecordFormProps) => {
  const mode = formMode === FORM_MODES.ADD ? '추가' : '수정';
  const title = `회원 ${mode}`;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <FormContent
        title={title}
        formMode={formMode}
        initialData={initialData}
        onSubmit={onSubmit}
        onClose={onClose}
      />
    </Modal>
  );
};

export default RecordForm;
