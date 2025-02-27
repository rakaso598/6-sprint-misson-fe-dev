import {
  getArticleList,
  getArticle,
  createArticle,
  deleteArticle,
  patchArticle,
} from "./ArticleService.js";

import {
  getProductList,
  getProduct,
  createProduct,
  deleteProduct,
  patchProduct,
} from "./ProductService.js";

// 게시글목록조회
const articleList = await getArticleList(1, 10, undefined);
console.log(articleList);

const articleListSearch = await getArticleList(1, 10, undefined, "이름");
console.log(articleListSearch);

// 게시글개별조회
const article = await getArticle(3);
console.log(article);

// 게시글생성
const createArticleData = {
  image: "https://example.com/...",
  content: "게시글 내용입니다.",
  title: "게시글 제목입니다.",
};
const createArticleResponse = await createArticle(createArticleData);
console.log(createArticleResponse);

// 게시글삭제
const deleteArticleResponse = await deleteArticle(447);
console.log(deleteArticleResponse);

// 게시글수정
const patchArticleData = {
  image: "https://example.com/...",
  content: "게시글 내용입니다.",
  title: "게시글 제목입니다.",
};
const patchArticleResponse = await patchArticle(448, patchArticleData);
console.log(patchArticleResponse);

// 상품목록조회
const productList = await getProductList(1, 10, undefined);
console.log(productList);

const productListSearch = await getProductList(1, 10, undefined, "이름");
console.log(productListSearch);

// 상품개별조회
const product = await getProduct();
console.log(product);

// 상품생성
const createProductData = {
  images: ["https://example.com/..."],
  tags: ["전자제품"],
  price: 0,
  description: "string",
  name: "상품 이름",
};
const createProductResponse = await createProduct(createProductData);
console.log(createProductResponse);

// 상품삭제
const deleteProductResponse = await deleteProduct(505);
console.log(deleteProductResponse);

// 상품수정
const patchProductData = {
  images: ["https://example.com/..."],
  tags: ["전자제품"],
  price: 0,
  description: "string",
  name: "상품 이름",
};
const patchProductResponse = await patchProduct(510, patchProductData);
console.log(patchProductResponse);
