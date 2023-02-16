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
  // string
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
          <li className='list-output'>
                {country.name} is a country in {continents[country.continent]} and  <span className='changeLook'>{country.capital}</span> as it's capital with an international dialing code <span>{country.phone}</span> and {country.currency} as their legal tender. Spoken language is {country.languages}  
              .
          </li>
        </div>))}
      </div>
    </div>
  );
}

export default App;
