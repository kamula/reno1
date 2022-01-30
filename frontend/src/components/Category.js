import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Category({category}) {
  return <Card className='my-3 p-3 rounded'>
      <Link to={`/categories/${category.id}`}>
          <Card.Img src={category.image}/>
      </Link>
      <Card.Body>
        <Link to={`/categories/${category.id}`} style={{ textDecoration: 'none' }}>
            <Card.Title as="h4" className='text-center'>
                <strong>{category.name}</strong>
            </Card.Title>
        </Link>        
        <Card.Text>
            {category.description}
        </Card.Text>
      </Card.Body>

  </Card>;
}

export default Category;
