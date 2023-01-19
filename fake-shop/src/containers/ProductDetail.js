import React, {useEffect} from 'react'
import { StaticRouter, useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';

const ProductDetail = () => {
  const product = useSelector((state) => state.product)
  const {image, title, price, category, descrption} = product;
  const {productId} = useParams();
  const dispatch = useDispatch();
  console.log(productId);
  const fetchProductDetail = async() => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
      console.log("err", err)
    })

    dispatch(selectedProduct(response.data))
  }
  useEffect(() => {
    if(productId && productId !== ""){
      fetchProductDetail();
    }
    
  }, [productId])
  return (
    <div className='ui grid container'>
      <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">
                {title}
              </div>
              <div className="meta price">${price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
          </div>
          </div>
  )
}

export default ProductDetail