import { Checkbox } from 'antd';
import styled from 'styled-components';

const StyledFilterDropdown = styled.div`
  padding: 8px;
  background: #ffffff;
  box-shadow:
    0px 9px 28px 8px #0000000d,
    0px 3px 6px -4px #0000001f,
    0px 6px 16px 0px #00000014;
  border-radius: 8px;
  margin-top: 4px;
`;

const FilterItem = styled.div`
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #f5f5f5;
  }
`;

interface FilterOption {
  text: string;
  value: string;
}

interface FilterDropdownProps {
  filters: FilterOption[];
  selectedKeys: string[];
  setSelectedKeys: (keys: string[]) => void;
  confirm: () => void;
}

const FilterDropdown = ({
  filters,
  selectedKeys,
  setSelectedKeys,
  confirm,
}: FilterDropdownProps) => {
  return (
    <StyledFilterDropdown>
      {filters.map((filter) => (
        <FilterItem
          key={filter.value}
          onClick={() => {
            const newSelectedKeys = selectedKeys.includes(filter.value)
              ? selectedKeys.filter((key) => key !== filter.value)
              : [...selectedKeys, filter.value];
            setSelectedKeys(newSelectedKeys);
            confirm();
          }}
        >
          <Checkbox checked={selectedKeys.includes(filter.value)} />
          {filter.text}
        </FilterItem>
      ))}
    </StyledFilterDropdown>
  );
};

export default FilterDropdown;
