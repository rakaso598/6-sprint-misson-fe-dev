import { useState, useEffect } from "react";
import { getProductList } from "../services/ProductService.js";

export const RecentProductList = () => {
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const productListResponse = await getProductList(1, 10, 'recent');
        setProductList(productListResponse);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProductList();
  }, []);

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

export const FavoriteProductList = () => {
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const productListResponse = await getProductList(1, 4, 'favorite');
        setProductList(productListResponse);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProductList();
  }, []);

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