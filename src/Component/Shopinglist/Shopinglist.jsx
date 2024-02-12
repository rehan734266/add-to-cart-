import React from 'react'
import { useSelector } from 'react-redux'
import { store } from '../Store/Store'

const Shopinglist = () => {
    let shop=useSelector((store)=>store.ProductSection).shopinglist
    console.log(shop);
    let total=0;
  return (
    <>
    <table className=''>
      <tr>
        <th >Title</th>
        <th className=' d-inline' style={{marginLeft:"700px"}}>Price</th>
      </tr>
      {/* <hr /> */}

      {
        shop.map((item)=>{
          total+=+item.price
          return      <tr>    
                
                <td>{item.title}</td>
                <td className=' d-inline' style={{marginLeft:"700px"}}>${item.price}</td>
                </tr>
               })
            }
            <tr>
                <th>Totalbill</th>
                <td className=' d-inline bg-dark text-white' style={{marginLeft:"700px"}}>${total}</td>
                </tr>
    </table>
    </>
  )
}

export default Shopinglist