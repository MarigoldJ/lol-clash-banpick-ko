import { Position } from "./type";

const TOP = [
  "가렌",
  "갱플랭크",
  "그라가스",
  "그레이브즈",
  "그웬",
  "나르",
  "나서스",
  "다리우스",
  "럼블",
  "레넥톤",
  "리븐",
  "말파이트",
  "모데카이저",
  "문도 박사",
  "베인",
  "볼리베어",
  "사이온",
  "세트",
  "쉔",
  "신지드",
  "아칼리",
  "아트록스",
  "야스오",
  "오공",
  "오른",
  "요네",
  "요릭",
  "우르곳",
  "이렐리아",
  "일라오이",
  "잭스",
  "제이스",
  "초가스",
  "카밀",
  "케넨",
  "케일",
  "퀸",
  "클레드",
  "탐 켄치",
  "트린다미어",
  "티모",
  "피오라",
  "하이머딩거",
];

const JUNGLE = [
  "그레이브즈",
  "녹턴",
  "누누와 윌럼프",
  "니달리",
  "다이애나",
  "람머스",
  "렉사이",
  "렝가",
  "리신",
  "릴리아",
  "마스터 이",
  "바이",
  "볼리베어",
  "비에고",
  "뽀삐",
  "샤코",
  "세주아니",
  "쉬바나",
  "스카너",
  "신 짜오",
  "아무무",
  "아이번",
  "에코",
  "엘리스",
  "올라프",
  "우디르",
  "워윅",
  "이블린",
  "자르반 4세",
  "자크",
  "제드",
  "카서스",
  "카직스",
  "케인",
  "킨드레드",
  "탈리야",
  "트런들",
  "피들스틱",
  "헤카림",
];

const MIDDLE = [
  "갈리오",
  "니코",
  "라이즈",
  "럭스",
  "르블랑",
  "리산드라",
  "말자하",
  "베이가",
  "벡스",
  "블라디미르",
  "빅토르",
  "사일러스",
  "신드라",
  "아리",
  "아우렐리온 솔",
  "아지르",
  "아칼리",
  "아크샨",
  "애니",
  "애니비아",
  "야스오",
  "에코",
  "오리아나",
  "요네",
  "이렐리아",
  "제드",
  "제라스",
  "조이",
  "카사딘",
  "카시오페아",
  "카이사",
  "카타리나",
  "코르키",
  "키아나",
  "탈론",
  "트위스티드 페이트",
  "피즈",
  "하이머딩거",
];

const ADC = [
  "드레이븐",
  "루시안",
  "미스 포츈",
  "바루스",
  "베인",
  "사미라",
  "시비르",
  "아펠리오스",
  "애쉬",
  "야스오",
  "이즈리얼",
  "자야",
  "제리",
  "직스",
  "진",
  "징크스",
  "카이사",
  "칼리스타",
  "케이틀린",
  "코그모",
  "트리스타나",
  "트위치",
];

const SUPPORT = [
  "갈리오",
  "나미",
  "노틸러스",
  "라칸",
  "럭스",
  "레나타 글라스크",
  "레오나",
  "렐",
  "룰루",
  "마오카이",
  "모르가나",
  "바드",
  "벨코즈",
  "브라움",
  "브랜드",
  "블리츠크랭크",
  "세나",
  "세라핀",
  "소나",
  "소라카",
  "스웨인",
  "쓰레쉬",
  "알리스타",
  "유미",
  "자이라",
  "잔나",
  "제라스",
  "질리언",
  "카르마",
  "타릭",
  "파이크",
  "판테온",
];

export const champPos = (position: Position) => {
  switch (position) {
    case "TOP":
      return TOP;
    case "JUNGLE":
      return JUNGLE;
    case "MIDDLE":
      return MIDDLE;
    case "ADC":
      return ADC;
    case "SUPPORT":
      return SUPPORT;
  }
};
