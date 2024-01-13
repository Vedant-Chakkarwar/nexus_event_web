import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import EventList from './components/EventList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={EventList}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;