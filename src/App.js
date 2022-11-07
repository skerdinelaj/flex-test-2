import './App.css';
import Header from './Header';
import Main from './main/Main';
import 'antd/dist/antd.css';
import { data } from './data';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, useSearchParams } from 'react-router-dom';
import { Page2 } from './Page2';


function App() {
  const [tableData, setTableData] = useState(data)

  const statusCompleted = tableData.filter(tData=>{
    return tData.status === "Completed"
  })

  const statusOnHold = tableData.filter(tData=>{
    return tData.status === "On Hold"
  })

  const statusOnRoad = tableData.filter(tData=>{
    return tData.status === "On Road"
  })

  // const [searchParams] = useSearchParams();
  // console.log(searchParams);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
              <Header 
                tableData={tableData} 
                setTableData={setTableData} 
                statusCompleted = {statusCompleted}
                statusOnHold = {statusOnHold}
                statusOnRoad = {statusOnRoad}
              />
              <Main tableData={tableData} setTableData={setTableData}/>
            </>
          }/>
          <Route path='?status=:status' element={
            <>
              <Header 
                tableData={tableData} 
                setTableData={setTableData} 
                statusCompleted = {statusCompleted}
                statusOnHold = {statusOnHold}
                statusOnRoad = {statusOnRoad}
              />
              <Main tableData={tableData} setTableData={setTableData}/>
            </>
          }/>
          <Route path={`/Page2&id=:id`} element={<Page2/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
