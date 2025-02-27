import axios from "axios";

// 핸들러
const requestErrorHandler = (e) => {
  if (e.response) {
    return `처리 중 오류가 발생했습니다. 다른 값을 입력해보세요.`;
  } else {
    return `서버에 접속하지 못했습니다.`;
  }
};

// 상품목록조회
const getProductList = async (page, pageSize, orderBy = "recent", keyword) => {
  try {
    if (keyword) {
      const res = await axios.get(
        `https://panda-market-api-crud.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
      );
      return res.data;
    } else {
      const res = await axios.get(
        `https://panda-market-api-crud.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`
      );
      return res.data;
    }
  } catch (e) {
    return requestErrorHandler(e);
  }
};

// 상품개별조회
const getProductURL = "https://panda-market-api-crud.vercel.app/products/496";
const getProduct = async () => {
  try {
    const res = await axios.get(getProductURL);
    return res.data;
  } catch (e) {
    return requestErrorHandler(e);
  }
};

// 상품생성
const createProduct = async (createProductData) => {
  try {
    const res = await axios.post(
      "https://panda-market-api-crud.vercel.app/products",
      createProductData
    );
    return res.data;
  } catch (e) {
    return requestErrorHandler(e);
  }
};

// 상품삭제
const deleteProduct = async (productId) => {
  try {
    const res = await axios.delete(
      `https://panda-market-api-crud.vercel.app/products/${productId}`
    );
    return res.data;
  } catch (e) {
    return requestErrorHandler(e);
  }
};

// 상품수정
const patchProduct = async (productId, patchProductData) => {
  try {
    const res = await axios.patch(
      `https://panda-market-api-crud.vercel.app/products/${productId}`,
      patchProductData
    );
    return res.data;
  } catch (e) {
    return requestErrorHandler(e);
  }
};

export {
  getProductList,
  getProduct,
  createProduct,
  deleteProduct,
  patchProduct,
};
