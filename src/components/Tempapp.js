import React, {useEffect, useState} from 'react';
import './css/style.css';


const Tempapp = () => {

    const[city, setCity] = useState(null);
    const[search, setSearch] = useState("Mumbai");

    useEffect( () => {

        const fetchApi = async () => {
            
            
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=335f0ab3a87ff607247db168728e5ef6`);
            const resJson = await response.json();
            setCity(resJson.main)
            // console.log(resJson);

        };

        
        fetchApi();
    }, [search] )


    return (
        <>
            <div className="box weather">
                <div className="inputData">
                    <input
                        type="search"
                        value={search}
                        className="inputField"
                        onChange= { (event) =>{ setSearch(event.target.value) } } />
                </div>

                {!city ? (
                    <p className="error">No Data Found</p>
                ) : (
                    <div>
                        <div className="info">
                        <h1>{search}</h1> 
                        <h1 className="temp">{city.temp}&deg;C </h1>  
                        <h3 className="high-low">Min: {city.temp_min}&deg;C/Max: {city.temp_max}&deg;C</h3>
                        </div>
                    </div>
                )}
                             
                

                

                
                    
                     
                
  
              
               
            </div>
            
        </>
    )
}

export default Tempapp
