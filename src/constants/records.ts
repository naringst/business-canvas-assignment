import dayjs from 'dayjs';

export const MEMBER_RECORDS = [
  {
    id: 1,
    name: 'John Doe',
    address: '서울 강남구',
    memo : "외국인",
    joinedAt: dayjs('2024-10-02').startOf('day').toDate(),
    job: '개발자',
    isAgreedWithEmail: true,
  },

  {
    id:2,
    name: 'Foo Bar',
    address: '서울 서초구',
    memo: '한국인',
    joinedAt: dayjs('2024-10-01').startOf('day').toDate(),
    job: 'PO',
    isAgreedWithEmail: false,
  },
];
