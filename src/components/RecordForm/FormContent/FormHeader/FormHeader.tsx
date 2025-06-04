import { CloseOutlined } from '@ant-design/icons';

import { CloseButton, FormHeaderContainer, FormTitle } from './styles';

interface FormHeaderProps {
  title: string;
  handleClose: () => void;
}
const FormHeader = ({ title, handleClose }: FormHeaderProps) => {
  return (
    <FormHeaderContainer>
      <FormTitle>{title}</FormTitle>
      <CloseButton onClick={handleClose}>
        <CloseOutlined />
      </CloseButton>
    </FormHeaderContainer>
  );
};

export default FormHeader;
