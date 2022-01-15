import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

function Dashboard() {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>Dashboard under Development</h1>
    </div>
  );
}

export default Dashboard;
