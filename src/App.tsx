
import './App.css'
// import { Button } from './comporent/showInfor' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './comporent/page/home/Home'
import Productdetail from './comporent/page/productDetail/productDetail';
import Login from './comporent/page/login/Login';
import Singup from './comporent/page/singup/Singup';
import Dasbroad from './comporent/page/admin/dasbroad/dasbroad';
import Add from './comporent/page/admin/add/Add';

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


          </Routes>
          <Routes>
            <Route path='/admin' element={ <Dasbroad></Dasbroad> } />
            <Route path='/admin/add' element={ <Add /> } />

          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
