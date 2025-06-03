import { Modal, Form, Button } from 'antd';
import styled from 'styled-components';

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0px;
  }
`;

export const ModalHeader = styled.div`
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 10;
  padding: 0;
  color: rgba(0, 0, 0, 0.45);
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: color 0.2s;
  width: 22px;
  height: 22px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: rgba(0, 0, 0, 0.75);
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
`;

export const StyledForm = styled(Form)`
  padding: 10px 20px;
  gap: 20px;

  .ant-form-item-label {
    height: 28px;
    padding: 0;
    text-align: left;
  }

  .ant-form-item-label > label {
    color: ${(props) => props.theme.colors.colorTextTertiary};
    height: auto;
    justify-content: flex-start;
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
