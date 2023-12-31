import React from 'react'
import { useGlobalContext } from '../context'
import '../style/Search.css'
// import HomeIcon from '@mui/icons-material/Home';
import { CgProfile } from "react-icons/cg";
import {AiFillHeart} from "react-icons/ai"
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import {AppBar,Toolbar,styled,Box} from '@mui/material'

const StyledHeader = styled(AppBar)`
  background: black;
  height:80px;
`


const Search = () => {
    const {query,setQuery,isError,cartItems} = useGlobalContext();
    const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
    
    return (
      <StyledHeader>
        <Toolbar>
     
    <div className='headerContainer'>
            {/* <FaHome/> */}
        {/* <HomeIcon/> */}
        <form action="#" onSubmit={(e)=>e.preventDefault()}>
            
            <input type="text" placeholder='search here' value={query} onChange={(e)=>setQuery(e.target.value)} />
            
        </form>
        <div className="card-error">
            <p>{isError.show && isError.msg}</p>
        </div>
        {/* <div className="wishList">
          <Link to='wishlist' >
        <AiFillHeart style={{fontSize:"2rem",cursor:"pointer"}}/>{cartItems.length}
        </Link>
        </div> */}
        {/* <CgProfile style={{fontSize:"2rem",cursor:"pointer",marginTop:"1.3rem",color:"black",backgroundColor:"skyBlue",borderRadius:"50%"}}/> */}
        
        {isAuthenticated && (
      <div className='profileInfo' style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem"}}>
        <img src={user.picture} alt={user.name} style={{height:"3rem",borderRadius:"50%",border:"solid #00ffb7"}} />
        <h2 className='userName' style={{fontSize:"25px",fontFamily: "Roboto ",color:"white"}} >{user.name}</h2>
        {/* <p>{user.email}</p> */}
      </div>
    )}
        {isAuthenticated ?  
        (<button style={{height:"2rem",marginTop:"20px",width:"5rem",cursor:"pointer",backgroundColor:"#cae962"}}  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>) :
        (<button className='btnOut' style={{height:"2rem",marginTop:"20px",width:"5rem",cursor:"pointer",backgroundColor:"#cae962"}}  onClick={() => loginWithRedirect()}>Log In</button>)
        }
    </div>
    </Toolbar>
    </StyledHeader>
       
  )
}

export default Search
