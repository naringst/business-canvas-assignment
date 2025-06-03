import type { DEFAULT_FIELDS } from '../../constants/fields';
import type { FieldProperty, FieldType } from '../field/enum';
import type { FieldConfig } from '../field/type';

// NOTE 각 필드타입에 다른 value map 타입 정의
export interface FieldTypeValueMap {
  [FieldType.TEXT]: string;
  [FieldType.TEXTAREA]: string;
  [FieldType.DATE]: Date;
  [FieldType.SELECT]: string;
  [FieldType.CHECKBOX]: boolean;
}

// NOTE 필드 타입에 따른 값 타입을 추출하는 유틸리티 타입
export type FieldValueOf<F extends FieldConfig> = FieldTypeValueMap[F[typeof FieldProperty.TYPE]];

// NOTE FieldConfig[] 배열을 기반으로 전체 필드의 레코드 타입 만들기
// ex. [name] : string , [address] : string ... etc
export type MemberRecordFromFields<F extends readonly FieldConfig[]> = {
  [K in F[number] as K[typeof FieldProperty.DATA_INDEX]]: FieldValueOf<K>;
};

export type MemberRecord = MemberRecordFromFields<typeof DEFAULT_FIELDS> & { id: string };
