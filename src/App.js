import './App.css';
import { useState } from 'react';
import { countries, continents } from 'countries-list';

function App() {
  // declearing a state to save the submitted parameter 
  const [inputData, setInputData] = useState('')
  // declearing the second state to render the result
  const [result, setResult] = useState([])
  // function to set inputed parameter into state 
  const handlechange = (e) =>{
    setInputData(e.target.value)
  }
  const handlesearch = () =>{
    const countriesArray = Object.values(countries);
    const matched = countriesArray.filter((country)=> {
    return  JSON.stringify(country).toLowerCase().includes(inputData.toLowerCase())
    }) 
    setResult(matched)
    console.log(countriesArray)



  }
  

  


  return (
  
    <div className="App">
      <h1>Search your country code</h1>
      <div className="queryCountry">
        <form action="">
          <input type='text' onChange={handlechange} className='queryParameter' id='country_name' placeholder='Enter country name' required/><br/>
          <br/>
          <button type='button' onClick={handlesearch} className='search-btn'>Search</button>
        </form>
      </div>
      <div className="showQuery">
        {result.map((country)=>
        (<div>
          
          {country.name} is a country in {continents[country.continent]} with an international dialing code {country.phone} and {country.currency} as their legal tender
        
        </div>))}
      </div>
    </div>
  );
}

export default App;
