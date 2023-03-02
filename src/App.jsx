// import './App.css'
import React, { useState } from 'react';
import Loader from './components/loader';
import Home from './components/home';
import UseFetchData from './networkCalls/useFetchData';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Link
} from 'react-router-dom';
import Dashboard from './components/dashboard';
export const MyContext = React.createContext();

function App() {
  const data = UseFetchData("https://jsonplaceholder.typicode.com/users");
  const [projectNo, setprojectNo] = useState();
  const [projectName, setprojectName] = useState("");
  const x = {
    data: data,
    projectNo: projectNo,
    setprojectNo: setprojectNo,
    projectMembers: data,
    projectName: projectName,
    setprojectName: setprojectName
    // layoutNo: layoutNo,
    // setlayoutNo: setlayoutNo
  }
  return (
    data !== null ? <MyContext.Provider value={x}>
      <BrowserRouter>
        <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider> : <Loader />
  )
}

export default App;
