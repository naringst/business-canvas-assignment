import { Form } from 'antd';
import styled from 'styled-components';

export const FormContainer = styled(Form)`
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
