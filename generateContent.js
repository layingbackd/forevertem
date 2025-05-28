const fs = require('fs');
const path = require('path');

// artworks 폴더 경로
const artworksDir = path.join(__dirname, 'artworks');

// 결과를 저장할 배열
const contentArray = [];

// artworks 폴더 읽기
const folders = fs.readdirSync(artworksDir)
  .filter(item => fs.statSync(path.join(artworksDir, item)).isDirectory())
  .sort(); // 폴더 이름 기준 정렬

// 각 작품 폴더 처리
folders.forEach(folder => {
  const folderPath = path.join(artworksDir, folder);
  
  // 폴더 내용 읽기
  const folderContents = fs.readdirSync(folderPath);
  
  // 이미지 파일 찾기
  const images = folderContents.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
  });

  // description.txt 파일이 있는지 확인
  let text = '';
  if (folderContents.includes('description.txt')) {
    text = fs.readFileSync(path.join(folderPath, 'description.txt'), 'utf8');
  }

  // 제목 (폴더 이름에서 추출)
  const title = folder.split('_').slice(1).join('_');
  
  // 작품 정보 객체 생성
  const artwork = {
    title,
    folder,
    images,
    text
  };
  
  // 배열에 추가
  contentArray.push(artwork);
});

// content.json 파일로 저장
fs.writeFileSync(
  path.join(__dirname, 'content.json'),
  JSON.stringify(contentArray, null, 2),
  'utf8'
);

console.log('content.json 파일이 생성되었습니다.'); 