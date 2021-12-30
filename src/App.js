import './App.css';
import HeaderComponents from './components/HeaderComponents/HeaderComponents';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeComponents from './components/HomeComponents/HomeComponent';
import AddEditPayrollComponent from './components/AddEditPayrollComponent/AddEditPayrollComponent';
import "./components/AddEditPayrollComponent/AddEditPayrollComponent.css"
import "./components/HeaderComponents/HeaderComponent.css"
import "./components/HomeComponents/HomeComponent.css"

function App() {
  return (
    <div className="App">
      <HeaderComponents/>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomeComponents/>}></Route>
          <Route path='/add-update' exact element={<AddEditPayrollComponent/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
