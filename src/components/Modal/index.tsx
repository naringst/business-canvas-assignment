import { ModalContainer } from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <ModalContainer open={isOpen} onCancel={onClose} footer={null} width={480} closeIcon={false}>
      {children}
    </ModalContainer>
  );
};

export default Modal;
