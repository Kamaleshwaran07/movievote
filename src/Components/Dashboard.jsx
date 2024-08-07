
import dotenv from 'dotenv'



const Dashboard = ({userData}) =>{
    const movie = userData.movie
    const cookie = document.cookie
    // const token = jwt.verify(cookie.token, process.env.secret)
    // console.log(token);
    
    
    
    return(
        <div className="">
       
     
     
       
        {userData.name}
       {movie.map((item, index)=>{
        return(
            <div key={index}>
                {item}
                </div>
        )
       })}
     
        </div>
    )
}
export default Dashboard;