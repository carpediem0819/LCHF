# LCHF Diet Coach v1

저탄고지 식사 기록, 영양소 합계, 체중 추적용 설치 가능한 PWA.

## 실행 방법
Node.js 20.19+ 또는 22.12+ 설치 후:

```bash
npm install
npm run dev
```

터미널에 표시된 localhost 주소에 접속합니다. 배포 파일 테스트는 `npm run build && npm run preview`.

## GitHub Pages 배포

1. GitHub에 `lchf-diet-pwa` 이름으로 새 repository를 생성합니다.
2. 이 프로젝트의 **압축 해제된 내용**을 repository 루트에 업로드합니다 (`.github` 폴더 포함).
3. GitHub에서 `Settings` → `Pages` → `Build and deployment` → `Source`를 `GitHub Actions`로 변경합니다.
4. `Actions` 탭의 `Deploy PWA to GitHub Pages` 완료를 확인합니다.
5. `https://USERNAME.github.io/lchf-diet-pwa/`로 접속합니다 (`USERNAME`은 GitHub 아이디).

저장소 이름을 변경하려면 `vite.config.js`의 `repo`도 같은 이름으로 변경해야 합니다.

## 주의

- 식사 영양값은 사용자가 직접 입력합니다. 자동 음식 검색/AI 분석 기능은 아직 없습니다.
- 기록은 **기기/브라우저의 localStorage**에만 저장되므로 기기 간 동기화가 없습니다.
- `설정` → `JSON 백업 다운로드`를 통해 백업할 수 있습니다.
- 개인 건강 기록을 포함할 수 있으니 백업 파일 공개 업로드를 피하세요.
- 초기 영양 목표는 앱 예제용이며 개인 맞춤 의료 처방이 아닙니다.
