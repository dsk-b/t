// import './App.css'
import React, { useState } from 'react';
import Loader from './components/loader';
import Dashboard from './components/dashboard';
import UseFetchData from './networkCalls/useFetchData';

export const MyContext = React.createContext();

function App() {
  const data = UseFetchData();
  const [projectNo,setprojectNo] = useState();
  const x = {
    data: data,
    projectNo : projectNo,
    setprojectNo : setprojectNo
    // layoutNo: layoutNo,
    // setlayoutNo: setlayoutNo
  }
  return (
    data !== null ? <MyContext.Provider value={x}>
      <Dashboard />
    </MyContext.Provider> : <Loader />
  )
}

export default App;
