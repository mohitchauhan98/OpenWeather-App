import './App.css';
import Weather from './weather/Weather';
import WeatherR from './weatherR/WeatherR';

function App() {
  return (
        <div className="App">
          <Weather />
        </div>
  );
}

export default App;

//https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
// api key = 4e3a55bd81316b35b29b57d4ee4ea850