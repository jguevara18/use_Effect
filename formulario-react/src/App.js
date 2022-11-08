import logo from './logo.svg';
import './App.css';
import Reloj from './Components/Reloj';








function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          FORMULARIO REACT
        </p>
         
        <Reloj/>
      </header>
    </div>
  );
}

export default App;
