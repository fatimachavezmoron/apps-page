import './App.css'
// import HookApp from './HookApp'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AboutScreen } from './pages/AboutScreen';
import { HomeScreen } from './pages/HomeScreen';
import { Navbar } from './pages/components/Navbar';
import { UserProvider } from './pages/context/UserProvider';
import { LoginScreen } from './pages/LoginScreen';
import { WeatherApp } from './Weather App/WeatherApp';

function App() {

  return (
    <>
      <UserProvider> 
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomeScreen />}></Route>
            <Route path='/movies' element={<AboutScreen />}></Route>
            <Route path='/weather' element={<WeatherApp />}></Route>
            <Route path='/*' element={<Navigate to='/'/>}></Route>
            <Route path='/user' element={<LoginScreen />}></Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
        {/* <HookApp /> */}
    </>
  )
}

export default App
