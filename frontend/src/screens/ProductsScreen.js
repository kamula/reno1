/*Products in similar category*/
import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { Link,useParams } from 'react-router-dom';
import axios from "axios";

function ProductsScreen() {
  const {id} = useParams()
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(`/api/v1/products/categories/${id}`);
      setProducts(data);
    }
    fetchProducts();
  },[]);
  return (
    <div>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductsScreen;
