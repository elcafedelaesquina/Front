import { Cafeterias } from './components/pages/cafeterias';
import { Inicio } from './components/pages/inicio';
import { PagesRegistration } from './components/layouts/Pages_Registration/PagesRegistration';
import { User} from './components/layouts/registros/User/User';
import { Cafe } from './components/layouts/registros/Cafe/Cafe';
import { Farm } from './components/layouts/registros/Farm/Farm';
import './App.css';
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'

function App() {
  return (
  <div>
    <Routes>
      <Route path="/" element={<Inicio></Inicio>}></Route>
      <Route path="/cafeterias" element={<Cafeterias></Cafeterias>}></Route>
      <Route path="/inicio" element={<Inicio></Inicio>}></Route>
      <Route path="/PagesRegistration" element={<PagesRegistration></PagesRegistration>}></Route>
      <Route path="/User" element={<User></User>}></Route>
      <Route path="/Cafe" element={<Cafe></Cafe>}></Route>
      <Route path="/Farm" element={<Farm></Farm>}></Route>
    </Routes>    
  </div>

  );
}

export default App;
