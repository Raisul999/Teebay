import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
// import { RestLink } from 'apollo-link-rest';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import AllProducts from './Pages/AllProducts/AllProducts';
import MyProducts from './Pages/MyProducts/MyProducts';
import AddProduct from './components/AddProduct/AddProduct';
import Header from './components/Header/Header';
import EditProduct from './components/EditProduct/EditProduct';
import AllTransactions from './Pages/AllTransactions/AllTransactions';

function App() {

  // Setup your client
  const client = new ApolloClient({
    uri: 'http://localhost:5000/api',
    cache: new InMemoryCache(),
  });

  
  // console.log(data)
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<SignUp />} />
            <Route path='/allProducts' element={<AllProducts />} />
            <Route path='/myProducts' element={<MyProducts />} />
            <Route path='/allTransactions' element={<AllTransactions />} />
            <Route path='/addProduct' element={<AddProduct />} />
            <Route path='/editProduct/:id' element={<EditProduct />} />
            
            {/* <Route path='/login' element={<Login/>}/> */}
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
