/* eslint-disable no-unused-vars */
import axios from 'axios'
import { useEffect, useState } from 'react';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Home';
import Login from './Components/Login';
import ContactUs from './Components/Contactus';

const App = () =>{
  const baseurl = 'http://localhost:5040'
// const [data, setData] = useState([])
const [changeTheme, setChangeTheme] = useState(false)
const [show, setShow] = useState(false)
const [userData, setUserData] = useState('')

// const options = {
//   method: 'GET',
//   url: 'https://movies-api14.p.rapidapi.com/search',
//   params: {
//     query: 'boys'
//   },
//   headers: {
//     'x-rapidapi-key': 'b610f4c366msh83133b961a565eap1567c0jsnce99427ed7c3',
//     'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
//   }
// };


//   const fetchData = async ()=>{
//     try {
//       const response = await axios.request(options);
//       console.log(response.data);
//       setData(response.data.contents)
//       console.log(data);
      
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   useEffect(()=>{
//    fetchData();
  
// },[])
// fetchdata()
  return(
    <div className='h-screen' data-theme={changeTheme ? "night" : "mytheme"}>
       
      <Navbar setChangeTheme = {setChangeTheme} changeTheme = {changeTheme} show = {show} setShow={setShow} />
     
      <Routes>
        <Route path='/signup' element={<Signup baseurl={baseurl} navbarShow = {show} />}  />
        <Route path='/contactus' element={<ContactUs baseurl={baseurl} navbarShow = {show} />}  />
        <Route path='/login' element={<Login baseurl={baseurl} navbarShow = {show}  setUserData = {setUserData} />}  />
        <Route path='/dashboard' element={<Dashboard baseurl={baseurl} navbarShow = {show} userData = {userData} />} />

     <Route path='/' element={<Home navbarShow = {show} />} />
        
      </Routes>
      
      
    {/* <Footer /> */}
    </div>
  )
}
export default App