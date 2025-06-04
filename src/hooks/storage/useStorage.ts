import { useEffect, useState } from 'react';

import { useApiStorage } from '@/hooks/storage/useApiStorage';
import { useLocalStorage } from '@/hooks/storage/useLocalStorage';
import type { MemberRecord } from '@/types/record/type';

export const useStorage = () => {
  const [records, setRecords] = useState<MemberRecord[]>([]);
  const localStorage = useLocalStorage();
  const apiStorage = useApiStorage();
  const storage = import.meta.env.VITE_STORAGE === 'local-storage' ? localStorage : apiStorage;

  const loadRecords = async () => {
    const loadedRecords = await storage.loadRecords();
    setRecords(loadedRecords);
  };

  const addRecord = async (record: MemberRecord) => {
    await storage.addRecord(record);
    await loadRecords();
  };

  const updateRecord = async (record: MemberRecord) => {
    await storage.updateRecord(record);
    await loadRecords();
  };

  const deleteRecord = async (id: string) => {
    await storage.deleteRecord(id);
    await loadRecords();
  };

  useEffect(() => {
    loadRecords();
  }, []);

  return {
    records,
    loadRecords,
    addRecord,
    updateRecord,
    deleteRecord,
  };
};
