import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Carousel,Image } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { ListTopCategory } from '../actions/categoryActions'

function CategoryCarousel() {
    const dispatch = useDispatch()
    const categoryTopRated = useSelector(state=>state.TopCategoryReducer)
    const {error,loading,categories} = categoryTopRated
    useEffect(()=>{
        dispatch(ListTopCategory())
    },[dispatch])
  return (
    loading?<Loader/>
    : error ?<Message variant="danger">{error}</Message>
    :(
        <Carousel pause='hover' className='bg-dark'>
            {categories.map(category=>(
                <Carousel.Item key={category.id}>
                    <Link to={`/categories/${category.id}`}>
                        <Image src={category.image} alt={category.name} fluid/>
                        <Carousel.Caption className='carousel.caption'>
                            <h4>{category.name}</h4>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            ))}
        </Carousel>
    )
  )
}

export default CategoryCarousel