import './App.css';
import AddObject from './pages/AddObject';
import About from './pages/About';
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <Router>
        <div>
        <nav class="navbar navbar-inverse navbar-collapse" id="head-navbar">
          <ul class="nav navbar-nav">
            <li><NavLink style={({isActive}) =>{ return {display:"block", margin: "1rem 0", color: isActive ? "red": ""};}}
              to= "/"> Home
              </NavLink></li>
            <li><NavLink style={({isActive}) =>{ return {display:"block", margin: "1rem 0", color: isActive ? "red": ""};}}
              to= "/createobj"> Edit Object
              </NavLink></li>
            <li><NavLink style={({isActive}) =>{ return {display:"block", margin: "1rem 0", color: isActive ? "red": ""};}}
              to= "/about"> About
              </NavLink>  </li>
          </ul>
        </nav>
      </div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/createobj" element={<AddObject />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;