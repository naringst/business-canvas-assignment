# Re:catch 프론트엔드 과제전형

Re:catch 프론트엔드 과제전형을 위해 제작된 사용자 관리 시스템입니다.  
회원 정보를 **추가**, **수정**, **삭제**하고, **필터링** 기능을 통해 원하는 데이터를 손쉽게 조회할 수 있습니다.

---

## 🛠️ 기술 스택
- **React**, **Typescript**, **Ant Design**
- **Pnpm** - 패키지 관리
- **react-hook-form** – 폼 상태 및 유효성 검사
- **styled-components** – 컴포넌트 기반 스타일링

---

## 📌 주요 기능

- **회원 정보 관리**: 회원 정보를 등록, 수정, 삭제할 수 있습니다.
- **회원 필터링**: 테이블 열의 필터 아이콘을 통해 조건별 검색이 가능합니다.

## 📁 폴더 구조

```
/src
├── components          # 공통 UI 컴포넌트 (Modal, ContextMenu 등)
├── hooks               # 커스텀 훅
│   ├── record          # 회원 기능 관련 훅
│   └── storage         # 데이터 저장 방식 관련 훅
├── types               # 전역 타입 정의
├── utils               # 유틸 함수 모음
└── pages
    └── RecordTable     # 회원 목록 페이지
        ├── RecordForm             # 회원 정보 폼
        ├── RecordTableHeader      # 회원 정보 테이블 헤더
        └── RecordTableContent     # 회원 정보 테이블 본문

```

---

## ⚙️ 실행 방법

1. **프로젝트 클론**: 이 저장소를 로컬 환경에 클론합니다.

   ```bash
   git clone <repository-url>
   ```

2. **의존성 설치**: 프로젝트의 의존성을 설치합니다.

   ```bash
   cd <project-directory>
   pnpm install
   ```

3. **개발 서버 실행**: 개발 서버를 시작하여 프로젝트를 실행합니다.

   ```bash
   pnpm run dev
   ```

4. **브라우저에서 확인**: 브라우저에서 `http://localhost:5173`으로 접속하여 애플리케이션을 확인합니다.

---

## ✨ 구현 시 중점 사항

### ✅ 구조 및 유지보수성

- 역할 기반 폴더 구조로 관심사를 분리하였습니다.
- 복잡한 로직은 훅으로 분리하여 재사용성과 가독성을 높였습니다.

  - `useRecordManager`: 전체 Record 비즈니스 로직 관리
  - `useRecordForm~`: Record 생성/수정 form 관리 관련 로직
  - `useRecordFilter~`: Record 필터링 기능 관련 로직
  - `use~Storage`: Record 저장 기능 관련 로직

### ✅ 확장성과 타입 안전성

- 커스텀 필드 추가 시 최소 변경만으로 확장 가능하도록 타입 정의
- `MemberRecord`에 필드만 추가하면 훅과 폼은 그대로 동작

### ✅ CSS 설계

- `styled-components` 기반 Theme Provider 설정
- 디자인 시스템 연동을 고려해 Figma 토큰 명명 규칙을 반영
- 각 컴포넌트별 `styles.ts` 분리로 스타일 가독성 향상

### ✅ 재사용 가능한 UI 컴포넌트

- Modal, ContextMenu 등을 `src/components`에 모듈화
- 다양한 페이지에서 일관되게 사용할 수 있도록 설계

### ✅ 사용자 경험

- 폼이 저장될 때마다 `react-hook-form`의 `reset()`으로 초기화되어 이전 입력이 남지 않도록 처리
- 저장 버튼에 `htmlType="submit"`을 지정하여 Enter 키로도 저장 가능

---
