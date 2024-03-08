import { Container } from '@mui/material';
import './App.css';
//import Crud from './components/crud';
import NavBar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './page/home';
import Clima from './page/clima';
import Crud from './page/crud';
import PokemonList from './page/pokemonList';

function App() {
  return (
    <>
      <NavBar/>
      <Container sx={{mt:5}} >
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/clima' element={<Clima/>}/>
          <Route path='/crud' element={<Crud/>}/>
          <Route path='/pokemon-list' element={<PokemonList/>}/>
        </Routes>
      </Container>
    </>
   
    
  );
}

export default App;
