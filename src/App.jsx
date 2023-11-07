import React from 'react';
import { MainPanel, SignUp, Dashboard, Employee, EmployeeDetail, EditEmployeeDetails } from './components';
import { Route, RouterProvider } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

const routesDefination = createRoutesFromElements(

  <Route>
    <Route path='/' element={<SignUp />} />
    <Route path='/main' element={<MainPanel />} children={[
      <Route path='/main' element={< Dashboard />} />,
      <Route path='/main/employee' element={<Employee />} />,
      <Route path='/main/employee/:id' element={<EmployeeDetail />} />,
      <Route path='/main/employee/:id/edit-details' element={<EditEmployeeDetails />} />
    ]} />
  </Route>
  
);

const router = createBrowserRouter(routesDefination);

function App() {

  return (
    <RouterProvider router={router} />
  );
};

export default App;