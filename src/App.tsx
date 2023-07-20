
import './App.css'
// import { Button } from './comporent/showInfor' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './comporent/page/home/Home'
import Productdetail from './comporent/page/productDetail/productDetail';
import Login from './comporent/page/login/Login';

function App ()
{

  return (
    <div>

      <Router>
        <div>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/products/" element={ <Productdetail /> } />
            <Route path="/login" element={ <Login /> } />

          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
