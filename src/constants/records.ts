import type { MemberRecord } from '@/types/record/type';

export const MEMBER_RECORDS: MemberRecord[] = [
  {
    id: '1',
    name: 'John Doe',
    address: '서울 강남구',
    memo: '외국인',
    joinedAt: '2024-10-02',
    job: '개발자',
    isAgreedWithEmail: true,
  },

  {
    id: '2',
    name: 'Foo Bar',
    address: '서울 서초구',
    memo: '한국인',
    joinedAt: '2024-10-01',
    job: 'PO',
    isAgreedWithEmail: false,
  },
];
