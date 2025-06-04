import { CloseOutlined } from '@ant-design/icons';

import { CloseButton } from '../styles';
import { ModalHeader, ModalTitle } from '../styles';

interface FormHeaderProps {
  title: string;
  handleClose: () => void;
}
const FormHeader = ({ title, handleClose }: FormHeaderProps) => {
  return (
    <ModalHeader>
      <ModalTitle>{title}</ModalTitle>
      <CloseButton onClick={handleClose}>
        <CloseOutlined />
      </CloseButton>
    </ModalHeader>
  );
};

export default FormHeader;
