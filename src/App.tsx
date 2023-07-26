
import './App.css'
// import { Button } from './comporent/showInfor' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './comporent/page/home/Home'
import Productdetail from './comporent/page/productDetail/productDetail';
import Login from './comporent/page/login/Login';
import Singup from './comporent/page/singup/Singup';
import Dasbroad from './comporent/page/admin/dasbroad/dasbroad';
import Add from './comporent/page/admin/add/Add';
import EditProduct from './comporent/page/admin/edit/Edit';
import ProductPage from './comporent/page/productpage/ProductPage';
import Profile from './comporent/page/profile/Profile';
import Catelist from './comporent/page/admin/catelist/Catelist';
import CateAdd from './comporent/page/admin/addCate/CateAdd';

function App ()
{

  return (
    <div>

      <Router>
        <div>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/product/:_id" element={ <Productdetail /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/singup" element={ <Singup /> } />
            <Route path="/products" element={ <ProductPage /> } />
            <Route path="/profile" element={ <Profile /> } />





          </Routes>
          <Routes>
            <Route path='/admin' element={ <Dasbroad></Dasbroad> } />
            <Route path='/admin/add' element={ <Add /> } />
            <Route path='/admin/cate/addcate' element={ <CateAdd /> } />

            <Route path='/admin/cate' element={ <Catelist /> } />

            <Route path='/admin/edit/:_id' element={ <EditProduct /> } />


          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
