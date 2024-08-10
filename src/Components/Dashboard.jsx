import axios from "axios";
import dotenv from "dotenv";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Vote from "./Vote";

const Dashboard = ({ userData, baseurl }) => {
  const [name, setName] = useState("");
  const [userId, setId] = useState("");
  const [result, setResult] = useState("");
  const [winner, setWinner] = useState("");
  const movie = userData.movie;
  useEffect(() => {
    try {
      const cookie = document.cookie;
      const token = jwtDecode(cookie);
      // console.log(token);
      setName(token.name);
      setId(token.id);
      // console.log(name, userId);
      
    } catch (error) {
      toast.error("Invalid Token");
    }
  }, []);
  const fetchData = async ()=>{
    
    try {
          movie.map(async (movies)=>{
              // console.log(movies);
        
          let response = await axios.get(`${baseurl}/api/getresult/${movies}`)
              // console.log(response)
              setWinner(response.data.winnerMovie)
              setResult(response.data.message)
              toast.success("Fetched Movie Results")
             })}
            catch (error) {
                console.error(error)}
  }
  return (
    <div className="">
      {userData.name}
     
      <h1>
<div>
    <button type="button" onClick={()=>fetchData()}>Fetchdata</button>
</div>
      {result} <span className="uppercase text-accent">
      {winner.title}
        </span>
      </h1>
      <div>
      <Vote  />
      </div>
    </div>
  );
};
export default Dashboard;
