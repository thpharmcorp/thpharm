# DEPLOYMENT.md

## 현재 상태

이 코드는 npm 패키지 레지스트리 접근이 막힌 환경(Claude Cowork 샌드박스, 조직 네트워크 설정
없음)에서 작성되어 **한 번도 빌드된 적이 없습니다.** 배포 전에 반드시 로컬(인터넷 되는 컴퓨터)에서
빌드 확인이 필요합니다.

## 1. 로컬 빌드 확인

```bash
cd thpharm-web
npm install
npm run build
```

`npm run build`는 `astro check`(타입 체크) 후 `astro build`를 실행합니다. 에러가 나면 그 로그를
그대로 Claude에게 붙여넣어 주세요 — 파일 경로가 찍히니 바로 수정할 수 있습니다.

미리보기(빌드 없이 즉시 확인):

```bash
npm run dev
# http://localhost:4321
```

## 2. Netlify 배포 (선택된 방식)

기획안 원안은 Cloudflare Pages였지만, 실제로는 Netlify로 직접 배포하기로 결정했습니다.

**방법 A — 드래그 앤 드롭 (가장 간단, CI 없음)**

```bash
npm run build
```

`dist/` 폴더가 생성되면 그 폴더를 그대로 Netlify 대시보드의 "Deploys" 탭에 드래그합니다.
이후 콘텐츠를 바꿀 때마다 다시 `npm run build` → 새 `dist/` 드래그를 반복해야 합니다.

**방법 B — Git 연동 (권장, 이후 자동 배포)**

1. 이 코드를 GitHub 저장소(회사 소유 조직 권장)에 push
2. Netlify → "Add new site" → "Import an existing project" → 해당 저장소 선택
3. Build command: `npm run build`, Publish directory: `dist`
4. 이후 GitHub에 push할 때마다 Netlify가 자동으로 빌드·배포 (Netlify 서버가 빌드를 대신 실행하므로
   로컬에서 매번 build/드래그할 필요 없음)

## 3. 도메인 / noindex

프로토타입 배포 URL(Netlify가 자동 생성하는 `*.netlify.app`)은 `noindex, nofollow`가 이미
모든 페이지의 `<meta name="robots">`에 걸려 있습니다. 실제 도메인(thpharm.co.kr) 연결과
검색엔진 노출은 회사 검토 후 별도로 켭니다 (`src/layouts/BaseLayout.astro`의 robots 메타 수정).

## 4. 환경변수 / 시크릿

V1은 로그인/외부 API를 쓰지 않는 순수 정적 사이트라 필요한 환경변수가 없습니다.
V1.5에서 Supabase Auth(Google/Kakao)를 붙일 때 `SUPABASE_URL`, `SUPABASE_ANON_KEY` 등이 추가될
예정입니다 — 그때 Netlify의 Environment variables 설정에 등록합니다. 절대 `.env` 파일을
커밋하지 않습니다.

## 5. 폰트 self-host (배포 전 확인)

`src/styles/global.css`에 Pretendard `@font-face`가 주석 처리돼 있습니다. `/public/fonts`에
실제 `.woff2` 파일(Pretendard Regular/Bold/Black 등)을 넣고 주석을 해제해야 브랜드 폰트가
실제로 적용됩니다. 지금은 시스템 폰트로 폴백된 상태로 빌드/배포됩니다(레이아웃은 정상 동작).
