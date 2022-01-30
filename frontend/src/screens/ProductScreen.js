/*Single product*/
import React,{useState,useEffect} from 'react';
import { Link,useParams } from 'react-router-dom';
import { Row,Col,Image,ListGroup,Button,Card } from 'react-bootstrap';
import axios from "axios";



function ProductScreen({match}) {
  const {id} = useParams()
  
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get(`/api/v1/products/${id}`);
      setProduct(data);
    }
    fetchProduct();
  },[]);
  
  
  return <div>
      <Link to = "/" className='btn btn-light my-3'>Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Price: Ksh {product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>Ksh {product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock':'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className='btn-block' disabled = {product.countInStock === 0} type='button' style={{width:"100%"}}> Add to Cart </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>      
  </div>;
}

export default ProductScreen;