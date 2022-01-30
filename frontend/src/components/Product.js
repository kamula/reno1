import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Product({product}) {
  return <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product.id}`}>
          <Card.Img src={product.image}/>
      </a>
      <Card.Body>
        <a href={`/product/${product.id}`}>
            <Card.Title as="div">
                <strong>{product.name}</strong>
            </Card.Title>
        </a>
        {/* <Card.Text as="div">
            <div className='my-3'>
                {product.rating} from {product.numReviews}
            </div>
        </Card.Text> */}
        <Card.Text as="h3">
            Ksh: {product.price}
        </Card.Text>
      </Card.Body>

  </Card>;
}

export default Product;
