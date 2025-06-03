import { Button } from 'antd';
import { styled } from 'styled-components';

export const TableHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 14px;
  height: 48px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.colorSplit};
`;

export const TableHeaderTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;

export const TableHeaderAddButton = styled(Button)`
  width: 73px;
  height: 32px;
  padding: ${({ theme }) => theme.padding.button.sm}px ${({ theme }) => theme.padding.button.md}px;
  gap: 8px;
  border-radius: ${({ theme }) => theme.borderRadius.buttonBorderRadius}px;
`;
