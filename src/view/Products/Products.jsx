import React from 'react'
import './index.scss'
import { useParams } from 'react-router-dom'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import Search from '../../components/search/Search'
import ProductDetail from '../../components/ProductsDetail/ProductsDetail'

const Products = ({ data }) => {
  const { productId } = useParams();
  const selectedProduct = data.find((product) => product.id == productId);

  return (
    <section className="product">
      <HeaderMenu />
      <Search />
      <ProductDetail data={selectedProduct} />
    </section>
  );
};
export default Products