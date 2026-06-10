import {
BrowserRouter,
Routes,
Route
}
from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import CustomerForm from "./pages/CustomerForm";
import CustomerEdit from "./pages/CustomerEdit";
import AccountList from "./Accounts/AccountList";
import CreateAccount from "./Accounts/CreateAccount";

function App() {

 return (

   <BrowserRouter>

      <Routes>

         <Route
           path="/"
           element={<Login/>}
         />

         <Route
           path="/dashboard"
           element={<Dashboard/>}
         />
         <Route
 path="/customers"
 element={<Customers/>}
/>

<Route
 path="/customers/add"
 element={<CustomerForm/>}
/>
<Route
 path="/customers/edit/:id"
 element={<CustomerEdit />}
/>
<Route
 path="/accounts"
 element={<AccountList/>}
/>

<Route
 path="/accounts/create"
 element={<CreateAccount/>}
/>

      </Routes>

   </BrowserRouter>

 );
}

export default App;