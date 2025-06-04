import { Button } from 'antd';

import { FormFooterContainer } from './styles';

interface FormFooterProps {
  isSubmitDisabled: boolean;
  handleSubmit: () => void;
}

const FormFooter = ({ isSubmitDisabled, handleSubmit }: FormFooterProps) => {
  return (
    <FormFooterContainer>
      <Button onClick={handleSubmit}>취소</Button>
      <Button type="primary" htmlType="submit" disabled={isSubmitDisabled}>
        저장
      </Button>
    </FormFooterContainer>
  );
};

export default FormFooter;
