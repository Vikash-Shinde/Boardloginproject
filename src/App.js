import logo from './logo.svg';
import './App.css';
import Loginpage from './Components/Loginpage';
import Dashgrid from './Components/Dashgrid';
import {  Routes,  Route} from "react-router-dom";


function App() {
  return (
    

    <Routes>
            <Route  path="/" element={ <Loginpage/>} />
            <Route  path="/dashboard" element={<Dashgrid/>  } />
          </Routes>
    
    
  );
}

export default App;
