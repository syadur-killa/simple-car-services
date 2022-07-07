import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequirAuth/RequirAuth';
import ServiceDeatail from './Pages/ServiceDeatail/ServiceDeatail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/service/:serviceId" element={<ServiceDeatail/>}></Route>
        <Route path="/about" element={<RequireAuth>
          <About></About>
        </RequireAuth>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Register/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
