import { Table } from 'antd';
import { DEFAULT_FIELDS } from '../../../constants/fields';
import { MEMBER_RECORDS } from '../../../constants/records';

const TableContent = () => {
  return <Table dataSource={MEMBER_RECORDS} columns={DEFAULT_FIELDS} />;
};

export default TableContent;
