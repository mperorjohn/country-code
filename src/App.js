import './App.css';

function App() {
  return (
    <div className="App">
      <div className="queryCountry">
        <form action="">
          <input type='text' className='queryParameter' placeholder='Search country code'/><br/>
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
