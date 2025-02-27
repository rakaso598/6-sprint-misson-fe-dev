import axios from "axios";

// 핸들러
const requestErrorHandler = (e) => {
  if (e.response) {
    return `처리 중 오류가 발생했습니다. 다른 값을 입력해보세요.`;
  } else {
    return `서버에 접속하지 못했습니다.`;
  }
};

// 게시글목록조회
const getArticleList = async (page, pageSize, orderBy = "recent", keyword) => {
  try {
    if (keyword) {
      const res = await axios.get(
        `https://panda-market-api-crud.vercel.app/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
      );
      return res.data;
    } else {
      const res = await axios.get(
        `https://panda-market-api-crud.vercel.app/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`
      );
      return res.data;
    }
  } catch (e) {
    return requestErrorHandler(e);
  }
};

// 게시글개별조회
const getArticle = async (productId) => {
  try {
    const res = await axios.get(
      `https://panda-market-api-crud.vercel.app/articles/${productId}`
    );
    return res.data;
  } catch (e) {
    return requestErrorHandler(e);
  }
};

// 게시글생성
const createArticle = async (createArticleData) => {
  try {
    const res = await axios.post(
      "https://panda-market-api-crud.vercel.app/articles",
      createArticleData
    );
    return res.data;
  } catch (e) {
    return requestErrorHandler(e);
  }
};

// 게시글삭제
const deleteArticle = async (articleId, patchArticleData) => {
  try {
    const res = await axios.delete(
      `https://panda-market-api-crud.vercel.app/articles/${articleId}`
    );
    return res.data;
  } catch (e) {
    return requestErrorHandler(e);
  }
};

// 게시글수정
const patchArticle = async (articleId, patchArticleData) => {
  try {
    const res = await axios.patch(
      `https://panda-market-api-crud.vercel.app/articles/${articleId}`,
      patchArticleData
    );
    return res.data;
  } catch (e) {
    return requestErrorHandler(e);
  }
};

export {
  getArticleList,
  getArticle,
  createArticle,
  deleteArticle,
  patchArticle,
};
