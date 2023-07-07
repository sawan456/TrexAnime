// import React from 'react'
// import { useGlobalContext } from '../context'
// import Footer from './Footer'
// import { Link } from 'react-router-dom'


// const WishList = () => {
//   const {cartItems,setCartItems} = useGlobalContext();

//   function handleDelete(data) {
//     const newCartItems = cartItems.filter(item => item.id != data.id)
//     setCartItems([...newCartItems])
//     localStorage.setItem('datas', JSON.stringify([...newCartItems]))
//     alert("Item Removed...!!!");
//   }

//   function lol (data){
//     const newCartItems = cartItems.filter(item => item.id != data.id)
//     setCartItems([...newCartItems])
//     localStorage.setItem('datas', JSON.stringify([...newCartItems]))
//     alert("Order Placed Successfully.!");
//   };
  

//   // ---------------------------------------------------------------
//   // const Globalstate = useContext(Cartcontext);
//   // const state = Globalstate.state;
//   // const dispatch = Globalstate.dispatch;
//   // ---------------------------------------------------------------

//   return (
//     <div>
//       <div  className="topHead">
//       <div className="headContainer">
//       <h1>Cart-Page</h1><br /><br />
//       <Link to='/' style={{textDecoration:"none"}} ><h5>X</h5></Link>
//       </div>
//       <div className="dataContainer">
//       {cartItems.length === 0 ? (
//                 <h1 className="emptyCart">Cart is Empty!</h1>
//             ) : (
//                 <ul className="cartsection">
//                     {cartItems.map((item) => {
//                         return (
//                             <li key={item.imdbID} className="cartproduct">
//                                 <div className="cartImage">
//                                     <img src={item.Poster} alt="" style={{width:"200px",height:"300px"}} />
//                                 </div>
//                                 <div></div>
//                                 <div className="cartdescription">
//                                     <h1>{item.Title}</h1>
//                                     <p className="price">
//                                         {item.Year}
//                                     </p>
//                                     <br />
//                                     {/* <button className='btn1' onClick={() => dispatch({ type: "REMOVE", payload: item })}>Buy now</button>
//                                     <button className='btn2' onClick={() => dispatch({ type: "REMOVE", payload: item })}>Remove</button> */}
//                                     <button className='btn1' onClick={() => lol(item)} >Buy now</button>
//                                     <button className='btn2' onClick={() => handleDelete(item)}>
//                                         Remove
//                                     </button>
//                                 </div>
//                             </li>
//                         );
//                     })}
//                 </ul>
//             )}
//       </div>
      
//       </div>
//       <Footer/>
//     </div>
//   )
// }

// export default WishList

import React from 'react'
import { useGlobalContext } from '../context'

const WishList = () => {
  const {cartItems} = useGlobalContext();
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((movie) => (
          <li key={movie.id}>{movie.Title}</li>
        ))}
      </ul>
    </div>
  )
}

export default WishList
