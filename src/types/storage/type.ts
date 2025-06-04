import type { MemberRecord } from '../record/type';

export interface Storage {
  // NOTE 로컬스토리지 저장 시에도 비동기로 통일하여 처리.
  // WHY? Promise 래핑의 오버헤드가 미미하고, 추후 indexedDB나 확장 가능성 고려 및 비동기 처리 통일성 유지
  getRecords(): Promise<MemberRecord[]>;
  saveRecords(records: MemberRecord[]): Promise<void>;
  addRecord(record: MemberRecord): Promise<void>;
  updateRecord(record: MemberRecord): Promise<void>;
  deleteRecord(id: string): Promise<void>;
}
