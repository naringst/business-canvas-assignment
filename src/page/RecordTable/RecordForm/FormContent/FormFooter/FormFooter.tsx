import { Button } from 'antd';

import { FormFooterContainer } from './styles';

interface FormFooterProps {
  isSubmitDisabled: boolean;
  handleClose: () => void;
}

const FormFooter = ({ isSubmitDisabled, handleClose }: FormFooterProps) => {
  return (
    <FormFooterContainer>
      <Button htmlType="button" onClick={handleClose}>
        취소
      </Button>
      <Button form="recordForm" type="primary" htmlType="submit" disabled={isSubmitDisabled}>
        저장
      </Button>
    </FormFooterContainer>
  );
};

export default FormFooter;
