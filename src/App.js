
import './App.css';
import { Route,Routes} from "react-router-dom"


import Home from './page/Home';
import FormComponent from './page/Form/Form';
import Submit from './page/Submit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path='form' element={<FormComponent/>}/>
          <Route path='submit' element ={<Submit/>}/>
          
        
        </Route>
        
      </Routes>
      
    </div>
  );
}

export default App;
