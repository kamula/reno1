import React, { useEffect, useState } from "react";
import ControlledCarousel from "../components/ControlledCarousel";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Category from "../components/Category";
import { listCategory } from "../actions/categoryActions";

function HomeScreen() {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { error, loading, categories } = categoryList;
  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Loader/>
      ) : error ? (
        <Message variant = 'danger'>{error}</Message>
      ) : (
        <div>
          <h3 className="text-center">Product Categories</h3>
          <Row>
            {categories.map((category) => (
              <Col key={category.id} sm={12} md={6} lg={4} xl={3}>
                <Category category={category} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
