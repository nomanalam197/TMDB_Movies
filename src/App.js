import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';
import './Stylesheets/App.css'
import ListCompo from './Components/ListCompo';
import ListCompo2 from './Components/ListCompo2'
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from './Components/Home';
import Details from './Components/Details';
import DetailsTv from './Components/DetailsTv'
import Detailsme from './Components/Detailsme'

function App() {
  return (

    <div className='App'>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path="/Detailsme/:id" element={<Detailsme />} />
        </Route>
        <Route path='/MovieFinder' element={<Home />}></Route>
        <Route path="/MovieFinder/details/:what" element={<ListCompo />} />
        <Route path="/MovieFinder/:id" element={<Details />} />
        <Route path="/MovieFinder/tv/:id" element={<DetailsTv />} />
        <Route path="/MovieFinder/details/tv/:what" element={<ListCompo2 />} />
      </Routes>
    </div>

  );
}

export default App;
