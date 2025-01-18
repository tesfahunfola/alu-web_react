import logo from './hbnb-logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="hbnb-logo" alt="hbnb-logo" />
        <h1>School dashboard</h1>
      </header>
      <hr className='hr-1'/>
      <boby className="App-body">
        <p> 
          Login to access the full dashboard.
        </p>
      </boby>
      <hr className='hr-2'/>
      <footer className="App-footer">
        <p>
          Copyright 2020 - holberton School
        </p>
      </footer>
    </div>
  );
}

export default App;
