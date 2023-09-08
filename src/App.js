import './App.css';
import Homepage from './pages/Homepage/Homepage';
import {Route,Routes} from 'react-router-dom'
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/Header/Header';
import SignInPage from './pages/SignInPage/SignInPage';
import CartPage from './pages/CartPage/CartPage';
import FooterPage from './pages/footer/FooterPage';
import Development from './pages/development/Development';
import Gallery from './pages/gallery/Gallery';
import ProductPage from './pages/ProductPage/Productpage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route  path='/shop' element={<ShopPage />} />
        <Route path='/SignIn' element={<SignInPage />}/>
        <Route path='/CartPage' element={<CartPage />}/>
        <Route path='/Gallery'   element={<Gallery/>} />
        <Route path='/Development' element={<Development />} />
        <Route path='/Gallery/ProductPage' element={<ProductPage />} />
      </Routes>
      <FooterPage />
    </div>
  );
}
 
export default App;
