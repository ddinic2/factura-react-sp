import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NavBar from './components/nav-bar/NavBar';
import Service from './service/Service';
import 'bootstrap/dist/css/bootstrap.min.css';
import InvoiceInfoList from './components/invoice-info/InvoiceInfoList';
import PartnerList from './components/partners/PartnerList';
import MyCompany from './components/my-company/MyCompany';
import ServiceItems from './components/service-items/ServiceItems';
import EditService from './components/service-items/EditService';


let App = () => {
  let svc = new Service;
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    getCurrentUser();
  }, [])

  async function getCurrentUser(): Promise<any> {
    let us = await svc.getCurrentUser();
    setCurrentUser(us);
    console.log('currentUser', currentUser);
  }



  return (
    <>

      <BrowserRouter basename='/'>
        <NavBar />
        <Routes>
          <Route path="/" element={<InvoiceInfoList />}></Route>
          <Route path='partners' element={<PartnerList />}></Route>
          <Route path='my-company' element={<MyCompany/>}></Route>
          <Route path='service-items' element={<ServiceItems/>}>
            <Route path=":id" element={<EditService />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

