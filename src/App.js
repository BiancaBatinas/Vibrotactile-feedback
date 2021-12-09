import logo from './logo.svg';
import './App.css';
import Vireo from './Components/Patterns/Vibratie1';
function App() {
  const Vib =()=> {
    if ('vibrate' in window.navigator)
    window.navigator.vibrate(100);
else
    console.log("pa");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button> DA</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
