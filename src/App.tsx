import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Cultyre from './pages/Cultyre';
import Map from './pages/Map';
import Popular from './pages/Popular';
import News from './pages/News';
import Uslugi from './pages/Uslugi';
import Login from './pages/Login/Login';
import Page404 from './pages/404/Page404';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='/cul' element={<Cultyre />}/>
        <Route path='/map' element={<Map />}/>
        <Route path='/pop' element={<Popular />}/>
        <Route path='/new' element={<News />}/>
        <Route path='/us' element={<Uslugi />} />
        <Route path='/login' element={<Login />}/>
        <Route path='*' element={<Page404 />} />
      </Route>
    </Routes>
  )
}

export default App
