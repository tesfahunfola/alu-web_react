import logo from './hbnb-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

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
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <button type="submit">OK</button>
          </form>
      </boby>
      <hr className='hr-2'/>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;
