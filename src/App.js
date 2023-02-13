import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Search your country code</h1>
      <div className="queryCountry">
        <form action="">
          <input type='text' className='queryParameter' placeholder='Enter country'/><br/>
          <br/>
          <button type='submit' className='search-btn'>Search</button>
        </form>
      </div>
      <div className="showQuery">

      </div>

    </div>
  );
}

export default App;
