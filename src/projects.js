import React, { useEffect, useState } from 'react'

import axios from 'axios';
function ProjectsComponent() {

  const [result, setResult] = useState([]);
  const [regions,setRegions] = useState([]);
  const [userSelectedRegion,setUserSelectedRegion] = useState(null);
useEffect(()=> {
  const apiurl = "https://restcountries.com/v3.1/all";

  axios.get(apiurl).then(response => response)
  .then(response => {
    setResult(response.data);
    let countryregions =[];
    for(var i=0;i<response.data.length;i++){
      countryregions.push(response.data[i].region);
      // console.log('test',response[i].region);
    }
    countryregions = new Set(countryregions);

    setRegions([...countryregions]);
    
  })
  
})


const handleSelectedRegion= (regionselected)=> {
  
  setUserSelectedRegion(regionselected);
}
  return (

    <div>

    <select onChange={(e)=>handleSelectedRegion(e.target.value)}>
      {
        regions.length>0 ? regions.map((region)=> {
          return <option value={region}>{region}</option>
        }):"no data available"
      }
    </select>

    <div className='dashboard'>
      {
       (result && userSelectedRegion== null) && result.map((country)=> {
        return <div>
          <h3>{country.name.common}</h3>
          <img src={country.flags.png}/>
        </div>
       })
      }
 {
       result ? result.map((country)=> {
        return userSelectedRegion == country.region && <div>
          <h3>{country.name.common}</h3>
          <img src={country.flags.png}/>
        </div>
       }):"no data available"
      }
     
    </div>
    </div>
  )
}

export default ProjectsComponent