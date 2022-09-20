import './Header.css';
import {Link, useNavigate} from 'react-router-dom';

const Header = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    // console.log(user)
    const navigate = useNavigate()
    const clear=()=>{
        localStorage.clear()
        navigate('/')
    }
    return (
     <nav className='navbar bg-color'>
       <div className="container">
          <Link to="/allProducts" className="navbar-brand">
              <div className="d-flex justify-content-start">
                  <div className='brand'>Teebay</div>
                  
              </div>
          </Link>
          {user?<div className='d-flex justify-content-center align-items-center '>
             <div ><Link to='/allProducts' className='nav-items'>All Products</Link></div>
             <div ><Link to='/myProducts' className='nav-items'>My Products</Link></div>
             <div ><Link to='/allTransactions' className='nav-items'>Transactions</Link></div>
          </div>:''}
          {user?<button className='custom p-2' onClick={clear }>Logout</button>:''}
       </div>
     </nav>
    )
  }
  
  export default Header