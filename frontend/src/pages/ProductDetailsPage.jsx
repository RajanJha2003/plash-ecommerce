import React, { useEffect, useState } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import ProductDetails from '../components/Products/ProductDetails.jsx';
import { useParams } from 'react-router-dom';
import { productData } from '../static/data.js';
import SuggestedProduct from '../components/Products/SuggestedProduct.jsx';

const ProductDetailsPage = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (name) {
      const productName = name.replace(/-/g, ' ');
      const product = productData.find((item) => item.name === productName);
      setData(product);
    }
  }, [name]);

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {data && <SuggestedProduct data={data} />}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
