interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {}

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type shoppingItem = Pick<Product, "id" | "name" | "price">;
function displayProductDetail(shoppingItem: shoppingItem) {}

// 3. 특정 상품 정보를 업데이트(갱신) 하는 함수
function updateProductItem(productItem: Partial<Product>) {}

// 4. 유틸리티 타입 구현하기
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// #1
// type UserProfileUpdate = {
//   username?: UserProfile["username"];
//   email?: UserProfile["email"];
//   profilePhotoUrl?: UserProfile["profilePhotoUrl"];
// };

// #2
type UserProfileUpdate = {
  [p in "username" | "email" | "profilePhotoUrl"]?: UserProfile[p];
};

type Subset<T> = {
  [p in keyof T]?: T[p];
};
