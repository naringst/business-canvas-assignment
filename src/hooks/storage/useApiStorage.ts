import { useState } from 'react';

import { api } from '@/api/axios';
import { MEMBER_RECORDS } from '@/constants/records';
import type { MemberRecord } from '@/types/record/type';

export const useApiStorage = () => {
  const [records, setRecords] = useState<MemberRecord[]>([]);

  const loadRecords = async () => {
    try {
      const { data } = await api.get('/');
      setRecords(data);
      return data;
    } catch (error) {
      console.error('Failed to load records:', error);
      setRecords(MEMBER_RECORDS);
      return MEMBER_RECORDS;
    }
  };

  const addRecord = async (record: MemberRecord) => {
    try {
      await api.post('/', record);
      await loadRecords();
    } catch (error) {
      console.error('Failed to add record:', error);
    }
  };

  const updateRecord = async (record: MemberRecord) => {
    try {
      await api.patch(`/${record.id}`, record);
      await loadRecords();
    } catch (error) {
      console.error('Failed to update record:', error);
    }
  };

  const deleteRecord = async (id: string) => {
    try {
      await api.delete(`/${id}`);
      await loadRecords();
    } catch (error) {
      console.error('Failed to delete record:', error);
    }
  };

  return {
    records,
    loadRecords,
    addRecord,
    updateRecord,
    deleteRecord,
  };
};
