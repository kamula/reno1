import React,{useState,useEffect} from 'react'
import {Link,useSearchParams,useNavigate } from 'react-router-dom'
import { Form,Button,Row,Col } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { login } from '../actions/userActions'

function LoginScreen({location,history}) {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams();
    // const redirect = location.search ? location.search.split('=')[1]:'/'
    const redirect = searchParams.redirect ? searchParams.get.split('='):'/'
    const userLogin = useSelector(state=>state.userLogin)
    const {error,loading,userInfo} = userLogin
    const navigate = useNavigate();
    useEffect(()=>{
        if(userInfo){
            // navigate(redirect)            
            navigate('/')
            
        }
    },[userInfo,redirect])
    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(login(email,password))
    }
  return (
    <FormContainer>
        <h1 className='text-center'>Sign In</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader/>}
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Enter Email '
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                >
                </Form.Control>
            </Form.Group>
            <div className='text-center mt-2'>
                <Button type='submit' variant='primary'>Sign In</Button>
            </div>
        </Form>
        <div className='text-center'>
            <Row className='py-3'>
                <Col>
                    New Customer? <Link
                        to={redirect ?`/register?redirect= ${redirect}`:'/register'}
                        // to='/register'
                    >
                    Register
                    </Link>
                </Col>
            </Row>
        </div>
    </FormContainer>
  )
}

export default LoginScreen