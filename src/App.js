import React,{ useState } from 'react';
import './App.css';
import TheatreLists from './TheatreLists';

function App() {
  const [searchParams, setSearchParams] = useState({
    movieName: "",
    location: "",
  });
  const [showLists, setShowLists] = useState(false);
  const onMovieChange = (e) => {
    setSearchParams({ ...searchParams, movieName: e.target.value });
  };

  const onLocationChange = (e) => {
    setSearchParams({ ...searchParams, location: e.target.value });
  };

  const searchHandler = () => {
    if(searchParams.movieName !== "" && searchParams.location !== ""){
      setShowLists(true)
    }
    else{
      alert("Please enter correct details")
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        Find Theatre
      </header>
      <div className="main-content">
        <div className="find-content">
            <div>
              Enter Movie's name: <input type="text" value={searchParams.movieName} onChange={onMovieChange} />
            </div>
            <div>
              Enter Theatre location: <input type="text" value={searchParams.location} onChange={onLocationChange} />
            </div>
            <div>
              <button onClick={searchHandler}>Search</button>
            </div>
        </div>
        {showLists && <TheatreLists name={searchParams.movieName} location={searchParams.location}/>}
      </div>
      
    </div>
  );
}

export default App;
