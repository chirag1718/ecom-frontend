import React, { useEffect } from "react";
import EcomAPI from "../../apis/EcomAPI";
const ProductPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await 
        // console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData()
  }, []);
  return <div>ProductPage</div>;
};

export default ProductPage;
