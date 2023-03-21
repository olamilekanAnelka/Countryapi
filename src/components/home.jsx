import Records from '../records.json';



const Home = () =>{


    return(
        <>
       <div className='Nav'>
        <h1>Where in the world?</h1>
        <p><span><i class="fa-regular fa-moon"></i></span>Dark Mode</p>
       </div>

        <div className="search">
            <button><i class="fa-solid fa-magnifying-glass"></i>Search for a country...</button>
            <form>
                  
                    <select>
                        <option value="google">Africa</option>
                        <option value="yahoo">Asia</option>
                        <option value="bing">Europe</option>
                    </select>
                    </form>
                
      
     
    
        </div>
      {
            Records.map( records => {
                return(
                    <div className='box'>
                        <img src={records.flag} alt='...' />
                        <h2>{records.name}</h2>
                        <p> {records.population} </p>
                        <p> {records.region} </p>
                        <p> {records.capital}</p>
                        <button>Country details</button>
                        <p>Remove country</p>

                    </div>

                )
            })
        }
        </>
          
        
    )
}


export default Home;

