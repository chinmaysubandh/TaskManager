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
  const [userData,setUserData] = useContext(AuthContext);

  useEffect(() => {
    setLocalStorage();
    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUser(userData.data)

    }

  }, [userData])



  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123') {


      setUser({ role: 'admin' })
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))

    }
    else if (userData) {
      console.log("Employee login ");
      const employee = userData.find((e) => e.email == email && e.password == password)
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
