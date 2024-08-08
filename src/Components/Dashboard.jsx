import axios from "axios";
import dotenv from "dotenv";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Dashboard = ({ userData, baseurl }) => {
  const [name, setName] = useState("");
  const [userId, setId] = useState("");
  const [result, setResult] = useState("");
  const movie = userData.movie;
  useEffect(() => {
    try {
      const cookie = document.cookie;
      const token = jwtDecode(cookie);
      console.log(token);
      setName(token.name);
      setId(token.id);
      console.log(name, userId);
    
    } catch (error) {
      toast.error("Invalid Token");
    }
  }, []);
  const fetchData = async ()=>{

       try {
              movie.map(async (movies)=>{
              console.log(movies);
              
              let response = await axios.get(`${baseurl}/api/getresult/${movies}`)
              console.log(response)
              setResult(response.data.message)
              toast.success("Fetched Movie Results")
             })}
            catch (error) {
                console.error(error)}
//   const fetchData = () =>{
    
//     try {
//         const response = axios.get(`${baseurl}/api/getmovies/${userId}`)

        
//     } catch (error) {
//         toast.error("Invalid token or No Data Found")
//     }
//   }
  }
  return (
    <div className="">
      {userData.name}
      {movie.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
      <h1>
<div>
    <button type="button" onClick={()=>fetchData()}>Fetchdata</button>
</div>
      {result}
      </h1>
    </div>
  );
};
export default Dashboard;
