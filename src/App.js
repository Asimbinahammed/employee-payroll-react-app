import './App.scss';
import HeaderComponents from './components/HeaderComponents/HeaderComponent';
//import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeComponents from './components/HomeComponents/HomeComponent';
import AddEditPayrollComponent from './components/AddEditPayrollComponents/AddEditPayrollComponent';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <HeaderComponents/>
      <Router>
        <Switch>
          <Route path="/" exact component={HomeComponents}></Route>
          <Route path="/add-update/:id" component={AddEditPayrollComponent}></Route>
        </Switch>
      </Router>

     {/*
    


      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<HomeComponents/>}></Route>
        <Route path='/add-update/' exact element={<AddEditPayrollComponent/>}></Route>

        
      </Routes>
    </BrowserRouter>


      <Routes>
          <Route path="/" exact component={HomeComponents}></Route>
          <Route path="/add-update/:id" component={AddEditPayrollComponent}></Route>
        </Routes>
    */}

    
    </div>
  );
}

export default App;
