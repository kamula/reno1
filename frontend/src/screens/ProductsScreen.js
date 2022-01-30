/*Products in similar category*/
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Link, useParams } from "react-router-dom";
import { listproducts } from "../actions/productsActions";

function ProductsScreen() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);
  const { loading, error, products } = productsList;
  useEffect(() => {
    dispatch(listproducts(id));
  }, [dispatch, id]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default ProductsScreen;
