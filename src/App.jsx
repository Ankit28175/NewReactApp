import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/login';
import EmployeeDashboard from './components/dashboard/EmployeeDashboard';
import AdminDashboard from './components/dashboard/AdminDashboard';
import { AuthData } from './context/AuthContext';

const App = () => {
  const [user, setUser] = useState(null); 
  const [logedinUserData, setLogedinUserData] = useState(null);
  const mainData = useContext(AuthData);
  
  useEffect(() => {
    
    const loggedinUser = localStorage.getItem("LoggedinUser");
    if (loggedinUser) {
      const parsedUser = JSON.parse(loggedinUser); 
      setUser(parsedUser.role); 
    }
  }, [mainData]); 

  const handleLogin = (email, password) => {
    
    if (mainData) {
      
      const admin = mainData.admin.find((e) => e.email === email && e.password === password);
      if (admin) {
        setLogedinUserData(admin);
        localStorage.setItem('LoggedinUser', JSON.stringify({ role: 'admin' })); // Store user data
        setUser('admin');
        return;
      }

      const employee = mainData.employee.find((e) => e.email === email && e.password === password);
      if (employee) {
        setLogedinUserData(employee);
        localStorage.setItem('LoggedinUser', JSON.stringify({ role: 'employee' }));
        setUser('employee');
        return;
      }
    }
    
    alert('Invalid login');
  };

  return (
    <>
      {!user ? <Login HandleLogin={handleLogin} /> : null}
      {user === 'admin' ? <AdminDashboard changeUser={setUser} data={logedinUserData} /> : null}
      {user === 'employee' ? <EmployeeDashboard  changeUser={setUser} data={logedinUserData} /> : null}
    </>
  );
};

export default App;
