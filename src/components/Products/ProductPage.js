import React, { useEffect } from "react";
import EcomAPI from "../../apis/EcomAPI";
import { useParams } from "react-router-dom";
const ProductPage = () => {
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EcomAPI.get(`/product/getoneproduct/${id}`);
        console.log(response);
      } catch (err) {
        console.log(err, "This is error");
      }
    };
    fetchData();
  }, [id]);
  return <div>ProductPage</div>;
};

export default ProductPage;
