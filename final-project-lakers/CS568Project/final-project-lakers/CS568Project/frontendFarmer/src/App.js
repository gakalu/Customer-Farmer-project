// import React from 'react';
// import {BrowserRouter,Route,Link} from 'react-router-dom'
// import AddProduct from './components/AddProduct';
// //import {DataProvider} from './components/Context'
// import FarmerProducts from './components/FarmerProducts';


// class App extends React.Component{
//   render(){
//     return(
//       <BrowserRouter>
//         <div className="app">
//             <FarmerProducts/>
//             <Route path='/add-product' component={AddProduct}/>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;
import React from 'react';
import {BrowserRouter,Route, Link} from 'react-router-dom'
// import Header from './components/Header'
// import Section from './components/Section'
// import {DataProvider} from './components/Context'
import FarmerProducts from './components/FarmerProducts';
import AddProduct from './components/AddProduct';
 import UpdateProduct from './components/UpdateProduct';
 import Login from './components/Login'
 import Signup from './components/Signup'
// import CustomerLogin from './CustomerLogin';
// import Signup from './Signup';
// import FarmerLogin from './FarmerLogin';

class App extends React.Component{
  render(){
    return(
      
      <div>
        <BrowserRouter>
        <div>
          <ul>
          <li>
            <Link to = '/Signup'>Sign up</Link>
          </li>
          <li>
            <Link to = '/Login'>log in</Link>
          </li>
          <li>
            <Link to = '/Sign out'>Log out</Link>
          </li>
          <li>
            <Link to = '/products'>Products</Link>
          </li>
  
        </ul>
        </div>
        <div>
        <Route path = '/products' component = {FarmerProducts}/>
        <Route path='/add-product' component={AddProduct} />
        <Route path='/update-product' component={UpdateProduct}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/Login' component={Login}/>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
