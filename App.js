import logo from './logo.svg';
import './App.css';
import HelloCls from './components/HelloCls';
import HelloFun from './components/HelloFun';
import ComplexComp from './components/ComplexComp';
import { One, Three, Two } from './components/multi_comp';
import PropClsComp from './components/PropsClsComp';
import PropsFunComp from './components/PropsFunComp';
import StateClscomp from './components/StateClsComp';
import StateFunComp from './components/StateFunComp';
import EmpForm from './components/EmpForm';
import CompStyle from './components/CompStyle';
import DynamicStyle from './components/DynamicStyle';
import MountingPhase from './components/MountingPhase';
import UpdatingPhase from './components/UpdatingPhase';
import UsingEffectComp from './components/UsingEffectComp';
import ArrayAddition from './components/ArrayAddition';
import { Link, Route, Routes } from 'react-router-dom';
import WrongUrl from './components/WrongUrl';
import HomeComp from './components/HomeComp';
import GetRESTAPI from './components/GetRESTAPI';
import EditEmp from './components/EditEmp';
import FormValidation from './components/FormValidation';
import { ErrorBoundary } from 'react-error-boundary';


function App() {
  return (
    <div>
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>  */}
        {/* <h1> Welcome to React JS </h1>
        <HelloCls />
      <HelloFun /> 
         <ComplexComp /> 
         <One />
         <Two />
         <Three /> 
         <PropClsComp nm="bakul" />
         <PropsFunComp /> 
         <StateClscomp />
         <StateFunComp /> 
         
         <CompStyle />
         <DynamicStyle /> 
         <EmpForm />  
         <MountingPhase /> 
         <UpdatingPhase /> 
         <UsingEffectComp /> 
         <ArrayAddition /> */}

         <ul className="nav navbar">
            <li className="nav-item">
                <Link to="/hello" className="nav-link">Hello comp</Link>
            </li>
            <li className="nav-item">
                <Link to="/timer" className="nav-link">Timer Comp</Link>
            </li>
            <li className="nav-item">
                <Link to="/empform" className="nav-link">Emp Form</Link>
            </li>
            <li className="nav-item">
                <Link to="/empdata" className="nav-link">Emp Data</Link>
            </li>
            <li className="nav-item">
                <Link to="/empvalid" className="nav-link">Emp valid form</Link>
            </li>

         </ul>  


         <Routes>
            <Route path="/" element={ <HomeComp/> } />
            <Route path="/hello" element={<HelloFun/> }  />
            <Route path="/timer" element={ <UsingEffectComp />} />
            <Route path="/empform" element={ <EmpForm/> } />
            <Route path="/styling" element={ <DynamicStyle />} />
            <Route path="/empdata" element={ <GetRESTAPI/> } />
            <Route path='/editemp' element={ 
              <ErrorBoundary fallbackRender={()=>{
                return (
                  <h1>Something went wrong</h1> 
                )
              }}>
                 <EditEmp />
              </ErrorBoundary>
            
            } />
            <Route path='/empvalid' element={ <FormValidation /> } />
            <Route path='*' element={ <WrongUrl/> } />
         </Routes>
      </header>
    </div>
  );
}

export default App;
