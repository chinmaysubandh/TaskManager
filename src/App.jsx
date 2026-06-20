import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Login } from "./components/Auth/Login";
import { EmployeeDashboard } from "./components/Dashboard/EmployeeDashboard";
import { AdminDashboard } from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const { userData = [] } = useContext(AuthContext) || {};

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser.role);
      setLoggedInUser(parsedUser.data || null);
    }
  }, []);

  useEffect(() => {
    if (!user || user !== 'employee' || !loggedInUser?.email || !userData.length) {
      return;
    }

    const freshEmployee = userData.find((employee) => employee.email === loggedInUser.email);

    if (freshEmployee && JSON.stringify(freshEmployee) !== JSON.stringify(loggedInUser)) {
      setLoggedInUser(freshEmployee);
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'employee', data: freshEmployee })
      );
    }
  }, [user, loggedInUser, userData]);

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      const adminUser = { name: 'Admin Chinmay', email: 'admin@example.com' };
      setUser('admin');
      setLoggedInUser(adminUser);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: adminUser }));
      return;
    }

    const storedEmployees = JSON.parse(localStorage.getItem('employees') || '[]');
    const employeeList = userData.length > 0 ? userData : storedEmployees;
    const employee = employeeList.find((e) => e.email === email && e.password === password);

    if (employee) {
      setUser('employee');
      setLoggedInUser(employee);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className="my-0">
      {user === null && <Login handleLogin={handleLogin} />}
      {user === 'admin' ? (
        <AdminDashboard changeUser={setUser} data={loggedInUser} />
      ) : user === 'employee' ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUser} />
      ) : null}
    </div>
  );
}

export default App;
