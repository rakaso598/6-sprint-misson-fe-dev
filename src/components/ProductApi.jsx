import { useState, useEffect } from "react";
import { getProductList } from "../services/ProductService.js";

export const ProductApi = (orderBy) => {
  const [productList, setProductList] = useState(null);

  useEffect((orderBy) => {
    const fetchProductList = async () => {
      try {
        const productListResponse = await getProductList(1, 10, orderBy, undefined);
        setProductList(productListResponse);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProductList();
  }, [orderBy]);

  if (!productList || !productList.list) {
    return <div>No products found.</div>;
  }

  return (
    <>
      {productList.list.map((product) => {
        return (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        );
      })}
    </>
  );
};