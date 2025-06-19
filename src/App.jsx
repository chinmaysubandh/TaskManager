import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Login } from "./components/Auth/Login";
import { EmployeeDashboard } from "./components/Dashboard/EmployeeDashboard";
import { AdminDashboard } from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

function App() {
  const [user, setUser] = useState(null);
  const handleLogin = (email,password) => {
    if (email == 'admin@example.com' && password == '123') {
      console.log("Admin Login");
      setUser('admin')
      
    }
    else if (email == 'employee@example.com' && password == '123') {
      console.log("Employee login ");
      setUser('employee')
      
    } else {
      alert("Invalid Credentials");
      
    }
    
  } 
  

  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' && <AdminDashboard />}
      {user == 'employee' && <EmployeeDashboard/>}
    </div>
  );
}

export default App;
