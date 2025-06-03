import type { MemberRecord } from '../../types/record/type';

export type RecordFormData = Omit<MemberRecord, 'id'> & { id?: string };
