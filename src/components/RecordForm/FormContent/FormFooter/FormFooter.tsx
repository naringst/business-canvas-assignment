import { Button } from 'antd';

import { FormFooterContainer } from './styles';

interface FormFooterProps {
  isSubmitDisabled: boolean;
  handleClose: () => void;
}

const FormFooter = ({ isSubmitDisabled, handleClose }: FormFooterProps) => {
  return (
    <FormFooterContainer>
      <Button onClick={handleClose}>취소</Button>
      <Button type="primary" htmlType="submit" disabled={isSubmitDisabled}>
        저장
      </Button>
    </FormFooterContainer>
  );
};

export default FormFooter;
