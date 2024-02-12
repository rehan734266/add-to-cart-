import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  let dispatch=useDispatch()
  let params = useParams()
  let product = useSelector((store) => store.ProductSection).products
    .find(products => products.id == params.id)
  // console.log(product);
  return (
    // <div>ProductDetails</div>
    <>
      <div className='container-fluid w-75 mt-5 d-flex'>
        <img className='w-50 ' src={product.img} />
        <div className='px-5' style={{ marginTop: '95px' }} >
          <h3>{product.title}</h3>
          <h3><span style={{ color: "red" }}>price</span> {product.price}</h3>
          <button className='bg-dark text-white px-5 rounded' onClick={() => {
            dispatch({
              type:"ADD-TO-CART",
              payload:product
            })
          }}>Add to cart</button>
        </div>
      </div>
    </>
  )
}

export default ProductDetails
