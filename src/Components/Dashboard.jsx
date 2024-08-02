const Dashboard = ({userData}) =>{
    const movie = userData.movie
    const movieData = localStorage.getItem('userData')
    console.log(movieData);
    
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