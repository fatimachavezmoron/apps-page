import './App.css'
// import HookApp from './HookApp'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AboutScreen } from './pages/AboutScreen';
import { HomeScreen } from './pages/HomeScreen';
import { Navbar } from './pages/components/Navbar';
import { UserProvider } from './pages/context/UserProvider';
import { LoginScreen } from './pages/LoginScreen';
import { WeatherApp } from './Weather App/WeatherApp';
import { CartApp } from './pages/CartApp/CartApp';
import { BuyPage } from './pages/CartApp/BuyPage';
import { CartPage } from './pages/CartApp/CartPage';
import { ProductsProvider } from './pages/context/ProductsProvider';
import { CartProvider } from './pages/context/CartProvider';

function App() {

  return (
    <>
      <UserProvider> 
        <ProductsProvider>
          <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomeScreen />}></Route>
            <Route path='/movies' element={<AboutScreen />}></Route>
            <Route path='/weather' element={<WeatherApp />}></Route>
            <Route path='/user' element={<LoginScreen />}></Route>
            <Route path='/eshop' element={<CartApp />}></Route>
            <Route path='/buypage' element={<BuyPage />}></Route>
            <Route path='/cartpage' element={<CartPage />}></Route>
            <Route path='/*' element={<Navigate to='/'/>}></Route>
          </Routes>
        </BrowserRouter>
        </CartProvider>
        </ProductsProvider>
      </UserProvider>
        {/* <HookApp /> */}
    </>
  )
}

export default App
