# DAIRIN 리뉴얼

기존 다이린 페이지 경로와 메뉴·지점 데이터를 활용한 Next.js App Router 사이트입니다. app 디렉터리에 반응형 페이지를 만들고, worker/index.mjs에서 가맹 상담을 비공개 사이트 전용 데이터베이스에 접수합니다.

npm ci 후 npm run build를 실행합니다. npm run dev는 화면 개발용 Next.js 개발 서버입니다. 빌드된 화면과 접수 기능을 함께 로컬에서 확인하려면 node scripts/serve.mjs --port 3000을 실행합니다. 로컬 접수 기록은 테스트 프로세스의 메모리에만 보관됩니다.

지점과 안주 데이터는 lib/site-data.ts, 생맥주 이미지는 components/Catalogue.tsx, 세 영상은 public/videos와 해당 페이지의 InlineVideo 호출에서 관리합니다. 운영 중인 Vercel 프로젝트의 배포와 접수 채널은 이 프로젝트와 별개입니다.
