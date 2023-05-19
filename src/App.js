
import { Cafeterias } from './components/pages/cafeterias';
import { Inicio } from './components/pages/inicio';
import './App.css';
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import { Cafeteria } from './components/pages/cafeteria';
import { CartaCafeteria } from './components/pages/cafeteria/pagesCafeteria/carta';
import { PageRegistros } from './components/pages/PageRegistros/PageRegistros'
import { User } from './components/layouts/RegistrarCrear/User/User'
import { Cafe } from './components/layouts/RegistrarCrear/Cafe/Cafe'
import { Farm } from './components/layouts/RegistrarCrear/Farm/Farm'; 
import { Fincas } from './components/pages/fincas';

function App() {
  return (
  <div>
    
    <Routes>
    
    <Route path="/cafeterias/cafeteria/carta" element={<CartaCafeteria></CartaCafeteria>}></Route>
      <Route path="/cafeterias/cafeteria" element={<Cafeteria></Cafeteria>}></Route>
      <Route path="/" element={<Inicio></Inicio>}></Route>
      <Route path="/cafeterias" element={<Cafeterias></Cafeterias>}></Route>
      <Route path="/inicio" element={<Inicio></Inicio>}></Route>
      <Route path='/PageRegistros' element={<PageRegistros></PageRegistros>}></Route>
      <Route path='/User' element={<User></User>}></Route>
      <Route path='/Cafe' element={<Cafe></Cafe>}></Route>
      <Route path='/Farm' element={<Farm></Farm>}></Route>
      <Route path='/Fincas' element={<Fincas></Fincas>}></Route>
    </Routes>
    
    
  </div>

  );
}

export default App;
