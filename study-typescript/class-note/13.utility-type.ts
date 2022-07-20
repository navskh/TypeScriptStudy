interface Product{
  id: number;
  name: string;
  price: number;
  brand : string;
  stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]>{
  //...
}

interface ProductDetail{
  id: number; 
  name: string; 
  price: number;
}

// 2. 특정 상품의 상세정보
type ShoppingItem1 = Pick<Product, 'id'|'name'|'price'>;
function displayProductDetail(shoppingItem: ShoppingItem1){

}

// 3. 특정 상품 정보를 업데이트 (갱신)하는 함수
// function updateaProductItem(productItem: Product){ 이렇게하면 매번 모든 타입을 다 받아야함.
// interface UpdateProduct{
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }

type UpdateProduct = Partial<Product> // 위와 같은 형태로 만드는 것임

function updateaProductItem(productItem: Partial<Product>){

}

// 4. 유틸리티 타입 구현하기 -partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserProfileUpdate{
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// #1 옵셔널 속성으로 정의하는 방법
// type UserProfileUpdate = {
//   username?: UserProfile['username'];
//   email?: UserProfile['email'];
//   profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// }

// #2 (in) 을 사용하여 하나씩 매칭해줌.
// type UserProfileUpdate = {
//   [p in 'username' | 'email' | 'profilePhotoUrl']: UserProfile[p]
// }


// #3 keyof를 사용하면 키를 다 가져올 수 있음
// type UserProfileKeys = keyof UserProfile 를 사용
type UserProfileUpdate = {
  [p in keyof UserProfile]? : UserProfile[p]
}

// #4 (Partial 의 구현) 제네릭의 사용
type Subset<T> = {
  [p in keyof T]?: T[p]
}