
import { Cafeterias } from './components/pages/cafeterias';
import { Inicio } from './components/pages/inicio';
import './App.css';
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import { Cafeteria } from './components/pages/cafeteria';

function App() {
  return (
  <div>
    
    <Routes>
      <Route path="/cafeterias/cafeteria" element={<Cafeteria></Cafeteria>}></Route>
      <Route path="/" element={<Inicio></Inicio>}></Route>
      <Route path="/cafeterias" element={<Cafeterias></Cafeterias>}></Route>
      <Route path="/inicio" element={<Inicio></Inicio>}></Route>
    </Routes>
    
    
  </div>

  );
}

export default App;
