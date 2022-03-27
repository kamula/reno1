import React,{useState,useEffect} from 'react'
import {Link,useSearchParams,useNavigate } from 'react-router-dom'
import { Form,Button,Row,Col } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { register } from '../actions/userActions'

function RegisterScreen() {
    const [first_name,setfirst_name] = useState('')
    const [last_name,setlast_name] = useState('')
    const [email,setEmail] = useState('')
    const [phone_number,setphone_number] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [message,setMessage] = useState('')
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams();
    // const redirect = location.search ? location.search.split('=')[1]:'/'
    const redirect = searchParams.redirect ? searchParams.get.split('='):'/'
    const userRegister = useSelector(state=>state.userRegister)
    const {error,loading,userInfo} = userRegister
    const navigate = useNavigate();
    useEffect(()=>{
        if(userInfo){
            // navigate(redirect)            
            navigate('/')
            
        }
    },[userInfo,redirect])
    const submitHandler = (e) =>{
        e.preventDefault()
        if(password !== confirmPassword){
            setMessage('Passwords do not match')
        }else{
            dispatch(register(first_name,last_name,email,phone_number,password))
        }
    }
  return (
    <FormContainer>
        <h1 className='text-center'>Register</h1>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader/>}
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='first_name'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    required
                    type='first_name'
                    placeholder='Enter First Name '
                    value={first_name}
                    onChange={(e)=>setfirst_name(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='last_name'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    required
                    type='last_name'
                    placeholder='Enter Last Name '
                    value={last_name}
                    onChange={(e)=>setlast_name(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    required
                    type='email'
                    placeholder='Enter Email '
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='phone_number'>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    required
                    type='phone_number'
                    placeholder='Enter Phone Number'
                    value={phone_number}
                    onChange={(e)=>setphone_number(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    type='password'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='passwordConfirm'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    required
                    type='password'
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                >
                </Form.Control>
            </Form.Group>
            <div className='text-center mt-2'>
                <Button type='submit' variant='primary'>Register</Button>
            </div>
        </Form>
        <div className='text-center'>
            <Row className='py-3'>
                <Col>
                    Have an account? <Link
                        to={redirect ?`/login?redirect= ${redirect}`:'/login'}
                        // to='/register'
                    >
                    Sign In
                    </Link>
                </Col>
            </Row>
        </div>
        
    </FormContainer>
  )
}

export default RegisterScreen