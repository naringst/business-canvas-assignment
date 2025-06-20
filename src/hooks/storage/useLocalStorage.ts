import { useState } from 'react';

import { MEMBER_RECORDS } from '@/constants/records';
import type { MemberRecord } from '@/types/record/type';

const STORAGE_KEY = 'member-records';

export const useLocalStorage = () => {
  const [records, setRecords] = useState<MemberRecord[]>([]);

  const loadRecords = async () => {
    const storedRecords = localStorage.getItem(STORAGE_KEY);
    const parsedRecords = storedRecords ? JSON.parse(storedRecords) : MEMBER_RECORDS;
    setRecords(parsedRecords);
    return parsedRecords;
  };

  const saveRecords = async (newRecords: MemberRecord[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newRecords));
    setRecords(newRecords);
  };

  const addRecord = async (record: MemberRecord) => {
    const newRecords = [...records, record];
    await saveRecords(newRecords);
  };

  const updateRecord = async (record: MemberRecord) => {
    const newRecords = records.map((originalRecord) =>
      originalRecord.id === record.id ? record : originalRecord
    );
    await saveRecords(newRecords);
  };

  const deleteRecord = async (id: string) => {
    const newRecords = records.filter((record) => record.id !== id);
    await saveRecords(newRecords);
  };

  return {
    records,
    loadRecords,
    saveRecords,
    addRecord,
    updateRecord,
    deleteRecord,
  };
};
