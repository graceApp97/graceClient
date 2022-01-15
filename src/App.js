import './assets/fonts/material-icon/css/material-design-iconic-font.min.css';
import './assets/scss/style.scss';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Fragment } from 'react';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AlertState from './context/alert/AlertState';
import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';
import Dashboard from './components/pages/Dashboard';
import PrivateRoute from './components/routing/PrivateRoue';
import Alert from './components/layout/Alerts';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AlertState>
      <AuthState>
        <Fragment>
          <Router>
            <div>
              <Alert />
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="**" component={Dashboard} />
              </Switch>
            </div>
          </Router>
        </Fragment>
      </AuthState>
    </AlertState>
  );
}

export default App;
