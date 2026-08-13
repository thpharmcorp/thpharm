# RUNBOOK.md

문제가 생겼을 때 가장 먼저 할 일을 정리합니다. 새로운 장애를 해결하면 이 파일에 항목을 추가합니다.

| 문제 | 가장 먼저 할 일 |
|---|---|
| `npm run build` 실패 | 에러 로그 전체를 Claude에게 전달. 대부분 zod 스키마 필드 누락(4개 언어 중 하나 비어있음)이거나 content collection의 `getEntry` 대상이 없는 경우 |
| 사실 오류/오보 발견 | 해당 콘텐츠 JSON의 `status`를 `"draft"`로 되돌리고, 원출처 재확인 후 `last_verified` 갱신하고 재게시 |
| 외부 링크(DOI/원문) 깨짐 | DOI 리졸버나 공식 registry로 교체. 못 찾으면 본문에 "원문 확인 불가" 표시 후 관련 수치 재검토 |
| 저작권 애매한 이미지/Figure | 즉시 제거하고 자체 제작 SVG/도식으로 교체. 이 리포는 아직 실제 이미지 없이 SVG 아이콘/도형만 사용 중 |
| 중국어/일본어 번역 오류 | 해당 언어 필드(`zh_cn`/`jp`)만 수정. `kr` 필드는 source of truth이므로 손대지 않음 |
| 배포 실패 (Netlify) | Netlify 배포 로그 확인. 이전 배포는 자동으로 유지되므로 프로덕션은 안전. `dist/` 재빌드 후 재배포 |
| 로그인 관련 장애 | V1은 로그인 자체가 없으므로 해당 없음. V1.5 이후 Supabase 도입 시: 공개 페이지는 영향받지 않아야 하며, 로그인 CTA만 일시 비활성화 |
| 이 개발 환경에서 npm install이 안 됨 | Claude Cowork 샌드박스의 네트워크 정책 때문. Team/Enterprise 조직 설정에서 네트워크 egress를 열거나, 로컬 컴퓨터에서 빌드. DEPLOYMENT.md 참고 |
| 콘텐츠 스키마를 바꿨는데 기존 JSON이 깨짐 | `src/content/config.ts` 변경 시 해당 컬렉션의 모든 JSON 파일을 함께 갱신해야 함. 하나씩 훑어서 새 필드 추가/필드명 변경 반영 |

## 보안·키 점검 (V1.5 이후 해당)

- 환경변수/API key는 절대 커밋하지 않음. `.gitignore`에 `.env*` 포함 확인
- OAuth(Google/Kakao) 클라이언트는 회사 관리 이메일(webmaster@ 등) 소유로 등록
- 유출 의심 시 즉시 키 rotation 후 원인 파악
