import React from 'react';
import { Card } from 'react-bootstrap';

function Category({category}) {
  return <Card className='my-3 p-3 rounded'>
      <a href={`/categories/${category.id}`}>
          <Card.Img src={category.image}/>
      </a>
      <Card.Body>
        <a href={`/product/${category.id}`} style={{ textDecoration: 'none' }}>
            <Card.Title as="h4" className='text-center'>
                <strong>{category.name}</strong>
            </Card.Title>
        </a>        
        <Card.Text>
            {category.description}
        </Card.Text>
      </Card.Body>

  </Card>;
}

export default Category;
