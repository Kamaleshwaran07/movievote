import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import * as yup from "yup";
import heroImage from "../assets/theater-8921521_1920.jpg"
import success from "../assets/check.png";
import eye from "../assets/eye.png";
import eyeClose from "../assets/hide.png";
import error from "../assets/cross.png";
import mail from "../assets/mail.png";
import eyesclosed from "../assets/watch.png";
import { useNavigate } from "react-router-dom";



const Login = ({baseurl, navbarShow, setUserData}) =>{
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [show, setShow] = useState(false);
    
    const navigate = useNavigate()
      
        const handleSubmit = async (e) => {
            const payload = {email, password}
            e.preventDefault();
          try {
            const response = await axios.post(`${baseurl}/api/login`, payload);
            toast.success(response.data.message, { icon: "🤯" });
            console.log(response.data.user)
            localStorage.setItem('userData', response.data.user)
            setUserData(response.data.user)
            navigate("/dashboard")
            formik.resetForm();
            console.log(response.data);
            setTimeout(() => {
              toast.dismiss(response.data.message);
            }, 3000);
          } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
         
      }};
return(
    <div>
      <Toaster />
      <img src={heroImage} alt="seats" className="h-36 w-4/5 mx-auto mt-3 rounded" />
         <form onSubmit={handleSubmit} className="flex flex-col gap-3 mx-auto justify-center w-[23rem]">
        
        <h3 className="text-center text-xl font-semibold">Login</h3>
        <label
          className="input input-bordered flex items-center   gap-2"
          name="email"
          >
        <img src={mail} alt="mail" className="w-5 h-5" />
          Email <span className="text-red-700">*</span>
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="grow"
            placeholder="johndoe@site.com"
            name="email"
            pattern="/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/"
            title="Please provide a valid email"
            />
        </label>
      

        <label
          className="input input-bordered flex items-center   gap-2"
          name="password"
          >
          <button type="button" onClick={() => setShow(!show)} className="w-6">
            <img
              src={show ? eyeClose : eye}
              alt="openEyes"
              className="w-12 rounded-full"
              />

            {/* <img src={eyesclosed} alt="closed" className="w-8 rounded-full" /> */}
          </button>
          Password <span className="text-red-700">*</span>
          <input
            type={show ? "password" : "text"}
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="grow"
            placeholder="Your Password"
            required
            pattern=".{8,}"
            title="Your password must contain 8 or more characters or Use your brain to remember the password"
            />
        </label>
       

       

        <button className="border-2 rounded-lg w-24 ml-36 btn btn-secondary" type="submit" >
          Login
        </button>
      </form>
    </div>
)
}
export default Login