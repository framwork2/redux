import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
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
import EditCate from './comporent/page/admin/editCate/Editcate';
import Cart from './comporent/page/cart/cart';
import Notfount from './comporent/page/NotFount/Notfount';

function App ()
{
  const storedName = JSON.parse( sessionStorage.getItem( 'user' )! );
  const isAdmin = storedName?.user?.role === 'admin';

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/product/:_id" element={ <Productdetail /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/singup" element={ <Singup /> } />
          <Route path="/products" element={ <ProductPage /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/cart" element={ <Cart /> } />

          { isAdmin ? (
            <Route>
              <Route path='/admin' element={ <Dasbroad /> } />
              <Route path='/admin/add' element={ <Add /> } />
              <Route path='/admin/cate/addcate' element={ <CateAdd /> } />
              <Route path='/admin/cate' element={ <Catelist /> } />
              <Route path='/admin/edit/:_id' element={ <EditProduct /> } />
              <Route path='/admin/cate/editcate/:_id' element={ <EditCate /> } />
              {/* Nếu là admin, không cần hiển thị trang /notfound */ }
            </Route>
          ) : (
            // Nếu không phải admin, chuyển hướng đến trang /notfound
            <Route path="/notfound" element={ <Notfount /> } />
          ) }

          {/* Nếu đường dẫn không khớp với bất kỳ route nào, chuyển hướng đến trang /notfound */ }
          <Route path="*" element={ <Navigate to="/notfound" /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
