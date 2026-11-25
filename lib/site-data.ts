export type Branch = {
  id: string;
  name: string;
  region: string;
  area: string;
  address: string | null;
  hours: string | null;
  phone: string | null;
  images: string[];
  cardName?: string;
};
// 실제 지점별 자료를 확인한 뒤 입력하세요. 브랜드 공간 사진은 지점 사진으로 사용하지 않습니다.
const locations: Array<Omit<Branch, "address" | "hours" | "phone" | "images"> & Partial<Pick<Branch, "address" | "images">>> = [
  { id: "magok", name: "마곡사단", region: "서울", area: "강서구 마곡", address: "서울 강서구 마곡중앙6로 66, 퀸즈파크텐 B동 1층 120호", images: ["/images/magok-front.webp"] },
  { id: "the-black", name: "남포점 · The Black", cardName: "남포사단", region: "부산", area: "중구 남포", address: "부산 중구 광복로 9", images: ["/images/black-front.webp", "/images/black-angle.webp"] },
  { id: "myeongji", name: "명지사단", region: "부산", area: "강서구 명지", address: "부산 강서구 명지국제2로28번길 7, 1층 108호", images: ["/images/myeongji-front.webp", "/images/myeongji-2.webp"] },
  { id: "seomyeon", name: "서면사단", region: "부산", area: "부산진구", images: ["/images/seomyeon2.png"] },
  { id: "gwangan", name: "광안1사단", region: "부산", area: "수영구 광안", images: ["/images/gwangan-front.webp"] },
  { id: "gwangan-2", name: "광안2사단", region: "부산", area: "수영구 광안", images: ["/images/gwangan-2.webp"] },
  { id: "dongnae", name: "동래사단", region: "부산", area: "동래구" },
  { id: "buldang", name: "불당사단", region: "충남", area: "천안 불당", images: ["/images/buldang.png"] },
  { id: "jeonju", name: "웨리단길사단", region: "전북", area: "전주 웨리단길", images: ["/images/jeonju-front.webp"] },
  { id: "yulha", name: "율하사단", region: "경남", area: "김해 율하", images: ["/images/yulha-front.webp"] },
];

export const branches: Branch[] = locations.map((branch) => ({
  ...branch,
  address: branch.address ?? null,
  hours: null,
  phone: null,
  images: branch.images ?? [],
}));

export const mapUrl = (branch: Branch) =>
  "https://map.naver.com/p/search/" + encodeURIComponent("다이린 " + branch.name.split(" · ")[0] + " " + branch.area);

export type FoodItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  tag?: string;
};
export const foodItems: FoodItem[] = [
  {
    id: "pizza",
    name: "떠먹는 페퍼로니 피자",
    price: 12900,
    image: "/images/pizza.webp",
    category: "든든한 한 접시",
    tag: "NEW",
  },
  {
    id: "karaage",
    name: "치킨 가라아게",
    price: 12900,
    image: "/images/karage.webp",
    category: "구이·튀김",
    tag: "BEST",
  },
  {
    id: "toriyaki",
    name: "토리야끼 (직화숯불구이)",
    price: 12900,
    image: "/images/grilledfish.webp",
    category: "구이·튀김",
  },
  {
    id: "fishcake",
    name: "수제어묵",
    price: 12900,
    image: "/images/fishcake.webp",
    category: "든든한 한 접시",
  },
  {
    id: "squid",
    name: "갑오징어구이",
    price: 12900,
    image: "/images/squid.webp",
    category: "구이·튀김",
  },
  {
    id: "cuttlefish",
    name: "갑오징어 가라아게",
    price: 12900,
    image: "/images/cuttlefish.webp",
    category: "구이·튀김",
  },
  {
    id: "shrimp",
    name: "새우 덴푸라",
    price: 12900,
    image: "/images/shrimp.webp",
    category: "구이·튀김",
  },
  {
    id: "curry",
    name: "카레우동",
    price: 11900,
    image: "/images/curryudon.webp",
    category: "든든한 한 접시",
  },
  {
    id: "kimchi-udon",
    name: "김치우동",
    price: 11900,
    image: "/images/kimchiudon.webp",
    category: "든든한 한 접시",
  },
  {
    id: "hamburg",
    name: "함박카츠",
    price: 9900,
    image: "/images/hamburg.webp",
    category: "구이·튀김",
  },
  {
    id: "rice",
    name: "김치치즈볶음밥",
    price: 7900,
    image: "/images/kimchirice.webp",
    category: "든든한 한 접시",
  },
  {
    id: "icecream",
    name: "우유튀김 & 아이스크림",
    price: 11900,
    image: "/images/icecream.webp",
    category: "가벼운 곁들임",
  },
  {
    id: "chips",
    name: "감자튀김 & 감자칩스",
    price: 11900,
    image: "/images/chips.webp",
    category: "가벼운 곁들임",
  },
  {
    id: "corn",
    name: "옥수수 버터구이",
    price: 9900,
    image: "/images/corn.webp",
    category: "가벼운 곁들임",
  },
  {
    id: "sausage",
    name: "소세지 야끼",
    price: 12900,
    image: "/images/sausage.webp",
    category: "구이·튀김",
  },
  {
    id: "roe",
    name: "명란구이",
    price: 12900,
    image: "/images/fishegg.webp",
    category: "가벼운 곁들임",
  },
];
