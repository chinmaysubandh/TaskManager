import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Login } from "./components/Auth/Login";
import { EmployeeDashboard } from "./components/Dashboard/EmployeeDashboard";
import { AdminDashboard } from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";
import { data } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const AuthData = useContext(AuthContext);

  useEffect(() => {
    setLocalStorage();
    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUser(userData.data)

    }

  }, [AuthData])



  const handleLogin = (email, password) => {
    if (AuthData.admin.find((e) => e.email == email && e.password == password)) {
      const admin = AuthData.admin.find((e) => e.email == email && e.password == password)

      setUser({ role: 'admin' })
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: admin }))

    }
    else if (AuthData) {
      console.log("Employee login ");
      const employee = AuthData.employees.find((e) => e.email == email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUser(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      }


    } else {
      alert("Invalid Credentials");

    }

  }



  return (
    <div className="my-0">
      {user === null && <Login handleLogin={handleLogin} />}
      {user === 'admin' ? <AdminDashboard changeUser={setUser} data={loggedInUser} /> : (user === 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUser} /> : '')}
      {/* {user === 'admin' && loggedInUser && <AdminDashboard changeUser={setUser} data={loggedInUser} />}
      {user === 'employee' && loggedInUser && <EmployeeDashboard changeUser={setUser} data={loggedInUser} />} */}
      
      
    </div>
  );
}

export default App;
