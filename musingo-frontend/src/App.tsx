import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
import { BrowserRouter } from "react-router-dom";
import NavbarComp from './components/NavbarComp';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <NavbarComp/>
        <Footer/>

      </div>
    </BrowserRouter>
  );
}


export default App;
