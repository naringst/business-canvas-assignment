import { Modal, Form } from 'antd';
import styled from 'styled-components';

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 24px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
`;

export const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 16px;
  }

  .ant-form-item-label {
    padding-bottom: 8px;
  }

  .ant-form-item-label > label {
    color: ${(props) => props.theme.colors.colorTextTertiary};
    height: auto;
  }

  .ant-form-item-required::before {
    display: none !important;
  }
  .ant-form-item-required::after {
    visibility: visible !important;
    display: inline-block;
    margin-left: 4px;
    color: #ff4d4f;
    font-size: 14px;
    line-height: 1;
    content: '*' !important;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 24px;
`;
