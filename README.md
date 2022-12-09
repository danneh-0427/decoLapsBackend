# decoLapsBackend

# 실행 방법 (local)

1. postgresql 설치 및 설정

- postgresql을 설치하고 postgres 계정으로 비밀번호를 통해 접속할 수 있도록 합니다.
- 'test'라는 이름의 database를 만듭니다.

2. db-secrets 설정

- db-secrets.ts를 src 폴더 안에 만듭니다.
- 다음과 같이 작성합니다.

- export const DB_USERNAME = "postgres";
- export const DB_PASSWORD = "(비밀번호)";

3. 실행

- $ npm i
- $ npm run test
- 8000번 포트에 api 서버가 열립니다.
