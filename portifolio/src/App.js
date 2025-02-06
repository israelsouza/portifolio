import FundoPrincipal from './components/home view/fundoPrincipal';
import Header from './components/home view/header';
import './App.css';

// reaproveitar estrutura
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <FundoPrincipal />

      < Outlet />


    </>
  );
}

export default App;
