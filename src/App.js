import { Header } from './components/layouts/header/header';
import { Footer } from './components/layouts/footer/footer';
import { Cafeterias } from './components/pages/cafeterias';
import { Inicio } from './components/pages/inicio';
import './App.css';
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'

function App() {
  return (
  <div>
    <Header></Header>
    <Routes>
      <Route path="/inicio" element={<Inicio></Inicio>}></Route>
      <Route path="/cafeterias" element={<Cafeterias></Cafeterias>}></Route>
      <Route path="/inicio" element={<Inicio></Inicio>}></Route>
    </Routes>
    
    <Footer></Footer>
  </div>

  );
}

export default App;
