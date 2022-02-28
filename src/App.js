import './App.css';
import {Map} from './components/Map';
function App() {
  return (
    <div className="App">
      <h1>Weather</h1>
      <div style={{ width: '80%', height: '600px', margin: '0 auto'}}>
        <h1>Bonjour</h1>
        <Map />
      </div>
    </div>
  );
}

export default App;
