
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
import { TousFincas } from './components/pages/finca/pagesFinca/tour';
import { User } from './components/layouts/RegistrarCrear/User/User'
import { Cafe } from './components/layouts/RegistrarCrear/Cafe/Cafe'
import { Farm } from './components/layouts/RegistrarCrear/Farm/Farm'; 
import { CafeteriaCreateProduct } from './components/layouts/CafeteriasAdmin/FormAdmincafeteriaCreateProduct/CafeteriaCreateProduct';
import { ProductsCafeteria } from './components/pages/cafeteria/pagesCafeteria/products';
import { Carrito } from './components/pages/cafeteria/pagesCafeteria/carrito';
import { EditarPerfilAdmin } from './components/layouts/CafeteriasAdmin/EditarPerfilAdmin/EditarPerfilAdmin';
import { CrearAdministradorCafeteria } from './components/layouts/CafeteriasAdmin/CrearAdministradorCafeteria/CrearAdministradorCafeteria'
import { EditarPerfilUsuario } from './components/layouts/UsuarioAdmin/EditarPerfilUsuario/EditarPerfilUsuario'
import { CafeteriaCreateMenuProduct } from './components/layouts/CafeteriasAdmin/crearProductoMenu/CafeteriaCreateProduct';
import { ChatModal } from './components/layouts/chat';
import { Compras } from './components/pages/verCompras';
import { Recuperar } from './components/layouts/RecuperarContraseña/Recuperar';
import { Verificar } from './components/layouts/RecuperarContraseña/Verificar/Verificar';

import { Ordenes } from './components/layouts/CafeteriasAdmin/verOrdenes';
import { ChatAdmin } from './components/layouts/CafeteriasAdmin/chatAdmin';
function App() {
  return (
  <div> 
    <Routes>
    <Route path="/ordenes" element={<Ordenes></Ordenes>}></Route>
    <Route path="/compras" element={<Compras></Compras>}></Route>
    <Route path="/chatAdmin" element={<ChatAdmin></ChatAdmin>}></Route>
    <Route path="/chat" element={<ChatModal></ChatModal>}></Route>
    <Route path="/CrearMenuProducto" element={<CafeteriaCreateMenuProduct></CafeteriaCreateMenuProduct>}></Route>
      <Route path="/cafeterias" element={<Cafeterias></Cafeterias>}></Route>
      <Route path="/cafeterias/cafeteria/carta" element={<CartaCafeteria></CartaCafeteria>}></Route>
      <Route path="/cafeterias/cafeteria/productos" element={<ProductsCafeteria></ProductsCafeteria>}></Route>
      <Route path="/cafeterias/cafeteria/carrito" element={<Carrito></Carrito>}></Route>
      <Route path="/cafeterias/cafeteria" element={<Cafeteria></Cafeteria>}></Route>
      <Route path='/fincas' element={<Fincas></Fincas>}></Route>
      <Route path='/fincas/finca' element={<Finca></Finca>}></Route>
      <Route path='/fincas/finca/tours' element={<TousFincas></TousFincas>}></Route>
      <Route path="/" element={<Inicio></Inicio>}></Route>
      <Route path="/inicio" element={<Inicio></Inicio>}></Route>
      <Route path='/PageRegistros' element={<PageRegistros></PageRegistros>}></Route>
      <Route path='/User' element={<User></User>}></Route>
      <Route path='/Cafe' element={<Cafe></Cafe>}></Route>
      <Route path='/Farm' element={<Farm></Farm>}></Route>
      <Route path='/CafeteriaCreateProduct' element={<CafeteriaCreateProduct></CafeteriaCreateProduct>}></Route>
      <Route path='/EditarPerfilAdmin' element={<EditarPerfilAdmin></EditarPerfilAdmin>}></Route>
      <Route path='/CrearAdministradorCafeteria' element={<CrearAdministradorCafeteria></CrearAdministradorCafeteria>}></Route>
      <Route path='/EditarPerfilUsuario' element={<EditarPerfilUsuario></EditarPerfilUsuario>}></Route>
      <Route path='/Recuperar' element={<Recuperar></Recuperar>}></Route>
      <Route path='/Verificar' element={<Verificar></Verificar>}></Route>
    </Routes>   
  </div>

  );
}

export default App;
