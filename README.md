# 작품 아카이브

작품 아카이브 사이트입니다.

## 사용 방법

1. `artworks` 폴더 안에 새 작품 폴더를 만듭니다. 폴더 이름은 `숫자_제목` 형식으로 합니다 (예: `3_새작품`).
2. 해당 폴더에 이미지 파일들을 저장합니다.
3. 작품 설명을 추가하려면, 해당 폴더에 `description.txt` 파일을 만들고 내용을 작성합니다.
4. `node generateContent.js` 명령어를 실행하여 `content.json` 파일을 자동 생성합니다.
5. 로컬에서 확인하려면: `npm run serve` 명령어를 실행합니다.

## content.json 형식

```json
[
  {
    "title": "작품 제목",
    "folder": "숫자_제목",
    "images": ["파일명1.jpg", "파일명2.jpg"],
    "text": "작품에 대한 설명"
  }
]
```

## 배포 방법

### Netlify 자동 배포 (권장)
1. GitHub에 프로젝트를 업로드합니다.
2. Netlify에서 해당 저장소를 연결하여 새 사이트를 생성합니다.
3. Netlify가 빌드 중 자동으로 `content.json`을 생성합니다.
4. 새 작품을 추가할 때마다 GitHub에 변경사항을 커밋하면, Netlify가 자동으로 사이트를 업데이트합니다.

### 수동 배포
1. `node generateContent.js` 명령어를 실행하여 `content.json` 파일을 생성합니다.
2. 이 폴더의 모든 파일을 웹 호스팅 서비스(GitHub Pages, Netlify 등)에 업로드하세요.

## 프로젝트 구조

```
.
├── index.html        # 메인 HTML 파일
├── generateContent.js # content.json 자동 생성 스크립트
├── content.json      # 작품 데이터 (자동 생성됨)
├── netlify.toml      # Netlify 배포 설정
├── artworks/         # 작품 폴더
│   ├── 1_오늘그림/   # 첫 번째 작품
│   │   ├── image1.jpg
│   │   ├── image2.jpg
│   │   └── description.txt
│   ├── 2_다른그림/   # 두 번째 작품
│   │   ├── image3.jpg
│   │   └── description.txt
│   └── ...
├── package.json      # 프로젝트 설정
└── README.md         # 이 문서
``` 