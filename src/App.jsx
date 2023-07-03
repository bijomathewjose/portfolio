import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home'
import Pitch from './Pages/Pitch/Pitch';
function App() {
  return (
    <div className="App">
      <div className="box">
        <div className="TV">
          <Navbar />
          <div className="contain-non-nav">
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
