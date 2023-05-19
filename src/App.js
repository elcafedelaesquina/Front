
import { Cafeterias } from './components/pages/cafeterias';
import { Inicio } from './components/pages/inicio';
import './App.css';
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import { Cafeteria } from './components/pages/cafeteria';
import { CartaCafeteria } from './components/pages/cafeteria/pagesCafeteria/carta';
import { Finca } from './components/pages/finca';
import { Fincas } from './components/pages/fincas';
import { PageRegistros } from './components/pages/PageRegistros/PageRegistros'
import { User } from './components/layouts/RegistrarCrear/User/User'
import { Cafe } from './components/layouts/RegistrarCrear/Cafe/Cafe'
import { Farm } from './components/layouts/RegistrarCrear/Farm/Farm'; 


function App() {
  return (
  <div>
    
    <Routes>
      <Route path="/cafeterias" element={<Cafeterias></Cafeterias>}></Route>
      <Route path="/cafeterias/cafeteria/carta" element={<CartaCafeteria></CartaCafeteria>}></Route>
      <Route path="/cafeterias/cafeteria" element={<Cafeteria></Cafeteria>}></Route>
      <Route path='/fincas' element={<Fincas></Fincas>}></Route>
      <Route path='/fincas/finca' element={<Finca></Finca>}></Route>
      <Route path="/" element={<Inicio></Inicio>}></Route>
      <Route path="/inicio" element={<Inicio></Inicio>}></Route>
      <Route path='/PageRegistros' element={<PageRegistros></PageRegistros>}></Route>
      <Route path='/User' element={<User></User>}></Route>
      <Route path='/Cafe' element={<Cafe></Cafe>}></Route>
      <Route path='/Farm' element={<Farm></Farm>}></Route>
    </Routes>
    
  </div>

  );
}

export default App;
