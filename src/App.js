import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Branch from './pages/branchForm/branch';
import Home from './pages/home/home';
import Staff from './pages/staff/staff';
import Client from './pages/client/client';
import PropertyForRent from './pages/propertyForRent/propertyForRent';
import PrivateOwner from './pages/privateOwner/privateOwner';
import StaffView from './views/staff'
import BranchView from './views/branch'
import PropertyView from './views/property'
import Lease from './pages/lease/lease'


function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/branch" element={<Branch />}/>
        <Route path="/staff" element={<Staff />}/>
        <Route path="/client" element={<Client />}/>        
        <Route path="/propertyForRent" element={<PropertyForRent/>}/>
        <Route path="/privateOwner" element={<PrivateOwner/>}/>
        <Route path="/staff-view" element={<StaffView/>}/>
        <Route path="/branch-view" element={<BranchView/>}/>
        <Route path="/property-view" element={<PropertyView/>}/>
        <Route path="/lease/:propertyno" element={<Lease />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
