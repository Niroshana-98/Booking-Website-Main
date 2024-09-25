import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import Layout from "./Layout.jsx";
import axios from 'axios';
import { UserContextProvider } from './UserContext.jsx';
import { useEffect } from 'react';
import AccountPage from './pages/ProfilePage.jsx';
import PlacesPage from './pages/PlacesPage.jsx';

axios.defaults.baseURL ='http://localhost:4003';
axios.defaults.withCredentials = true;



function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/account' element={<AccountPage/>}/>
          <Route path='/account/places' element={<PlacesPage/>}/>
        </Route>
      </Routes>
    </UserContextProvider>
  )
}
export default App
